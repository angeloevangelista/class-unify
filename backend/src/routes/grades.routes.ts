import { Router } from 'express';

import GradesController from '../controllers/GradesController';

const gradesRouter = Router();
const gradesController = new GradesController();

gradesRouter.get('/', gradesController.index);

export default gradesRouter;
