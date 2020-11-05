module.exports = {
    title: 'Katan',
    tagline: 'Katan is a fast, simple and modularly adaptable panel built to manage game servers running isolated in Docker containers.',
    url: 'https://katanpanel.github.io',
    baseUrl: '/docs/',
    onBrokenLinks: 'throw',
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
                  to: 'blog',
                  label: 'Blog',
                  position: 'right'
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
            links: [
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/ey8dwsv',
                        }
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/KatanPanel/Katan',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Katan, Inc. Built with Docusaurus.`,
        },
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
                blog: {
                    showReadingTime: true,
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
