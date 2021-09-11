import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExposerService } from '../exposer.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  videos = [{}, {}, {}, {}, {}];
  constructor(
    private route: Router,
    private service: ExposerService,
    private router: ActivatedRoute
  ) {}
  base = '../../../assets/video/';
  vname = this.base + this.router.snapshot.paramMap.get('name') + '.mp4';
  video;
  vid;
  playlist;
  ngOnInit(): void {
    // this.vid = this.router.snapshot.paramMap.get('vid');
    // this.fetchvideo();
  }
  fetchvideo() {
    this.service.getVido(this.vid).subscribe((data) => {
      this.video = data;
      this.getPlaylist();
    });
  }

  getPlaylist() {
    console.log(this.video.playlist);
    this.service.getPlayList(this.video.playlist).subscribe((data) => {
      this.playlist = data;
      console.log(this.playlist);
    });
  }
}
