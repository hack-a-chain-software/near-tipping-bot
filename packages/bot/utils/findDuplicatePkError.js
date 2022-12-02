module.exports = (graphQLErrors) => {
  if (Array.isArray(graphQLErrors)) {
    return graphQLErrors.find((error) =>
      error.message.match("duplicate key value violates unique constraint")
    );
  }

  return undefined;
};
