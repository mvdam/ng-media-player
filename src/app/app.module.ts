import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { VideoComponent } from './video/video.component';
import { SearchComponent } from './search/search.component';
import { PlaybackComponent } from './playback/playback.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideoComponent,
    SearchComponent,
    PlaybackComponent,
    AddVideoComponent,
    VideoPlayerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
