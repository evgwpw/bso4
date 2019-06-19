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
/// <reference path="../../bso/bso.ts" />
/// <reference path="../../bso/bootstrapCss.ts" />
/// <reference path="../../bootstrap.datepicker/bootstrap.datepicker.d.ts" />
var data = {
    FirstName: 'Семен',
    LastName: 'Горбунков',
    BirthDay: new Date(1941, 08, 27)
};
var Binder1 = /** @class */ (function (_super) {
    __extends(Binder1, _super);
    function Binder1(srcData) {
        var _this = _super.call(this, srcData) || this;
        _this.srcData = srcData;
        return _this;
    }
    return Binder1;
}(Binder));
var binder = new Binder1(data);
var binding1 = div(function (t) { t.style.width = '200px'; }, function () { return inputText(function (t) {
    binder.BS(t, function (x) { return x.value; }, function (x) { return x.FirstName; });
    t.className = bootstrapCss.form_control;
}); }, function () { return br(); }, function () { return inputText(function (t) {
    binder.BS(t, function (x) { return x.value; }, function (x) { return x.LastName; });
    t.className = bootstrapCss.form_control;
}); }, function () { return br(); }, function () { return div(EmptyAction, function () { return inputText(function (t) {
    t.className = bootstrapCss.form_control;
    var dp = $(t).datetimepicker({
        autoclose: true,
        format: "dd.mm.yyyy",
        language: "ru",
        todayBtn: true,
        startView: 2,
        minView: 2,
        showClear: true,
        showClose: true,
        pickTime: false
    })
        .data('datetimepicker');
    binder.BC(t, function (t) { return binder.Data.BirthDay; }, function (t) { return dp.getDate(); }, function (e) {
        dp.setDate(binder.Data.BirthDay);
    });
    dp.setDate(binder.srcData.BirthDay);
}); }, function () { return br(); }, function () { return button(function (t) {
    t.textContent = 'Button1';
    t.onclick = function (me) {
        var obj = binder.Data;
        var str = JSON.stringify(obj);
        alert(str);
    };
}); }); });
$(document).ready(function () {
    $('body')[0].appendChild(binding1);
});
var Test = /** @class */ (function () {
    function Test() {
        var _this = this;
        this.test = div(function (t) {
            _this.prn = t;
        }, function () { return div(EmptyAction, function () { return div(EmptyAction, function () { return div(function (x) {
            _this.prn;
        }); }); }); });
    }
    return Test;
}());
//# sourceMappingURL=binding1.js.map