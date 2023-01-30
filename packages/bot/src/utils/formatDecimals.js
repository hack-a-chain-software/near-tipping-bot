const { default: Big } = require("big.js");

const formatDecimals = (amount, decimals) => {
  return Big(amount).div(Big(10).pow(decimals)).toFixed(8);
};

module.exports = { formatDecimals };
