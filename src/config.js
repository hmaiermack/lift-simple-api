module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    CLIENT_ORIGIN: 'https://lift-simple-app.now.sh/',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres:candid55@localhost/lift-simple-api',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://postgres:candid55@localhost/lift-simple-test'
  }