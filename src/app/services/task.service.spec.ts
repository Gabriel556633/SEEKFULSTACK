import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { Task } from '../models/task.model';
import { of } from 'rxjs';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    // Configura el módulo de pruebas
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Prueba para el método getTasks
  describe('getTasks', () => {
    it('should return the list of tasks', (done) => {
      // Llama al método getTasks
      service.getTasks().subscribe((tasks) => {
        // Verifica que la respuesta sea un arreglo de tareas
        expect(tasks).toBeInstanceOf(Array);
        expect(tasks.length).toBeGreaterThan(0);
        done();
      });
    });
  });

  // Prueba para el método addTask
  describe('addTask', () => {
    it('should add a new task to the list', (done) => {
      const newTask: Task = {
        id: 0, // El ID se generará automáticamente
        title: 'Nueva Tarea',
        description: 'Descripción de la nueva tarea',
        status: 'todo'
      };

      // Llama al método addTask
      service.addTask(newTask).subscribe((task) => {
        // Verifica que la tarea se haya agregado correctamente
        expect(task.id).toBeDefined();
        expect(task.title).toBe(newTask.title);
        expect(task.description).toBe(newTask.description);
        expect(task.status).toBe(newTask.status);

        // Verifica que la tarea esté en la lista
        service.getTasks().subscribe((tasks) => {
          const addedTask = tasks.find((t) => t.id === task.id);
          expect(addedTask).toBeDefined();
          done();
        });
      });
    });
  });

  // Prueba para el método deleteTask
  describe('deleteTask', () => {
    it('should remove a task from the list', (done) => {
      // Obtiene la lista inicial de tareas
      service.getTasks().subscribe((initialTasks) => {
        const taskToDelete = initialTasks[0]; // Selecciona la primera tarea para eliminar

        // Llama al método deleteTask
        service.deleteTask(taskToDelete.id).subscribe((taskId) => {
          // Verifica que el ID de la tarea eliminada sea correcto
          expect(taskId).toBe(taskToDelete.id);

          // Verifica que la tarea ya no esté en la lista
          service.getTasks().subscribe((tasks) => {
            const deletedTask = tasks.find((t) => t.id === taskToDelete.id);
            expect(deletedTask).toBeUndefined();
            done();
          });
        });
      });
    });
  });
});