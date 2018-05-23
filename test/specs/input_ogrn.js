describe('input ogrn', function()  {
	it('input ogrn', function() {
		browser
		.url('/')
		.element('a[href="/lights"]')
		.click()	
		.waitForVisible('input[name="ogrn"]', 3000)
		$('input[name="ogrn"]')
		.setValue('1165275036607')
		$('//*[@id="lightsBlock"]/div/div/div[3]/div/div[2]/div/div/button').click()
		
		
	})
})


// describe('input ogrn', function()  {
// 	it('input ogrn', function() {
// 		browser
// 		.url('/')
// 		.element('a[href="/lights"]')
// 		.click()
// 		.pause(3000)
// 		$('input[name="ogrn"]') //input[name="ogrn"]
// 		.setValue('123')
// 	})
// })
