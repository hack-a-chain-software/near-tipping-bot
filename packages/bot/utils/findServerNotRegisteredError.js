module.exports = (graphQLErrors) => {
  if (Array.isArray(graphQLErrors)) {
    return graphQLErrors.find((error) =>
      error.message.match("violates foreign key constraint")
    );
  }

  return undefined;
};
