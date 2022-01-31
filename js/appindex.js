// -----------------------------
//     open chat box 2page
// ----------------------------

function openChatBox() {
    var getBtnMessage = document.querySelector('.btn-message')
    getBtnMessage.onclick = function (event){
        document.querySelector('.wrap-chatbox').classList.add('animation-chat-box')
    }
}

function closeChatBox() {
    var getIconClose = document.querySelector('.close-chatbox i')
    getIconClose.onclick = function (event) {
        document.querySelector('.wrap-chatbox').classList.remove('animation-chat-box')
    }
}

// -------------------------
//     form-chat
// -------------------------

function Validator(options) {

    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        if(errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid')
        }else{
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid')
        }
    }

    var formElement = document.querySelector(options.form);
    if(formElement){
        options.rules.forEach( function (rule) {
            var inputElement = formElement.querySelector(rule.selector);

            if(inputElement){
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid')
                }

            }
        });
    }
}

Validator.isRequired = function (selector){
    return {
        selector: selector, 
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    };
}

Validator.isEmail = function (selector) {
    return {
        selector: selector, 
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            return regex.test(value) ? undefined : 'Vui lòng nhập Email';
        }
    };
}

Validator.isNumberPhone = function (selector){
    return {
        selector: selector, 
        test: function (value) {
            var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ ;
            return regex.test(value) ? undefined : 'Vui lòng nhập Số Điện Thoại';
        }
    };
}

// ------------------
//     Call
// ------------------
openChatBox();
closeChatBox();