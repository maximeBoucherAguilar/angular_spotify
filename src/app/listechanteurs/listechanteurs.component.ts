import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-listechanteurs',
  templateUrl: './listechanteurs.component.html',
  styleUrls: ['./listechanteurs.component.css']
})
export class ListechanteursComponent implements OnInit {

  private chanteur:any[];


  constructor(private spotService:SpotifyService) { }

  ngOnInit() {

  }

  chercherChanteur(nomChanteur:string){
    this.spotService.getChanteur(nomChanteur).subscribe((resultat) => {
      console.log(resultat);
      this.chanteur = resultat["artists"]["items"];
    })
  }
}
