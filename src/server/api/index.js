import Router from 'express';
import Todos from './todos';

const router = Router();

router.get('/todos', Todos);

export default router;
