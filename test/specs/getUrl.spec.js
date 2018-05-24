import Page from './page'

const page = new Page();

describe('First example test', function()  {
    it('Get URL from my site', function() {
        page.open('/');
        page.searchElement('a[href="/lights"]')
        const url = page.getUrl();
        console.log(url);
        page.pause();
    })
});