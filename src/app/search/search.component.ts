import { Component, OnInit } from '@angular/core';
import { Video } from 'src/domain/video';
import { VideoService } from '../video.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchQuery = '';
  results: Video[] | null = null;

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  handleSubmit() {
    this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
  }

  searchVideos() {
    this.results = this.videoService.findByQuery(this.searchQuery);
  }

  ngOnInit() {
    this.route.queryParams.pipe(filter((p) => p['q'])).subscribe((params) => {
      this.searchQuery = params['q'];
      this.searchVideos();
    });
  }
}
