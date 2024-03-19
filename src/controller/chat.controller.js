import { Router } from 'express';
import { messages, users } from '../config/socket.config.js';
import HTTP_STATUS_CODES from '../constants/htpp-status-code.constants.js';

const router = Router();

router.get('/', (req, res) => {
  try {
    res.json({
      status: 'success',
      messages: messages,
      users: users,
    });
  } catch (error) {
    console.log(error);
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ status: 'error', message: 'Something gone wrong' });
  }
});

export default router;
