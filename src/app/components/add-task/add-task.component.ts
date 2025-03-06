import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Task } from '../../models/task.model';
import { addTask } from '../../tasks/actions/task.actions';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  task: Task = {
    id: 0, // Este valor será sobrescrito por el servicio
    title: '',
    description: '',
    status: 'TODO'
  };

  constructor(private store: Store, private router: Router) {}

  onSubmit(): void {
    this.store.dispatch(addTask({ task: this.task })); // Dispara la acción addTask
    this.router.navigate(['/']); // Navega de regreso a la lista de tareas
  }
}