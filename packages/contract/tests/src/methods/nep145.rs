use serde_json::json;
use workspaces::{Account, Contract, result::ExecutionResult};

use crate::*;

pub async fn storage_withdraw(
  contract: &Contract,
  account: &Account,
  amount: Option<u128>,
) -> ExecutionResult<String> {
  transact_call(
    account
      .call(contract.as_account().id(), "storage_withdraw")
      .args_json(json!({ "amount": amount.map(|a| a.to_string()) }))
      .deposit(1)
      .gas(GAS_LIMIT),
  )
  .await
}

pub async fn storage_unregister(contract: &Contract, account: &Account) -> ExecutionResult<String> {
  transact_call(
    account
      .call(contract.as_account().id(), "storage_unregister")
      .args_json(json!({ "force": false }))
      .deposit(1)
      .gas(GAS_LIMIT),
  )
  .await
}

pub async fn bulk_register_storage(
  accounts: Vec<&Account>,
  contracts: Vec<&Contract>,
) -> anyhow::Result<()> {
  let mut batch = Vec::new();
  for account in accounts.into_iter() {
    for contract in contracts.iter() {
      batch.push(
        account
          .call(contract.id(), "storage_deposit")
          .args_json(json!({
            "account_id": account.id(),
            "registration_only": false,
          }))
          .deposit(parse_near!("1 N"))
          .transact(),
      );
    }
  }
  try_join_all(batch).await?;
  anyhow::Ok(())
}
