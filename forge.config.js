module.exports = {
    packagerConfig: {
        asar: true,
        appBundleId: 'com.aizistral.electronbuildshenanigans',
        appCopyright: "© 2023 Aizistral",
        appCategoryType: 'public.app-category.games',
        icon: './src/assets/favicon',
        extraResource: [
            "./assets/favicon.ico",
            "./assets/favicon.png",
            "./assets/favicon.icns"
        ]
    },
    rebuildConfig: {},
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                // iconUrl: 'URL_HERE'
                setupIcon: './assets/favicon.ico',
                loadingGif: './assets/install.gif',
                authors: 'Aizistral',
            },
        },
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin'],
        },
        {
            name: '@electron-forge/maker-deb',
            config: {
                options: {
                    icon: './assets/favicon.png',
                }
            },
        },
        {
            name: '@electron-forge/maker-dmg',
            config: {
                icon: './assets/favicon.icns'
            }
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {},
        },
        {
            name: "@reforged/maker-appimage",
            config: {
                options: {
                    // Package name.
                    name: "electron-build-shenanigans",
                    // Executable name.
                    bin: "electron-build-shenanigans",
                    // Human-friendly name of the application.
                    productName: "ElectronBuildShenanigans",
                    // `GenericName` in generated `.desktop` file.
                    genericName: "Example application",
                    // Path to application's icon.
                    icon: "./assets/favicon.png",
                    // Desktop file to be used instead of the configuration above.
                    // desktopFile: "/path/to/example-app.desktop",
                    // Release of `AppImage/AppImageKit`, either number or "continuous".
                    AppImageKitRelease: "continuous",
                    // Support parsing Arch Linux '*_flags.conf' file.
                    flagsFile: "true"
                }
            }
        }
    ],
    plugins: [
        {
            name: '@electron-forge/plugin-auto-unpack-natives',
            config: {},
        },
        {
            name: '@electron-forge/plugin-webpack',
            config: {
                mainConfig: './webpack.main.config.js',
                renderer: {
                    config: './webpack.renderer.config.js',
                    entryPoints: [
                        {
                            html: './src/index.html',
                            js: './src/renderer.js',
                            name: 'main_window',
                            preload: {
                                js: './src/preload.js',
                            },
                        },
                    ],
                },
            },
        },
    ],
};
