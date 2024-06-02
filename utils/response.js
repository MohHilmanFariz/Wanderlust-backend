exports.successResponse = (res, statusCode, data) => {
  res.status(statusCode).json({
    success: true,
    data: data,
  });
};

exports.errorResponse = (res, statusCode, message) => {
  res.status(statusCode).json({
    success: false,
    error: message,
  });
};
