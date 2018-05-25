export default class Page {
    // constructor() {
    //     this.title = 'My Page';
    // }
    open(path) {
        browser.url(path);
        console.log(path);
    }
    searchElement(selector){
        $(selector);
    }
    getUrl(){
        return browser.getUrl();
    }
    clickElement(selector){
        browser.click(selector);
    }
    setValue(selector, value){
        browser.setValue(selector,value);
    }

    pause(ms=3000){
        browser.pause(ms);
    }

}