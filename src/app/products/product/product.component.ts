import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products=[
  {
    title:'Card title1',
    discription:"Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title:'Card title2',
    discription:"Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title:'Card title3',
    discription:"Some quick example text to build on the card title and make up the bulk of the card's content.",
  }
]
  constructor() { }

  ngOnInit() {
  }

}
