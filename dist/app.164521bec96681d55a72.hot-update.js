"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateonline_market"]("app",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/custom.css */ \"./src/css/custom.css\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ \"./node_modules/bootstrap/dist/js/bootstrap.min.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery/dist/jquery.min */ \"./node_modules/jquery/dist/jquery.min.js\");\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_4__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/scss/custom.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _src_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/style.scss */ \"./src/style.scss\");\n/* harmony import */ var _src_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_style_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.min */ \"./node_modules/@fortawesome/fontawesome-free/js/all.min.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_7__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n$(window).on('load', function () {\r\n\r\n    $('[data-toggle=\"tooltip\"]').tooltip();\r\n\r\n    $('.add-to-cart-btn').on('click', function(){\r\n      alert('اضيف المنتج الى عربة الشراء');\r\n    });\r\n\r\n    $('#copyright').text(\"جميع الحقوق محفوظة للمتجر لسنة\" + new Date().getFullYear());\r\n\r\n    $('.product-option input[type=\"radio\"]').change(function(){\r\n      $(this).parents('.product-option').siblings().removeClass('active');\r\n      $(this).parents('.product-option').addClass('active')\r\n    });\r\n\r\n\r\n    //عندما تتغير كمية المنتج\r\n    $('[data-product-quantity]').change(function(){\r\n      var newQuantity = $(this).val();\r\n\r\n      //البحث عن السطر الذي يحتوي على معلومات المنتج\r\n      var parent = $(this).parents('[data-product-info]');\r\n\r\n      //اجلب سعر القطعة الواحدة من معلومات المنتج\r\n      var pricePerunit = parent.attr('data-product-price');\r\n      \r\n      //السعر الاجمالي للمنتج هو سعر القطعة مضروبا بعددها\r\n      var totaPriceForProduct = newQuantity * pricePerunit;\r\n\r\n      //عين السعر الجديد بخلية السعر الاجمالي للمنتج\r\n      parent.find('.total-price-for-product').text(totaPriceForProduct + '$');\r\n\r\n      //حدث السعر الاجمالي لكل المنتجات\r\n      calculateTotalPrice();\r\n\r\n    });\r\n\r\n    $('[data-remove-from-cart]').click(function(){\r\n      $(this).parents('[data-product-info]').remove();\r\n\r\n      // اعد حساب السعر الاجمالي للمنتجات بعد حذف احد المنتجات\r\n      calculateTotalPrice();\r\n    });\r\n\r\n\r\n\r\n\r\n\r\n    function calculateTotalPrice(){\r\n      //انشاء متغير جديد لحفظ السعر الاجمالي للمنتج\r\n      var totalPriceForAllProducts=0;\r\n      $('[data-product-info]').each (function (){\r\n\r\n        //جلب سعر القطعة الواحدة من الخاصية الموافقة\r\n        var pricePerunit = $(this).attr('data-product-price');\r\n\r\n        //اجلب كمية المنتج من حلق ادخال الكمية\r\n        var quantity = $(this).find('[data-product-quantity]').val();\r\n\r\n        var totalPriceForProducts = pricePerunit * quantity;\r\n\r\n        //اضف السعر الاجمالي لهذا المنتج الى السعر الاجمالي لكل منتجات , واحفظ القيمة في المتغير نفسه\r\n        totalPriceForAllProducts = totalPriceForAllProducts + (totalPriceForProducts)\r\n      });\r\n\r\n      // حذث السعر لكل المنتجات في الصفحة\r\n      $('#total-price-for-all-products').text(totalPriceForAllProducts + '$');\r\n    }\r\n    \r\n    \r\n    var citysByCountry = {\r\n      sa: ['جدة','الرياض'],\r\n      eg: ['القاهرة','الاسكندرية'],\r\n      qa: ['الوكرة','الدوحة'],\r\n      jo: ['عمان','الزرقاء'],\r\n      sy: ['دمشق','حلب','حماة']\r\n    };\r\n\r\n    //عندما يتغير البلد \r\n    $('#form-checkout select[name=\"contry\"]').change(function() {\r\n\r\n      //اجلب رمز البلد\r\n      var country = $(this).val();\r\n\r\n      //اجلب مدن هذا البلد من المتغير\r\n      var cities = citysByCountry[country];\r\n\r\n      //فرغ قائمة المدن\r\n      $('#form-checkout select[name=\"city\"]').empty();\r\n\r\n      //اضافة خيار اختر مدينة\r\n      $('#form-checkout select[name=\"city\"]').append(\r\n       '<option disabled selected value=\"\"> اختر المدينة</option>'\r\n      );\r\n\r\n      //اضف المدن الى قائمة المدن\r\n      cities.forEach(function(city){\r\n        var newOption = $('<option></option>');\r\n        newOption.text(city);\r\n        newOption.val(city);\r\n        $('#form-checkout select[name=\"city\"]').append(newOption);\r\n      });\r\n          \r\n    });\r\n\r\n\r\n    //عندما تتغير طريقة الدفع\r\n    $('#form-checkout input[name=\"payment_method\"]').change(function() {\r\n\r\n      //اجلب القيمة المختارة حاليا\r\n      var paymentMethod = $(this).val();\r\n\r\n      if(paymentMethod === 'on_delivary'){\r\n        \r\n        //اذا كانت عند الاستلام فعطل حقول الاستلام بالبطاقة\r\n        $('#credit-card-info input').prop('disabled',true);\r\n\r\n      } else{\r\n\r\n        //وإلا ففعلها\r\n        $('#credit-card-info input').prop('disabled',false);\r\n\r\n      }\r\n\r\n      //بدل معلومات البطاقة بين الظهور و الاختفاء\r\n      $('#credit-card-info').toggle();\r\n    });\r\n\r\n    //مكون البحث حسب السعر\r\n  });\r\n\r\n\r\n\n\n//# sourceURL=webpack://online-market/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c46a4da06d967bc75d8b")
/******/ })();
/******/ 
/******/ }
);