import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'sm-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  show$: Observable<boolean>;
  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.show$ = this.loaderService.loaderState$;
  }
}
