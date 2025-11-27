import Task from '../models/Task.js';
import Employee from '../models/Employee.js';

// Get all tasks
export const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find()
      .populate('assignedTo', 'name email position')
      .sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks
    });
  } catch (error) {
    next(error);
  }
};

// Get single task
export const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id)
      .populate('assignedTo', 'name email position department');

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    res.status(200).json({
      success: true,
      data: task
    });
  } catch (error) {
    next(error);
  }
};

// Create new task
export const createTask = async (req, res, next) => {
  try {
    // Check if employee exists
    const employee = await Employee.findById(req.body.assignedTo);
    if (!employee) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found'
      });
    }

    const task = await Task.create(req.body);
    const populatedTask = await Task.findById(task._id)
      .populate('assignedTo', 'name email position');

    res.status(201).json({
      success: true,
      data: populatedTask
    });
  } catch (error) {
    next(error);
  }
};

// Update task
export const updateTask = async (req, res, next) => {
  try {
    // If assignedTo is being updated, verify employee exists
    if (req.body.assignedTo) {
      const employee = await Employee.findById(req.body.assignedTo);
      if (!employee) {
        return res.status(404).json({
          success: false,
          message: 'Employee not found'
        });
      }
    }

    // If status is being updated to completed, set completedAt
    if (req.body.status === 'completed' && !req.body.completedAt) {
      req.body.completedAt = new Date();
    }

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    ).populate('assignedTo', 'name email position');

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    res.status(200).json({
      success: true,
      data: task
    });
  } catch (error) {
    next(error);
  }
};

// Delete task
export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Task deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

// Get tasks by employee
export const getTasksByEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.employeeId);
    if (!employee) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found'
      });
    }

    const tasks = await Task.find({ assignedTo: req.params.employeeId })
      .populate('assignedTo', 'name email position')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks
    });
  } catch (error) {
    next(error);
  }
};

