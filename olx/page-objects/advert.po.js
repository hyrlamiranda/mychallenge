var Advert = function() {
  
  var myAccount = element(by.partialLinkText("Dodaj ogłoszenie")).click();  
  var adTitle = element(by.id("add-title"));
  var adPrice = element(by.name("data[param_price][1]"));
  var adOneCurrency = element(by.css("option[value=\"EUR\"]"));
  var adSecondPrice =  element(by.name("data[param_rent][1]"));
  var adSecondCurrency = element(by.css("select[name=\"data[param_rent][currency]\"] > option[value=\"EUR\"]"));
  var adDeposit = element(by.name("data[param_deposit][1]"));
  var adSecondDeposit = element(by.css("select[name=\"data[param_deposit][currency]\"] > option[value=\"EUR\"]"));
  var Surface = element(by.id("param7"));
  var addPerson = element(by.id("add-person")).sendKeys("teste");
  var addNumber = element(by.id("add-phone")).sendKeys("123456778");
  var addEmail = element(by.id("add-email")).sendKeys("qachallenge.pt@gmail.com");
  var buttonPreview = element(by.id("preview-link")).click();

  this.getAccount = function() {
    myAccount.click();
  };

  this.setAdTitleField = function(title) {
    adTitle.sendKeys(title);    
  };
  
  this.setAdPriceField = function(price) {
    adPrice.sendKeys(price);
  };

  this.getOneCurrency = function() {
    adCurrencyOne.click();
  };
  
  this.setSecondPriceField = function(rent) {
    adSecondPrice.sendKeys(rent);          
  };

  this.getSecondCurrency = function() {
    adSecondCurrency.click();
  };

  this.setDepositField = function(deposit) {
    adDeposit.sendKeys(deposit);         
  };
  
  this.getSecondDeposit = function() {
    adSecondDeposit.click();
  };

  this.setSurface = function(value) {
    Surface.sendKeys(value);          
  };

  this.setAddPersonField = function(person) {
    addPerson.sendKeys(person);          
  };

  this.setAddNumberField = function(number) {
    addNumber.sendKeys(number);          
  };

  this.setAddEmailField = function(email) {
    addEmail.sendKeys(email);          
  };

  this.getButtonPreview = function() {
    buttonPreview.click();          
  };
}

module.exports = new Advert;
