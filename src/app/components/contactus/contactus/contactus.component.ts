import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  infomessage(){
    console.log('message send')
    alert('message send');
  }

}
