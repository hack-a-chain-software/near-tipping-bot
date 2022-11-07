create table server_tokens (
    server_id bigint not null references servers (id),
    token_id text not null references tokens (id),

    primary key (server_id, token_id)
);

--   As the server_id appears first on the table declaration, we would need a second
-- index if we want to search by token_id alone, e.g. 
-- create index index_server_tokens_token_id on server_tokens (token_id);
