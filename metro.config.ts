const { getDefaultConfig } = require("expo/metro-config");
const { wrapWithReanimatedMetroConfig } = require("react-native-reanimated/metro-config");

module.exports = (() => {
  let config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer/expo")
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext: string) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"]
  };

  return wrapWithReanimatedMetroConfig(config);
})();