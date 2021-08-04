import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table'

export interface Data {
  id : string,	
  createdAt:string,	
  name:string,	
  //avatar:string,
  country:string,	
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  userData : Data[] = [
    {
      "id":"1",
      "createdAt":"2020-10-05T06:58:53.432Z",
      "name":"Kylee Marks Jr.",
      //avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/swooshycueb/128.jpg",
      "country":"Jordan"
    }           
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
