module.exports = {
    title: 'Katan',
    tagline: 'A fast, simple and modularly adaptable panel built to manage game servers running isolated in Docker containers.',
    url: 'https://katanpanel.github.io',
    baseUrl: '/docs/',
    onBrokenLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'KatanPanel',
    projectName: 'docs',
    themeConfig: {
        navbar: {
            title: 'Katan',
            logo: {
                alt: 'Katan Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Documentation',
                    position: 'right',
                },
                {
                    href: 'https://discord.gg/ey8dwsv',
                    label: 'Community',
                    position: 'right',
                },
                {
                    href: 'https://github.com/KatanPanel/Katan',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Katan, Inc. Built with Docusaurus.`,
        },
        gtag: {
            trackingID: 'G-5HFBSRG9BY',
            anonymizeIP: true,
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/KatanPanel/docs/edit/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ]
};
