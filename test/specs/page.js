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
    pause(){
        browser.pause(3000);
    }

}