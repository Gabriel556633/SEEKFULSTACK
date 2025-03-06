import { taskReducer, initialState } from './task.reducer';
import { loadTasksSuccess, addTaskSuccess, deleteTaskSuccess } from '../actions/task.actions';
import { TaskState } from '../reducers/task.reducer';
import { Task } from '../../models/task.model';

describe('Task Reducer', () => {
  it('should return the initial state', () => {
    const action = {} as any;
    const state = taskReducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  it('should handle loadTasksSuccess', () => {
    const tasks: Task[] = [
      { id: 1, title: 'Task 1', description: 'Description 1', status: 'todo' },
      { id: 2, title: 'Task 2', description: 'Description 2', status: 'in-progress' }
    ];
    const action = loadTasksSuccess({ tasks });
    const state = taskReducer(initialState, action);
    expect(state.tasks).toEqual(tasks);
  });

  it('should handle addTaskSuccess', () => {
    const task: Task = { id: 3, title: 'Task 3', description: 'Description 3', status: 'completed' };
    const action = addTaskSuccess({ task });
    const state = taskReducer(initialState, action);
    expect(state.tasks).toContain(task);
  });

  it('should handle deleteTaskSuccess', () => {
    const initialStateWithTasks: TaskState = {
      tasks: [
        { id: 1, title: 'Task 1', description: 'Description 1', status: 'todo' },
        { id: 2, title: 'Task 2', description: 'Description 2', status: 'in-progress' }
      ]
    };
    const action = deleteTaskSuccess({ taskId: 1 });
    const state = taskReducer(initialStateWithTasks, action);
    expect(state.tasks.length).toBe(1);
    expect(state.tasks.find((t) => t.id === 1)).toBeUndefined();
  });
});