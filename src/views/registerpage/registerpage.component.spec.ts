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
});
