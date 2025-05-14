import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { TaskcontainerComponent } from './taskcontainer.component';
import { routes } from '../../app/app.routes';

describe('TaskcontainerComponent', () => {
  let component: TaskcontainerComponent;
  let fixture: ComponentFixture<TaskcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskcontainerComponent],
      providers: [provideHttpClient(withFetch()), provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('TaskContainer is correctly rendered', () => {
    expect(component).toBeTruthy();
  });

  it('Add task is correctly executed', () => {
    // write test
  });

  it('update task is correctly executed in taskContainer', () => {
    // write test
  });

  it('Pagination component is rendered correctly', () => {
    // write test
  });

  it('Pagination component is removed correctly', () => {
    // write test
  });
});
