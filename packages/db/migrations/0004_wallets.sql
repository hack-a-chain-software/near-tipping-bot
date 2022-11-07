create table wallets (
    user_id bigint not null,
    server_id bigint not null references servers (id),
    wallet text not null,

    primary key (user_id, server_id)
);

--   As the user_id appears first on the table declaration, we would need a second
-- index if we want to search by server_id alone, e.g. 
-- create index index_wallets_server_id on wallets (server_id);
