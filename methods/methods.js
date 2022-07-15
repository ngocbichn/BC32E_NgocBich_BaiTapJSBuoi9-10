//Validation
function kiemTraRong(value, selectorError, name) {
    if (value.trim() != '') {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' không được bỏ trống!';
    return false;
};

function kiemTraTatCaKyTu(value, selectorError, name) {
    var regexLetter = /^[A-Z a-z]+$/;
    if (regexLetter.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' tất cả phải là chữ!';
    return false;
};

function kiemTraTatCaSo(value, selectorError, name) {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' tất cả phải là số!';
    return false;
};

function kiemTraEmail(value, selectorError, name) {
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' phải là định dạng email!';
    return false;
};

function kiemTraDate(value, selectorError, name) {
    var regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (regexDate.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' phải là định dạng ngay thang nam!';
    return false;
};

function kiemTraDoDai(value, selectorError, name, minLength, maxLength) {
    var lengthValue = value.length;
    if (lengthValue > maxLength || lengthValue < minLength) {
        document.querySelector(selectorError).innerHTML = name + ' từ ' + minLength + ' đến ' + maxLength + ' ký tự!';
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
};

function kiemTraGiaTri(value, selectorError, name, minValue, maxValue) {
    value = Number(value);
    if (value > maxValue || value < minValue) {
        document.querySelector(selectorError).innerHTML = name + ' từ ' + minValue + ' đến ' + maxValue;
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
};
