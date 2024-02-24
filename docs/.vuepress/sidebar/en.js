module.exports = [
    {
        title: 'Learn',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            {
                title: 'About WAX',
                path: '/learn/about-wax/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    {
                        title: 'What is WAX?',
                        path: '/learn/about-wax/what-is-wax',
                    },
                    {
                        title: 'Why WAX?',
                        path: '/learn/about-wax/why-wax',
                    },
                    {
                        title: 'What is WAXP token?',
                        path: '/learn/about-wax/what-is-waxp-token',
                    },
                    {
                        title: 'Consensus on WAX',
                        path: '/learn/about-wax/wax-consensus',
                    },
                    {
                        title: 'WAX Interoparability',
                        path: '/learn/about-wax/wax-interoparability',
                    },
                    {
                        title: 'WAX Governance',
                        path: '/learn/about-wax/wax-governance',
                    },
                ],
            },
        ],
    },
    {
        title: 'Build',
        collapsable: false,
        sidebarDepth: 4,
        children: [
            {
                title: 'dApp Development',
                path: '/build/dapp-development/',
                collapsable: true,
                children: [
                    {
                        title: 'Setup local Environment',
                        path: '/build/dapp-development/setup-local-dapp-environment/',
                        children: [
                            '/build/dapp-development/setup-local-dapp-environment/dapp_local',
                            '/build/dapp-development/setup-local-dapp-environment/dapp_environments',
                            '/build/dapp-development/setup-local-dapp-environment/dapp_wallet',
                            '/build/dapp-development/setup-local-dapp-environment/dapp_api',
                        ],
                    },
                    {
                        title: 'Docker Setup',
                        path: '/build/dapp-development/docker-setup/',
                        children: [
                            '/build/dapp-development/docker-setup/docker_qstart_getstarted',
                            '/build/dapp-development/docker-setup/docker_qstart_use',
                            '/build/dapp-development/docker-setup/docker_qstart_manage',
                        ],
                    },
                    {
                        title: 'WAX Blockchain Setup',
                        path: '/build/dapp-development/wax-blockchain-setup/',
                        children: [
                            '/build/dapp-development/wax-blockchain-setup/blockchain_install',
                            '/build/dapp-development/wax-blockchain-setup/blockchain_uninstall',
                            '/build/dapp-development/wax-blockchain-setup/blockchain_verify',
                        ],
                    },
                    {
                        title: 'Smart Contract Development',
                        path: '/build/dapp-development/smart-contract-quickstart/',
                        children: [
                            '/build/dapp-development/smart-contract-quickstart/smart_contract_basics',
                            '/build/dapp-development/smart-contract-quickstart/dapp_account',
                            '/build/dapp-development/smart-contract-quickstart/dapp_hello_world',
                            '/build/dapp-development/smart-contract-quickstart/dapp_dev_deploy',
                            '/build/dapp-development/smart-contract-quickstart/custom_permission',
                        ],
                    },
                    {
                        title: 'WAX CDT',
                        path: '/build/dapp-development/wax-cdt/',
                        children: [
                            '/build/dapp-development/wax-cdt/cdt_install',
                            '/build/dapp-development/wax-cdt/cdt_uninstall',
                            '/build/dapp-development/wax-cdt/cdt_use',
                            '/build/dapp-development/wax-cdt/cdt_cpp',
                        ],
                    },
                    {
                        title: 'Deploy on WAX',
                        path: '/build/dapp-development/deploy-dapp-on-wax/',
                        children: [
                            '/build/dapp-development/deploy-dapp-on-wax/deploy_source',
                            '/build/dapp-development/deploy-dapp-on-wax/deploy_docker',
                            '/build/dapp-development/deploy-dapp-on-wax/convert_eos',
                        ],
                    },
                ],
            },
            {
                title: 'MyCloudWallet',
                path: '/build/cloud-wallet/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    {
                        title: 'wax.js',
                        path: '/build/cloud-wallet/waxjs/',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            '/build/cloud-wallet/waxjs/waxjs_qstart',
                            '/build/cloud-wallet/waxjs/waxjs_install',
                            '/build/cloud-wallet/waxjs/waxjs_use',
                            '/build/cloud-wallet/waxjs/waxjs_demo',
                        ],
                    },
                    {
                        title: 'boost.wax',
                        path: '/build/cloud-wallet/boost-wax',
                        collapsable: true,
                        sidebarDepth: 1,
                    },
                    {
                        title: 'WalletConnect',
                        path: '/build/cloud-wallet/wallet-connect/',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            '/build/cloud-wallet/wallet-connect/setting-up-walletconnect',
                            '/build/cloud-wallet/wallet-connect/walletconnect-developer-guide',
                            '/build/cloud-wallet/wallet-connect/walletconnect-integration-guide',
                        ],
                    },
                ],
            },
            {
                title: 'Tutorials',
                path: '/build/tutorials/',
                collapsable: true,
                children: [
                    {
                        title: 'Tic-Tac-Toe Game',
                        path: '/build/tutorials/build-a-game/tic-tac-toe-game/',
                        children: [
                            '/build/tutorials/build-a-game/tic-tac-toe-game/smart-contract',
                            '/build/tutorials/build-a-game/tic-tac-toe-game/client',
                        ],
                    },
                    {
                        title: 'AtomicAssets Guide',
                        path: '/build/tutorials/howto_atomicassets/',
                        children: [
                            '/build/tutorials/howto_atomicassets/collection_struct',
                            '/build/tutorials/howto_atomicassets/collection_js',
                            '/build/tutorials/howto_atomicassets/schemas_js',
                            '/build/tutorials/howto_atomicassets/templates_js',
                            '/build/tutorials/howto_atomicassets/mint_nft',
                            '/build/tutorials/howto_atomicassets/transfer_nft',
                            '/build/tutorials/howto_atomicassets/mutabledata',
                        ],
                    },
                    {
                        title: 'SimpleAssets Guide',
                        path: '/build/tutorials/howto_simpleassets/',
                        children: [
                            '/build/tutorials/howto_simpleassets/nft_basics',
                            '/build/tutorials/howto_simpleassets/nft_use',
                            '/build/tutorials/howto_simpleassets/nft_deploy',
                            '/build/tutorials/howto_simpleassets/nft_test',
                        ],
                    },
                    {
                        title: 'WAX RNG',
                        path: '/build/tutorials/wax-rng/',
                        children: ['/build/tutorials/wax-rng/rng_install'],
                    },
                    {
                        title: 'Create RNG Contract',
                        path: '/build/tutorials/create-wax-rng-smart-contract/',
                        children: [
                            '/build/tutorials/create-wax-rng-smart-contract/rng_basics',
                            '/build/tutorials/create-wax-rng-smart-contract/rng_sample',
                            '/build/tutorials/create-wax-rng-smart-contract/rng_test',
                            '/build/tutorials/create-wax-rng-smart-contract/rng_deploy',
                        ],
                    },
                    {
                        title: 'WharfKit',
                        path: '/build/tutorials/wharfkit/',
                        children: [
                            '/build/tutorials/wharfkit/howto_react',
                            '/build/tutorials/wharfkit/multisession',
                        ],
                    },
                    {
                      title: 'MyCloudWallet',
                      path: '/build/tutorials/mycloudwallet/',
                      children: [
                          '/build/tutorials/mycloudwallet/claim-account',
                          '/build/tutorials/mycloudwallet/relink-account',
                      ],
                  },

                    '/build/tutorials/howto_blockexplorer'
                ],
            },
            {
                title: 'Tools',
                path: '/build/tools/',
                collapsable: true,
                children: [
                    '/build/tools/blockchain_tools',
                    '/build/tools/os',
                    '/build/tools/cdt_options',
                    '/build/tools/ricardian_contract',
                    '/build/tools/ricardian_clause',
                ],
            },
            {
                title: 'API Reference',
                path: '/build/api-reference/',
                collapsable: true,
                children: [
                    '/build/api-reference/rpc_api',
                    '/build/api-reference/cdt_api',
                    {
                        title: 'dFuse',
                        path: '/build/api-reference/dfuse',
                        collapsable: true,
                        children: [
                            '/build/api-reference/dfuse/dfuse_example',
                        ],
                    }
                ],
            },
        ],
    },
    {
        title: 'Operate',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            {
                title: 'Basics',
                path: '/operate/wax-bp/',
                collapsable: true,
                children: [
                    '/operate/wax-bp/chains-json',
                    '/operate/wax-bp/bp-json'
                ],
            },
            {
                title: 'Atomic Assets API',
                path: '/operate/atomic-assets/',
                collapsable: true,
                children: [
                    '/operate/atomic-assets/setup-wax-atomic-api-node',
                    '/operate/atomic-assets/optimise-restore-wax-atomic-api-node'
                ],
            },
            {
                title: 'Guides',
                path: '/operate/wax-infrastructure/',
                collapsable: true,
                children: [
                    '/operate/wax-infrastructure/wax-testnet-node',
                    '/operate/wax-infrastructure/wax-snapshots',
                    '/operate/wax-infrastructure/wax-testnet-block-producer',
                    '/operate/wax-infrastructure/wax-mainnet-node',
                    '/operate/wax-infrastructure/wax-mainnet-node-load-balancer',
                    '/operate/wax-infrastructure/wax-mainnet-node-mitigate-abuse',
                    '/operate/wax-infrastructure/wax-mainnet-ship-node',
                    '/operate/wax-infrastructure/working-with-wax-software-files',
                    '/operate/wax-infrastructure/wax-ram-disk-utilisation',
                    '/operate/wax-infrastructure/wax-account-custom-permissions',
                    '/operate/wax-infrastructure/wax-route-specific-api-queries',
                    '/operate/wax-infrastructure/wax-websocket-load-balancer',
                    '/operate/wax-infrastructure/hyperion-guide',
                    '/operate/wax-infrastructure/atomic-api-guide' 
                ],
            },
            {
                title: 'WAX Hyperion History',
                path: '/operate/wax-hyperion/',
                collapsable: true,
                children: [
                    '/operate/wax-hyperion/wax-intro-to-hyperion-full-history',
                    '/operate/wax-hyperion/wax-config-hyperion-software-components',
                    '/operate/wax-hyperion/wax-build-hyperion-software-components',
                    '/operate/wax-hyperion/wax-running-hyperion',
                    '/operate/wax-hyperion/wax-clustering-elasticsearch-for-hyperion',
                    '/operate/wax-hyperion/wax-rectify-missing-blocks-in-hyperion',
                    '/operate/wax-hyperion/wax-hyperion-indexer-scaling',
                    '/operate/wax-hyperion/wax-hyperion-streaming-load-balancer',
                    '/operate/wax-hyperion/wax-hyperion-repair-indexed-data'
                ],
            },
            {
                title: 'WAX API Services',
                path: '/operate/wax-api-services/',
                collapsable: true,
            },
        ],
    },
    {
        title: 'Create',
        path: '/create/',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          {
            title: 'Awesome WAX',
            path: '/create/awesome-wax/',
            collapsable: true,
          },
          {
            title: 'WAX Labs',
            path: '/create/wax-labs/',
            collapsable: true,
            children: [
                '/create/wax-labs/how-to-submit',
            ],
          },
          {
            title: 'Documentation',
            path: '/create/docs/',
            collapsable: true,
          },
        ],
    },
];
