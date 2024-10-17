const crypto = require('crypto');

// JWT Secret key generation
const jwtSecret = crypto.randomBytes(64).toString('hex');
console.log('JWT_SECRET:', jwtSecret);

// JWT Refresh Secret key generation
const jwtRefreshSecret = crypto.randomBytes(64).toString('hex');
console.log('JWT_REFRESH_SECRET:', jwtRefreshSecret);
