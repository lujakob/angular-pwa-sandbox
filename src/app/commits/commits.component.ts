import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repos',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {

  results: any = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {

    let name = this.route.snapshot.paramMap.get('name');

    if (name) {

      const url = `https://api.github.com/repos/lujakob/${name}/commits`;

      this.http.get(url).subscribe(data => {
        this.results = data;
      });
    }

  }

}
