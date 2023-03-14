"use strict";
(self["webpackChunkreactjs_material"] = self["webpackChunkreactjs_material"] || []).push([["src_screens_home_Home_tsx"],{

/***/ "./node_modules/@mui/material/Container/Container.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/material/Container/Container.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/Container/createContainer.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@mui/material/utils/capitalize.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* eslint-disable material-ui/mui-name-matches-component-name */





const Container = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__["default"])({
  createStyledComponent: (0,_styles_styled__WEBPACK_IMPORTED_MODULE_1__["default"])('div', {
    name: 'MuiContainer',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[`maxWidth${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_2__["default"])(String(ownerState.maxWidth))}`], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
    }
  }),
  useThemeProps: inProps => (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_3__["default"])({
    props: inProps,
    name: 'MuiContainer'
  })
});
 true ? Container.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./node_modules/@mui/system/esm/Container/createContainer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@mui/system/esm/Container/createContainer.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createContainer; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/capitalize.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _useThemeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../useThemeProps */ "./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styled */ "./node_modules/@mui/system/esm/styled.js");
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../createTheme */ "./node_modules/@mui/system/esm/createTheme/createTheme.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"];








const defaultTheme = (0,_createTheme__WEBPACK_IMPORTED_MODULE_5__["default"])();
const defaultCreateStyledComponent = (0,_styled__WEBPACK_IMPORTED_MODULE_6__["default"])('div', {
  name: 'MuiContainer',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`maxWidth${(0,_mui_utils__WEBPACK_IMPORTED_MODULE_7__["default"])(String(ownerState.maxWidth))}`], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
  }
});

const useThemePropsDefault = inProps => (0,_useThemeProps__WEBPACK_IMPORTED_MODULE_8__["default"])({
  props: inProps,
  name: 'MuiContainer',
  defaultTheme
});

const useUtilityClasses = (ownerState, componentName) => {
  const getContainerUtilityClass = slot => {
    return (0,_mui_utils__WEBPACK_IMPORTED_MODULE_9__["default"])(componentName, slot);
  };

  const {
    classes,
    fixed,
    disableGutters,
    maxWidth
  } = ownerState;
  const slots = {
    root: ['root', maxWidth && `maxWidth${(0,_mui_utils__WEBPACK_IMPORTED_MODULE_7__["default"])(String(maxWidth))}`, fixed && 'fixed', disableGutters && 'disableGutters']
  };
  return (0,_mui_utils__WEBPACK_IMPORTED_MODULE_10__["default"])(slots, getContainerUtilityClass, classes);
};

