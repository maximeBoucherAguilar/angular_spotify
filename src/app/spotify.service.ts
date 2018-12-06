import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private spotifyUrlSearchAlbum:string = 'https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=';
  private spotifyUrlSearchChanteur = 'https://api.spotify.com/v1/search?type=artist&market=FR&limit=10&q=';
  private spotifyUrlAlbum = 'https://api.spotify.com/v1/albums/';
  private spotifyUrlMyPlaylist = 'https://api.spotify.com/v1/me/playlists/'; 
  private spotifyUrlPlaylist = 'https://api.spotify.com/v1/playlists/';
  private spotifyUrlCreatePlaylist = 'https://api.spotify.com/v1/users/';
  private spotifyUrlUser = 'https://api.spotify.com/v1/me';

  private token:string = 'BQDK-uHsk8o1ZcKSevcOsyne-Ygwph7NN3d0-K9qM6MckFswFGkKSl8dMNfpjgzzm-7CTVXNvazvQGJIVK4wPFEq4cslb6xCx2Qvp_etfgsy29CUIb4hyphbjB9wc7tZdHSN79EuU__7Eg5cKbrabA9Ch2dit47PFDOIROQXvRHdZWI-ndYo-Zq16piV0gRLJ6FlVy2UdqariHo';
  private headers:HttpHeaders;

  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization' : 'Bearer '+ this.token });
  }

  getAlbums(mot:string) {
    return this.http.get<any[]>(this.spotifyUrlSearchAlbum+mot, { headers : this.headers})
  }

  getChanteur(mot:string) {
    return this.http.get<any[]>(this.spotifyUrlSearchChanteur+mot, { headers : this.headers})
  }

  getAlbum(mot:string) {
    return this.http.get<any[]>(this.spotifyUrlAlbum+mot, { headers : this.headers})
  }

  getPlaylist() {
    return this.http.get<any[]>(this.spotifyUrlMyPlaylist, { headers : this.headers})
  }

  getDetailsPlaylist(id:string) {
    return this.http.get<any[]>(this.spotifyUrlPlaylist+id, { headers : this.headers})
  }

  deleteFromPlaylist(id:string,uriTracks,i:number) {
    return this.http.request(
      "delete", 
      this.spotifyUrlPlaylist+id+'/tracks', {
        "body" : { "tracks" : [
            { "uri": uriTracks, "positions":[i] }
          ]
        },
        "headers": this.headers })
  }

  getUser() {
    return this.http.get<any>(this.spotifyUrlUser, { headers : this.headers})
  }

  postPlaylist(userId:string, name:string, desc:string) {
    return this.http.post(this.spotifyUrlCreatePlaylist+userId+'/playlists', {
      "name": name,
      "description": desc
    } ,
    { headers : this.headers})
  }

  postNewTrackOnplaylist(playlistId:string, uriTracks:string) {
    return this.http.post(this.spotifyUrlPlaylist+playlistId+'/tracks', {
      "uris": [uriTracks]
    },
    { headers : this.headers})
  }
}