import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class BusNameForm {

    constructor(private formBuilder: FormBuilder) { }

    public createForm(): FormGroup {
        return this.formBuilder.group({
            name: this.formBuilder.control('', []),
            url: this.formBuilder.control('', [])
        });
    }
}
