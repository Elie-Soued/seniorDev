import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskcontainerComponent } from './taskcontainer.component';

describe('TaskcontainerComponent', () => {
  let component: TaskcontainerComponent;
  let fixture: ComponentFixture<TaskcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskcontainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
