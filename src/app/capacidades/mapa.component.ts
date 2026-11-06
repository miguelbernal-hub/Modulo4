import { Component } from '@angular/core'
import { GoogleMap } from '@nativescript/google-maps'

@Component({
  selector: 'mapa',
  templateUrl: './mapa.component.html',
  standalone: false,
})
export class MapaComponent {

  onReady(event: any): void {
    const map: GoogleMap = event.map

    map.addMarker({
      position: {
        lat: 4.7110,
        lng: -74.0721,
      },
      title: 'Bogotá',
      snippet: 'Marcador de ProyectoCurso',
    })
  }
}