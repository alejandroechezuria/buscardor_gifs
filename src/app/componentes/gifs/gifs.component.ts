import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GifsService } from '../../gifs.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css'],
})
export class Gifscomponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private gifsService: GifsService
  ) {}
  d: string;
  gifs: any = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.d = params['d'];

      this.gifsService.getGifs(this.d).subscribe((gifs) => {
        this.gifs = gifs;
      });
    });
  }
}
