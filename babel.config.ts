import { ConfigAPI } from '@babel/core';

interface BabelConfig {
    presets: string[];
    plugins: (string | [string, { moduleName: string; path: string; blocklist: null; allowlist: null; safe: boolean; allowUndefined: boolean; verbose: boolean; }])[];
}

module.exports = function (api: ConfigAPI): BabelConfig {
    api.cache.forever();
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            ['module:react-native-dotenv', {
                moduleName: '@env',
                path: '.env',
                blocklist: null,
                allowlist: null,
                safe: false,
                allowUndefined: true,
                verbose: false,
              }],
            "react-native-reanimated/plugin",
            "react-native-iconify/plugin",
        ],
    };
};
  