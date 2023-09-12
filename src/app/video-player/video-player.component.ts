import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video-player',
  template: `
    <video
      #target
      class="video-js"
      controls
      muted
      playsinline
      preload="none"
    ></video>
  `,
  styleUrls: ['./video-player.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target', { static: true }) target: ElementRef | null = null;

  // See options: https://videojs.com/guides/options
  @Input() options: {
    fluid?: boolean;
    aspectRatio?: string;
    autoplay: boolean;
    controls: boolean;
    sources: {
      src: string;
      type: string;
    }[];
  } = {
    autoplay: true,
    controls: true,
    sources: [],
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  player: videojs.Player;

  constructor(private elementRef: ElementRef) {}

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    this.player = videojs(
      this.target?.nativeElement,
      this.options,
      function onPlayerReady() {
        console.log('onPlayerReady');
      }
    );
  }

  // Dispose the player OnDestroy
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
