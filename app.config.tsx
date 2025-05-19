import "dotenv/config";

export default {
  expo: {
    name: "troott",
    slug: "troott",
    version: "1.0.0",
    sdkVersion: "^52.0.46",
    platforms: ["android","ios"],
    android: {
      package: "com.troott.app",
      versionCode: 1,
      plugins: [
        ["expo-edge-to-edge", { enabled: true }]
      ],
    },
    extra: {
      TROOTT_API_URL_LOCAL: process.env.TROOTT_API_URL_LOCAL,
    },
  },
};
