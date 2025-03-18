import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterpageComponent } from './registerpage.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from '../../app/app.routes';

describe('RegisterpageComponent', () => {
  let component: RegisterpageComponent;
  let fixture: ComponentFixture<RegisterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterpageComponent],
      providers: [provideHttpClient(withFetch()), provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('If all fields are not filled, submit button should remain disabled', () => {
    // to be written
  });

  it('If email has not the correct format, submit button should remain disabled', () => {
    // to be written
  });

  it('If all fields are filled, submit button should become enabled', () => {
    // to be written
  });

  it('If user already exist, error should be shown', () => {
    // to be written
  });

  it('If all correct data are entered and user does not exist previously, user should be redirected to the login page', () => {
    // to be written
  });
});
