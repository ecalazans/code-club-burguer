import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

export default (request, response, next) => {
  const autToken = request.headers.authorization;

  if (!autToken) {
    return response.status(401).json({ error: 'Token not provided' });
  }

  const token = autToken.split(' ')[1];

  try {
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        throw new Error();
      }

      request.userId = decoded.id;
      request.userName = decoded.name;

      return next();
    });
  } catch (err) {
    return response.status(401).json({ error: 'Token is invalid' });
  }
};
