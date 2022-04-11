import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, map, mergeMap, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  componentTitle: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
   
      this.router.events.subscribe(data => {
        if (data instanceof ActivationStart) {
          this.componentTitle = data.snapshot.data['title'];
        }

      });
      this.router.events.pipe(
          filter((event) => event instanceof NavigationEnd),
          startWith(this.router)
      )
  
  }

  ngOnInit() {
      this.router.events.subscribe(data => {
        if (data instanceof ActivationStart) {
          console.log(data)
          this.componentTitle = data.snapshot.data['title'];
        }

      });
  }

}
