import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class MessageForm {
    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
    }

    createForm() : FormGroup {
        return this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            message: ['', [Validators.required]]
        });
    }
}