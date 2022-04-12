module.exports = {
  siteUrl: 'https://www.elizabeth-howe.com',
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