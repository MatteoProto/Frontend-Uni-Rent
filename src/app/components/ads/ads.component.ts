import {Component} from '@angular/core';
import {AdsService} from "../../services/ads.service";
import {Ads} from "../../common/ads";

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent {

  ads: Ads[] = []

  constructor(private adsService: AdsService) {
    this.listAds();
  }

  listAds() {
    this.adsService.getAdsList().subscribe(
      data => this.ads = data
    )
  }

}
