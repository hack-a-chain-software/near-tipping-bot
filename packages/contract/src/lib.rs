use borsh::{BorshDeserialize, BorshSerialize};
pub use near_sdk::serde_json::{self, json, Value};
use near_sdk::{
    serde::{Serialize, Deserialize},
    env, ext_contract, json_types::U128, log, near_bindgen, AccountId,
    Gas, Promise, PromiseResult, borsh, PanicOnDefault, 
};

#[global_allocator]
static ALLOC: near_sdk::wee_alloc::WeeAlloc = near_sdk::wee_alloc::WeeAlloc::INIT;

// const ONE_NEAR: u128 = 1_000_000_000_000_000_000_000_000;
pub const FRACTIONAL_BASE: u128 = 10_000;
pub const BASE_GAS: Gas = 5_000_000_000_000;

#[ext_contract(token_contract)]
trait FungibleToken {
    fn ft_transfer(receiver_id: String, amount: U128, memo: String);
}

#[ext_contract(ext_self)]
trait LogInfo {
    fn log_transfer(
        receiver: String,
        amount: U128,
        token: AccountId,
        sender: AccountId,
        sender_discord: String,
        receiver_discord: String,
        server_discord: String,
    );
}

#[derive(Serialize, Deserialize)]
#[serde(crate = "near_sdk::serde")]
pub struct FtTransferCallMsg {
    receiver: String,
    sender_discord: String,
    receiver_discord: String,
    server_discord: String,
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct Contract {
    pub owner_id: AccountId,
}

#[near_bindgen]
impl Contract {
    #[init]
    pub fn new(owner_id: AccountId) -> Self {
        assert!(
            env::is_valid_account_id(owner_id.as_bytes()),
            "Invalid owner account"
        );
        assert!(!env::state_exists(), "Already initialized");

        Self { owner_id: owner_id }
    }

    #[payable]
    pub fn transfer_payment(
        &mut self,
        receiver: AccountId,
        sender_discord: String,
        receiver_discord: String,
        server_discord: String,
    ) -> Promise {
        let sender_id = env::predecessor_account_id();
        let amount = env::attached_deposit();

        Promise::new(receiver.clone())
            .transfer(amount)
            .then(ext_self::log_transfer(
                receiver,
                U128(amount),
                "$NEAR".to_string(),
                sender_id,
                sender_discord,
                receiver_discord,
                server_discord,
                &env::current_account_id(),
                0,
                BASE_GAS,
            ))
    }

    pub fn ft_on_transfer(&mut self, sender_id: String, amount: U128, msg: String) -> String {
        let parsed_message: FtTransferCallMsg = serde_json::from_str(&msg).expect("msg in wrong format");

        token_contract::ft_transfer(
            parsed_message.receiver.clone(),
            amount.clone(),
            "discord bot donation".to_string(),
            &env::predecessor_account_id(),
            1,
            BASE_GAS,
        )
        .then(ext_self::log_transfer(
            parsed_message.receiver,
            amount,
            env::predecessor_account_id(),
            sender_id,
            parsed_message.sender_discord,
            parsed_message.receiver_discord,
            parsed_message.server_discord,
            &env::current_account_id(),
            0,
            BASE_GAS,
        ));
        "0".to_string()
    }

    #[private]
    pub fn log_transfer(
        &mut self,
        receiver: String,
        amount: U128,
        token: AccountId,
        sender: AccountId,
        sender_discord: String,
        receiver_discord: String,
        server_discord: String,
    ) {
        assert_eq!(env::promise_results_count(), 1, "ERR_TOO_MANY_RESULTS");
        match env::promise_result(0) {
            PromiseResult::NotReady => unreachable!(),
            PromiseResult::Successful(_val) => {
                log!(
                    "{}",
                    &json!({
                        "standard": "The-Supah-Tipping-bot",
                        "version": "1.0.0",
                        "event": "transfer",
                        "data": {
                            "sender": sender,
                            "receiver": receiver,
                            "sender_discord": sender_discord,
                            "receiver_discord": receiver_discord,
                            "server_discord": server_discord,
                            "token": token,
                            "amount":amount,
                        }
                    })
                    .to_string()
                );
            }
            PromiseResult::Failed => env::panic(b"ERR_CALL_FAILED"),
        }
    }
}

//----------------------------------- TEST -------------------------------------------------

#[cfg(all(test, not(target_arch = "wasm32")))]
mod tests {
    use near_sdk::MockedBlockchain;
    use near_sdk::{testing_env, VMContext};

    use super::*;

    pub const CONTRACT_ACCOUNT: &str = "contract.testnet";
    pub const OWNER_ACCOUNT: &str = "owner.testnet";

    pub fn get_context(
        input: Vec<u8>,
        is_view: bool,
        attached_deposit: u128,
        account_balance: u128,
        signer_id: AccountId,
    ) -> VMContext {
        VMContext {
            current_account_id: CONTRACT_ACCOUNT.to_string(),
            signer_account_id: signer_id.clone(),
            signer_account_pk: vec![0, 1, 2],
            predecessor_account_id: signer_id.clone(),
            input,
            block_index: 0,
            block_timestamp: 0,
            account_balance,
            account_locked_balance: 0,
            storage_usage: 0,
            attached_deposit,
            prepaid_gas: 10u64.pow(18),
            random_seed: vec![0, 1, 2],
            is_view,
            output_data_receivers: vec![],
            epoch_height: 19,
        }
    }

    #[test]
    fn test_new() {
        let context = get_context(vec![], false, 0, 0, OWNER_ACCOUNT.to_string());

        testing_env!(context);

        let contract = Contract::new(OWNER_ACCOUNT.to_string());
        assert_eq!(contract.owner_id, OWNER_ACCOUNT.to_string())
    }

    #[test]
    #[should_panic(expected = "Should be initialized before usage")]
    fn test_default() {
        let context = get_context(vec![], false, 0, 0, OWNER_ACCOUNT.to_string());
        testing_env!(context);
        let _contract = Contract::default();
    }
}
