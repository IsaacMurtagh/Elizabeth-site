module.exports = {
  siteUrl: 'https://lilowriting.com',
  generateRobotsTxt: true,
  exclude: ['/preview'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/preview'],
      },
    ],
  },
}