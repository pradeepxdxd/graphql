import jwt from 'jsonwebtoken';
import { JWT_SECRET_kEY } from '../config.js';

const context = ({ req }) => {
    const { authorization } = req.headers;
    if (authorization) {
        const { userId } = jwt.verify(authorization, JWT_SECRET_kEY);
        return { userId };
    }
}

export { context };