import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
import { loadTasks } from '../../tasks/actions/task.actions';
import { selectTasks } from '../../tasks/selectors/task.selectors';

import { MatDialog } from '@angular/material/dialog';
import { EditTaskStatusDialogComponent } from '../edit-task-status-dialog/edit-task-status-dialog.component';
import { updateTask } from '../../tasks/actions/task.actions';
import { deleteTask } from '../../tasks/actions/task.actions';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private store: Store, public dialog: MatDialog) {
    this.tasks$ = this.store.select(selectTasks);
  }

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
  }

  openEditDialog(task: Task): void {
    const dialogRef = this.dialog.open(EditTaskStatusDialogComponent, {
      width: '300px',
      data: { task: { ...task } }
    });

    dialogRef.afterClosed().subscribe((newStatus: 'TODO' | 'IN_PROGRESS' | 'COMPLETED') => {
      if (newStatus) {
        const updatedTask = { ...task, status: newStatus };
        this.store.dispatch(updateTask({ taskId: task.id, task: updatedTask })); // Dispara la acción para actualizar la tarea
      }
    });
  }

  deleteTask(taskId: number): void {
    this.store.dispatch(deleteTask({ taskId })); // Despacha la acción deleteTask
  }
}