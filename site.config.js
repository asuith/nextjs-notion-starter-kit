module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '20233eb12f0d49bcbf717ed260376c24',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Suith\' Blog',
  domain: 'asuith.com',
  author: 'Suith',

  // open graph metadata (optional)
  description: 'Yet Another Suith\'s Blog',
  socialImageTitle: '',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'leosuith',
  github: 'asuith',
  // linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/highschool': 'f5214b9725b4461b94c33e9de7dc751c',
    '/party': '7d456ee73e7f4f0dbeeaddf2e613e592',
    '/football': 'bbf652c8e42742ebacd9d19cf6132dfc',
    '/summercampus': '7e4a0482824c4ef283c71f198f5408e4',
    // '/lispy': '6fbe20a417cc4cb89fc48095bb45c469',
    // '/googlemirror': '4e9fb5c41f174ebb9af65116fc7c66d0',
    '/pkuszinternet': '62508e8406c84c5cb4cd161879282bfd',
    '/pkuszdorm': '092818c4232244f7854ab1944b6fce47',
    '/pkuszjoke': 'a160dee70823426f951a0169639b78af',
    '/pkusztrain': 'd16094cc8f544269bd6408e1718442ab',
    // '/nps': '4e9fb5c41f174ebb9af65116fc7c66d0',
    '/pkuszlabjoke': '7578714027ab4f56bc7e790afbe4a90a',
    '/blog': '1041c81d6d45416d8e5bf504b768d7e3',
    '/about': 'b787df06dba940568befa50b64b2187d'
  }
}
