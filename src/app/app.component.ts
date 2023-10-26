import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unirent'

  // img path
  staticPath = 'assets/images/static'
  backgroundPath = ''
  logoPath = this.staticPath + '/logo.png'
  placeholderCirclePath = this.staticPath + '/placeholder-circle.png'
  dePintoPath = this.staticPath + '/de-pinto.png'
}
