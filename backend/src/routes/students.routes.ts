import { Router } from 'express';

import StudentsController from '../controllers/StudentsController';
import ScheduleController from '../controllers/ScheduleController';
import LinksController from '../controllers/LinksController';

const studentsRouter = Router();
const studentsController = new StudentsController();
const scheduleController = new ScheduleController();
const linksController = new LinksController();

studentsRouter.get('/', studentsController.index);
studentsRouter.post('/', studentsController.create);

studentsRouter.get('/:student_id/links', linksController.find);
studentsRouter.patch('/:student_id/links', linksController.update);

studentsRouter.get('/:student_id/schedule', scheduleController.index);
studentsRouter.post('/:student_id/schedule', scheduleController.create);

export default studentsRouter;
