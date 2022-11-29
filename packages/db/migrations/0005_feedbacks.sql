create table feedbacks (
    id uuid primary key default gen_random_uuid(),
    server_id bigint not null,
    user_id bigint not null,
    username text not null,
    message text not null,
    submitted_at timestamptz default now()
);
