describe('input ogrn', function()  {
	it('input ogrn', function() {
		browser
		.url('/')
		.element('a[href="/lights"]')
		.click()
		
		.waitUntil(function(){
			return $('input[name="ogrn"]') //input[name="ogrn"]
		},10000, 'вышло время')
		
	  .setValue('//*[@id="ogrn-undefined--32745"]', 123)
		.pause(3000);
		console.log('elem ' + elem);
	})
})
