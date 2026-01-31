exports.handler = async (event) => {
  const country = event.headers["x-nf-country"] || "unknown";

  if (country !== "IE") {
    return {
      statusCode: 403,
      body: "Access denied"
    };
  }

  return {
    statusCode: 200,
    body: "Access allowed"
  };
};
