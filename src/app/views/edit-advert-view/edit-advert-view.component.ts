import {Component, Input, OnInit} from '@angular/core';
import {Advert} from "../../models/advert.model";
import {AdvertService} from "../../services/adverts/advert.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-advert-view',
  templateUrl: './edit-advert-view.component.html',
  styleUrls: ['./edit-advert-view.component.css']
})
export class EditAdvertViewComponent implements OnInit {

  advert : Advert | undefined;
  @Input() id :number;

  constructor(private advertService:AdvertService, private route:ActivatedRoute, private router:Router) {
    this.id = 0;
  }

  ngOnInit(): void {
    const id : number = this.route.snapshot.params['id'];
    this.advertService
      .getAdvertById(id)
      .then((advert:Advert) => this.advert = advert);
  }

  editionAnnonce(annonceModifie: Advert) : void {;
    this.advertService
      .modifierAnnonce(annonceModifie)
      .then(()=> {
        this.router.navigate(['adverts'])
      })
  }

}
