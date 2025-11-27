import express from 'express';
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getTasksByEmployee
} from '../controllers/taskController.js';

const router = express.Router();

router.route('/')
  .get(getAllTasks)
  .post(createTask);

router.route('/:id')
  .get(getTaskById)
  .put(updateTask)
  .delete(deleteTask);

router.route('/employee/:employeeId')
  .get(getTasksByEmployee);

export default router;

