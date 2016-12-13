module.exports = {

  'Google Search' : function(browser) {
    browser
      .page.homePage().searchFor("King Arthur")
  }


};
