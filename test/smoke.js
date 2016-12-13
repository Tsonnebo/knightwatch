module.exports = {
  'Open Google in chrome' : function (browser) {
      browser
          .windowMaximize()
          .url(browser.launch_url)
          .waitForElementVisible('body', 5000, 'Browser opened')
          .waitForElementVisible('div[id=main]', 5000, 'Page components rendered')
          .end();
  }
};
