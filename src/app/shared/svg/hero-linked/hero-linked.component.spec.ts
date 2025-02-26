import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLinkedComponent } from './hero-linked.component';

describe('HeroLinkedComponent', () => {
  let component: HeroLinkedComponent;
  let fixture: ComponentFixture<HeroLinkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroLinkedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroLinkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
