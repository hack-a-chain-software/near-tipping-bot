# Tipping bot contract

This contract handles all on chain logic and analytics for the tipping bot.

It does not implement any storage cost logic, meaning that the owner of the contract must provision all storage deposits for the proper functioning of the contract. Storage is mostly required for analytics functionalities.

## Tipping functions

1. `transfer_payment`
Arguments:
 - receiver -> NEAR AccountId of the user that will receive the tip
 - sender_discord -> String representing the discord account of the user sending the tip
 - receiver_discord -> String representing the discord account of the user receiving the tip
 - server_discord -> String representing the discord account of the server through which the transaction was initialized

 In this method you must pass the amount of native NEAR that you want to tip as a deposit

2. `ft_transfer_call`
ft_transfer_call must be called on the token contract (not on the tipping bot contract) with the following parameters to tip using a NEP-141 token.
Arguments:
 - receiver_id -> AccountId of the tipping bot contract
 - amount -> String amount of tokens to be tipped
 - msg -> String stringfied version of object:
    ```
    {
        receiver: string - NEAR AccountId of the user that will receive the tip,
        sender_discord: string - representing the discord account of the user sending the tip,
        receiver_discord: string - representing the discord account of the user receiving the tip,
        server_discord: string - representing the discord account of the server through which the transaction was initialized,
    }
    ```

## Analytics functions

1. `view_history`
Shows how many tokens a user has donated in a specific server
Arguments:
 - user -> String representing the discord account of the user that sent the tips
 - server -> String representing the discord account of the server through which the transaction was initialized
 - coin -> AccountId of the token you want to get data from (in case it is native near use `$NEAR`)

Returns `U128`

2. `view_last_server_tips`
Returns the last 5 tipping transactions from a server
Arguments:
 - server -> String representing the discord account of the server through which the transaction was initialized

Returns `Vec<LastTransactionsItem>`

3. `view_ranking`
Returns rank of 5 biggest donnors of a specific token in a specific server.
Arguments:
 - server -> String representing the discord account of the server through which the transaction was initialized
 - coin -> AccountId of the token you want to get data from (in case it is native near use `$NEAR`)

Returns `Vec<RankingItem>`