const get404 = (req, res, next) => {
  console.log(req.session);
  res.render("404");
};

module.exports = { get404 };
