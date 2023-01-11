use workspaces::{operations::CallTransaction, result::ExecutionResult};

use crate::*;

pub mod nep145;
pub mod token;
pub mod tipping_bot;

pub use token::*;
pub use tipping_bot::*;
pub use nep145::*;

pub async fn transact_call<'a, 'b>(
  call_transaction: CallTransaction<'a, 'b>,
) -> ExecutionResult<String> {
  call_transaction
    .transact()
    .await
    .unwrap()
    .into_result()
    .unwrap()
}

pub fn get_wasm(file_name: &str) -> Result<Vec<u8>, Error> {
  std::fs::read(Path::new(OUT_DIR).join(file_name))
}

pub async fn create_user_account(tla: &Account, account_id: &str) -> Account {
  tla
    .create_subaccount(account_id)
    .initial_balance(USER_ACCOUNT_BALANCE)
    .transact()
    .await
    .unwrap()
    .unwrap()
}

pub async fn deploy_contract(tla: &Account, account_id: &str, wasm: &Vec<u8>) -> Contract {
  let contract_account = tla
    .create_subaccount(account_id)
    .initial_balance(CONTRACT_ACCOUNT_BALANCE)
    .transact()
    .await
    .unwrap()
    .unwrap();

  contract_account.deploy(wasm).await.unwrap().unwrap()
}

pub async fn deploy_contract_from_wasm_path(
  tla: &Account,
  account_id: &str,
  wasm_path: &str,
) -> Contract {
  let wasm = get_wasm(wasm_path).unwrap();
  deploy_contract(&tla, account_id, &wasm).await
}

pub async fn time_travel(worker: &Worker<Sandbox>, seconds_to_advance: u64) -> anyhow::Result<()> {
  let blocks_to_advance = (seconds_to_advance * TO_NANO) / AVERAGE_BLOCK_TIME;
  worker.fast_forward(blocks_to_advance).await?;
  anyhow::Ok(())
}
