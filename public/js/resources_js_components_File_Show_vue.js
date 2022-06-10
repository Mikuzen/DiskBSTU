"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_File_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/File/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/File/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router */ "./resources/js/router.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Show",
  data: function data() {
    return {
      file: null
    };
  },
  mounted: function mounted() {
    this.getFile();
  },
  methods: {
    getFile: function getFile() {
      var _this = this;

      axios.get('/api/V1/files/' + this.$route.params.file).then(function (res) {
        _this.file = res.data.data;
      });
    },
    deleteFile: function deleteFile(file) {
      axios["delete"]("/api/V1/files/" + file).then(function () {
        _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
          name: 'file.index'
        });
        alert('Файл был удален');
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/File/Show.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/File/Show.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_910c0c16_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=910c0c16&scoped=true& */ "./resources/js/components/File/Show.vue?vue&type=template&id=910c0c16&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/File/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_910c0c16_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_910c0c16_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "910c0c16",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/File/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/File/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/File/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/File/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/File/Show.vue?vue&type=template&id=910c0c16&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/File/Show.vue?vue&type=template&id=910c0c16&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_910c0c16_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_910c0c16_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_910c0c16_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=910c0c16&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/File/Show.vue?vue&type=template&id=910c0c16&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/File/Show.vue?vue&type=template&id=910c0c16&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/File/Show.vue?vue&type=template&id=910c0c16&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row-cols-2" }, [
      _vm._m(0),
      _vm._v(" "),
      _vm.file
        ? _c("div", { staticClass: "row" }, [
            _c("p", [
              _c("strong", [_vm._v("ID владельца файла: ")]),
              _vm._v(
                "\n                " +
                  _vm._s(_vm.file.user_id) +
                  "\n            "
              ),
            ]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v("Источник файла: ")]),
              _vm._v(
                "\n                " + _vm._s(_vm.file.src) + "\n            "
              ),
            ]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v("Формат файла: ")]),
              _vm._v(
                "\n                " + _vm._s(_vm.file.ext) + "\n            "
              ),
            ]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v("Название файла: ")]),
              _vm._v(
                "\n                " + _vm._s(_vm.file.title) + "\n            "
              ),
            ]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v("Размер файла: ")]),
              _vm._v(
                "\n                " +
                  _vm._s(_vm.file.size) +
                  " КБайт\n            "
              ),
            ]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v("Тип файла: ")]),
              _vm._v(
                "\n                " + _vm._s(_vm.file.type) + "\n            "
              ),
            ]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v("Закрытый файл: ")]),
              _vm._v(
                "\n                " +
                  _vm._s(_vm.file.private ? "Закрытый" : "Открытый") +
                  "\n            "
              ),
            ]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v("Дата создания файла: ")]),
              _vm._v(
                "\n                " +
                  _vm._s(
                    _vm.file.created_at ? _vm.file.created_at : "Файл не удален"
                  ) +
                  "\n            "
              ),
            ]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v("Файл удален: ")]),
              _vm._v(
                "\n                " +
                  _vm._s(
                    _vm.file.deleted_at ? _vm.file.deleted_at : "Файл не удален"
                  ) +
                  "\n            "
              ),
            ]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v("Публичная ссылка на файл: ")]),
              _vm._v(
                "\n                " +
                  _vm._s(
                    _vm.file.link ? _vm.file.link.link : "Ссылка не создана"
                  ) +
                  "\n            "
              ),
            ]),
            _vm._v(" "),
            _c(
              "p",
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: {
                        name: "user.show",
                        params: { user: _vm.file.user_id },
                      },
                    },
                  },
                  [
                    _c("input", {
                      staticClass: "btn btn-primary",
                      staticStyle: { width: "275px" },
                      attrs: { value: "Просмотреть данные пользователя" },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.deleteFile(_vm.file.id)
                      },
                    },
                  },
                  [
                    _c("input", {
                      staticClass: "btn btn-danger",
                      attrs: { type: "button", value: "Удалить файл" },
                    }),
                  ]
                ),
              ],
              1
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm._m(1),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", [_c("strong", [_vm._v("Информация о файле")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("img", { attrs: { src: "", alt: "" } }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);