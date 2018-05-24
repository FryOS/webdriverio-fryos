import Page from './page'
const page = new Page();
const button = '//*[@id="lightsBlock"]/div/div/div[3]/div/div[2]/div/div/button';

describe('input ogrn', function()  {
    it('input ogrn', function() {
        page.open('/');
        page.searchElement('a[href="/lights"]');
        page.clickElement('a[href="/lights"]')

        // .waitForVisible('input[name="ogrn"]', 3000)
        // $('input[name="ogrn"]')
        //     .setValue('1165275036607')
        // $(button)
        //     .click()
        //     .pause(3000)
        //     .waitForVisible('input[name="phone"]', 3000)
        // $('input[name="phone"]')
        //     .setValue('73333333333')
        // $('button')
    })
})


// describe('input ogrn', function()  {
// 	it('input ogrn', function() {
// 		browser
// 		.url('/')
// 		.element('a[href="/lights"]')
// 		.click()
// 		.waitForVisible('input[name="ogrn"]', 3000)
// 		$('input[name="ogrn"]')
// 		.setValue('1165275036607')
// 		$(button)
//         .click()
//             .pause(3000)
//         .waitForVisible('input[name="phone"]', 3000)
//         $('input[name="phone"]')
//         .setValue('73333333333')
//         $('button')
// 	})
// })


