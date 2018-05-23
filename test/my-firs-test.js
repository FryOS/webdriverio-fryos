describe('First example test', function()  {
	it('Get URL from my site', function() {
		browser
		.url('/')
		.element('a[href="/lights"]')
		.click()
		// .pause(3000);
		const url = browser.getUrl();
    console.log('url is: ' + url);
	})
})
