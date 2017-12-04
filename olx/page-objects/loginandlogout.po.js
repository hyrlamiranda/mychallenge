var Page = function() {
  //var acessLogin = element(by.buttonText('My account')).click();
  var acessLogin = element(by.css('span.icon-user-rounded')).click();
  var userName = element(by.id('login'));
  var userPassword = element(by.id('password'));

  var loginButton = element(by.css('button.btn.btn-default'));

  this.getAcessLogin = function() {
    acessLogin.click();
  };

  this.setUserName = function(username) {
    userName.sendKeys(username);
  };

  this.setUserPassword = function(loginpassword) {
    userPassword.sendKeys(loginpassword);
  };

  this.getLoginButton = function() {
    loginButton.click();
  };
};

module.exports = new Page;
