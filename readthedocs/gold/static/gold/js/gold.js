require=function a(o,c,u){function l(t,e){if(!c[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(s)return s(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var i=c[t]={exports:{}};o[t][0].call(i.exports,function(e){return l(o[t][1][e]||e)},i,i.exports,a,o,c,u)}return c[t].exports}for(var s="function"==typeof require&&require,e=0;e<u.length;e++)l(u[e]);return l}({1:[function(e,t,r){(function(){var u,l,i,s,e,t,r,n,a,o,c,p,h,f,d,v,m,y,g,_,b,w,C,x,k=[].slice,T=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1};(u=window.jQuery||window.Zepto||window.$).payment={},u.payment.fn={},u.fn.payment=function(){var e,t;return t=arguments[0],e=2<=arguments.length?k.call(arguments,1):[],u.payment.fn[t].apply(this,e)},e=/(\d{1,4})/g,u.payment.cards=s=[{type:"visaelectron",patterns:[4026,417500,4405,4508,4844,4913,4917],format:e,length:[16],cvcLength:[3],luhn:!0},{type:"maestro",patterns:[5018,502,503,506,56,58,639,6220,67],format:e,length:[12,13,14,15,16,17,18,19],cvcLength:[3],luhn:!0},{type:"forbrugsforeningen",patterns:[600],format:e,length:[16],cvcLength:[3],luhn:!0},{type:"dankort",patterns:[5019],format:e,length:[16],cvcLength:[3],luhn:!0},{type:"visa",patterns:[4],format:e,length:[13,16],cvcLength:[3],luhn:!0},{type:"mastercard",patterns:[51,52,53,54,55,22,23,24,25,26,27],format:e,length:[16],cvcLength:[3],luhn:!0},{type:"amex",patterns:[34,37],format:/(\d{1,4})(\d{1,6})?(\d{1,5})?/,length:[15],cvcLength:[3,4],luhn:!0},{type:"dinersclub",patterns:[30,36,38,39],format:/(\d{1,4})(\d{1,6})?(\d{1,4})?/,length:[14],cvcLength:[3],luhn:!0},{type:"discover",patterns:[60,64,65,622],format:e,length:[16],cvcLength:[3],luhn:!0},{type:"unionpay",patterns:[62,88],format:e,length:[16,17,18,19],cvcLength:[3],luhn:!1},{type:"jcb",patterns:[35],format:e,length:[16],cvcLength:[3],luhn:!0}],l=function(e){var t,r,n,i,a,o,c;for(e=(e+"").replace(/\D/g,""),n=0,a=s.length;n<a;n++)for(i=0,o=(c=(t=s[n]).patterns).length;i<o;i++)if(r=c[i]+"",e.substr(0,r.length)===r)return t},i=function(e){var t,r,n;for(r=0,n=s.length;r<n;r++)if((t=s[r]).type===e)return t},h=function(e){var t,r,n,i,a,o;for(n=!0,a=i=0,o=(r=(e+"").split("").reverse()).length;a<o;a++)t=r[a],t=parseInt(t,10),(n=!n)&&(t*=2),9<t&&(t-=9),i+=t;return i%10==0},p=function(e){var t;return null!=e.prop("selectionStart")&&e.prop("selectionStart")!==e.prop("selectionEnd")||!(null==("undefined"!=typeof document&&null!==document&&null!=(t=document.selection)?t.createRange:void 0)||!document.selection.createRange().text)},C=function(e,t){var r,n,i,a,o;try{n=t.prop("selectionStart")}catch(e){e,n=null}if(a=t.val(),t.val(e),null!==n&&t.is(":focus"))return n===a.length&&(n=e.length),a!==e&&(o=a.slice(n-1,+n+1||9e9),r=e.slice(n-1,+n+1||9e9),i=e[n],/\d/.test(i)&&o===i+" "&&r===" "+i&&(n+=1)),t.prop("selectionStart",n),t.prop("selectionEnd",n)},y=function(e){var t,r,n,i,a,o;for(null==e&&(e=""),"０１２３４５６７８９","0123456789",i="",a=0,o=(t=e.split("")).length;a<o;a++)r=t[a],-1<(n="０１２３４５６７８９".indexOf(r))&&(r="0123456789"[n]),i+=r;return i},m=function(e){var t;return t=u(e.currentTarget),setTimeout(function(){var e;return e=t.val(),e=(e=y(e)).replace(/\D/g,""),C(e,t)})},d=function(e){var t;return t=u(e.currentTarget),setTimeout(function(){var e;return e=t.val(),e=y(e),e=u.payment.formatCardNumber(e),C(e,t)})},n=function(e){var t,r,n,i,a,o,c;if(n=String.fromCharCode(e.which),/^\d+$/.test(n)&&(t=u(e.currentTarget),c=t.val(),r=l(c+n),i=(c.replace(/\D/g,"")+n).length,o=16,r&&(o=r.length[r.length.length-1]),!(o<=i||null!=t.prop("selectionStart")&&t.prop("selectionStart")!==c.length)))return(a=r&&"amex"===r.type?/^(\d{4}|\d{4}\s\d{6})$/:/(?:^|\s)(\d{4})$/).test(c)?(e.preventDefault(),setTimeout(function(){return t.val(c+" "+n)})):a.test(c+n)?(e.preventDefault(),setTimeout(function(){return t.val(c+n+" ")})):void 0},t=function(e){var t,r;if(t=u(e.currentTarget),r=t.val(),8===e.which&&(null==t.prop("selectionStart")||t.prop("selectionStart")===r.length))return/\d\s$/.test(r)?(e.preventDefault(),setTimeout(function(){return t.val(r.replace(/\d\s$/,""))})):/\s\d?$/.test(r)?(e.preventDefault(),setTimeout(function(){return t.val(r.replace(/\d$/,""))})):void 0},v=function(e){var t;return t=u(e.currentTarget),setTimeout(function(){var e;return e=t.val(),e=y(e),e=u.payment.formatExpiry(e),C(e,t)})},a=function(e){var r,t,n;if(t=String.fromCharCode(e.which),/^\d+$/.test(t))return r=u(e.currentTarget),n=r.val()+t,/^\d$/.test(n)&&"0"!==n&&"1"!==n?(e.preventDefault(),setTimeout(function(){return r.val("0"+n+" / ")})):/^\d\d$/.test(n)?(e.preventDefault(),setTimeout(function(){var e,t;return e=parseInt(n[0],10),2<(t=parseInt(n[1],10))&&0!==e?r.val("0"+e+" / "+t):r.val(n+" / ")})):void 0},o=function(e){var t,r,n;if(r=String.fromCharCode(e.which),/^\d+$/.test(r))return n=(t=u(e.currentTarget)).val(),/^\d\d$/.test(n)?t.val(n+" / "):void 0},c=function(e){var t,r,n;if("/"===(n=String.fromCharCode(e.which))||" "===n)return r=(t=u(e.currentTarget)).val(),/^\d$/.test(r)&&"0"!==r?t.val("0"+r+" / "):void 0},r=function(e){var t,r;if(t=u(e.currentTarget),r=t.val(),8===e.which&&(null==t.prop("selectionStart")||t.prop("selectionStart")===r.length))return/\d\s\/\s$/.test(r)?(e.preventDefault(),setTimeout(function(){return t.val(r.replace(/\d\s\/\s$/,""))})):void 0},f=function(e){var t;return t=u(e.currentTarget),setTimeout(function(){var e;return e=t.val(),e=(e=y(e)).replace(/\D/g,"").slice(0,4),C(e,t)})},w=function(e){var t;return!(!e.metaKey&&!e.ctrlKey)||32!==e.which&&(0===e.which||(e.which<33||(t=String.fromCharCode(e.which),!!/[\d\s]/.test(t))))},_=function(e){var t,r,n,i;if(t=u(e.currentTarget),n=String.fromCharCode(e.which),/^\d+$/.test(n)&&!p(t))return i=(t.val()+n).replace(/\D/g,""),(r=l(i))?i.length<=r.length[r.length.length-1]:i.length<=16},b=function(e){var t,r;if(t=u(e.currentTarget),r=String.fromCharCode(e.which),/^\d+$/.test(r)&&!p(t))return!(6<(t.val()+r).replace(/\D/g,"").length)&&void 0},g=function(e){var t,r;if(t=u(e.currentTarget),r=String.fromCharCode(e.which),/^\d+$/.test(r)&&!p(t))return(t.val()+r).length<=4},x=function(e){var t,r,n,i,a;if(a=(t=u(e.currentTarget)).val(),i=u.payment.cardType(a)||"unknown",!t.hasClass(i))return r=function(){var e,t,r;for(r=[],e=0,t=s.length;e<t;e++)n=s[e],r.push(n.type);return r}(),t.removeClass("unknown"),t.removeClass(r.join(" ")),t.addClass(i),t.toggleClass("identified","unknown"!==i),t.trigger("payment.cardType",i)},u.payment.fn.formatCardCVC=function(){return this.on("keypress",w),this.on("keypress",g),this.on("paste",f),this.on("change",f),this.on("input",f),this},u.payment.fn.formatCardExpiry=function(){return this.on("keypress",w),this.on("keypress",b),this.on("keypress",a),this.on("keypress",c),this.on("keypress",o),this.on("keydown",r),this.on("change",v),this.on("input",v),this},u.payment.fn.formatCardNumber=function(){return this.on("keypress",w),this.on("keypress",_),this.on("keypress",n),this.on("keydown",t),this.on("keyup",x),this.on("paste",d),this.on("change",d),this.on("input",d),this.on("input",x),this},u.payment.fn.restrictNumeric=function(){return this.on("keypress",w),this.on("paste",m),this.on("change",m),this.on("input",m),this},u.payment.fn.cardExpiryVal=function(){return u.payment.cardExpiryVal(u(this).val())},u.payment.cardExpiryVal=function(e){var t,r,n;return t=(n=e.split(/[\s\/]+/,2))[0],2===(null!=(r=n[1])?r.length:void 0)&&/^\d+$/.test(r)&&(r=(new Date).getFullYear().toString().slice(0,2)+r),{month:t=parseInt(t,10),year:r=parseInt(r,10)}},u.payment.validateCardNumber=function(e){var t,r;return e=(e+"").replace(/\s+|-/g,""),!!/^\d+$/.test(e)&&(!!(t=l(e))&&(r=e.length,0<=T.call(t.length,r)&&(!1===t.luhn||h(e))))},u.payment.validateCardExpiry=function(e,t){var r,n,i;return"object"==typeof e&&"month"in e&&(e=(i=e).month,t=i.year),!(!e||!t)&&(e=u.trim(e),t=u.trim(t),!!/^\d+$/.test(e)&&(!!/^\d+$/.test(t)&&(1<=e&&e<=12&&(2===t.length&&(t=t<70?"20"+t:"19"+t),4===t.length&&(n=new Date(t,e),r=new Date,n.setMonth(n.getMonth()-1),n.setMonth(n.getMonth()+1,1),r<n)))))},u.payment.validateCardCVC=function(e,t){var r,n;return e=u.trim(e),!!/^\d+$/.test(e)&&(null!=(r=i(t))?(n=e.length,0<=T.call(r.cvcLength,n)):3<=e.length&&e.length<=4)},u.payment.cardType=function(e){var t;return e&&(null!=(t=l(e))?t.type:void 0)||null},u.payment.formatCardNumber=function(e){var t,r,n,i;return e=e.replace(/\D/g,""),(t=l(e))?(n=t.length[t.length.length-1],e=e.slice(0,n),t.format.global?null!=(i=e.match(t.format))?i.join(" "):void 0:null!=(r=t.format.exec(e))?(r.shift(),(r=u.grep(r,function(e){return e})).join(" ")):void 0):e},u.payment.formatExpiry=function(e){var t,r,n,i;return(r=e.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/))?(t=r[1]||"",n=r[2]||"",0<(i=r[3]||"").length?n=" / ":" /"===n?(t=t.substring(0,1),n=""):2===t.length||0<n.length?n=" / ":1===t.length&&"0"!==t&&"1"!==t&&(t="0"+t,n=" / "),t+n+i):""}}).call(this)},{}],2:[function(e,t,r){var n=e("knockout"),i=(e("./../../../../../bower_components/jquery.payment/lib/jquery.payment.js"),e("jquery")),a=null;function o(e){var r=this;e=e||{};a.publishableKey=r.stripe_key=e.key,r.form=e.form,r.cc_number=n.observable(null),r.cc_expiry=n.observable(null),r.cc_cvv=n.observable(null),r.error_cc_number=n.observable(null),r.error_cc_expiry=n.observable(null),r.error_cc_cvv=n.observable(null),r.stripe_token=n.observable(null),r.last_4_card_digits=n.observable(null),r.is_editing_card=n.observable(!1),r.show_card_form=n.computed(function(){return r.is_editing_card()||!r.last_4_card_digits()||r.cc_number()||r.cc_expiry()||r.cc_cvv()}),r.initialize_form(),r.error=n.observable(null),r.process_form=function(){var e=i.payment.cardExpiryVal(r.cc_expiry()),t={number:r.cc_number(),exp_month:e.month,exp_year:e.year,cvc:r.cc_cvv()};return r.error(null),r.error_cc_number(null),r.error_cc_expiry(null),r.error_cc_cvv(null),i.payment.validateCardNumber(t.number)?i.payment.validateCardExpiry(t.exp_month,t.exp_year)?i.payment.validateCardCVC(t.cvc)?void a.createToken(t,function(e,t){t.error?"card_error"==t.error.type?({invalid_number:r.error_cc_number,incorrect_number:r.error_cc_number,expired_card:r.error_cc_number,card_declined:r.error_cc_number,invalid_expiry_month:r.error_cc_expiry,invalid_expiry_year:r.error_cc_expiry,invalid_cvc:r.error_cc_cvv,incorrect_cvc:r.error_cc_cvv}[t.error.code]||r.error_cc_number)(t.error.message):r.error_cc_number(t.error.message):r.submit_form(t.card.last4,t.id)}):(r.error_cc_cvv("Invalid security code"),!1):(r.error_cc_expiry("Invalid expiration date"),!1):(r.error_cc_number("Invalid card number"),!1)},r.process_full_form=function(){if(!r.show_card_form())return!0;r.process_form()}}"undefined"!=typeof window&&void 0!==window.Stripe&&(a=window.Stripe||{}),n.bindingHandlers.valueInit={init:function(e,t){var r=t();n.isWriteableObservable(r)&&r(e.value)}},o.prototype.submit_form=function(e,t){this.form.find("#id_last_4_card_digits").val(e),this.form.find("#id_stripe_token").val(t),this.form.find("#id_cc_number").val(null),this.form.find("#id_cc_expiry").val(null),this.form.find("#id_cc_cvv").val(null),this.form.submit()},o.prototype.initialize_form=function(){var e=i("input#id_cc_number"),t=i("input#id_cc_cvv"),r=i("input#id_cc_expiry");e.payment("formatCardNumber"),r.payment("formatCardExpiry"),t.payment("formatCardCVC"),e.trigger("keyup")},o.init=function(e,t){var r=new o(e);t=t||i("#payment-form")[0];return n.applyBindings(r,t),r},t.exports.PaymentView=o},{"./../../../../../bower_components/jquery.payment/lib/jquery.payment.js":1,jquery:"jquery",knockout:"knockout"}],"gold/gold":[function(e,t,r){e("jquery");var n=e("readthedocs/payments/static-src/payments/js/base"),i=e("knockout");function a(e){e=e||{};this.constructor.call(this,e),this.last_4_card_digits=i.observable(null)}a.prototype=new n.PaymentView,a.init=function(e,t){var r=new a(e);t=t||$("#payment-form")[0];return i.applyBindings(r,t),r},t.exports.GoldView=a},{jquery:"jquery",knockout:"knockout","readthedocs/payments/static-src/payments/js/base":2}]},{},[]);