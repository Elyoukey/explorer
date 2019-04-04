const DATE_FORMAT = 'YYYY-MM-DD HH:mm Z';

const AWS_BUCKET = process.env.AWS_BUCKET || ""
const AWS_REGION = process.env.AWS_REGION || ""
const AWS_IDENTITY_POOL_ID = process.env.AWS_IDENTITY_POOL_ID || ""
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || ""
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || ""

const DB_HOSTS = process.env.DB_HOSTS || "mongo:27017"
const DB_REPLICA_SET = process.env.DB_REPLICA_SET || ""
const ADMIN_DB_USER = process.env.ADMIN_DB_USER || ""
const ADMIN_DB_PASS = process.env.ADMIN_DB_PASS || ""
const ADMIN_DB_NAME = process.env.ADMIN_DB_NAME || ""
const PUBLIC_DB_USER = process.env.PUBLIC_DB_USER || ""
const PUBLIC_DB_PASS = process.env.PUBLIC_DB_PASS || ""
const PUBLIC_DB_NAME = process.env.PUBLIC_DB_NAME || ""

const AWS_PUBLIC = {
    "AWS_BUCKET" : AWS_BUCKET,
    "AWS_REGION" : AWS_REGION,
};
const AWS_CONFIG = Object.assign({}, AWS_PUBLIC, {
    "AWS_IDENTITY_POOL_ID" : AWS_IDENTITY_POOL_ID,
    "AWS_ACCESS_KEY_ID" : AWS_ACCESS_KEY_ID,
    "AWS_SECRET_ACCESS_KEY" : AWS_SECRET_ACCESS_KEY
});

const SHARED_DB = {
  "DB_HOSTS": DB_HOSTS,
  "DB_REPLICA_SET": DB_REPLICA_SET,
  "DB_SSL": true,
  "DB_AUTH_SOURCE": "admin"
};

const ADMIN_DB = Object.assign({}, SHARED_DB, {
  "ADMIN_DB_USER": ADMIN_DB_USER,
  "ADMIN_DB_PASS": ADMIN_DB_PASS,
  "ADMIN_DB_NAME": ADMIN_DB_NAME,
});

const PUBLIC_DB = Object.assign({}, SHARED_DB, {
  "PUBLIC_DB_USER": PUBLIC_DB_USER,
  "PUBLIC_DB_PASS": PUBLIC_DB_PASS,
  "PUBLIC_DB_NAME": PUBLIC_DB_NAME,
});


module.exports = {
  apps: [
    {
      "name": "daemon",
      "script": "server.js",
      "watch": true,
      "log_date_format" : DATE_FORMAT,
      "env": Object.assign({}, AWS_CONFIG, {
        "NODE_ENV": "development",
        "DB_HOSTS": DB_HOSTS,
        "ADMIN_DB_USER": ADMIN_DB_USER,
        "ADMIN_DB_PASS": ADMIN_DB_PASS,
        "ADMIN_DB_NAME": "phylex-admin",
        "PUBLIC_DB_USER": PUBLIC_DB_USER,
        "PUBLIC_DB_PASS": PUBLIC_DB_PASS,
        "PUBLIC_DB_NAME": "phylex-public",
        "DB_REPLICA_SET": DB_REPLICA_SET,
        "DB_SSL": true,
        "DB_AUTH_SOURCE": "admin"
      }),
      'env_production': Object.assign({}, AWS_CONFIG, ADMIN_DB, PUBLIC_DB, {
        "NODE_ENV": "production",
      })
    }
  ]
};
