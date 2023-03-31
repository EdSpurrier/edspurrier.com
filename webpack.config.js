// host/webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");
const path = require('path');


const localRemotes = {
  host          : 'host@http://localhost:3000/remoteEntry.js',
  /* nav           : 'nav@http://localhost:4200/moduleEntry.js', */
}

const devRemotes = {
  host          : 'host@https://edspurrier.com/remoteEntry.js',
  /* nav           : 'nav@https://nav.edspurrier.com/moduleEntry.js', */
}



module.exports = {
  entry: "./src/index",
  mode: "development",
  target: "web",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000, 
    historyApiFallback: true,
  },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.(less)$/,
        use: [{
            loader: 'style-loader' // creates style nodes from JS strings
        }, {
            loader: 'css-loader' // translates CSS into CommonJS
        }, {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              lessOptions: {
                  javascriptEnabled: true,
              }
          }
        }]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.json5$/i,
        loader: 'json5-loader',
        options: {
          esModule: true,
        },
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "host",
        filename: "remoteEntry.js",
        remotes: localRemotes,
        exposes: {
          "./hostStore" : './src/state/hostStore',
          "./userStore" : './src/state/userStore',
          './routes'    : './src/Router/routes',
        },
        shared: {
          ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies["react"],
          },
          "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      }),
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
        favicon: './public/favicon.ico',
    }),
    new Dotenv()
  ],
  resolve: { extensions: ['.tsx', '.ts', '.js'], 
    modules: ['node_modules', path.join(__dirname, 'src')], 
  }, 
  target: "web",
};