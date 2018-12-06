import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-playlistdetail',
  templateUrl: './playlistdetail.component.html',
  styleUrls: ['./playlistdetail.component.css']
})
export class PlaylistdetailComponent implements OnInit {

  private idplaylist:string;
  private detPlaylist;
  private trackList;

  constructor(private route:ActivatedRoute, private spotService:SpotifyService) { }

  ngOnInit() {
    this.idplaylist = this.route.snapshot.params["id"];
    this.playlist();
  }

  playlist(){
    this.spotService.getDetailsPlaylist(this.idplaylist).subscribe((resultat) => {
      console.log(resultat);
      this.detPlaylist = resultat;
      this.trackList = this.detPlaylist.tracks["items"];
    })
  }

  deleteFromPlaylist(i,uri){
    this.spotService.deleteFromPlaylist(this.idplaylist,uri,i).subscribe((resultat) => {
      console.log(resultat);
    });
    window.location.reload();
  }
}
