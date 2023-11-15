import { Component, OnInit, computed, signal } from '@angular/core';
import { Video } from 'src/domain/video';
import { VideoService } from '../video.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, filter } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchQuery = signal('');
  results$: Observable<Video[]> = EMPTY;
  disabled = computed(() => {
    console.log(this.searchQuery());
    return this.searchQuery().length === 0;
  });

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  handleSubmit() {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchQuery() },
    });
  }

  searchVideos() {
    this.results$ = this.videoService.findByQuery(this.searchQuery());
  }

  ngOnInit() {
    this.route.queryParams.pipe(filter((p) => p['q'])).subscribe((params) => {
      this.searchQuery.set(params['q']);
      this.searchVideos();
    });
  }
}
