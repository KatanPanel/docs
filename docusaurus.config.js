const communityUrl = "https://discord.gg/Tg7TTfT5ej"
const baseUrl = process.env.BASE_URL || '/';

module.exports = {
  title: "Katan",
  tagline: "An open source game server management panel.",
  url: "https://katanpanel.github.io",
  baseUrl: "/katan-website/",
  onBrokenLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "KatanPanel",
  projectName: "katan-website",
  customFields: {
    communityUrl
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "br"],
    localeConfigs: {
      en: {
        label: "English",
      },
      br: {
        label: "Português",
      },
    },
  },
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true
    },
    navbar: {
      title: "Katan",
      logo: {
        alt: "Katan Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "about/overview",
          label: "Documentation",
          position: "left",
        },
        {
          type: "doc",
          docId: "reference/overview",
          label: "Reference",
          position: "left",
        },
        {
          href: communityUrl,
          label: "Community",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/KatanPanel",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub 33",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Katan, Inc. Built with Docusaurus.<br/><small style="opacity: .54">An open source project, please consider donating to support this project.</small>`,
    },
    gtag: {
      trackingID: "G-5HFBSRG9BY",
      anonymizeIP: true,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/KatanPanel/katan-website/edit/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "img/logo.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: `${baseUrl}manifest.json`,
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#4b7bec",
          },
        ],
      },
    ],
  ]
};
