import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-react-wrapper',
  templateUrl: './react-wrapper.component.html',
  styleUrls: ['./react-wrapper.component.scss'],
})
export class ReactWrapperComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    import('reactCalc/app' as any).then((reactApp) => {
      reactApp.default(this.el.nativeElement);
    });
  }
}
