import {Component} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  // img path
  staticPath = 'assets/images/static'
  backgroundPath = ''
  logoPath = this.staticPath + '/logo.png'
  placeholderCirclePath = this.staticPath + '/placeholder-circle.png'
  dePintoPath = this.staticPath + '/de-pinto.png'
}
