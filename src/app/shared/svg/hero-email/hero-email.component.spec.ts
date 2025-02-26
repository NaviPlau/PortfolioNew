import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEmailComponent } from './hero-email.component';

describe('HeroEmailComponent', () => {
  let component: HeroEmailComponent;
  let fixture: ComponentFixture<HeroEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
