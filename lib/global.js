module.exports = {
  beforeEach: function (browser, done) {
        browser
            .windowMaximize()
            .url(browser.launch_url)
            .waitForElementVisible('body', 5000, 'Browser opens')
            .waitForElementVisible('div[id=main]', 5000, 'Page renders & displays')
  },

  afterEach: function (browser, done) {
        browser.end(done);
  }
};
