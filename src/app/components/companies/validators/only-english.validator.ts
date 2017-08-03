import { ValidatorFn, AbstractControl } from "@angular/forms";

export const onlyEnglishValidator = (): ValidatorFn =>
    (control: AbstractControl) => {
        const input = control.value;
        return /^[a-zA-Z0-9-]*$/.test(input) ? null : { onlyEnglish: { control } };
    }