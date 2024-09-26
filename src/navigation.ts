import { getPermalink /*, getBlogPermalink, getAsset */} from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
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
          href: "https://github.com/theopensource-community/website/blob/main/CONTRIBUTING.md",
        },
        {
          text: 'License',
          href: "https://github.com/theopensource-community/website/blob/main/LICENSE.md",
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
          text: 'Forum',
          href: "https://github.com/theopensource-community/website/discussions",
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Code of Conduct', href: 'https://github.com/theopensource-community/website/blob/main/CODE_OF_CONDUCT.md' },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:contact@theopensource.community' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: '#' },
    /* { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }, */
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/theopensource-community/website' },
  ],
  /* TODO: Update .ico link here */
  /* <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://website-4s6q9o217-theopensource-communitys-projects.vercel.app/_astro/favicon.CPAXnI4j.ico" alt="The Open Source Community logo" loading="lazy"></img> */
  footNote: `
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="inline-block icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /><path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" /><path d="M12.5 15.5l2 2" /><path d="M15 13l2 2" /></svg> This project is enabled by the support of many amazing companies including <a class="text-blue-600 underline dark:text-muted" href="https://www.timescale.com">Timescale</a> · All rights reserved.
  `,
};
