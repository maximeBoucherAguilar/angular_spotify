import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { ListealbumComponent } from './listealbum/listealbum.component';
import { ListechanteursComponent } from './listechanteurs/listechanteurs.component';
import { DetailalbumComponent } from './detailalbum/detailalbum.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistdetailComponent } from './playlistdetail/playlistdetail.component';
import { AddPlaylistComponent } from './add-playlist/add-playlist.component';


export const appRoutes: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'listealbum', component: ListealbumComponent },
    { path: 'listechanteur', component: ListechanteursComponent},
    { path: 'album/:id', component: DetailalbumComponent},
    { path: 'playlist', component: PlaylistComponent},
    { path: 'playlist/:id', component: PlaylistdetailComponent},
    { path: 'newPlaylist', component: AddPlaylistComponent},
   ]

