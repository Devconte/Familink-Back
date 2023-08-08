const errors = {

  error400(req, res) {
    res.status(400).json({ status: 'error', code: 400, message: 'Bad Request' });
  },
  error401(req, res) {
    res.status(404).json({ status: 'error', code: 401, message: 'Unauthorized' });
  },
  error403(req, res) {
    res.status(404).json({ status: 'error', code: 403, message: 'Forbidden' });
  },
  error404(req, res) {
    res.status(404).json({ status: 'error', code: 404, message: 'Not Found' });
  },
  error500(req, res) {
    res.status(404).json({ status: 'error', code: 500, message: 'Internal Server Error' });
  },
};
module.exports = errors;
