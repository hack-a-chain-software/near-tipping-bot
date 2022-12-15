insert into help (command, message) values
    (
        'addtoken',
        'This command is used to add a new token to your server''s token list. To use simply select a token from the list of available tokens and send the command.'
    ),
    (
        'alltokens',
        'This command is only for listing all tokens in your server''s token list. To use just select it, send the command and a list of tokens will be displayed to you.'
    ),
    (
        'commands',
        'This command is used to list all available bot commands. To use just select it, send the command and a list of commands will be displayed to you.'
    ),
    (
        'feedback',
        'This command is to send feedback to our team of developers. To use just select the command, enter your message and send the command, with this your feedback will be sent to our team.'
    ),
    (
        'newtoken',
        'This command is to make a request to add a token of interest to our token list if the token is not already in the list. To use, select the command, so you will open a modal with two fields for you to fill, the name of the token you want, and the near address of the same. After sending, your request will arrive to our team and will be analyzed.'
    ),
    (
        'register',
        'This command serves to register your server in our bot and be able to use the commands freely. It is quite simple to use, just select it and send the command that your server will be registered in the bot if it is not yet.'
    ),
    (
        'removetoken',
        'This command is used to remove a token from the token list from your server. To use simply select the token you want to remove from the list and send the command.'
    ),
    (
        'send',
        'This command is used to make transfers between server users. To use it you must select the token you want, inform the quantity and finally inform which user you want to transfer to.'
    ),
    (
        'setwallet',
        'This command is used to set your wallet in our bot so that you can receive transfers. To use just select the command and send.'
    ),
    (
        'verifywallet',
        'This command serves to verify that you already have a registered wallet in the bot. To use simply select the command, send it and then a message will be displayed whether or not you have a registered wallet.'
    ),
    (
        'tutorial',
        'This command serves to instruct how to use the bot to send tips.'
    ),
    (
        'helpinstall',
        'This command serves to instruct how to configure the bot on your server.'
    )
;

insert into tokens (id, metadata) values
    (
        'near',
        '{ "spec": "ft-1.0.0", "name": "Near", "symbol": "NEAR", "icon": "", "reference": "", "reference_hash": "", "decimals": 24 }'
    ),
    (
        'aaaaaa20d9e0e2461697782ef11675f668207961.factory.bridge.near',
        '{ "spec": "ft-1.0.0", "name": "Aurora", "symbol": "AURORA", "icon": "", "reference": "", "reference_hash": "", "decimals": 18 }'
    ),
    (
        'ftv2.nekotoken.near',
        '{ "spec": "ft-1.0.0", "name": "NEKO", "symbol": "NEKO", "icon": "", "reference": null, "reference_hash": null, "tax_rate": 0, "decimals": 24 }'
    ),
    (
        'token.sweat',
        '{ "spec": "ft-1.0", "name": "SWEAT", "symbol": "SWEAT", "icon": "", "reference": null, "reference_hash": null, "decimals": 18 }'
    ),
    (
        '2260fac5e5542a773aa44fbcfedf7c193bc2c599.factory.bridge.near',
        '{ "spec": "ft-1.0.0", "name": "Wrapped BTC", "symbol": "WBTC", "icon": "", "reference": "", "reference_hash": "", "decimals": 8 }'
    ),
    (
        'c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.factory.bridge.near',
        '{ "spec": "ft-1.0.0", "name": "Wrapped Ether", "symbol": "WETH", "icon": null, "reference": "", "reference_hash": "", "decimals": 18 }'
    ),
    (
        'utopia.secretskelliessociety.near',
        '{ "spec": "ft-1.0.0", "name": "Utopia", "symbol": "UTO", "icon": "", "reference": null, "reference_hash": null, "decimals": 8 }'
    ),
    (
        'token.v2.ref-finance.near',
        '{ "spec": "ft-1.0.0", "name": "Ref Finance Token", "symbol": "REF", "icon": "", "reference": null, "reference_hash": null, "decimals": 18 }'
    ),
    (
        'f5cfbc74057c610c8ef151a439252680ac68c6dc.factory.bridge.near',
        '{ "spec": "ft-1.0.0", "name": "Octopus Network Token", "symbol": "OCT", "icon": "", "reference": "", "reference_hash": "", "decimals": 18 }'
    ),
    (
        'sol.token.a11bd.near',
        '{ "spec": "ft-1.0.0", "name": "Solana", "symbol": "SOL", "icon": "", "reference": null, "reference_hash": null, "decimals": 24 }'
    ),
    (
        'dac17f958d2ee523a2206206994597c13d831ec7.factory.bridge.near',
        '{ "spec": "ft-1.0.0", "name": "Tether USD", "symbol": "USDT.e", "icon": "", "reference": "", "reference_hash": "", "decimals": 6 }'
    ),
    (
        'meta-pool.near',
        '{ "spec": "ft-1.0.0", "name": "Staked NEAR", "symbol": "STNEAR", "icon": "", "reference": "https://metapool.app", "reference_hash": null, "decimals": 24 }'
    ),
    (
        'token.pembrock.near',
        '{ "spec": "ft-1.0.0", "name": "PembRock", "symbol": "PEM", "icon": "", "reference": null, "reference_hash": null, "decimals": 18 }'
    ),
    (
        'a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near',
        '{ "spec": "ft-1.0.0", "name": "USD Coin", "symbol": "USDC.e", "icon": "", "reference": "", "reference_hash": "", "decimals": 6 }'
    ),
    (
        '6b175474e89094c44da98b954eedeac495271d0f.factory.bridge.near',
        '{ "spec": "ft-1.0.0", "name": "Dai Stablecoin", "symbol": "DAI", "icon": "", "reference": "", "reference_hash": "", "decimals": 18 }'
    )
;
