(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Mosaico = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
function log(){}function info(){console.log.apply(console,arguments)}function warn(){console.log.apply(console,arguments)}function error(){console.warn.apply(console,arguments)}function time(e){times[e]=Date.now()}function timeEnd(e){var t=times[e];if(!t)throw new Error("No such label: "+e);var o=Date.now()-t;console.log(e+": "+o+"ms")}function trace(){var e=new Error;e.name="Trace",e.message=util.format.apply(null,arguments),console.error(e.stack)}function dir(e){console.log(util.inspect(e)+"\n")}function assert(e){if(!e){var t=slice.call(arguments,1);assert.ok(!1,util.format.apply(null,t))}}var util=require("util"),assert=require("assert"),slice=Array.prototype.slice,console,times={};console="undefined"!=typeof global&&global.console?global.console:"undefined"!=typeof window&&window.console?window.console:{};for(var functions=[[log,"log"],[info,"info"],[warn,"warn"],[error,"error"],[time,"time"],[timeEnd,"timeEnd"],[trace,"trace"],[dir,"dir"],[assert,"assert"]],i=0;i<functions.length;i++){var tuple=functions[i],f=tuple[0],name=tuple[1];console[name]||(console[name]=f)}module.exports=console;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"assert":21,"util":26}],2:[function(require,module,exports){
!function(e){var t=0,o=window.navigator.userAgent,n=o.indexOf("MSIE ")>0,i=n?"-ie":"",a=n?!1:/mozilla/.test(o.toLowerCase())&&!/webkit/.test(o.toLowerCase()),r=[],l=["ffffff","000000","eeece1","1f497d","4f81bd","c0504d","9bbb59","8064a2","4bacc6","f79646"],s=["f2f2f2","7f7f7f","ddd9c3","c6d9f0","dbe5f1","f2dcdb","ebf1dd","e5e0ec","dbeef3","fdeada","d8d8d8","595959","c4bd97","8db3e2","b8cce4","e5b9b7","d7e3bc","ccc1d9","b7dde8","fbd5b5","bfbfbf","3f3f3f","938953","548dd4","95b3d7","d99694","c3d69b","b2a2c7","92cddc","fac08f","a5a5a5","262626","494429","17365d","366092","953734","76923c","5f497a","31859b","e36c09","7f7f7f","0c0c0c","1d1b10","0f243e","244061","632423","4f6128","3f3151","205867","974806"],d=["c00000","ff0000","ffc000","ffff00","92d050","00b050","00b0f0","0070c0","002060","7030a0"],c=[["003366","336699","3366cc","003399","000099","0000cc","000066"],["006666","006699","0099cc","0066cc","0033cc","0000ff","3333ff","333399"],["669999","009999","33cccc","00ccff","0099ff","0066ff","3366ff","3333cc","666699"],["339966","00cc99","00ffcc","00ffff","33ccff","3399ff","6699ff","6666ff","6600ff","6600cc"],["339933","00cc66","00ff99","66ffcc","66ffff","66ccff","99ccff","9999ff","9966ff","9933ff","9900ff"],["006600","00cc00","00ff00","66ff99","99ffcc","ccffff","ccccff","cc99ff","cc66ff","cc33ff","cc00ff","9900cc"],["003300","009933","33cc33","66ff66","99ff99","ccffcc","ffffff","ffccff","ff99ff","ff66ff","ff00ff","cc00cc","660066"],["333300","009900","66ff33","99ff66","ccff99","ffffcc","ffcccc","ff99cc","ff66cc","ff33cc","cc0099","993399"],["336600","669900","99ff33","ccff66","ffff99","ffcc99","ff9999","ff6699","ff3399","cc3399","990099"],["666633","99cc00","ccff33","ffff66","ffcc66","ff9966","ff6666","ff0066","d60094","993366"],["a58800","cccc00","ffff00","ffcc00","ff9933","ff6600","ff0033","cc0066","660033"],["996633","cc9900","ff9900","cc6600","ff3300","ff0000","cc0000","990033"],["663300","996600","cc3300","993300","990000","800000","993333"]],u="#0000ffff",f=function(e){var t=e.toString(16);return 1==t.length&&(t="0"+t),t},p=function(e){return f(Number(e))},b=function(e){var t=f(e);return t+t+t},m=function(e){if(e.length>10){var t=1+e.indexOf("("),o=e.indexOf(")"),n=e.substring(t,o).split(",");return["#",p(n[0]),p(n[1]),p(n[2])].join("")}return e};e.widget("evol.colorpicker",{version:"3.2.1",options:{color:null,showOn:"both",hideButton:!1,displayIndicator:!0,transparentColor:!1,history:!0,defaultPalette:"theme",strings:"Theme Colors,Standard Colors,Web Colors,Theme Colors,Back to Palette,History,No history yet."},_active:!1,_create:function(){var o=this;switch(this._paletteIdx="theme"==this.options.defaultPalette?1:2,this._id="evo-cp"+t++,this._enabled=!0,this.options.showOn=this.options.hideButton?"focus":this.options.showOn,this.element.get(0).tagName){case"INPUT":var r=this.options.color,l=this.element,s=("focus"===this.options.showOn?"":"evo-pointer ")+"evo-colorind"+(a?"-ff":i)+(this.options.hideButton?" evo-hidden-button":""),d="";if(this._isPopup=!0,this._palette=null,null!==r)l.val(r);else{var c=l.val();""!==c&&(r=this.options.color=c)}r===u?s+=" evo-transparent":d=null!==r?"background-color:"+r:"",l.addClass("colorPicker "+this._id).wrap('<div style="width:'+(this.options.hideButton?this.element.width():this.element.width()+32)+"px;"+(n?"margin-bottom:-21px;":"")+(a?"padding:1px 0;":"")+'"></div>').after('<div class="'+s+'" style="'+d+'"></div>').on("keyup onpaste",function(){var t=e(this).val();t!=o.options.color&&o._setValue(t,!0)});var f=this.options.showOn;("both"===f||"focus"===f)&&l.on("focus",function(){o.showPalette()}),("both"===f||"button"===f)&&l.next().on("click",function(e){return e.stopPropagation(),o.showPalette(),!1});break;default:this._isPopup=!1,this._palette=this.element.html(this._paletteHTML()).attr("aria-haspopup","true"),this._bindColors()}if(this.options.history&&(r&&this._add2History(r),this.options.initialHistory)){var p=this.options.initialHistory;for(var b in p)this._add2History(p[b])}},_paletteHTML:function(){var e=this._paletteIdx=Math.abs(this._paletteIdx),t=this.options,o=t.strings.split(","),n='<div class="evo-pop'+i+' ui-widget ui-widget-content ui-corner-all"'+(this._isPopup?' style="position:absolute"':"")+"><span>"+this["_paletteHTML"+e]()+'</span><div class="evo-more"><a href="javascript:void(0)">'+o[1+e]+"</a>";return t.history&&(n+='<a href="javascript:void(0)" class="evo-hist">'+o[5]+"</a>"),n+="</div>",t.displayIndicator&&(n+=this._colorIndHTML(this.options.color)+this._colorIndHTML("")),n+="</div>"},_colorIndHTML:function(e){var t=n?"evo-colorbox-ie ":"",o="";return e?e===u?t+="evo-transparent":o="background-color:"+e:o="display:none",'<div class="evo-color" style="float:left"><div style="'+o+'" class="'+t+'"></div><span>'+(e?e:"")+"</span></div>"},_paletteHTML1:function(){for(var e=this.options,t=e.strings.split(","),o='<td style="background-color:#',a=n?'"><div style="width:2px;"></div></td>':'"><span/></td>',r='<tr><th colspan="10" class="ui-widget-content">',c='<table class="evo-palette'+i+'">'+r+t[0]+"</th></tr><tr>",u=0;10>u;u++)c+=o+l[u]+a;for(c+="</tr>",n||(c+='<tr><th colspan="10"></th></tr>'),c+='<tr class="top">',u=0;10>u;u++)c+=o+s[u]+a;for(var f=1;4>f;f++)for(c+='</tr><tr class="in">',u=0;10>u;u++)c+=o+s[10*f+u]+a;for(c+='</tr><tr class="bottom">',u=40;50>u;u++)c+=o+s[u]+a;for(c+="</tr>"+r,e.transparentColor&&(c+='<div class="evo-transparent evo-tr-box"></div>'),c+=t[1]+"</th></tr><tr>",u=0;10>u;u++)c+=o+d[u]+a;return c+="</tr></table>"},_paletteHTML2:function(){for(var e,t,o='<td style="background-color:#',a=n?'"><div style="width:5px;"></div></td>':'"><span/></td>',r='<table class="evo-palette2'+i+'"><tr>',l="</tr></table>",s='<div class="evo-palcenter">',d=0,u=c.length;u>d;d++){s+=r;var f=c[d];for(e=0,t=f.length;t>e;e++)s+=o+f[e]+a;s+=l}s+='<div class="evo-sep"/>';var p="";for(s+=r,e=255;e>10;e-=10)s+=o+b(e)+a,e-=10,p+=o+b(e)+a;return s+=l+r+p+l+"</div>"},_switchPalette:function(t){if(this._enabled){var o,n,i,a=this.options.strings.split(",");if(e(t).hasClass("evo-hist")){var l=['<table class="evo-palette"><tr><th class="ui-widget-content">',a[5],"</th></tr></tr></table>",'<div class="evo-cHist">'];if(0===r.length)l.push("<p>&nbsp;",a[6],"</p>");else for(var s=r.length-1;s>-1;s--)9===r[s].length?l.push('<div class="evo-transparent"></div>'):l.push('<div style="background-color:',r[s],'"></div>');l.push("</div>"),o=-this._paletteIdx,n=l.join(""),i=a[4]}else this._paletteIdx<0?(o=-this._paletteIdx,this._palette.find(".evo-hist").show()):o=2==this._paletteIdx?1:2,n=this["_paletteHTML"+o](),i=a[o+1],this._paletteIdx=o;this._paletteIdx=o;var d=this._palette.find(".evo-more").prev().html(n).end().children().eq(0).html(i);0>o&&d.next().hide()}},_downOrUpPositioning:function(){for(var e=this.element,t=0;null!==e&&100>t;){if("visible"!=e.css("overflow")){var o=this._palette.offset().top+this._palette.height(),n=e.offset().top+e.height(),i=this._palette.offset().top-this._palette.height()-this.element.outerHeight(),a=e.offset().top,r=o>n&&i>a;r?this._palette.css({bottom:this.element.outerHeight()+"px"}):this._palette.css({bottom:"auto"});break}if("HTML"==e[0].tagName)break;e=e.offsetParent(),t++}},showPalette:function(){if(this._enabled&&(this._active=!0,e(".colorPicker").not("."+this._id).colorpicker("hidePalette"),null===this._palette)){this._palette=this.element.next().after(this._paletteHTML()).next().on("click",function(e){return e.stopPropagation(),!1}),this._bindColors();var t=this;this._isPopup&&(this._downOrUpPositioning(),e(document.body).on("click."+t._id,function(e){e.target!=t.element.get(0)&&t.hidePalette()}).on("keyup."+t._id,function(e){27===e.keyCode&&t.hidePalette()}))}return this},hidePalette:function(){if(this._isPopup&&this._palette){e(document.body).off("click."+this._id);var t=this;this._palette.off("mouseover click","td,.evo-transparent").fadeOut(function(){t._palette.remove(),t._palette=t._cTxt=null}).find(".evo-more a").off("click")}return this},_bindColors:function(){var t=this,o=this.options,n=this._palette.find("div.evo-color"),i=o.history?"td,.evo-cHist>div":"td";o.transparentColor&&(i+=",.evo-transparent"),this._cTxt1=n.eq(0).children().eq(0),this._cTxt2=n.eq(1).children().eq(0),this._palette.on("click",i,function(){if(t._enabled){var o=e(this);t._setValue(o.hasClass("evo-transparent")?u:m(o.attr("style").substring(17))),t._active=!1}}).on("mouseover",i,function(){if(t._enabled){var o=e(this),n=o.hasClass("evo-transparent")?u:m(o.attr("style").substring(17));t.options.displayIndicator&&t._setColorInd(n,2),t._active&&t.element.trigger("mouseover.color",n)}}).find(".evo-more a").on("click",function(){t._switchPalette(this)})},val:function(e){return"undefined"==typeof e?this.options.color:(this._setValue(e),this)},_setValue:function(e,t){e=e.replace(/ /g,""),this.options.color=e,this._isPopup?(t||this.hidePalette(),this._setBoxColor(this.element.val(e).next(),e)):this._setColorInd(e,1),this.options.history&&this._paletteIdx>0&&this._add2History(e),this.element.trigger("change.color",e)},_setColorInd:function(e,t){var o=this["_cTxt"+t];this._setBoxColor(o,e),o.next().html(e)},_setBoxColor:function(e,t){t===u?e.addClass("evo-transparent").removeAttr("style"):e.removeClass("evo-transparent").attr("style","background-color:"+t)},_setOption:function(e,t){"color"==e?this._setValue(t,!0):this.options[e]=t},_add2History:function(e){for(var t=r.length,o=0;t>o;o++)if(e==r[o])return;t>27&&r.shift(),r.push(e)},clear:function(){this.hidePalette().val("")},enable:function(){var e=this.element;return this._isPopup?e.removeAttr("disabled"):e.css({opacity:"1","pointer-events":"auto"}),"focus"!==this.options.showOn&&this.element.next().addClass("evo-pointer"),e.removeAttr("aria-disabled"),this._enabled=!0,this},disable:function(){var e=this.element;return this._isPopup?e.attr("disabled","disabled"):(this.hidePalette(),e.css({opacity:"0.3","pointer-events":"none"})),"focus"!==this.options.showOn&&this.element.next().removeClass("evo-pointer"),e.attr("aria-disabled","true"),this._enabled=!1,this},isDisabled:function(){return!this._enabled},destroy:function(){e(document.body).off("click."+this._id),this._palette&&(this._palette.off("mouseover click","td,.evo-cHist>div,.evo-transparent").find(".evo-more a").off("click"),this._isPopup&&this._palette.remove(),this._palette=this._cTxt=null),this._isPopup&&this.element.next().off("click").remove().end().off("focus").unwrap(),this.element.removeClass("colorPicker "+this.id).empty(),e.Widget.prototype.destroy.call(this)}})}(jQuery);

},{}],3:[function(require,module,exports){
!function(e){"use strict";var t="Compound",o="Identifier",n="MemberExpression",r="Literal",i="ThisExpression",a="CallExpression",l="UnaryExpression",s="BinaryExpression",d="LogicalExpression",u="ConditionalExpression",c="ArrayExpression",f=46,p=44,m=39,b=34,g=40,h=41,v=91,y=93,k=63,w=59,x=58,_=function(e,t){var o=new Error(e+" at character "+t);throw o.index=t,o.description=e,o},S=!0,O={"-":S,"!":S,"~":S,"+":S},C={"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10},$=function(e){var t,o=0;for(var n in e)(t=n.length)>o&&e.hasOwnProperty(n)&&(o=t);return o},T=$(O),E=$(C),A={"true":!0,"false":!1,"null":null},D="this",j=function(e){return C[e]||0},M=function(e,t,o){var n="||"===e||"&&"===e?d:s;return{type:n,operator:e,left:t,right:o}},P=function(e){return e>=48&&57>=e},B=function(e){return 36===e||95===e||e>=65&&90>=e||e>=97&&122>=e||e>=128&&!C[String.fromCharCode(e)]},q=function(e){return 36===e||95===e||e>=65&&90>=e||e>=97&&122>=e||e>=48&&57>=e||e>=128&&!C[String.fromCharCode(e)]},I=function(e){for(var s,d,S=0,$=e.charAt,I=e.charCodeAt,H=function(t){return $.call(e,t)},R=function(t){return I.call(e,t)},U=e.length,N=function(){for(var e=R(S);32===e||9===e||10===e||13===e;)e=R(++S)},L=function(){var e,t,o=V();return N(),R(S)!==k?o:(S++,e=L(),e||_("Expected expression",S),N(),R(S)===x?(S++,t=L(),t||_("Expected expression",S),{type:u,test:o,consequent:e,alternate:t}):(_("Expected :",S),void 0))},F=function(){N();for(var t=e.substr(S,E),o=t.length;o>0;){if(C.hasOwnProperty(t))return S+=o,t;t=t.substr(0,--o)}return!1},V=function(){var e,t,o,n,r,i,a,l;if(i=z(),t=F(),!t)return i;for(r={value:t,prec:j(t)},a=z(),a||_("Expected expression after "+t,S),n=[i,r,a];(t=F())&&(o=j(t),0!==o);){for(r={value:t,prec:o};n.length>2&&o<=n[n.length-2].prec;)a=n.pop(),t=n.pop().value,i=n.pop(),e=M(t,i,a),n.push(e);e=z(),e||_("Expected expression after "+t,S),n.push(r,e)}for(l=n.length-1,e=n[l];l>1;)e=M(n[l-1].value,n[l-2],e),l-=2;return e},z=function(){var t,o,n;if(N(),t=R(S),P(t)||t===f)return G();if(t===m||t===b)return W();if(B(t)||t===g)return Z();if(t===v)return Q();for(o=e.substr(S,T),n=o.length;n>0;){if(O.hasOwnProperty(o))return S+=n,{type:l,operator:o,argument:z(),prefix:!0};o=o.substr(0,--n)}return!1},G=function(){for(var e,t,o="";P(R(S));)o+=H(S++);if(R(S)===f)for(o+=H(S++);P(R(S));)o+=H(S++);if(e=H(S),"e"===e||"E"===e){for(o+=H(S++),e=H(S),("+"===e||"-"===e)&&(o+=H(S++));P(R(S));)o+=H(S++);P(R(S-1))||_("Expected exponent ("+o+H(S)+")",S)}return t=R(S),B(t)?_("Variable names cannot start with a number ("+o+H(S)+")",S):t===f&&_("Unexpected period",S),{type:r,value:parseFloat(o),raw:o}},W=function(){for(var e,t="",o=H(S++),n=!1;U>S;){if(e=H(S++),e===o){n=!0;break}if("\\"===e)switch(e=H(S++)){case"n":t+="\n";break;case"r":t+="\r";break;case"t":t+="	";break;case"b":t+="\b";break;case"f":t+="\f";break;case"v":t+="";break;default:t+="\\"+e}else t+=e}return n||_('Unclosed quote after "'+t+'"',S),{type:r,value:t,raw:o+t+o}},J=function(){var t,n=R(S),a=S;for(B(n)?S++:_("Unexpected "+H(S),S);U>S&&(n=R(S),q(n));)S++;return t=e.slice(a,S),A.hasOwnProperty(t)?{type:r,value:A[t],raw:t}:t===D?{type:i}:{type:o,name:t}},Y=function(e){for(var o,n,r=[],i=!1;U>S;){if(N(),o=R(S),o===e){i=!0,S++;break}o===p?S++:(n=L(),n&&n.type!==t||_("Expected comma",S),r.push(n))}return i||_("Expected "+String.fromCharCode(e),S),r},Z=function(){var e,t;for(e=R(S),t=e===g?X():J(),N(),e=R(S);e===f||e===v||e===g;)S++,e===f?(N(),t={type:n,computed:!1,object:t,property:J()}):e===v?(t={type:n,computed:!0,object:t,property:L()},N(),e=R(S),e!==y&&_("Unclosed [",S),S++):e===g&&(t={type:a,arguments:Y(h),callee:t}),N(),e=R(S);return t},X=function(){S++;var e=L();return N(),R(S)===h?(S++,e):(_("Unclosed (",S),void 0)},Q=function(){return S++,{type:c,elements:Y(y)}},K=[];U>S;)s=R(S),s===w||s===p?S++:(d=L())?K.push(d):U>S&&_('Unexpected "'+H(S)+'"',S);return 1===K.length?K[0]:{type:t,body:K}};if(I.version="<%= version %>",I.toString=function(){return"JavaScript Expression Parser (JSEP) v"+I.version},I.addUnaryOp=function(e){return T=Math.max(e.length,T),O[e]=S,this},I.addBinaryOp=function(e,t){return E=Math.max(e.length,E),C[e]=t,this},I.addLiteral=function(e,t){return A[e]=t,this},I.removeUnaryOp=function(e){return delete O[e],e.length===T&&(T=$(O)),this},I.removeAllUnaryOps=function(){return O={},T=0,this},I.removeBinaryOp=function(e){return delete C[e],e.length===E&&(E=$(C)),this},I.removeAllBinaryOps=function(){return C={},E=0,this},I.removeLiteral=function(e){return delete A[e],this},I.removeAllLiterals=function(){return A={},this},"undefined"==typeof exports){var H=e.jsep;e.jsep=I,I.noConflict=function(){return e.jsep===I&&(e.jsep=H),I}}else"undefined"!=typeof module&&module.exports?exports=module.exports=I:exports.parse=I}(this);

},{}],4:[function(require,module,exports){
"use strict";var utils=require("./utils");module.exports=function(e){function t(t,i,r){function l(o){for(var i=o[0],l=o[1],s=new utils.Selector(i),d=s.parsed(),c=n(d),u=0;u<d.length;++u){var p=d[u];if(p.pseudos)for(var m=0;m<p.pseudos.length;++m){var g=p.pseudos[m];if(e.ignoredPseudos.indexOf(g.name)>=0)return}}if(c){var h=d[d.length-1],v=h.pseudos;h.pseudos=a(h.pseudos),i=d.toString(),h.pseudos=v}var y;try{y=t(i)}catch(k){return}y.each(function(){function o(t,o){for(var i=0,a=t.length;a>i;i++)if("property"==t[i].type){var l=t[i].name,s=t[i].value,d=null!==t[i].value.match(/!important$/);d&&!r.preserveImportant&&(s=s.replace(/\s*!important$/,""));var c=[t[i].position.start.line,t[i].position.start.col],u=new utils.Property(l,s,o,d?2:0,c),p=n.styleProps[l];e.excludedProperties.indexOf(l)<0&&(p&&p.compare(u)===u||!p)&&(p&&p.selector!==o?delete n.styleProps[l]:p&&(u.nextProp=p),n.styleProps[l]=u)}}var n=this;if(!(n.name&&e.nonVisualElements.indexOf(n.name.toUpperCase())>=0)){if(c){var i="pseudo"+c,a=n[i];a||(a=n[i]=t("<span />").get(0),a.pseudoElementType=c,a.pseudoElementParent=n,n[i]=a),n=a}if(!n.styleProps){if(n.styleProps={},t(n).attr(b)){var d="* { "+t(n).attr(b)+" } ";o(utils.parseCSS(d)[0][1],new utils.Selector("<style>",!0))}f.push(n)}o(l,s)}})}function s(e){Object.keys(e.styleProps).length;var o=[];Object.keys(e.styleProps).forEach(function(t){for(var n=e.styleProps[t];"undefined"!=typeof n;)o.push(n),n=n.nextProp}),o.sort(function(e,t){return e.compareFunc(t)});var n=o.filter(function(e){return"content"!==e.prop}).map(function(e){return e.prop+": "+e.value.replace(/["]/g,"'")+";"}).join(" ");n&&t(e).attr(b,n)}function d(e){if(e.pseudoElementType&&e.styleProps.content){var n=o(e.styleProps.content.value);n.img?(e.name="img",t(e).attr("src",n.img)):t(e).text(n);var i=e.pseudoElementParent;"before"===e.pseudoElementType?t(i).prepend(e):t(i).append(e)}}function c(o,n){if(o.name){var i=o.name.toUpperCase();if(e[n+"Elements"].indexOf(i)>-1)for(var a in o.styleProps)if(o.styleProps[a].prop===n){if(o.styleProps[a].value.match(/px/)){var r=o.styleProps[a].value.replace("px","");return t(o).attr(n,r),void 0}if(e.tableElements.indexOf(i)>-1&&o.styleProps[a].value.match(/\%/))return t(o).attr(n,o.styleProps[a].value),void 0}}}function u(o){if(o.name){var n=o.name.toUpperCase(),i=Object.keys(e.styleToAttribute);if(e.tableElements.indexOf(n)>-1)for(var a in o.styleProps)i.indexOf(o.styleProps[a].prop)>-1&&t(o).attr(e.styleToAttribute[o.styleProps[a].prop],o.styleProps[a].value)}}r=r||{};var p=utils.parseCSS(i),f=[],b="style";if(r.styleAttributeName&&(b=r.styleAttributeName),p.forEach(l),f.forEach(s),r.inlinePseudoElements&&f.forEach(d),r.applyWidthAttributes&&f.forEach(function(e){c(e,"width")}),r.applyHeightAttributes&&f.forEach(function(e){c(e,"height")}),r.applyAttributesTableElements&&f.forEach(u),r.insertPreservedExtraCss&&r.extraCss){var m=utils.getPreservedText(r.extraCss,{mediaQueries:r.preserveMediaQueries,fontFaces:r.preserveFontFaces});if(m){var g=null;r.insertPreservedExtraCss!==!0?g=t(r.insertPreservedExtraCss):(g=t("head"),g.length||(g=t("body")),g.length||(g=t.root())),g.first().append("<style>"+m+"</style>")}}}function o(e){if("none"===e||"normal"===e)return"";var t=e.match(/^\s*url\s*\(\s*(.*?)\s*\)\s*$/i);if(t){var o=t[1].replace(/^['"]|['"]$/g,"");return{img:o}}return e=e.slice(1,e.length-1),e=e.replace(/\\/g,"")}function n(e){if(0!==e.length){var t=e[e.length-1].pseudos;if(t)for(var o=0;o<t.length;o++)if(i(t[o]))return t[o].name}}function i(e){return"before"===e.name||"after"===e.name}function a(e){return e.filter(function(e){return!i(e)})}function r(e,o){o=utils.getDefaultOptions(o);var n=s(e,o);return n+="\n"+o.extraCss,t(e,n,o),e}function l(e,t){var o,n,i,a=[],r=e("style");return r.each(function(){if(i=this,o=i.childNodes,1===o.length){if(n=o[0].data,t.applyStyleTags&&void 0===e(i).attr("data-embed")&&a.push(n),t.removeStyleTags&&void 0===e(i).attr("data-embed")){var r=utils.getPreservedText(i.childNodes[0].nodeValue,{mediaQueries:t.preserveMediaQueries,fontFaces:t.preserveFontFaces});r?i.childNodes[0].nodeValue=r:e(i).remove()}e(i).removeAttr("data-embed")}}),a}function s(e,t){var o=l(e,t),n=o.join("\n");return n}return e.ignoredPseudos=["hover","active","focus","visited","link"],e.widthElements=["TABLE","TD","IMG"],e.heightElements=["TABLE","TD","IMG"],e.tableElements=["TABLE","TD","TH","TR","TD","CAPTION","COLGROUP","COL","THEAD","TBODY","TFOOT"],e.nonVisualElements=["HEAD","TITLE","BASE","LINK","STYLE","META","SCRIPT","NOSCRIPT"],e.styleToAttribute={"background-color":"bgcolor","background-image":"background","text-align":"align","vertical-align":"valign"},e.excludedProperties=[],e.juiceDocument=r,e.inlineDocument=t,e};

},{"./utils":7}],5:[function(require,module,exports){
"use strict";function Property(e,t,o,n,i){this.prop=e,this.value=t,this.selector=o,this.priority=n||0,this.additionalPriority=i||[]}module.exports=exports=Property;var utils=require("./utils");Property.prototype.compareFunc=function(e){var t=[];t.push.apply(t,this.selector.specificity()),t.push.apply(t,this.additionalPriority),t[0]+=this.priority;var o=[];return o.push.apply(o,e.selector.specificity()),o.push.apply(o,e.additionalPriority),o[0]+=e.priority,utils.compareFunc(t,o)},Property.prototype.compare=function(e){var t=this.compareFunc(e);return 1===t?this:e},Property.prototype.toString=function(){return this.prop+": "+this.value.replace(/['"]+/g,"")+";"};

},{"./utils":7}],6:[function(require,module,exports){
"use strict";function Selector(e,t){this.text=e,this.spec=void 0,this.styleAttribute=t||!1}function parse(e){try{return parser(e)[0]}catch(t){return[]}}var parser=require("./../../slick/parser");module.exports=exports=Selector,Selector.prototype.parsed=function(){return this.tokens||(this.tokens=parse(this.text)),this.tokens},Selector.prototype.specificity=function(){function e(o,n){for(var i=n||parse(o),r=[t?1:0,0,0,0],a=[],l=0;l<i.length;l++){var s=i[l],d=s.pseudos;if(s.id&&r[1]++,s.attributes&&(r[2]+=s.attributes.length),s.classList&&(r[2]+=s.classList.length),s.tag&&"*"!==s.tag&&r[3]++,d){r[3]+=d.length;for(var u=0;u<d.length;u++)"not"===d[u].name&&(a.push(d[u].value),r[3]--)}}for(var c=a.length;c--;)for(var f=e(a[c]),p=4;p--;)r[p]+=f[p];return r}var t=this.styleAttribute;return this.spec||(this.spec=e(this.text,this.parsed())),this.spec};

},{"./../../slick/parser":17}],7:[function(require,module,exports){
"use strict";var mensch=require("./../../mensch/index.js"),own={}.hasOwnProperty,os=require("os"),Selector=require("./selector"),Property=require("./property");exports.Selector=Selector,exports.Property=Property,exports.extract=function(e){for(var t=0,o=[],n="",i=0,r=e.length;r>i;i++){var a=e.charAt(i);t?(("]"===a||")"===a)&&t--,n+=a):","===a?(o.push(n),n=""):(("["===a||"("===a)&&t++,(n.length||","!==a&&"\n"!==a&&" "!==a)&&(n+=a))}return n.length&&o.push(n),o},exports.parseCSS=function(e){for(var t=mensch.parse(e,{position:!0,comments:!0}),o="undefined"!=typeof t.stylesheet&&t.stylesheet.rules?t.stylesheet.rules:[],n=[],i=0,r=o.length;r>i;i++)if("rule"==o[i].type)for(var a=o[i],l=a.selectors,s=0,d=l.length;d>s;s++)n.push([l[s],a.declarations]);return n},exports.getPreservedText=function(e,t){for(var o=mensch.parse(e,{position:!0,comments:!0}),n="undefined"!=typeof o.stylesheet&&o.stylesheet.rules?o.stylesheet.rules:[],i=[],r=null,a=n.length-1;a>=0;a--)(t.fontFaces&&"font-face"===n[a].type||t.mediaQueries&&"media"===n[a].type)&&i.push(mensch.stringify({stylesheet:{rules:[n[a]]}},{comments:!1,indentation:"  "})),r=n[a].position.start;return 0===i.length?!1:os.EOL+i.join(os.EOL)+os.EOL},exports.normalizeLineEndings=function(e){return e.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n")},exports.compareFunc=function(e,t){for(var o=Math.min(e.length,t.length),n=0;o>n;n++)if(e[n]!==t[n])return e[n]>t[n]?1:-1;return e.length-t.length},exports.compare=function(e,t){return 1==exports.compareFunc(e,t)?e:t},exports.extend=function(e,t){for(var o in t)own.call(t,o)&&(e[o]=t[o]);return e},exports.getDefaultOptions=function(e){var t=exports.extend({extraCss:"",insertPreservedExtraCss:!0,applyStyleTags:!0,removeStyleTags:!0,preserveMediaQueries:!0,preserveFontFaces:!0,applyWidthAttributes:!0,applyHeightAttributes:!0,applyAttributesTableElements:!0,url:""},e);return t.webResources=t.webResources||{},t};

},{"./../../mensch/index.js":12,"./property":5,"./selector":6,"os":22}],8:[function(require,module,exports){
(function (global){
!function(e){if("function"==typeof define&&define.amd)define(["knockout","jquery","jquery-ui/sortable","jquery-ui/draggable"],e);else if("function"==typeof require&&"object"==typeof exports&&"object"==typeof module){var t=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),o=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);(typeof window !== "undefined" ? window['jQuery']['ui']['sortable'] : typeof global !== "undefined" ? global['jQuery']['ui']['sortable'] : null),(typeof window !== "undefined" ? window['jQuery']['ui']['draggable'] : typeof global !== "undefined" ? global['jQuery']['ui']['draggable'] : null),e(t,o)}else e(window.ko,window.jQuery)}(function(e,t){var o="ko_sortItem",a="ko_sourceIndex",i="ko_sortList",n="ko_parentList",l="ko_dragItem",r=e.utils.unwrapObservable,d=e.utils.domData.get,s=e.utils.domData.set,c=t.ui&&t.ui.version,u=c&&c.indexOf("1.6.")&&c.indexOf("1.7.")&&(c.indexOf("1.8.")||"1.8.24"===c),p=function(t,a){e.utils.arrayForEach(t,function(e){1===e.nodeType&&(s(e,o,a),s(e,n,d(e.parentNode,i)))})},m=function(t,o){var a,i={},n=r(t())||{};return n.data?(i[o]=n.data,i.name=n.template):i[o]=t(),e.utils.arrayForEach(["afterAdd","afterRender","as","beforeRemove","includeDestroyed","templateEngine","templateOptions","nodes"],function(t){n.hasOwnProperty(t)?i[t]=n[t]:e.bindingHandlers.sortable.hasOwnProperty(t)&&(i[t]=e.bindingHandlers.sortable[t])}),"foreach"===o&&(i.afterRender?(a=i.afterRender,i.afterRender=function(e,t){p.call(t,e,t),a.call(t,e,t)}):i.afterRender=p),i},b=function(e,t){var o=r(t);if(o)for(var a=0;e>a;a++)o[a]&&r(o[a]._destroy)&&e++;return e},f=function(o,a){var i,n;a?(n=document.getElementById(a),n&&(i=new e.templateSources.domElement(n),i.text(t.trim(i.text())))):t(o).contents().each(function(){this&&1!==this.nodeType&&o.removeChild(this)})};e.bindingHandlers.sortable={init:function(c,p,g,h,v){var k,y,w=t(c),$=r(p())||{},x=m(p,"foreach"),S={};f(c,x.name),t.extend(!0,S,e.bindingHandlers.sortable),$.options&&S.options&&(e.utils.extend(S.options,$.options),delete $.options),e.utils.extend(S,$),S.connectClass&&(e.isObservable(S.allowDrop)||"function"==typeof S.allowDrop)?e.computed({read:function(){var t=r(S.allowDrop),o="function"==typeof t?t.call(this,x.foreach):t;e.utils.toggleDomNodeCssClass(c,S.connectClass,o)},disposeWhenNodeIsRemoved:c},this):e.utils.toggleDomNodeCssClass(c,S.connectClass,S.allowDrop),e.bindingHandlers.template.init(c,function(){return x},g,h,v),k=S.options.start,y=S.options.update,S.options.helper||(S.options.helper=function(e,o){return o.is("tr")&&o.children().each(function(){t(this).width(t(this).width())}),o});var C=setTimeout(function(){var p,m=S.options.receive;w.sortable(e.utils.extend(S.options,{start:function(t,o){var i=o.item[0];s(i,a,e.utils.arrayIndexOf(o.item.parent().children(),i)),o.item.find("input:focus").change(),k&&k.apply(this,arguments)},receive:function(e,t){"function"==typeof m&&m.call(this,e,t),p=d(t.item[0],l),p&&(p.clone&&(p=p.clone()),S.dragged&&(p=S.dragged.call(this,p,e,t)||p))},update:function(l,c){var m,f,g,h,v,k=c.item[0],w=c.item.parent()[0],$=d(k,o)||p;if($||t(k).remove(),p=null,$&&this===w||!u&&t.contains(this,w)){if(m=d(k,n),g=d(k,a),f=d(k.parentNode,i),h=e.utils.arrayIndexOf(c.item.parent().children(),k),x.includeDestroyed||(g=b(g,m),h=b(h,f)),(S.beforeMove||S.afterMove)&&(v={item:$,sourceParent:m,sourceParentNode:m&&c.sender||k.parentNode,sourceIndex:g,targetParent:f,targetIndex:h,cancelDrop:!1},S.beforeMove&&S.beforeMove.call(this,v,l,c)),m?t(m===f?this:c.sender||this).sortable("cancel"):t(k).remove(),v&&v.cancelDrop)return;if(S.hasOwnProperty("strategyMove")&&S.strategyMove!==!1){if(h>=0)if(m)if(m!==f)m.splice(g,1),f.splice(h,0,$),s(k,o,null),c.item.remove();else{var C=r(m);m.valueWillMutate&&m.valueWillMutate(),C.splice(g,1),C.splice(h,0,$),m.valueHasMutated&&m.valueHasMutated()}else f.splice(h,0,$),s(k,o,null),c.item.remove()}else h>=0&&(m&&(m.splice(g,1),e.processAllDeferredBindingUpdates&&e.processAllDeferredBindingUpdates(),e.options&&e.options.deferUpdates&&e.tasks.runEarly()),f.splice(h,0,$)),s(k,o,null);e.processAllDeferredBindingUpdates&&e.processAllDeferredBindingUpdates(),S.afterMove&&S.afterMove.call(this,v,l,c)}y&&y.apply(this,arguments)},connectWith:S.connectClass?"."+S.connectClass:!1})),void 0!==S.isEnabled&&e.computed({read:function(){w.sortable(r(S.isEnabled)?"enable":"disable")},disposeWhenNodeIsRemoved:c})},0);return e.utils.domNodeDisposal.addDisposeCallback(c,function(){(w.data("ui-sortable")||w.data("sortable"))&&w.sortable("destroy"),e.utils.toggleDomNodeCssClass(c,S.connectClass,!1),clearTimeout(C)}),{controlsDescendantBindings:!0}},update:function(t,o,a,n,l){var r=m(o,"foreach");s(t,i,r.foreach),e.bindingHandlers.template.update(t,function(){return r},a,n,l)},connectClass:"ko_container",allowDrop:!0,afterMove:null,beforeMove:null,options:{}},e.bindingHandlers.draggable={init:function(o,a,i,n,d){var c=r(a())||{},u=c.options||{},p=e.utils.extend({},e.bindingHandlers.draggable.options),b=m(a,"data"),f=c.connectClass||e.bindingHandlers.draggable.connectClass,g=void 0!==c.isEnabled?c.isEnabled:e.bindingHandlers.draggable.isEnabled;return c="data"in c?c.data:c,s(o,l,c),e.utils.extend(p,u),p.connectToSortable=f?"."+f:!1,t(o).draggable(p),void 0!==g&&e.computed({read:function(){t(o).draggable(r(g)?"enable":"disable")},disposeWhenNodeIsRemoved:o}),e.utils.domNodeDisposal.addDisposeCallback(o,function(){t(o).draggable("destroy")}),e.bindingHandlers.template.init(o,function(){return b},i,n,d)},update:function(t,o,a,i,n){var l=m(o,"data");return e.bindingHandlers.template.update(t,function(){return l},a,i,n)},connectClass:e.bindingHandlers.sortable.connectClass,options:{helper:"clone"}}});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],9:[function(require,module,exports){
(function (global){
!function(e){"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?module.exports=e((typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),require("./../knockoutjs-reactor/src/knockout.reactor.js")):"function"==typeof define&&define.amd?define(["knockout","knockoutjs-reactor","exports"],e):e(ko,ko.watch)}(function(e,t){var o=function(o,i){var n,a=e.observableArray(),r=e.observableArray(),l=0,d=1,s=2,c=l,u=0,p=1,f=2,b=3,m=u,g={levels:100,undoLabel:"undo (#COUNT#)",redoLabel:"redo (#COUNT#)"};i="object"==typeof i?e.utils.extend(g,i):g;var v=function(e){c==d?h(e,r):c==s?h(e,a):c==l&&(h(e,a),r.removeAll())},k=function(e,t){return"undefined"!=typeof e.mergedAction?e.mergedAction(t):null},h=function(e,t){if(t().length>0){var o=k(t()[t().length-1],e);if(null!==o)return t()[t().length-1]=o,void 0}t().length>=i.levels&&t.shift(),n=t,t.push(e)},y=function(t,o,i){return{name:e.computed(function(){return e.utils.unwrapObservable(t).replace(/#COUNT#/,i().length)}),enabled:e.computed(function(){return 0!==i().length}),execute:function(){var e=i.pop();if(e){var t=c;c=o;var a=m;m=b,e(),w(n),m=a,c=t}return!0}}},w=function(e){if("undefined"==typeof e)throw"Unexpected operation: stack cleaner called with undefined stack";e().length>0&&"undefined"!=typeof e()[e().length-1].mergedAction&&delete e()[e().length-1].mergedAction},x=function(e,t){var o=function(e,t){e(),t()}.bind(void 0,e,t);return"undefined"!=typeof e.mergedAction&&(o.mergedAction=e.mergedAction),o},$=function(e,t,o){if("undefined"!=typeof t)e(t);else{if(!o)throw"Unexpected condition: no item and no child.oldValues!";if("deleted"==o.status)e.splice(o.index,0,o.value);else{if("added"!=o.status)throw"Unsupproted item.status: "+o.status;e.splice(o.index,1)}}},C=function(e,t,o,i,n){return e.bind(void 0,o,i,n)},S=C,q=function(e,t,o){var i="undefined"!=typeof t.oldValues?t.oldValues[0]:void 0,n=S($,e,t,i,o);m!=p&&(m==b?"undefined"!=typeof n&&(n.mergedAction=function(e){return"undefined"!=typeof e.mergeMe&&e.mergeMe?x(e,this):null},n.mergeMe=!0):"undefined"!=typeof n&&(t.oldValues&&m==f&&(n.mergedAction=function(e,t,o){return"object"==typeof o.mergeableAction&&e==o.mergeableAction.child?this:null}.bind(n,t,o),n.mergeableAction={child:t,item:o}),o&&"deleted"==o.status&&(n.mergedAction=function(e,t,o){return"object"==typeof o.mergeableMove&&t.value==o.mergeableMove.item.value?x(o,this):(console.log("UR","not mergeable",typeof o.mergeableMove),null)}.bind(n,t,o)),o&&"added"==o.status&&(n.mergeableMove={child:t,item:o})),"undefined"!=typeof n&&v(n))},O={depth:-1,oldValues:1,mutable:!0,tagFields:!0},M={},T="function"==typeof t?t:e.watch,H=T(o,O,q,M);return{push:v,undoCommand:y(i.undoLabel,d,a),redoCommand:y(i.redoLabel,s,r),reset:function(){a.removeAll(),r.removeAll()},setModeOnce:function(){m=f,w(a)},setModeMerge:function(){m=b,w(a)},setModeNormal:function(){m=u,w(a)},setModeIgnore:function(){m=p,w(a)},setUndoActionMaker:function(e){S=e},dispose:function(){H.dispose()}}};return o});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../knockoutjs-reactor/src/knockout.reactor.js":11}],10:[function(require,module,exports){
(function (global){
!function(e){"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?e((typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),exports):"function"==typeof define&&define.amd?define(["knockout","exports"],e):e(ko,ko.wrap={})}(function(e,t){function o(e){var t=typeof e;return"object"===t&&(e?e.constructor==Date?t="date":"[object Array]"==Object.prototype.toString.call(e)&&(t="array"):t="null"),t}function n(t){var o={};for(var n in t){var i=t[n];e.isComputed(i)||(o[n]=r(i))}return o}function i(e){var t=[];if(!e||0==e.length)return t;for(var o=0,n=e.length;n>o;++o)t.push(r(e[o]));return t}function r(t){var a=e.isObservable(t);if(a){var l=t();return r(l)}return"array"==o(t)?i(t):"object"==o(t)?n(t):t}function a(){f=[{obj:null,wrapped:null,lvl:""}]}function l(t,o,n){for(var i=0;i<f.length;++i)if(f[i].obj===t)return f[i].wrapped;var r={};for(var a in t){var l=t[a];f.push({obj:t,wrapped:r,lvl:d()+"/"+a}),r[a]=u(l,o,n),f.pop()}return o&&o[d()]&&(r=o[d()](r)),c()&&e.track(r),n?e.observable(r):r}function s(t,o,n){var i=e.observableArray();if(!t||0==t.length)return i;for(var r=0,a=t.length;a>r;++r)i.push(u(t[r],o,n));return i}function d(){return f[f.length-1].lvl}function u(t,n,i){if("array"==o(t))return s(t,n,i);if("object"==o(t))return l(t,n,i);if(c()||"function"==typeof t)return t;var r=e.observable();return r(t),r}function c(){return null!=e.track}t.fromJS=function(e,t,o){return a(),u(e,t,o)},t.updateFromJS=function(t,o,n,i){return a(),t(e.utils.unwrapObservable(u(o,n,i)))},t.fromJSON=function(o,n,i){var r=e.utils.parseJson(o);return arguments[0]=r,t.fromJS.apply(this,n,i)},t.toJS=function(e){return r(e)},t.toJSON=function(o){var n=t.toJS(o);return e.utils.stringifyJson(n)};var f});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],11:[function(require,module,exports){
(function (global){
!function(e){"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?e((typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null)):"function"==typeof define&&define.amd?define(["knockout"],e):e(window.ko)}(function(e){e.subscribable.fn.watch=function(t,o,n,i){var a=typeof t;return"boolean"===a||"undefined"===a?e.watch(this,{enabled:t!==!1}):"function"!==a||e.isSubscribable(t)?e.watch(t,o,n,i||this):e.watch(this,o||{},t,i||this),this},e.watch=function(t,o,n,i){function a(s,d,c,u,f,p){if(s&&0!==o.depth&&(-1===o.depth||c.length<(o.depth||1))){if(o.watchedOnly&&!s.watchable&&s!=t)return;if((o.enabled===!1||o.enabled===!0)&&(s.watchable=o.enabled),s.watchable===!1)return;o.seal===!0&&(s.watchable=!1);var b=typeof s;if("object"===b||"function"===b){if(s._watcher===i)return;if(o.hide&&e.utils.arrayIndexOf(o.hide,s)>-1)return;var m=[].concat(c,d&&d!==t?d:[]);if("function"!==b){if("[object Object]"===Object.prototype.toString.call(s))e.utils.objectForEach(s,function(t,n){if(n=o.getter?o.getter.call(i,m,s,t):n){if(o.wrap){var r=Object.prototype.toString.call(n);"[object Function]"!==r&&"[object Object]"!==r&&(o.beforeWrap&&o.beforeWrap.call(i,m,s,n)===!1||(n=s[t]="[object Array]"===r?e.observableArray(n):e.observable(n)))}o.unloop&&(n._watcher=u?void 0:i);var l=a(n,f?null:s,m,u,null,t);o.tagFields&&void 0===n._fieldName&&(l||"parentsOnly"!==o.tagFields&&"function"==typeof n||"object"==typeof n)&&(n._fieldName=t)}});else if(o.hideArrays!==!0)for(var g=0;g<s.length;g++)a(s[g],f?null:s,m,u);return!0}if("function"==typeof s.notifySubscribers&&n){if(o.enabled===!0&&s.watchable===!1)return;if(u||!o.beforeWatch||o.beforeWatch.call(i,m,s,p)!==!1){var h="function"==typeof s.pop;if(u?r(s):l(s,h,m,f),h)return a(s(),f?null:s,m,u,!0),!0;if(o.hideWrappedValues!==!0)return a(s(),f?null:s,m,u,!0)}}}}}function r(e){var t=e[s];if(!t)throw"Subscriptions field (."+s+") not defined for observable child "+(e._fieldName||"");if(t.change)for(var n=t.change.length-1;n>=0;n--)t.change[n]._watcher===i&&t.change[n].dispose();if(t.beforeChange&&(o.mutable||o.oldValues>0))for(var n=t.beforeChange.length-1;n>=0;n--)t.beforeChange[n]._watcher===i&&t.beforeChange[n].dispose();if(t.arrayChange)for(var n=t.arrayChange.length-1;n>=0;n--)t.arrayChange[n]._watcher===i&&t.arrayChange[n].dispose()}function l(t,r,l,s){r?t.subscribe(function(o){e.utils.arrayForEach(o,function(e){var o=n.call(i,l,t,e);void 0!==o&&i(o),e.moved||setTimeout(function(){a(e.value,s?null:t,l,"deleted"===e.status)},0)})},void 0,"arrayChange")._watcher=i:(t.subscribe(function(){if(t.watchable!==!1){var e=n.call(i,l,t);void 0!==e&&i(e),o.mutable&&"object"==typeof t()&&a(t(),s?null:t,l)}},null,"change")._watcher=i,(o.oldValues>0||o.mutable)&&(t.subscribe(function(e){if(o.oldValues>0){var n=t.oldValues?t.oldValues:t.oldValues=[];for(n.unshift(e);n.length>o.oldValues;)n.pop()}o.mutable&&"object"==typeof e&&a(e,s?null:t,l,!1,!0)},null,"beforeChange")._watcher=i))}"function"==typeof o&&(i=i||n,n=o,o={}),i=i||this;var s;switch("function"==typeof e.subscription||e.version){case!0:s="_subscriptions";break;case"3.0.0":s="F";break;case"3.1.0":s="H";break;case"3.2.0":s="M";break;case"3.3.0":s="G";break;case"3.4.0":s="K";break;case"3.4.1":s="K";break;default:throw"Unsupported Knockout version. Only v3.0.0 to v3.4.1 are supported when minified. Current version is "+e.version}return"function"!=typeof t||e.isSubscribable(t)?(a(t,null,[]),{dispose:function(){a(t,null,[],!0)}}):e.computed(t,n,o)}});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],12:[function(require,module,exports){
module.exports={lex:require("./lib/lexer"),parse:require("./lib/parser"),stringify:require("./lib/stringify")};

},{"./lib/lexer":14,"./lib/parser":15,"./lib/stringify":16}],13:[function(require,module,exports){
(function (process){
function debug(e){return _debug.bind(null,e)}function _debug(e){var t=[].slice.call(arguments,1);t.unshift("["+e+"]"),process.stderr.write(t.join(" ")+"\n")}exports=module.exports=debug;

}).call(this,require('_process'))

},{"_process":23}],14:[function(require,module,exports){
function lex(e){function t(){return u(),e[h]}function o(e){return e?w[w.length-1-e]:k}function n(t){var o=h+1;return t===e.slice(o,o+t.length)}function r(t){var o=e.slice(h).indexOf(t);return o>0?o:!1}function i(e){return e===a(1)}function a(t){return e[h+(t||1)]}function l(){var e=w.pop();return k=w[w.length-1],e}function s(e){return k=e,w.push(k),w.length}function d(e){var t=k;return w[w.length-1]=k=e,t}function u(t){if(1==(t||1))"\n"==e[h]?(y++,g=1):g++,h++;else{var o=e.slice(h,h+t).split("\n");o.length>1&&(y+=o.length-1,g=1),g+=o[o.length-1].length,h+=t}}function c(){x.end={line:y,col:g},DEBUG&&debug("addToken:",JSON.stringify(x,null,2)),_.push(x),m="",x={}}function f(e){x={type:e,start:{line:y,col:g}}}var p,b,m="",g=0,h=-1,v=0,y=1,k="before-selector",w=[k],x={},_=[],S=["media","keyframes",{name:"-webkit-keyframes",type:"keyframes",prefix:"-webkit-"},{name:"-moz-keyframes",type:"keyframes",prefix:"-moz-"},{name:"-ms-keyframes",type:"keyframes",prefix:"-ms-"},{name:"-o-keyframes",type:"keyframes",prefix:"-o-"},"font-face",{name:"import",state:"before-at-value"},{name:"charset",state:"before-at-value"},"supports","viewport",{name:"namespace",state:"before-at-value"},"document",{name:"-moz-document",type:"document",prefix:"-moz-"},"page"];for(TIMER&&(p=Date.now());b=t();)switch(DEBUG&&debug(b,o()),b){case" ":switch(o()){case"selector":case"value":case"value-paren":case"at-group":case"at-value":case"comment":case"double-string":case"single-string":m+=b}break;case"\n":case"	":case"\r":case"\f":switch(o()){case"value":case"value-paren":case"at-group":case"comment":case"single-string":case"double-string":case"selector":m+=b;break;case"at-value":"\n"===b&&(x.value=m.trim(),c(),l())}break;case":":switch(o()){case"name":x.name=m.trim(),m="",d("before-value");break;case"before-selector":m+=b,f("selector"),s("selector");break;case"before-value":d("value"),m+=b;break;default:m+=b}break;case";":switch(o()){case"name":case"before-value":case"value":m.trim().length>0&&(x.value=m.trim(),c()),d("before-name");break;case"value-paren":m+=b;break;case"at-value":x.value=m.trim(),c(),l();break;case"before-name":break;default:m+=b}break;case"{":switch(o()){case"selector":if("\\"===a(-1)){m+=b;break}x.text=m.trim(),c(),d("before-name"),v+=1;break;case"at-group":switch(x.name=m.trim(),x.type){case"font-face":case"viewport":case"page":s("before-name");break;default:s("before-selector")}c(),v+=1;break;case"name":case"at-rule":x.name=m.trim(),c(),s("before-name"),v+=1;break;case"comment":case"double-string":case"single-string":m+=b;break;case"before-value":d("value"),m+=b}break;case"}":switch(o()){case"before-name":case"name":case"before-value":case"value":m&&(x.value=m.trim()),x.name&&x.value&&c(),f("end"),c(),l(),"at-group"===o()&&(f("at-group-end"),c(),l()),v>0&&(v-=1);break;case"at-group":case"before-selector":case"selector":if("\\"===a(-1)){m+=b;break}v>0&&"at-group"===o(1)&&(f("at-group-end"),c()),v>1&&l(),v>0&&(v-=1);break;case"double-string":case"single-string":case"comment":m+=b}break;case'"':case"'":switch(o()){case"double-string":'"'===b&&"\\"!==a(-1)&&l();break;case"single-string":"'"===b&&"\\"!==a(-1)&&l();break;case"before-at-value":d("at-value"),s('"'===b?"double-string":"single-string");break;case"before-value":d("value"),s('"'===b?"double-string":"single-string");break;case"comment":break;default:"\\"!==a(-1)&&s('"'===b?"double-string":"single-string")}m+=b;break;case"/":switch(o()){case"comment":case"double-string":case"single-string":m+=b;break;case"before-value":case"selector":case"name":case"value":if(i("*")){var O=r("*/");O&&u(O+1)}else"before-value"==o()&&d("value"),m+=b;break;default:i("*")?(f("comment"),s("comment"),u()):m+=b}break;case"*":switch(o()){case"comment":i("/")?(x.text=m,u(),c(),l()):m+=b;break;case"before-selector":m+=b,f("selector"),s("selector");break;case"before-value":d("value"),m+=b;break;default:m+=b}break;case"@":switch(o()){case"comment":case"double-string":case"single-string":m+=b;break;case"before-value":d("value"),m+=b;break;default:for(var C,$,T=!1,A=0,E=S.length;!T&&E>A;++A)$=S[A],C=$.name||$,n(C)&&(T=!0,f(C),s($.state||"at-group"),u(C.length),$.prefix&&(x.prefix=$.prefix),$.type&&(x.type=$.type));T||(m+=b)}break;case"(":switch(o()){case"value":s("value-paren");break;case"before-value":d("value")}m+=b;break;case")":switch(o()){case"value-paren":l();break;case"before-value":d("value")}m+=b;break;default:switch(o()){case"before-selector":f("selector"),s("selector");break;case"before-name":f("property"),d("name");break;case"before-value":d("value");break;case"before-at-value":d("at-value")}m+=b}return TIMER&&debug("ran in",Date.now()-p+"ms"),_}var DEBUG=!1,TIMER=!1,debug=require("./debug")("lex");exports=module.exports=lex;

},{"./debug":13}],15:[function(require,module,exports){
function parse(e,t){var o;t||(t={}),_comments=!!t.comments,_position=!!t.position,_depth=0,_tokens=Array.isArray(e)?e.slice():lex(e);var n,i,r=[];for(TIMER&&(o=Date.now());i=next();)n=parseToken(i),n&&r.push(n);return TIMER&&debug("ran in",Date.now()-o+"ms"),{type:"stylesheet",stylesheet:{rules:r}}}function astNode(e,t){t||(t={});for(var o,n=["type","name","value"],i={},r=0;r<n.length;++r)o=n[r],e[o]&&(i[o]=t[o]||e[o]);for(n=Object.keys(t),r=0;r<n.length;++r)o=n[r],i[o]||(i[o]=t[o]);return _position&&(i.position={start:e.start,end:e.end}),DEBUG&&debug("astNode:",JSON.stringify(i,null,2)),i}function next(){var e=_tokens.shift();return DEBUG&&debug("next:",JSON.stringify(e,null,2)),e}function parseAtGroup(e){_depth+=1;var t={};switch(e.type){case"font-face":case"viewport":t.declarations=parseDeclarations();break;case"page":t.prefix=e.prefix,t.declarations=parseDeclarations();break;default:t.prefix=e.prefix,t.rules=parseRules()}return astNode(e,t)}function parseAtImport(e){return astNode(e)}function parseCharset(e){return astNode(e)}function parseComment(e){return astNode(e,{text:e.text})}function parseNamespace(e){return astNode(e)}function parseProperty(e){return astNode(e)}function parseSelector(e){function t(e){return e.trim()}return astNode(e,{type:"rule",selectors:e.text.split(",").map(t),declarations:parseDeclarations(e)})}function parseToken(e){switch(e.type){case"property":return parseProperty(e);case"selector":return parseSelector(e);case"at-group-end":return _depth-=1,void 0;case"media":case"keyframes":return parseAtGroup(e);case"comment":if(_comments)return parseComment(e);break;case"charset":return parseCharset(e);case"import":return parseAtImport(e);case"namespace":return parseNamespace(e);case"font-face":case"supports":case"viewport":case"document":case"page":return parseAtGroup(e)}DEBUG&&debug("parseToken: unexpected token:",JSON.stringify(e))}function parseTokensWhile(e){for(var t,o,n=[];(o=next())&&e&&e(o);)t=parseToken(o),t&&n.push(t);return o&&"end"!==o.type&&_tokens.unshift(o),n}function parseDeclarations(){return parseTokensWhile(function(e){return"property"===e.type||"comment"===e.type})}function parseRules(){return parseTokensWhile(function(){return _depth})}var DEBUG=!1,TIMER=!1,debug=require("./debug")("parse"),lex=require("./lexer");exports=module.exports=parse;var _comments,_depth,_position,_tokens;

},{"./debug":13,"./lexer":14}],16:[function(require,module,exports){
function stringify(e,t){var o;t||(t={}),_indentation=t.indentation||"",_compress=!!t.compress,_comments=!!t.comments,_compress?_n=_s="":(_n="\n",_s=" "),TIMER&&(o=Date.now());var n=reduce(e.stylesheet.rules,stringifyNode).join("\n").trim();return TIMER&&debug("ran in",Date.now()-o+"ms"),n}function indent(e){return this.level||(this.level=1),e?(this.level+=e,void 0):_compress?"":Array(this.level).join(_indentation||"")}function stringifyAtRule(e){return"@"+e.type+" "+e.value+";"+_n}function stringifyAtGroup(e){var t="",o=e.prefix||"";e.name&&(t=" "+e.name);var n="page"!==e.type;return"@"+o+e.type+t+_s+stringifyBlock(e,n)+_n}function stringifyComment(e){return _comments?"/*"+(e.text||"")+"*/"+_n:""}function stringifyRule(e){var t;return e.selectors?t=e.selectors.join(","+_n):(t="@"+e.type,t+=e.name?" "+e.name:""),indent()+t+_s+stringifyBlock(e)+_n}function reduce(e,t){return e.reduce(function(e,o){var n="comment"===o.type?stringifyComment(o):t(o);return n&&e.push(n),e},[])}function stringifyBlock(e,t){var o=e.declarations,n=stringifyDeclaration;return e.rules&&(o=e.rules,n=stringifyRule),o=stringifyChildren(o,n),o&&(o=_n+o+(t?"":_n)),"{"+o+indent()+"}"}function stringifyChildren(e,t){if(!e)return"";indent(1);var o=reduce(e,t);return indent(-1),o.length?o.join(_n):""}function stringifyDeclaration(e){return"property"===e.type?stringifyProperty(e):(DEBUG&&debug("stringifyDeclaration: unexpected node:",JSON.stringify(e)),void 0)}function stringifyNode(e){switch(e.type){case"rule":return stringifyRule(e);case"media":case"keyframes":return stringifyAtGroup(e);case"comment":return stringifyComment(e);case"import":case"charset":case"namespace":return stringifyAtRule(e);case"font-face":case"supports":case"viewport":case"document":case"page":return stringifyAtGroup(e)}DEBUG&&debug("stringifyNode: unexpected node: "+JSON.stringify(e))}function stringifyProperty(e){var t=e.name?e.name+":"+_s:"";return indent()+t+e.value+";"}var DEBUG=!1,TIMER=!1,debug=require("./debug")("stringify"),_comments,_compress,_indentation,_n,_s;exports=module.exports=stringify;

},{"./debug":13}],17:[function(require,module,exports){
"use strict";var escapeRe=/([-.*+?^${}()|[\]\/\\])/g,unescapeRe=/\\/g,escape=function(e){return(e+"").replace(escapeRe,"\\$1")},unescape=function(e){return(e+"").replace(unescapeRe,"")},slickRe=RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:([\"'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/,"["+escape(">+~`!@$%^&={}\\;</")+"]").replace(/<unicode>/g,"(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g,"(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])")),Part=function(e){this.combinator=e||" ",this.tag="*"};Part.prototype.toString=function(){if(!this.raw){var e,t,o="";if(o+=this.tag||"*",this.id&&(o+="#"+this.id),this.classes&&(o+="."+this.classList.join(".")),this.attributes)for(e=0;t=this.attributes[e++];)o+="["+t.name+(t.operator?t.operator+'"'+t.value+'"':"")+"]";if(this.pseudos)for(e=0;t=this.pseudos[e++];)o+=":"+t.name,t.value&&(o+="("+t.value+")");this.raw=o}return this.raw};var Expression=function(){this.length=0};Expression.prototype.toString=function(){if(!this.raw){for(var e,t="",o=0;e=this[o++];)1!==o&&(t+=" ")," "!==e.combinator&&(t+=e.combinator+" "),t+=e;this.raw=t}return this.raw};var replacer=function(e,t,o,n,r,i,a,l,s,d,u,c,f,p,m,b){var g,h;if((t||!this.length)&&(g=this[this.length++]=new Expression,t))return"";if(g||(g=this[this.length-1]),(o||n||!g.length)&&(h=g[g.length++]=new Part(o)),h||(h=g[g.length-1]),r)h.tag=unescape(r);else if(i)h.id=unescape(i);else if(a){var v=unescape(a),y=h.classes||(h.classes={});if(!y[v]){y[v]=escape(a);var k=h.classList||(h.classList=[]);k.push(v),k.sort()}}else f?(b=b||m,(h.pseudos||(h.pseudos=[])).push({type:1==c.length?"class":"element",name:unescape(f),escapedName:escape(f),value:b?unescape(b):null,escapedValue:b?escape(b):null})):l&&(u=u?escape(u):null,(h.attributes||(h.attributes=[])).push({operator:s,name:unescape(l),escapedName:escape(l),value:u?unescape(u):null,escapedValue:u?escape(u):null}));return""},Expressions=function(e){this.length=0;for(var t,o=this,n=e;e;){if(t=e.replace(slickRe,function(){return replacer.apply(o,arguments)}),t===e)throw new Error(n+" is an invalid expression");e=t}};Expressions.prototype.toString=function(){if(!this.raw){for(var e,t=[],o=0;e=this[o++];)t.push(e);this.raw=t.join(", ")}return this.raw};var cache={},parse=function(e){return null==e?null:(e=(""+e).replace(/^\s+|\s+$/g,""),cache[e]||(cache[e]=new Expressions(e)))};module.exports=parse;

},{}],18:[function(require,module,exports){
!function(e){function t(e,n){if(e=e?e:"",n=n||{},e instanceof t)return e;if(!(this instanceof t))return new t(e,n);var i=o(e);this._originalInput=e,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=L(100*this._a)/100,this._format=n.format||i.format,this._gradientType=n.gradientType,this._r<1&&(this._r=L(this._r)),this._g<1&&(this._g=L(this._g)),this._b<1&&(this._b=L(this._b)),this._ok=i.ok,this._tc_id=R++}function o(e){var t={r:0,g:0,b:0},o=1,i=null,r=null,s=null,d=!1,c=!1;return"string"==typeof e&&(e=j(e)),"object"==typeof e&&(B(e.r)&&B(e.g)&&B(e.b)?(t=n(e.r,e.g,e.b),d=!0,c="%"===String(e.r).substr(-1)?"prgb":"rgb"):B(e.h)&&B(e.s)&&B(e.v)?(i=A(e.s),r=A(e.v),t=l(e.h,i,r),d=!0,c="hsv"):B(e.h)&&B(e.s)&&B(e.l)&&(i=A(e.s),s=A(e.l),t=a(e.h,i,s),d=!0,c="hsl"),e.hasOwnProperty("a")&&(o=e.a)),o=S(o),{ok:d,format:e.format||c,r:N(255,U(t.r,0)),g:N(255,U(t.g,0)),b:N(255,U(t.b,0)),a:o}}function n(e,t,o){return{r:255*C(e,255),g:255*C(t,255),b:255*C(o,255)}}function i(e,t,o){e=C(e,255),t=C(t,255),o=C(o,255);var n,i,a=U(e,t,o),r=N(e,t,o),l=(a+r)/2;if(a==r)n=i=0;else{var s=a-r;switch(i=l>.5?s/(2-a-r):s/(a+r),a){case e:n=(t-o)/s+(o>t?6:0);break;case t:n=(o-e)/s+2;break;case o:n=(e-t)/s+4}n/=6}return{h:n,s:i,l:l}}function a(e,t,o){function n(e,t,o){return 0>o&&(o+=1),o>1&&(o-=1),1/6>o?e+6*(t-e)*o:.5>o?t:2/3>o?e+6*(t-e)*(2/3-o):e}var i,a,r;if(e=C(e,360),t=C(t,100),o=C(o,100),0===t)i=a=r=o;else{var l=.5>o?o*(1+t):o+t-o*t,s=2*o-l;i=n(s,l,e+1/3),a=n(s,l,e),r=n(s,l,e-1/3)}return{r:255*i,g:255*a,b:255*r}}function r(e,t,o){e=C(e,255),t=C(t,255),o=C(o,255);var n,i,a=U(e,t,o),r=N(e,t,o),l=a,s=a-r;if(i=0===a?0:s/a,a==r)n=0;else{switch(a){case e:n=(t-o)/s+(o>t?6:0);break;case t:n=(o-e)/s+2;break;case o:n=(e-t)/s+4}n/=6}return{h:n,s:i,v:l}}function l(t,o,n){t=6*C(t,360),o=C(o,100),n=C(n,100);var i=e.floor(t),a=t-i,r=n*(1-o),l=n*(1-a*o),s=n*(1-(1-a)*o),d=i%6,c=[n,l,r,r,s,n][d],u=[s,n,n,l,r,r][d],p=[r,r,s,n,n,l][d];return{r:255*c,g:255*u,b:255*p}}function s(e,t,o,n){var i=[T(L(e).toString(16)),T(L(t).toString(16)),T(L(o).toString(16))];return n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function d(e,t,o,n,i){var a=[T(L(e).toString(16)),T(L(t).toString(16)),T(L(o).toString(16)),T(E(n))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function c(e,t,o,n){var i=[T(E(n)),T(L(e).toString(16)),T(L(t).toString(16)),T(L(o).toString(16))];return i.join("")}function u(e,o){o=0===o?0:o||10;var n=t(e).toHsl();return n.s-=o/100,n.s=H(n.s),t(n)}function p(e,o){o=0===o?0:o||10;var n=t(e).toHsl();return n.s+=o/100,n.s=H(n.s),t(n)}function f(e){return t(e).desaturate(100)}function b(e,o){o=0===o?0:o||10;var n=t(e).toHsl();return n.l+=o/100,n.l=H(n.l),t(n)}function g(e,o){o=0===o?0:o||10;var n=t(e).toRgb();return n.r=U(0,N(255,n.r-L(255*-(o/100)))),n.g=U(0,N(255,n.g-L(255*-(o/100)))),n.b=U(0,N(255,n.b-L(255*-(o/100)))),t(n)}function m(e,o){o=0===o?0:o||10;var n=t(e).toHsl();return n.l-=o/100,n.l=H(n.l),t(n)}function h(e,o){var n=t(e).toHsl(),i=(n.h+o)%360;return n.h=0>i?360+i:i,t(n)}function v(e){var o=t(e).toHsl();return o.h=(o.h+180)%360,t(o)}function k(e){var o=t(e).toHsl(),n=o.h;return[t(e),t({h:(n+120)%360,s:o.s,l:o.l}),t({h:(n+240)%360,s:o.s,l:o.l})]}function y(e){var o=t(e).toHsl(),n=o.h;return[t(e),t({h:(n+90)%360,s:o.s,l:o.l}),t({h:(n+180)%360,s:o.s,l:o.l}),t({h:(n+270)%360,s:o.s,l:o.l})]}function w(e){var o=t(e).toHsl(),n=o.h;return[t(e),t({h:(n+72)%360,s:o.s,l:o.l}),t({h:(n+216)%360,s:o.s,l:o.l})]}function x(e,o,n){o=o||6,n=n||30;var i=t(e).toHsl(),a=360/n,r=[t(e)];for(i.h=(i.h-(a*o>>1)+720)%360;--o;)i.h=(i.h+a)%360,r.push(t(i));return r}function $(e,o){o=o||6;for(var n=t(e).toHsv(),i=n.h,a=n.s,r=n.v,l=[],s=1/o;o--;)l.push(t({h:i,s:a,v:r})),r=(r+s)%1;return l}function _(e){var t={};for(var o in e)e.hasOwnProperty(o)&&(t[e[o]]=o);return t}function S(e){return e=parseFloat(e),(isNaN(e)||0>e||e>1)&&(e=1),e}function C(t,o){M(t)&&(t="100%");var n=O(t);return t=N(o,U(0,parseFloat(t))),n&&(t=parseInt(t*o,10)/100),e.abs(t-o)<1e-6?1:t%o/parseFloat(o)}function H(e){return N(1,U(0,e))}function q(e){return parseInt(e,16)}function M(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)}function O(e){return"string"==typeof e&&-1!=e.indexOf("%")}function T(e){return 1==e.length?"0"+e:""+e}function A(e){return 1>=e&&(e=100*e+"%"),e}function E(t){return e.round(255*parseFloat(t)).toString(16)}function I(e){return q(e)/255}function B(e){return!!J.CSS_UNIT.exec(e)}function j(e){e=e.replace(P,"").replace(F,"").toLowerCase();var t=!1;if(V[e])e=V[e],t=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};var o;return(o=J.rgb.exec(e))?{r:o[1],g:o[2],b:o[3]}:(o=J.rgba.exec(e))?{r:o[1],g:o[2],b:o[3],a:o[4]}:(o=J.hsl.exec(e))?{h:o[1],s:o[2],l:o[3]}:(o=J.hsla.exec(e))?{h:o[1],s:o[2],l:o[3],a:o[4]}:(o=J.hsv.exec(e))?{h:o[1],s:o[2],v:o[3]}:(o=J.hsva.exec(e))?{h:o[1],s:o[2],v:o[3],a:o[4]}:(o=J.hex8.exec(e))?{r:q(o[1]),g:q(o[2]),b:q(o[3]),a:I(o[4]),format:t?"name":"hex8"}:(o=J.hex6.exec(e))?{r:q(o[1]),g:q(o[2]),b:q(o[3]),format:t?"name":"hex"}:(o=J.hex4.exec(e))?{r:q(o[1]+""+o[1]),g:q(o[2]+""+o[2]),b:q(o[3]+""+o[3]),a:I(o[4]+""+o[4]),format:t?"name":"hex8"}:(o=J.hex3.exec(e))?{r:q(o[1]+""+o[1]),g:q(o[2]+""+o[2]),b:q(o[3]+""+o[3]),format:t?"name":"hex"}:!1}function D(e){var t,o;return e=e||{level:"AA",size:"small"},t=(e.level||"AA").toUpperCase(),o=(e.size||"small").toLowerCase(),"AA"!==t&&"AAA"!==t&&(t="AA"),"small"!==o&&"large"!==o&&(o="small"),{level:t,size:o}}var P=/^\s+/,F=/\s+$/,R=0,L=e.round,N=e.min,U=e.max,z=e.random;t.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var t,o,n,i,a,r,l=this.toRgb();return t=l.r/255,o=l.g/255,n=l.b/255,i=.03928>=t?t/12.92:e.pow((t+.055)/1.055,2.4),a=.03928>=o?o/12.92:e.pow((o+.055)/1.055,2.4),r=.03928>=n?n/12.92:e.pow((n+.055)/1.055,2.4),.2126*i+.7152*a+.0722*r},setAlpha:function(e){return this._a=S(e),this._roundA=L(100*this._a)/100,this},toHsv:function(){var e=r(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=r(this._r,this._g,this._b),t=L(360*e.h),o=L(100*e.s),n=L(100*e.v);return 1==this._a?"hsv("+t+", "+o+"%, "+n+"%)":"hsva("+t+", "+o+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=i(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=i(this._r,this._g,this._b),t=L(360*e.h),o=L(100*e.s),n=L(100*e.l);return 1==this._a?"hsl("+t+", "+o+"%, "+n+"%)":"hsla("+t+", "+o+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return s(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return d(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:L(this._r),g:L(this._g),b:L(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+L(this._r)+", "+L(this._g)+", "+L(this._b)+")":"rgba("+L(this._r)+", "+L(this._g)+", "+L(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:L(100*C(this._r,255))+"%",g:L(100*C(this._g,255))+"%",b:L(100*C(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+L(100*C(this._r,255))+"%, "+L(100*C(this._g,255))+"%, "+L(100*C(this._b,255))+"%)":"rgba("+L(100*C(this._r,255))+"%, "+L(100*C(this._g,255))+"%, "+L(100*C(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":this._a<1?!1:W[s(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var o="#"+c(this._r,this._g,this._b,this._a),n=o,i=this._gradientType?"GradientType = 1, ":"";if(e){var a=t(e);n="#"+c(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+i+"startColorstr="+o+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var o=!1,n=this._a<1&&this._a>=0,i=!t&&n&&("hex"===e||"hex6"===e||"hex3"===e||"hex4"===e||"hex8"===e||"name"===e);return i?"name"===e&&0===this._a?this.toName():this.toRgbString():("rgb"===e&&(o=this.toRgbString()),"prgb"===e&&(o=this.toPercentageRgbString()),("hex"===e||"hex6"===e)&&(o=this.toHexString()),"hex3"===e&&(o=this.toHexString(!0)),"hex4"===e&&(o=this.toHex8String(!0)),"hex8"===e&&(o=this.toHex8String()),"name"===e&&(o=this.toName()),"hsl"===e&&(o=this.toHslString()),"hsv"===e&&(o=this.toHsvString()),o||this.toHexString())},clone:function(){return t(this.toString())},_applyModification:function(e,t){var o=e.apply(null,[this].concat([].slice.call(t)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(b,arguments)},brighten:function(){return this._applyModification(g,arguments)},darken:function(){return this._applyModification(m,arguments)},desaturate:function(){return this._applyModification(u,arguments)},saturate:function(){return this._applyModification(p,arguments)},greyscale:function(){return this._applyModification(f,arguments)},spin:function(){return this._applyModification(h,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(x,arguments)},complement:function(){return this._applyCombination(v,arguments)},monochromatic:function(){return this._applyCombination($,arguments)},splitcomplement:function(){return this._applyCombination(w,arguments)},triad:function(){return this._applyCombination(k,arguments)},tetrad:function(){return this._applyCombination(y,arguments)}},t.fromRatio=function(e,o){if("object"==typeof e){var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]="a"===i?e[i]:A(e[i]));e=n}return t(e,o)},t.equals=function(e,o){return e&&o?t(e).toRgbString()==t(o).toRgbString():!1},t.random=function(){return t.fromRatio({r:z(),g:z(),b:z()})},t.mix=function(e,o,n){n=0===n?0:n||50;var i=t(e).toRgb(),a=t(o).toRgb(),r=n/100,l={r:(a.r-i.r)*r+i.r,g:(a.g-i.g)*r+i.g,b:(a.b-i.b)*r+i.b,a:(a.a-i.a)*r+i.a};return t(l)},t.readability=function(o,n){var i=t(o),a=t(n);return(e.max(i.getLuminance(),a.getLuminance())+.05)/(e.min(i.getLuminance(),a.getLuminance())+.05)},t.isReadable=function(e,o,n){var i,a,r=t.readability(e,o);switch(a=!1,i=D(n),i.level+i.size){case"AAsmall":case"AAAlarge":a=r>=4.5;break;case"AAlarge":a=r>=3;break;case"AAAsmall":a=r>=7}return a},t.mostReadable=function(e,o,n){var i,a,r,l,s=null,d=0;n=n||{},a=n.includeFallbackColors,r=n.level,l=n.size;for(var c=0;c<o.length;c++)i=t.readability(e,o[c]),i>d&&(d=i,s=t(o[c]));return t.isReadable(e,s,{level:r,size:l})||!a?s:(n.includeFallbackColors=!1,t.mostReadable(e,["#fff","#000"],n))};var V=t.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},W=t.hexNames=_(V),J=function(){var e="[-\\+]?\\d+%?",t="[-\\+]?\\d*\\.\\d+%?",o="(?:"+t+")|(?:"+e+")",n="[\\s|\\(]+("+o+")[,|\\s]+("+o+")[,|\\s]+("+o+")\\s*\\)?",i="[\\s|\\(]+("+o+")[,|\\s]+("+o+")[,|\\s]+("+o+")[,|\\s]+("+o+")\\s*\\)?";return{CSS_UNIT:new RegExp(o),rgb:new RegExp("rgb"+n),rgba:new RegExp("rgba"+i),hsl:new RegExp("hsl"+n),hsla:new RegExp("hsla"+i),hsv:new RegExp("hsv"+n),hsva:new RegExp("hsva"+i),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define(function(){return t}):window.tinycolor=t}(Math);

},{}],19:[function(require,module,exports){
(function (global){
!function(e){e(["jquery"],function(e){return function(){function t(e,t,o){return b({type:w.error,iconClass:m().iconClasses.error,message:e,optionsOverride:o,title:t})}function o(t,o){return t||(t=m()),h=e("#"+t.containerId),h.length?h:(o&&(h=u(t)),h)}function n(e,t,o){return b({type:w.info,iconClass:m().iconClasses.info,message:e,optionsOverride:o,title:t})}function i(e){v=e}function a(e,t,o){return b({type:w.success,iconClass:m().iconClasses.success,message:e,optionsOverride:o,title:t})}function r(e,t,o){return b({type:w.warning,iconClass:m().iconClasses.warning,message:e,optionsOverride:o,title:t})}function l(e,t){var n=m();h||o(n),c(e,n,t)||d(n)}function s(t){var n=m();return h||o(n),t&&0===e(":focus",t).length?(g(t),void 0):(h.children().length&&h.remove(),void 0)}function d(t){for(var o=h.children(),n=o.length-1;n>=0;n--)c(e(o[n]),t)}function c(t,o,n){var i=n&&n.force?n.force:!1;return t&&(i||0===e(":focus",t).length)?(t[o.hideMethod]({duration:o.hideDuration,easing:o.hideEasing,complete:function(){g(t)}}),!0):!1}function u(t){return h=e("<div/>").attr("id",t.containerId).addClass(t.positionClass),h.appendTo(e(t.target)),h}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function f(e){v&&v(e)}function b(t){function n(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function i(){s(),c(),u(),p(),b(),v(),d(),a()}function a(){var e="";switch(t.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}E.attr("aria-live",e)}function r(){S.closeOnHover&&E.hover(_,$),!S.onclick&&S.tapToDismiss&&E.click(x),S.closeButton&&A&&A.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),S.onCloseClick&&S.onCloseClick(e),x(!0)}),S.onclick&&E.click(function(e){S.onclick(e),x()})}function l(){E.hide(),E[S.showMethod]({duration:S.showDuration,easing:S.showEasing,complete:S.onShown}),S.timeOut>0&&(O=setTimeout(x,S.timeOut),P.maxHideTime=parseFloat(S.timeOut),P.hideEta=(new Date).getTime()+P.maxHideTime,S.progressBar&&(P.intervalId=setInterval(C,10)))}function s(){t.iconClass&&E.addClass(S.toastClass).addClass(T)}function d(){S.newestOnTop?h.prepend(E):h.append(E)}function c(){if(t.title){var e=t.title;S.escapeHtml&&(e=n(t.title)),H.append(e).addClass(S.titleClass),E.append(H)}}function u(){if(t.message){var e=t.message;S.escapeHtml&&(e=n(t.message)),M.append(e).addClass(S.messageClass),E.append(M)}}function p(){S.closeButton&&(A.addClass(S.closeClass).attr("role","button"),E.prepend(A))}function b(){S.progressBar&&(q.addClass(S.progressClass),E.prepend(q))}function v(){S.rtl&&E.addClass("rtl")}function w(e,t){if(e.preventDuplicates){if(t.message===y)return!0;y=t.message}return!1}function x(t){var o=t&&S.closeMethod!==!1?S.closeMethod:S.hideMethod,n=t&&S.closeDuration!==!1?S.closeDuration:S.hideDuration,i=t&&S.closeEasing!==!1?S.closeEasing:S.hideEasing;return!e(":focus",E).length||t?(clearTimeout(P.intervalId),E[o]({duration:n,easing:i,complete:function(){g(E),clearTimeout(O),S.onHidden&&"hidden"!==I.state&&S.onHidden(),I.state="hidden",I.endTime=new Date,f(I)}})):void 0}function $(){(S.timeOut>0||S.extendedTimeOut>0)&&(O=setTimeout(x,S.extendedTimeOut),P.maxHideTime=parseFloat(S.extendedTimeOut),P.hideEta=(new Date).getTime()+P.maxHideTime)}function _(){clearTimeout(O),P.hideEta=0,E.stop(!0,!0)[S.showMethod]({duration:S.showDuration,easing:S.showEasing})}function C(){var e=100*((P.hideEta-(new Date).getTime())/P.maxHideTime);q.width(e+"%")}var S=m(),T=t.iconClass||S.iconClass;if("undefined"!=typeof t.optionsOverride&&(S=e.extend(S,t.optionsOverride),T=t.optionsOverride.iconClass||T),!w(S,t)){k++,h=o(S,!0);var O=null,E=e("<div/>"),H=e("<div/>"),M=e("<div/>"),q=e("<div/>"),A=e(S.closeHtml),P={intervalId:null,hideEta:null,maxHideTime:null},I={toastId:k,state:"visible",startTime:new Date,options:S,map:t};return i(),l(),r(),f(I),S.debug&&console&&console.log(I),E}}function m(){return e.extend({},p(),x.options)}function g(e){h||(h=o()),e.is(":visible")||(e.remove(),e=null,0===h.children().length&&(h.remove(),y=void 0))}var h,v,y,k=0,w={error:"error",info:"info",success:"success",warning:"warning"},x={clear:l,remove:s,error:t,getContainer:o,info:n,options:{},subscribe:i,success:a,version:"2.1.3",warning:r};return x}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t((typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null)):window.toastr=t(window.jQuery)});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],20:[function(require,module,exports){
var templateSystem=require("../src/js/bindings/choose-template.js");document.addEventListener("DOMContentLoaded",function(){templateSystem.addTemplate("array","<!-- ko foreach: $data --><!-- ko block: $data --><!-- /ko --><!-- /ko -->"),templateSystem.addTemplate("block-show","<!-- ko block: $data, scrollIntoView: $root.selectedBlock() === $data --><!-- /ko -->"),templateSystem.addTemplate("block-wysiwyg",'<div class="editable block" data-drop-content="Drop here" data-bind="attr: { \'data-drop-content\': $root.t(\'Drop here\') }, click: function(obj, evt) { $root.selectBlock(obj); return true }, clickBubble: false, css: { selected: $root.selectedBlock() === $data }, scrollIntoView: $root.selectedBlock() === $data">  <div class="mo-blockselectionhelper"></div>  <div class="tools" data-bind="tooltips: {}">    <!-- ko if: typeof $index != \'undefined\' -->    <div title="Drag this handle to move the block" data-bind="attr: { title: $root.t(\'Drag this handle to move the block\') }" class="tool handle"><i class="fa fa-fw fa-sort"></i></div>    <!-- ko if: $index() > 0 -->    <div title="Move this block upside" data-bind="attr: { title: $root.t(\'Move this block upside\') }" class="tool moveup"><i class="fa fa-fw fa-sort-asc" data-bind=\'click: $root.moveBlock.bind($element, $index, $parent, true)\'></i></div>    <!-- /ko -->    <!-- ko if: $index() < $parent.blocks().length -1 -->    <div title="Move this block downside" data-bind="attr: { title: $root.t(\'Move this block downside\') }" class="tool movedown"><i class="fa fa-fw fa-sort-desc" data-bind=\'click: $root.moveBlock.bind($element, $index, $parent, false)\'></i></div>    <!-- /ko -->    <div title="Delete block" class="tool delete" data-bind="attr: { title: $root.t(\'Delete block\') }, click: $root.removeBlock.bind($element, $rawData, $parent)"><i class="fa fa-fw fa-trash-o"></i></div>    <div title="Duplicate block" class="tool clone" data-bind="attr: { title: $root.t(\'Duplicate block\') }, click: $root.duplicateBlock.bind($element, $index, $parent)"><i class="fa fa-fw fa-files-o"></i></div>    <!-- /ko -->    <!-- ko if: typeof $data._nextVariant != \'undefined\' --><div title="Switch block variant" class="tool variant" data-bind="attr: { title: $root.t(\'Switch block variant\') }, click: $data._nextVariant"><i class="fa fa-fw fa-magic"></i></div><!-- /ko -->  </div>  <!-- ko block: $data --><!-- /ko --></div>'),templateSystem.addTemplate("blocks-show","<!-- ko template: { name: 'block-show', foreach: blocks } --><!-- /ko -->"),templateSystem.addTemplate("blocks-wysiwyg","<div class=\"sortable-blocks-edit\" data-drop-content=\"Drop here\" data-empty-content=\"Drop here blocks from the Blocks tab\" data-bind=\"attr: { 'data-drop-content': $root.t('Drop here'), 'data-empty-content': $root.t('Drop here blocks from the &quot;Blocks&quot; tab') }, css: { 'empty': ko.utils.unwrapObservable(blocks).length == 0 }, extsortable: { connectClass: 'sortable-blocks-edit', template: 'block-wysiwyg', data: blocks, dragging: $root.dragging, beforeMove: $root.startMultiple, afterMove: $root.stopMultiple, options: { handle: '.handle', placeholder: $root.placeholderHelper } }\"></div>"),templateSystem.addTemplate("customstyle",'<div class="customStyleHelp"></div>'),templateSystem.addTemplate("empty",""),templateSystem.addTemplate("error",'[<div style="background-color: #fff0f0" data-bind="text: ko.toJS($data)"></div>]'),templateSystem.addTemplate("gallery-images",'<div data-bind="foreach: items.currentPageData">  <div class="draggable-item" data-bind="if: typeof thumbnailUrl != \'undefined\'">    <div class="draggable image" data-bind="click: $root.addImage, extdraggable: { data: $data, dropContainer: \'#main-wysiwyg-area\', dragging: $root.draggingImage, \'options\': { \'appendTo\': \'.container-main\' } }, style: { backgroundImage: \'url(\\\'\' + thumbnailUrl + \'\\\')\' }">      <img title="Drag this image and drop it on any template image placeholder" style="display: block;" data-bind="tooltips: {}, attr: { src: thumbnailUrl, \'title\': $root.t(\'Drag this image and drop it on any template image placeholder\') }"/>    </div>  </div></div><!-- ko if: items.pageCount() > 1 --><div class="galleryPager" data-bind="buttonset: {}">  <a href="javascript:void(0)" data-bind="click: items.moveFirst, button: { disabled: items.currentPage() == 1, icons: { primary: \'fa fa-fast-backward\' }, text: false }">First</a>  <a href="javascript:void(0)" data-bind="click: items.movePrevious, button: { disabled: items.currentPage() == 1, icons: { primary: \'fa fa-backward\' }, text: false }">Previous</a>  <span data-bind="button: { disabled: true, text: true, label: \' \'+items.currentPage()+\' of \'+items.pageCount()+\' \' }"> X of Y </span>  <a href="javascript:void(0)" data-bind="click: items.moveNext, button: { disabled: items.currentPage() == items.pageCount(), icons: { primary: \'fa fa-forward\' }, text: false }">Next</a>  <a href="javascript:void(0)" data-bind="click: items.moveLast, button: { disabled: items.currentPage() == items.pageCount(), icons: { primary: \'fa fa-fast-forward\' }, text: false }">Last</a></div><!-- /ko -->'),templateSystem.addTemplate("img-wysiwyg",'<table tabfocus="0" cellspacing="0" cellpadding="0" data-drop-content="Drop here" data-bind="style: _stylebind, click: function(obj, evt) { $root.selectItem(_item, _data); return true; }, clickBubble: false, fudroppable: { activeClass: \'ui-state-highlight\', hoverClass: \'ui-state-draghover\' }, droppable: { options: { accept: \'.image\', activeClass: \'ui-state-highlight\', hoverClass: \'ui-state-draghover\' }, data: _src, dragged: $root.fileToImage }, css: { selecteditem: $root.isSelectedItem(_item) }, scrollIntoView: $root.isSelectedItem(_item), attr: { \'data-drop-content\': $root.t(\'Drop here\'), width: _width, height: _height, align: _align }"  class="img-wysiwyg selectable-img" style="display: table;"><tr><td class="uploadzone">  <div class="mo-imgselectionhelper"></div>  <div class="mo-uploadzone"></div>  <div class="img-size" data-bind="text: _size">size</div>  <div class="midtools" data-bind="tooltips: {}">    <!-- ko if: _src() != \'\' -->    <div title="Remove image" class="tool delete" data-bind="attr: { title: $root.t(\'Remove image\') }, click: _src.bind(_src, \'\'), clickBubble: false"><i class="fa fa-fw fa-trash-o"></i></div>    <!-- ko if: typeof $root.editImage !== \'undefined\' -->    <div title="Open the image editing tool" class="tool edit" data-bind="attr: { title: $root.t(\'Open the image editing tool\') }, click: $root.editImage.bind($element, _src), clickBubble: false"><i class="fa fa-fw fa-pencil"></i></div>    <!-- /ko -->    <!-- /ko -->    <!-- ko if: _src() == \'\' -->    <div title="Upload a new image" data-bind="attr: { title: $root.t(\'Upload a new image\') }" class="tool upload" style="position: relative; overflow: hidden;"><i class="fa fa-fw fa-upload"></i>      <input class="fileupload nofile" type="file" name="files[]" data-bind="fileupload: { data: _src, onerror: $root.notifier.error, onfile: $root.loadImage, canvasPreview: true }" style="z-index: 20; position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-width: 100%; min-height: 100%; font-size: 999px; text-align: right; filter: alpha(opacity=0); opacity: 0; outline: none; cursor: inherit; display: block">    </div>    <!-- /ko -->  </div>  <!-- ko template: _template --><!-- /ko -->  <!-- ko if: _src() == \'\' -->    <!--    <img style="display: block;" class="imgplaceholder" width="200" src="" alt="Insert an image here" data-bind="wysiwygSrc: { src: _src.preloaded, placeholder: _placeholdersrc, width: _width, height: _height, method: _method }" />    -->    <span class="fileuploadtext" style="text-align: center; display: -ms-flexbox; display: flex; align-items: center; flex-align: center; justify-content: center; padding: 1em; position: absolute; top: 0; left: 0; right: 0; bottom: 0;"><span class="textMiddle" style=" text-shadow: 1px 1px 0 #FFFFFF, 0 0 10px #FFFFFF; font-weight: bold;" data-bind="text: $root.t(\'Drop an image here\')">Drop an image here</span></span>  <!-- /ko -->  <!-- ko if: _src() != \'\' -->  <!--    <img style="display: block;" width="200" src="" data-bind="preloader: _src, wysiwygSrc: { src: _src.preloaded, placeholder: _placeholdersrc, width: _width, height: _height, method: _method }" />    -->  <!-- /ko -->  <!-- pulsante per la cancellazione -->  <div title="Drop an image here or click the upload button" data-bind="attr: { title: $root.t(\'Drop an image here or click the upload button\') }, tooltips: {}" class="workzone" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden;">    <!-- ko if: _src.preloaded && _src() != _src.preloaded() -->PRELOADING....<!-- /ko -->    <!-- ko if: _src() != \'\' -->      <input class="fileupload withfile" type="file" name="files[]" data-bind="fileupload: { data: _src, onerror: $root.notifier.error, onfile: $root.galleryRecent.unshift.bind($root.galleryRecent), canvasPreview: true }" style="z-index: -20; position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-width: 100%; min-height: 100%; font-zie: 999px; text-align: right; filter: alpha(opacity=0); opacity: 0; outline: none; cursor: inherit; display: block">    <!-- /ko -->    <div class="progress" style="opacity: .5; width: 80%; margin-left: 10%; position: absolute; bottom: 30%; height: 20px; border: 2px solid black;">      <div class="progress-bar progress-bar-success" style="height: 20px; background-color: black; "></div>    </div>  </div></table>'),templateSystem.addTemplate("main",'<div class="tinyMCE-card">  <div class="tinyMCE-card__content">    <div class="tinyMCE-header">      <span class="undo-redo" data-bind="buttonset: { }">        <a title="Undo last operation" href="javascript:void(0)" data-bind="attr: { title: $root.t(\'Undo last operation\') }, click: $root.undo.execute, clickBubble: false, button: { disabled: !$root.undo.enabled(), icons: { primary: \'mce-ico mce-i-undo\' }}"></a>        <a title="Redo last operation" href="javascript:void(0)" data-bind="attr: { title: $root.t(\'Redo last operation\') }, click: $root.redo.execute, clickBubble: false, button: { disabled: !$root.redo.enabled(), icons: { primary: \'mce-ico mce-i-redo\' }}"></a>      </span>    </div>    <div id="main-edit-area" data-bind="click: function(obj, evt) { $root.selectBlock(null); return true; }, clickBubble: false">      <!-- ko withProperties: { templateMode: \'wysiwyg\', templateModeFallback: \'show\' } -->      <div id="main-wysiwyg-area" data-bind="wysiwygScrollfix: true, scrollable: true, fudroppable: { active: draggingImage }, css: { isdragging: dragging, isdraggingimg: draggingImage }, block: content"></div>      <!-- /ko -->    </div>  </div></div><div id="page" style="display: none;" data-bind="visible: true, css: { withToolbox: $root.showToolbox, withPreviewFrame: showPreviewFrame }">  <div id="toolbar" class="mo" data-bind="tooltips: {}">    <!-- ko if: typeof $root.undo != \'undefined\' -->        <!-- ko if: $root.debug -->    <a href="javascript:void(0)" data-bind="click: $root.undoReset, clickBubble: false, button: { disabled: !$root.undo.enabled() && !$root.redo.enabled(), label: \'reset\', text: true }">RESET</a>    <!-- /ko -->    <!-- /ko -->    <span>    <input id="showGallery" type="checkbox" data-bind="checked: $root.showGallery, button: { refreshOn: $root.showGallery,     icons: { primary: \'fa fa-fw fa-picture-o\', secondary: null }, text: true, label: $root.t(\'Gallery\') }"><label title="Show image gallery" for="showGallery" data-bind="attr: { title: $root.t(\'Show image gallery\') }">show gallery</label></input>    </span>    <input id="previewFrameToggle" type="checkbox" data-bind="checked: $root.showPreviewFrame, button: { refreshOn: $root.showPreviewFrame, icons: { primary: \'fa fa-fw fa-tablet\', secondary: null }, text: false, label: $root.t(\'Preview\') }"><label title="Show live preview" for="previewFrameToggle" data-bind="attr: { title: $root.t(\'Show live preview\') }">PREVIEW</label></input>    <!-- ko if: $root.debug -->    <a href="javascript:void(0)" data-bind="click: $root.export, clickBubble: false, button: { label: \'export\', text: true }">EXPORT</a>    <input type="checkbox" data-bind="checked: $root.debug" /> debug    <a href="javascript:void(0)" data-bind="click: $root.loadDefaultBlocks, clickBubble: false, button: { icons: { primary: \'fa fa-fw fa-upload\' }, label: \'Default\', text: true }">LOAD BLOCKS</a>    [<a id="subscriptionsCount" href="javascript:viewModel.loopSubscriptionsCount()">subs</a>]    <!-- /ko -->    <span data-bind="visible: false">    <input type="checkbox" data-bind="checked: $root.showToolbox" /> toolbox    </span>    <div class="rightButtons">    <!-- ko if: typeof $root.save !== \'undefined\' -->    <a title="Save template" href="javascript:void(0)" data-bind="attr: { title: $root.t(\'Save template\') }, click: $root.save.execute, clickBubble: false, button: { disabled: !$root.save.enabled(), icons: { primary: \'fa fa-fw fa-cloud-upload\' }, label: $root.t($root.save.name), text: true }">SALVA</a>    <!-- /ko -->    <!-- ko if: typeof $root.test !== \'undefined\' -->    <a title="Show preview and send test" href="javascript:void(0)" data-bind="attr: { title: $root.t(\'Show preview and send test\') }, click: $root.test.execute, clickBubble: false, button: { disabled: !$root.test.enabled(), icons: { primary: \'fa fa-fw fa-paper-plane\' }, label: $root.t($root.test.name), text: true }">TEST</a>    <!-- /ko -->    <!-- ko if: typeof $root.download !== \'undefined\' -->    <form id="downloadForm" action="#" method="POST">    <input type="hidden" name="action" value="download" />    <input type="hidden" name="filename" value="email.html" />    <input type="hidden" name="html" id="downloadHtmlTextarea" />    <a title="Download template" href="javascript:void(0)" data-bind="attr: { title: $root.t(\'Download template\') }, click: $root.download.execute, clickBubble: false, button: { disabled: !$root.download.enabled(), icons: { primary: \'fa fa-fw fa-download\' }, label: $root.t($root.download.name), text: true }">DOWNLOAD</a>    </form>    <!-- /ko -->    </div>  </div>  <!-- ko if: $root.showToolbox -->  <div id="main-toolbox" class="mo" data-bind="scrollable: true, withProperties: { templateMode: \'edit\' }">    <div data-bind="template: { name: \'toolbox\' }"></div>  </div>  <!-- /ko -->    <div id="main-preview" class="mo" data-bind="scrollable: true, if: $root.showPreviewFrame">    <div id="preview-toolbar">      <div data-bind="visible: $root.showPreviewFrame, buttonset: { }" style="display: inline-block">        <input id="previewLarge" type="radio" name="previewMode" value="large" data-bind="checked: $root.previewMode, button: { text: false, label: \'large\', icons: { primary: \'fa fa-fw fa-desktop\' } }" />        <label for="previewLarge" title="Large screen" data-bind="attr: { title: $root.t(\'Large screen\') }">Large screen</label>        <input id="previewDesktop" type="radio" name="previewMode" value="desktop" data-bind="checked: $root.previewMode, button: { text: false, label: \'desktop\', icons: { primary: \'fa fa-fw fa-tablet\' } }" />        <label for="previewDesktop" title="Tablet" data-bind="attr: { title: $root.t(\'Tablet\') }">Tablet</label>        <input id="previewMobile" type="radio" name="previewMode" value="mobile" data-bind="checked: $root.previewMode, button: { text: false, label: \'mobile\', icons: { primary: \'fa fa-fw fa-mobile\' } }" />        <label for="previewMobile" title="Smartphone" data-bind="attr: { title: $root.t(\'Smartphone\') }">Smartphone</label>      </div>    </div>    <div id="frame-container" data-bind="css: { desktop: $root.previewMode() == \'desktop\', mobile: $root.previewMode() == \'mobile\', large: $root.previewMode() == \'large\' }">      <iframe data-bind="bindIframe: $data"></iframe>    </div>  </div>  <div class="mo" id="mo-body"></div>  <div id="incompatible-template" title="Saved model is obsolete" style="display: none" data-bind="attr: { title: $root.t(\'Saved model is obsolete\') }, html: $root.t(\'<p>The saved model has been created with a previous, non completely compatible version, of the template</p><p>Some content or style in the model <b>COULD BE LOST</b> if you will <b>save</b></p><p>Contact us for more informations!</p>\')">    Incompatible template  </div>  <div id="fake-image-editor" title="Fake image editor" style="display: none" data-bind="attr: { title: $root.t(\'Fake image editor\') }, html: $root.t(\'<p>Fake image editor</p>\')">    <p>Fake image editor</p>  </div></div><!-- ko if: $root.logoPath --><div id="loading" class="loading" style="display: block; width: 300px; text-align: center; height: 32px; position: absolute; top:0; bottom: 0; left: 0; right: 0;  margin: auto;" data-bind="attr: { style: \'position: absolute; top: 5px; left: 6px; z-index: 150;\'}, css: { loading: false }">  <a href="/" data-bind="attr: { href: $root.logoUrl, alt: $root.logoAlt }"><img data-bind="attr: { src: $root.logoPath }" width="32" height="32" alt="mosaico" border="0" /></a>  <div style="opacity: 0" data-bind="visible: false">Oppps... !!</div></div><!-- /ko -->'),templateSystem.addTemplate("tinymce-area",'<div class="tinyMCE-card">  <div class="tinyMCE-card__content">    <div class="tinyMCE-header">      <span class="undo-redo" data-bind="buttonset: { }">        <a title="Undo last operation" href="javascript:void(0)" data-bind="attr: { title: $root.t(\'Undo last operation\') }, click: $root.undo.execute, clickBubble: false, button: { disabled: !$root.undo.enabled(), icons: { primary: \'mce-ico mce-i-undo\' }}"></a>        <a title="Redo last operation" href="javascript:void(0)" data-bind="attr: { title: $root.t(\'Redo last operation\') }, click: $root.redo.execute, clickBubble: false, button: { disabled: !$root.redo.enabled(), icons: { primary: \'mce-ico mce-i-redo\' }}"></a>      </span>    </div>    <div id="main-edit-area" data-bind="click: function(obj, evt) { $root.selectBlock(null); return true; }, clickBubble: false">      <!-- ko withProperties: { templateMode: \'wysiwyg\', templateModeFallback: \'show\' } -->      <div id="main-wysiwyg-area" data-bind="wysiwygScrollfix: true, scrollable: true, fudroppable: { active: draggingImage }, css: { isdragging: dragging, isdraggingimg: draggingImage }, block: content"></div>      <!-- /ko -->    </div>    <div id="fake-image-editor" title="Fake image editor" style="display: none" data-bind="attr: { title: $root.t(\'Fake image editor\') }, html: $root.t(\'<p>Fake image editor</p>\')">    <p>Fake image editor</p>  </div>  </div></div>'),templateSystem.addTemplate("tinymce-sidebar",'  <!-- ko if: $root.showToolbox -->  <div id="main-toolbox" class="mo" data-bind="scrollable: true, withProperties: { templateMode: \'edit\' }">    <div data-bind="template: { name: \'toolbox\' }"></div>  </div>  <!-- /ko -->'),templateSystem.addTemplate("toolbox",'<div id="tooltabs" class="tabs_horizontal button_color" data-bind="tabs: { active: $root.selectedTool }">  <ul>    <li data-bind="tooltips: {}"><a title="Blocks ready to be added to the template" data-local="true" href="#toolblocks" data-bind="attr: { title: $root.t(\'Blocks ready to be added to the template\') }"><span data-bind="html: $root.t(\'Blocks\')">Blocks</span></a></li>    <li data-bind="tooltips: {}"><a title="Edit content options" href="#toolcontents" data-local="true" data-bind="attr: { title: $root.t(\'Edit content options\') }"><span data-bind="html: $root.t(\'Content\')">Content</span></a></li>    <li data-bind="click: $root.showGallery"><a title="Edit style options" href="#toolimages" data-local="true" data-bind="attr: { title: $root.t(\'View or upload images\') }"><span data-bind="html: $root.t(\'Images\')">Images</span></a></li>  </ul>  <div id="toolblocks" data-bind="scrollable: true">    <div class="block-list" data-bind="foreach: blockDefs" style="text-align: center">      <div class="draggable-item" data-bind="withProperties: { templateMode: \'show\' }">        <div class="block" data-bind="extdraggable: { connectClass: \'sortable-blocks-edit\', data: $data, dropContainer: \'#main-wysiwyg-area\', dragging: $root.dragging, \'options\': { handle: \'.handle\', distance: 10, \'appendTo\': \'#page\' } }, click: $root.addBlock" style="position: relative;">          <div title="Click or drag to add this block to the template" class="handle" data-bind="attr: { title: $root.t(\'Click or drag to add this block to the template\') }, tooltips: {}"></div>          <img data-bind="attr: { alt: $root.t(\'Block __name__\', { name: ko.utils.unwrapObservable(type) }), src: $root.templatePath(\'edres/\'+ko.utils.unwrapObservable(type)+\'.png\') }" alt="Block __name__" />        </div>        <a href="javascript:void(0)" class="addblockbutton" data-bind="click: $root.addBlock, button: { label: $root.t(\'Add\') }">Add</a>      </div>    </div>  </div>  <div id="toolcontents" data-bind="scrollable: true">    <div data-bind="scrollable: true, withProperties: { templateMode: \'styler\' }">    <!-- ko if: typeof $root.content().theme === \'undefined\' || typeof $root.content().theme().scheme === \'undefined\' || $root.content().theme().scheme() === \'custom\' -->      <!-- ko if: $root.selectedBlock() !== null -->      <div data-bind="block: $root.selectedBlock, css: { workGlobal: $root.selectedBlock().customStyle, workLocal: typeof $root.selectedBlock().customStyle === \'undefined\' || !$root.selectedBlock().customStyle() }"></div>      <!-- /ko -->      <!-- ko if: $root.selectedBlock() == null -->      <div class="noSelectedBlock" data-bind="text: $root.t(\'By clicking on message parts you will select a block and style options, if available, will show here\')">By clicking on message parts you will select a block and style options, if available, will show here</div>      <!-- /ko -->      <div class="workGlobalContent">      <!-- ko block: content --><!-- /ko -->    </div>    <!-- /ko -->    </div>    <!-- ko if: $root.selectedBlock() !== null -->    <div data-bind="block: $root.selectedBlock"></div>    <!-- /ko -->    <!-- ko if: $root.selectedBlock() == null -->    <div class="noSelectedBlock" data-bind="text: $root.t(\'By clicking on message parts you will select a block and content options, if any, will show here\')">By clicking on message parts you will select a block and content options, if any, will show here</div>    <!-- /ko -->    <!-- ko block: content --><!-- /ko -->  </div>    <div id="toolimages" class="slidebar" data-bind="scrollable: true, css: { hidden: $root.showGallery() === false }, tabs: { active: $root.selectedImageTab }">  <div data-drop-content="Drop here" class="img-dropzone pane uploadzone" data-bind="attr: { \'data-drop-content\': $root.t(\'Drop here\') }, fudroppable: { activeClass: \'ui-state-highlight\', hoverClass: \'ui-state-draghover\' }">  <div class="mo-uploadzone" style="position: relative; padding: 2em; border: 2px dotted #808080">     <input class="fileupload" type="file" multiple name="files[]" data-bind="fileupload: { onerror: $root.notifier.error, onfile: $root.loadImage }" style="z-index: 10; position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-width: 100%; min-height: 100%; font-zie: 999px; text-align: right; filter: alpha(opacity=0); opacity: 0; outline: none; cursor: inherit; display: block">     <span data-bind="text: $root.t(\'Click or drag files here\')">Click or drag files here</span>     <div class="workzone" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden;">       <div class="progress" style="opacity: .5; width: 80%; margin-left: 10%; position: absolute; bottom: 30%; height: 20px; border: 2px solid black;">         <div class="progress-bar progress-bar-success" style="height: 20px; background-color: black; "></div>       </div>     </div>  </div>  </div>  <div id="toolimagestab" class="tabs_horizontal" data-bind="tabs: { active: $root.selectedImageTab }">    <ul>      <li data-bind="tooltips: {}"><a title="Session images" data-local="true" href="#toolimagesrecent" data-bind="attr: { title: $root.t(\'Session images\') }, text: $root.t(\'Recents\')">Recents</a></li>      <li data-bind="tooltips: {}"><a title="Remote gallery" data-local="true" href="#toolimagesgallery" data-bind="attr: { title: $root.t(\'Remote gallery\') }, text: $root.t(\'Gallery\')">Gallery</a></li>    </ul>    <div id="toolimagesrecent">      <!-- ko if: galleryRecent().length == 0 --><div class="galleryEmpty" data-bind="text: $root.t(\'No images uploaded, yet\')">No images uploaded, yet</div><!-- /ko -->      <!-- ko template: {name: \'gallery-images\', data: { items: galleryRecent } } --># recent gallery #<!-- /ko -->    </div>    <div id="toolimagesgallery" style="text-align: center">    <!-- ko if: $root.galleryLoaded() === false --><a class="loadbutton" title="Show images from the gallery" href="javascript:void(0)" data-bind="attr: { title: $root.t(\'Show images from the gallery\') }, click: $root.loadGallery, button: { disabled: $root.galleryLoaded, icons: { primary: \'fa fa-fw fa-picture-o\' }, label: $root.galleryLoaded() == \'loading\' ? $root.t(\'Loading...\') : $root.t(\'Load gallery\'), text: true }"># load gally #</a><!-- /ko -->    <!-- ko if: $root.galleryLoaded() === \'loading\' --><div class="galleryEmpty" data-bind="text: $root.t(\'Loading gallery...\')">Loading gallery...</div><!-- /ko -->    <!-- ko if: $root.galleryLoaded() === 0 --><div class="galleryEmpty" data-bind="text: $root.t(\'The gallery is empty\')">The gallery is empty</div><!-- /ko -->    <!-- ko template: {name: \'gallery-images\', data: { items: galleryRemote } } --># remote gallery #<!-- /ko -->    </div>  </div>  </div></div><div id="tooltheme" class="ui-widget slidebar" data-bind="css: { hidden: $root.showTheme() === false }">    <!-- ko withProperties: { templateMode: \'styler\' } -->    <!-- ko if: $root.showTheme -->      <!-- ko block: $root.content().theme --><!-- /ko -->    <!-- /ko -->  <!-- /ko --></div>')});

},{"../src/js/bindings/choose-template.js":30}],21:[function(require,module,exports){
(function (global){
'use strict';

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = require('util/');
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"util/":26}],22:[function(require,module,exports){
exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

},{}],23:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],24:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],25:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],26:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./support/isBuffer":25,"_process":23,"inherits":24}],27:[function(require,module,exports){
(function (global){
"use strict";function _canonicalize(e){var i=global.document.createElement("div");return i.innerHTML="<a></a>",i.firstChild.href=e,i.innerHTML=i.innerHTML,i.firstChild.href}function _appendUrlParameters(e,i){var n=-1==e.indexOf("?")?"?":"&",t=e;for(var a in i)i.hasOwnProperty(a)&&(t+=n+a+"="+encodeURIComponent(i[a]),n="&");return t}require("./custom.js");var templateLoader=require("./template-loader.js"),console=require("./../../bower_components/console-browserify/index.js"),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);require("./ko-bindings.js"),require("./exp-manager.js");var performanceAwareCaller=require("./timed-call.js").timedCall,addUndoStackExtensionMaker=require("./undomanager/undomain.js"),colorPlugin=require("./ext/color.js"),utilPlugin=require("./ext/util.js"),inlinerPlugin=require("./ext/inliner.js"),localStorageLoader=require("./ext/localstorage.js");if("undefined"==typeof ko)throw"Cannot find knockout.js library!";if("undefined"==typeof $)throw"Cannot find jquery library!";var applyBindingOptions=function(e,i){i.bindingHandlers.wysiwygSrc.convertedUrl=function(i,n,t,a){var o,r=e.imgProcessorBackend?e.imgProcessorBackend:"./upload",l=r.match(/^(https?:\/\/[^\/]*\/).*$/),d=i.match(/^(https?:\/\/[^\/]*\/).*$/);if(null===l||null!==d&&l[1]==d[1])return o=-1==r.indexOf("?")?"?":"&",_appendUrlParameters(r,{src:i,method:n,params:t+","+a});console.log("Cannot apply backend image resizing to non-local resources ",i,n,t,a,l,d);var s={method:n,width:t};return null!==a&&(s.height=a),_appendUrlParameters(i,s)},i.bindingHandlers.wysiwygSrc.placeholderUrl=function(i,n){var t=e.imgProcessorBackend?e.imgProcessorBackend:"./upload";return _appendUrlParameters(t,{method:"placeholder",params:i+","+n})},e&&e.tinymceConfig&&(i.bindingHandlers.wysiwyg.standardOptions=e.tinymceConfig),e&&e.tinymceConfigFull&&(i.bindingHandlers.wysiwyg.fullOptions=e.tinymceConfigFull)},start=function(e,i,n,t,a){templateLoader.fixPageEvents();var o=function(i){var n={messages:{unknownError:i.t("Unknown error"),uploadedBytes:i.t("Uploaded bytes exceed file size"),maxNumberOfFiles:i.t("Maximum number of files exceeded"),acceptFileTypes:i.t("File type not allowed"),maxFileSize:i.t("File is too large"),minFileSize:i.t("File is too small"),post_max_size:i.t("The uploaded file exceeds the post_max_size directive in php.ini"),max_file_size:i.t("File is too big"),min_file_size:i.t("File is too small"),accept_file_types:i.t("Filetype not allowed"),max_number_of_files:i.t("Maximum number of files exceeded"),max_width:i.t("Image exceeds maximum width"),min_width:i.t("Image requires a minimum width"),max_height:i.t("Image exceeds maximum height"),min_height:i.t("Image requires a minimum height"),abort:i.t("File upload aborted"),image_resize:i.t("Failed to resize image"),generic:i.t("Unexpected upload error")}};e&&e.fileuploadConfig&&(n=$.extend(!0,n,e.fileuploadConfig)),ko.bindingHandlers.fileupload.extendOptions=n},r=function(i){e&&e.strings&&(i.t=function(n,t){var a=e.strings[n];return"undefined"==typeof a&&(console.warn("Missing translation string for",n,": using default string"),a=n),i.tt(a,t)})},l=[r,addUndoStackExtensionMaker(performanceAwareCaller),colorPlugin,utilPlugin,inlinerPlugin];if("undefined"!=typeof a)for(var d=0;d<a.length;d++)l.push(a[d]);l.push(o);var s=e.fileuploadConfig?e.fileuploadConfig.url:"/upload/";applyBindingOptions(e,ko),$("<!-- ko template: 'main' --><!-- /ko -->").appendTo(global.document.getElementById("editor-area")),$("<!-- ko template: 'tinymce-area' --><!-- /ko -->").appendTo(global.document.getElementById("tinymce-area")),$("<!-- ko template: 'tinymce-sidebar' --><!-- /ko -->").appendTo(global.document.getElementById("r-sidebar")),"undefined"==typeof i&&"undefined"!=typeof n&&(i=n.template),templateLoader.load(performanceAwareCaller,i,n,t,l,s)},initFromLocalStorage=function(e,i,n){try{var t=localStorageLoader(i,e.emailProcessorBackend),a="undefined"!=typeof n?n:[];a.push(t.extension);var o=_canonicalize(t.metadata.template);start(e,o,t.metadata,t.model,a)}catch(r){console.error("TODO not found ",i,r)}},init=function(e,i){var n=global.location.hash?global.location.href.split("#")[1]:void 0;if(e&&(e.template||e.data))if(e.data){var t=JSON.parse(e.data);console.log("e"+e),start(e,void 0,t.metadata,t.content,i)}else console.log("c"+e),start(e,e.template,void 0,void 0,i);else if(n&&7==n.length)console.log("a"+n),initFromLocalStorage(e,n,i);else{if(!n)return!1;console.log("b"+n),start(e,_canonicalize(n),void 0,void 0,i)}return!0};module.exports={isCompatible:templateLoader.isCompatible,init:init,start:start};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../bower_components/console-browserify/index.js":1,"./custom.js":59,"./exp-manager.js":60,"./ext/color.js":61,"./ext/inliner.js":62,"./ext/localstorage.js":63,"./ext/util.js":64,"./ko-bindings.js":65,"./template-loader.js":66,"./timed-call.js":67,"./undomanager/undomain.js":68}],28:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js"),addScriptTemplate=function(e,t,o){var a=e.createElement("script");return a.setAttribute("type","text/html"),a.setAttribute("id",t),a.text=o,e.body.appendChild(a),a};ko.bindingHandlers.bindIframe={tpl:'<!DOCTYPE html>\r\n<html>\r\n<head>\r\n</head>\r\n<body><div data-bind="block: content"></div></body>\r\n</html>\r\n',init:function(e,t){function o(o){try{var a=e.contentDocument;a.open(),a.write(ko.bindingHandlers.bindIframe.tpl),a.close();try{var i=a.body;if(i){for(var n=e.contentWindow.parent.document.getElementsByTagName("script"),l=0;l<n.length;l++)"text/html"==n[l].getAttribute("type")&&n[l].getAttribute("id")&&addScriptTemplate(a,n[l].getAttribute("id"),n[l].innerHTML);var r=a.getElementsByTagName("HTML");ko.utils.domNodeDisposal.addDisposeCallback(e,function(){ko.cleanNode(r[0]||i)}),ko.applyBindings(t(),r[0]||i)}else console.log("no iframedoc",o)}catch(d){throw console.log("error reading iframe.body",d,o),d}}catch(d){throw console.log("error reading iframe contentDocument",d,o),d}}o("first call")}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1}],29:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js");ko.bindingHandlers.withProperties={init:function(e,t,o,a,i){var n=i.createChildContext(i.$rawData,null,function(e){ko.utils.extend(e,t())});return ko.applyBindingsToDescendants(n,e),{controlsDescendantBindings:!0}}},ko.virtualElements.allowedBindings.withProperties=!0,ko.bindingHandlers.log={init:function(e,t){console.log("log",t())}},ko.bindingHandlers.block={templateExists:function(e){var t=global.document.getElementById(e);return t?!0:!1},_chooseTemplate:function(e,t,o,a){var i=t+"-"+o;if(ko.bindingHandlers.block.templateExists(i))return i;if("undefined"!=typeof a&&null!==a)return ko.bindingHandlers.block._chooseTemplate(e,t,a);var n=e?"array":"object-"+o;if(ko.bindingHandlers.block.templateExists(n))return n;throw"cannot find template for "+i+"/"+n},_displayMode:function(e,t){var o="undefined"!=typeof e.type?ko.utils.unwrapObservable(e.type):"notablock-"+typeof e,a="undefined"!=typeof e.splice,i=t.templateMode?t.templateMode:"show";return ko.bindingHandlers.block._chooseTemplate(a,o,i,t.templateModeFallback)},_makeTemplateValueAccessor:function(e,t){return function(){var o,a,i=e(),n=ko.utils.peekObservable(i);if(!n||"object"!=typeof n.data&&"function"!=typeof n.data)o=i;else if(o=n.data,"undefined"!=typeof n.template){var l=ko.utils.unwrapObservable(n.template),r=t.templateMode?t.templateMode:"show";a=ko.bindingHandlers.block._chooseTemplate(!1,l,r,t.templateModeFallback)}var d=ko.utils.unwrapObservable(o);if(ko.isObservable(d)&&console.log("doubleObservable",d),"undefined"==typeof a)if(void 0===o)a="empty";else try{a=ko.bindingHandlers.block._displayMode(d,t)}catch(s){throw console.log(s,d,t.$data,t.templateMode),s}return{name:a,data:o,templateEngine:ko.nativeTemplateEngine.instance}}},init:function(e,t,o,a,i){"undefined"==typeof t()&&console.log("found a null block: check ending commas in arrays defs in IE");var n=ko.bindingHandlers.block._makeTemplateValueAccessor(t,i);return ko.bindingHandlers.template.init(e,n)},update:function(e,t,o,a,i){var n=ko.bindingHandlers.block._makeTemplateValueAccessor(t,i);return ko.bindingHandlers.template.update(e,n,o,a,i)}},ko.expressionRewriting.bindingRewriteValidators.block=!1,ko.virtualElements.allowedBindings.block=!0;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1}],30:[function(require,module,exports){
"use strict";module.exports=require("./string-template.js");

},{"./string-template.js":44}],31:[function(require,module,exports){
(function (global){
"use strict";require("./../../../bower_components/evol-colorpicker/js/evol.colorpicker.min.js");var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),kojqui=(typeof window !== "undefined" ? window['kojqui'] : typeof global !== "undefined" ? global['kojqui'] : null),ColorPicker=function(){kojqui.BindingHandler.call(this,"colorpicker")};ColorPicker.prototype=kojqui.utils.createObject(kojqui.BindingHandler.prototype),ColorPicker.prototype.constructor=ColorPicker,ColorPicker.prototype.init=function(e,t,o){var a=t(),i=a.color,n=ko.computed({read:i,write:i,disposeWhenNodeIsRemoved:e}),l=function(){return n};ko.bindingHandlers.value.init(e,l,o);var r=function(e,t){"undefined"!=typeof t&&n(t)};$(e).on("change.color",r),ko.computed({read:function(){var t={color:ko.utils.unwrapObservable(n),showOn:"button"};for(var o in a)"color"!==o&&a.hasOwnProperty(o)&&(t[o]=ko.utils.unwrapObservable(a[o]));$(e).colorpicker(t)},disposeWhenNodeIsRemoved:e}),ko.utils.domNodeDisposal.addDisposeCallback(e,function(){$(e).off("change.color",r),$(e).colorpicker("destroy")})},kojqui.utils.register(ColorPicker);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/evol-colorpicker/js/evol.colorpicker.min.js":2}],32:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);ko.bindingHandlers.cssText={update:function(e,t){var o=ko.utils.unwrapObservable(t());try{e.innerText=o}catch(a){e.styleSheet||(e.innerHTML="a{}"),e.styleSheet.cssText=o}}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],33:[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);!function(e){e(ko,$)}(function(e,t){var o="ko_sortItem",a="ko_dragItem",i=(e.utils.unwrapObservable,e.utils.domData.get);e.utils.domData.set,e.bindingHandlers.droppable={init:function(n,l){var r,d=t(n),s=e.utils.unwrapObservable(l())||{},c={};t.extend(!0,c,e.bindingHandlers.droppable),s.data?(s.options&&c.options&&(e.utils.extend(c.options,s.options),delete s.options),e.utils.extend(c,s)):c.data=s,r=c.options.drop,d.droppable(e.utils.extend(c.options,{drop:function(e,t){var n=t.draggable[0],l=i(n,o)||i(n,a);l&&(l.clone&&(l=l.clone()),c.dragged&&(l=c.dragged.call(this,l,e,t)||l),c.data&&c.data(l)),r&&r.apply(this,arguments)}})),void 0!==c.isEnabled&&e.computed({read:function(){d.droppable(e.utils.unwrapObservable(c.isEnabled)?"enable":"disable")},disposeWhenNodeIsRemoved:n})},update:function(){},targetIndex:null,afterMove:null,beforeMove:null,options:{}}});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],34:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),console=require("./../../../bower_components/console-browserify/index.js");ko.bindingHandlers.focusable={focus:function(){},blur:function(){},init:function(e){ko.utils.domNodeDisposal.addDisposeCallback(e,function(){$(e).off("focusin",ko.bindingHandlers.focusable.focus),$(e).off("focusout",ko.bindingHandlers.focusable.blur)}),$(e).on("focusin",ko.bindingHandlers.focusable.focus),$(e).on("focusout",ko.bindingHandlers.focusable.blur)}},ko.bindingHandlers.scrollable={scroll:function(){},init:function(e){ko.utils.domNodeDisposal.addDisposeCallback(e,function(){$(e).off("scroll",ko.bindingHandlers.scrollable.scroll)}),$(e).on("scroll",ko.bindingHandlers.scrollable.scroll)}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1}],35:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);ko.extenders.paging=function(e,t){var o=ko.observable(t||10),i=ko.observable(1);return e.pageSize=ko.computed({read:o,write:function(e){e>0?o(e):o(10)}}),e.currentPage=ko.computed({read:i,write:function(t){t>e.pageCount()?i(e.pageCount()):0>=t?i(1):i(t)}}),e.pageCount=ko.computed(function(){return Math.ceil(e().length/e.pageSize())||1}),e.currentPageData=ko.computed(function(){var t=o(),n=i(),a=t*(n-1),r=t*n;return e().slice(a,r)}),e.moveFirst=function(){e.currentPage(1)},e.movePrevious=function(){e.currentPage(e.currentPage()-1)},e.moveNext=function(){e.currentPage(e.currentPage()+1)},e.moveLast=function(){e.currentPage(e.pageCount())},e};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],36:[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),sortable=(typeof window !== "undefined" ? window['jQuery']['ui']['sortable'] : typeof global !== "undefined" ? global['jQuery']['ui']['sortable'] : null),draggable=(typeof window !== "undefined" ? window['jQuery']['ui']['draggable'] : typeof global !== "undefined" ? global['jQuery']['ui']['draggable'] : null),console=require("./../../../bower_components/console-browserify/index.js");if(require("./../../../bower_components/knockout-sortable/build/knockout-sortable.min.js"),"undefined"==typeof sortable)throw"Cannot find jquery-ui sortable widget dependency!";if("undefined"==typeof draggable)throw"Cannot find jquery-ui sortable widget dependency!";var isDraggingHelper=function(e,t){e()?t.type==e()+"stop"&&e(!1):("dragstart"==t.type||"sortstart"==t.type)&&e(t.type.substring(0,4))},makeExtendedValueAccessor=function(e){return function(){var t=e();ko.utils.peekObservable(t),ko.utils.unwrapObservable(t),"undefined"==t.options&&(t.options={});var o=t.options.start;t.options.start=function(e,i){return"undefined"!=typeof t.dragging&&ko.isWritableObservable(t.dragging)&&isDraggingHelper(t.dragging,e),"undefined"!=typeof t.dropContainer&&(t.scrollInterval=global.setInterval(function(){var e=$(t.dropContainer).scrollTop();$(t.dropContainer).scrollTop(e+t.adding)},20)),"undefined"!=typeof o?o(e,i):void 0};var i=t.options.stop;t.options.stop=function(e,o){return"undefined"!=typeof t.dragging&&ko.isWritableObservable(t.dragging)&&isDraggingHelper(t.dragging,e),"undefined"!=typeof t.dropContainer&&global.clearInterval(t.scrollInterval),"undefined"!=typeof i?i(e,o):void 0};var n=t.options.drag;return t.options.drag=function(e,o){if("undefined"!=typeof t.dropContainer){var i=e.pageY-$(t.dropContainer).offset().top,a=i-$(t.dropContainer).height();t.adding=-20>i?-20:0>i?-10:10>i?-5:a>20?20:a>0?10:a>-10?5:0}return"undefined"!=typeof n?n(e,o):void 0},t}};ko.bindingHandlers.extsortable={init:function(e,t,o,i,n){return ko.bindingHandlers.sortable.init(e,makeExtendedValueAccessor(t),o,i,n)},update:function(e,t,o,i,n){return ko.bindingHandlers.sortable.update(e,makeExtendedValueAccessor(t),o,i,n)}},ko.bindingHandlers.extdraggable={init:function(e,t,o,i,n){return ko.bindingHandlers.draggable.init(e,makeExtendedValueAccessor(t),o,i,n)},update:function(e,t,o,i,n){return ko.bindingHandlers.draggable.update(e,makeExtendedValueAccessor(t),o,i,n)}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1,"./../../../bower_components/knockout-sortable/build/knockout-sortable.min.js":8}],37:[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js");ko.bindingHandlers.preloader={init:function(e,t){var o=t();if("undefined"==typeof o.preloaded){o.preloaded=ko.observable("");var a=function(e){if(e!=o.preloaded())if(""!==e){var t=new Image;t.onload=function(){o.preloaded(e)},t.onerror=function(){o.preloaded(e)},t.src=e}else o.preloaded(e)};o.subscribe(a),a(o())}}},ko.bindingHandlers.advattr={init:function(e,t){var o=ko.utils.unwrapObservable(t()||{});ko.utils.objectForEach(o,function(t,o){var a=e.getAttribute(t);if(ko.isWriteableObservable(o)){var i=o();i!=a&&(o(a),null!==i&&console.log("AdvAttr found a value different from the default",t,i,a))}})},update:function(e,t){var o=ko.utils.unwrapObservable(t())||{};ko.utils.objectForEach(o,function(t,o){o=ko.utils.unwrapObservable(o);var a=o===!1||null===o||void 0===o;a?e.removeAttribute(t):e.setAttribute(t,o.toString())})}},ko.bindingHandlers.advstyle={init:function(e,t){var o=ko.utils.unwrapObservable(t()||{});ko.utils.objectForEach(o,function(t,o){var a;if(t.match(/Px$/)?(t=t.substr(0,t.length-2),a=e.style[t],a.match(/px$/)?a=a.replace(/px$/,""):console.log("AdvStyle binding found an unexpected default value",t,a,e)):a=e.style[t],ko.isWriteableObservable(o)){var i=o();i!=a&&(o(a),null!==i&&console.log("AdvStyle found a value different from the default",t,i,a))}})},update:function(e,t){var o=ko.utils.unwrapObservable(t()||{});ko.utils.objectForEach(o,function(t,o){o=ko.utils.unwrapObservable(o),(null===o||"undefined"==typeof o||o===!1)&&(o=""),t.match(/Px$/)&&(t=t.substr(0,t.length-2),o+="px"),e.style[t]=o})}},ko.bindingHandlers.domlog={init:function(e){console.log("initialized",e),ko.utils.domNodeDisposal.addDisposeCallback(e,function(){console.log("disposed",e)})}},ko.bindingHandlers.fudroppable={init:function(e,t){var o=t()||{},a={},i=function(e,t,o,a,i,n){e[t]?global.clearTimeout(e[t]):("undefined"!=typeof a&&o.classList.add(a),ko.isWriteableObservable(i)&&!i()&&i(!0));var l=function(){e[t]=null,"undefined"!=typeof a&&o.classList.remove(a),ko.isWriteableObservable(i)&&i()&&i(!1)};"dragleave"==n.type?l():e[t]=global.setTimeout(l,500)};(o.active||o.activeClass)&&ko.utils.registerEventHandler(global,"dragover",i.bind(void 0,a,"activeTimeout",e,o.activeClass,o.active)),o.hoverClass&&ko.utils.registerEventHandler(e,"dragover dragenter dragleave",i.bind(void 0,a,"hoverTimeout",e,o.hoverClass,void 0))}},ko.bindingHandlers.fileupload={extendOptions:{},remoteFilePreprocessor:function(e){return e},init:function(e){ko.utils.domNodeDisposal.addDisposeCallback(e,function(){$(e).fileupload("destroy")}),global.webkitURL?$(e).attr("title"," "):$(e).attr("title","")},update:function(e,t){var o=t()||{},a=$(e),i=a.parents(".uploadzone"),n=o.data;o.data=void 0;var l=o.canvasPreview;ko.utils.extend(o,{url:"/upload/",dataType:"json",dropZone:i.find(".mo-uploadzone")[0],autoUpload:!0,acceptFileTypes:/(\.|\/)(gif|jpe?g|png)$/i,maxFileSize:1048576,disableImageResize:/Android(?!.*Chrome)|Opera/.test(global.navigator.userAgent),previewMaxWidth:200,previewMaxHeight:200,previewCrop:!1,replaceFileInput:!1,messages:{unknownError:"Unknown error",uploadedBytes:"Uploaded bytes exceed file size",maxNumberOfFiles:"Maximum number of files exceeded",acceptFileTypes:"File type not allowed",maxFileSize:"File is too large",minFileSize:"File is too small",post_max_size:"The uploaded file exceeds the post_max_size directive in php.ini",max_file_size:"File is too big",min_file_size:"File is too small",accept_file_types:"Filetype not allowed",max_number_of_files:"Maximum number of files exceeded",max_width:"Image exceeds maximum width",min_width:"Image requires a minimum width",max_height:"Image exceeds maximum height",min_height:"Image requires a minimum height",abort:"File upload aborted",image_resize:"Failed to resize image",generic:"Unexpected upload error"}}),ko.utils.extend(o,ko.bindingHandlers.fileupload.extendOptions);var r=0,d="",s=function(){0===--r&&(n&&n(d),d="",l&&(i.find("img").show(),i.find("canvas").remove()),i.removeClass("uploading"),i.find(".progress-bar").css("width",0))},c=function(e){if("object"==typeof o.messages&&null!==o.messages){var t=e.match(/^([^ ]+)(.*)$/);if(t&&"undefined"!=typeof o.messages[t[1]])return o.messages[t[1]]+t[2]}return e};a.fileupload(o);for(var u=["fileuploadadd","fileuploadprocessalways","fileuploadprogressall","fileuploaddone","fileuploadfail"],p=function(e,t){if("fileuploadadd"==e.type&&r++,"fileuploadfail"==e.type&&(console.log("fileuploadfail",e,t),o.onerror&&(""===t.errorThrown&&"error"==t.textStatus?o.onerror(c("generic")):o.onerror(c("generic ("+t.errorThrown+")"))),s()),"fileuploaddone"==e.type)if("undefined"!=typeof t.result.files[0].url){if(o.onfile)for(var a=0;a<t.result.files.length;a++)t.result.files[a]=ko.bindingHandlers.fileupload.remoteFilePreprocessor(t.result.files[a]),o.onfile(t.result.files[a]);if(""===d&&(d=t.result.files[0].url),l){var n=new Image;n.onload=s,n.onerror=s,n.src=t.result.files[0].url}else s()}else"undefined"!=typeof t.result.files[0].error?(console.log("remote error",e,t),o.onerror&&o.onerror(c(t.result.files[0].error)),s()):(console.log("unexpected error",e,t),o.onerror&&o.onerror(c("generic (Unexpected Error retrieving uploaded file)")),s());if("fileuploadprocessalways"==e.type){var u=t.index,p=t.files[u];if(p.preview&&0===u&&0===i.find("canvas").length){if(l){var b=$(p.preview).css("width","100%");i.find("img").hide(),i.prepend(b)}i.addClass("uploading"),i.find(".progress-bar").css("width",0)}p.error&&(o.onerror&&o.onerror(c(p.error)),s())}if("fileuploadprogressall"==e.type){var f=parseInt(100*(t.loaded/t.total),10);i.find(".progress-bar").css("width",f+"%")}},b=u.length-1;b>=0;b--){var f=u[b];a.on(f,p)}$.support.fileInput||a.prop("disabled",!0).parent().addClass("disabled")}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1}],38:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js");ko.bindingHandlers.ifSubs={cloneNodes:function(e,t){for(var o=0,i=e.length,n=[];i>o;o++){var a=e[o].cloneNode(!0);n.push(t?ko.cleanNode(a):a)}return n},init:function(e,t,o,i,n){var a,l,r=t();return"undefined"==typeof r.data.subsCount&&ko.extenders.subscriptionsCount(r.data),ko.computed(function(){var o,i,d,s=ko.utils.unwrapObservable(t().data.subsCount),c=!l;d=-("undefined"!=typeof t().gutter?t().gutter:1),o=s+(a?d:0)>=ko.utils.unwrapObservable(r.threshold),"undefined"!=typeof t().not&&t().not&&(o=!o),i=c||o!==a,i&&(c&&ko.computedContext.getDependenciesCount()&&(l=ko.bindingHandlers.ifSubs.cloneNodes(ko.virtualElements.childNodes(e),!0)),o?(c||ko.virtualElements.setDomNodeChildren(e,ko.bindingHandlers.ifSubs.cloneNodes(l)),ko.applyBindingsToDescendants(n,e)):ko.virtualElements.emptyNode(e),a=o)},null,{disposeWhenNodeIsRemoved:e}),{controlsDescendantBindings:!0}}},ko.virtualElements.allowedBindings.ifSubs=!0;var beforeSubscriptionProp,afterSubscriptionProp;if("function"==typeof ko.subscription&&"undefined"!=typeof ko.isWritableObservable)beforeSubscriptionProp="beforeSubscriptionAdd",afterSubscriptionProp="afterSubscriptionRemove";else if("3.2.0"==ko.version)beforeSubscriptionProp="va",afterSubscriptionProp="nb";else if("3.3.0"==ko.version)beforeSubscriptionProp="ja",afterSubscriptionProp="ua";else if("3.4.0"==ko.version)beforeSubscriptionProp="sa",afterSubscriptionProp="Ia";else{if("3.4.1"!=ko.version)throw"Unsupported minimized Knockout version "+ko.version+" (supported DEBUG or minimized 3.2.0 ... 3.4.1)";beforeSubscriptionProp="sa",afterSubscriptionProp="Ia"}ko.extenders.subscriptionsCount=function(e,t,o){if("undefined"==typeof e.subsCount){e.subsCount=ko.observable(e.getSubscriptionsCount()).extend({notify:"always"});var i=e[beforeSubscriptionProp],n=e[afterSubscriptionProp];e[beforeSubscriptionProp]=function(n){i&&i.call(e,n);var a=e.getSubscriptionsCount()+1;("undefined"==typeof t||a==t||"undefined"==typeof o||a==o)&&e.subsCount(a)},e[afterSubscriptionProp]=function(i){n&&n.call(e,i);var a=e.getSubscriptionsCount();("undefined"==typeof t||a==t||"undefined"==typeof o||a==o)&&e.subsCount(a)}}else console.log("already applied subscriptionCount to observable");return null};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1}],39:[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),spinner=(typeof window !== "undefined" ? window['jQuery']['ui']['spinner'] : typeof global !== "undefined" ? global['jQuery']['ui']['spinner'] : null),console=require("./../../../bower_components/console-browserify/index.js");if("undefined"==typeof spinner)throw"Cannot find jquery-ui spinner widget dependency!";$.widget("ui.spinner",spinner,{_adjustValue:function(e){this._super(e);var t=this.options;return e=parseFloat(e.toFixed(this._precision())),null!==t.max&&e>t.max?t.max:null!==t.min&&e<t.min?t.min:e}});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1}],40:[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),console=require("./../../../bower_components/console-browserify/index.js"),tabs=(typeof window !== "undefined" ? window['jQuery']['ui']['tabs'] : typeof global !== "undefined" ? global['jQuery']['ui']['tabs'] : null);if("undefined"==typeof tabs)throw"Cannot find jquery-ui tabs widget dependency!";$.widget("ui.tabs",tabs,{_isLocal:function(e){return"true"==e.getAttribute("data-local")?!0:this._superApply(arguments)}});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1}],41:[function(require,module,exports){
(function (global){
"use strict";function pushTemplate(e,t){var o=global.document.createElement("script");o.setAttribute("type","text/html"),o.setAttribute("id",e),o.text=t,global.document.body.appendChild(o)}function removeTemplate(e){var t=global.document.getElementById(e);t&&t.parentNode.removeChild(t)}function init(){}function getTemplateContent(e){var t=global.document.getElementById(e);return t?t.innerHTML:void 0}module.exports={init:init,addTemplate:pushTemplate,removeTemplate:removeTemplate,getTemplateContent:getTemplateContent};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],42:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),console=require("./../../../bower_components/console-browserify/index.js"),tinymce=(typeof window !== "undefined" ? window['tinymce'] : typeof global !== "undefined" ? global['tinymce'] : null),timeout,render=function(){timeout=void 0,"undefined"!=typeof tinymce.activeEditor&&null!==tinymce.activeEditor&&"undefined"!=typeof tinymce.activeEditor.theme&&null!==tinymce.activeEditor.theme&&"undefined"!=typeof tinymce.activeEditor.theme.panel&&null!==tinymce.activeEditor.theme.panel&&"undefined"!=typeof tinymce.activeEditor.theme.panel.visible&&(("undefined"!=typeof tinymce.activeEditor.theme.panel._visible&&tinymce.activeEditor.theme.panel._visible&&tinymce.activeEditor.theme.panel._fixed||"undefined"!=typeof tinymce.activeEditor.theme.panel.state&&tinymce.activeEditor.theme.panel.state.get("visible")&&tinymce.activeEditor.theme.panel.state.get("fixed"))&&tinymce.activeEditor.theme.panel.fixed(!1),tinymce.activeEditor.nodeChanged(),tinymce.activeEditor.theme.panel.visible(!0),tinymce.activeEditor.theme.panel.layoutRect().y<=40&&tinymce.activeEditor.theme.panel.moveBy(0,40-tinymce.activeEditor.theme.panel.layoutRect().y))};ko.bindingHandlers.wysiwygScrollfix={scroll:function(){timeout&&global.clearTimeout(timeout),timeout=global.setTimeout(render,50)},init:function(e){ko.utils.domNodeDisposal.addDisposeCallback(e,function(){$(e).off("scroll",ko.bindingHandlers.wysiwygScrollfix.scroll)}),$(e).on("scroll",ko.bindingHandlers.wysiwygScrollfix.scroll)}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1}],43:[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js"),_scrollIntoView=function(e,t,o,i){var n=o.scrollTop(),a=n-i-(t?20:-20),r="undefined"!=typeof o[0].nodeType;if(r){var l={scrollTop:""+Math.round(a)+"px"},s=Math.round(Math.abs(a-n));o.stop().animate(l,s)}else o.scrollTop(a)};ko.bindingHandlers.scrollIntoView={update:function(e,t){var o=ko.utils.unwrapObservable(t());if(o)try{for(;8===e.nodeType;)e=e.nextSibling;if(8!==e.nodeType){var i,n=$(e).scrollParent(),a=!1;9==n[0].nodeType?(n=$(n[0].defaultView),i=0,a=!0):i=n.offset().top;var r=n.height(),l=n.scrollTop(),s=i+r,d=$(e),c=d.offset().top;a&&(c-=l);var u=d.height(),p=c+u;c>i&&s>c+u||(r>u?(i>c&&_scrollIntoView(e,!0,n,i-c),p>s&&_scrollIntoView(e,!1,n,s-p)):(i>c&&s>p&&_scrollIntoView(e,!1,n,s-p),c>i&&p>s&&_scrollIntoView(e,!0,n,i-c)))}}catch(f){console.log("TODO exception scrolling into view",f)}}},ko.virtualElements.allowedBindings.scrollIntoView=!0;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1}],44:[function(require,module,exports){
(function (global){
"use strict";function createStringTemplateEngine(e){var t=e.makeTemplateSource;return e.makeTemplateSource=function(e){return"undefined"!=typeof templates[e]?new ko.templateSources.stringTemplate(e,templates[e]):t(e)},e}function pushTemplate(e,t){templates[e]=t}function removeTemplate(e){"undefined"!=typeof templates[e]?templates[e]=void 0:origTemplateSystem.removeTemplate(e)}function init(){ko.setTemplateEngine(createStringTemplateEngine(new ko.nativeTemplateEngine))}function getTemplateContent(e){return"undefined"!=typeof templates[e]?templates[e]:origTemplateSystem.getTemplateContent(e)}var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),origTemplateSystem=require("./script-template.js"),templates={};ko.templateSources.stringTemplate=function(e,t){this.templateName=e,this.template=t,this._data={}},ko.utils.extend(ko.templateSources.stringTemplate.prototype,{data:function(e,t){return 1===arguments.length?this._data[e]:(this._data[e]=t,void 0)},text:function(e){return 0===arguments.length?this.template:(this.template=e,void 0)}}),module.exports={init:init,addTemplate:pushTemplate,removeTemplate:removeTemplate,getTemplateContent:getTemplateContent};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./script-template.js":41}],45:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),kojqui=(typeof window !== "undefined" ? window['kojqui'] : typeof global !== "undefined" ? global['kojqui'] : null),console=require("./../../../bower_components/console-browserify/index.js"),extendValueAccessor=function(e,t){return function(){return ko.utils.extend(t,e()),t}},options={show:{delay:500},track:!0,items:'[title][title!=""][title!=" "]'};ko.bindingHandlers.tooltips={init:function(e,t,o,i,n){return"undefined"!=typeof $.fn.tooltip&&"undefined"!=typeof ko.bindingHandlers.tooltip?ko.bindingHandlers.tooltip.init(e,extendValueAccessor(t,options),o,i,n):void 0},update:function(e,t,o,i,n){return"undefined"!=typeof $.fn.tooltip&&"undefined"!=typeof ko.bindingHandlers.tooltip?ko.bindingHandlers.tooltip.update(e,extendValueAccessor(t,options),o,i,n):void 0}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1}],46:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js");ko.bindingHandlers.validatedValue={init:function(e,t,o){var i=t;if("undefined"!=typeof e.pattern){var n=new RegExp("^(?:"+e.pattern+")$"),a=ko.computed({read:function(){var o=ko.utils.unwrapObservable(t()),i=null===o||""===o||n.test(o);return i?e.classList.remove("invalid"):e.classList.add("invalid"),o},write:ko.isWriteableObservable(t())&&function(o){ko.selectExtensions.writeValue(e,o);var i=ko.selectExtensions.readValue(e);t()(i)},disposeWhenNodeIsRemoved:e});i=function(){return a}}ko.bindingHandlers.value.init(e,i,o)}},ko.expressionRewriting._twoWayBindings.validatedValue=!0;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1}],47:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js");ko.bindingHandlers.uniqueId={currentIndex:0,init:function(e,t){var o=ko.utils.unwrapObservable(t())||{};if(""===o.id()){var a,i,n;n="ko_"+("undefined"!=typeof o.type?ko.utils.unwrapObservable(o.type):"block");do a=n+"_"+ ++ko.bindingHandlers.uniqueId.currentIndex,i=global.document.getElementById(a);while(i);o.id(a)}}},ko.virtualElements.allowedBindings.uniqueId=!0,ko.bindingHandlers.virtualAttr={update:function(e,t){8!==e.nodeType&&ko.bindingHandlers.attr.update(e,t)}},ko.virtualElements.allowedBindings.virtualAttr=!0,ko.bindingHandlers.virtualAttrStyle={update:function(e,t,o,a,i){if(8!==e.nodeType){var n="undefined"==typeof i.templateMode||"wysiwyg"!=i.templateMode,l=["style"];n&&l.push("replacedstyle");for(var r=ko.utils.unwrapObservable(t()),d=0;d<l.length;d++){var s=l[d],c=r===!1||null===r||void 0===r;c?e.removeAttribute(s):e.setAttribute(s,r.toString())}}}},ko.virtualElements.allowedBindings.virtualAttrStyle=!0,ko.bindingHandlers.virtualStyle={update:function(e,t){8!==e.nodeType&&ko.bindingHandlers.style.update(e,t)}},ko.virtualElements.allowedBindings.virtualStyle=!0,ko.bindingHandlers.virtualHtml={init:ko.bindingHandlers.html.init,update:function(e,t){if(8===e.nodeType){var o=ko.utils.unwrapObservable(t());if(ko.virtualElements.emptyNode(e),null!==o&&void 0!==o){"string"!=typeof o&&(o=o.toString());var a=ko.utils.parseHtmlFragment(o);if(a)for(var i=e.nextSibling,n=0,l=a.length;l>n;n++)i.parentNode.insertBefore(a[n],i)}}else ko.bindingHandlers.html.update(e,t);return{controlsDescendantBindings:!0}}},ko.virtualElements.allowedBindings.virtualHtml=!0;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1}],48:[function(require,module,exports){
(function (global){
"use strict";var tinymce=(typeof window !== "undefined" ? window['tinymce'] : typeof global !== "undefined" ? global['tinymce'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js");require("./eventable.js"),ko.bindingHandlers.wysiwygOrHtml={init:function(e,t,i,n,l){var r="undefined"==typeof l.templateMode||"wysiwyg"!=l.templateMode;return r?ko.bindingHandlers.virtualHtml.init():ko.bindingHandlers.wysiwyg.init(e,t,i,n,l)},update:function(e,t,i,n,l){var r="undefined"==typeof l.templateMode||"wysiwyg"!=l.templateMode;return r?ko.bindingHandlers.virtualHtml.update(e,t,i,n,l):void 0}},ko.virtualElements.allowedBindings.wysiwygOrHtml=!0,ko.bindingHandlers.wysiwygHref={init:function(e,t,i,n,l){if(8!==e.nodeType){t();var r="undefined"==typeof l.templateMode||"wysiwyg"!=l.templateMode;if(r)e.setAttribute("target","_new");else{var o=i();"undefined"!=typeof o.wysiwygOrHtml?e.setAttribute("href","javascript:void(0)"):(e.removeAttribute("href"),e.setAttribute("disabledhref","#"))}}},update:function(e,t,i,n,l){if(8!==e.nodeType){var r="undefined"==typeof l.templateMode||"wysiwyg"!=l.templateMode,o=ko.utils.unwrapObservable(t());r&&(o===!1||null===o||void 0===o?e.removeAttribute("href"):e.setAttribute("href",o.toString()))}}},ko.virtualElements.allowedBindings.wysiwygHref=!0,ko.bindingHandlers.wysiwygSrc={convertedUrl:function(e,t,i,n){var l=-1==e.indexOf("?")?"?":"&",r=e+l+"method="+t+"&width="+i+(null!==n?"&height="+n:"");return r},placeholderUrl:function(e,t,i){},update:function(e,t){var i=ko.utils.unwrapObservable(t()),n=ko.utils.unwrapObservable(i.src),l=ko.utils.unwrapObservable(i.placeholder),r=ko.utils.unwrapObservable(i.width),o=ko.utils.unwrapObservable(i.height);if(n===!1||null===n||void 0===n||""===n)"object"==typeof l&&null!==l?e.setAttribute("src",ko.bindingHandlers.wysiwygSrc.placeholderUrl(l.width,l.height,l.text)):e.removeAttribute("src");else{var a=ko.utils.unwrapObservable(i.method);a||(a=r>0&&o>0?"cover":"resize");var s=ko.bindingHandlers.wysiwygSrc.convertedUrl(n.toString(),a,r,o);e.setAttribute("src",s)}"undefined"!=typeof r&&null!==r?e.setAttribute("width",r):e.removeAttribute("width"),"undefined"!=typeof o&&null!==o?e.setAttribute("height",o):e.removeAttribute("height")}},ko.bindingHandlers.wysiwygId={init:function(e,t,i,n,l){var r="undefined"==typeof l.templateMode||"wysiwyg"!=l.templateMode;r||e.setAttribute("id",ko.utils.unwrapObservable(t()))},update:function(e,t,i,n,l){var r="undefined"==typeof l.templateMode||"wysiwyg"!=l.templateMode;r||e.setAttribute("id",ko.utils.unwrapObservable(t()))}},ko.virtualElements.allowedBindings.wysiwygId=!0,ko.virtualElements.allowedBindings.wysiwygClick=!0,ko.bindingHandlers.wysiwygCss={update:function(e,t,i,n,l){var r="undefined"==typeof l.templateMode||"wysiwyg"!=l.templateMode;r||ko.bindingHandlers.css.update(e,t,i,n,l)}},ko.virtualElements.allowedBindings.wysiwygCss=!0,ko.bindingHandlers.wysiwygImg={makeTemplateValueAccessor:function(e,t){return function(){var i="undefined"!=typeof t.templateMode&&"wysiwyg"==t.templateMode,n=e(),l=ko.utils.peekObservable(n);return ko.utils.unwrapObservable(n),{name:i?l._editTemplate:l._template,templateEngine:ko.nativeTemplateEngine.instance}}},init:function(e,t,i,n,l){return ko.bindingHandlers.template.init(e,ko.bindingHandlers.wysiwygImg.makeTemplateValueAccessor(t,l))},update:function(e,t,i,n,l){return l=l.extend(t()),ko.bindingHandlers.template.update(e,ko.bindingHandlers.wysiwygImg.makeTemplateValueAccessor(t,l),i,n,l)}},ko.virtualElements.allowedBindings.wysiwygImg=!0,ko.bindingHandlers.wysiwyg={currentIndex:0,standardOptions:{toolbar1:"formatselect bold italic underline forecolor alignleft aligncenter alignright alignjustify bullist link removeformat"},fullOptions:{toolbar1:"fontselect fontsizeselect hr charmap sourcecode link unlink removeformat code",toolbar2:"formatselect bold italic underline forecolor backcolor outdent indent alignleft aligncenter alignright alignjustify bullist numlist ",plugins:"link hr paste lists textcolor colorpicker code image charmap spellchecker"},init:function(e,t){ko.bindingHandlers.focusable.init(e),ko.utils.domNodeDisposal.addDisposeCallback(e,function(){tinymce.remove("#"+e.getAttribute("id"))});var i=t();if(!ko.isObservable(i))throw"Wysiwyg binding called with non observable";if(8===e.nodeType)throw"Wysiwyg binding called on virtual node, ignoring...."+e.innerHTML;var n=e.getAttribute("id");n||(n="wysiwyg_"+ ++ko.bindingHandlers.wysiwyg.currentIndex,e.setAttribute("id",n));var l,r=function(){$(".tinyMCE-header").height($(".mce-tinymce.mce-container").outerHeight())},o=$(e).parents("#tinymce-area").hasClass("simple-editor"),a=$(e).parents("#tinymce-area").hasClass("advanced-editor"),s=!1,d=!1,u={selector:"#"+n,inline:!0,hidden_input:!1,menubar:!1,fixed_toolbar_container:".tinyMCE-header",toolbar1:"formatselect bold italic underline forecolor alignleft aligncenter alignright alignjustify bullist link removeformat",plugins:"link hr paste lists textcolor colorpicker code image charmap spellchecker",preview_styles:!1,paste_as_text:!0,paste_data_images:!1,language:"en",schema:"html5",browser_spellcheck:!0,extended_valid_elements:"strong/b,em/i,*[*]",skin:"stedb",setup:function(e){e.on("change redo undo",function(){s||(d=!0,i(e.getContent({format:"raw"})),d=!1)}),e.on("focus",function(){e.nodeChanged(),e.getElement().click(),$(".tinyMCE-header .mce-tinymce-inline.mce-panel").removeClass("lastFocused"),r()}),e.on("blur",function(){$(".tinyMCE-header .mce-tinymce-inline.mce-panel:visible").addClass("lastFocused")}),e.on("BeforeSetContent",function(e){e.initial&&(e.format="raw")})}};return o&&ko.utils.extend(u,ko.bindingHandlers.wysiwyg.standardOptions),a&&ko.utils.extend(u,ko.bindingHandlers.wysiwyg.fullOptions),global.setTimeout(function(){tinymce.init(u)}),ko.computed(function(){var i=ko.utils.unwrapObservable(t());if(!d){try{s=!0,"undefined"!=typeof l?l.setContent(i,{format:"raw"}):ko.utils.setHtml(e,i)}catch(n){console.log("TODO exception setting content to editable element",typeof l,n)}s=!1}},null,{disposeWhenNodeIsRemoved:e}),{controlsDescendantBindings:!0}}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1,"./eventable.js":34}],49:[function(require,module,exports){
"use strict";var console=require("./../../../bower_components/console-browserify/index.js"),checkModel=function(e,o,t,n,l){var f,i,p,a=0;if("undefined"==typeof l&&(l=!1),"undefined"!=typeof o&&"function"==typeof o.splice)for(f={},i=0;i<o.length;i++)f[o[i].type]=o[i];else f=o;for(var r in e)if(e.hasOwnProperty(r))if(p="undefined"!=typeof n?n+"."+r:r,t.hasOwnProperty(r))if(typeof t[r]!=typeof e[r])null!==t[r]&&null!==e[r]&&("string"==typeof t[r]?String(e[r])!=e[r]&&(console.log("TODO Different type 1 ",p,typeof t[r],typeof e[r],t[r],e[r]),a=Math.max(a,2)):"number"==typeof t[r]?Number(e[r])!=e[r]&&(console.log("TODO Different type 2 ",p,typeof t[r],typeof e[r],t[r],e[r]),a=Math.max(a,2)):(console.log("TODO Different type 3 ",p,typeof t[r],typeof e[r],t[r],e[r]),a=Math.max(a,2)));else if("object"==typeof e[r])if(null!==e[r])if("undefined"!=typeof e[r].splice){if(e[r].length>0)if(t[r].length>0){var y=0;for(i=0;i<t[r].length;i++)if("string"==typeof t[r][i].type){for(;y<e[r].length&&e[r][y].type!==t[r][i].type;)console.log("ignoring ",p,e[r][y].type," block type in reference not found in model"),y++;if(y>=e[r].length){console.log("WARN cannot find ",p,t[r][i].type," block in reference"),a=Math.max(a,2);break}a=Math.max(a,checkModel(e[r][y],void 0,t[r][i],p+"["+i+"."+t[r][i].type+"]"))}}else for(i=0;i<e[r].length;i++)"string"!=typeof e[r][i].type?(console.log("TODO found an object with no type",p,e[r][i]),a=Math.max(a,2)):f.hasOwnProperty(e[r][i].type)?a=Math.max(a,checkModel(f[e[r][i].type],f,e[r][i],p+"["+i+"."+e[r][i].type+"]")):(console.warn("TODO the model uses a block type not defined by the template. REMOVING IT!!",p,e[r][i]),e[r].splice(i,1),i--,a=Math.max(a,2))}else null===t[r]?l?(console.log("WARN Null object in model ",p,"instead of",e[r],"deleting it"),a=Math.max(a,2),delete e[r]):(console.log("INFO Null object in model ",p,"instead of",e[r],"cloning it from the reference"),a=Math.max(a,1),t[r]=e[r]):a=Math.max(a,checkModel(e[r],f,t[r],p,l));else null!==t[r]&&(console.log("TODO Null in reference but not null in model",p,t[r]),a=Math.max(a,2));else"string"!=typeof e[r]&&"boolean"!=typeof e[r]&&"number"!=typeof e[r]&&(console.log("TODO unsupported type",p,typeof e[r]),a=Math.max(a,2));else l?(a=Math.max(a,2),delete e[r]):(a=Math.max(a,1),t[r]=e[r]);return l||(a=Math.max(a,checkModel(t,o,e,"undefined"!=typeof n?n+"!R":"!R",!0))),a};module.exports=checkModel;

},{"./../../../bower_components/console-browserify/index.js":1}],50:[function(require,module,exports){
"use strict";var converterUtils=require("./utils.js"),cssParse=require("./../../../bower_components/mensch/lib/parser.js"),console=require("./../../../bower_components/console-browserify/index.js"),domutils=require("./domutils.js"),_declarationValueLookup=function(e,t,r){for(var n=e.length-1;n>=0;n--)if("property"==e[n].type&&e[n].name==t)return _declarationValueUrlPrefixer(e[n].value,r);return null},_propToCamelCase=function(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})},_declarationValueUrlPrefixer=function(e,t){if(e.match(/url\(.*\)/)){var r=e.replace(/(url\()([^\)]*)(\))/g,function(e,r,n,l){var i=n.trim(),o=n.trim().charAt(0);"'"==o||'"'==o?i=i.substr(1,i.length-2):o="";var a=t(i);return null!==a?r+o+a+o+l:e});return r}return e},elaborateDeclarations=function(e,t,r,n,l,i,o){var a="object"==typeof i&&null!==i?i:{},u=null,d=0;if("undefined"==typeof t){var f=cssParse("#{\n"+e+"}",{comments:!0,position:!0});t=f.stylesheet.rules[0].declarations,d=1}for(var s=t.length-1;s>=0;s--)if("property"==t[s].type)if(o===!0&&"display"==t[s].name&&"none"==t[s].value)null===u&&(u=e),u=converterUtils.removeStyle(u,t[s].position.start,t[s].position.end,d,0,0,"");else{var v=t[s].name.match(/^-ko-(bind-|attr-)?([a-z0-9-]*?)(-if|-ifnot)?$/);if(null!==v){null===u&&"undefined"!=typeof e&&(u=e);var c,p,y,m="attr-"==v[1],h="bind-"==v[1],b=v[2],S="-if"==v[3]||"-ifnot"==v[3];if(S){c=t[s].name.substr(0,t[s].name.length-v[3].length);var g=_declarationValueLookup(t,c,r);if(null===g)throw"Unable to find declaration "+c+" for "+t[s].name}else{if((m||h)&&"undefined"==typeof l&&"undefined"!=typeof e)throw"Attributes and bind declarations are only allowed in inline styles!";var w,U=!0;if(m?(y=domutils.getAttribute(l,b),U=!1,w="virtualAttr"):h?(w=null,"text"==b?"undefined"!=typeof l?y=domutils.getInnerText(l):U=!1:"html"==b?"undefined"!=typeof l?y=domutils.getInnerHtml(l):U=!1:U=!1):(U="undefined"!=typeof e,U&&(y=_declarationValueLookup(t,b,r)),w="virtualStyle"),U&&null===y)throw console.error("Cannot find default value for",t[s].name,t),"Cannot find default value for "+t[s].name+": "+t[s].value+" in "+l+" ("+typeof e+"/"+b+")";var _=y,A=h||m?-1!=b.indexOf("-")?"'"+b+"'":b:_propToCamelCase(b);try{p=converterUtils.expressionBinding(t[s].value,n,_)}catch(k){throw console.error("Model ensure path failed",k.stack,"name",t[s].name,"value",t[s].value,"default",y,"element",l),k}null!==w&&"undefined"==typeof a[w]&&(a[w]={}),"virtualAttr"==w&&"href"==A&&(w=null,A="wysiwygHref","undefined"!=typeof l&&null!==l&&domutils.removeAttribute(l,"href"));var x=_declarationValueLookup(t,t[s].name+"-if",r),C=!1;if(null===x)x=_declarationValueLookup(t,t[s].name+"-ifnot",r),C=!0;else if(null!==_declarationValueLookup(t,t[s].name+"-ifnot",r))throw"Unexpected error: cannot use both -if and -ifnot property conditions";if(null!==x)try{var V=converterUtils.conditionBinding(x,n);p=(C?"!":"")+"("+V+") ? "+p+" : null"}catch(k){throw console.error("Unable to deal with -ko style binding condition",x,t[s].name),k}null!==w?a[w][A]=p:a[A]=p}if(null!==u)try{if("undefined"!=typeof l&&null!==l)u=converterUtils.removeStyle(u,t[s].position.start,t[s].position.end,d,0,0,"");else{var P="";S||(P=b+": <!-- ko text: "+p+" -->"+y+"<!-- /ko -->"),u=converterUtils.removeStyle(u,t[s].position.start,t[s].position.end,d,0,0,P)}}catch(k){throw console.warn("Remove style failed",k,"name",t[s]),k}}else{var j=_declarationValueUrlPrefixer(t[s].value,r);if(j!=t[s].value&&(null===u&&"undefined"!=typeof e&&(u=e),null!==u))try{u=converterUtils.removeStyle(u,t[s].position.start,t[s].position.end,d,0,0,t[s].name+": "+j)}catch(k){throw console.log("Remove style failed replacing url",k,"name",t[s]),k}var z=_propToCamelCase(t[s].name),L="virtualAttrStyle",q="undefined"!=typeof a.virtualStyle?a.virtualStyle[z]:void 0,O=" ";"undefined"==typeof a[L]&&(a[L]="''",O=""),"undefined"!=typeof q?(a[L]="'"+t[s].name+": '+("+q+")+';"+O+"'+"+a[L],delete a.virtualStyle[z]):a[L]="'"+t[s].name+": "+converterUtils.addSlashes(j)+";"+O+"'+"+a[L]}}if("undefined"!=typeof l&&null!==l){for(var T in a.virtualStyle)if(a.virtualStyle.hasOwnProperty(T))throw console.log("Unexpected virtualStyle binding after conversion to virtualAttr.style",T,a.virtualStyle[T],e),"Unexpected virtualStyle binding after conversion to virtualAttr.style for "+T;delete a.virtualStyle;var B=domutils.getAttribute(l,"data-bind"),D=(null!==B?B+", ":"")+_bindingSerializer(a);domutils.setAttribute(l,"data-bind",D)}if("undefined"==typeof e){var H=!1;for(var I in a.virtualStyle)if(a.virtualStyle.hasOwnProperty(I)){H=!0;break}if(H){if("undefined"!=typeof a.virtualAttrStyle){var R=a.virtualAttrStyle;delete a.virtualAttrStyle,a.virtualAttrStyle=R}}else delete a.virtualStyle;return _bindingSerializer(a)}return u},_bindingSerializer=function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&("object"==typeof e[r]?t.push(r+": "+"{ "+_bindingSerializer(e[r])+" }"):t.push(r+": "+e[r]));return t.reverse().join(", ")};module.exports=elaborateDeclarations;

},{"./../../../bower_components/console-browserify/index.js":1,"./../../../bower_components/mensch/lib/parser.js":15,"./domutils.js":51,"./utils.js":57}],51:[function(require,module,exports){
(function (global){
"use strict";function _extend(e,t){if(t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e}var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),objExtend=function(e,t){return"function"==typeof $.extend?$.extend(!0,e,t):_extend(e,JSON.parse(JSON.stringify(t)))},getAttribute=function(e,t){var o=$(e).attr(t);return"undefined"==typeof o&&(o=null),o},setAttribute=function(e,t,o){$(e).attr(t,o)},removeAttribute=function(e,t){$(e).removeAttr(t)},getInnerText=function(e){return $(e).text()},getInnerHtml=function(e){return $(e).html()},getLowerTagName=function(e){return""===e.tagName&&"string"==typeof e.name?e.name.toLowerCase():""!==e.tagName?e.tagName.toLowerCase():$(e).prop("tagName").toLowerCase()},setContent=function(e,t){$(e).html(t)},replaceHtml=function(e,t){$(e).replaceWith(t)},removeElements=function(e,t){t&&"undefined"!=typeof e.detach&&e.detach(),e.remove()};module.exports={getAttribute:getAttribute,setAttribute:setAttribute,removeAttribute:removeAttribute,getInnerText:getInnerText,getInnerHtml:getInnerHtml,getLowerTagName:getLowerTagName,setContent:setContent,replaceHtml:replaceHtml,removeElements:removeElements,objExtend:objExtend};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],52:[function(require,module,exports){
(function (global){
"use strict";var console=require("./../../../bower_components/console-browserify/index.js"),elaborateDeclarations=require("./declarations.js"),utils=require("./utils.js"),modelDef=require("./model.js"),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),_getOptionsObject=function(e){for(var t=e.split("|"),o={},n=0;n<t.length;n++){var i=t[n].split("=");o[i[0]]=i.length>1?i[1]:i[0]}return o},_filterProps=function(e,t,o){var n=[],i=["buttonStyle","buttonColor","backgroundColor","radius"];for(var l in e)if(!l.match(/^customStyle$/)&&!l.match(/^_/)&&e.hasOwnProperty(l)){var a=null!==e[l]&&"undefined"!=typeof e[l]._category&&"style"==e[l]._category;if("id"==l||"type"==l||l.match(/Blocks$/));else if("styler"==t&&i.indexOf(l)>-1)(a||o>0)&&n.push(l);else if("edit"==t){var d=null!==e[l]&&"undefined"!=typeof e[l]._category&&"content"==e[l]._category&&("undefined"==typeof e[l]._context||"block"!=e[l]._context);d&&n.push(l)}else"undefined"==typeof t&&n.push(l)}return n},_propInput=function(e,t,o,n,i){var l,a="";if(null!==e&&"undefined"!=typeof e._widget&&(l=e._widget),"undefined"==typeof l)throw"Unknown data type for "+t;var d="focusable: true";if("edit"==n&&(d+=", event: { focus: function(ui, event) { $($element).click(); } } "),a+='<label class="data-'+l+'"'+("boolean"==l?" data-bind=\"event: { mousedown: function(ui, evt) { if (evt.button == 0) { var input = $($element).find('input'); var ch = input.prop('checked'); setTimeout(function() { input.click(); input.prop('checked', !ch); input.trigger('change'); }, 0); } } }, click: function(ui, evt) { evt.preventDefault(); }, clickBubble: false\"":"")+">","undefined"!=typeof i&&"undefined"!=typeof i[l]){var s=i[l],r={};if("undefined"!=typeof s.parameters)for(var p in s.parameters)s.parameters.hasOwnProperty(p)&&"undefined"!=typeof e["_"+p]&&(r[p]=e["_"+p]);a+=s.html(o,d,r)}else if("boolean"==l)a+='<input type="checkbox" value="nothing" data-bind="checked: '+o+", "+d+'" />',a+='<span class="checkbox-replacer" ></span>';else if("color"==l)a+='<input size="7" type="text" data-bind="colorpicker: { color: '+o+", strings: $root.t('Theme Colors,Standard Colors,Web Colors,Theme Colors,Back to Palette,History,No history yet.') }, "+", "+d+'" />';else if("select"==l){if("undefined"!=typeof e._options){var u=_getOptionsObject(e._options);a+='<select data-bind="value: '+o+", "+d+'">';for(var f in u)u.hasOwnProperty(f)&&(a+='<option value="'+f+"\" data-bind=\"text: $root.ut('template', '"+utils.addSlashes(u[f])+"')\">"+u[f]+"</option>");a+="</select>"}}else if("font"==l)a+='<select type="text" data-bind="value: '+o+", "+d+'">',a+='<optgroup label="Sans-Serif Fonts">',a+='<option value="Arial,Helvetica,sans-serif">Arial</option>',a+="<option value=\"'Comic Sans MS',cursive,sans-serif\">Comic Sans MS</option>",a+='<option value="Impact,Charcoal,sans-serif">Impact</option>',a+="<option value=\"'Trebuchet MS',Helvetica,sans-serif\">Trebuchet MS</option>",a+='<option value="Verdana,Geneva,sans-serif">Verdana</option>',a+="</optgroup>",a+='<optgroup label="Serif Fonts">',a+='<option value="Georgia,serif">Georgia</option>',a+="<option value=\"'Times New Roman',Times,serif\">Times New Roman</option>",a+="</optgroup>",a+='<optgroup label="Monospace Fonts">',a+="<option value=\"'Courier New',Courier,monospace\">Courier New</option>",a+="</optgroup>",a+="</select>";else if("url"==l)a+='<div class="ui-textbutton">',a+='<input class="ui-textbutton-input" size="7" type="url" pattern="(mailto:.+@.+|https?://.+\\..+|\\[.*\\].*)" value="nothing" data-bind="css: { withButton: typeof $root.linkDialog !== \'undefined\' }, validatedValue: '+o+", "+d+'" />',a+="<a class=\"ui-textbutton-button\" data-bind=\"visible: typeof $root.linkDialog !== 'undefined', click: typeof $root.linkDialog !== 'undefined' ? $root.linkDialog.bind($element.previousSibling) : false, button: { icons: { primary: 'fa fa-fw fa-ellipsis-h' }, label: 'Opzioni', text: false }\">Opzioni</a>",a+="</div>";else if("integer"==l){var c=0,b=1e3;null!==e&&"undefined"!=typeof e._max&&(b=e._max),null!==e&&"undefined"!=typeof e._min&&(c=e._min);var v=b-c>=100?10:1,y=5*v;a+='<input class="number-spinner" size="7" step="'+v+'" type="number" value="-1" data-bind="spinner: { min: '+c+", max: "+b+", page: "+y+", value: "+o+" }, valueUpdate: ['change', 'spin']"+", "+d+'" />'}else a+='<input size="7" type="text" value="nothing" data-bind="value: '+o+", "+d+'" />';return a+="</label>"},_getGlobalStyleProp=function(e,t,o,n){var i;return("object"!=typeof t||null===t||"undefined"!=typeof t._widget)&&"undefined"!=typeof o&&"undefined"!=typeof n&&n.length>0&&"object"==typeof e&&"undefined"!=typeof e[n]&&(i=e[n]),i},_propEditor=function(e,t,o,n,i,l,a,d,s,r,p,u,f,c,b){if("undefined"==typeof s&&(s=0),"undefined"!=typeof a&&"object"==typeof n&&null!==n&&"undefined"==typeof n._usecount)return console.log("TODO EDITOR ignoring",l,"property because it is not used by the template","prop:",a,"type:",d,"level:",s,e._templateName),"";var v,y="undefined"!=typeof u?a+"._defaultComputed":a,h="",m=y,g=1,_=1;if("object"==typeof n&&null!==n&&"undefined"==typeof n._widget||"undefined"==typeof u&&(g+=1),"undefined"==typeof u&&"undefined"!=typeof r&&(_+=r),"undefined"!=typeof a&&f&&(h+="<!-- ko ifSubs: { data: "+m+", threshold: "+_+", gutter: "+g+"} -->"),"undefined"==typeof a||null!==n&&"undefined"!=typeof n._name||console.log("TODO WARN Missing label for property ",a),"undefined"==typeof a&&null!==n&&"undefined"==typeof n._name&&console.log("TODO WARN Missing label for object ",n.type),"object"==typeof n&&null!==n&&"undefined"==typeof n._widget){var k=_filterProps(n,d,s),S="styler"==d&&null!==n&&"undefined"!=typeof n.customStyle&&"undefined"!=typeof u,w="",$="";"undefined"!=typeof a&&"edit"==d&&(w=", click: function(obj, evt) { $root.selectItem("+a+", $data); return false }, clickBubble: false, css: { selecteditem: $root.isSelectedItem("+a+") }, scrollIntoView: $root.isSelectedItem("+a+"), ",$+=" selectable"),S&&($+=" supportsCustomStyles"),h+='<div class="objEdit level'+s+$+'" data-bind="tooltips: {}'+w+'">';var D=null!==n&&"undefined"!=typeof n._name?n._name:"undefined"!=typeof a?"["+a+"]":"";if(S){var x="Stile";"undefined"!=typeof i&&null!==i&&"undefined"!=typeof i._name?x=i._name:console.log("TODO missing label for theme section ",a,null!==n?n.type:"-"),D="<span class=\"blockSelectionMethod\" data-bind=\"text: customStyle() ? $root.ut('template', '"+utils.addSlashes(D)+"') : $root.ut('template', '"+utils.addSlashes(x)+"')\">Block</span>"}else D="<span data-bind=\"text: $root.ut('template', '"+utils.addSlashes(D)+"')\">"+D+"</span>";v=null!==n&&"undefined"!=typeof n._help?' title="'+utils.addSlashes(n._help)+"\" data-bind=\"attr: { title: $root.ut('template', '"+utils.addSlashes(n._help)+"') }\"":"",("0"==s||"1"==s)&&(h+="<span"+v+' class="objLabel level'+s+'">'+D+"</span>"),"edit"==d&&"undefined"!=typeof n._blockDescription&&(h+="<div class=\"blockDescription\" data-bind=\"html: $root.ut('template', '"+utils.addSlashes(n._blockDescription)+"')\">"+n._blockDescription+"</div>"),S&&(h+='<label class="data-boolean blockCheck" data-bind="tooltips: { }">',h+='<input type="checkbox" value="nothing" data-bind="focusable: true, checked: customStyle" />',h+='<span title="Switch between global and block level styles editing" data-bind="attr: { title: $root.t(\'Switch between global and block level styles editing\') }" class="checkbox-replacer checkbox-replacer-onoff"></span>',h+="</label>",h+="<!-- ko template: { name: 'customstyle', if: customStyle } --><!-- /ko -->"),"undefined"!=typeof a&&(h+="<!-- ko with: "+a+" -->",1==s&&"undefined"!=typeof a&&"undefined"!=typeof n._previewBindings&&"undefined"!=typeof e&&("undefined"!=typeof c&&(h+='<!-- ko with: $root.content() --><div class="objPreview" data-bind="'+c+'"></div><!-- /ko -->'),"undefined"!=typeof b&&(h+='<!-- ko with: $parent --><div class="objPreview" data-bind="'+b+'"></div><!-- /ko -->'),elaborateDeclarations(void 0,n._previewBindings,o,e.bind(this,l+"."))));var j;0===s&&"undefined"!=typeof n._previewBindings&&(j=elaborateDeclarations(void 0,n._previewBindings,o,e.bind(this,l.length>0?l+".":"")));var B,E,O,C,T=h.length;for(B=0;B<k.length;B++)E=l.length>0?l+"."+k[B]:k[B],("object"!=typeof n[k[B]]||null===n[k[B]]||"undefined"!=typeof n[k[B]]._widget)&&(C=void 0,0===s&&"theme"==k[B]?h+=_propEditor(e,t,o,n[k[B]],O,E,k[B],d,0,r,void 0,void 0,f,c):(C=_getGlobalStyleProp(p,n[k[B]],k[B],E),h+=_propEditor(e,t,o,n[k[B]],O,E,k[B],d,s+1,r,p,C,f,c,j)));for(B=0;B<k.length;B++)E=l.length>0?l+"."+k[B]:k[B],"object"==typeof n[k[B]]&&null!==n[k[B]]&&"undefined"==typeof n[k[B]]._widget&&(C=void 0,0===s&&"theme"==k[B]?h+=_propEditor(e,t,o,n[k[B]],O,E,k[B],d,0,r,void 0,void 0,f,c):(C=_getGlobalStyleProp(p,n[k[B]],k[B],E),h+=_propEditor(e,t,o,n[k[B]],O,E,k[B],d,s+1,r,p,C,f,c,j)));var I=h.length-T;if(0===I){if("object"==typeof n&&null!==n&&"template"==n._context)return"";h+='<div class="objEmpty" data-bind="html: $root.t(\'Selected element does not seem to have editable links, buttons or images \')">Selected element does not seem to have editable links, buttons or images</div>'}"undefined"!=typeof a&&(h+="<!-- /ko -->"),h+="</div>"}else{var P=!0;if("undefined"==typeof p&&(P=!1),null===n||"object"!=typeof n||"undefined"!=typeof n._widget){var N=[];"undefined"!=typeof u&&N.push("css: { notnull: "+a+"() !== null }"),v=null!==n&&"undefined"!=typeof n._help?' title="'+utils.addSlashes(n._help)+"\" data-bind=\"attr: { title: $root.ut('template', '"+utils.addSlashes(n._help)+"') }\"":"",v.length>0&&N.push("tooltips: {}");var M=N.length>0?'data-bind="'+utils.addSlashes(N.join())+'"':"";h+='<div class="propEditor '+(P?"checkboxes":"")+'"'+M+">";var G=null!==n&&"undefined"!=typeof n._name?n._name:"undefined"!=typeof a?"["+a+"]":"";G="<span data-bind=\"text: $root.ut('template', '"+utils.addSlashes(G)+"')\">"+G+"</span>",h+="<span"+v+' class="propLabel">'+G+"</span>",h+='<div class="propInput '+("undefined"!=typeof p?"local":"")+'" data-bind="css: { default: '+a+'() === null }">',h+=_propInput(n,a,y,d,t),h+="</div>","undefined"!=typeof u&&(h+='<div class="propInput global" data-bind="css: { overridden: '+a+'() !== null }">',h+=_propInput(n,a,u,d,t),h+="</div>",P&&(h+='<div class="propCheck"><label data-bind="tooltips: {}"><input type="checkbox" data-bind="focusable: true, click: function(evt, obj) { $root.localGlobalSwitch('+a+", "+u+"); return true; }, checked: "+a+'() !== null">',h+='<span class="checkbox-replacer" data-bind="css: { checked: '+a+"() !== null }, attr: { title: $root.t('This style is specific for this block: click here to remove the custom style and revert to the theme value') }\"></span>",h+="</label></div>")),h+="</div>"}else h+=null===n||"object"!=typeof n?'<div class="propEditor unknown">[A|'+a+"|"+typeof n+"]</div>":'<div class="propEditor unknown">[B|'+a+"|"+typeof n+"]</div>"}return"undefined"!=typeof a&&f&&(h+="<!-- /ko -->",h+="<!-- ko ifSubs: { not: true, data: "+m+", threshold: "+_+", gutter: 0 } -->",h+='<span class="label notused">('+a+")</span>",h+="<!-- /ko -->"),h},createBlockEditor=function(e,t,o,n,i,l,a,d,s,r,p,u){"undefined"==typeof p&&(p=!0);var f,c=modelDef.getDef(e,l),b=modelDef.getDef(e,i);"undefined"!=typeof b._previewBindings&&"theme"!=l&&"styler"==a&&(f=elaborateDeclarations(void 0,b._previewBindings,n,modelDef.getBindValue.bind(void 0,e,o,i,i,"")));var v,y="undefined"!=typeof r&&r?e[l]._globalStyles:void 0,h="undefined"!=typeof r&&r?e[l]._globalStyle:void 0;if("undefined"!=typeof h){var m=modelDef.getDef(e,"theme");v=m[h.replace(/^(\$theme|_theme_)\./,"")]}var g=modelDef.getBindValue.bind(void 0,e,o,i,l);g._templateName=l;var _='<div class="editor">';_+='<div class="blockType'+("undefined"!=typeof y?" withdefaults":"")+'">'+c.type+"</div>";var k=_propEditor(g,t,n,c,v,"",void 0,a,u,s,y,h,p,f);k.length>0&&(_+=k),_+="</div>",d(_,l,a)},createBlockEditors=function(e,t,o,n,i,l,a,d){createBlockEditor(e,t,o,n,i,l,"edit",a,d),createBlockEditor(e,t,o,n,i,l,"styler",a,d,!0)},generateEditors=function(e,t,o,n,i){var l,a=e._defs,d=e.templateName,s=e._blocks,r=[];for(l=0;l<s.length;l++)"undefined"!=typeof s[l].container&&r.push(modelDef.generateModel(a,s[l].block)),createBlockEditors(a,t,void 0,o,s[l].root,s[l].block,n,i);return"undefined"!=typeof a.theme&&createBlockEditor(a,t,void 0,o,d,"theme","styler",n,void 0,!1,!1,-1),r};module.exports=generateEditors;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1,"./declarations.js":50,"./model.js":54,"./utils.js":57}],53:[function(require,module,exports){
"use strict";var modelDef=require("./model.js"),wrappedResultModel=function(e){var t=e._defs,o=e.templateName,i=modelDef.getDef(t,o),n=modelDef.generateResultModel(e),a=require("./wrapper.js"),r=a(n,i,t);return r},translateTemplate=function(){var e=require("./parser.js");return e.apply(e,arguments)},generateEditors=function(){var e=require("./editor.js");return e.apply(e,arguments)},checkModel=function(){var e=require("./checkmodel.js");return e.apply(e,arguments)};module.exports={translateTemplate:translateTemplate,wrappedResultModel:wrappedResultModel,generateResultModel:modelDef.generateResultModel,generateEditors:generateEditors,checkModel:checkModel};

},{"./checkmodel.js":49,"./editor.js":52,"./model.js":54,"./parser.js":55,"./wrapper.js":58}],54:[function(require,module,exports){
"use strict";var objExtend=require("./domutils.js").objExtend,console=require("./../../../bower_components/console-browserify/index.js"),_valueSet=function(e,t,o,n){var i=o.indexOf(".");if(-1==i)if("undefined"==typeof t[o])console.log("Undefined prop "+o+" while setting value "+n+" in model._valueSet");else if(null===t[o])"object"==typeof n&&null!==n&&"undefined"==typeof n.push&&console.log("nullpropobjectvalue",o,n),t[o]=n;else if("object"==typeof t[o]&&"function"==typeof t[o].push){var r;if("string"==typeof n){var a=n.match(/^\[(.*)\]$/);if(null===a)throw"Unexpected default value for array property "+o+": "+n;r=a[1].split(",")}else{if("object"!=typeof n||"undefined"==typeof n.push)throw"Unexpected default value for array property "+o+": "+n+" typeof "+typeof n;r=n}for(var l=[],s=0;s<r.length;s++)"@"==r[s].substr(0,1)?l.push(_generateModel(e,r[s].substr(1))):r[s].length>0&&l.push(r[s]);t[o]=l}else"string"==typeof t[o]||"boolean"==typeof t[o]?t[o]=n:"object"==typeof t[o]&&null!==t[o]&&"undefined"!=typeof t[o]._widget?("object"==typeof n&&null!==n&&console.log("objectvalue",o,t[o]._widget,n),t[o]=n):console.log("setting",typeof t[o],t[o],o,n);else{var d=o.substr(0,i);_valueSet(e,t[d],o.substr(i+1),n)}},_modelCreateOrUpdateBlockDef=function(e,t,o,n){if("undefined"!=typeof e[t]&&e[t]._initialized&&!e[t]._writeable)throw console.log("_modelCreateOrUpdateBlockDef",e,t,o,n),"Trying to alter non writeable model: "+t+" / "+o;if("undefined"==typeof e[t]&&(e[t]={_writeable:!0},"undefined"==typeof n&&(n={}),"undefined"==typeof n.category&&"undefined"==typeof e[t]._category&&(n.category=t.match(/(^t|.T)heme$/)||t.match(/(^s|.S)tyle$/)||t.match(/(^c|.C)olor$/)||t.match(/(^r|.R)adius$/)?"style":"content")),"undefined"!=typeof n){if("undefined"!=typeof n.name&&(e[t]._name=n.name),"undefined"!=typeof n.themeOverride&&(e[t]._themeOverride=n.themeOverride),"undefined"!=typeof n.globalStyle){e[t]._globalStyle=n.globalStyle;var i=n.globalStyle.replace(/^(\$theme|_theme_)\./,""),r=i.indexOf("."),a=-1!=r?i.substr(0,r):i;_modelCreateOrUpdateBlockDef(e,"theme",a),("undefined"==typeof e[t]._themeOverride||e[t]._themeOverride)&&_modelCreateOrUpdateBlockDef(e,t,"customStyle=false")}"undefined"!=typeof n.contextName&&(e[t]._context=n.contextName,"block"==n.contextName&&"undefined"==typeof e[t]._globalStyle&&(e[t]._globalStyle="_theme_.bodyTheme",_modelCreateOrUpdateBlockDef(e,"theme","bodyTheme"),("undefined"==typeof e[t]._themeOverride||e[t]._themeOverride)&&_modelCreateOrUpdateBlockDef(e,t,"customStyle=false"))),"undefined"!=typeof n.extend&&(e[t].type=n.extend)}for(var l in n)n.hasOwnProperty(l)&&"undefined"!=typeof n[l]&&-1==["name","extend","contextName","globalStyle","themeOverride"].indexOf(l)&&(e[t]["_"+l]=n[l]);"undefined"!=typeof o&&o.length>0&&(e[t]._props="undefined"!=typeof e[t]._props&&e[t]._props.length>0?e[t]._props+" "+o:o)},_removePrefix=function(e){var t=e.match(/^[^A-Z]+([A-Z])(.*)$/);return null!==t?t[1].toLowerCase()+t[2]:null},_generateModelFromDef=function(e,t){var o={};for(var n in e)if(!n.match(/^_.*/)&&e.hasOwnProperty(n)){var i=e[n];if("object"==typeof i&&null!==i&&"undefined"!=typeof i._complex&&i._complex)o[n]=_generateModelFromDef(i,t);else if("type"==n)o[n]=i;else{if("object"!=typeof i)throw console.error("Unexpected model def",n,i,e),"Unexpected model def ["+n+"]="+i;o[n]=null}}if("undefined"!=typeof e._defaultValues){var r=e._defaultValues;for(var a in r)r.hasOwnProperty(a)&&_valueSet(t,o,a,r[a])}return o},_generateModel=function(e,t){var o=_getModelDef(e,t,!1,!0);return _generateModelFromDef(o,e)},_getDef=function(e,t){return _getModelDef(e,t,!1,!0)},_getModelDef=function(e,t,o,n){if("undefined"==typeof e[t]){if(-1!=t.indexOf(" "))return null;var i=_removePrefix(t);return null!==i?_getModelDef(e,i,o,n):null}var r=e[t];if("object"!=typeof r)throw"Block definition must be an object: found "+r+" for "+t;if("undefined"==typeof r._initialized){if("undefined"==typeof r.type&&(r.type=-1==t.indexOf(" ")?t:t.substr(t.indexOf(" ")+1)),r.type!=t&&"undefined"==typeof r._widget){var a=_getModelDef(e,r.type,!0),l=objExtend(a,r);r=l,e[t]=r}else"undefined"==typeof r._widget&&"undefined"==typeof r._props&&"undefined"==typeof r._complex;r._writeable=!0,r._initialized=!0}if("undefined"!=typeof r._props){var s=r._props;if(s=s.split(" "),s.length>0&&"undefined"==typeof r._writeable)throw console.error("Altering a non writable object ",t,s,r),"Altering a non writable object: "+t+" def: "+s;"undefined"==typeof r._processedDefs&&(r._processedDefs={}),"undefined"==typeof r._globalStyles&&(r._globalStyles={}),"undefined"==typeof r._defaultValues&&(r._defaultValues={});for(var d=0;d<s.length;d++){var c=s[d];if(0!==c.length){var u=c,f=null,p=c.match(/^([^=\[\]]+)(\[\])?(=?)(.*)$/);if(null!==p&&(c=p[1],"[]"==p[2]&&("undefined"==typeof r[c]&&(r[c]=[]),f=[]),"="==p[3]&&(f=c.match(/(^v|V)isible$/)?"true"==String(p[4]).toLowerCase():c.match(/^customStyle$/)?"true"==String(p[4]).toLowerCase():p[4])),null!==f&&"undefined"==typeof r._defaultValues[c]&&(r._defaultValues[c]=f),"undefined"==typeof r[c]){var b=_getModelDef(e,t+" "+c,!0);null===b&&(b=_getModelDef(e,c,!0)),r[c]=b}r._processedDefs[c]=u,r._complex=!0}}delete r._props}if(o){r._writeable=!1;var m=objExtend({},r);return m}if(n)return r._writeable=!1,r;if("undefined"==typeof r._writeable||r._writeable===!1)throw"Retrieving non writeable object definition: "+t;return r},_increaseUseCount=function(e,t){if(e){if("undefined"==typeof t._usecount)throw console.error("ERROR trying to bind an unused property while readonly",t),"ERROR trying to bind an unused property"}else"undefined"==typeof t._usecount&&(t._usecount=0),t._usecount++},ensureGlobalStyle=function(e,t,o,n,i,r,a,l){var s=o(r,a,l);if("undefined"==typeof e[n]._globalStyles[i]){if(t)throw"Cannot find _globalStyle for "+i+" in "+n+"!";(-1!=i.indexOf(".")||"object"==typeof e[n][i]&&"undefined"!=typeof e[n][i]._widget)&&(e[n]._globalStyles[i]=s)}else if(e[n]._globalStyles[i]!=s)throw"Unexpected conflicting globalStyle [2] for "+n+"/"+i+": old="+e[n]._globalStyles[i]+" new="+s},modelEnsurePathAndGetBindValue=function(e,t,o,n,i,r,a,l,s,d){var c,u,f;if("$"==a.substr(0,1)){console.warn("DEPRECATED $ in bindingProvider: ",a,i);var p=a.indexOf(".");if(-1==p)throw"Unexpected fullPath: "+a+"/"+r+"/"+i+"/"+l+"/"+s;if(c=a.substr(1,p-1),f=a.substr(p+1),"theme"!=c)throw"Unexpected $ sequence: "+c+" in "+a;var b=f.indexOf(".");c=f.substr(0,b),f=f.substr(b+1),u="$root.content().theme()."+c+"()."+f.replace(new RegExp("\\.","g"),"().")}else if("#"==a.substr(0,1))console.warn("DEPRECATED # in bindingProvider: ",a,i),c=n,f=a.substr(1),u="$root.content()."+f.replace(new RegExp("\\.","g"),"().");else if("_theme_."==a.substr(0,8)){var m=a.indexOf(".",8);c=a.substr(8,m-8),f=a.substr(m+1),u="$root.content().theme()."+c+"()."+f.replace(new RegExp("\\.","g"),"().")}else"_root_."==a.substr(0,7)?(c=n,f=a.substr(7),u="$root.content()."+f.replace(new RegExp("\\.","g"),"().")):(c=i,f=r+a,u=a.replace(new RegExp("\\.","g"),"()."));if("undefined"==typeof t[c])throw"Cannot find model def for ["+c+"]";var g=f.indexOf("."),h=-1==g?f:f.substr(0,g);if(-1!=c.indexOf("-"))throw console.error("ERROR cannot use - for block names",c),"ERROR unexpected char in block name: "+c;if(-1!=h.indexOf("-"))throw console.error("ERROR cannot use - for property names",h),"ERROR unexpected char in property name: "+c;if(e)return"undefined"!=typeof t[c]._globalStyle&&"undefined"!=typeof t[c][h]&&"style"==t[c][h]._category&&(u+="._defaultComputed"),u;var v;if(e){if("undefined"!=typeof l)throw"Cannot use defaultValue in readonly mode!";if(s)throw"Cannot use overrideDefault in readonly mode for "+c+"/"+f+"/"+s+"!";if("undefined"!=typeof d)throw"Cannot set category for "+c+"/"+f+"/"+d+" in readonly mode!";v=_getModelDef(t,c,!1,!0)}else t[c]._writeable===!1&&console.log("TODO debug use cases for this condition",c,f),v=_getModelDef(t,c,t[c]._writeable===!1);if(null===v)throw"Unexpected model for ["+c+"]";if("undefined"==typeof v[h]){if(e)throw"Cannot find path "+h+" for "+c+"!";_modelCreateOrUpdateBlockDef(t,c,h),v=_getModelDef(t,c,!1)}"undefined"!=typeof t[c]._globalStyle&&"undefined"!=typeof t[c][h]&&null!==t[c][h]&&"style"==t[c][h]._category&&(u+="._defaultComputed");var y=v;try{if(_increaseUseCount(e,y),-1!=g){var k=f;do{var w=k.substr(0,g);if("undefined"==typeof y[w])throw"Found an unexpected prop "+w+" for model "+c+" for "+f;y=y[w],_increaseUseCount(e,y),k=k.substr(g+1),g=k.indexOf(".")}while(-1!=g);if("undefined"==typeof y[k]||null===y[k])throw"Found an unexpected path termination "+k+" for model "+c+" for "+f;y=y[k]}else y=y[f];if("undefined"==typeof y||null===y)throw"Unexpected null model for "+c+"/"+r+"/"+a;"undefined"!=typeof d&&(y._category=d),_increaseUseCount(e,y)}catch(x){throw console.error("TODO ERROR Property lookup exception",x,c,f,i,a,t),x}if("undefined"!=typeof t[c]._globalStyle&&"object"==typeof t[c][h]&&null!==t[c][h]&&"undefined"!=typeof t[c][h]._category&&"style"==t[c][h]._category){var _=modelEnsurePathAndGetBindValue.bind(void 0,e,t,o,n,i,""),$=-1!=f.indexOf(".")?f.substr(f.indexOf(".")):"";if(-1!=$.indexOf(".",1))throw"TODO unsupported object nesting! "+f;var C=t[c]._globalStyle+"."+h;"object"==typeof t[c][h]&&null!==t[c][h]&&"undefined"!=typeof t[c][h]._globalStyle&&(C=t[c][h]._globalStyle),ensureGlobalStyle(t,e,_,c,h,C,void 0,!1);var O=C+$;if("undefined"==typeof l&&null!==t[c]._defaultValues[f]&&(l=t[c]._defaultValues[f]),ensureGlobalStyle(t,e,_,c,f,O,l,s),"undefined"!=typeof l){if(e)throw console.error("Cannot set a new theme default value",O.substr(7),l,"while in readonly mode"),"Cannot set a new theme default value ("+l+") for "+O.substr(7)+" while in readonly mode!";o("default",O.substr(7),l)}l=null}if("undefined"!=typeof l)if("undefined"==typeof t[c]._defaultValues[f]||"undefined"!=typeof s&&s){if(e)throw"Cannot set new _defaultValues [1] for "+f+" in "+c+"!";t[c]._defaultValues[f]=l}else if(null===l){if(e&&null!==t[c]._defaultValues[f])throw"Cannot set new _defaultValues [2] for "+f+" in "+c+"!";t[c]._defaultValues[f]=null}else if(t[c]._defaultValues[f]!=l)throw console.error("TODO error!!! Trying to set a new default value for "+c+" "+f+" while it already exists (current: "+t[c]._defaultValues[f]+", new: "+l+")"),"Trying to set a new default value for "+c+" "+f+" while it already exists (current: "+t[c].defaultValues[f]+", new: "+l+")";return u},generateResultModel=function(e){var t=e._defs,o=e.templateName,n=_generateModel(t,o);return"undefined"!=typeof t.theme&&(n.theme=_generateModel(t,"theme")),n};module.exports={ensurePathAndGetBindValue:modelEnsurePathAndGetBindValue.bind(void 0,!1),getBindValue:modelEnsurePathAndGetBindValue.bind(void 0,!0),generateModel:_generateModel,generateResultModel:generateResultModel,getDef:_getDef,createOrUpdateBlockDef:_modelCreateOrUpdateBlockDef};

},{"./../../../bower_components/console-browserify/index.js":1,"./domutils.js":51}],55:[function(require,module,exports){
(function (global){
"use strict";function conditional_replace(e){return e.replace(/<!--\[if ([^\]]*)\]>((?:(?!--)[\s\S])*?)<!\[endif\]-->/g,function(e,t,o){var i="<!-- cc:start -->";i+=o.replace(/<([A-Za-z:]+)/g,"<!-- cc:bo:$1 --><cc").replace(/<\/([A-Za-z:]+)>/g,"<!-- cc:bc:$1 --></cc><!-- cc:ac:$1 -->").replace(/\/>/g,"/><!-- cc:sc -->"),i+="<!-- cc:end -->";var n='<replacedcc condition="'+t+'" style="display: none">';return n+=$("<div>").append($(i)).html().replace(/^<!-- cc:start -->/,"").replace(/<!-- cc:end -->$/,""),n+="</replacedcc>"})}var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),console=require("./../../../bower_components/console-browserify/index.js"),converterUtils=require("./utils.js"),elaborateDeclarations=require("./declarations.js"),processStylesheetRules=require("./stylesheet.js"),modelDef=require("./model.js"),domutils=require("./domutils.js"),wrapElementWithCondition=function(e,t,o){var i=domutils.getAttribute(t,e);try{var n=converterUtils.conditionBinding(i,o);$(t).before("<!-- ko if: "+n+" -->"),$(t).after("<!-- /ko -->"),domutils.removeAttribute(t,e)}catch(a){throw console.warn("Model ensure path failed in if/variant",t,i,e),a}},replacedAttributes=function(e,t){domutils.setAttribute(e,t,domutils.getAttribute(e,"replaced"+t))},processStyle=function(e,t,o,i){var n,a=domutils.getAttribute(e,"replacedstyle"),r=null;i&&(n={uniqueId:"$data",attr:{id:"id"}});var l=null!==domutils.getAttribute(e,"data-ko-display");r=elaborateDeclarations(a,void 0,t,o,e,n,l),null===r?r=a:domutils.removeAttribute(e,"replacedstyle"),null!==r&&(r.trim().length>0?domutils.setAttribute(e,"style",r):domutils.removeAttribute(e,"style"))},_fixRelativePath=function(e,t,o,i){var n=domutils.getAttribute(i,e),a=t(n);null!==a&&domutils.setAttribute(i,e,a)},processBlock=function(e,t,o,i,n,a,r,l,s,d){try{var c;if("block"==a)c=domutils.getAttribute(e,"data-ko-block"),domutils.removeAttribute(e,"data-ko-block");else{if("template"!=a)throw"Unexpected context name while processing block: "+a;c=r}$("[data-ko-remove]",e).remove();for(var u=$("[data-ko-block]",e).replaceWith("<replacedblock>"),f=["href","src","data-ko-placeholder-src","background"],p=0;p<f.length;p++){var m=_fixRelativePath.bind(void 0,f[p],n);$("["+f[p]+"]",e).each(m)}var b=domutils.getAttribute(e,"data-ko-properties");null===b&&(b=""),$("[data-ko-properties]",e).each(function(e,t){b.length>0&&(b+=" "),b+=domutils.getAttribute(t,"data-ko-properties"),domutils.removeAttribute(t,"data-ko-properties")}),modelDef.createOrUpdateBlockDef(t,c,b,{contextName:a});var g=modelDef.ensurePathAndGetBindValue.bind(void 0,t,o,r,c,"");"block"==a&&g("id",""),$("style",e).each(function(e,i){var a=domutils.getInnerHtml(i),l=modelDef.createOrUpdateBlockDef.bind(void 0,t),s=modelDef.ensurePathAndGetBindValue.bind(void 0,t,o,r),u=processStylesheetRules(a,void 0,s,l,o,n,r,c);if(u!=a)if(""!==u.trim()){var f=d(u);domutils.setAttribute(i,"data-bind","template: { name: '"+f+"' }"),domutils.setContent(i,"")}else domutils.removeElements($(i))}),processStyle(e,n,g,s);for(var h=["data-ko-display","data-ko-editable","data-ko-wrap","href"],v=0;v<h.length;v++){var k=domutils.getAttribute(e,h[v]);if(k)throw console.warn("ERROR: Unsupported "+h[v]+" used together with data-ko-block",e),"ERROR: Unsupported "+h[v]+" used together with data-ko-block"}return $("[data-ko-link]",e).each(function(e,t){var o=domutils.getAttribute(t,"data-ko-link"),i=domutils.getAttribute(t,"replacedstyle");("undefined"==typeof i||null===i)&&(i=""),i=""!==i?"-ko-attr-href: @"+o+"; "+i:"-ko-attr-href: @"+o,domutils.setAttribute(t,"replacedstyle",i),domutils.setAttribute(t,"data-ko-wrap",o),domutils.removeAttribute(t,"data-ko-link")}),$("[replacedstyle]",e).each(function(e,t){processStyle(t,n,g,!1)}),$("[replacedhttp-equiv]",e).each(function(e,t){replacedAttributes(t,"http-equiv")}),$("[data-ko-display]",e).each(function(e,t){wrapElementWithCondition("data-ko-display",t,g)}),$("[data-ko-editable]",e).each(function(e,t){var o,i,n,a,r,l,s=domutils.getAttribute(t,"data-ko-editable");if(s.lastIndexOf(".")>0){var c=s.substr(0,s.lastIndexOf("."));r=g(c)}else r=g(s);if(l="wysiwygClick: function(obj, evt) { $root.selectItem("+r+", $data); return false }, clickBubble: false, wysiwygCss: { selecteditem: $root.isSelectedItem("+r+") }, scrollIntoView: $root.isSelectedItem("+r+")","img"!=domutils.getLowerTagName(t)){i=domutils.getInnerHtml(t);var u=g(s,i,!0,"wysiwyg");if(o="",domutils.getAttribute(t,"id")||(o+="wysiwygId: id()+'_"+s.replace(".","_")+"', "),"undefined"!=typeof l&&(o+=l+", "),o+="wysiwygOrHtml: "+u,"td"==domutils.getLowerTagName(t)){var f=$('<div data-ko-wrap="false" style="width: 100%; height: 100%"></div>')[0];domutils.setAttribute(f,"data-bind",o);var p=domutils.getInnerHtml($("<div></div>").append(f));domutils.setContent(t,p)}else n=domutils.getAttribute(t,"data-bind"),a=(null!==n?n+", ":"")+o,domutils.setAttribute(t,"data-bind",a),domutils.setContent(t,"");domutils.removeAttribute(t,"data-ko-editable")}else{var m=domutils.getAttribute(t,"width");if(""===m&&(m=null),null===m)throw console.error("ERROR: data-ko-editable images must declare a WIDTH attribute!",t),"ERROR: data-ko-editable images must declare a WIDTH attribute!";var b=domutils.getAttribute(t,"height");""===b&&(b=null);var h=domutils.getAttribute(t,"align");n=domutils.getAttribute(t,"data-bind");var v=n&&n.match(/virtualAttr: {[^}]* height: ([^,}]*)[,}]/);v&&(b=v[1]);var k=n&&n.match(/virtualAttr: {[^}]* width: ([^,}]*)[,}]/);k&&(m=k[1]);var y;i=domutils.getAttribute(t,"data-ko-placeholder-src");var w="";i?w=domutils.getAttribute(t,"src"):i=domutils.getAttribute(t,"src");var x;m&&b?x=m+"+'x'+"+b:b?m||(x="'h'+"+b+"+''"):x="'w'+"+m+"+''";var _,C=b||domutils.getAttribute(t,"data-ko-placeholder-height"),T=m||domutils.getAttribute(t,"data-ko-placeholder-width");if(domutils.removeAttribute(t,"src"),domutils.removeAttribute(t,"data-ko-editable"),domutils.removeAttribute(t,"data-ko-placeholder-height"),domutils.removeAttribute(t,"data-ko-placeholder-width"),domutils.removeAttribute(t,"data-ko-placeholder-src"),i&&(_="{ width: "+T+", height: "+C+", text: "+x+"}"),!T||!C)throw console.error("IMG data-ko-editable must declare width and height attributes, or their placeholder counterparts data-ko-placeholder-width/data-ko-placeholder-height",t),"ERROR: IMG data-ko-editable MUST declare width and height attributes, or their placeholder counterparts data-ko-placeholder-width/data-ko-placeholder-height";var S=g(s,w,!1,"wysiwyg");o="wysiwygSrc: { width: "+m+", height: "+b+", src: "+S+", placeholder: "+_+" }",a=(null!==n?n+", ":"")+o,domutils.setAttribute(t,"data-bind",a);var O=d(t),A="{ width: "+m;"left"==h?A+=", float: 'left'":"right"==h?A+=", float: 'right'":"center"==h?console.log("non so cosa fa align=center su una img e quindi non so come simularne l'editing"):"top"==h?A+=", verticalAlign: 'top'":"middle"==h?A+=", verticalAlign: 'middle'":"bottom"==h&&(A+=", verticalAlign: 'bottom'"),A+="}",$(t).before("<!-- ko wysiwygImg: { _data: $data, _item: "+r+", _template: '"+O+"', _editTemplate: 'img-wysiwyg', _src: "+S+", _width: "+m+", _height: "+b+", _align: "+(null===h?void 0:"'"+h+"'")+", _size: "+x+", _method: "+y+", _placeholdersrc: "+_+", _stylebind: "+A+" } -->"),$(t).after("<!-- /ko -->")}}),$("[href]",e).each(function(e,t){var o=domutils.getAttribute(t,"href"),i="wysiwygHref: '"+converterUtils.addSlashes(o)+"'",n=domutils.getAttribute(t,"data-bind"),a=(null!==n?n+", ":"")+i;domutils.setAttribute(t,"data-bind",a)}),$("replacedblock",e).each(function(e,a){var s=u[e],f=processBlock(s,t,o,i,n,"block",c,l,!0,d),p=modelDef.ensurePathAndGetBindValue(t,o,r,c,"",f);$(a).before("<!-- ko block: { data: "+converterUtils.addSlashes(p)+", template: 'block' } -->"),$(a).after("<!-- /ko -->"),$(a).remove()}),$($("[data-ko-wrap]",e).get().reverse(),e).each(function(e,t){var o=domutils.getAttribute(t,"data-ko-wrap");if("undefined"==typeof o||""===o||"true"===o)throw"Unsupported empty value for data-ko-wrap: use false value if you want to always remove the tag";var i,n,a=converterUtils.conditionBinding(o,g),r=domutils.getAttribute(t,"data-bind");if(""!==r&&null!==r&&r.match(/(block|wysiwygOrHtml):/)){var l="<!-- ko "+r+" -->"+domutils.getInnerHtml(t)+"<!-- /ko -->";i=d(l),domutils.removeAttribute(t,"data-ko-wrap"),n=d(t),domutils.replaceHtml(t,"<!-- ko template: /* special */ (typeof templateMode != 'undefined' && templateMode == 'wysiwyg') || "+a+" ? '"+n+"' : '"+i+"' --><!-- /ko -->")}else i=d(domutils.getInnerHtml(t)),domutils.removeAttribute(t,"data-ko-wrap"),domutils.setContent(t,"<!-- ko template: '"+i+"' --><!-- /ko -->"),n=d(t),domutils.replaceHtml(t,"<!-- ko template: (typeof templateMode != 'undefined' && templateMode == 'wysiwyg') || "+a+" ? '"+n+"' : '"+i+"' --><!-- /ko -->")}),d(e,c,"show"),i(r,c,a,l),c}catch(y){throw console.error("Exception while parsing the template",y,e),y}},translateTemplate=function(e,t,o,i){var n={},a=conditional_replace(t.replace(/(<[^>]+\s)(style|http-equiv)(="[^"]*"[^>]*>)/gi,function(e,t,o,i){return t+"replaced"+o+i})),r=$(a),l=r[0],s=[],d=function(e,t,o,i){s.push({root:e,block:t,context:o,container:i})},c=function(e,t,o){if("undefined"==typeof n.themes&&(n.themes={}),"undefined"==typeof n.themes[e]&&(n.themes[e]={}),"undefined"==typeof n.themes[e][t]||null===n.themes[e][t])n.themes[e][t]=o;else if("undefined"!=typeof o&&null!==o){var i=n.themes[e][t];i!=o&&console.log("Error setting a new default for property "+t+" in theme "+e+". old:"+i+" new:"+o+"!")}},u=$("[data-ko-container]",r),f={};u.each(function(e,t){var o=domutils.getAttribute(t,"data-ko-container")+"Blocks";domutils.removeAttribute(t,"data-ko-container"),domutils.setAttribute(t,"data-bind","block: "+o);var i=$("> [data-ko-block]",t);domutils.removeElements(i,!0),f[o]=i}),modelDef.createOrUpdateBlockDef(n,"id"),modelDef.createOrUpdateBlockDef(n,"bodyTheme"),modelDef.createOrUpdateBlockDef(n,"blocks","blocks[]"),modelDef.createOrUpdateBlockDef(n,"text"),processBlock(l,n,c,d,o,"template",e,void 0,!1,i);var p=function(t,a,r){processBlock(r,n,c,d,o,"block",e,t,!0,i)};for(var m in f)if(f.hasOwnProperty(m)){var b=f[m],g=m;modelDef.ensurePathAndGetBindValue(n,c,e,e,"",g+".blocks","[]"),b.each(p.bind(void 0,g))}var h={_defs:n,templateName:e,_blocks:s};return"undefined"!=typeof n[e]._version&&(h.version=n[e]._version),h};module.exports=translateTemplate;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1,"./declarations.js":50,"./domutils.js":51,"./model.js":54,"./stylesheet.js":56,"./utils.js":57}],56:[function(require,module,exports){
"use strict";var cssParse=require("./../../../bower_components/mensch/lib/parser.js"),console=require("./../../../bower_components/console-browserify/index.js"),converterUtils=require("./utils.js"),elaborateDeclarations=require("./declarations.js"),_processStyleSheetRules_processBlockDef=function(e,t){for(var o,n,i,r=0;r<t.length;r++)if("rule"==t[r].type){for(var a=t[r].selectors,l=!1,s=!1,d=0;d<a.length;d++)a[d].match(/:preview$/)?s=!0:l=!0;if(s&&l)throw console.log("cannot mix selectors type (:preview and declarations) in @supports -ko-blockdefs ",a),"Cannot mix selectors type (:preview and declarations) in @supports -ko-blockdefs";if(!s&&!l)throw console.log("cannot find known selectors in @supports -ko-blockdefs ",a),"Cannot find known selectors in @supports -ko-blockdefs";if(l){o="",n={},i=t[r].declarations;for(var u=0;u<i.length;u++)"property"==i[u].type&&("label"==i[u].name?n.name=i[u].value:"context"==i[u].name?n.contextName=i[u].value:"properties"==i[u].name?o=i[u].value:"theme"==i[u].name?n.globalStyle="_theme_."+i[u].value:"themeOverride"==i[u].name?n.themeOverride="true"==String(i[u].value).toLowerCase():n[i[u].name]=i[u].value);for(var c=0;c<a.length;c++)e(a[c],o,n)}if(s)for(var f=0;f<a.length;f++){var p=a[f].substr(0,a[f].indexOf(":")),b=t[r].declarations;e(p,void 0,{previewBindings:b})}}},processStylesheetRules=function(e,t,o,n,i,r,a,l){var s=e,d=null;if("undefined"==typeof t){var u=cssParse(e,{comments:!0,position:!0});if("stylesheet"!=u.type||"undefined"==typeof u.stylesheet)throw console.log("unable to process styleSheet",u),"Unable to parse stylesheet";t=u.stylesheet.rules}for(var c,f=t.length-1;f>=0;f--){if("supports"==t[f].type&&"-ko-blockdefs"==t[f].name)_processStyleSheetRules_processBlockDef(n,t[f].rules),s=converterUtils.removeStyle(s,t[f].position.start,d,0,0,0,"");else if("media"==t[f].type||"supports"==t[f].type)s=processStylesheetRules(s,t[f].rules,o,n,i,r,a,l);else if("comment"==t[f].type);else if("rule"==t[f].type){for(var p=t[f].selectors,b="",m=null,g=0;g<p.length;g++){b.length>0&&(b+=", ");var h=p[g].match(/\[data-ko-block=([^ ]*)\]/);if(null!==h){if(null!==m&&m!=h[1])throw"Found multiple block-match attribute selectors: cannot translate it ("+m+" vs "+h[1]+")";m=h[1]}b+="<!-- ko text: templateMode =='wysiwyg' ? '#main-wysiwyg-area ' : '' --><!-- /ko -->"+p[g]}if(m){var v="<!-- ko foreach: $root.findObjectsOfType($data, '"+m+"') -->",y="<!-- /ko -->",k=d,w=" ";t[f].declarations.length>0&&(t[f].declarations[0].position.start.line!=t[f].position.end.line&&(w="\n"+new Array(t[f].position.start.col).join(" ")),k=t[f].declarations[t[f].declarations.length-1].position.end),null===k?s+=w+y:s=k==d?converterUtils.removeStyle(s,k,d,0,0,0,w+y):converterUtils.removeStyle(s,k,d,0,0,0,w+"}"+w+y),b=v+w+b.replace(new RegExp("\\[data-ko-block="+m+"\\]","g"),"<!-- ko text: '#'+id() -->"+m+"<!-- /ko -->"),n(m,"",{contextName:"block"})}var _=m?m:l;c=o.bind(this,_,"");var x=elaborateDeclarations(s,t[f].declarations,r,c);null!==x&&(s=x),s=converterUtils.removeStyle(s,t[f].position.start,t[f].position.end,0,0,0,b)}else console.log("Unknown rule type",t[f].type,"while parsing <style> rules");d=t[f].position.start}return s};module.exports=processStylesheetRules;

},{"./../../../bower_components/console-browserify/index.js":1,"./../../../bower_components/mensch/lib/parser.js":15,"./declarations.js":50,"./utils.js":57}],57:[function(require,module,exports){
"use strict";var console=require("./../../../bower_components/console-browserify/index.js"),jsep=require("./../../../bower_components/jsep/src/jsep.js");jsep.addBinaryOp("or",1),jsep.addBinaryOp("and",2),jsep.addBinaryOp("eq",6),jsep.addBinaryOp("neq",6),jsep.addBinaryOp("lt",7),jsep.addBinaryOp("lte",7),jsep.addBinaryOp("gt",7),jsep.addBinaryOp("gte",7);var addSlashes=function(e){return e.replace(/[\\"']/g,"\\$&").replace(/\u0000/g,"\\0")},removeStyle=function(e,t,o,n,i,r,a){for(var l=e.split("\n"),s=i,d=r,u=1+n;u<t.line;u++)s+=l[u-1-n].length+1;if(s+=t.col,null!==o){for(var c=1+n;c<o.line;c++)d+=l[c-1-n].length+1;d+=o.col}else d+=e.length+1;var f=e.substr(0,s-1)+a+e.substr(d-1);return f},expressionGenerator=function(e,t,o){function n(e){switch(e){case"or":return"||";case"and":return"&&";case"lt":return"<";case"lte":return"<=";case"gt":return">";case"gte":return">=";case"eq":return"==";case"neq":return"!=";default:return e}}function i(e,t,o,r){if("undefined"==typeof o&&(o=!0),"undefined"!=typeof r&&"Identifier"!==e.type&&"MemberExpression"!==e.type&&console.log("Cannot apply default value to variable when using expressions"),"BinaryExpression"===e.type||"LogicalExpression"===e.type)return"("+i(e.left,t,o)+" "+n(e.operator)+" "+i(e.right,t,o)+")";if("CallExpression"===e.type){var a=e.arguments.map(function(e){return i(e,t,o)});return i(e.callee,t,o)+"("+a.join(", ")+")"}if("UnaryExpression"===e.type)return e.operator+i(e.argument,t,o);if("MemberExpression"==e.type&&e.computed)throw"Unexpected computed member expression";if("MemberExpression"!=e.type||e.computed){if("Literal"===e.type)return e.raw;if("Identifier"===e.type){var l=e.name;return o?t(l,r)+"()":l}if("ConditionalExpression"===e.type)return"("+i(e.test,t,o)+" ? "+i(e.consequent,t,o)+" : "+i(e.alternate,t,o)+")";throw"Compound"===e.type?"Syntax error in expression: operator expected after "+i(e.body[0],t,!1):"Found an unsupported expression type: "+e.type}var s=i(e.object,t,!1)+"."+i(e.property,t,!1);return o&&"Math"!==e.object.name&&"Color"!==e.object.name&&"Util"!==e.object.name?t(s,r)+"()":s}return i(e,t,void 0,o)},expressionBinding=function(e,t,o){var n;if("undefined"!=typeof o&&null!==o){var i=e.trim().replace(/@\[([^\]]+)\]|@([a-zA-Z0-9\._]+)\b/g,"###var###");if(i=i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),"###var###"==i)n=[null,o];else if(i="^"+i.replace(/###var###/g,"(.+)")+"$",n=o.trim().match(new RegExp(i)),!n)throw console.log("Cannot find matches",n,"for",o,e,i,e),"Cannot find default value for "+e+" in "+o}try{var r=0,a="'"+e.replace(/@\[([^\]]+)\]|@([a-zA-Z0-9\._]+)\b|(')/g,function(e,o,i,a){if(a)return"\\"+a;r++;var l,s=o||i;if(n&&("undefined"!=typeof n[r]?l=n[r].trim():console.log("ABZZZ Cannot find default value for",s,"in",n,"as",r)),o){var d=jsep(o),u=expressionGenerator(d,t,l);return"'+"+u+"+'"}return"'+"+t(s,l)+"()+'"})+"'";return a=a.replace(/(^|[^\\])''\+/g,"$1").replace(/\+''/g,""),0===r&&"false"!==a&&"true"!==a&&console.error("Unexpected expression with no valid @variable references",e),a}catch(l){throw"Exception parsing expression "+e+" "+l}},conditionBinding=function(e,t){var o=jsep(e),n=expressionGenerator(o,t);return n};module.exports={addSlashes:addSlashes,removeStyle:removeStyle,conditionBinding:conditionBinding,expressionBinding:expressionBinding};

},{"./../../../bower_components/console-browserify/index.js":1,"./../../../bower_components/jsep/src/jsep.js":3}],58:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),kowrap=require("./../../../bower_components/knockout.wrap/knockout.wrap.js"),console=require("./../../../bower_components/console-browserify/index.js"),_getOptionsObject=function(e){for(var t=e.split("|"),o={},n=0;n<t.length;n++){var i=t[n].split("=");o[i[0]]=i.length>1?i[1]:i[0]}return o},_makeComputed=function(e,t,o,n,i,r){var a=ko.computed({read:function(){var o=e();if(null===o){var a=ko.utils.unwrapObservable(n);return"undefined"==typeof a||"custom"==a?ko.utils.unwrapObservable(t):r[a][i]}return o},write:function(a){var l,s=ko.utils.unwrapObservable(n);if(l="undefined"==typeof s||"custom"==s?ko.utils.peekObservable(t):r[s][i],o)a==l?e(null):e(a);else{var d=ko.utils.peekObservable(e);(a!=l||null!==d)&&e(a)}}});return a},_nextVariantFunction=function(e,t,o){for(var n,i=e.utils.unwrapObservable(t),r=0;r<o.length&&(n=e.utils.peekObservable(o[r]),n!=i);r++);r==o.length&&(console.warn("Didn't find a variant!",t,i,o),r=o.length-1);var a=r+1;a==o.length&&(a=0);var l=e.utils.peekObservable(o[a]);t(l)},_getVariants=function(e){var t,o=e._variant;if("object"!=typeof e[o]||"undefined"==typeof e[o]._widget||"string"!=typeof e[o]._options&&"boolean"!==e[o]._widget)throw console.error("Unexpected variant declaration",o,e[o]),"Unexpected variant declaration: cannot find property "+o+" or its _options string and it is not a boolean";return t="string"==typeof e[o]._options?Object.keys(_getOptionsObject(e[o]._options)):[!0,!1]},_makeComputedFunction=function(e,t,o,n,i,r,a){if("undefined"==typeof e){if("undefined"==typeof n.utils.unwrapObservable(a).type)throw console.log("TODO ERROR Found a non-typed def ",e,a),"Found a non-typed def "+e;var l=n.utils.unwrapObservable(n.utils.unwrapObservable(a).type);e=t[l],"object"!=typeof e&&console.log("TODO ERROR Found a non-object def ",e,"for",l)}"undefined"==typeof i&&"undefined"!=typeof r&&r&&(i=a);var s="$root.content().",d=e._globalStyles;if("undefined"!=typeof d)for(var c in d)if(d.hasOwnProperty(c)){var u,f,p,b="$root.content().theme().scheme";if(d[c].substr(0,s.length)!=s)throw"UNEXPECTED globalStyle path ("+d[c]+") outside selfPath ("+s+")";p=d[c].substr(s.length),f=i,b.substr(0,s.length)==s?u=b.substr(s.length):(console.log("IS THIS CORRECT?",b,s),u=b);for(var m=f,g=p.split("()."),h="",v=!0,y=0;y<g.length;y++)f=n.utils.unwrapObservable(f)[g[y]],v?"theme"==g[y]&&(v=!1):(h.length>0&&(h+="."),h+=g[y]);for(var k=u.split("()."),w=0;w<k.length;w++)m=n.utils.unwrapObservable(m)[k[w]];for(var _=!0,x=c.split("."),$=a,C=0;C<x.length;C++)$=n.utils.unwrapObservable($)[x[C]];if(!n.isObservable($))throw"Unexpected non observable target "+c+"/"+h;$._defaultComputed=_makeComputed($,f,_,m,h,o)}if("undefined"!=typeof e._variant){for(var O=e._variant.split("."),S=a,T=n.utils.unwrapObservable(a),A=0;A<O.length;A++)S=n.utils.unwrapObservable(S)[O[A]];if("undefined"!=typeof S._defaultComputed&&(console.log("Found variant on a style property: beware variants should be only used on content properties because they don't match the theme fallback behaviour",e._variant),S=S._defaultComputed),"undefined"==typeof S)throw console.log("ERROR looking for variant target",e._variant,a),"ERROR looking for variant target "+e._variant;T._nextVariant=_nextVariantFunction.bind(S,n,S,_getVariants(e))}for(var E in e)if(e.hasOwnProperty(E)){var H=e[E];if("object"==typeof H&&null!==H&&"undefined"!=typeof H._context&&"block"==H._context){var M=i[E](),P=_makeComputedFunction(t[E],t,o,n,i,r,M);a[E](P)}else if("object"==typeof H&&null!==H&&"blocks"==H.type){for(var D,q,I,B=i[E](),j=B.blocks(),R=0;R<j.length;R++)D=n.utils.unwrapObservable(j[R]),q=n.utils.unwrapObservable(D.type),I=_makeComputedFunction(t[q],t,o,n,i,r,D),j[R](I);var U=B.blocks;_augmentBlocksObservable(U,_blockInstrumentFunction.bind(B,void 0,t,o,n,void 0,i,r)),i[E]._wrap=_makeBlocksWrap.bind(i[E],U._instrumentBlock),i[E]._unwrap=_unwrap.bind(i[E])}}return a},_augmentBlocksObservable=function(e,t){e._instrumentBlock=t,"undefined"==typeof e.origPush&&(e.origPush=e.push,e.push=_makePush.bind(e),e.origSplice=e.splice,e.splice=_makeSplice.bind(e))},_makeBlocksWrap=function(e,t){var o=ko.toJS(t),n=o.blocks;o.blocks=[];var i=kowrap.fromJS(o,void 0,!0)();_augmentBlocksObservable(i.blocks,e);for(var r=0;r<n.length;r++){var a=ko.toJS(n[r]);a.id="block_"+r,i.blocks.push(a)}this(i)},_makePush=function(){if(arguments.length>1)throw"Array push with multiple arguments not implemented";if(arguments.length>0&&ko.isObservable(arguments[0])&&("function"==typeof arguments[0]._unwrap?arguments[0]=arguments[0]._unwrap():console.log("WARN: pushing observable with no _unwrap function (TODO remove me, expected condition)")),ko.isObservable(arguments[0]))return this.origPush.apply(this,arguments);var e=this._instrumentBlock(arguments[0]);return this.origPush.apply(this,[e])},_makeSplice=function(){if(arguments.length>3)throw"Array splice with multiple objects not implemented";if(arguments.length>2&&ko.isObservable(arguments[2])&&("function"==typeof arguments[2]._unwrap?arguments[2]=arguments[2]._unwrap():console.log("WARN: splicing observable with no _unwrap function (TODO remove me, expected condition)")),arguments.length>2&&!ko.isObservable(arguments[2])){var e=this._instrumentBlock(arguments[2]);return this.origSplice.apply(this,[arguments[0],arguments[1],e])}return this.origSplice.apply(this,arguments)},_blockInstrumentFunction=function(e,t,o,n,i,r,a,l){"undefined"==typeof i&&(i=l);var s;s={"":_makeComputedFunction.bind(i,e,t,o,n,r,a)};var d=kowrap.fromJS(i,s,!0);return d._unwrap=_unwrap.bind(d),d},_wrap=function(e,t){var o=ko.utils.unwrapObservable(e(ko,t,void 0,!0));this(o)},_unwrap=function(){return ko.toJS(this)},_modelInstrument=function(e,t,o){var n=_blockInstrumentFunction.bind(void 0,t,o,o.themes),i=n(ko,e,void 0,!0);return i._wrap=_wrap.bind(i,n),i._unwrap=_unwrap.bind(i),i};module.exports=_modelInstrument;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1,"./../../../bower_components/knockout.wrap/knockout.wrap.js":10}],59:[function(require,module,exports){
function renderLogo(){$(".l-sidebar").hasClass("collapsed")?$(".logo").css("left",$(".m-content").outerWidth()/2-62):$(".logo").css("left",$(".m-content").outerWidth()/2-62+230)}function renderView(){var e='<div class="r-sidebar-toggle"><i class="fa fa-spin fa-gear"></i></div>';$(window).width()<980?($("body").addClass("mobile-view"),$(".r-sidebar").not(".r-sidebar-placeholder").prepend(e)):($("body").removeClass("mobile-view"),$(".r-sidebar").find(".r-sidebar-toggle").remove()),renderLogo()}function toggleSupport(){$(".m-content").width()<670?$(".support-phone .support").hide():$(".support-phone .support").show()}function deleteCheckedButton(){$(".remove-checkboxes .remove-checkbox-placeholder").is(":checked")?$(".delete-checked").show():$(".delete-checked").hide(),console.log($(".remove-checkboxes input:checkbox:checked").length)}function toggleAllCheckboxesStatus(){var e=$(".remove-checkboxes .remove-checkbox-placeholder").length,i=$(".remove-checkboxes .remove-checkbox-placeholder:checked").length,a=$(".all-remove-checkboxes");console.log("all : "+e),console.log("checked : "+i),0==i?(a.prop("checked",!1),a.css("opacity","1")):i>0&&e>i?(a.prop("checked",!0),a.css("opacity","0.5")):i>=e&&(a.prop("checked",!0),a.css("opacity","1"))}function resizeTemplates(){var e=$(".m-content").width();715>e?$(".template, .template-placeholder").css({width:"100%","min-width":"0"}):900>e?$(".template, .template-placeholder").css({width:"calc(33.3% - 15px)","min-width":"230px"}):1180>e?$(".template, .template-placeholder").css("width","calc(25% - 15px)"):1414>e?$(".template, .template-placeholder").css("width","calc(20% - 15px)"):e>1414&&$(".template, .template-placeholder").css("width","calc(16.6% - 15px)")}function tableScrollable(){$(".table-responsive").each(function(){$(this).width()>$(".m-content .content").width()?$(this).addClass("table-scrollable"):$(this).removeClass("table-scrollable")})}function emailValidation(e){$("#"+e).addClass("is-invalid"),isInvalid.length||($("#"+e).siblings("h5.form-text").remove(),emailError.insertAfter($("#"+e)))}function regularValidation(e){""==$("#"+e+".required").val()?$("#"+e).addClass("is-invalid"):$("#"+e).removeClass("is-invalid")}function validateForm(e,i){e.hasClass("is-invalid")?i.prop("disabled",!0):i.prop("disabled",!1)}function validateCampaignForm(){return $("#campaignName").hasClass("is-invalid")||$("#campaignSubject").hasClass("is-invalid")||!$("#fromEmail").hasClass("is-valid")||$("#fromName").hasClass("is-invalid")||!$("#replyToEmail").hasClass("is-valid")?($("#send-campaign").prop("disabled",!0),!1):($("#send-campaign").prop("disabled",!1),void 0)}function validateSimpleCampaignForm(){$("#fromName").hasClass("is-invalid")||$("#campaignSubject").hasClass("is-invalid")||!$("#fromEmail").hasClass("is-valid")?($("#send-simple-campaign").prop("disabled",!0),console.log("blea")):($("#send-simple-campaign").prop("disabled",!1),console.log("hui"))}function validateTemplateForm(){return $("#templateName").hasClass("is-invalid")||$("#templateDesc").hasClass("is-invalid")||""==$("#templateName").val()||""==$("#templateDesc").val()?($("#save-template-confirm").prop("disabled",!0),!1):($("#save-template-confirm").prop("disabled",!1),void 0)}function clearInputs(e){$("form#"+e+" input").val(""),$("form#"+e+" input").removeClass("is-valid"),$("form#"+e+" input").removeClass("is-invalid"),$("form#"+e+" input").prop("readonly",!1),$("form#"+e+" input").siblings("h5.form-text").remove()}var verifyEmail=$("<h5 class='form-text warning-feedback'>Since replies to your campaign will go to this email address, let's verify <a id='verify-email'><u>this email</u></a></h5>"),verifySuccess=$("<h5 class='form-text valid-feedback'>An email has been sent to this email address.<br> Please check your inbox and confirm the 'From Email' of your campaign.</h5>"),emailError=$("<h5 class='form-text invalid-feedback'>Please enter a valid email address</a></h5>"),email_regex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,isInvalid=$(this).siblings(".invalid-feedback").length,isValid=$(this).siblings(".valid-feedback").length,isWarning=$(this).siblings(".warning-feedback").length,DMARC=!1;$(window).resize(function(){renderView(),setTimeout(function(){toggleSupport(),tableScrollable(),resizeTemplates()},300)}),$(document).ready(function(){renderView(),setTimeout(function(){toggleSupport(),tableScrollable(),resizeTemplates()},300),"true"!==document.cookie.replace(/(?:(?:^|.*;\s*)sidebarCollapsed\s*\=\s*([^;]*).*$)|^.*$/,"$1")&&$(".l-sidebar").addClass("collapsed"),setTimeout(resizeTemplates,180),$(".collapse-sidebar").on("click",function(){$(".l-sidebar").hasClass("collapsed")?(console.log("collapsed"),document.cookie="sidebarCollapsed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT"):(console.log("not"),document.cookie="sidebarCollapsed=false; expires=Fri, 31 Dec 9999 23:59:59 GMT"),$(".l-sidebar").toggleClass("collapsed"),renderLogo(),setTimeout(resizeTemplates,210)}),$(document).on("click",".r-sidebar-toggle",function(){$(".r-sidebar").toggleClass("visible")}),$(".nav-user-settings").on("click",function(){$("#settings-modal").modal("toggle"),$("#settings-modal .nav-item a").trigger("click")}),$(".r-sidebar .checkbox-dependency").on("click",function(e){"INPUT"==e.target.tagName&&(1==$(this).children(".form-check-input").prop("checked")?($(this).closest(".checkbox-dependency-container").find(".collapse").addClass("show"),$(this).closest(".checkbox-dependency-container").find(".caret-dropdown").addClass("show-dropdown")):($(this).closest(".checkbox-dependency-container").find(".collapse").removeClass("show"),$(this).closest(".checkbox-dependency-container").find(".caret-dropdown").removeClass("show-dropdown")))}),$(".r-sidebar .checkbox-dependency-container .caret-dropdown").on("click",function(){$(this).closest(".checkbox-dependency-container").find(".collapse").toggleClass("show"),$(this).hasClass("show-dropdown")?$(this).removeClass("show-dropdown"):$(this).addClass("show-dropdown")}),$("#previewFrameToggle").on("click",function(){$(this).hasClass("active")||($("#preview-frame").contents().find("html").css("background-color","#fff"),$("#preview-frame").height(1e3),$("#preview-frame").css("max-height","635px"),$("#preview-toolbar").on("click",function(){$("#frame-container").hasClass("desktop")?$("#preview-frame").css("max-height","635px"):$("#frame-container").hasClass("tablet")?$("#preview-frame").css("max-height","555px"):$("#frame-container").hasClass("mobile")&&$("#preview-frame").css("max-height","465px")}))}),$("#file-explorer").on("click",".remove-checkbox",function(){$(this).next().trigger("click"),toggleAllCheckboxesStatus(),deleteCheckedButton()}),$("#file-explorer").on("focus","input:checkbox",function(){$(this).blur()}),$(".all-remove-checkboxes").on("click",function(){$(".remove-checkboxes .remove-checkbox-placeholder").is(":checked")?($(".remove-checkboxes .remove-checkbox-placeholder").prop("checked",!0),$(".remove-checkboxes .remove-checkbox").trigger("click"),toggleAllCheckboxesStatus(),deleteCheckedButton()):($(".remove-checkboxes .remove-checkbox-placeholder").prop("checked",!1),$(".remove-checkboxes .remove-checkbox").trigger("click"),toggleAllCheckboxesStatus(),deleteCheckedButton())}),$('button[type="reset"]').on("click",function(){clearInputs($(this).closest("form").prop("id"))}),$("form#advanced-campaign-form input").on("keyup blur",function(){regularValidation($(this).prop("id")),validateCampaignForm()}),$("form#simple-campaign-form input").on("keyup blur",function(){regularValidation($(this).prop("id")),validateSimpleCampaignForm()}),$("form#save-template-form input").on("keyup blur",function(){regularValidation($(this).prop("id")),validateTemplateForm()}),$("form#settings-form input").on("keyup blur",function(){regularValidation($(this).prop("id")),validateForm($("form#settings-form input"),$("#settings-form-save"))}),$("#save-template-cancel").on("click",function(){clearInputs("save-template-form")}),$("#clear-inputs").on("click",function(){clearInputs("advanced-campaign-form"),validateCampaignForm(),$("html,body").animate({scrollTop:0},"slow")}),$("#replyToEmail").on("keyup blur click",function(){email_regex.test($(this).val())?($(this).removeClass("is-invalid"),$(this).addClass("is-valid"),$(this).siblings("h5.form-text").remove()):(emailValidation($(this).prop("id")),$(this).removeClass("is-valid"),$(this).addClass("is-invalid"))}),$("#fromEmail").on("keyup blur click",function(){if(email_regex.test($(this).val())){if($(this).removeClass("is-invalid"),!isWarning&&isValid)return!1;isWarning||($(this).siblings("h5.form-text").remove(),verifyEmail.insertAfter(this)),$("#verify-email").on("click",function(){$(this).parent().siblings("#fromEmail").prop("readonly",!0),$(this).parent().siblings("#fromEmail").addClass("is-valid"),$(this).parent().siblings("small.form-text").remove(),verifyEmail.replaceWith(verifySuccess),$("form#simple-campaign-form").length?validateSimpleCampaignForm():$("form#advanced-campaign-form").length&&validateCampaignForm()})}else emailValidation($(this).prop("id"))}),$("#fromEmail").on("blur",function(){0==DMARC&&$(this).val().indexOf(".com")>-1&&($("#DMARC-modal").modal("show"),DMARC=!0)})}),$(document).keydown(function(e){var i=$(".exp-item.key-selected");$(e.target).is("input, textarea, .modal")||(40!=e.keyCode||i.is(":last-child")?38!=e.keyCode||i.is(":first-child")?13==e.keyCode?i.find(".media-items-block div:first-child").trigger("click"):8==e.keyCode?$(".parent-folder").trigger("click"):46==e.keyCode?i.find(".delete-item").trigger("click"):32==e.keyCode&&(i.find(".remove-checkbox").trigger("click"),1==i.find(".remove-checkbox").next().prop("checked")?i.find(".remove-checkbox").next().prop("checked",!0):i.find(".remove-checkbox").next().prop("checked",!1),toggleAllCheckboxesStatus(),deleteCheckedButton()):(e.preventDefault(),i.length||$(".exp-item-container").find(".exp-item:first-child").addClass("key-selected"),i.removeClass("key-selected"),i.prev().addClass("key-selected")):(e.preventDefault(),i.removeClass("key-selected"),i.next().addClass("key-selected"),i.length||$(".exp-item-container").find(".exp-item:first-child").addClass("key-selected")))});

},{}],60:[function(require,module,exports){
(function (global){
var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../bower_components/console-browserify/index.js");$(document).ready(function(){function e(){function e(e){a.saveOrCancelAllEdits();var r=new t(a,e);r.folderId=a.folderId(),r.date(f),r.isActive(!0),a.items.unshift(r)}function r(e){var t,r;if(e.id()){for(t=0;t<a.path().length;t++)if(a.path()[t].id()==e.id()){r=t+1;break}}else r=1;if(r)for(t=r;t<a.path().length;t++)a.path.pop();else a.path.push(e)}function l(){var e=(a.searchQuery()||"").toLowerCase(),t=a.folderId()||"";a.items.removeAll();for(var r=0;r<a.allItems().length;r++){var i=a.allItems()[r],n=i.folderId||"";t==n&&(e&&i.title().toLowerCase().indexOf(e)<0||a.items.push(i))}a.items().length>0&&a.items.sort(s)}function s(e,t){var r=a.sortColumn(),n=a.sortDirection()==i.ascending,o="Title"==r||e.isFolder==e.title().toLowerCase(),l="Title"==r||t.isFolder==t.title().toLowerCase();return e.isFolder!=t.isFolder?e.isFolder?-1==n:1==n:o==l?0:l>o?-1==n:1==n}var a=this;a.allItems=ko.observableArray(),a.items=ko.observableArray(),a.path=ko.observableArray(),a.searchQuery=ko.observable(""),a.sortColumn=ko.observable(o),a.sortDirection=ko.observable(n),a.folderId=ko.observable(""),a.date=ko.observable("");var d=new Date,c=d.getMonth()+1,u=d.getDate(),f=d.getFullYear()+"/"+((""+c).length<2?"0":"")+c+"/"+((""+u).length<2?"0":"")+u;a.addNewFolder=function(){e(!0)},a.addNewFile=function(){e(!1)},a.searchItems=function(){a.saveOrCancelAllEdits(),l()},a.sortItems=function(e){a.saveOrCancelAllEdits();var t=a.sortColumn(),r=a.sortDirection()==i.descending;t==e?a.sortDirection(r?i.ascending:i.descending):a.sortDirection(i.ascending),a.sortColumn(e),l()},a.changeFolder=function(e){a.saveOrCancelAllEdits(),a.folderId(e);var t,i;for(t=0;t<a.allItems().length;t++)if(a.allItems()[t].id()==e){i=a.allItems()[t];break}r(i||a.path()[0]),a.sortDirection(n),a.sortColumn(o),a.searchQuery(""),l()},a.openParentFolder=function(){a.saveOrCancelAllEdits();for(var e="",t=a.folderId(),r=0;r<a.allItems().length;r++)if(a.allItems()[r].id()==t){e=a.allItems()[r].folderId;break}a.changeFolder(e)},a.isSortedAscending=function(e){return e==a.sortColumn()&&a.sortDirection()==i.ascending},a.isSortedDescending=function(e){return e==a.sortColumn()&&a.sortDirection()==i.descending},a.isRootFolder=ko.computed(function(){return!a.folderId()}),a.getNewId=function(){for(var e=0,t=0;t<a.allItems().length;t++)a.allItems()[t].id()>e&&(e=a.allItems()[t].id());return e+1},a.saveOrCancelAllEdits=function(){for(var e=0;e<a.items().length;e++){var t=a.items()[e];t.isActive()&&t.saveOrCancelEdit()}},a.initialize=function(){a.path.removeAll();var e=new t(a,!0);e.title(""),a.path.push(e),a.folderId(""),l()}}function t(e,t,r,i,n,o){var s=this;s.id=ko.observable(),s.extension=ko.observable(),s.isActive=ko.observable(!1),s.title=ko.observable().extend({required:!0}),s.date=ko.observable().extend({required:!0}),s.parent=e,s.folderId="",s.isFolder=t,s.oldTitle=null,s.title.subscribe(function(){s.isActive()||(s.oldTitle=s.title())});var a=new Date,d=a.getMonth()+1,c=a.getDate(),u=a.getFullYear()+"/"+((""+d).length<2?"0":"")+d+"/"+((""+c).length<2?"0":"")+c;s.rowClassNames=ko.computed(function(){var e;return s.isFolder?(e="exp-item folder-box",s.isActive()&&(e+=" folder-box-active")):(e="exp-item file-box",s.isActive()&&(e+=" file-box-active")),e}),s.iconClassNames=ko.computed(function(){var e;return e=s.isFolder?"system-folder":"system-file"}),s.saveItem=function(){s.title.hasError()||(s.id()||(s.parent.allItems.push(s),s.id(s.parent.getNewId())),s.isActive(!1),s.date(u),s.oldTitle=s.title())},s.deleteItem=function(e){s.parent.saveOrCancelAllEdits();var t=this;$("#delete-exp-modal").modal("show").focus(),$("#delete-exp-modal").on("keyup",function(e){13==e.keyCode&&$(".delete-exp-items").trigger("click")}),$("#delete-exp-modal .delete-exp-items").on("click",function(){e.items.remove(t),e.allItems.remove(t),$("#delete-exp-modal").modal("hide")})},s.checkItem=function(e){for(var t=e.allItems().indexOf(this),r=e.allItems()[t].id(),i=l.filter(function(e){return e!==r}),n=0;n<e.allItems().length;n++)e.allItems()[n].id()==r&&(l.indexOf(r)<0?l.push(r):l=i)},deleteChecked=function(e){$("#delete-exp-modal").modal("show"),$("#delete-exp-modal .delete-exp-items").on("click",function(){for(var t=0;t<l.length;t++)for(var r=0;r<e.allItems().length;r++)if(e.allItems()[r].id()==l[t]){var i=e.allItems()[r];e.items.remove(i),e.allItems.remove(i)}$("#delete-exp-modal").modal("toggle")})},s.editItem=function(){s.parent.saveOrCancelAllEdits(),s.isActive(!0)},s.openItem=function(){s.isFolder&&s.parent.changeFolder(s.id())},s.cancelEditItem=function(){s.id()?(s.title(s.oldTitle),s.isActive(!1)):s.parent.items.remove(s)},s.saveOrCancelEdit=function(){s.isActive()&&(s.title.hasError()?s.cancelEditItem():s.saveItem())},s.id(r).title(i).date(n),s.folderId=o}function r(r){var i=document.getElementById("file-explorer-content"),n=new e;if(r.Folders)for(var o=0;o<r.Folders.length;o++){var l=r.Folders[o],s=new t(n,!0,l.Id,l.Title,l.Date,l.ParentId);n.allItems.push(s)}if(r.Files)for(var a=0;a<r.Files.length;a++){var d=r.Files[a],c=new t(n,!1,d.Id,d.Title,d.Date,d.FolderId);n.allItems.push(c)}r.GridOptions&&(n.searchQuery(r.GridOptions.SearchQuery),n.sortColumn(r.GridOptions.Column),n.sortDirection(r.GridOptions.Direction)),n.initialize(),ko.applyBindings(n,i)}ko.bindingHandlers.anyKeyPress={init:function(e,t,r,i){var n=r();e.addEventListener("keyup",function(){return n.anyKeyPress.call(i),!1})}},ko.bindingHandlers.enterPress={init:function(e,t,r,i){var n=r();e.addEventListener("keydown",function(e){var t=e.which?e.which:e.keyCode;return 13===t?(n.enterPress.call(i),!1):!0})}},ko.bindingHandlers.escPress={init:function(e,t,r,i){var n=r();e.addEventListener("keydown",function(e){var t=e.which?e.which:e.keyCode;return 27===t?(n.escPress.call(i),!1):!0})}},ko.extenders.required=function(e){function t(t){e.hasError(t?!1:!0)}return e.hasError=ko.observable(),t(e()),e.subscribe(t),e};var i={ascending:1,descending:2},n=i.ascending,o="Title",l=[];"object"==typeof expData&&r(expData)});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../bower_components/console-browserify/index.js":1}],61:[function(require,module,exports){
(function (global){
function Color(e){this.getBrightness=function(t){return e(t).getBrightness()},this.isLight=function(t){return e(t).isLight()},this.isDark=function(t){return e(t).isDark()},this.getLuminance=function(t){return e(t).getLuminance()},this.lighten=function(t,o){return e(t).lighten(o).toHexString()},this.brighten=function(t,o){return e(t).brighten(o).toHexString()},this.darken=function(t,o){return e(t).darken(o).toHexString()},this.desaturate=function(t,o){return e(t).desaturate(o).toHexString()},this.saturate=function(t,o){return e(t).saturate(o).toHexString()},this.greyscale=function(t){return e(t).greyscale().toHexString()},this.spin=function(t,o){return e(t).spin(o).toHexString()},this.complement=function(t){return e(t).complement().toHexString()},this.mix=e.mix,this.readability=e.readability,this.isReadable=e.isReadable,this.mostReadable=e.mostReadable}var tinycolor=require("./../../../bower_components/tinycolor/tinycolor.js"),colorPlugin=function(){global.Color=new Color(tinycolor)};module.exports=colorPlugin;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/tinycolor/tinycolor.js":18}],62:[function(require,module,exports){
(function (global){
"use strict";var console=require("./../../../bower_components/console-browserify/index.js"),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),inlineDocument=require("./../../../bower_components/juice/lib/inline")({}).inlineDocument,inlinerPlugin=function(e){e.inline=function(e){$("[style]:not([replacedstyle])",e).each(function(e,t){var o=$(t);o.attr("replacedstyle",o.attr("style"))});var t=[];$('style[data-inline="true"]',e).each(function(e,o){var a=$(o).html();a=a.replace(/<!-- ko ((?!--).)*? -->/g,""),a=a.replace(/<!-- \/ko -->/g,""),t.push(a),$(o).removeAttr("data-inline")});var o=t.join("\n"),a=function(t,o){return"undefined"==typeof o&&(o=e),$(t,o)};a.root=function(){return $(":root",e)},inlineDocument(a,o,{styleAttributeName:"replacedstyle"})}};module.exports=inlinerPlugin;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1,"./../../../bower_components/juice/lib/inline":4}],63:[function(require,module,exports){
(function (global){
"use strict";var console=require("./../../../bower_components/console-browserify/index.js"),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),lsLoader=function(e,t){var a=global.localStorage.getItem("metadata-"+e);if(null!==a){var o,l=global.localStorage.getItem("template-"+e);null!==l&&(o=JSON.parse(l));var n=JSON.parse(a);return{metadata:n,model:o,extension:lsCommandPluginFactory(n,t)}}throw"Cannot find stored data for "+e},lsCommandPluginFactory=function(e,t){var a=function(e,a,o){var l={name:"Save",enabled:ko.observable(!0)};l.execute=function(){l.enabled(!1),o.metadata.changed=Date.now(),"undefined"==typeof o.metadata.key&&(console.warn("Unable to find key in metadata object...",o.metadata),o.metadata.key=e);var t=JSON.parse(global.localStorage.getItem("edits"));if(t.indexOf(e)<0||"object"!=typeof t){console.log(e),console.log(typeof e);var a=Math.random().toString(36).substr(2,7);console.log(a),console.log(typeof a),console.log(t),console.log(typeof t),t.push(a),console.log("="+t),console.log(typeof t),global.localStorage.setItem("edits",JSON.stringify(t)),global.localStorage.setItem("metadata-"+a,o.exportMetadata()),global.localStorage.setItem("template-"+a,o.exportJSON()),global.document.location="advanced-campaign.html#"+a}global.localStorage.setItem("metadata-"+e,o.exportMetadata()),global.localStorage.setItem("template-"+e,o.exportJSON()),l.enabled(!0)};var n={name:"Test",enabled:ko.observable(!0)},r={name:"Download",enabled:ko.observable(!0)};n.execute=function(){n.enabled(!1);var l=global.localStorage.getItem("testemail");if((null===l||"null"==l)&&(l=o.t("Insert here the recipient email address")),l=global.prompt(o.t("Test email address"),l),l.match(/@/)){global.localStorage.setItem("testemail",l),console.log("TODO testing...",l);var r=t?t:"/dl/",s=$.post(r,{action:"email",rcpt:l,subject:"[test] "+e+" - "+a,html:o.exportHTML()},null,"html");s.fail(function(){console.log("fail",arguments),o.notifier.error(o.t("Unexpected error talking to server: contact us!"))}),s.success(function(){console.log("success",arguments),o.notifier.success(o.t("Test email sent..."))}),s.always(function(){n.enabled(!0)})}else global.alert(o.t("Invalid email address")),n.enabled(!0)},r.execute=function(){r.enabled(!1),o.notifier.info(o.t("Downloading...")),o.exportHTMLtoTextarea("#downloadHtmlTextarea");var e=t?t:"/dl/";global.document.getElementById("downloadForm").setAttribute("action",e),global.document.getElementById("downloadForm").submit(),r.enabled(!0)},o.save=l,o.test=n,o.download=r}.bind(void 0,e.key,e.name);return a};module.exports=lsLoader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1}],64:[function(require,module,exports){
(function (global){
var utilPlugin=function(){global.Util={decodeURI:decodeURI,encodeURI:encodeURI,decodeURIComponent:decodeURIComponent,encodeURIComponent:encodeURIComponent}};module.exports=utilPlugin;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],65:[function(require,module,exports){
"use strict";require("./../../bower_components/knockout-sortable/build/knockout-sortable.min.js"),require("./bindings/jqueryui-spinner.js"),require("./bindings/jqueryui-tabs.js"),require("./bindings/colorpicker.js"),require("./bindings/blocks.js"),require("./bindings/csstext.js"),require("./bindings/bind-iframe.js"),require("./bindings/droppable.js"),require("./bindings/fileupload.js"),require("./bindings/virtuals.js"),require("./bindings/wysiwygs.js"),require("./bindings/scrollfix.js"),require("./bindings/if-subs.js"),require("./bindings/extsortables.js"),require("./bindings/eventable.js"),require("./bindings/tooltips.js"),require("./bindings/extender-pagination.js"),require("./bindings/validated-value.js"),require("./bindings/scrollintoview.js");

},{"./../../bower_components/knockout-sortable/build/knockout-sortable.min.js":8,"./bindings/bind-iframe.js":28,"./bindings/blocks.js":29,"./bindings/colorpicker.js":31,"./bindings/csstext.js":32,"./bindings/droppable.js":33,"./bindings/eventable.js":34,"./bindings/extender-pagination.js":35,"./bindings/extsortables.js":36,"./bindings/fileupload.js":37,"./bindings/if-subs.js":38,"./bindings/jqueryui-spinner.js":39,"./bindings/jqueryui-tabs.js":40,"./bindings/scrollfix.js":42,"./bindings/scrollintoview.js":43,"./bindings/tooltips.js":45,"./bindings/validated-value.js":46,"./bindings/virtuals.js":47,"./bindings/wysiwygs.js":48}],66:[function(require,module,exports){
(function (global){
"use strict";function _viewModelPluginInstance(e){var t;return{viewModel:function(o){t=e(o)},init:function(){"undefined"!=typeof t&&"undefined"!=typeof t.init&&t.init()},dispose:function(){"undefined"!=typeof t&&"undefined"!=typeof t.dispose&&t.dispose()}}}var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),kojqui=(typeof window !== "undefined" ? window['kojqui'] : typeof global !== "undefined" ? global['kojqui'] : null),templateConverter=require("./converter/main.js"),console=require("./../../bower_components/console-browserify/index.js"),initializeViewmodel=require("./viewmodel.js"),templateSystem=require("./bindings/choose-template.js"),pluginsCall=function(e,t,o,a){var i,l,n,r,d;d=[],"undefined"!=typeof a&&a?(i=e.length-1,l=0,n=-1):(i=0,l=e.length-1,n=1);for(var s=i;s!=l+n;s+=n)"undefined"!=typeof e[s][t]&&(r=e[s][t].apply(e[s],o),"undefined"!=typeof r&&d.push(r));return d},origDisposeCallback=ko.utils.domNodeDisposal.addDisposeCallback;ko.utils.domNodeDisposal.addDisposeCallback=function(e,t){var o=function(e){try{t(e)}catch(o){console.warn("Caught unexpected dispose callback exception",o)}};origDisposeCallback(e,o)};var bindingPluginMaker=function(e){return{viewModel:function(t){try{e("applyBindings",ko.applyBindings.bind(void 0,t))}catch(o){throw console.warn(o,o.stack),o}},dispose:function(){try{e("unapplyBindings",ko.cleanNode.bind(this,global.document.body))}catch(t){throw console.warn(t,t.stack),t}}}},templateCreator=function(e,t,o,a){var i=o;for("undefined"!=typeof o&&"undefined"!=typeof a&&("object"!=typeof t||"replacedhtml"!=t.tagName.toLowerCase())&&(i+="-"+a);"undefined"==typeof i||null===i||e.exists(i);)i="anonymous-"+Math.floor(1e5*Math.random()+1);if("object"==typeof t&&"replacedhtml"==t.tagName.toLowerCase()){var l=$(t),n=$("replacedhead",l),r=$("replacedbody",l);e.adder(i+"-head",n.html()||""),e.adder(i+"-show",r.html()||""),e.adder(i+"-preview",l.html()),e.adder(i+"-wysiwyg",l.html()),n.children().detach(),n.html("<!-- ko block: content --><!-- /ko -->"),n.before("<!-- ko withProperties: { templateMode: 'head' } -->"),n.after("<!-- /ko -->"),r.html("<!-- ko block: content --><!-- /ko -->"),e.adder(i+"-iframe",l[0].outerHTML)}else"object"==typeof t?e.adder(i,t.outerHTML):e.adder(i,t);return i},_templateUrlConverter=function(e,t){return t.match(/^[^\/]*:/)||t.match(/^\//)||t.match(/^\[/)||t.match(/^#?$/)?null:e+t},templateLoader=function(e,t,o,a,i,l){var n="string"==typeof t?t:o.template,r="./",d=n.lastIndexOf("/");-1!=d&&(r=n.substr(0,d+1));var s,c=_templateUrlConverter.bind(void 0,r);s="undefined"==typeof o?{template:n,name:"No name",created:Date.now()}:o,$.get(n,function(t){var o=templateCompiler(e,c,"template",t,a,s,i,l);o.init()})},templateCompiler=function(e,t,o,a,i,l,n,r){var d=a.match(/^([\S\s]*)([<]html[^>]*>[\S\s]*<\/html>)([\S\s]*)$/i);if(null===d)throw"Unable to find <html> opening and closing tags in the template";var s=d[1],c={"<html":0,"<head":0,"<body":0,"</html":0,"</body":0,"</head":0},p=d[2].replace(/(<\/?)(html|head|body)([^>]*>)/gi,function(e,t,o,a){return c[(t+o).toLowerCase()]+=1,t+"replaced"+o+a});for(var b in c)if(c.hasOwnProperty(b)&&1!=c[b]){if(0===c[b])throw"ERROR: missing mandatory element "+b+">";if(c[b]>1)throw"ERROR: multiple element "+b+"> occourences are not supported (found "+c[b]+" occourences)"}var m=d[3],u=[],f="+$root.contentListeners()",g=[];if("undefined"!=typeof n)for(var h=0;h<n.length;h++)"function"==typeof n[h]?g.push(_viewModelPluginInstance(n[h])):g.push(n[h]);var v=[],k={adder:function(e,t){if("string"!=typeof t)throw"Template system: cannot create new template "+e;var o=t.match(/(data)?-ko-[^ =:]*/g);o&&console.error("ERROR: found unexpected -ko- attribute in compiled template",e,", you probably mispelled it:",o),templateSystem.addTemplate(e,t),v.push(e)},exists:function(e){var t=templateSystem.getTemplateContent(e);return"undefined"!=typeof t?!0:!1},dispose:function(){for(var e=v.length-1;e>=0;e--)templateSystem.removeTemplate(v[e])}};ko.bindingHandlers.block.templateExists=k.exists;for(var y=templateCreator.bind(void 0,k),w=e("translateTemplate",templateConverter.translateTemplate.bind(void 0,o,p,t,y)),x=e("generateModel",templateConverter.wrappedResultModel.bind(void 0,w)),S={},C=pluginsCall(g,"widget",[$,ko,kojqui]),_=0;_<C.length;_++)S[C[_].widget]=C[_];u.push.apply(u,e("generateEditors",templateConverter.generateEditors.bind(void 0,w,S,t,y,f)));var B=!1;if("undefined"!=typeof i&&null!==i){var T;T="string"==typeof i?ko.utils.parseJson(i):i;var j=e("checkModel",templateConverter.checkModel.bind(void 0,x._unwrap(),u,T));2==j&&(console.error("Trying to compile an incompatible template version!",x._unwrap(),u,T),B=!0);try{x._wrap(T)}catch(M){console.error("Unable to inject model content!",M),B=!0}}var P=s+templateSystem.getTemplateContent(o+"-iframe").replace(/(<\/?)replaced(html|head|body)([^>]*>)/gi,function(e,t,o,a){return t+o+a})+m,D=ko.bindingHandlers.bindIframe.tpl;ko.bindingHandlers.bindIframe.tpl=P;var q={dispose:function(){ko.bindingHandlers.bindIframe.tpl=D}};g.push(q),g.push(k);var L=e("initializeViewmodel",initializeViewmodel.bind(this,x,u,t,r));L.metadata=l;var F="0.16.0";return"undefined"!=typeof L.metadata.editorversion&&L.metadata.editorversion!==F&&console.warn("The model being loaded has been created with an older editor version",L.metadata.editorversion,"vs",F),L.metadata.editorversion=F,"undefined"!=typeof w.version&&("undefined"!=typeof L.metadata.templateversion&&L.metadata.templateversion!==w.version&&console.error("The model being loaded has been created with a different template version",w.version,"vs",L.metadata.templateversion),L.metadata.templateversion=w.version),templateSystem.init(),g.push(bindingPluginMaker(e)),pluginsCall(g,"viewModel",[L]),B&&$("#incompatible-template").dialog({modal:!0,appendTo:"#mo-body",buttons:{Ok:function(){$(this).dialog("close")}}}),{model:L,init:function(){pluginsCall(g,"init",void 0,!0)},dispose:function(){pluginsCall(g,"dispose",void 0,!0)}}},checkFeature=function(e,t){if(!t())throw console.warn("Missing feature",e),"Missing feature "+e},isCompatible=function(){try{return checkFeature("matchMedia",function(){return"undefined"!=typeof global.matchMedia}),checkFeature("XMLHttpRequest 2",function(){return"XMLHttpRequest"in global&&"withCredentials"in new global.XMLHttpRequest}),checkFeature("ES5 strict",function(){return function(){return"undefined"==typeof this}()}),checkFeature("CSS borderRadius",function(){return"undefined"!=typeof global.document.body.style.borderRadius}),checkFeature("CSS boxShadow",function(){return"undefined"!=typeof global.document.body.style.boxShadow}),checkFeature("CSS boxSizing",function(){return"undefined"!=typeof global.document.body.style.boxSizing}),checkFeature("CSS backgroundSize",function(){return"undefined"!=typeof global.document.body.style.backgroundSize}),checkFeature("CSS backgroundOrigin",function(){return"undefined"!=typeof global.document.body.style.backgroundOrigin}),checkBadBrowserExtensions(),!0}catch(e){return!1}},checkBadBrowserExtensions=function(){var e="checkbadbrowsersframe",t=ko.bindingHandlers.bindIframe.tpl;ko.bindingHandlers.bindIframe.tpl='<!DOCTYPE html>\r\n<html>\r\n<head><title>A</title>\r\n</head>\r\n<body><p style="color: blue" align="right" data-bind="style: { color: \'red\' }">B</p><div data-bind="text: content"></div></body>\r\n</html>\r\n',$("body").append('<iframe id="'+e+'" data-bind="bindIframe: $data"></iframe>');var o=global.document.getElementById(e);ko.applyBindings({content:"dummy content"},o);var a=o.contentWindow.document.doctype,i="<!DOCTYPE "+a.name+(a.publicId?' PUBLIC "'+a.publicId+'"':"")+(!a.publicId&&a.systemId?" SYSTEM":"")+(a.systemId?' "'+a.systemId+'"':"")+">",l=i+"\n"+o.contentWindow.document.documentElement.outerHTML;ko.cleanNode(o),ko.removeNode(o),ko.bindingHandlers.bindIframe.tpl=t;var n='<!DOCTYPE html>\n<html><head><title>A</title>\n</head>\n<body><p align="right" style="color: red;" data-bind="style: { color: \'red\' }">B</p><div data-bind="text: content">dummy content</div>\n\n</body></html>',r='<!DOCTYPE html>\n<html><head><title>A</title>\n</head>\n<body><p style="color: red;" data-bind="style: { color: \'red\' }" align="right">B</p><div data-bind="text: content">dummy content</div>\n\n</body></html>',d='<!DOCTYPE html>\n<html><head><title>A</title>\n</head>\n<body><p style="color: red;" align="right" data-bind="style: { color: \'red\' }">B</p><div data-bind="text: content">dummy content</div>\n\n</body></html>';if(n!==l&&r!==l&&d!==l)throw console.info("BadBrowser.FrameContentCheck",l.length,n.length,r.length,d.length,l==n,l==r,l==d),console.info(l),"Unexpected frame content. Misbehaving browser: "+l.length+"/"+n.length+"/"+r.length+"/"+d.length},fixPageEvents=function(){global.addEventListener&&(global.addEventListener("drag",function(e){e=e||global.event,e.preventDefault()},!1),global.addEventListener("dragstart",function(e){e=e||global.event,e.preventDefault()},!1),global.addEventListener("dragover",function(e){e=e||global.event,e.preventDefault()},!1),global.addEventListener("drop",function(e){e=e||global.event,e.preventDefault()},!1),global.document.body.addEventListener("drop",function(e){e.preventDefault()},!1)),global.document.ondragstart&&(global.document.ondragstart=function(){return!1})};module.exports={compile:templateCompiler,load:templateLoader,isCompatible:isCompatible,fixPageEvents:fixPageEvents};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../bower_components/console-browserify/index.js":1,"./bindings/choose-template.js":30,"./converter/main.js":53,"./viewmodel.js":70}],67:[function(require,module,exports){
"use strict";var console=require("./../../bower_components/console-browserify/index.js"),_call=function(e){return e()},logs=[],_timedCall=function(e,o){var l,t=(new Date).getTime();"object"==typeof console&&console.time&&console.time(e),l=_call(o),"object"==typeof console&&console.time&&console.timeEnd(e);var n=(new Date).getTime()-t;return"object"!=typeof console||console.time||console.log(e,"took",n,"ms"),logs.push({name:e,time:n}),logs.length>100&&logs.unshift(),l};module.exports={timedCall:_timedCall,logs:logs};

},{"./../../bower_components/console-browserify/index.js":1}],68:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),undoManager=require("./../../../bower_components/knockout-undomanager/knockout-undomanager.js"),undoserializer=require("./undoserializer.js"),addUndoStackExtensionMaker=function(e){return function(t){t.contentListeners(t.contentListeners()+2);var o=undoManager(t.content,{levels:100,undoLabel:ko.computed(function(){return t.t("Undo (#COUNT#)")}),redoLabel:ko.computed(function(){return t.t("Redo")})});return t.undo=o.undoCommand,t.undo.execute=e.bind(t,"undo",t.undo.execute),t.redo=o.redoCommand,t.redo.execute=e.bind(t,"redo",t.redo.execute),t.undoReset=e.bind(t,"undoReset",o.reset),t.setUndoModeMerge=o.setModeMerge,t.setUndoModeOnce=o.setModeOnce,o.setModeIgnore(),o.setUndoActionMaker(undoserializer.makeUndoAction.bind(void 0,t.content)),undoserializer.watchEnabled(!0),{pause:function(){o.setModeIgnore()},run:function(){o.setModeOnce()},init:function(){o.setModeOnce()},dispose:function(){t.contentListeners(t.contentListeners()-2),undoserializer.watchEnabled(!1),o.dispose()}}}};module.exports=addUndoStackExtensionMaker;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/knockout-undomanager/knockout-undomanager.js":9,"./undoserializer.js":69}],69:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./../../../bower_components/console-browserify/index.js"),_reference=function(e,n){for(var t,r,o=0,a=e;o<n.length;)switch(n.charAt(o)){case"(":")"==n.charAt(o+1)&&(a=a()),o+=2;break;case"[":r=n.indexOf("]",o),a=a[n.substring(o+1,r)],o=r+1;break;case".":t=n.indexOf("(",o),-1==t&&(t=n.length),r=n.indexOf("[",o),-1==r&&(r=n.length),r=Math.min(t,r),a=a[n.substring(o+1,r)],o=r}return a},_getPath=function(e,n){for(var t,r="",o=0;o<=e.length;o++)if(t=o<e.length?e[o]:n,ko.isObservable(t)&&(r+="()"),"undefined"!=typeof t._fieldName)r+="."+t._fieldName;else{if(!(o>0&&"function"==typeof e[o-1].pop))throw console.error("Unexpected parent with no _fieldName and no parent array",o,e),"Unexpected parent with no _fieldName and no parent array";var a=ko.isObservable(e[o-1])?ko.utils.peekObservable(e[o-1]):e[o-1],i=ko.utils.arrayIndexOf(a,t);if(-1==i)throw"Unexpected object not found in parent array";r+="["+i+"]"}return r},makeDereferencedUndoAction=function(e,n,t,r,o){var a=_reference(n,t);e(a,r,o)},listener,_setListener=function(e){listener=e},makeUndoActionDereferenced=function(e,n,t,r,o,a){try{var i=_getPath(t,r);if(("object"==typeof o||"function"==typeof o)&&(o=ko.toJS(o)),"undefined"!=typeof a&&("object"==typeof a.value||"function"==typeof a.value)){var c=ko.toJS(a);a=c}if("undefined"!=typeof listener)try{listener(i,r,o,a)}catch(f){console.log("Undoserializer ignoring exception in listener callback")}return makeDereferencedUndoAction.bind(void 0,n,e,i,o,a)}catch(f){console.error("Exception processing undo",f,t,r,a)}},watchEnabled,_watchEnabled=function(e){return"undefined"==typeof e?watchEnabled:(watchEnabled=e,void 0)};module.exports={dereference:_getPath,reference:_reference,makeUndoAction:makeUndoActionDereferenced,setListener:_setListener,watchEnabled:_watchEnabled};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../../bower_components/console-browserify/index.js":1}],70:[function(require,module,exports){
(function (global){
"use strict";function initializeEditor(e,t,o,l){function a(e){return e.replace(/<replacedcc[^>]* condition="([^"]*)"[^>]*>([\s\S]*?)<\/replacedcc>/g,function(e,t,o){var l="<!--[if "+t.replace(/&amp;/,"&")+"]>";return l+=o.replace(/<!-- cc:bc:([A-Za-z:]*) -->(<\/cc>)?<!-- cc:ac:\1 -->/g,"</$1>").replace(/><\/cc><!-- cc:sc -->/g,"/>").replace(/<!-- cc:bo:([A-Za-z:]*) --><cc/g,"<$1").replace(/^.*<!-- cc:start -->/,"").replace(/<!-- cc:end -->.*$/,""),l+="<![endif]-->"})}var r=[],n=[],s=[],i=[{created:"Default",key:"0000001",title:"STEdb default",name:"versafix-1",template:"templates/versafix-1/template-versafix-1.html",desc:"The versatile template"},{created:"Default",key:"0000002",title:"TEDC15",name:"tedc15",template:"templates/tedc15/template-tedc15.html",desc:"The tedc15 template"},{created:"Default",key:"0000003",title:"Easy tutorial",name:"tutorial",template:"templates/tutorial/template-tutorial.html",desc:"The tutorial template"}],c={galleryRecent:ko.observableArray([]).extend({paging:16}),galleryRemote:ko.observableArray([]).extend({paging:16}),selectedBlock:ko.observable(null),selectedItem:ko.observable(null),selectedTool:ko.observable(0),selectedImageTab:ko.observable(0),dragging:ko.observable(!1),draggingImage:ko.observable(!1),galleryLoaded:ko.observable(!1),showPreviewFrame:ko.observable(!1),previewMode:ko.observable("desktop"),showToolbox:ko.observable(!0),showTheme:ko.observable(!1),showGallery:ko.observable(!1),debug:ko.observable(!1),contentListeners:ko.observable(0),showSaved:ko.observable(!1),edits:ko.observableArray(s),templates:ko.observableArray(n),campaigns:ko.observableArray(r),logoPath:"dist/img/mosaico32.png",logoUrl:".",logoAlt:"mosaico"};c.content=e,c.blockDefs=t,c.notifier=toastr,c.tt=function(e,t){if("undefined"!=typeof t)for(var o in t)t.hasOwnProperty(o)&&(e=e.replace(new RegExp("__"+o+"__","g"),t[o]));return e},c.t=c.tt,c.ut=function(e,t){return t},c.templatePath=o,c.remoteUrlProcessor=function(e){return e},c.remoteFileProcessor=function(e){return"undefined"!=typeof e.url&&(e.url=c.remoteUrlProcessor(e.url)),"undefined"!=typeof e.thumbnailUrl&&(e.thumbnailUrl=c.remoteUrlProcessor(e.thumbnailUrl)),e},c.loadGallery=function(){c.galleryLoaded("loading");var e=l?l:"/upload/";$.getJSON(e,function(e){for(var t=0;t<e.files.length;t++)e.files[t]=c.remoteFileProcessor(e.files[t]);c.galleryLoaded(e.files.length),c.galleryRemote(e.files.reverse())}).fail(function(){c.galleryLoaded(!1),c.notifier.error(c.t("Unexpected error listing files"))})},c.fileToImage=function(e){return e.url},c.removeBlock=function(e,t){var o=!1;$("#main-wysiwyg-area .sortable-blocks-edit .editable.block").length<=1&&(o=!0),ko.utils.unwrapObservable(c.selectedBlock)==ko.utils.unwrapObservable(e)&&c.selectBlock(null,!0);var l=t.blocks.remove(e);return c.notifier.info(c.t("Block removed: use undo button to restore it...")),1==o&&($("#main-toolbox .block-list").find('img[alt="Block textBlock"]').parent().click(),global.setTimeout(function(){tinymce.editors[0].focus(),tinymce.editors[0].setContent("",{format:"raw"})},0)),l},c.duplicateBlock=function(e,t){var o=ko.utils.unwrapObservable(e),l=ko.toJS(ko.utils.unwrapObservable(t.blocks)[o]);"undefined"!=typeof l.id&&(l.id=""),t.blocks.splice(o+1,0,l)},c.moveBlock=function(e,t,o){var l=ko.utils.unwrapObservable(e),a=ko.utils.unwrapObservable(t.blocks);if(o&&l>0||!o&&l<a.length-1){var r=l+(o?-1:1),n=a[r];c.startMultiple(),t.blocks.splice(r,1),t.blocks.splice(l,0,n),c.stopMultiple()}},c.loadDefaultBlocks=function(){var e=ko.toJS(c.content().mainBlocks);e.blocks=[];for(var t=ko.utils.unwrapObservable(c.blockDefs),o=0;o<t.length;o++){var l=ko.toJS(t[o]);l.id="block_"+o,e.blocks.push(l)}performanceAwareCaller("setMainBlocks",c.content().mainBlocks._wrap.bind(c.content().mainBlocks,e))},c.addImage=function(e){var t=$("#main-wysiwyg-area .selectable-img.selecteditem");return 1==t.length&&"object"==typeof e&&"undefined"!=typeof e.url?(ko.contextFor(t[0])._src(e.url),!0):!1},c.addBlock=function(e){var t,o=c.selectedBlock();if(null!==o)for(var l=c.content().mainBlocks().blocks().length-1;l>=0;l--)if(c.content().mainBlocks().blocks()[l]()==o){t=l;break}var a;"undefined"!=typeof t?(a=t+1,c.content().mainBlocks().blocks.splice(a,0,e),c.notifier.info(c.t("New block added after the selected one (__pos__)",{pos:a}))):(c.content().mainBlocks().blocks.push(e),a=c.content().mainBlocks().blocks().length-1,c.notifier.info(c.t("New block added at the model bottom (__pos__)",{pos:a})));var r=c.content().mainBlocks().blocks()[a]();return c.selectBlock(r,!0),!1},c.findObjectsOfType=function(e,t){var o=[],l=ko.utils.unwrapObservable(e);for(var a in l)if(l.hasOwnProperty(a)){var r=ko.utils.unwrapObservable(l[a]);if(a.match(/Blocks$/))for(var n=ko.utils.unwrapObservable(r.blocks),s=0;s<n.length;s++){var i=ko.utils.unwrapObservable(n[s]);(null===t||ko.utils.unwrapObservable(i.type)==t)&&o.push(i)}else"object"==typeof r&&null!==r&&(null===t||ko.utils.unwrapObservable(r.type)==t)&&o.push(r)}return o},c.placeholderHelper={element:function(e){return $(e[0].outerHTML).removeClass("ui-draggable").addClass("sortable-placeholder").css("display","block").css("position","relative").css("width","100%").css("height","auto").css("opacity",".8")[0]},update:function(){}},c.startMultiple=function(){"undefined"!=typeof c.setUndoModeMerge&&c.setUndoModeMerge()},c.stopMultiple=function(){"undefined"!=typeof c.setUndoModeOnce&&c.setUndoModeOnce()},c.localGlobalSwitch=function(e,t){var o=e();return null===o?e(t()):e(null),!1},c.selectItem=function(e,t,o){var l=ko.utils.peekObservable(e);return"undefined"!=typeof o&&c.selectBlock(o,!1,!0),l!=t&&(e(t),null!==t&&0===c.selectedTool()&&c.selectedTool(1)),!1}.bind(c,c.selectedItem),c.isSelectedItem=function(e){return c.selectedItem()==e},c.selectBlock=function(e,t,o,l){var a=ko.utils.peekObservable(e);l||c.selectItem(null),a!=t&&(e(t),c.showGallery(!1),null===t||o||0!==c.selectedTool()||c.selectedTool(1))}.bind(c,c.selectedBlock),c.countSubscriptions=function(e,t){var o=0;for(var l in e)if(e.hasOwnProperty(l)){var a=e[l];if(ko.isObservable(a)&&("undefined"!=typeof a._defaultComputed&&("undefined"!=typeof t&&console.log(t+"/"+l+"/_",a._defaultComputed.getSubscriptionsCount()),o+=a._defaultComputed.getSubscriptionsCount()),"undefined"!=typeof t&&console.log(t+"/"+l+"/-",a.getSubscriptionsCount()),o+=a.getSubscriptionsCount(),a=ko.utils.unwrapObservable(a)),"object"==typeof a&&null!==a){var r=c.countSubscriptions(a,"undefined"!=typeof t?t+"/"+l+"@":void 0);"undefined"!=typeof t&&console.log(t+"/"+l+"@",r),o+=r}}return o},c.loopSubscriptionsCount=function(){var e=c.countSubscriptions(c.content());global.document.getElementById("subscriptionsCount").innerHTML=e,global.setTimeout(c.loopSubscriptionsCount,1e3)},c.export=function(){var e=performanceAwareCaller("exportHTML",c.exportHTML);return e},c.exportHTML=function(){var e="exportframe";$("body").append('<iframe id="'+e+'" data-bind="bindIframe: $data"></iframe>');var t=global.document.getElementById(e);ko.applyBindings(c,t),ko.cleanNode(t),c.inline&&c.inline(t.contentWindow.document);var o=t.contentWindow.document.doctype,l="<!DOCTYPE "+o.name+(o.publicId?' PUBLIC "'+o.publicId+'"':"")+(!o.publicId&&o.systemId?" SYSTEM":"")+(o.systemId?' "'+o.systemId+'"':"")+">",r=l+"\n"+t.contentWindow.document.documentElement.outerHTML;ko.removeNode(t),r=r.replace(/<script ([^>]* )?type="text\/html"[^>]*>[\s\S]*?<\/script>/gm,""),r=r.replace(/<!-- ko ((?!--).)*? -->/g,""),r=r.replace(/<!-- \/ko -->/g,""),r=r.replace(/ data-bind="[^"]*"/gm,""),r=r.replace(/ data-mce-(href|src|style)="[^"]*"/gm,""),r=r.replace(/ style="[^"]*"([^>]*) replaced(style="[^"]*")/gm,"$1 $2"),r=r.replace(/ replaced(style="[^"]*")([^>]*) style="[^"]*"/gm," $1$2"),r=r.replace(/ replaced(style="[^"]*")/gm," $1"),r=r.replace(/ http-equiv="[^"]*"([^>]*) replaced(http-equiv="[^"]*")/gm,"$1 $2"),r=r.replace(/ replaced(http-equiv="[^"]*")([^>]*) http-equiv="[^"]*"/gm," $1$2"),r=r.replace(/ replaced(http-equiv="[^"]*")/gm," $1"),r=a(r);var n=r.match(/ data-[^ =]+(="[^"]+")? /)||r.match(/ replaced([^= ]*=)/);return n&&console.warn("Output HTML contains unexpected data- attributes or replaced attributes",n),r},c.exportHTMLtoTextarea=function(e){$(e).val(c.exportHTML())},c.exportJSONtoTextarea=function(e){$(e).val(c.exportJSON())},c.importJSONfromTextarea=function(e){c.importJSON($(e).val())},c.exportMetadata=function(){var e=ko.toJSON(c.metadata);return e},c.exportJSON=function(){var e=ko.toJSON(c.content);return e},c.exportJS=function(){return ko.toJS(c.content)},c.importJSON=function(e){var t=ko.utils.parseJson(e);c.content._wrap(t)},c.exportTheme=function(){var e={},t=c.content().theme(),o=function(e,t,l){for(var a in l)if(l.hasOwnProperty(a)){var r=ko.utils.unwrapObservable(l[a]);null!==r&&"object"==typeof r?o(a+".",t,r):t[e+a]=r}};o("",e,t);var l="";for(var a in e)e.hasOwnProperty(a)&&"type"!=a&&(l+=a+": "+e[a]+";"+"\n");return l},c.loadImage=function(e){c.galleryRecent.unshift(e),c.selectedImageTab(0)},c.dialog=function(e,t){$(e).dialog(t)},c.log=function(){},c.selectedImageTab.subscribe(function(e){1==e&&c.galleryLoaded()===!1&&c.loadGallery()},c,"change");var u=global.window.location.href.substr(global.window.location.href.indexOf("#")+1),d=new Date,p=d.getMonth()+1,m=d.getDate(),g=d.getFullYear()+"/"+((""+p).length<2?"0":"")+p+"/"+((""+m).length<2?"0":"")+m;if(null===global.localStorage.getItem("templates")&&0==n.length){for(v=0;v<i.length;v++)n.push(i[v]);global.localStorage.setItem("templates",JSON.stringify(n))}for(var b,f=JSON.parse(global.localStorage.getItem("templates")),v=0;v<f.length;v++){var k=f[v].key;b=global.localStorage.getItem("metadata-"+k),"string"==typeof b?n.push(JSON.parse(b)):console.log("Ignoring saved key",f[v],"type",typeof b,b)}return c.edits.subscribe(function(e){var t=JSON.parse(global.localStorage.getItem("edits"));null==t&&(t=[]);for(var o=0;o<e.length;o++)t.push(e[o].key),global.localStorage.setItem("metadata-"+e[o].key,ko.toJSON(e[o]));global.localStorage.setItem("edits",ko.toJSON(t))}),c.campaigns.subscribe(function(e){var t=JSON.parse(global.localStorage.getItem("campaigns"));null==t&&(t=[]);for(var o=0;o<e.length;o++)t.push(e[o].key),global.localStorage.setItem("metadata-"+e[o].key,ko.toJSON(e[o]));global.localStorage.setItem("campaigns",ko.toJSON(t))}),c.templates.subscribe(function(e){JSON.parse(global.localStorage.getItem("templates"));for(var t=[],o=0;o<e.length;o++)t.push(e[o]),global.localStorage.setItem("metadata-"+e[o].key,ko.toJSON(e[o]));global.localStorage.setItem("templates",ko.toJSON(t))}),c.newTemplate=function(){var e=JSON.parse(global.localStorage.getItem("metadata-"+u)),t=e.key,o=e.name,l=e.template,a=Math.random().toString(36).substr(2,7),r={created:g,key:a,title:$("#templateName").val(),name:o,template:l,desc:$("#templateDesc").val()},n=global.localStorage.getItem("template-"+t),s=c.exportJSON();if(n==s)return $("#save-template-modal").modal("toggle"),$("#template-notchanged-modal").modal("show"),!1;var i=JSON.parse(global.localStorage.getItem("edits")),d=i.filter(function(e){return e!==t});c.edits.splice(t,1),global.localStorage.removeItem("metadata-"+t),global.localStorage.setItem("edits",JSON.stringify(d)),c.templates.push(r),global.localStorage.setItem("template-"+t,c.exportJSON()),global.localStorage.setItem("metadata-"+t,JSON.stringify(r)),$("#save-template-modal").modal("toggle"),$("#template-saved-modal").modal("toggle")},c.newEdit=function(e,t){Math.random().toString(36).substr(2,7);var o="templates/"+e+"/template-"+e+".html",l=JSON.parse(global.localStorage.getItem("edits")),a=l.filter(function(e){return e!==u});c.edits.splice(u,1),global.localStorage.setItem("edits",JSON.stringify(a)),global.localStorage.removeItem("metadata-"+u),c.edits.push({created:g,title:t.title,key:u,name:e,template:o,desc:"Draft"}),global.location.reload()},c.sendCampaign=function(){var e=JSON.parse(global.localStorage.getItem("metadata-"+u)),t=e.key,o=e.name,l=e.template;Math.random().toString(36).substr(2,7);var a;a=$("#campaignName").length?$("#campaignName").val():$("#fromName").val();var r={created:g,key:t,title:a,name:o,template:l,desc:$("#campaignSubject").val()};global.localStorage.getItem("template-"+t),c.exportJSON();var n=JSON.parse(global.localStorage.getItem("edits")),s=n.filter(function(e){return e!==t});c.edits.splice(t,1),global.localStorage.setItem("edits",JSON.stringify(s)),global.localStorage.removeItem("metadata-"+t);var i,d;null==global.localStorage.getItem("campaigns")?i=[]:(d=JSON.parse(global.localStorage.getItem("campaigns")),i=d.filter(function(e){return e!==t})),global.localStorage.setItem("campaigns",JSON.stringify(i)),global.localStorage.removeItem("metadata-"+t),c.campaigns.push(r),global.localStorage.setItem("template-"+t,c.exportJSON()),global.localStorage.setItem("metadata-"+t,JSON.stringify(r))},c}var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),tinymce=(typeof window !== "undefined" ? window['tinymce'] : typeof global !== "undefined" ? global['tinymce'] : null),console=require("./../../bower_components/console-browserify/index.js"),performanceAwareCaller=require("./timed-call.js").timedCall,toastr=require("./../../bower_components/toastr/toastr.js");toastr.options={closeButton:!1,debug:!1,positionClass:"toast-bottom-full-width",target:"#mo-body",onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"},module.exports=initializeEditor;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../../bower_components/console-browserify/index.js":1,"./../../bower_components/toastr/toastr.js":19,"./timed-call.js":67}]},{},[27,20])(27)
});