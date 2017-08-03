import { Directive, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl, Validators, NG_VALIDATORS } from "@angular/forms";
import { onlyEnglishValidator } from "./only-english.validator";

@Directive({
  selector: '[appOnlyEnglish]',
  providers: [{ useExisting: OnlyEnglishDirective, multi: true, provide: NG_VALIDATORS}]
})
export class OnlyEnglishDirective implements Validator {
  private valFn = Validators.nullValidator;
  constructor() {
    this.valFn = onlyEnglishValidator();
  }

  validate(control: AbstractControl) {
    return this.valFn(control);
  }
}
