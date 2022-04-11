import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IMenu } from 'src/app/shared/IMenu';
 
@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  menuList: Observable<IMenu[]>;
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.menuList = this.httpService.get<IMenu[]>("http://localhost:4200/assets/menu.json");
  }
}
