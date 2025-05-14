import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { routes } from '../../app/app.routes';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [provideHttpClient(withFetch()), provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('DashboardView is correctly rendered', () => {
    const logout = fixture.debugElement.query(By.css('#logout'));
    const taskContainer = fixture.debugElement.query(By.css('#taskContainer'));
    expect(logout).toBeTruthy();
    expect(taskContainer).toBeTruthy();
  });

  it('getAll function is executed on ngOnInit', () => {
    const spyOnGetAllTasks = spyOn(component, 'getAllTasks');
    component.ngOnInit();
    expect(spyOnGetAllTasks).toHaveBeenCalled();
  });

  it('Logout function is correctly executed', () => {
    localStorage.setItem('accessToken', 'pilex');

    const logoutFunction = spyOn(component, 'logout').and.callThrough();
    const logoutButton = fixture.debugElement.query(
      By.css('#logout')
    ).nativeElement;

    logoutButton.click();

    expect(logoutFunction).toHaveBeenCalled();
    expect(localStorage.getItem('accessToken')).toBeNull();
  });

  it('Subscriptions are removed on ngOnDestroy in the DashboardView', () => {
    expect(component.nextPageSub.closed).toBeFalsy();
    expect(component.previousPageSub.closed).toBeFalsy();
    component.ngOnDestroy();
    expect(component.nextPageSub.closed).toBeTruthy();
    expect(component.previousPageSub.closed).toBeTruthy();
  });
});
