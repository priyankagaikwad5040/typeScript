var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Electronic_device = /** @class */ (function () {
    function Electronic_device(name) {
        this.isOn = false;
        this.name = name;
    }
    Electronic_device.prototype.turnOn = function () {
        this.isOn = true;
        console.log("".concat(this.name, " is turn On"));
    };
    Electronic_device.prototype.turnOff = function () {
        this.isOn = false;
        console.log("".concat(this.name, " is turn Off"));
    };
    return Electronic_device;
}());
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop(name, battery_level) {
        var _this = _super.call(this, name) || this;
        _this.battery_level = battery_level;
        return _this;
    }
    Laptop.prototype.battery_check = function () {
        console.log("".concat(this.battery_level, " is of ").concat(this.name));
    };
    return Laptop;
}(Electronic_device));
var Phone = /** @class */ (function (_super) {
    __extends(Phone, _super);
    function Phone(name, model) {
        var _this = _super.call(this, name) || this;
        _this.model = model;
        return _this;
    }
    Phone.prototype.makecall = function (number) {
        console.log("".concat(this.model, " of number ").concat(this.name));
    };
    return Phone;
}(Electronic_device));
var lap = new Laptop("HP", 56);
lap.turnOn();
lap.battery_check();
var phone = new Phone("one plus", 64);
phone.makecall("9856437623");
phone.turnOff();
