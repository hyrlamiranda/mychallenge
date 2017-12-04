var Advert = require('./page-objects/advert.po.js');
var advert = Advert;

describe('Creating an advert', function(){

  // Runs for every test (it) that follows
  beforeEach(function(){
    browser.waitForAngularEnabled(false);
    //browser.ignoreSynchronization = true;
    //browser.ignoreSynchronization = false;
    browser.get('https://www.otodom.pl/');
  });

    it('should create a new advertisement', function() {
     
      advert.getAccount(); 
      browser.sleep(2000);
      browser.get('https://www.otodom.pl/wynajem/mieszkanie/nowe-ogloszenie/');
      browser.sleep(2000);
      advert.setAdTitleField("Hyrla Teste");
      advert.setAdPriceField("234");
      advert.getOneCurrency();
      advert.setSecondPriceField("245");
      advert.getSecondCurrency();
      advert.setDepositField("123");
      advert.getSecondDeposit();
      browser.sleep(2000);
      advert.setSurface("232");
      advert.setAddPersonField("Hyrla Test");
      advert.setAddNumberField("987654321");
      advert.setAddEmailField("qachallengept.2017pt@gmail.com")
      advert.getButtonPreview();
      browser.sleep('3000')

      expect(element(by.css('alert alert-danger')).getText()).toEqual('The form has not been completed correctly. Correct the selected fields.');
      browser.sleep('1000')
    });
 });