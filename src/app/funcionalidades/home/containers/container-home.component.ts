import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'container-home',
    templateUrl: './container-home.component.html',
    styleUrls: ['./container-home.component.scss'],
})
export class ContainerHomeComponent implements OnInit, AfterViewInit, OnDestroy {

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {}

    ngOnDestroy(): void {}

}