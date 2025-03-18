import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingpageComponent } from './landingpage.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from '../../app/app.routes';

describe('LandingpageComponent', () => {
  let component: LandingpageComponent;
  let fixture: ComponentFixture<LandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingpageComponent],
      providers: [provideHttpClient(withFetch()), provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if login is successufll, token should be stored in localstorage and user should be redirected to dashboard', () => {
    // to be written
  });

  it('if username or password is not entered, submit button should remain disabled', () => {
    // to be written
  });
  it('if username and password are  entered, submit button should become enabled', () => {
    // to be written
  });

  it('If user does not exist, the correct error should be displayed', () => {
    // to be written
  });
  it('if password is wrong, the correct error should be displayed', () => {
    // to be written
  });
});
