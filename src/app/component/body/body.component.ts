import { Component,  OnInit } from '@angular/core';
import { Image } from 'src/app/Image';
import { ImagesService } from 'src/app/service/images.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  title :string="";
 thumbnailUrl:string="";
 href:string="";
  url:string="";
 data: Image []=[];
 modal:any;
 

  constructor(private imagesService:ImagesService) { }

  ngOnInit(): void {
    this.imagesService.getImages().subscribe(data => {
      this.data = data
    })
  }
  
}
