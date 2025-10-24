import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerNotify } from './banner-notify';

describe('BannerNotify', () => {
  let component: BannerNotify;
  let fixture: ComponentFixture<BannerNotify>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerNotify]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerNotify);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
