--! Previous: -
--! Hash: sha1:6836cdd2c8a9f0f20fb1ca671c9c390b726f222b

--! split: 0001-servers.sql
drop table if exists servers;
create table servers (
    id bigint primary key,
    name text not null 
);

--! split: 0002-tokens.sql
drop table if exists tokens;
create table tokens (
    id text not null primary key,
    metadata jsonb not null
);

--! split: 0003-server_tokens.sql
drop table if exists server_tokens;
create table server_tokens (
    server_id bigint not null references servers (id),
    token_id text not null references tokens (id),

    primary key (server_id, token_id)
);

--   As the server_id appears first on the table declaration, we would need a second
-- index if we want to search by token_id alone, e.g. 
-- create index index_server_tokens_token_id on server_tokens (token_id);

--! split: 0004-wallets.sql
drop table if exists wallets;
create table wallets (
    user_id bigint not null,
    server_id bigint not null references servers (id),
    wallet text not null,

    primary key (user_id, server_id)
);

--   As the user_id appears first on the table declaration, we would need a second
-- index if we want to search by server_id alone, e.g. 
-- create index index_wallets_server_id on wallets (server_id);

--! split: 0005-feedbacks.sql
drop table if exists feedbacks;
create table feedbacks (
    id uuid primary key default gen_random_uuid(),
    server_id bigint not null,
    user_id bigint not null,
    username text not null,
    message text not null,
    submitted_at timestamptz default now()
);

--! split: 0006-help.sql
drop table if exists help;
create table help (
    command text primary key,
    message text not null
);
