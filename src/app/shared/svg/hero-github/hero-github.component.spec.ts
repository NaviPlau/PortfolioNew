import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroGithubComponent } from './hero-github.component';

describe('HeroGithubComponent', () => {
  let component: HeroGithubComponent;
  let fixture: ComponentFixture<HeroGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroGithubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
