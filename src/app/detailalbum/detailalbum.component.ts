import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-detailalbum',
  templateUrl: './detailalbum.component.html',
  styleUrls: ['./detailalbum.component.css']
})
export class DetailalbumComponent implements OnInit {

  private idalbum:string;
  private detAlbum;
  private trackList;
  private playlist:any[];

  constructor(private route:ActivatedRoute, private spotService:SpotifyService) {

  }

  ngOnInit() {
    this.idalbum = this.route.snapshot.params["id"];
    this.album();
    this.chercherPlaylist();
  }

  album(){
    this.spotService.getAlbum(this.idalbum).subscribe((resultat) => {
      console.log(resultat);
      this.detAlbum = resultat;
      this.trackList = this.detAlbum.tracks["items"];
    })
  }

  chercherPlaylist(){
    this.spotService.getPlaylist().subscribe((resultat) => {
      console.log(resultat);
      this.playlist = resultat["items"];
    })
  }

  addToPlaylist(plId:string,uriTracks:string) {
    // console.log(this.trackList);
    this.spotService.postNewTrackOnplaylist(plId,uriTracks).subscribe((resultat) => {
      console.log(resultat);
    })
  }
}
