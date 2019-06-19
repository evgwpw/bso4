var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BsoError = /** @class */ (function (_super) {
    __extends(BsoError, _super);
    function BsoError(message) {
        return _super.call(this, message) || this;
    }
    return BsoError;
}(Error));
function Tmp(tag, act) {
    var content = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        content[_i - 2] = arguments[_i];
    }
    var el = document.createElement(tag);
    if (act)
        act(el);
    for (var e in content) {
        var em = content[e];
        if (Array.isArray(em)) {
            var tmp1 = em;
            for (var x in tmp1) {
                el.appendChild(tmp1[x]);
            }
        }
        else {
            var tmp2 = em;
            el.appendChild(tmp2());
        }
    }
    return el;
}
var BsoRe = /\.([\w_]+);/;
/**
 * рефлексии нет, но фик с ней, из функции вида x=>x.PropertyNeme получаем имя свойства и используем в своих корыстных целях
 * @param {type} fun
 * @returns
 */
function GetPropertyName(fun) {
    var str = fun + '';
    var tmp = BsoRe.exec(str);
    if (tmp && tmp.length >= 2)
        return tmp[1];
    return '';
}
/**
 * соеденяем классы в строку разделенную пробелами
 * @param {type} ...list
 * @returns
 */
function CombineCss() {
    var list = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        list[_i] = arguments[_i];
    }
    var res = "";
    for (var i = 0; i < list.length - 2; i++) {
        res += list[i] + " ";
    }
    res += list[list.length - 1];
    return res;
}
function CombineCssInner(el) {
    var list = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        list[_i - 1] = arguments[_i];
    }
    for (var s in list) {
        el.classList.add(list[s]);
    }
}
function EmptyAction(el) { }
var Binder = /** @class */ (function () {
    function Binder(srcData) {
        this.srcData = srcData;
        this.innerObj = new Object();
    }
    Object.defineProperty(Binder.prototype, "Data", {
        get: function () {
            return this.innerObj;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * привязываем свойство UI к свойству объекта, обе фунции должны возвращать одно из свойств объекта
     * @param {type} elProp
     * @param {type} objProp
     */
    Binder.prototype.BS = function (el, elProp, objProp) {
        var sEl = GetPropertyName(elProp);
        var sOb = GetPropertyName(objProp);
        if (this.ExistsProperty(sOb)) {
            throw new BsoError('Свойство ' + sOb + 'уже существует');
        }
        Object.defineProperty(this.innerObj, sOb, {
            get: function () {
                return el[sEl];
            },
            set: function (v) {
                el[sEl] = v;
            },
            configurable: true,
            enumerable: true,
        });
        this.innerObj[sOb] = this.srcData[sOb];
    };
    /**
     *
     * @param {type} el
     * @param {type} fun
     * @param {type} t
     */
    Binder.prototype.BC = function (el, objProp, Get, Set) {
        var sOb = GetPropertyName(objProp);
        if (this.ExistsProperty(sOb)) {
            throw new BsoError('Свойство ' + sOb + 'уже существует');
        }
        Object.defineProperty(this.innerObj, sOb, {
            get: function () { return Get(el); },
            set: function (v) {
                Set(el);
            },
            configurable: true,
            enumerable: true
        });
    };
    /**
     * проверяет, есть ли уже в объекте свойство
     * @param {string} propName
     */
    Binder.prototype.ExistsProperty = function (propName) {
        return this.innerObj.hasOwnProperty(propName);
    };
    return Binder;
}());
function article(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['article', act].concat(content));
}
function header(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['header', act].concat(content));
}
function footer(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['footer', act].concat(content));
}
function section(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['section', act].concat(content));
}
function div(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['div', act].concat(content));
}
function button(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['button', act].concat(content));
}
function a(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['a', act].concat(content));
}
function applet(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['applet', act].concat(content));
}
function area(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['area', act].concat(content));
}
function audio(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['audio', act].concat(content));
}
function br(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['br', act].concat(content));
}
function base(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['base', act].concat(content));
}
function basefont(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['basefont', act].concat(content));
}
function body(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['body', act].concat(content));
}
function canvas(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['canvas', act].concat(content));
}
function caption(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['caption', act].concat(content));
}
function col(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['col', act].concat(content));
}
function colgroup(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['colgroup', act].concat(content));
}
function datalist(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['datalist', act].concat(content));
}
function del(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['del', act].concat(content));
}
function ins(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['ins', act].concat(content));
}
function dir(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['dir', act].concat(content));
}
function dl(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['dl', act].concat(content));
}
function embed(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['embed', act].concat(content));
}
function fieldset(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['fieldset', act].concat(content));
}
function font(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['font', act].concat(content));
}
function form(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['form', act].concat(content));
}
function frame(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['frame', act].concat(content));
}
function frameset(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['frameset', act].concat(content));
}
function h1(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['h1', act].concat(content));
}
function h2(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['h2', act].concat(content));
}
function h3(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['h3', act].concat(content));
}
function h4(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['h4', act].concat(content));
}
function h5(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['h5', act].concat(content));
}
function h6(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['h6', act].concat(content));
}
function head(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['head', act].concat(content));
}
function hr(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['hr', act].concat(content));
}
function html(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['html', act].concat(content));
}
function iframe(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['iframe', act].concat(content));
}
function img(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['img', act].concat(content));
}
function inputButton(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'button';
    return res;
}
function inputCheckbox(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'checkbox';
    return res;
}
function inputFile(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'file';
    return res;
}
function inputHidden(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'hidden';
    return res;
}
function inputImage(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'image';
    return res;
}
function inputPassword(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'password';
    return res;
}
function inputRadio(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'radio';
    return res;
}
function inputReset(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'reset';
    return res;
}
function inputSubmit(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'submit';
    return res;
}
function inputText(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'text';
    return res;
}
function inputColor(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'color';
    return res;
}
function inputDate(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'date';
    return res;
}
function inputDatetime(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'datetime';
    return res;
}
function inputDatetimeLocal(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'datetime-local';
    return res;
}
function inputEmail(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'email';
    return res;
}
function inputNumber(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'number';
    return res;
}
function inputRange(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'range';
    return res;
}
function inputSearch(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'search';
    return res;
}
function inputTel(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'tel';
    return res;
}
function inputTime(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'time';
    return res;
}
function inputUrl(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'url';
    return res;
}
function inputMonth(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'month';
    return res;
}
function inputWeek(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    var res = Tmp.apply(void 0, ['input', act].concat(content));
    res.type = 'week';
    return res;
}
function label(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['label', act].concat(content));
}
function legend(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['legend', act].concat(content));
}
function li(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['li', act].concat(content));
}
function link(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['link', act].concat(content));
}
function map(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['map', act].concat(content));
}
function marquee(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['marquee', act].concat(content));
}
function menu(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['menu', act].concat(content));
}
function meta(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['meta', act].concat(content));
}
function object(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['object', act].concat(content));
}
function ol(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['ol', act].concat(content));
}
function optgroup(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['optgroup', act].concat(content));
}
function option(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['option', act].concat(content));
}
function p(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['p', act].concat(content));
}
function param(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['param', act].concat(content));
}
function pre(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['pre', act].concat(content));
}
function progress(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['progress', act].concat(content));
}
function q(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['q', act].concat(content));
}
function script(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['script', act].concat(content));
}
function select(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['select', act].concat(content));
}
function source(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['source', act].concat(content));
}
function span(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['span', act].concat(content));
}
function style(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['style', act].concat(content));
}
function table(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['table', act].concat(content));
}
function tbody(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['tbody', act].concat(content));
}
function tfoot(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['tfoot', act].concat(content));
}
function thead(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['thead', act].concat(content));
}
function td(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['td', act].concat(content));
}
function textarea(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['textarea', act].concat(content));
}
function th(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['th', act].concat(content));
}
function title(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['title', act].concat(content));
}
function tr(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['tr', act].concat(content));
}
function track(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['track', act].concat(content));
}
function ul(act) {
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    return Tmp.apply(void 0, ['ul', act].concat(content));
}
var Color;
(function (Color) {
    Color.IndianRed = "IndianRed";
    Color.LightCoral = "LightCoral";
    Color.Salmon = "Salmon";
    Color.DarkSalmon = "DarkSalmon";
    Color.LightSalmon = "LightSalmon";
    Color.Crimson = "Crimson";
    Color.Red = "Red";
    Color.FireBrick = "FireBrick";
    Color.DarkRed = "DarkRed";
    Color.Pink = "Pink";
    Color.LightPink = "LightPink";
    Color.HotPink = "HotPink";
    Color.DeepPink = "DeepPink";
    Color.MediumVioletRed = "MediumVioletRed";
    Color.PaleVioletRed = "PaleVioletRed";
    Color.Coral = "Coral";
    Color.Tomato = "Tomato";
    Color.OrangeRed = "OrangeRed";
    Color.DarkOrange = "DarkOrange";
    Color.Orange = "Orange";
    Color.Gold = "Gold";
    Color.Yellow = "Yellow";
    Color.LightYellow = "LightYellow";
    Color.LemonChiffon = "LemonChiffon";
    Color.LightGoldenrodYellow = "LightGoldenrodYellow";
    Color.PapayaWhip = "PapayaWhip";
    Color.Moccasin = "Moccasin";
    Color.PeachPuff = "PeachPuff";
    Color.PaleGoldenrod = "PaleGoldenrod";
    Color.Khaki = "Khaki";
    Color.DarkKhaki = "DarkKhaki";
    Color.Lavender = "Lavender";
    Color.Thistle = "Thistle";
    Color.Plum = "Plum";
    Color.Violet = "Violet";
    Color.Orchid = "Orchid";
    Color.Fuchsia = "Fuchsia";
    Color.Magenta = "Magenta";
    Color.MediumOrchid = "MediumOrchid";
    Color.MediumPurple = "MediumPurple";
    Color.Amethyst = "MediumPurple";
    Color.BlueViolet = "BlueViolet";
    Color.DarkViolet = "DarkViolet";
    Color.DarkOrchid = "DarkOrchid";
    Color.DarkMagenta = "DarkMagenta";
    Color.Purple = "Purple";
    Color.Indigo = "Indigo";
    Color.SlateBlue = "SlateBlue";
    Color.DarkSlateBlue = "DarkSlateBlue";
    Color.MediumSlateBlue = "MediumSlateBlue";
    Color.GreenYellow = "GreenYellow";
    Color.Chartreuse = "Chartreuse";
    Color.LawnGreen = "LawnGreen";
    Color.Lime = "Lime";
    Color.LimeGreen = "LimeGreen";
    Color.PaleGreen = "PaleGreen";
    Color.LightGreen = "LightGreen";
    Color.MediumSpringGreen = "MediumSpringGreen";
    Color.SpringGreen = "SpringGreen";
    Color.MediumSeaGreen = "MediumSeaGreen";
    Color.SeaGreen = "SeaGreen";
    Color.ForestGreen = "ForestGreen";
    Color.Green = "Green";
    Color.DarkGreen = "DarkGreen";
    Color.YellowGreen = "YellowGreen";
    Color.OliveDrab = "OliveDrab";
    Color.Olive = "Olive";
    Color.DarkOliveGreen = "DarkOliveGreen";
    Color.MediumAquamarine = "MediumAquamarine";
    Color.DarkSeaGreen = "DarkSeaGreen";
    Color.LightSeaGreen = "LightSeaGreen";
    Color.DarkCyan = "DarkCyan";
    Color.Teal = "Teal";
    Color.Aqua = "Aqua";
    Color.Cyan = "Cyan";
    Color.LightCyan = "LightCyan";
    Color.PaleTurquoise = "PaleTurquoise";
    Color.Aquamarine = "Aquamarine";
    Color.Turquoise = "Turquoise";
    Color.MediumTurquoise = "MediumTurquoise";
    Color.DarkTurquoise = "DarkTurquoise";
    Color.CadetBlue = "CadetBlue";
    Color.SteelBlue = "SteelBlue";
    Color.LightSteelBlue = "LightSteelBlue";
    Color.PowderBlue = "PowderBlue";
    Color.LightBlue = "LightBlue";
    Color.SkyBlue = "SkyBlue";
    Color.LightSkyBlue = "LightSkyBlue";
    Color.DeepSkyBlue = "DeepSkyBlue";
    Color.DodgerBlue = "DodgerBlue";
    Color.CornflowerBlue = "CornflowerBlue";
    Color.RoyalBlue = "RoyalBlue";
    Color.Blue = "Blue";
    Color.MediumBlue = "MediumBlue";
    Color.DarkBlue = "DarkBlue";
    Color.Navy = "Navy";
    Color.MidnightBlue = "MidnightBlue";
    Color.Cornsilk = "Cornsilk";
    Color.BlanchedAlmond = "BlanchedAlmond";
    Color.Bisque = "Bisque";
    Color.NavajoWhite = "NavajoWhite";
    Color.Wheat = "Wheat";
    Color.BurlyWood = "BurlyWood";
    Color.Tan = "Tan";
    Color.RosyBrown = "RosyBrown";
    Color.SandyBrown = "SandyBrown";
    Color.Goldenrod = "Goldenrod";
    Color.DarkGoldenrod = "DarkGoldenrod";
    Color.Peru = "Peru";
    Color.Chocolate = "Chocolate";
    Color.SaddleBrown = "SaddleBrown";
    Color.Sienna = "Sienna";
    Color.Brown = "Brown";
    Color.Maroon = "Maroon";
    Color.White = "White";
    Color.Snow = "Snow";
    Color.Honeydew = "Honeydew";
    Color.MintCream = "MintCream";
    Color.Azure = "Azure";
    Color.AliceBlue = "AliceBlue";
    Color.GhostWhite = "GhostWhite";
    Color.WhiteSmoke = "WhiteSmoke";
    Color.Seashell = "Seashell";
    Color.Beige = "Beige";
    Color.OldLace = "OldLace";
    Color.FloralWhite = "FloralWhite";
    Color.Ivory = "Ivory";
    Color.AntiqueWhite = "AntiqueWhite";
    Color.Linen = "Linen";
    Color.LavenderBlush = "LavenderBlush";
    Color.MistyRose = "MistyRose";
    Color.Gainsboro = "Gainsboro";
    Color.LightGrey = "LightGrey";
    Color.Silver = "Silver";
    Color.DarkGray = "DarkGray";
    Color.Gray = "Gray";
    Color.DimGray = "DimGray";
    Color.LightSlateGray = "LightSlateGray";
    Color.SlateGray = "SlateGray";
    Color.DarkSlateGray = "DarkSlateGray";
    Color.Black = "Black";
})(Color || (Color = {}));
var Display;
(function (Display) {
    Display.block = "block";
    Display.inline = "inline";
    Display.inline_block = "inline-block";
    Display.inline_table = "inline-table";
    Display.list_item = "list-item";
    Display.none = "none";
    Display.run_in = "run-in";
    Display.table = "table";
    Display.table_caption = "table";
    Display.table_cell = "table-caption";
    Display.table_column = "table-column";
    Display.table_column_group = "table-column-group";
    Display.table_footer_group = "table-footer-group";
    Display.table_header_group = "table-header-group";
    Display.table_row = "table-row";
    Display.table_row_group = "table-row-group";
})(Display || (Display = {}));
var Visibility;
(function (Visibility) {
    Visibility.visible = "visible";
    Visibility.hidden = "hidden";
    Visibility.collapse = "collapse";
    Visibility.inherit = "inherit";
})(Visibility || (Visibility = {}));
var WordBreak;
(function (WordBreak) {
    WordBreak.normal = "normal";
    WordBreak.break_all = "break-all";
    WordBreak.keep_all = "keep-all";
})(WordBreak || (WordBreak = {}));
var Align;
(function (Align) {
    Align.bottom = "bottom";
    Align.left = "left";
    Align.middle = "middle";
    Align.right = "right";
    Align.top = "top";
})(Align || (Align = {}));
var VerticalAlign;
(function (VerticalAlign) {
    VerticalAlign.baseline = "baseline";
    VerticalAlign.bottom = "bottom";
    VerticalAlign.middle = "middle";
    VerticalAlign.sub = "sub";
    VerticalAlign.Super = "super";
    VerticalAlign.text_bottom = "text-bottom";
    VerticalAlign.text_top = "text-top";
    VerticalAlign.top = "top";
    VerticalAlign.inherit = "inherit";
})(VerticalAlign || (VerticalAlign = {}));
var WordWrap;
(function (WordWrap) {
    WordWrap.normal = "normal";
    WordWrap.break_word = "break-word";
    WordWrap.inherit = "inherit";
})(WordWrap || (WordWrap = {}));
var Overflow;
(function (Overflow) {
    Overflow.auto = "auto";
    Overflow.hidden = "hidden";
    Overflow.scroll = "scroll";
    Overflow.visible = "visible";
    Overflow.inherit = "inherit";
})(Overflow || (Overflow = {}));
var TextDecoration;
(function (TextDecoration) {
    TextDecoration.blink = "blink";
    TextDecoration.line_through = "line-through";
    TextDecoration.overline = "overline";
    TextDecoration.underline = "underline";
    TextDecoration.none = "none";
    TextDecoration.inherit = "inherit";
})(TextDecoration || (TextDecoration = {}));
var Cursors;
(function (Cursors) {
    Cursors.auto = "auto";
    Cursors._default = "default";
    Cursors.none = "none";
    Cursors.context_menu = "context-menu";
    Cursors.pointer = "pointer";
    Cursors.progress = "progress";
    Cursors.wait = "wait";
    Cursors.cell = "cell";
    Cursors.crosshair = "crosshair";
    Cursors.text = "text";
    Cursors.vertical_text = "vertical-text";
    Cursors.alias = "alias";
    Cursors.copy = "copy";
    Cursors.move = "move";
    Cursors.no_drop = "no-drop";
    Cursors.not_allowed = "not-allowed";
    Cursors.all_scroll = "all-scrol";
    Cursors.col_resize = "col-resize";
    Cursors.row_resize = "row-resize";
    Cursors.n_resize = "n-resize";
    Cursors.e_resize = "e-resize";
    Cursors.s_resize = "s-resize";
    Cursors.w_resize = "w-resize";
    Cursors.ne_resize = "ne-resiz";
    Cursors.nw_resize = "nw-resize";
    Cursors.se_resize = "se-resize";
    Cursors.sw_resize = "sw-resize";
    Cursors.ew_resize = "ew-resize";
    Cursors.ns_resize = "ns-resize";
    Cursors.nesw_resize = "nesw-resize";
    Cursors.nwse_resize = "nwse-resize";
    Cursors.zoom_in = "zoom-in";
    Cursors.zoom_out = "zoom-out";
    Cursors.grab = "grab";
    Cursors.grabbing = "grabbing";
})(Cursors || (Cursors = {}));
//# sourceMappingURL=bso.js.map