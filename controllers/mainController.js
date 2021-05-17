const mainController = {
    hello: (req, res) => {
      res.status(201).send("hello world  we are good to go");
    },
  
    pageNotFound: (req, res) => {
      res.status(404).send("404: Page not found");
    },
  
    redirectBack: (req, res) => {
      res.redirect(req.headers.referer);
    },
  };
  
  module.exports = mainController;
  