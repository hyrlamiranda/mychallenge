var Page = require('./page-objects/loginandlogout.po.js');
var page = Page;

describe('Accessing login', function(){

  // Runs for every test (it) that follows
  beforeEach(function(){
    browser.waitForAngularEnabled(false);
    //browser.ignoreSynchronization = true;
    browser.get('https://www.otodom.pl/');

  });

//Login
it('should must log into created account', function() {

  page.getAcessLogin();
  browser.sleep(3000);
  page.setUserName('qachallengept.2017@gmail.com');
  page.setUserPassword('inicial2017');
  browser.sleep(1000);
  page.getLoginButton();
  expect(browser.getTitle()).toEqual('Otodom. Największy portal nieruchomości w Polsce');
  browser.sleep(1000);
});

//Logout
it('Should disconnect from account', function() {

  login.getAcessLogin();
  browser.sleep(3000);
  login.setUserName('qachallengept.2017@gmail.com');
  login.setUserPassword('inicial2017');
  browser.sleep('1000');
  login.getLoginButton();
  expect(browser.getTitle()).toEqual('Your ads');
  browser.sleep('1000');
  element(by.className('dropdown-toggle icon-user-rounded')).click();
  browser.sleep('1000');
  element(by.id('logout')).click();
  browser.sleep('2000');

});
});
