const get404 = (req, res, next) => {
  res.render("404");
};

module.exports = { get404 };