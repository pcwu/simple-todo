const config = {
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost/todo-pcwu',
  PORT: process.env.PORT || 3000,
  ENVIRONMENT: process.env.NODE_ENV || 'development',
};

export default config;
