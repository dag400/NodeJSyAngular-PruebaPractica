import { Component, OnInit } from '@angular/core';

export interface Data {
  id : string,	
  createdAt:string,	
  company:string,	
  jobPosition:string,
  image:string,	
}

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})

export class JobsComponent implements OnInit {
  userData : Data[] = [
  {
    "id":"1","createdAt":"2020-10-06T04:05:13.218Z","jobPosition":"Product","company":"Collier Inc","image":"http://lorempixel.com/640/480/technics"},
  {
    "id":"2","createdAt":"2020-10-06T02:03:44.951Z","jobPosition":"Central","company":"Altenwerth - Rogahn","image":"http://lorempixel.com/640/480/business"},
  {
    "id":"3","createdAt":"2020-10-05T10:54:55.493Z","jobPosition":"Customer","company":"Nienow, Schroeder and Hand","image":"http://lorempixel.com/640/480/technics"},
  {
    "id":"4","createdAt":"2020-10-05T15:55:25.820Z","jobPosition":"Future","company":"Spinka, McLaughlin and Fay","image":"http://lorempixel.com/640/480/city"},
  {
    "id":"5","createdAt":"2020-10-05T10:01:14.591Z","jobPosition":"Direct","company":"Daniel - Reichert","image":"http://lorempixel.com/640/480/nightlife"},
  {
    "id":"6","createdAt":"2020-10-05T06:46:14.049Z","jobPosition":"Future","company":"Hettinger and Sons","image":"http://lorempixel.com/640/480/business"},
  {
    "id":"7","createdAt":"2020-10-05T13:20:24.359Z","jobPosition":"Senior","company":"Cole and Sons","image":"http://lorempixel.com/640/480/city"},
  {
    "id":"8","createdAt":"2020-10-05T07:53:34.652Z","jobPosition":"National","company":"Wisoky, Hand and Auer","image":"http://lorempixel.com/640/480/technics"},
  {
    "id":"9","createdAt":"2020-10-05T18:10:52.206Z","jobPosition":"Central","company":"Hermann LLC","image":"http://lorempixel.com/640/480/people"},
  {
    "id":"10","createdAt":"2020-10-05T07:13:02.051Z","jobPosition":"Future","company":"Shields, Mayert and Kub","image":"http://lorempixel.com/640/480/sports"},
  {
    "id":"11","createdAt":"2020-10-05T11:58:39.813Z","jobPosition":"Internal","company":"Flatley - Gibson","image":"http://lorempixel.com/640/480/sports"},
  {
    "id":"12","createdAt":"2020-10-06T00:38:09.810Z","jobPosition":"Internal","company":"Grant LLC","image":"http://lorempixel.com/640/480/business"},
  {
    "id":"13","createdAt":"2020-10-05T22:04:58.154Z","jobPosition":"Global","company":"Harvey, Cartwright and Streich","image":"http://lorempixel.com/640/480/sports"},
  {
    "id":"14","createdAt":"2020-10-05T17:16:24.512Z","jobPosition":"Regional","company":"Harris, Keeling and Bahringer","image":"http://lorempixel.com/640/480/food"},
  {
    "id":"15","createdAt":"2020-10-06T03:15:02.155Z","jobPosition":"Product","company":"Larson, Wolff and Nader","image":"http://lorempixel.com/640/480/transport"},
  {
    "id":"16","createdAt":"2020-10-05T11:29:49.536Z","jobPosition":"Human","company":"Schamberger Group","image":"http://lorempixel.com/640/480/people"},
  {
    "id":"17","createdAt":"2020-10-06T00:09:39.807Z","jobPosition":"Customer","company":"Ullrich - Moen","image":"http://lorempixel.com/640/480/food"},
  {
    "id":"18","createdAt":"2020-10-06T05:36:03.705Z","jobPosition":"National","company":"Brown Group","image":"http://lorempixel.com/640/480/abstract"},
  {
    "id":"19","createdAt":"2020-10-05T12:35:19.323Z","jobPosition":"International","company":"Raynor, Lesch and Grimes","image":"http://lorempixel.com/640/480/business"},
  {
    "id":"20","createdAt":"2020-10-05T17:12:31.243Z","jobPosition":"International","company":"Durgan LLC","image":"http://lorempixel.com/640/480/transport"},
  {
    "id":"21","createdAt":"2020-10-06T04:36:11.353Z","jobPosition":"Legacy","company":"Stroman - Lebsack","image":"http://lorempixel.com/640/480/transport"},
  {
    "id":"22","createdAt":"2020-10-05T10:13:02.098Z","jobPosition":"Lead","company":"Harber, Lemke and Senger","image":"http://lorempixel.com/640/480/city"},
  {
    "id":"23","createdAt":"2020-10-06T03:48:39.630Z","jobPosition":"Regional","company":"Willms Inc","image":"http://lorempixel.com/640/480/nightlife"},
  {
    "id":"24","createdAt":"2020-10-06T05:56:12.994Z","jobPosition":"Legacy","company":"Dicki - Walsh","image":"http://lorempixel.com/640/480/business"},
  {
    "id":"25","createdAt":"2020-10-05T23:47:33.164Z","jobPosition":"Investor","company":"Kemmer and Sons","image":"http://lorempixel.com/640/480/people"},
  {
    "id":"26","createdAt":"2020-10-06T03:35:35.205Z","jobPosition":"International","company":"Daniel, Gibson and Morissette","image":"http://lorempixel.com/640/480/transport"},
  {
    "id":"27","createdAt":"2020-10-05T18:34:31.695Z","jobPosition":"Central","company":"Simonis Group","image":"http://lorempixel.com/640/480/sports"},
  {
    "id":"28","createdAt":"2020-10-05T21:36:18.204Z","jobPosition":"Customer","company":"Rempel - Ryan","image":"http://lorempixel.com/640/480/fashion"},
  {
    "id":"29","createdAt":"2020-10-05T18:24:20.652Z","jobPosition":"Corporate","company":"Pollich Inc","image":"http://lorempixel.com/640/480/technics"},
  {
    "id":"30","createdAt":"2020-10-05T20:34:31.607Z","jobPosition":"Dynamic","company":"Prohaska - Goodwin","image":"http://lorempixel.com/640/480/city"},
  {
   "id":"31","createdAt":"2020-10-05T16:20:24.457Z","jobPosition":"Legacy","company":"Mills Group","image":"http://lorempixel.com/640/480/city"},
  {
    "id":"32","createdAt":"2020-10-05T09:19:03.255Z","jobPosition":"Investor","company":"Dooley LLC","image":"http://lorempixel.com/640/480/technics"},
  {
    "id":"33","createdAt":"2020-10-06T00:15:35.088Z","jobPosition":"Forward","company":"Upton, Ondricka and Bednar","image":"http://lorempixel.com/640/480/people"},
  {
    "id":"34","createdAt":"2020-10-05T23:54:21.086Z","jobPosition":"Forward","company":"Witting Inc","image":"http://lorempixel.com/640/480/business"},
  {
    "id":"35","createdAt":"2020-10-06T02:23:03.912Z","jobPosition":"Legacy","company":"Ledner, Jacobson and Schumm","image":"http://lorempixel.com/640/480/cats"},
  {
    "id":"36","createdAt":"2020-10-05T21:40:23.719Z","jobPosition":"Product","company":"Stanton Group","image":"http://lorempixel.com/640/480/sports"},
  {
    "id":"37","createdAt":"2020-10-05T12:06:20.806Z","jobPosition":"International","company":"Daugherty, Ziemann and Baumbach","image":"http://lorempixel.com/640/480/animals"},
  {
    "id":"38","createdAt":"2020-10-05T22:13:05.942Z","jobPosition":"Corporate","company":"Osinski Group","image":"http://lorempixel.com/640/480/animals"},
  {
    "id":"39","createdAt":"2020-10-05T08:20:46.907Z","jobPosition":"Lead","company":"Schamberger - Wisozk","image":"http://lorempixel.com/640/480/business"},
  {
    "id":"40","createdAt":"2020-10-05T23:14:00.750Z","jobPosition":"National","company":"Schinner - Corkery","image":"http://lorempixel.com/640/480/technics"}
  
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
