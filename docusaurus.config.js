const communityUrl = "https://discord.gg/qTgBt6xjTT"
const baseUrl = process.env.BASE_URL || '/';

module.exports = {
  title: "Katan",
  tagline: "An open source game server management panel.",
  url: "https://katan.org",
  baseUrl: "/",
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
    prism: {
      theme: require("prism-react-renderer/themes/nightOwlLight"),
      darkTheme: require("prism-react-renderer/themes/palenight"),
      additionalLanguages: ['powershell'],
    },
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
          docId: "overview",
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
      copyright: `Copyright © 2020-${new Date().getFullYear()} Katan. Built with Docusaurus.<br/><small style="opacity: .54">An open source project, please consider donating to support this project.</small>`,
    },
    gtag: {
      trackingID: "G-BWXYFCQYH2",
      anonymizeIP: true,
    },
    algolia: {
      apiKey: "40588b1cafca23bba9a023a62a9f18be",
      indexName: "katan",
      contextualSearch: true,
      searchParameters: {},
    }
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
  ],
  themes: ["@saucelabs/theme-github-codeblock"]
};
