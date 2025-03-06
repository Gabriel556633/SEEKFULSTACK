import * as fromTask from './task.actions';

describe('Task Actions', () => {
  it('should create the loadTasks action', () => {
    const action = fromTask.loadTasks();
    expect(action.type).toBe('[Task] Load Tasks');
  });





  it('should create the deleteTask action', () => {
    const action = fromTask.deleteTask({ taskId: 1 });
    expect(action.type).toBe('[Task] Delete Task');
    expect(action.taskId).toBe(1);
  });

  it('should create the updateTaskStatus action', () => {
    const action = fromTask.updateTaskStatus({ taskId: 1, newStatus: 'completed' });
    expect(action.type).toBe('[Task] Update Task Status');
    expect(action.taskId).toBe(1);
    expect(action.newStatus).toBe('completed');
  });
});
