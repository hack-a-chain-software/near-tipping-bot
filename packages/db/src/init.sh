#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	create user ntb createdb encrypted password '${NTB_PASSWORD}';
    create database ntb with owner = ntb;
    create database ntb_shadow with owner = ntb;
EOSQL
