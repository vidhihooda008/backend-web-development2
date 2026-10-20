
'use strict';

// middleware/rateLimiter.js

const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Maximum 5 attempts per IP

  standardHeaders: true,
  legacyHeaders: false,

  skipSuccessfulRequests: true,

  // Redis scaling:
  // In a multi-instance deployment, rate-limit-redis can replace
  // the default in-memory store with a shared Redis store.
  // Each instance otherwise has its own counter, so a load balancer
  // can distribute requests across instances and bypass the limit.
  // Redis shares counters across instances to enforce one common limit.
});
