import "dotenv/config";

export default {
    expo: {
      name: "troott",
      slug: "troott",
      version: "1.0.0",
      extra: {
        TROOTT_API_URL_LOCAL: process.env.TROOTT_API_URL_LOCAL,
      },
    },
  };
  