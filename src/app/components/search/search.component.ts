import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  text: any ={};

  results: any = [];

  
  constructor() { }

  ngOnInit(): void {
  }

  search(event: any) {
    console.log(event.query)
    // this.mylookupservice.getResults(event.query).then(data => {
    //   this.results = data;
    // });
  }

}
