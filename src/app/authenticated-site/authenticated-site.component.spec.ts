import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedSiteComponent } from './authenticated-site.component';

describe('AuthenticatedSiteComponent', () => {
  let component: AuthenticatedSiteComponent;
  let fixture: ComponentFixture<AuthenticatedSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticatedSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticatedSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
