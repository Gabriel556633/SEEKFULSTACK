import { selectTaskState } from './task.selectors';
import { TaskState } from '../reducers/task.reducer';

describe('Task Selectors', () => {
  it('should select the task state', () => {
    const initialState: TaskState = {
      tasks: [
        { id: 1, title: 'Task 1', description: 'Description 1', status: 'todo' },
        { id: 2, title: 'Task 2', description: 'Description 2', status: 'in-progress' }
      ]
    };

    const result = selectTaskState.projector(initialState);
    expect(result).toEqual(initialState);
  });
});