import { Component, OnInit }  from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CounterObj, CounterService } from "../../services/counter.service"

@Component({
  template: "{{x}}",
  providers: [CounterService]
})

export class SecondComponent implements OnInit {

	private x:number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private counterService: CounterService
  ) { 
  
  }

  ngOnInit() {
  	this.counterService.getCounter().then((obj) => {
  		console.log(obj)
  		this.x = obj.data
  	})
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
