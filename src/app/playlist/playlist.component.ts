import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  private playlist:any[];

  constructor(private spotService:SpotifyService) { 

  }

  ngOnInit() {
    this.chercherPlaylist();
  }

  chercherPlaylist(){
    this.spotService.getPlaylist().subscribe((resultat) => {
      console.log(resultat);
      this.playlist = resultat["items"];
    })
  }
}
