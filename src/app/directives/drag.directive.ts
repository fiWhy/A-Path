import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {
  private options;
  constructor(private el: ElementRef) { }

  @Input()
  set appDrag(options) {
    this.options = options;
  }

  @HostBinding("draggable")
  get draggable() {
    return true;
  }

  @HostListener("dragstart", ["$event"])
  onDragStart(event) {
    event.dataTransfer.setData("options", this.options);
  }

}
