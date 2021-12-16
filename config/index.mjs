import convict from 'convict';

// Define a schema
const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  strapi: {
    baseUrl: {
      format: String,
      default: 'https://author.lilowriting.com',
      env: 'STRAPI_BASE_URL'
    },
  }
});

config.validate({ allowed: 'strict' });

export default config;

