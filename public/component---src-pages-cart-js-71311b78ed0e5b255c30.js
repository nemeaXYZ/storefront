(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{YIIx:function(e,t,a){"use strict";a("E5k/"),a("YBKJ");var n=a("q1tI"),r=a.n(n),l=a("9E3W"),c=a("ma3e"),m=a("Wbzz");var s=a("zDcZ").a.secondary,o=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.context,t=(e=void 0===e?{numberOfItemsInCart:0}:e).numberOfItemsInCart;return r.a.createElement("div",null,r.a.createElement("div",{className:"fixed top-49 right-20 desktop:right-flexiblemargin z-10"},r.a.createElement("div",{className:"flex flex-1 justify-end pr-4 relative"},r.a.createElement(m.Link,{to:"/cart"},r.a.createElement(c.d,null)),t>Number(0)&&r.a.createElement("div",null,r.a.createElement(c.a,{color:s,size:12})))))},n}(r.a.Component);t.a=function(e){return r.a.createElement(l.b.Consumer,null,(function(t){return r.a.createElement(o,Object.assign({},e,{context:t}))}))}},d5pJ:function(e,t,a){"use strict";a.r(t);a("E5k/"),a("pJf4"),a("YBKJ");var n=a("q1tI"),r=a.n(n),l=a("9E3W"),c=a("XCaG"),m=a("ma3e"),s=a("Wbzz"),o=a("YIIx"),i=a("IF/j"),u=a("5Epl"),f=function(e){var t=e.context,a=t.numberOfItemsInCart,n=t.cart,l=t.removeFromCart,f=t.total,E=a===Number(0);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement("div",{className:"flex flex-col items-center pb-10"},r.a.createElement("div",{className:" flex flex-col w-full c_large:w-c_large "},r.a.createElement("div",{className:"pt-10 pb-8"},r.a.createElement("h1",{className:"text-5xl font-light"},"Your Cart")),E?r.a.createElement("h3",null,"No items in cart."):r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:""},n.map((function(e){return r.a.createElement("div",{className:"border-b py-10",key:e.id},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(s.Link,{to:Object(i.b)(e.name)},r.a.createElement(u.a,{className:"w-32 m-0",src:e.image,alt:e.name})),r.a.createElement(s.Link,{to:Object(i.b)(e.name)},r.a.createElement("p",{className:"m-0 pl-10 text-gray-600 text-sm"},e.name)),r.a.createElement("div",{className:"flex flex-1 justify-end"},r.a.createElement("p",{className:"m-0 pl-10 text-gray-900 tracking-tighter font-semibold"},c.a+e.price)),r.a.createElement("div",{role:"button",onClick:function(){return l(e)},className:"m-0 ml-10 text-gray-900 text-s cursor-pointer"},r.a.createElement(m.e,null))))})))),r.a.createElement("div",{className:"flex flex-1 justify-end py-8"},r.a.createElement("p",{className:"text-sm pr-10"},"Total"),r.a.createElement("p",{className:"font-semibold tracking-tighter"},c.a+f)),!E&&r.a.createElement(s.Link,{to:"/checkout",className:"flex flex-1 justify-end"},r.a.createElement("div",{className:"cursor-pointer flex"},r.a.createElement("p",{className:"text-gray-600 text-sm mr-2"},"Proceed to check out"),r.a.createElement(m.c,{className:"text-gray-600 mt-1"}))))))};t.default=function(e){return r.a.createElement(l.a,null,r.a.createElement(l.b.Consumer,null,(function(t){return r.a.createElement(f,Object.assign({},e,{context:t}))})))}}}]);
//# sourceMappingURL=component---src-pages-cart-js-71311b78ed0e5b255c30.js.map