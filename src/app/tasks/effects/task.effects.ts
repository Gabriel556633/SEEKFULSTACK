import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TaskService } from '../../services/task.service';
import {
  loadTasks, loadTasksSuccess,
  addTask, addTaskSuccess, addTaskFailure,
  updateTask, updateTaskSuccess, updateTaskFailure,
  deleteTask, deleteTaskSuccess, deleteTaskFailure
} from '../actions/task.actions';

@Injectable()
export class TaskEffects {
  // Efecto para cargar tareas
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
      mergeMap(() =>
        this.taskService.getTasks().pipe(
          map(tasks => loadTasksSuccess({ tasks })),
          catchError(() => of({ type: '[Task] Load Tasks Failure' }))
        )
      )
    )
  );

  // Efecto para agregar una tarea
  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTask),
      mergeMap((action) =>
        this.taskService.addTask(action.task).pipe(
          map((task) => addTaskSuccess({ task })),
          catchError(() => of(addTaskFailure()))
        )
      )
    )
  );

  // Efecto para actualizar una tarea
  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTask),
      mergeMap((action) =>
        this.taskService.updateTask(action.taskId, action.task).pipe(
          map((task) => updateTaskSuccess({ task })),
          catchError(() => of(updateTaskFailure()))
        )
      )
    )
  );

  // Efecto para eliminar una tarea
  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTask),
      mergeMap((action) =>
        this.taskService.deleteTask(action.taskId).pipe(
          map(() => deleteTaskSuccess({ taskId: action.taskId })),
          catchError(() => of(deleteTaskFailure()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private taskService: TaskService) {}
}