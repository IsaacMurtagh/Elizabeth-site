module.exports = {
  siteUrl: 'https://blog.lilowriting.com',
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