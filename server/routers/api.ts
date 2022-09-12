import { Router } from 'express';

import task from './data-router';

const apiRouter = Router();

apiRouter.use('/data',  task)

export default apiRouter;
