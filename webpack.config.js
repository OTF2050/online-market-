var path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "main.js"
	},
	mode: "development",
	
	devServer: {

		static: {
			directory: path.join(__dirname, "/dist")
		  },
	
		port: 9000,
	
		devMiddleware: {
			writeToDisk: true,
		  },
		open: true,
	
	  },

	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						// options: {
						//   minimize: true,
						// }
					},
				],
			},
			{

				test: /\.(png|svg|jpe?g|gif)$/,
		
				use: [
		
				  {
		
					loader: "file-loader", 
		
					options: {
		
					  name: '[name].[ext]',
		
					  outputPath: "IMG",
					

					}
		
				  }
		
				]
		
	
},
{

	test: require.resolve('jquery'),

	loader: 'expose-loader',

	options: {

	  exposes: ['$', 'jQuery'],

	}

  },
  
  {

	test: /\.(sa|sc|c)ss$/,

	use: [

		  {

			loader: MiniCssExtractPlugin.loader, 

			options: {

			  publicPath: '../' 

			}

		  },

		  'css-loader',

		  'sass-loader'

		]

  },
]
},

	  
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/index.html",
		}),
		new HtmlWebpackPlugin({
			filename: "product.html",
			template: "./src/product.html",
		}),
		new HtmlWebpackPlugin({
			filename: "search.html",
			template: "./src/search.html",
		}),
		new HtmlWebpackPlugin({
			filename: "checkout.html",
			template: "./src/checkout.html",
		}),
		new HtmlWebpackPlugin({
			filename: "payment.html",
			template: "./src/payment.html",
		}),
		new HtmlWebpackPlugin({
			filename: "contact.html",
			template: "./src/contact.html",
		}),
		new MiniCssExtractPlugin({ filename: "css/style.css" }),
		new OptimizeCssAssetsPlugin({}),
	]

};