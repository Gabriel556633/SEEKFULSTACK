import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { AddTaskComponent } from '../components/add-task/add-task.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog'; // Importa MatDialogModule
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { taskReducer, taskFeatureKey } from './reducers/task.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './effects/task.effects';
import { EditTaskStatusDialogComponent } from '../components/edit-task-status-dialog/edit-task-status-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [TaskListComponent, AddTaskComponent, EditTaskStatusDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule, // Agrega MatIconModule aquí
    RouterModule,
    StoreModule.forFeature(taskFeatureKey, taskReducer),
    EffectsModule.forFeature([TaskEffects])
  ],
  entryComponents: [EditTaskStatusDialogComponent]
})
export class TasksModule { }