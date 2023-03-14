"use strict";
(self["webpackChunkreactjs_material"] = self["webpackChunkreactjs_material"] || []).push([["src_screens_about_about_tsx"],{

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

/***/ "./src/screens/about/about.tsx":
/*!*************************************!*\
  !*** ./src/screens/about/about.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
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




var About = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({ maxWidth: 'sm' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__["default"], __assign({ sx: { my: 4 } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ variant: 'h4', component: 'h1', gutterBottom: true }, { children: "Welcome to About" })) })) })));
};
/* harmony default export */ __webpack_exports__["default"] = (About);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSCxFQUFFLEtBQXFDO0FBQ3ZDO0FBQ0E7QUFDQSxjQUFjLHlEQUFjO0FBQzVCLGFBQWEsMkRBQWdCO0FBQzdCLGVBQWUsMkRBQWdCO0FBQy9CLGVBQWUsZ0VBQXFCO0FBQ3BDLG9CQUFvQix5REFBYztBQUNsQyxXQUFXLHlEQUFjO0FBQ3pCLGNBQWMsNERBRUEsRUFBRSx3REFBZSx5Q0FBeUMsMkRBQWdCO0FBQ3hGLFFBQVEsNERBQW1CLEVBQUUsMERBQWlCLENBQUMsNERBQW1CLEVBQUUseURBQWMsRUFBRSwyREFBZ0IsRUFBRSx5REFBYyxLQUFLLHlEQUFjLEVBQUUsMkRBQWdCO0FBQ3pKLElBQUksRUFBRSxDQUFNO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEowQztBQUMxQyxlQUFlLHlEQUFZO0FBQzNCLCtEQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQixnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dEO0FBQ0E7QUFDRTtBQUNkO0FBQ3BDO0FBQ0EsWUFBWSxzREFBSSxDQUFDLCtEQUFTLGFBQWEsZ0JBQWdCLElBQUksVUFBVSxzREFBSSxDQUFDLHlEQUFHLGFBQWEsTUFBTSxTQUFTLElBQUksVUFBVSxzREFBSSxDQUFDLGdFQUFVLGFBQWEsb0RBQW9ELElBQUksOEJBQThCLElBQUksSUFBSTtBQUNqUDtBQUNBLCtEQUFlLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0anMtbWF0ZXJpYWwvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9Db250YWluZXIvQ29udGFpbmVyLmpzIiwid2VicGFjazovL3JlYWN0anMtbWF0ZXJpYWwvLi9ub2RlX21vZHVsZXMvQG11aS9zeXN0ZW0vZXNtL0NvbnRhaW5lci9jcmVhdGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Rqcy1tYXRlcmlhbC8uL25vZGVfbW9kdWxlcy9AbXVpL3N5c3RlbS9lc20vc3R5bGVkLmpzIiwid2VicGFjazovL3JlYWN0anMtbWF0ZXJpYWwvLi9zcmMvc2NyZWVucy9hYm91dC9hYm91dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF0ZXJpYWwtdWkvbXVpLW5hbWUtbWF0Y2hlcy1jb21wb25lbnQtbmFtZSAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRhaW5lciB9IGZyb20gJ0BtdWkvc3lzdGVtJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZXMvc3R5bGVkJztcbmltcG9ydCB1c2VUaGVtZVByb3BzIGZyb20gJy4uL3N0eWxlcy91c2VUaGVtZVByb3BzJztcbmNvbnN0IENvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcih7XG4gIGNyZWF0ZVN0eWxlZENvbXBvbmVudDogc3R5bGVkKCdkaXYnLCB7XG4gICAgbmFtZTogJ011aUNvbnRhaW5lcicsXG4gICAgc2xvdDogJ1Jvb3QnLFxuICAgIG92ZXJyaWRlc1Jlc29sdmVyOiAocHJvcHMsIHN0eWxlcykgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBvd25lclN0YXRlXG4gICAgICB9ID0gcHJvcHM7XG4gICAgICByZXR1cm4gW3N0eWxlcy5yb290LCBzdHlsZXNbYG1heFdpZHRoJHtjYXBpdGFsaXplKFN0cmluZyhvd25lclN0YXRlLm1heFdpZHRoKSl9YF0sIG93bmVyU3RhdGUuZml4ZWQgJiYgc3R5bGVzLmZpeGVkLCBvd25lclN0YXRlLmRpc2FibGVHdXR0ZXJzICYmIHN0eWxlcy5kaXNhYmxlR3V0dGVyc107XG4gICAgfVxuICB9KSxcbiAgdXNlVGhlbWVQcm9wczogaW5Qcm9wcyA9PiB1c2VUaGVtZVByb3BzKHtcbiAgICBwcm9wczogaW5Qcm9wcyxcbiAgICBuYW1lOiAnTXVpQ29udGFpbmVyJ1xuICB9KVxufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBDb250YWluZXIucHJvcFR5cGVzXG4vKiByZW1vdmUtcHJvcHR5cGVzICovXG49IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxlZnQgYW5kIHJpZ2h0IHBhZGRpbmcgaXMgcmVtb3ZlZC5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGRpc2FibGVHdXR0ZXJzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogU2V0IHRoZSBtYXgtd2lkdGggdG8gbWF0Y2ggdGhlIG1pbi13aWR0aCBvZiB0aGUgY3VycmVudCBicmVha3BvaW50LlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBpZiB5b3UnZCBwcmVmZXIgdG8gZGVzaWduIGZvciBhIGZpeGVkIHNldCBvZiBzaXplc1xuICAgKiBpbnN0ZWFkIG9mIHRyeWluZyB0byBhY2NvbW1vZGF0ZSBhIGZ1bGx5IGZsdWlkIHZpZXdwb3J0LlxuICAgKiBJdCdzIGZsdWlkIGJ5IGRlZmF1bHQuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBmaXhlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERldGVybWluZSB0aGUgbWF4LXdpZHRoIG9mIHRoZSBjb250YWluZXIuXG4gICAqIFRoZSBjb250YWluZXIgd2lkdGggZ3Jvd3Mgd2l0aCB0aGUgc2l6ZSBvZiB0aGUgc2NyZWVuLlxuICAgKiBTZXQgdG8gYGZhbHNlYCB0byBkaXNhYmxlIGBtYXhXaWR0aGAuXG4gICAqIEBkZWZhdWx0ICdsZydcbiAgICovXG4gIG1heFdpZHRoOiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCcsIGZhbHNlXSksIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogVGhlIHN5c3RlbSBwcm9wIHRoYXQgYWxsb3dzIGRlZmluaW5nIHN5c3RlbSBvdmVycmlkZXMgYXMgd2VsbCBhcyBhZGRpdGlvbmFsIENTUyBzdHlsZXMuXG4gICAqL1xuICBzeDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5ib29sXSkpLCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5jb25zdCBfZXhjbHVkZWQgPSBbXCJjbGFzc05hbWVcIiwgXCJjb21wb25lbnRcIiwgXCJkaXNhYmxlR3V0dGVyc1wiLCBcImZpeGVkXCIsIFwibWF4V2lkdGhcIiwgXCJjbGFzc2VzXCJdO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgdW5zdGFibGVfY2FwaXRhbGl6ZSBhcyBjYXBpdGFsaXplLCB1bnN0YWJsZV9jb21wb3NlQ2xhc3NlcyBhcyBjb21wb3NlQ2xhc3NlcywgdW5zdGFibGVfZ2VuZXJhdGVVdGlsaXR5Q2xhc3MgYXMgZ2VuZXJhdGVVdGlsaXR5Q2xhc3MgfSBmcm9tICdAbXVpL3V0aWxzJztcbmltcG9ydCB1c2VUaGVtZVByb3BzU3lzdGVtIGZyb20gJy4uL3VzZVRoZW1lUHJvcHMnO1xuaW1wb3J0IHN5c3RlbVN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuaW1wb3J0IGNyZWF0ZVRoZW1lIGZyb20gJy4uL2NyZWF0ZVRoZW1lJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5jb25zdCBkZWZhdWx0VGhlbWUgPSBjcmVhdGVUaGVtZSgpO1xuY29uc3QgZGVmYXVsdENyZWF0ZVN0eWxlZENvbXBvbmVudCA9IHN5c3RlbVN0eWxlZCgnZGl2Jywge1xuICBuYW1lOiAnTXVpQ29udGFpbmVyJyxcbiAgc2xvdDogJ1Jvb3QnLFxuICBvdmVycmlkZXNSZXNvbHZlcjogKHByb3BzLCBzdHlsZXMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvd25lclN0YXRlXG4gICAgfSA9IHByb3BzO1xuICAgIHJldHVybiBbc3R5bGVzLnJvb3QsIHN0eWxlc1tgbWF4V2lkdGgke2NhcGl0YWxpemUoU3RyaW5nKG93bmVyU3RhdGUubWF4V2lkdGgpKX1gXSwgb3duZXJTdGF0ZS5maXhlZCAmJiBzdHlsZXMuZml4ZWQsIG93bmVyU3RhdGUuZGlzYWJsZUd1dHRlcnMgJiYgc3R5bGVzLmRpc2FibGVHdXR0ZXJzXTtcbiAgfVxufSk7XG5cbmNvbnN0IHVzZVRoZW1lUHJvcHNEZWZhdWx0ID0gaW5Qcm9wcyA9PiB1c2VUaGVtZVByb3BzU3lzdGVtKHtcbiAgcHJvcHM6IGluUHJvcHMsXG4gIG5hbWU6ICdNdWlDb250YWluZXInLFxuICBkZWZhdWx0VGhlbWVcbn0pO1xuXG5jb25zdCB1c2VVdGlsaXR5Q2xhc3NlcyA9IChvd25lclN0YXRlLCBjb21wb25lbnROYW1lKSA9PiB7XG4gIGNvbnN0IGdldENvbnRhaW5lclV0aWxpdHlDbGFzcyA9IHNsb3QgPT4ge1xuICAgIHJldHVybiBnZW5lcmF0ZVV0aWxpdHlDbGFzcyhjb21wb25lbnROYW1lLCBzbG90KTtcbiAgfTtcblxuICBjb25zdCB7XG4gICAgY2xhc3NlcyxcbiAgICBmaXhlZCxcbiAgICBkaXNhYmxlR3V0dGVycyxcbiAgICBtYXhXaWR0aFxuICB9ID0gb3duZXJTdGF0ZTtcbiAgY29uc3Qgc2xvdHMgPSB7XG4gICAgcm9vdDogWydyb290JywgbWF4V2lkdGggJiYgYG1heFdpZHRoJHtjYXBpdGFsaXplKFN0cmluZyhtYXhXaWR0aCkpfWAsIGZpeGVkICYmICdmaXhlZCcsIGRpc2FibGVHdXR0ZXJzICYmICdkaXNhYmxlR3V0dGVycyddXG4gIH07XG4gIHJldHVybiBjb21wb3NlQ2xhc3NlcyhzbG90cywgZ2V0Q29udGFpbmVyVXRpbGl0eUNsYXNzLCBjbGFzc2VzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcihvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIC8vIFRoaXMgd2lsbCBhbGxvdyBhZGRpbmcgY3VzdG9tIHN0eWxlZCBmbiAoZm9yIGV4YW1wbGUgZm9yIGN1c3RvbSBzeCBzdHlsZSBmdW5jdGlvbilcbiAgICBjcmVhdGVTdHlsZWRDb21wb25lbnQgPSBkZWZhdWx0Q3JlYXRlU3R5bGVkQ29tcG9uZW50LFxuICAgIHVzZVRoZW1lUHJvcHMgPSB1c2VUaGVtZVByb3BzRGVmYXVsdCxcbiAgICBjb21wb25lbnROYW1lID0gJ011aUNvbnRhaW5lcidcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IENvbnRhaW5lclJvb3QgPSBjcmVhdGVTdHlsZWRDb21wb25lbnQoKHtcbiAgICB0aGVtZSxcbiAgICBvd25lclN0YXRlXG4gIH0pID0+IF9leHRlbmRzKHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIGRpc3BsYXk6ICdibG9jaydcbiAgfSwgIW93bmVyU3RhdGUuZGlzYWJsZUd1dHRlcnMgJiYge1xuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAvLyBAdHMtaWdub3JlIG1vZHVsZSBhdWdtZW50YXRpb24gZmFpbHMgaWYgY3VzdG9tIGJyZWFrcG9pbnRzIGFyZSB1c2VkXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMylcbiAgICB9XG4gIH0pLCAoe1xuICAgIHRoZW1lLFxuICAgIG93bmVyU3RhdGVcbiAgfSkgPT4gb3duZXJTdGF0ZS5maXhlZCAmJiBPYmplY3Qua2V5cyh0aGVtZS5icmVha3BvaW50cy52YWx1ZXMpLnJlZHVjZSgoYWNjLCBicmVha3BvaW50VmFsdWVLZXkpID0+IHtcbiAgICBjb25zdCBicmVha3BvaW50ID0gYnJlYWtwb2ludFZhbHVlS2V5O1xuICAgIGNvbnN0IHZhbHVlID0gdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzW2JyZWFrcG9pbnRdO1xuXG4gICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBhY2NbdGhlbWUuYnJlYWtwb2ludHMudXAoYnJlYWtwb2ludCldID0ge1xuICAgICAgICBtYXhXaWR0aDogYCR7dmFsdWV9JHt0aGVtZS5icmVha3BvaW50cy51bml0fWBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pLCAoe1xuICAgIHRoZW1lLFxuICAgIG93bmVyU3RhdGVcbiAgfSkgPT4gX2V4dGVuZHMoe30sIG93bmVyU3RhdGUubWF4V2lkdGggPT09ICd4cycgJiYge1xuICAgIC8vIEB0cy1pZ25vcmUgbW9kdWxlIGF1Z21lbnRhdGlvbiBmYWlscyBpZiBjdXN0b20gYnJlYWtwb2ludHMgYXJlIHVzZWRcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hzJyldOiB7XG4gICAgICAvLyBAdHMtaWdub3JlIG1vZHVsZSBhdWdtZW50YXRpb24gZmFpbHMgaWYgY3VzdG9tIGJyZWFrcG9pbnRzIGFyZSB1c2VkXG4gICAgICBtYXhXaWR0aDogTWF0aC5tYXgodGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnhzLCA0NDQpXG4gICAgfVxuICB9LCBvd25lclN0YXRlLm1heFdpZHRoICYmIC8vIEB0cy1pZ25vcmUgbW9kdWxlIGF1Z21lbnRhdGlvbiBmYWlscyBpZiBjdXN0b20gYnJlYWtwb2ludHMgYXJlIHVzZWRcbiAgb3duZXJTdGF0ZS5tYXhXaWR0aCAhPT0gJ3hzJyAmJiB7XG4gICAgLy8gQHRzLWlnbm9yZSBtb2R1bGUgYXVnbWVudGF0aW9uIGZhaWxzIGlmIGN1c3RvbSBicmVha3BvaW50cyBhcmUgdXNlZFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChvd25lclN0YXRlLm1heFdpZHRoKV06IHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgbW9kdWxlIGF1Z21lbnRhdGlvbiBmYWlscyBpZiBjdXN0b20gYnJlYWtwb2ludHMgYXJlIHVzZWRcbiAgICAgIG1heFdpZHRoOiBgJHt0aGVtZS5icmVha3BvaW50cy52YWx1ZXNbb3duZXJTdGF0ZS5tYXhXaWR0aF19JHt0aGVtZS5icmVha3BvaW50cy51bml0fWBcbiAgICB9XG4gIH0pKTtcbiAgY29uc3QgQ29udGFpbmVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gQ29udGFpbmVyKGluUHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHByb3BzID0gdXNlVGhlbWVQcm9wcyhpblByb3BzKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvbXBvbmVudCA9ICdkaXYnLFxuICAgICAgZGlzYWJsZUd1dHRlcnMgPSBmYWxzZSxcbiAgICAgIGZpeGVkID0gZmFsc2UsXG4gICAgICBtYXhXaWR0aCA9ICdsZydcbiAgICB9ID0gcHJvcHMsXG4gICAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkKTtcblxuICAgIGNvbnN0IG93bmVyU3RhdGUgPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIGRpc2FibGVHdXR0ZXJzLFxuICAgICAgZml4ZWQsXG4gICAgICBtYXhXaWR0aFxuICAgIH0pOyAvLyBAdHMtaWdub3JlIG1vZHVsZSBhdWdtZW50YXRpb24gZmFpbHMgaWYgY3VzdG9tIGJyZWFrcG9pbnRzIGFyZSB1c2VkXG5cblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VVdGlsaXR5Q2xhc3Nlcyhvd25lclN0YXRlLCBjb21wb25lbnROYW1lKTtcbiAgICByZXR1cm4gKFxuICAgICAgLyojX19QVVJFX18qL1xuICAgICAgLy8gQHRzLWlnbm9yZSB0aGVtZSBpcyBpbmplY3RlZCBieSB0aGUgc3R5bGVkIHV0aWxcbiAgICAgIF9qc3goQ29udGFpbmVyUm9vdCwgX2V4dGVuZHMoe1xuICAgICAgICBhczogY29tcG9uZW50IC8vIEB0cy1pZ25vcmUgbW9kdWxlIGF1Z21lbnRhdGlvbiBmYWlscyBpZiBjdXN0b20gYnJlYWtwb2ludHMgYXJlIHVzZWRcbiAgICAgICAgLFxuICAgICAgICBvd25lclN0YXRlOiBvd25lclN0YXRlLFxuICAgICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpLFxuICAgICAgICByZWY6IHJlZlxuICAgICAgfSwgb3RoZXIpKVxuICAgICk7XG4gIH0pO1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBDb250YWluZXIucHJvcFR5cGVzXG4gIC8qIHJlbW92ZS1wcm9wdHlwZXMgKi9cbiAgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICAgIGRpc2FibGVHdXR0ZXJzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmaXhlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbWF4V2lkdGg6IFByb3BUeXBlc1xuICAgIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgICAub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCcsIGZhbHNlXSksIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBzeDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5ib29sXSkpLCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pXG4gIH0gOiB2b2lkIDA7XG4gIHJldHVybiBDb250YWluZXI7XG59IiwiaW1wb3J0IGNyZWF0ZVN0eWxlZCBmcm9tICcuL2NyZWF0ZVN0eWxlZCc7XG5jb25zdCBzdHlsZWQgPSBjcmVhdGVTdHlsZWQoKTtcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZDsiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xudmFyIEFib3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoX2pzeChDb250YWluZXIsIF9fYXNzaWduKHsgbWF4V2lkdGg6ICdzbScgfSwgeyBjaGlsZHJlbjogX2pzeChCb3gsIF9fYXNzaWduKHsgc3g6IHsgbXk6IDQgfSB9LCB7IGNoaWxkcmVuOiBfanN4KFR5cG9ncmFwaHksIF9fYXNzaWduKHsgdmFyaWFudDogJ2g0JywgY29tcG9uZW50OiAnaDEnLCBndXR0ZXJCb3R0b206IHRydWUgfSwgeyBjaGlsZHJlbjogXCJXZWxjb21lIHRvIEFib3V0XCIgfSkpIH0pKSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9