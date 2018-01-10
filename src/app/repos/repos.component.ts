import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  results: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const url = 'https://api.github.com/users/lujakob/repos';

    this.http.get(url).subscribe(data => {
      this.results = data;
    });
  }

}
