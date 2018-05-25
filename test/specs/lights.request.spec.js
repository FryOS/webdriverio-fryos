import Page from './page'
import FormPage from './form'

const page = new Page();
const formPage = new FormPage();

describe('request form', function()  {
    it('input valid data', function() {
        formPage.open();
        page.pause()
        formPage.name.setValue('Алексей');
        formPage.phone.setValue('80333333333');
        formPage.email.setValue('test@test.ru');
        formPage.city.setValue('Казань');
        formPage.personalData.leftClick(25,2190);
        browser.debug();
        page.pause(10000);

        // page.searchElement('input[name="hasAbbAccount"]').click();
        // page.searchElement('input[name="personalData"]').click();


    })
})