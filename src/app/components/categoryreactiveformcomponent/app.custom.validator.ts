import { AbstractControl } from '@angular/forms';

export class CustomValidator {
    // if method is valid it will return null,
    // else it will return JSON Object as {}
    // e.g. {checkEvenn: false}
    static checkEven(ctrl: AbstractControl) : any {
       // value to be entered in the control
       let value = parseInt(ctrl.value);
       if(value % 2 === 0) {
         return null; // valid
       } else {
         return {checkEven: true}; // invalid
       }
    }
}
