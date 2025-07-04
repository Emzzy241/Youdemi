import jwt from 'jsonwebtoken';

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization; 
  console.log('Incoming Auth header:', authHeader);

  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

// extracting the token before verifying
  const [scheme, token] = authHeader.split(' ');
  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Invalid authorization format' });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      console.log('JWT verify failed:', err.message);
      return res.status(401).json({ message: 'Invalid token' });
    }

    console.log('JWT decoded payload:', decoded);
    req.userId = decoded.id;
    next();
  });
}

export default authMiddleware;



// import jwt, { decode } from 'jsonwebtoken'

// function authMiddleware(req, res, next) {
//     console.log('Incoming Auth header:', req.headers.authorization);
//     const token = req.headers['authorization']

//     if (!token) { return res.status(401).json({ message: 'No token provided' })}

//     jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
//         if (err) { return res.status(401).json({ message: 'Invalid token' })}
//         req.userId = decoded.id
//         next()
//     })
// }

// export default authMiddleware