use std::path::Path;
use workspaces::{Contract, Account, Worker};
use workspaces::network::Sandbox;
use std::vec::Vec;
use std::io::Error;
use near_units::parse_near;
use futures::future::try_join_all;

mod lib;
mod methods;
mod tests_launchpad;

pub use methods::*;

pub const OUT_DIR: &str = "../out";

pub const FRACTION_BASE: u128 = 10_000;

pub const TO_NANO: u64 = 1_000_000_000;
pub const AVERAGE_BLOCK_TIME: u64 = 1_200_000_000;

pub const GAS_LIMIT: u64 = 300_000_000_000_000;
pub const DEFAULT_GAS: u64 = 3_000_000_000_000;

pub const FT_DECIMALS: u8 = 8;
pub const FT_INITIAL_USER_BALANCE: u128 = 100_000_000_000_000;

pub const USER_ACCOUNT_BALANCE: u128 = 500_000_000_000_000_000_000_000_000;
pub const CONTRACT_ACCOUNT_BALANCE: u128 = 200_000_000_000_000_000_000_000_000;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
  anyhow::Ok(())
}
