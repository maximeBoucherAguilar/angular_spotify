import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.css']
})
export class AddPlaylistComponent implements OnInit {

  userId:string;

  constructor(private spotService:SpotifyService) { }

  ngOnInit() {
    this.getUserId();
  }

  getUserId() {
    this.spotService.getUser().subscribe((resultat) => {
      console.log(resultat);
      this.userId = resultat.id;
    })
  }

  addPlaylist(name:string,desc:string){
    this.spotService.postPlaylist(this.userId,name,desc).subscribe((resultat) => {
      console.log(resultat);
    })
  }
}
