import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vue-wrapper',
  templateUrl: './vue-wrapper.component.html',
  styleUrls: ['./vue-wrapper.component.scss'],
})
export class VueWrapperComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    import('vueTodo/app' as any).then((vueApp) => {
      vueApp.default(this.el.nativeElement);
    });
  }
}
