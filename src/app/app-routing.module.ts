import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { SearchComponent } from './search/search.component';
import { PlaybackComponent } from './playback/playback.component';

const routes: Routes = [
  {
    path: '',
    component: VideosComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'play/:id',
    component: PlaybackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
