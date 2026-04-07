export const validate = (schema) => (req, res, next) => {
  try {
    const data = schema.parse(req.body);
    req.body = data;
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Erro de validação!",
      error: error.issues.map(err => ({
        path: err.path[0],
        message: err.message
      }))[0],
    });
  }
};
