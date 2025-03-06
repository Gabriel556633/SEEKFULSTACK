import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-edit-task-status-dialog',
  templateUrl: './edit-task-status-dialog.component.html',
  styleUrls: ['./edit-task-status-dialog.component.scss']
})
export class EditTaskStatusDialogComponent {
  statusOptions: ('TODO' | 'IN_PROGRESS' | 'COMPLETED')[] = ['TODO', 'IN_PROGRESS', 'COMPLETED'];

  constructor(
    public dialogRef: MatDialogRef<EditTaskStatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task } // Recibe la tarea como dato
  ) {}

  onCancel(): void {
    this.dialogRef.close(); // Cierra el diálogo sin guardar cambios
  }

  onSave(newStatus: 'TODO' | 'IN_PROGRESS' | 'COMPLETED'): void {
    this.dialogRef.close(newStatus); // Cierra el diálogo y devuelve el nuevo status
  }
}