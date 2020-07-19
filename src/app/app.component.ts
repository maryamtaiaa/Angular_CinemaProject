import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  imageComedie: Array<object> = [{
    image: 'assets/image/package.jpg',
    thumbImage: 'assets/image/package.jpg',
    alt: 'the package',
    title: 'The package'
  }, {
    image: 'assets/image/napa.jpg',
    thumbImage: 'assets/image/napa.jpg',
    title: 'Un week-end à Napa',
    alt: 'Image alt'
  }, {
    image: 'assets/image/caddyshack.jpg',
    thumbImage: 'assets/image/caddyshack.jpg',
    title: 'CaddyShack',
    alt: 'Image alt'
  }, {
    image: 'assets/image/hot.jpg',
    thumbImage: 'assets/image/hot.jpg',
    title: 'Hot Fuzz',
    alt: 'Image alt'
  }, {
    image: 'assets/image/heathers.jpg',
    thumbImage: 'assets/image/heathers.jpg',
    title: 'Heathers',
    alt: 'Image alt'
  }, {
    image: 'assets/image/trading.jpg',
    thumbImage: 'assets/image/trading.jpg',
    title: 'Trading Places',
    alt: 'Image alt'
  }, {
    image: 'assets/image/ghost.jpg',
    thumbImage: 'assets/image/ghost.jpg',
    title: 'GhostBusters',
    alt: 'Image alt'
  }
  , {
    image: 'assets/image/garde.jpg',
    thumbImage: 'assets/image/garde.jpg',
    title: 'Garde alternée',
    alt: 'Image alt'
  }
  , {
    image: 'assets/image/immediat.jpg',
    thumbImage: 'assets/image/immediat.jpg',
    title: 'Débarquement Immediat ',
    alt: 'Image alt'
  }
  ];


  imageAction: Array<object> = [{
    image: 'assets/image/piege.jpg',
    thumbImage: 'assets/image/piege.jpg',
    alt: 'Piège de cristal',
    title: 'Piège de cristal'
  }, {
    image: 'assets/image/madmax.jpg',
    thumbImage: 'assets/image/madmax.jpg',
    title: 'Mad Max:Fury Road',
    alt: 'Mad Max:Fury Road'
  }, {
    image: 'assets/image/matrix.jpg',
    thumbImage: 'assets/image/matrix.jpg',
    title: 'Matrix',
    alt: 'Matrix'
  }, {
    image: 'assets/image/KillBill.jpg',
    thumbImage: 'assets/image/KillBill.jpg',
    title: 'Kill Bill ',
    alt: 'Kill Bill '
  }, {
    image: 'assets/image/raid.jpg',
    thumbImage: 'assets/image/raid.jpg',
    title: 'The raid2',
    alt: 'The raid2'
  }, {
    image: 'assets/image/predator.jpg',
    thumbImage: 'assets/image/predator.jpg',
    title: 'Predator',
    alt: 'Predator'
  }, {
    image: 'assets/image/Heat.jpg',
    thumbImage: 'assets/image/Heat.jpg',
    title: 'Heat',
    alt: 'Heat'
  }
  , {
    image: 'assets/image/Rambo.jpg',
    thumbImage: 'assets/image/Rambo.jpg',
    title: 'Rambo',
    alt: 'Rambo '
  }
  , {
    image: 'assets/image/fatale.jpg',
    thumbImage: 'assets/image/fatale.jpg',
    title: 'Arme Fatale ',
    alt: 'Arme Fatale '
  }
  ];

  imageDrama: Array<object> = [{
    image: 'assets/image/lion.jpg',
    thumbImage: 'assets/image/lion.jpg',
    alt: 'Lion',
    title: 'Lion'
  }, {
    image: 'assets/image/shaw.jpg',
    thumbImage: 'assets/image/shaw.jpg',
    title: 'The Shawshank Redemption',
    alt: 'The Shawshank Redemption'
  }, {
    image: 'assets/image/darknight.jpg',
    thumbImage: 'assets/image/darknight.jpg',
    title: 'The Dark Knight',
    alt: 'The Dark Knight'
  }, {
    image: 'assets/image/point.jpg',
    thumbImage: 'assets/image/point.jpg',
    title: 'Tu ne tueras point',
    alt: 'Tu ne tueras point'
  }, {
    image: 'assets/image/ombre.jpg',
    thumbImage: 'assets/image/ombre.jpg',
    title: 'Les Figures de l ombre',
    alt: 'Les Figures de l ombre'
  }, {
    image: 'assets/image/patient.jpg',
    thumbImage: 'assets/image/patient.jpg',
    title: 'Patients',
    alt: 'Patients'
  }, {
    image: 'assets/image/demain.jpg',
    thumbImage: 'assets/image/demain.jpg',
    title: 'Demain Tout Commence',
    alt: 'Demain Tout Commence'
  }
  , {
    image: 'assets/image/saison.jpg',
    thumbImage: 'assets/image/saison.jpg',
    title: 'La Saison des femmes',
    alt: 'La Saison des femmes'
  }
  , {
    image: 'assets/image/pianist.jpg',
    thumbImage: 'assets/image/pianist.jpg',
    title: 'The Pianist',
    alt: 'The Pianist'
  }
  ];

  imageFiction: Array<object> = [{
    image: 'assets/image/house.jpg',
    thumbImage: 'assets/image/house.jpg',
    alt: 'The Haunting of Hill House',
    title: 'The Haunting of Hill House'
  }, {
    image: 'assets/image/trailer.jpg',
    thumbImage: 'assets/image/trailer.jpg',
    title: 'Hereditary',
    alt: 'Hereditary'
  }, {
    image: 'assets/image/lights.jpg',
    thumbImage: 'assets/image/lights.jpg',
    title: 'Lights Out',
    alt: 'Lights Out'
  }, {
    image: 'assets/image/annabelle.jpg',
    thumbImage: 'assets/image/annabelle.jpg',
    title: 'Annabelle:Creation',
    alt: 'Annabelle:Creation'
  }, {
    image: 'assets/image/world.jpg',
    thumbImage: 'assets/image/world.jpg',
    title: 'Jurassic World',
    alt: 'Jurassic World'
  }, {
    image: 'assets/image/impossible.jpg',
    thumbImage: 'assets/image/impossible.jpg',
    title: 'Mission:Impossible ',
    alt: 'Mission:Impossible '
  }, {
    image: 'assets/image/friend.jpg',
    thumbImage: 'assets/image/friend.jpg',
    title: 'Imaginary Friend',
    alt: 'Imaginary Friend'
  }
  , {
    image: 'assets/image/solomon.jpg',
    thumbImage: 'assets/image/solomon.jpg',
    title: 'Solomon Kane',
    alt: 'Solomon Kane'
  }
  , {
    image: 'assets/image/imaginarium.jpg',
    thumbImage: 'assets/image/imaginarium.jpg',
    title: 'The imaginarium of doctor Parnassus',
    alt: 'The imaginarium of doctor Parnassus'
  }
  ];

}
