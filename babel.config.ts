import { ConfigAPI } from '@babel/core';

interface BabelConfig {
    presets: string[];
    plugins: string[];
}

module.exports = function (api: ConfigAPI): BabelConfig {
    api.cache.forever();
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            
            "react-native-reanimated/plugin",
            "react-native-iconify/plugin",
        ],
    };
};
  