use serde::{Serialize, Deserialize};
use serde_json::json;
use workspaces::result::ExecutionResult;

use crate::*;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq, Clone)]
pub struct RankingItem {
    pub user: String,
    pub amount: String,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct LastTransactionsItem {
    pub sender: String,
    pub receiver: String,
    pub coin: String,
    pub amount: String,
}


pub async fn initialize_tipping_bot(
    sender: &Account,
    contract: &Contract,
    owner: &Account
) -> ExecutionResult<String> {
    transact_call(
        sender
          .call(contract.id(), "new")
          .args_json(json!({
            "owner_id": owner.id(),
          }))
          .gas(GAS_LIMIT),
      )
      .await
}

pub async fn transfer_tip_near(
    sender: &Account,
    contract: &Contract,
    receiver: &Account,
    sender_discord: String,
    receiver_discord: String,
    server_discord: String,
    amount: u128
) -> ExecutionResult<String> {
    transact_call(
        sender
          .call(contract.id(), "transfer_payment")
          .args_json(json!({
            "receiver": receiver.id(),
            "sender_discord": sender_discord,
            "receiver_discord": receiver_discord,
            "server_discord": server_discord,
          }))
          .deposit(amount)
          .gas(GAS_LIMIT),
      )
      .await
}

pub async fn transfer_tip_nep141(
    sender: &Account,
    contract: &Contract,
    token_contract: &Contract,
    receiver: &Account,
    sender_discord: String,
    receiver_discord: String,
    server_discord: String,
    amount: u128
) -> ExecutionResult<String> {
    transact_call(
        sender
          .call(token_contract.id(), "ft_transfer_call")
          .args_json(json!({
            "receiver_id": contract.id(),
            "amount": amount.to_string(),
            "memo": null,
            "msg": json!({
                "receiver": receiver.id(),
                "sender_discord": sender_discord,
                "receiver_discord": receiver_discord,
                "server_discord": server_discord,
            }).to_string()
          }))
          .deposit(1)
          .gas(GAS_LIMIT),
      )
      .await
}

pub async fn view_history(
    contract: &Contract,
    user: String,
    server: String,
    coin: String,
) -> anyhow::Result<String> {
    anyhow::Ok(
        contract
          .view(
            "view_history",
            json!({
                "user": user,
                "server": server,
                "coin": coin,
            })
            .to_string()
            .into_bytes(),
          )
          .await?
          .json()?,
      )
}

pub async fn view_last_server_tips(
    contract: &Contract,
    server: String,
) -> anyhow::Result<Vec<LastTransactionsItem>> {
    anyhow::Ok(
        contract
          .view(
            "view_last_server_tips",
            json!({
                "server": server,
            })
            .to_string()
            .into_bytes(),
          )
          .await?
          .json()?,
      )
}

pub async fn view_ranking(
    contract: &Contract,
    server: String,
    coin: String,
) -> anyhow::Result<Vec<RankingItem>> {
    anyhow::Ok(
        contract
          .view(
            "view_ranking",
            json!({
                "server": server,
                "coin": coin,
            })
            .to_string()
            .into_bytes(),
          )
          .await?
          .json()?,
      )
}
