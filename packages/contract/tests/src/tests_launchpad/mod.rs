#[cfg(test)]
mod tests {

    use std::collections::HashMap;

    use crate::*;

    /// integration test happy case - normal listing
    /// aims to test full aplication fliw for a single listing
    /// 1. Initialize tipping-bot contract
    /// 2. Initialize sample NEP-141 contract to be used within tipping-bot
    /// 3. Fund 3 different accounts
    /// 4. Perform a large amount of transactions and
    ///    (a) assert that they work properly
    ///    (b) assert that analytics for them are generated correctly
    #[tokio::test]
    async fn test_normal_flow() -> anyhow::Result<()> {
        let worker: Worker<Sandbox> = workspaces::sandbox().await?;

        let root = worker.root_account().unwrap();

        // CREATE USER ACCOUNTS
        let owner = create_user_account(&root, "owner").await;
        let user_1 = create_user_account(&root, "user1").await;
        let user_2 = create_user_account(&root, "user2").await;
        let user_3 = create_user_account(&root, "user3").await;
        let user_4 = create_user_account(&root, "user4").await;
        let user_5 = create_user_account(&root, "user5").await;
        let user_6 = create_user_account(&root, "user6").await;
        let user_7 = create_user_account(&root, "user7").await;
        let user_8 = create_user_account(&root, "user8").await;
        let user_9 = create_user_account(&root, "user9").await;

        let dummy_receiver = create_user_account(&root, "receiver").await;

        // 1. Initialize tipping-bot contract
        let tipping_bot_wasm = get_wasm("near_tipping_bot.wasm")?;
        let tipping_bot = deploy_contract(&root, "tipping_bot", &tipping_bot_wasm).await;
        initialize_tipping_bot(&root, &tipping_bot, &owner).await;

        // 2. Initialize sample NEP-141 contract to be used within tipping-bot
        let ft_wasm = get_wasm("test_token.wasm")?;
        let ft_token = deploy_contract(&root, "ft_contract", &ft_wasm).await;
        initialize_ft_contract(&ft_token, &owner).await;

        // 3. Fund 3 different accounts
        bulk_register_storage(
            vec![
                &owner,
                &user_1,
                &user_2,
                &user_3,
                &user_4,
                &user_5,
                &user_6,
                &user_7,
                &user_8,
                &user_9,
                tipping_bot.as_account(),
                &dummy_receiver,
            ],
            vec![&ft_token],
        )
        .await?;

        ft_transfer(&owner, &ft_token, &user_1, FT_INITIAL_USER_BALANCE).await;
        ft_transfer(&owner, &ft_token, &user_2, FT_INITIAL_USER_BALANCE).await;
        ft_transfer(&owner, &ft_token, &user_3, FT_INITIAL_USER_BALANCE).await;
        ft_transfer(&owner, &ft_token, &user_4, FT_INITIAL_USER_BALANCE).await;
        ft_transfer(&owner, &ft_token, &user_5, FT_INITIAL_USER_BALANCE).await;
        ft_transfer(&owner, &ft_token, &user_6, FT_INITIAL_USER_BALANCE).await;
        ft_transfer(&owner, &ft_token, &user_7, FT_INITIAL_USER_BALANCE).await;
        ft_transfer(&owner, &ft_token, &user_8, FT_INITIAL_USER_BALANCE).await;
        ft_transfer(&owner, &ft_token, &user_9, FT_INITIAL_USER_BALANCE).await;

        // 4. Perform a large amount of transactions and
        //    (a) assert that they work properly
        //    (b) assert that analytics for them are generated correctly

        let transfers = [
          (&user_1, 10), 
          (&user_2, 11), 
          (&user_3, 30), 
          (&user_2, 12),
          (&user_4, 100),
          (&user_5, 70),
          (&user_6, 90),
          (&user_7, 500),
          (&user_8, 600),
          (&user_9, 10),
          (&user_9, 1000),
        ];

        let mut history: HashMap<String, u128> = HashMap::new();
        let mut previous_5: Vec<LastTransactionsItem> = vec![];

        for value in transfers {
            let user = value.0.id().to_string();
            let receiver = dummy_receiver.id().to_string();
            let server = "XsDfg".to_string();
            let token = "$NEAR".to_string();

            transfer_tip_near(
                value.0,
                &tipping_bot,
                &dummy_receiver,
                user.clone(),
                receiver.clone(),
                server.clone(),
                value.1,
            )
            .await;

            let previous_value = history.get(&user).unwrap_or(&0);
            history.insert(user.clone(), previous_value + value.1);

            previous_5.insert(
                0,
                LastTransactionsItem {
                    sender: user.clone(),
                    receiver: receiver.clone(),
                    coin: token.clone(),
                    amount: value.1.to_string(),
                },
            );

            if previous_5.len() > 5 {
                previous_5.pop();
            }

            let mut ranking: Vec<RankingItem> = vec![];
            for (key, value) in history.clone().into_iter() {
                let item = RankingItem {
                    user: key,
                    amount: value.to_string(),
                };

                if ranking.len() == 0 {
                    ranking.push(item);
                } else {
                    let mut index = 0;
                    let mut user_inserted = false;
                    while index < ranking.len() {
                        if value > ranking.get(index).unwrap().amount.parse::<u128>().unwrap() {
                            ranking.insert(index, item.clone());
                            user_inserted = true;
                            break;
                        }
                        index += 1;
                    }

                    if ranking.len() > 5 {
                        ranking.pop();
                    } else if ranking.len() < 5 && !user_inserted {
                        ranking.push(item);
                    }
                }
            }

            assert_eq!(
                view_history(&tipping_bot, user.clone(), server.clone(), token.clone()).await?,
                history.get(&user).unwrap_or(&0).to_string()
            );

            assert_eq!(
                view_last_server_tips(&tipping_bot, server.clone()).await?,
                previous_5
            );

            println!(
                "{:#?}",
                view_ranking(&tipping_bot, server.clone(), token.clone()).await?
            );
            println!("{:#?}", ranking);
            println!("-----------");

            assert_eq!(
                view_ranking(&tipping_bot, server.clone(), token.clone()).await?,
                ranking
            );
        }

        let mut history: HashMap<String, u128> = HashMap::new();

        for value in transfers {
            let user = value.0.id().to_string();
            let receiver = dummy_receiver.id().to_string();
            let server = "XsDfg".to_string();
            let token = ft_token.id().to_string();


            transfer_tip_nep141(
                value.0,
                &tipping_bot,
                &ft_token,
                &dummy_receiver,
                user.clone(),
                receiver.clone(),
                server.clone(),
                value.1,
            )
            .await;

            let previous_value = history.get(&user).unwrap_or(&0);
            history.insert(user.clone(), previous_value + value.1);

            previous_5.insert(
                0,
                LastTransactionsItem {
                    sender: user.clone(),
                    receiver: receiver.clone(),
                    coin: token.clone(),
                    amount: value.1.to_string(),
                },
            );

            if previous_5.len() > 5 {
                previous_5.pop();
            }

            let mut ranking: Vec<RankingItem> = vec![];
            for (key, value) in history.clone().into_iter() {
                let item = RankingItem {
                    user: key,
                    amount: value.to_string(),
                };

                if ranking.len() == 0 {
                    ranking.push(item);
                } else {
                    let mut index = 0;
                    let mut user_inserted = false;
                    while index < ranking.len() {
                        if value > ranking.get(index).unwrap().amount.parse::<u128>().unwrap() {
                            ranking.insert(index, item.clone());
                            user_inserted = true;
                            break;
                        }
                        index += 1;
                    }

                    if ranking.len() > 5 {
                        ranking.pop();
                    } else if ranking.len() < 5 && !user_inserted {
                        ranking.push(item);
                    }
                }
            }

            assert_eq!(
                view_history(&tipping_bot, user.clone(), server.clone(), token.clone()).await?,
                history.get(&user).unwrap_or(&0).to_string()
            );

            assert_eq!(
                view_last_server_tips(&tipping_bot, server.clone()).await?,
                previous_5
            );

            println!(
                "{:#?}",
                view_ranking(&tipping_bot, server.clone(), token.clone()).await?
            );
            println!("{:#?}", ranking);
            println!("-----------");

            assert_eq!(
                view_ranking(&tipping_bot, server.clone(), token.clone()).await?,
                ranking
            );
        }

        anyhow::Ok(())
    }
}
