"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_File_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/File/Create.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/File/Create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Create",
  data: function data() {
    return {
      user_id: null,
      files: [],
      status: null,
      errors: null
    };
  },
  methods: {
    store: function store() {
      var _this = this;

      var formData = new FormData();
      formData.append('user_id', this.user_id);

      for (var i = 0; i < this.files.length; i++) {
        var file = this.files[i];
        formData.append('files[' + i + ']', file);
      }

      axios.post('/api/V1/files', formData, {
        headers: {
          'Content-type': 'multipart/form-data'
        }
      }).then(function () {
        _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
          name: 'file.index'
        });
      })["catch"](function (error) {
        if (error.response) {
          _this.status = error.response.status;
          _this.errors = error.response.data.errors;
        } else if (error.request) {
          _this.errors = error.request.errors;
        } else {
          console.log('Error', error.message);
        }
      });
    },
    onChange: function onChange(e) {
      this.files = e.target.files;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/File/Create.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/File/Create.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_22c77074_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=22c77074&scoped=true& */ "./resources/js/components/File/Create.vue?vue&type=template&id=22c77074&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/File/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_22c77074_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_22c77074_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "22c77074",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/File/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/File/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/File/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/File/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/File/Create.vue?vue&type=template&id=22c77074&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/File/Create.vue?vue&type=template&id=22c77074&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_22c77074_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_22c77074_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_22c77074_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=22c77074&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/File/Create.vue?vue&type=template&id=22c77074&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/File/Create.vue?vue&type=template&id=22c77074&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/File/Create.vue?vue&type=template&id=22c77074&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "w-25 m-auto mt-3 text-center" },
    [
      _vm._l(_vm.errors, function (error) {
        return _vm.errors
          ? [
              _c("span", { staticClass: "text-danger" }, [
                _vm._v(_vm._s(error)),
              ]),
            ]
          : _vm._e()
      }),
      _vm._v(" "),
      _c("h3", [_vm._v("Добавление нового файла")]),
      _vm._v(" "),
      _c("div", { staticClass: "mb-3" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.user_id,
              expression: "user_id",
            },
          ],
          staticClass: "form-control",
          attrs: { type: "text", placeholder: "ID пользователя" },
          domProps: { value: _vm.user_id },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.user_id = $event.target.value
            },
          },
        }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mb-3" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "file", name: "files", placeholder: "", multiple: "" },
          on: { change: _vm.onChange },
        }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mb-3" }, [
        _c("input", {
          staticClass: "btn btn-primary",
          attrs: { type: "submit", value: "Добавить файл" },
          on: {
            click: function ($event) {
              $event.preventDefault()
              return _vm.store.apply(null, arguments)
            },
          },
        }),
      ]),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);