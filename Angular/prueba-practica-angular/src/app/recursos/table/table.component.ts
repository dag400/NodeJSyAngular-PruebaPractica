import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'country', 'createdAt'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {}
}

export interface PeriodicElement {
  id: string;
  name: string;
  country: string;
  createdAt: string;
  avatar: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    "id": '1', name: "Kylee Marks Jr.", country: "Jordan", createdAt: "2020-10-05T06:58:53.432Z" ,"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/swooshycueb/128.jpg",},
  { 
    id:"2", createdAt:"2020-10-06T00:29:10.331Z", name:"Jillian Kassulke", avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/edkf/128.jpg","country":"Afghanistan"},
  {
    "id":"3","createdAt":"2020-10-05T08:23:26.818Z","name":"Beulah Goodwin","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/lepinski/128.jpg","country":"Malawi"},
  {
    "id":"4","createdAt":"2020-10-05T17:48:14.761Z","name":"Ms. Jewel Wintheiser","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/ryanjohnson_me/128.jpg","country":"Belarus"},
  {
    "id":"5","createdAt":"2020-10-06T03:58:22.430Z","name":"Eldridge Spinka","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/roxanejammet/128.jpg","country":"Haiti"},
  {
    "id":"6","createdAt":"2020-10-05T17:52:28.473Z","name":"Genesis Ebert","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/thewillbeard/128.jpg","country":"Tajikistan"},
  {
    "id":"7","createdAt":"2020-10-05T09:51:23.828Z","name":"Jerrell Jenkins","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/id835559/128.jpg","country":"United Arab Emirates"},
  {
    "id":"8","createdAt":"2020-10-05T06:20:10.047Z","name":"Maritza Reichel","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/begreative/128.jpg","country":"Wallis and Futuna"},
  {
    "id":"9","createdAt":"2020-10-05T19:37:20.836Z","name":"Christian Stark","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/ifarafonow/128.jpg","country":"Paraguay"},
  {
    "id":"10","createdAt":"2020-10-06T03:51:18.291Z","name":"Bertrand Treutel","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/alexivanichkin/128.jpg","country":"Central African Republic"},
  {
    "id":"11","createdAt":"2020-10-06T04:38:16.387Z","name":"Kole Nikolaus","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/davecraige/128.jpg","country":"Ireland"},
  {
    "id":"12","createdAt":"2020-10-05T21:58:42.246Z","name":"Tanner Leffler","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sovesove/128.jpg","country":"Bangladesh"},
  {
    "id":"13","createdAt":"2020-10-06T04:32:17.547Z","name":"Aurore Gleason PhD","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/dpmachado/128.jpg","country":"Aruba"},
  {
    "id":"14","createdAt":"2020-10-05T10:32:13.806Z","name":"Ms. Herbert Boyle","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/dactrtr/128.jpg","country":"Germany"},
  {
    "id":"15","createdAt":"2020-10-05T20:00:03.831Z","name":"Rosalinda Schowalter","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/primozcigler/128.jpg","country":"Kyrgyz Republic"},
  {
    "id":"16","createdAt":"2020-10-05T14:15:55.811Z","name":"Zoila Rodriguez","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/artd_sign/128.jpg","country":"Cuba"},
  {
    "id":"17","createdAt":"2020-10-05T12:24:48.528Z","name":"Alfredo Champlin","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/kinday/128.jpg","country":"Qatar"},
  {
    "id":"18","createdAt":"2020-10-06T00:45:35.646Z","name":"Rachael Howell","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/wim1k/128.jpg","country":"Northern Mariana Islands"},
  {
    "id":"19","createdAt":"2020-10-05T13:03:43.775Z","name":"Verna Hoppe","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/jmillspaysbills/128.jpg","country":"Bahrain"},
  {
    "id":"20","createdAt":"2020-10-06T04:25:56.556Z","name":"Eugenia Kulas","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/geran7/128.jpg","country":"Swaziland"},
  {
    "id":"21","createdAt":"2020-10-05T23:07:04.948Z","name":"Lukas VonRueden","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/cyril_gaillard/128.jpg","country":"Solomon Islands"},
  {
    "id":"22","createdAt":"2020-10-05T10:39:40.162Z","name":"Darrel Davis","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/vigobronx/128.jpg","country":"Seychelles"},
  {
    "id":"23","createdAt":"2020-10-05T17:50:40.568Z","name":"Agustin Lind II","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/osmanince/128.jpg","country":"New Zealand"},
  {
    "id":"24","createdAt":"2020-10-06T03:44:12.150Z","name":"Joel Larson","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/louis_currie/128.jpg","country":"Afghanistan"},
  {
    "id":"25","createdAt":"2020-10-06T05:49:33.560Z","name":"Dr. Stephen Pagac","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/vytautas_a/128.jpg","country":"Uganda"},
  {
    "id":"26","createdAt":"2020-10-05T22:27:27.675Z","name":"Wilber Brekke","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/superoutman/128.jpg","country":"Saint Vincent and the Grenadines"},
  {
    "id":"27","createdAt":"2020-10-05T17:55:46.965Z","name":"Johnny McLaughlin","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mauriolg/128.jpg","country":"Hungary"},
  {
    "id":"28","createdAt":"2020-10-05T06:41:51.125Z","name":"Elyse Bergstrom DDS","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_garcia/128.jpg","country":"Bermuda"},
  {
    "id":"29","createdAt":"2020-10-05T20:46:19.496Z","name":"Kelly Moen","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mikemai2awesome/128.jpg","country":"Georgia"},
  {
    "id":"30","createdAt":"2020-10-05T11:18:55.751Z","name":"Ulices Osinski","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/javorszky/128.jpg","country":"Kiribati"},
  {
    "id":"31","createdAt":"2020-10-05T17:12:44.285Z","name":"Chasity Pollich","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/collegeman/128.jpg","country":"Netherlands Antilles"},
  {
    "id":"32","createdAt":"2020-10-05T12:06:21.599Z","name":"Hallie Okuneva","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/alxndrustinov/128.jpg","country":"Isle of Man"},
  {
    "id":"33","createdAt":"2020-10-05T12:00:13.246Z","name":"Jaylen Jakubowski","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/macxim/128.jpg","country":"Germany"},
  {
    "id":"34","createdAt":"2020-10-05T15:22:27.132Z","name":"Theo Mueller","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/jm_denis/128.jpg","country":"Greenland"},
  {
    "id":"35","createdAt":"2020-10-05T17:19:57.417Z","name":"Adalberto Heller","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/michaelabehsera/128.jpg","country":"Macedonia"},
  {
    "id":"36","createdAt":"2020-10-05T19:16:43.547Z","name":"Alivia Donnelly","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/attacks/128.jpg","country":"Falkland Islands (Malvinas)"},
  {
    "id":"37","createdAt":"2020-10-06T05:00:24.610Z","name":"Jamaal Trantow","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/trueblood_33/128.jpg","country":"Saint Kitts and Nevis"},
  {
    "id":"38","createdAt":"2020-10-06T02:06:45.469Z","name":"Sandra Hettinger","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sunshinedgirl/128.jpg","country":"Spain"},
  {
    "id":"39","createdAt":"2020-10-05T08:54:10.083Z","name":"Daija Harvey","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/praveen_vijaya/128.jpg","country":"American Samoa"},
  {
    "id":"40","createdAt":"2020-10-05T11:27:57.400Z","name":"Raven Kihn","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/nwdsha/128.jpg","country":"Bangladesh"},
  {
    "id":"41","createdAt":"2020-10-05T09:43:47.101Z","name":"Deven Collier III","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/vanchesz/128.jpg","country":"Albania"},
  {
    "id":"42","createdAt":"2020-10-05T11:00:49.940Z","name":"Delores Hyatt","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/darylws/128.jpg","country":"Philippines"},
  {
    "id":"43","createdAt":"2020-10-05T18:41:48.289Z","name":"Deanna Glover","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/ionuss/128.jpg","country":"Ecuador"},
  {
    "id":"44","createdAt":"2020-10-05T07:25:31.995Z","name":"Grace Grimes","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/chrismj83/128.jpg","country":"France"},
  {
    "id":"45","createdAt":"2020-10-05T18:17:47.210Z","name":"Suzanne Walter","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/gofrasdesign/128.jpg","country":"Cape Verde"},
  {
    "id":"46","createdAt":"2020-10-06T04:14:37.948Z","name":"Miss Abner Windler","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/michaelcomiskey/128.jpg","country":"El Salvador"},
  {
    "id":"47","createdAt":"2020-10-05T22:29:23.374Z","name":"Howard Jacobi","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shalt0ni/128.jpg","country":"American Samoa"},
  {
    "id":"48","createdAt":"2020-10-05T11:52:06.826Z","name":"Henriette Bruen","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/jomarmen/128.jpg","country":"Kenya"},
  {
    "id":"49","createdAt":"2020-10-06T02:04:01.328Z","name":"Mr. Henriette Schamberger","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/keryilmaz/128.jpg","country":"Australia"},
  {
    "id":"50","createdAt":"2020-10-05T09:41:52.043Z","name":"Rafael Koepp","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/swaplord/128.jpg","country":"Morocco"},
  {
    "id":"51","createdAt":"2020-10-05T11:00:05.963Z","name":"Mrs. Cristal Lehner","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/martinansty/128.jpg","country":"Nigeria"},
  {
    "id":"52","createdAt":"2020-10-05T13:23:00.171Z","name":"Sonya Herzog","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/skkirilov/128.jpg","country":"Switzerland"},
  {
    "id":"53","createdAt":"2020-10-06T03:04:17.785Z","name":"Ellsworth Parker V","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/byrnecore/128.jpg","country":"Tokelau"},
  {
    "id":"54","createdAt":"2020-10-05T20:55:39.769Z","name":"Ada Johnson IV","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/nvkznemo/128.jpg","country":"United Kingdom"},
  {
    "id":"55","createdAt":"2020-10-05T21:13:55.448Z","name":"Brown Hoeger","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/helderleal/128.jpg","country":"Netherlands Antilles"},
  {
    "id":"56","createdAt":"2020-10-05T18:55:55.194Z","name":"Derrick McClure","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/strikewan/128.jpg","country":"Guinea"}
];