function createContainer(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps = useThemePropsDefault,
    componentName = 'MuiContainer'
  } = options;
  const ContainerRoot = createStyledComponent(({
    theme,
    ownerState
  }) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    marginRight: 'auto',
    display: 'block'
  }, !ownerState.disableGutters && {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  }), ({
    theme,
    ownerState
  }) => ownerState.fixed && Object.keys(theme.breakpoints.values).reduce((acc, breakpointValueKey) => {
    const breakpoint = breakpointValueKey;
    const value = theme.breakpoints.values[breakpoint];

    if (value !== 0) {
      // @ts-ignore
      acc[theme.breakpoints.up(breakpoint)] = {
        maxWidth: `${value}${theme.breakpoints.unit}`
      };
    }

    return acc;
  }, {}), ({
    theme,
    ownerState
  }) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ownerState.maxWidth === 'xs' && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [theme.breakpoints.up('xs')]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: Math.max(theme.breakpoints.values.xs, 444)
    }
  }, ownerState.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
  ownerState.maxWidth !== 'xs' && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [theme.breakpoints.up(ownerState.maxWidth)]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`
    }
  }));
  const Container = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Container(inProps, ref) {
    const props = useThemeProps(inProps);

    const {
      className,
      component = 'div',
      disableGutters = false,
      fixed = false,
      maxWidth = 'lg'
    } = props,
          other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

    const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      component,
      disableGutters,
      fixed,
      maxWidth
    }); // @ts-ignore module augmentation fails if custom breakpoints are used


    const classes = useUtilityClasses(ownerState, componentName);
    return (
      /*#__PURE__*/
      // @ts-ignore theme is injected by the styled util
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ContainerRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        as: component // @ts-ignore module augmentation fails if custom breakpoints are used
        ,
        ownerState: ownerState,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
        ref: ref
      }, other))
    );
  });
   true ? Container.propTypes
  /* remove-proptypes */
  = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().node),
    classes: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
    component: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().elementType),
    disableGutters: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),
    fixed: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),
    maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string)]),
    sx: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)])
  } : 0;
  return Container;
}

/***/ }),

/***/ "./node_modules/@mui/system/esm/styled.js":
/*!************************************************!*\
  !*** ./node_modules/@mui/system/esm/styled.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createStyled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStyled */ "./node_modules/@mui/system/esm/createStyled.js");

const styled = (0,_createStyled__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (styled);

/***/ }),

/***/ "./src/screens/home/Home.tsx":
/*!***********************************!*\
  !*** ./src/screens/home/Home.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _react_hooks_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../react-hooks/useUser */ "./src/react-hooks/useUser.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};








function Copyright() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({ variant: 'body2', color: 'text.secondary', align: 'center' }, { children: ['Copyright © ', new Date().getFullYear(), '.'] })));
}
var Home = function () {
    var _a;
    var enqueueSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_3__.useSnackbar)().enqueueSnackbar;
    var userState = (0,_react_hooks_useUser__WEBPACK_IMPORTED_MODULE_2__.useUser)().userState;
    var navigator = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (!(userState === null || userState === void 0 ? void 0 : userState.user)) {
            enqueueSnackbar('Unauthorized', { variant: 'error' });
            navigator('/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__["default"], __assign({ maxWidth: 'sm' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], __assign({ sx: { my: 4 } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({ variant: 'h4', component: 'h1', gutterBottom: true }, { children: ["Welcome ", (_a = userState === null || userState === void 0 ? void 0 : userState.user) === null || _a === void 0 ? void 0 : _a.email] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Copyright, {})] })) })));
};
/* harmony default export */ __webpack_exports__["default"] = (Home);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmVlbnNfaG9tZV9Ib21lX3RzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ21DO0FBQ1c7QUFDRDtBQUNQO0FBQ2M7QUFDcEQsa0JBQWtCLHVEQUFlO0FBQ2pDLHlCQUF5QiwwREFBTTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLDZDQUE2Qyw2REFBVSw4QkFBOEI7QUFDckY7QUFDQSxHQUFHO0FBQ0gsNEJBQTRCLGlFQUFhO0FBQ3pDO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNELEtBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFjOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBEQUFnQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtEQUFxQjs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0RBQWM7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3REFBYzs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFFQSxFQUFFLHVEQUFlLHlDQUF5QywwREFBZ0I7O0FBRXRGO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQW1CLEVBQUUseURBQWlCLENBQUMsMkRBQW1CLEVBQUUsd0RBQWMsRUFBRSwwREFBZ0IsRUFBRSx3REFBYyxLQUFLLHdEQUFjLEVBQUUsMERBQWdCO0FBQ3ZKLEVBQUUsRUFBRSxDQUFNO0FBQ1YsK0RBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFNEU7QUFDMUM7QUFDMUQ7QUFDK0I7QUFDSTtBQUNYO0FBQ3lJO0FBQzlHO0FBQ2Q7QUFDSTtBQUNPO0FBQ2hELHFCQUFxQix3REFBVztBQUNoQyxxQ0FBcUMsbURBQVk7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTiwyQ0FBMkMsc0RBQVUsOEJBQThCO0FBQ25GO0FBQ0EsQ0FBQzs7QUFFRCx3Q0FBd0MsMERBQW1CO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLFdBQVcsc0RBQW9CO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSwwQ0FBMEMsc0RBQVUsbUJBQW1CO0FBQ3ZFO0FBQ0EsU0FBUyx1REFBYztBQUN2Qjs7QUFFZSxxQ0FBcUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFHLEtBQUssOEVBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE1BQU0sRUFBRSx1QkFBdUI7QUFDcEQ7QUFDQTs7QUFFQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQSxHQUFHLEtBQUssOEVBQVEsR0FBRztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhDQUE4QyxFQUFFLHVCQUF1QjtBQUMxRjtBQUNBLEdBQUc7QUFDSCxpQ0FBaUMsNkNBQWdCO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixrQkFBa0IsbUdBQTZCOztBQUUvQyx1QkFBdUIsOEVBQVEsR0FBRztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRzs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFJLGdCQUFnQiw4RUFBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQUk7QUFDdkI7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0gsRUFBRSxLQUFxQztBQUN2QztBQUNBO0FBQ0EsY0FBYyx5REFBYztBQUM1QixhQUFhLDJEQUFnQjtBQUM3QixlQUFlLDJEQUFnQjtBQUMvQixlQUFlLGdFQUFxQjtBQUNwQyxvQkFBb0IseURBQWM7QUFDbEMsV0FBVyx5REFBYztBQUN6QixjQUFjLDREQUVBLEVBQUUsd0RBQWUseUNBQXlDLDJEQUFnQjtBQUN4RixRQUFRLDREQUFtQixFQUFFLDBEQUFpQixDQUFDLDREQUFtQixFQUFFLHlEQUFjLEVBQUUsMkRBQWdCLEVBQUUseURBQWMsS0FBSyx5REFBYyxFQUFFLDJEQUFnQjtBQUN6SixJQUFJLEVBQUUsQ0FBTTtBQUNaO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RKMEM7QUFDMUMsZUFBZSx5REFBWTtBQUMzQiwrREFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQixnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEO0FBQzdCO0FBQ2M7QUFDRTtBQUNkO0FBQ2dCO0FBQ0w7QUFDUDtBQUN4QztBQUNBLFlBQVksdURBQUssQ0FBQyxnRUFBVSxhQUFhLDREQUE0RCxJQUFJLDJEQUEyRDtBQUNwSztBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsc0RBQVc7QUFDckMsb0JBQW9CLDZEQUFPO0FBQzNCLG9CQUFvQiw2REFBVztBQUMvQixJQUFJLGdEQUFTO0FBQ2I7QUFDQSw4Q0FBOEMsa0JBQWtCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZLHNEQUFJLENBQUMsK0RBQVMsYUFBYSxnQkFBZ0IsSUFBSSxVQUFVLHVEQUFLLENBQUMseURBQUcsYUFBYSxNQUFNLFNBQVMsSUFBSSxXQUFXLHVEQUFLLENBQUMsZ0VBQVUsYUFBYSxvREFBb0QsSUFBSSxtSkFBbUosSUFBSSxzREFBSSxjQUFjLElBQUksSUFBSTtBQUMvWDtBQUNBLCtEQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0anMtbWF0ZXJpYWwvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9Db250YWluZXIvQ29udGFpbmVyLmpzIiwid2VicGFjazovL3JlYWN0anMtbWF0ZXJpYWwvLi9ub2RlX21vZHVsZXMvQG11aS9zeXN0ZW0vZXNtL0NvbnRhaW5lci9jcmVhdGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Rqcy1tYXRlcmlhbC8uL25vZGVfbW9kdWxlcy9AbXVpL3N5c3RlbS9lc20vc3R5bGVkLmpzIiwid2VicGFjazovL3JlYWN0anMtbWF0ZXJpYWwvLi9zcmMvc2NyZWVucy9ob21lL0hvbWUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1hdGVyaWFsLXVpL211aS1uYW1lLW1hdGNoZXMtY29tcG9uZW50LW5hbWUgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb250YWluZXIgfSBmcm9tICdAbXVpL3N5c3RlbSc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVzL3N0eWxlZCc7XG5pbXBvcnQgdXNlVGhlbWVQcm9wcyBmcm9tICcuLi9zdHlsZXMvdXNlVGhlbWVQcm9wcyc7XG5jb25zdCBDb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoe1xuICBjcmVhdGVTdHlsZWRDb21wb25lbnQ6IHN0eWxlZCgnZGl2Jywge1xuICAgIG5hbWU6ICdNdWlDb250YWluZXInLFxuICAgIHNsb3Q6ICdSb290JyxcbiAgICBvdmVycmlkZXNSZXNvbHZlcjogKHByb3BzLCBzdHlsZXMpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgb3duZXJTdGF0ZVxuICAgICAgfSA9IHByb3BzO1xuICAgICAgcmV0dXJuIFtzdHlsZXMucm9vdCwgc3R5bGVzW2BtYXhXaWR0aCR7Y2FwaXRhbGl6ZShTdHJpbmcob3duZXJTdGF0ZS5tYXhXaWR0aCkpfWBdLCBvd25lclN0YXRlLmZpeGVkICYmIHN0eWxlcy5maXhlZCwgb3duZXJTdGF0ZS5kaXNhYmxlR3V0dGVycyAmJiBzdHlsZXMuZGlzYWJsZUd1dHRlcnNdO1xuICAgIH1cbiAgfSksXG4gIHVzZVRoZW1lUHJvcHM6IGluUHJvcHMgPT4gdXNlVGhlbWVQcm9wcyh7XG4gICAgcHJvcHM6IGluUHJvcHMsXG4gICAgbmFtZTogJ011aUNvbnRhaW5lcidcbiAgfSlcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gQ29udGFpbmVyLnByb3BUeXBlc1xuLyogcmVtb3ZlLXByb3B0eXBlcyAqL1xuPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsZWZ0IGFuZCByaWdodCBwYWRkaW5nIGlzIHJlbW92ZWQuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBkaXNhYmxlR3V0dGVyczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWF4LXdpZHRoIHRvIG1hdGNoIHRoZSBtaW4td2lkdGggb2YgdGhlIGN1cnJlbnQgYnJlYWtwb2ludC5cbiAgICogVGhpcyBpcyB1c2VmdWwgaWYgeW91J2QgcHJlZmVyIHRvIGRlc2lnbiBmb3IgYSBmaXhlZCBzZXQgb2Ygc2l6ZXNcbiAgICogaW5zdGVhZCBvZiB0cnlpbmcgdG8gYWNjb21tb2RhdGUgYSBmdWxseSBmbHVpZCB2aWV3cG9ydC5cbiAgICogSXQncyBmbHVpZCBieSBkZWZhdWx0LlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZml4ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgdGhlIG1heC13aWR0aCBvZiB0aGUgY29udGFpbmVyLlxuICAgKiBUaGUgY29udGFpbmVyIHdpZHRoIGdyb3dzIHdpdGggdGhlIHNpemUgb2YgdGhlIHNjcmVlbi5cbiAgICogU2V0IHRvIGBmYWxzZWAgdG8gZGlzYWJsZSBgbWF4V2lkdGhgLlxuICAgKiBAZGVmYXVsdCAnbGcnXG4gICAqL1xuICBtYXhXaWR0aDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnLCBmYWxzZV0pLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFRoZSBzeXN0ZW0gcHJvcCB0aGF0IGFsbG93cyBkZWZpbmluZyBzeXN0ZW0gb3ZlcnJpZGVzIGFzIHdlbGwgYXMgYWRkaXRpb25hbCBDU1Mgc3R5bGVzLlxuICAgKi9cbiAgc3g6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYm9vbF0pKSwgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RdKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuY29uc3QgX2V4Y2x1ZGVkID0gW1wiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCIsIFwiZGlzYWJsZUd1dHRlcnNcIiwgXCJmaXhlZFwiLCBcIm1heFdpZHRoXCIsIFwiY2xhc3Nlc1wiXTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHVuc3RhYmxlX2NhcGl0YWxpemUgYXMgY2FwaXRhbGl6ZSwgdW5zdGFibGVfY29tcG9zZUNsYXNzZXMgYXMgY29tcG9zZUNsYXNzZXMsIHVuc3RhYmxlX2dlbmVyYXRlVXRpbGl0eUNsYXNzIGFzIGdlbmVyYXRlVXRpbGl0eUNsYXNzIH0gZnJvbSAnQG11aS91dGlscyc7XG5pbXBvcnQgdXNlVGhlbWVQcm9wc1N5c3RlbSBmcm9tICcuLi91c2VUaGVtZVByb3BzJztcbmltcG9ydCBzeXN0ZW1TdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmltcG9ydCBjcmVhdGVUaGVtZSBmcm9tICcuLi9jcmVhdGVUaGVtZSc7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuY29uc3QgZGVmYXVsdFRoZW1lID0gY3JlYXRlVGhlbWUoKTtcbmNvbnN0IGRlZmF1bHRDcmVhdGVTdHlsZWRDb21wb25lbnQgPSBzeXN0ZW1TdHlsZWQoJ2RpdicsIHtcbiAgbmFtZTogJ011aUNvbnRhaW5lcicsXG4gIHNsb3Q6ICdSb290JyxcbiAgb3ZlcnJpZGVzUmVzb2x2ZXI6IChwcm9wcywgc3R5bGVzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb3duZXJTdGF0ZVxuICAgIH0gPSBwcm9wcztcbiAgICByZXR1cm4gW3N0eWxlcy5yb290LCBzdHlsZXNbYG1heFdpZHRoJHtjYXBpdGFsaXplKFN0cmluZyhvd25lclN0YXRlLm1heFdpZHRoKSl9YF0sIG93bmVyU3RhdGUuZml4ZWQgJiYgc3R5bGVzLmZpeGVkLCBvd25lclN0YXRlLmRpc2FibGVHdXR0ZXJzICYmIHN0eWxlcy5kaXNhYmxlR3V0dGVyc107XG4gIH1cbn0pO1xuXG5jb25zdCB1c2VUaGVtZVByb3BzRGVmYXVsdCA9IGluUHJvcHMgPT4gdXNlVGhlbWVQcm9wc1N5c3RlbSh7XG4gIHByb3BzOiBpblByb3BzLFxuICBuYW1lOiAnTXVpQ29udGFpbmVyJyxcbiAgZGVmYXVsdFRoZW1lXG59KTtcblxuY29uc3QgdXNlVXRpbGl0eUNsYXNzZXMgPSAob3duZXJTdGF0ZSwgY29tcG9uZW50TmFtZSkgPT4ge1xuICBjb25zdCBnZXRDb250YWluZXJVdGlsaXR5Q2xhc3MgPSBzbG90ID0+IHtcbiAgICByZXR1cm4gZ2VuZXJhdGVVdGlsaXR5Q2xhc3MoY29tcG9uZW50TmFtZSwgc2xvdCk7XG4gIH07XG5cbiAgY29uc3Qge1xuICAgIGNsYXNzZXMsXG4gICAgZml4ZWQsXG4gICAgZGlzYWJsZUd1dHRlcnMsXG4gICAgbWF4V2lkdGhcbiAgfSA9IG93bmVyU3RhdGU7XG4gIGNvbnN0IHNsb3RzID0ge1xuICAgIHJvb3Q6IFsncm9vdCcsIG1heFdpZHRoICYmIGBtYXhXaWR0aCR7Y2FwaXRhbGl6ZShTdHJpbmcobWF4V2lkdGgpKX1gLCBmaXhlZCAmJiAnZml4ZWQnLCBkaXNhYmxlR3V0dGVycyAmJiAnZGlzYWJsZUd1dHRlcnMnXVxuICB9O1xuICByZXR1cm4gY29tcG9zZUNsYXNzZXMoc2xvdHMsIGdldENvbnRhaW5lclV0aWxpdHlDbGFzcywgY2xhc3Nlcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb250YWluZXIob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICAvLyBUaGlzIHdpbGwgYWxsb3cgYWRkaW5nIGN1c3RvbSBzdHlsZWQgZm4gKGZvciBleGFtcGxlIGZvciBjdXN0b20gc3ggc3R5bGUgZnVuY3Rpb24pXG4gICAgY3JlYXRlU3R5bGVkQ29tcG9uZW50ID0gZGVmYXVsdENyZWF0ZVN0eWxlZENvbXBvbmVudCxcbiAgICB1c2VUaGVtZVByb3BzID0gdXNlVGhlbWVQcm9wc0RlZmF1bHQsXG4gICAgY29tcG9uZW50TmFtZSA9ICdNdWlDb250YWluZXInXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBDb250YWluZXJSb290ID0gY3JlYXRlU3R5bGVkQ29tcG9uZW50KCh7XG4gICAgdGhlbWUsXG4gICAgb3duZXJTdGF0ZVxuICB9KSA9PiBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sICFvd25lclN0YXRlLmRpc2FibGVHdXR0ZXJzICYmIHtcbiAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgLy8gQHRzLWlnbm9yZSBtb2R1bGUgYXVnbWVudGF0aW9uIGZhaWxzIGlmIGN1c3RvbSBicmVha3BvaW50cyBhcmUgdXNlZFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpXG4gICAgfVxuICB9KSwgKHtcbiAgICB0aGVtZSxcbiAgICBvd25lclN0YXRlXG4gIH0pID0+IG93bmVyU3RhdGUuZml4ZWQgJiYgT2JqZWN0LmtleXModGhlbWUuYnJlYWtwb2ludHMudmFsdWVzKS5yZWR1Y2UoKGFjYywgYnJlYWtwb2ludFZhbHVlS2V5KSA9PiB7XG4gICAgY29uc3QgYnJlYWtwb2ludCA9IGJyZWFrcG9pbnRWYWx1ZUtleTtcbiAgICBjb25zdCB2YWx1ZSA9IHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlc1ticmVha3BvaW50XTtcblxuICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgYWNjW3RoZW1lLmJyZWFrcG9pbnRzLnVwKGJyZWFrcG9pbnQpXSA9IHtcbiAgICAgICAgbWF4V2lkdGg6IGAke3ZhbHVlfSR7dGhlbWUuYnJlYWtwb2ludHMudW5pdH1gXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KSwgKHtcbiAgICB0aGVtZSxcbiAgICBvd25lclN0YXRlXG4gIH0pID0+IF9leHRlbmRzKHt9LCBvd25lclN0YXRlLm1heFdpZHRoID09PSAneHMnICYmIHtcbiAgICAvLyBAdHMtaWdub3JlIG1vZHVsZSBhdWdtZW50YXRpb24gZmFpbHMgaWYgY3VzdG9tIGJyZWFrcG9pbnRzIGFyZSB1c2VkXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4cycpXToge1xuICAgICAgLy8gQHRzLWlnbm9yZSBtb2R1bGUgYXVnbWVudGF0aW9uIGZhaWxzIGlmIGN1c3RvbSBicmVha3BvaW50cyBhcmUgdXNlZFxuICAgICAgbWF4V2lkdGg6IE1hdGgubWF4KHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy54cywgNDQ0KVxuICAgIH1cbiAgfSwgb3duZXJTdGF0ZS5tYXhXaWR0aCAmJiAvLyBAdHMtaWdub3JlIG1vZHVsZSBhdWdtZW50YXRpb24gZmFpbHMgaWYgY3VzdG9tIGJyZWFrcG9pbnRzIGFyZSB1c2VkXG4gIG93bmVyU3RhdGUubWF4V2lkdGggIT09ICd4cycgJiYge1xuICAgIC8vIEB0cy1pZ25vcmUgbW9kdWxlIGF1Z21lbnRhdGlvbiBmYWlscyBpZiBjdXN0b20gYnJlYWtwb2ludHMgYXJlIHVzZWRcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAob3duZXJTdGF0ZS5tYXhXaWR0aCldOiB7XG4gICAgICAvLyBAdHMtaWdub3JlIG1vZHVsZSBhdWdtZW50YXRpb24gZmFpbHMgaWYgY3VzdG9tIGJyZWFrcG9pbnRzIGFyZSB1c2VkXG4gICAgICBtYXhXaWR0aDogYCR7dGhlbWUuYnJlYWtwb2ludHMudmFsdWVzW293bmVyU3RhdGUubWF4V2lkdGhdfSR7dGhlbWUuYnJlYWtwb2ludHMudW5pdH1gXG4gICAgfVxuICB9KSk7XG4gIGNvbnN0IENvbnRhaW5lciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIENvbnRhaW5lcihpblByb3BzLCByZWYpIHtcbiAgICBjb25zdCBwcm9wcyA9IHVzZVRoZW1lUHJvcHMoaW5Qcm9wcyk7XG5cbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjb21wb25lbnQgPSAnZGl2JyxcbiAgICAgIGRpc2FibGVHdXR0ZXJzID0gZmFsc2UsXG4gICAgICBmaXhlZCA9IGZhbHNlLFxuICAgICAgbWF4V2lkdGggPSAnbGcnXG4gICAgfSA9IHByb3BzLFxuICAgICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCk7XG5cbiAgICBjb25zdCBvd25lclN0YXRlID0gX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBjb21wb25lbnQsXG4gICAgICBkaXNhYmxlR3V0dGVycyxcbiAgICAgIGZpeGVkLFxuICAgICAgbWF4V2lkdGhcbiAgICB9KTsgLy8gQHRzLWlnbm9yZSBtb2R1bGUgYXVnbWVudGF0aW9uIGZhaWxzIGlmIGN1c3RvbSBicmVha3BvaW50cyBhcmUgdXNlZFxuXG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlVXRpbGl0eUNsYXNzZXMob3duZXJTdGF0ZSwgY29tcG9uZW50TmFtZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIC8qI19fUFVSRV9fKi9cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhlbWUgaXMgaW5qZWN0ZWQgYnkgdGhlIHN0eWxlZCB1dGlsXG4gICAgICBfanN4KENvbnRhaW5lclJvb3QsIF9leHRlbmRzKHtcbiAgICAgICAgYXM6IGNvbXBvbmVudCAvLyBAdHMtaWdub3JlIG1vZHVsZSBhdWdtZW50YXRpb24gZmFpbHMgaWYgY3VzdG9tIGJyZWFrcG9pbnRzIGFyZSB1c2VkXG4gICAgICAgICxcbiAgICAgICAgb3duZXJTdGF0ZTogb3duZXJTdGF0ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICAgICAgcmVmOiByZWZcbiAgICAgIH0sIG90aGVyKSlcbiAgICApO1xuICB9KTtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gQ29udGFpbmVyLnByb3BUeXBlc1xuICAvKiByZW1vdmUtcHJvcHR5cGVzICovXG4gID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgICBkaXNhYmxlR3V0dGVyczogUHJvcFR5cGVzLmJvb2wsXG4gICAgZml4ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG1heFdpZHRoOiBQcm9wVHlwZXNcbiAgICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gICAgLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnLCBmYWxzZV0pLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgc3g6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYm9vbF0pKSwgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RdKVxuICB9IDogdm9pZCAwO1xuICByZXR1cm4gQ29udGFpbmVyO1xufSIsImltcG9ydCBjcmVhdGVTdHlsZWQgZnJvbSAnLi9jcmVhdGVTdHlsZWQnO1xuY29uc3Qgc3R5bGVkID0gY3JlYXRlU3R5bGVkKCk7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQ7IiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeHMgYXMgX2pzeHMsIGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuLi8uLi9yZWFjdC1ob29rcy91c2VVc2VyJztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XG4gICAgcmV0dXJuIChfanN4cyhUeXBvZ3JhcGh5LCBfX2Fzc2lnbih7IHZhcmlhbnQ6ICdib2R5MicsIGNvbG9yOiAndGV4dC5zZWNvbmRhcnknLCBhbGlnbjogJ2NlbnRlcicgfSwgeyBjaGlsZHJlbjogWydDb3B5cmlnaHQgwqkgJywgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCAnLiddIH0pKSk7XG59XG52YXIgSG9tZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIGVucXVldWVTbmFja2JhciA9IHVzZVNuYWNrYmFyKCkuZW5xdWV1ZVNuYWNrYmFyO1xuICAgIHZhciB1c2VyU3RhdGUgPSB1c2VVc2VyKCkudXNlclN0YXRlO1xuICAgIHZhciBuYXZpZ2F0b3IgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghKHVzZXJTdGF0ZSA9PT0gbnVsbCB8fCB1c2VyU3RhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXJTdGF0ZS51c2VyKSkge1xuICAgICAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdVbmF1dGhvcml6ZWQnLCB7IHZhcmlhbnQ6ICdlcnJvcicgfSk7XG4gICAgICAgICAgICBuYXZpZ2F0b3IoJy9sb2dpbicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChfanN4KENvbnRhaW5lciwgX19hc3NpZ24oeyBtYXhXaWR0aDogJ3NtJyB9LCB7IGNoaWxkcmVuOiBfanN4cyhCb3gsIF9fYXNzaWduKHsgc3g6IHsgbXk6IDQgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoVHlwb2dyYXBoeSwgX19hc3NpZ24oeyB2YXJpYW50OiAnaDQnLCBjb21wb25lbnQ6ICdoMScsIGd1dHRlckJvdHRvbTogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBbXCJXZWxjb21lIFwiLCAoX2EgPSB1c2VyU3RhdGUgPT09IG51bGwgfHwgdXNlclN0YXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyU3RhdGUudXNlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmVtYWlsXSB9KSksIF9qc3goQ29weXJpZ2h0LCB7fSldIH0pKSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=