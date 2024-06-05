const { admin } = require('../config/firebase');

const verifyToken = async (req, h) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return h.response({ success: false, message: 'No token provided' }).code(401).takeover();
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    return h.continue;
  } catch (error) {
    return h.response({ success: false, message: 'Unauthorized' }).code(401).takeover();
  }
};

module.exports = verifyToken;
