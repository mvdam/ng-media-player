import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosComponent } from './videos.component';
import { VideoComponent } from '../video/video.component';

describe('VideosComponent', () => {
  let component: VideosComponent;
  let fixture: ComponentFixture<VideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideosComponent, VideoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
