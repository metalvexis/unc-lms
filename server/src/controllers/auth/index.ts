import express from 'express';

import { User } from '../../models/User.model';
import { hashPassword, assertUser } from '../../lib';

export async function login(username: string, password: string) {
  if (!username || !password) return null;

  const user = await assertUser(username, password);

  if (!user) return null;

  return {
    user,
  };
}

export async function register(username: string, password: string) {
  if (!username || !password) return null;
  const hashedPw = await hashPassword(password);
  const user = await User.create(
    {
      username,
      password: hashedPw,
    },
    {}
  );

  if (!user) return null;

  return {
    user,
  };
}

const router = express.Router();

router.post('/login', async (req, res) => {
  const body = req.body as { username: string; password: string };
  console.log('login body', body);
  const loginUser = await login(body.username, body.password);
  if (!loginUser) {
    return res.status(403).send();
  }
  res.json({
    user: loginUser ? loginUser.user : null,
  });
});

router.post('/register', async (req, res) => {
  const body = req.body as { username: string; password: string };

  const newUser = await register(body.username, body.password);

  res.json({
    user: newUser ? newUser.user : null,
  });
});

export default router;
