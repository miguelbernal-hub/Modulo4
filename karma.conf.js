module.exports = function (config) {
  process.env.CHROME_BIN =
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      'src/app/store/reading.reducer.spec.ts'
    ],

    preprocessors: {
      'src/app/store/reading.reducer.spec.ts': ['webpack']
    },

    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.ts$/,
            use: {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                compilerOptions: {
                  noEmit: false
                }
              }
            },
            exclude: /node_modules/
          }
        ]
      },
      resolve: {
        extensions: ['.ts', '.js']
      }
    },

    reporters: ['progress', 'junit'],

    junitReporter: {
      outputDir: 'test-results',
      outputFile: 'junit.xml',
      useBrowserName: false
    },

    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};