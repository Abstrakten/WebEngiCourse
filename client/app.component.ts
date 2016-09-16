import { Component }         from '@angular/core';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent { }

