import { createReducer, on } from '@ngrx/store';
import { Task } from '../../models/task.model';
import {
  loadTasksSuccess,
  addTaskSuccess,
  updateTaskSuccess,
  deleteTaskSuccess
} from '../actions/task.actions';

export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: []
};

export const taskReducer = createReducer(
  initialState,
  on(loadTasksSuccess, (state, { tasks }) => ({ ...state, tasks })),
  on(addTaskSuccess, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task] // Agrega la nueva tarea al estado
  })),
  on(updateTaskSuccess, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map(t => t.id === task.id ? task : t) // Actualiza la tarea en el estado
  })),
  on(deleteTaskSuccess, (state, { taskId }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== taskId) // Elimina la tarea del estado
  }))
);

// Define la featureKey
export const taskFeatureKey = 'tasks';