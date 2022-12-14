import { Component, OnInit } from '@angular/core';
declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}
interface WayPoint {
  location: {
    lat: number,
    lng: number,
  };
  stopover: boolean;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map=null;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  // parque simon bolivar
  origin = { lat: -33.50627980829256, lng: -70.75185521030842 };
  // Parque la 93
  destination = { lat: -33.36890225906501, lng: -70.74861034476159 };
  wayPoints: WayPoint[] = [
    {
      location: { lat: -33.48008315834821, lng: -70.75250597314354 }, // Jardín Botánico
      stopover: true,
    },
  ];
  markers: Marker[] = [
    {
      position: {
        lat: 4.658383846282959,
        lng: -74.09394073486328,
      },
      title: 'Parque Simón Bolivar'
    },
    {
      position: {
        lat: 4.667945861816406,
        lng: -74.09964752197266,
      },
      title: 'Jardín Botánico'
    },
    {
      position: {
        lat: 4.676802158355713,
        lng: -74.04825592041016,
      },
      title: 'Parque la 93'
    },
    {
      position: {
        lat: 4.6554284,
        lng: -74.1094989,
      },
      title: 'Maloka'
    },
  ];
  ngOnInit() {
    this.loadMap();
  }

  constructor() { }
  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    const indicatorsEle: HTMLElement = document.getElementById('indicators');
    // create LatLng object
    const myLatLng = {lat: 4.658383846282959, lng: -74.09394073486328};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    }); 
    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(indicatorsEle);
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      
      mapEle.classList.add('show-map');
      this.renderMarkers();
      this.calculateRoute();
; 
    });
  }
  private calculateRoute() {
    this.directionsService.route({
      origin: this.origin,
      destination: this.origin,
      waypoints: this.wayPoints,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status)  => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
    }
  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }
  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

 

}
