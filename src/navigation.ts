import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Projects',
      links: [
        {
          text: 'PostgreSQL',
          href: getPermalink('/projects/postgresql'),
        },
        {
          text: 'Roadmap',
          href: getPermalink('/projects/roadmap'),
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'GitHub', href: 'https://github.com/theopensource-community/website', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Learn more',
      links: [
        {
          text: 'About',
          href: getPermalink('/about'),
        },
        {
          text: 'Contributing',
          href: "#",
        },
        {
          text: 'Licensing',
          href: "#",
        },
      ],
    },
    {
      title: 'Supported projects',
      links: [
        {
          text: 'PostgreSQL',
          href: getPermalink('/projects/postgresql'),
        },
        {
          text: 'Roadmap',
          href: getPermalink('/projects/roadmap'),
        },
      ],
    },
    {
      title: 'Get in touch',
      links: [
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'GitHub Discussions',
          href: "https://github.com/theopensource-community/website/discussions",
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Code of Conduct', href: getPermalink('/code-of-conduct') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:contact@theopensource.community' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/theopensource-community/website' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://www.timescale.com/icon.ico" alt="Timescale logo" loading="lazy"></img>
    Powered by <a class="text-blue-600 underline dark:text-muted" href="https://www.timescale.com">Timescale</a> · All rights reserved.
  `,
};
