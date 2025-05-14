import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from '../../app/app.routes';
import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  const task = { id: 1, content: 'task1', userID: 1, checked: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskComponent],
      providers: [provideHttpClient(withFetch()), provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
  });

  it('Task Component is correctly rendered', () => {
    component.task = task; // Set the input
    fixture.detectChanges(); // Trigger Angular lifecycle
    expect(component).toBeTruthy();
  });

  it('Delete task is correctly executed', () => {
    // write test
  });

  it('Update task is correctly executed in task', () => {
    // write test
  });
  it('Enable task is correctly executed', () => {
    // write test
  });

  it('Disable task is correctly executed', () => {
    // write test
  });

  it('Check task is correctly executed', () => {
    // write test
  });

  it(' Subscriptions are removed in ngOnDestroy in the TaskComponent', () => {
    // write test
  });
});
