import { LightningElement } from 'lwc';

export default class Form_validation_lwc_example extends LightningElement {
    formData = {};

    genderOptions = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' }
    ];

    handleChange(event) {
        const { name, type, value, checked } = event.target;
        this.formData[name] = type === 'checkbox' ? checked : value;

        // run individual field validation instantly
        this.validateField(event.target);
    }

    validateField(field) {
        // example custom validation
        if (field.name === 'terms' && !field.checked) {
            field.setCustomValidity('Please accept the terms');
        } else if (field.name === 'fullName' && !field.value) {            
            field.setCustomValidity('Name is required');
        }else if(!field.value){
            field.setCustomValidity(field.label+ ' is required');
        }else {
            field.setCustomValidity(''); // reset
        }

        if(field?.name === 'fullName' && field?.pattern !== undefined && field?.value !== undefined){
            let regularExp = new RegExp(field?.pattern);
            if (!regularExp.test(field?.value)) {
                field.setCustomValidity('only Digits are allowed');
            }
        }
        field.reportValidity();
    }

    handleSubmit() {
        const allFields = [...this.template.querySelectorAll('.validate')];
        let isValid = true;

        allFields.forEach(field => {
            this.validateField(field);
            if (!field.reportValidity()) {
                isValid = false;
            }
        });

        if (isValid) {
            console.log('Form Submitted Successfully', JSON.stringify(this.formData));
        }
    }
}