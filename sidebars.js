module.exports = {
    docs: [
        {
            type: 'doc',
            id: 'introduction'
        },
        {
            type: 'category',
            label: 'Apps',
            collapsed: false,
            items: [
                {
                    type: 'category',
                    label: 'Backend',
                    items: [
                        'apps/backend/installation',
                        {
                            type: 'category',
                            label: 'CLI Reference',
                            items: [
                                'apps/backend/cli-reference/account/info',
                                'apps/backend/cli-reference/account/list',
                                'apps/backend/cli-reference/account/register',
                                'apps/backend/cli-reference/server/create',
                                'apps/backend/cli-reference/server/info',
                                'apps/backend/cli-reference/server/list',
                                'apps/backend/cli-reference/server/start',
                                'apps/backend/cli-reference/server/stop',
                                'apps/backend/cli-reference/plugin/list'
                            ]
                        }]
                }
            ]
        }
    ],
};
