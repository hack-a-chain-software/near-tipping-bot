# Database

This package contains the migrations needed in order to initialize the application's database.

## Migrations

They are located in the `migrations` folder and should be run sequentially in (lexicographical) order to achieve the correct state.

It's assumed they will run against a [Supabase](https://supabase.com/) schema, which already contains some functionality not native to Postgres (e.g. the `storage` schema).

When creating new migrations, keep them named appropriately, that is, with a serial numeric prefix, and underscore-separated (_) words.
