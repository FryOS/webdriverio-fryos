import Page from './page';

export default class FormPage extends Page {

    get name() { return browser.element('input[name="name"]'); }

    // get someElement() {
    //     let element = browser.element('input[name="name"]');
    //     console.log(element);
    //     return element;
    // }

    get phone() { return browser.element('input[name="phone"]'); }
    get email() { return browser.element('input[name="email"]'); }
    get city() { return browser.element('input[name="city"]'); }
    get hasAbbAccount() { return browser.element('input[name="hasAbbAccount"]'); }
    get personalData () { return browser.element('input[name="personalData"]'); }


    open() {
        super.open('lights');
    }

    submit() {
        this.form.submitForm();
    }

}


