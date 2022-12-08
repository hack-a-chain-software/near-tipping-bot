const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (serverId, receiverId, tokenId) => {
  const { data } = await graphQlClient.query({
    query: gql`
      query GetSendParameters(
        $serverId: BigInt!
        $receiverId: BigInt!
        $tokenId: String!
      ) {
        serverToken: serverTokenByServerIdAndTokenId(
          serverId: $serverId
          tokenId: $tokenId
        ) {
          tokenByTokenId {
            nodeId
            id
            metadata
          }
        }

        wallet: walletByUserIdAndServerId(
          serverId: $serverId
          userId: $receiverId
        ) {
          nodeId
          wallet
        }
      }
    `,
    variables: {
      serverId,
      receiverId,
      tokenId,
    },
  });

  return {
    token: data.serverToken.tokenByTokenId,
    wallet: data.wallet.wallet,
  };
};
