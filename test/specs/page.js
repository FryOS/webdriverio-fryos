export default class Page {
    constructor() {
        this.title = 'My Page';
    }
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

    pause(){
        browser.pause(3000);
    }

}