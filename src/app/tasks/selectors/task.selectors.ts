import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState, taskFeatureKey } from '../reducers/task.reducer';

export const selectTaskState = createFeatureSelector<TaskState>(taskFeatureKey);

export const selectTasks = createSelector(
  selectTaskState,
  (state) => state.tasks // Obtén las tareas del estado
);