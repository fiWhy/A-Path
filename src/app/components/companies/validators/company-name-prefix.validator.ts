import { ValidatorFn, AbstractControl } from "@angular/forms";

export const companyNamePrefixValidator = (namePrefix: string): ValidatorFn =>
    (control: AbstractControl) => {
        const companyName = control.value;
        const regex = new RegExp(`^${namePrefix}.{1,}$`);
        return regex.test(control.value) ? null : { companyNamePrefix: { companyName } };
    }