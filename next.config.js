const { createSecureHeaders } = require("next-secure-headers");
module.exports = {  
  env: {
    API_BASE_URL: "https://staging-api.jgo.com.ph",
    customKey: "my-value",
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders({
          
          forceHTTPSRedirect: [
            true,
            { maxAge: 63072000, includeSubDomains: true },
          ],
          referrerPolicy: "same-origin",
          xssProtection: "block-rendering",
        }),
      },
    ];
  },
};
