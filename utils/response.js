exports.successResponse = (h, statusCode, data) => {
  return h
    .response({
      success: true,
      data: data,
    })
    .code(statusCode);
};

exports.errorResponse = (h, statusCode, message) => {
  return h
    .response({
      success: false,
      error: message,
    })
    .code(statusCode);
};
