import { Component, OnInit }  from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  template: `404: page not found`
})

export class NotFoundComponent implements OnInit {

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
