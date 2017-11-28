function customResponses(req, res, next) {
  res.notFound = function notFound() {
    const err = new Error('Not Found');
    err.status = 404;

    throw err;
  };

  res.badRequest = function badRequest() {
    const err = new Error('Bad Request');
    err.status = 400;

    throw err;
  };

  res.unauthorized = function unauthorized(url='/login', message='Sorry but you need to log in to see this page!') {
    req.flash('alert', message);
    return res.redirect(url);
  };

  next();
}

module.exports = customResponses;
