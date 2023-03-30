// eslint-disable-next-line import/no-anonymous-default-export

const paths = {
  welcome: '/welcome',
  onboarding: '/onboarding',
  marketplace: '/marketplace',
  configurator: '/configure',
  portfolio: '/portfolio',
  comingSoon: '/comingSoon',
  wiki: '/wiki',
  notFound: '/notfound',


  configure: '/configure',
  model: '/model',
  billOfMaterials: '/bill-of-materials',
};

const absolutePaths = {
  welcome: '/welcome',
  onboarding: '/onboarding',
  marketplace: `/${paths.marketplace}`,
  portfolio: `/${paths.portfolio}`,
  configurator: `/${paths.configurator}`,
  comingSoon: `/${paths.comingSoon}`,
  wiki: '/wiki',
  notFound: '/notfound',
};

export default {
  ...paths,
  absolutes: absolutePaths,
};
