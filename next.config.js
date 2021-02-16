const { createSecureHeaders } = require("next-secure-headers");
module.exports = {
  env: {
    API_BASE_URL: "https://staging-api.jgo.com.ph",
    customKey: "my-value",
  },
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
};
