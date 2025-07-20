const express = require('express');
const app = express();

// 1. Basic Middleware (Logger)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// 2. Built-in Middleware (JSON Body Parser)
app.use(express.json());

// 3. Custom Middleware (Authentication Example)
function authMiddleware(req, res, next) {
  if (req.headers['authorization'] === 'Bearer secret') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
}

// 4. Route-specific Middleware
app.get('/protected', authMiddleware, (req, res) => {
  res.send('You are authorized!');
});

// 5. Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 6. Third-party Middleware (Helmet for security)
const helmet = require('helmet');
app.use(helmet());

// 7. Async Middleware (handling async errors)
const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};


 // Simulate async operation
app.get('/async', asyncMiddleware(async (req, res) => {
 
  const data = await Promise.resolve('Async data!');
  res.send(data);
}));

// 8. Chaining Multiple Middlewares
function mw1(req, res, next) {
  req.custom = 'Hello';
  next();
}
function mw2(req, res, next) {
  req.custom += ' World!';
  next();
}
app.get('/chain', mw1, mw2, (req, res) => {
  res.send(req.custom);
});

// 9. Conditional Middleware
function conditionalMiddleware(req, res, next) {
  if (req.query.admin === 'true') {
    req.isAdmin = true;
  }
  next();
}
app.get('/conditional', conditionalMiddleware, (req, res) => {
  res.send(req.isAdmin ? 'Admin Access' : 'User Access');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
