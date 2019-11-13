(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{187:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return a})),t.d(e,"rightToc",(function(){return i})),t.d(e,"default",(function(){return l}));t(66),t(224),t(33),t(27),t(26),t(67),t(0);var r=t(232);function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var a={id:"uth-autofield-algorithm",title:"Autofield algorithm"},i=[],c={rightToc:i},p="wrapper";function l(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,["components"]);return Object(r.b)(p,o({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"let component = props.component;\nif (component === undefined) {\n  if (props.allowedValues) {\n    if (props.checkboxes && props.fieldType !== Array) {\n      component = RadioField;\n    } else {\n      component = SelectField;\n    }\n  } else {\n    switch (props.fieldType) {\n      case Date:\n        component = DateField;\n        break;\n      case Array:\n        component = ListField;\n        break;\n      case Number:\n        component = NumField;\n        break;\n      case Object:\n        component = NestField;\n        break;\n      case String:\n        component = TextField;\n        break;\n      case Boolean:\n        component = BoolField;\n        break;\n    }\n\n    invariant(\n      component,\n      'Unsupported field type: %s',\n      props.fieldType.toString()\n    );\n  }\n}\n")))}l.isMDXComponent=!0},224:function(n,e,t){"use strict";var r=t(3),o=t(69)(!1),a=[].indexOf,i=!!a&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(i||!t(34)(a)),"Array",{indexOf:function(n){return i?a.apply(this,arguments)||0:o(this,n,arguments[1])}})},232:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return u}));var r=t(0),o=t.n(r),a=o.a.createContext({}),i=function(n){var e=o.a.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):Object.assign({},e,n)),t},c=function(n){var e=i(n.components);return o.a.createElement(a.Provider,{value:e},n.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},s=Object(r.forwardRef)((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,c=n.parentName,p=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&-1===e.indexOf(r)&&(t[r]=n[r]);return t}(n,["components","mdxType","originalType","parentName"]),s=i(t),u=r,f=s[c+"."+u]||s[u]||l[u]||a;return t?o.a.createElement(f,Object.assign({},{ref:e},p,{components:t})):o.a.createElement(f,Object.assign({},{ref:e},p))}));function u(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c[p]="string"==typeof n?n:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);