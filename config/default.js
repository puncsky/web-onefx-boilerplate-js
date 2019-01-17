import process from 'global/process';
import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  project: 'web-onefx-boilerplate',
  server: {
    port: process.env.PORT || 4100,
    staticDir: './dist',
    delayInitMiddleware: false,
    cookie: {
      secrets: ['insecure plain text', 'insecure secret here'],
    },
  },
  ssm: {
    enabled: false,
  },
  gateways: {
    logger: {
      enabled: true,
      level: 'debug',
    },
  },
  analytics: {
    googleTid: 'TODO: replace with your googleTid',
  },
  stripe: {
    stripePubKey: 'pk_test_1yMRIhidzZOrBJ84mJNHqa4O',
    stripePriKey: 'sk_test_5pGpbrSWDfkXbg1XoOOqQzQy',
  },
};
