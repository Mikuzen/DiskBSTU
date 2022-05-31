"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Index",
  data: function data() {
    return {
      users: [],
      page: 1,
      perPage: 15,
      pages: [],
      errors: null
    };
  },
  computed: {
    displayedUsers: function displayedUsers() {
      return this.paginate(this.users);
    }
  },
  created: function created() {
    this.getUsers();
  },
  watch: {
    users: function users() {
      this.setPages();
    }
  },
  methods: {
    getUsers: function getUsers() {
      var _this = this;

      axios.get('/api/V1/users').then(function (res) {
        _this.users = res.data.data;
      })["catch"](function (error) {
        if (error.response) {
          _this.errors = error.response.data.errors;
        } else if (error.request) {
          _this.errors = error.request.errors;
        } else {
          console.log('Error', error.message);
        }
      });
    },
    deleteUser: function deleteUser(user) {
      var _this2 = this;

      axios["delete"]("/api/V1/users/" + user).then(function (res) {
        _this2.getUsers();
      });
    },
    setPages: function setPages() {
      var countOfPages = Math.ceil(this.users.length / this.perPage);

      for (var i = 1; i <= countOfPages; i++) {
        this.pages.push(i);
      }
    },
    paginate: function paginate(users) {
      var from = this.page * this.perPage - this.perPage;
      var to = this.page * this.perPage;
      return users.slice(from, to);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/User/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/components/User/Index.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_6294eb19_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=6294eb19&scoped=true& */ "./resources/js/components/User/Index.vue?vue&type=template&id=6294eb19&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/User/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_6294eb19_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_6294eb19_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6294eb19",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/User/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User/Index.vue?vue&type=template&id=6294eb19&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/User/Index.vue?vue&type=template&id=6294eb19&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6294eb19_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6294eb19_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6294eb19_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=6294eb19&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Index.vue?vue&type=template&id=6294eb19&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Index.vue?vue&type=template&id=6294eb19&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Index.vue?vue&type=template&id=6294eb19&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    [
      _vm._l(_vm.errors, function (error) {
        return _vm.errors
          ? [
              _c("span", { staticClass: "text-danger" }, [
                _vm._v(_vm._s(error + " ")),
              ]),
            ]
          : _vm._e()
      }),
      _vm._v(" "),
      _c("h1", [_vm._v("Все пользователи Диск.БГТУ")]),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "btn btn-success m-2",
          attrs: { to: { name: "user.create" } },
        },
        [_vm._v("Добавить пользователя")]
      ),
      _vm._v(" "),
      _c(
        "table",
        {
          staticClass: "table table-hover text-center table-striped table-dark",
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.displayedUsers, function (user) {
                return [
                  _c("tr", [
                    _c("td", [_vm._v(_vm._s(user.id))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.email))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.admin ? "Да" : "Нет"))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.password))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "user.show",
                                params: { user: user.id },
                              },
                            },
                          },
                          [_c("i", { staticClass: "bi-pencil-square" })]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.deleteUser(user.id)
                            },
                          },
                        },
                        [_c("i", { staticClass: "bi-trash-fill text-danger" })]
                      ),
                    ]),
                  ]),
                ]
              }),
            ],
            2
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "w-50" },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "button", disabled: _vm.page == 1 },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  _vm.page = 1
                },
              },
            },
            [_vm._v("First\n        ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "button", disabled: _vm.page == 1 },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  _vm.page--
                },
              },
            },
            [_vm._v("Prev\n        ")]
          ),
          _vm._v(" "),
          _vm._l(
            _vm.pages.slice(_vm.page - 1, _vm.page + 5),
            function (pageNumber) {
              return _c(
                "button",
                {
                  staticClass: "btn btn-primary mx-1",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      _vm.page = pageNumber
                    },
                  },
                },
                [_vm._v("\n            " + _vm._s(pageNumber) + "\n        ")]
              )
            }
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: {
                type: "button",
                disabled: _vm.page > _vm.pages.length - 1,
              },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  _vm.page++
                },
              },
            },
            [_vm._v("Next\n        ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: {
                type: "button",
                disabled: _vm.page > _vm.pages.length - 1,
              },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  _vm.page = _vm.pages[_vm.pages.length - 1]
                },
              },
            },
            [_vm._v("Last\n        ")]
          ),
        ],
        2
      ),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Имя пользователя")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Почта")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Является ли админом")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Пароль")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [
          _c("i", { staticClass: "bi-pencil-square text-white" }),
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [
          _c("i", { staticClass: "bi-trash-fill text-white" }),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);