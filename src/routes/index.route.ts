import { Router, Request, Response } from 'express';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'OK',
  });
});

export default router;
