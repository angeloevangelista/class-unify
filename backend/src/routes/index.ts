import { Router } from 'express';

import studentsRouter from './students.routes';
import gradesRouter from './grades.routes';
import classesRouter from './classes.routes';

const routes = Router();

routes.use('/students', studentsRouter);
routes.use('/grades', gradesRouter);
routes.use('/classes', classesRouter);

routes.get('/', (request, response) => response.json({ ok: true }));

export default routes;
