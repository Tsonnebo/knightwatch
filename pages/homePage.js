module.exports = function(browser){

  this.searchFor = function(keyword){
    browser
      .setValue('#lst-ib',keyword)
      .sendKeys('#lst-ib', browser.Keys.ENTER)
      .waitForElementVisible('#rhscol', 5000, 'Search page renders')
      .assert.containsText('#rso', keyword, 'Google search for "' + keyword + '" completes')
    return browser;
  };

};
