module.exports = {
  'Google Search "Pineapple"' : function(browser) {
    browser
      .windowMaximize()
      .url(browser.launch_url)
      .setValue('#lst-ib','Pineapple')
      .sendKeys('#lst-ib', browser.Keys.ENTER)
      .waitForElementVisible('#rhscol', 5000, 'Search page renders')
      .assert.containsText('#rhs_block > div.g.rhsvw.kno-kp.mnr-c.g-blk > div.kp-blk._Jw._Rqb._RJe > div > div._OKe > div:nth-child(2) > div.kp-header > div > div.kp-hc > div > div > div._Q1n > div.kno-ecr-pt.kno-fb-ctx', 'Pineapple', 'Google search for "Pineapple" completes')
      .end();
  }
};
