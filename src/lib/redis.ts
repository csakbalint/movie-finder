import Redis from 'ioredis';

const redis = new Redis(
  parseInt(process.env.REDIS_PORT || '6379'),
  process.env.REDIS_HOST || 'localhost',
  { maxRetriesPerRequest: 3 },
);

// fail fast, because we really want caching to work
redis.on('error', (error) => {
  // introduce better logging
  console.error(error);
  process.exit(1);
});

export default redis;
