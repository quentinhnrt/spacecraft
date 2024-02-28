module.exports = {
  expo: {
    name: "spacecraft",
    slug: "spacecraft",
    owner: "quentin_honnart",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      "package": "com.spacecraft"
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      storybookEnabled: process.env.STORYBOOK_ENABLED,
      eas: {
        projectId: "7650ff8c-15d6-416f-b5af-8ba7d99ec125"
      }
    }
  }
};
