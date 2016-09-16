import { Component, OnInit }  from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: "/client/components/main/main.component.html"
})

export class MainComponent implements OnInit {

  private items = [["google", "http://google.com"], ["reddit", "http://reddit.com/"], ["facebook", "http://facebook.com"]]

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
  
  }

  ngOnInit() {

  }

}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/