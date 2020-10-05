const dotenv = require('dotenv');
dotenv.config();

const api_key = process.env.GOOGLE_API_KEY;
const HtmlWebpackPlugin = require('html-webpack-plugin');
    
    module.exports = {
      entry: 'index.js',
      plugins: [
        new HtmlWebpackPlugin({
          inject: false,
          template: '../../templates/home.html',

          // Pass the full url with the key!
          apiUrl: `https://maps.googleapis.com/maps/api/js?key=${api_key}&callback=initMap&libraries=visualization&v=weekly`,

        });
      ]
    }
