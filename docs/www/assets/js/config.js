// @ts-nocheck

window.$docsify = {
  name: 'huetiful-js',
  repo: 'xml-wizard/huetiful',
  homepage: '/assets/pages/home.md',
  logo: '/assets/img/logo.svg',
  nameLink: 'https://huetiful-js.com',
  nativeEmoji: true,
  alias: {
    '/api/': '/assets/pages/api',
    '/api/(.*)': '/api/modules/$1',
    '/changelog':
      'https://raw.githubusercontent.com/xml-wizard/huetiful/main/CHANGELOG',
    '/download': '/assets/pages/download',
    '/contributing':
      'https://raw.githubusercontent.com/xml-wizard/huetiful/main/CONTRIBUTING',
    '/references':
      'https://raw.githubusercontent.com/xml-wizard/huetiful/main/REFERENCES',
    '/quickstart': '/assets/pages/quickstart'
  },
  topMargin: 50,
  progress: {
    position: 'top',
    color: 'var(--theme-color,#42b983)',
    height: '3px'
  },
  coverpage: '/assets/pages/_cover.md',
  executeScript: true,
  autoFooter: {
    name: 'Dean Tarisai & xml-wizard contributors',
    url: 'https://github.com/xml-wizard',
    copyYear: '2021',
    policy: false
  },
  copyCode: {
    buttonText: 'Copy to clipboard',
    errorText: 'Error!',
    successText: 'Copied!'
  },
  pagination: {
    previousText: 'Back to',
    nextText: 'Up next',
    crossChapter: true,
    crossChapterText: true
  },
  count: {
    countable: true,
    postMessage: 'top',
    margin: '10px',
    float: 'right',
    fontsize: '0.9em',
    color: 'rgb(90,90,90)',
    isExpexted: true
  },
  accordify: {
    prerenderComments: true,
    seletors: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  },
  'flexible-alerts': {
    note: {
      label: 'Good to know'
    },
    tip: {
      label: 'Tip'
    },
    warning: {
      label: 'Caution'
    },
    attention: {
      label: 'Remember'
    }
  }
};
