import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTaskStatusDialogComponent } from './edit-task-status-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('EditTaskStatusDialogComponent', () => {
  let component: EditTaskStatusDialogComponent;
  let fixture: ComponentFixture<EditTaskStatusDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTaskStatusDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} }, // Proveedor para MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: {} } // Proveedor para MAT_DIALOG_DATA
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditTaskStatusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});