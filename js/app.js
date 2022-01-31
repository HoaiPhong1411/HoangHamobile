// --------------------------
//     slider show
// -------------------------

const sliderItems = document.querySelectorAll('.slide-item');
const sliderItemWidth = sliderItems[0].offsetWidth;
const prevBtn = document.querySelector('.slide-prev')
const nextBtn = document.querySelector('.slide-next')
const slides = document.querySelector('#slider .slides')
const sliderLenght = sliderItems.length;
let positionX = 0;
let index = 0; 

prevBtn.onclick = function (){
    handleChangeSlide(-1);
}

nextBtn.onclick = function (){
    handleChangeSlide(1);
}

function handleChangeSlide (dir){

    if(dir === 1){
        if (index >= sliderLenght - 1){
            index = sliderLenght - 1;
            return;
        }
        positionX = positionX - sliderItemWidth;
        slides.style.transform = 'translateX('+positionX+'px)';
        index++;
    }else if(dir === -1){
        if (index <= 0) {
            index = 0;
            return;
        }
        positionX = positionX + sliderItemWidth;
        slides.style.transform = 'translateX('+positionX+'px)';
        index--;
    }
}

// -----------------------
//     preventDefault href  page detail
// -----------------------

var defaula = document.querySelectorAll('.item a')
for(var i=0;i<defaula.length;i++){
    defaula[i].onclick = function (event) {
        event.preventDefault();
    }
}

var defaullinkback = document.querySelector('.homepage')
    defaullinkback.onclick = function (event) {
        event.preventDefault();
        document.querySelector('.home-page').style.display = "block";
        document.querySelector('.detail-page').style.display = "none";
        window.scrollTo(0,0);
    }

var defaulLogo = document.querySelector('.logo')
    defaulLogo.onclick = function (event) {
        event.preventDefault();
        document.querySelector('.home-page').style.display = "block";
        document.querySelector('.detail-page').style.display = "none";
        window.scrollTo(0,0);
    }


// -----------------------
//     Set Border version page detail
// -----------------------

function setBorder() {
    var getItem = document.querySelectorAll("#version-option .item")
    for(var i=0;i<getItem.length;i++){
        getItem[i].onclick = function (event){
            for (var a=0;a<getItem.length;a++){
                var checkAttri = getItem[a].classList.contains('active')
                if(checkAttri === true){
                    getItem[a].classList.remove('active')
                }else {
                    this.classList.add('active')
                }
            }
            
        }
    }
    
}


// -----------------------
//     Set Border color  page detail
// -----------------------

function setBorderColor() {
    var getItem = document.querySelectorAll("#color-option .item")
    for(var i=0;i<getItem.length;i++){
        getItem[i].onclick = function (event){
            for (var a=0;a<getItem.length;a++){
                var checkAttri = getItem[a].classList.contains('active')
                if(checkAttri === true){
                    getItem[a].classList.remove('active')
                }else {
                    this.classList.add('active')
                }
            }
            
        }
    }
    
}

// --------------------------------
    // favorite product     page detail
// --------------------------------

function heart(){
    var buttonheart = document.querySelector(".favorite-pro");
    buttonheart.onclick = function (event){
        buttonheart.querySelector('i').classList.toggle('heart-red');
    }
}

// ------------------------------
//     view more post  page detail
// ------------------------------

function viewMorePost() {
    var getElementView = document.querySelector('.view-more a')
    getElementView.addEventListener("click", function(event){
        event.preventDefault();
    })
    getElementView.onclick = function (event){
        var getElementPost = document.querySelector('.post-product-text')
        var condition = getElementPost.classList.contains('extend')
        if(condition === true){
            getElementPost.classList.remove('extend')
            getElementView.querySelector('strong').innerText = 'XEM THÊM';
        }else{
            getElementPost.classList.add('extend')
            getElementView.querySelector('strong').innerText = 'THU GỌN';
        }
    }
}

// ------------------------
//     ChangeTextLocation
// ------------------------

function changeButtonLocation(locane) {
    var getElementLi = document.querySelectorAll('.country li')
    for(var i=0;i<getElementLi.length;i++){
        getElementLi[i].onclick = function (event) {
            var getText = this.querySelector('a').innerText
            var getElementA = document.querySelectorAll('.country a')
            for(var a=0;a<getElementA.length;a++){
                var checkClass = getElementA[a].classList.contains('link-location-red')
                if(checkClass === true){
                    getElementA[a].classList.remove('link-location-red')
                }
                var selectA = this.querySelector('a')
                selectA.classList.add('link-location-red')
                
            }
            document.querySelector('.see-all label').innerText = getText;
            var getHN = locane.hn
            var getHCM = locane.hcm
            var getHP = locane.hp
            var getDN = locane.dn
            var getCT = locane.ct
            var getLA = locane.la
            var getDNai = locane.dnai
            var getBD = locane.bd
            var getBG = locane.bg
            if(getText === 'Xem tất cả'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getBD.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getBD[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                for(var i=0;i<getBG.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getBG[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                for(var i=0;i<getCT.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getCT[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                for(var i=0;i<getDN.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getDN[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                for(var i=0;i<getDNai.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getDNai[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                for(var i=0;i<getHCM.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHCM[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                for(var i=0;i<getHN.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHN[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                for(var i=0;i<getHP.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHP[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                for(var i=0;i<getLA.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getLA[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                
            }if(getText === 'Bình Dương'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getBD.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getBD[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                
            }if(getText === 'Bắc Giang'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getBG.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getBG[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                
            }if(getText === 'Cần Thơ'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getCT.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getCT[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                
            }if(getText === 'Đà Nẵng'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getDN.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getDN[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                
            }if(getText === 'Đồng Nai'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getDNai.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getDNai[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                
            }if(getText === 'TP HCM'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getHCM.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHCM[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                
            }if(getText === 'Hà Nội'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getHN.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHN[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                
            }if(getText === 'Hải Phòng'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getHP.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHP[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                
            }if(getText === 'Long An'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getLA.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getLA[i]+'<a href="">Bản đồ đường đi</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                
            }
        }
    }
}

function LocationDefault(locane) {
    var getHN = locane.hn
    var getHCM = locane.hcm
    var getHP = locane.hp
    var getDN = locane.dn
    var getCT = locane.ct
    var getLA = locane.la
    var getDNai = locane.dnai
    var getBD = locane.bd
    var getBG = locane.bg
    var parentLi = document.querySelector('.store')
    var childLi = document.querySelector('.store ul')
    parentLi.removeChild(childLi);
    var addUl = document.createElement('ul')
    var ulcontent = ''
    addUl.innerHTML = ulcontent
    parentLi.append(addUl)
    for(var i=0;i<getBD.length;i++){
        var addLi = document.createElement('li')
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getBD[i]+'<a href="">Bản đồ đường đi</a></span></li>'
        addLi.innerHTML = liContent
        var storeUl = document.querySelector('.store ul')
        storeUl.append(addLi)
    }
    for(var i=0;i<getBG.length;i++){
        var addLi = document.createElement('li')
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getBG[i]+'<a href="">Bản đồ đường đi</a></span></li>'
        addLi.innerHTML = liContent
        var storeUl = document.querySelector('.store ul')
        storeUl.append(addLi)
    }
    for(var i=0;i<getCT.length;i++){
        var addLi = document.createElement('li')
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getCT[i]+'<a href="">Bản đồ đường đi</a></span></li>'
        addLi.innerHTML = liContent
        var storeUl = document.querySelector('.store ul')
        storeUl.append(addLi)
    }
    for(var i=0;i<getDN.length;i++){
        var addLi = document.createElement('li')
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getDN[i]+'<a href="">Bản đồ đường đi</a></span></li>'
        addLi.innerHTML = liContent
        var storeUl = document.querySelector('.store ul')
        storeUl.append(addLi)
    }
    for(var i=0;i<getDNai.length;i++){
        var addLi = document.createElement('li')
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getDNai[i]+'<a href="">Bản đồ đường đi</a></span></li>'
        addLi.innerHTML = liContent
        var storeUl = document.querySelector('.store ul')
        storeUl.append(addLi)
    }
    for(var i=0;i<getHCM.length;i++){
        var addLi = document.createElement('li')
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHCM[i]+'<a href="">Bản đồ đường đi</a></span></li>'
        addLi.innerHTML = liContent
        var storeUl = document.querySelector('.store ul')
        storeUl.append(addLi)
    }
    for(var i=0;i<getHN.length;i++){
        var addLi = document.createElement('li')
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHN[i]+'<a href="">Bản đồ đường đi</a></span></li>'
        addLi.innerHTML = liContent
        var storeUl = document.querySelector('.store ul')
        storeUl.append(addLi)
    }
    for(var i=0;i<getHP.length;i++){
        var addLi = document.createElement('li')
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHP[i]+'<a href="">Bản đồ đường đi</a></span></li>'
        addLi.innerHTML = liContent
        var storeUl = document.querySelector('.store ul')
        storeUl.append(addLi)
    }
    for(var i=0;i<getLA.length;i++){
        var addLi = document.createElement('li')
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getLA[i]+'<a href="">Bản đồ đường đi</a></span></li>'
        addLi.innerHTML = liContent
        var storeUl = document.querySelector('.store ul')
        storeUl.append(addLi)
    }
}

function disableTagA() {
    var selectA = document.querySelectorAll('.country a')
    for(var i =0;i<selectA.length;i++){
        selectA[i].onclick = function (event) {
            event.preventDefault();
        }
    }
}



// --------------------------
//     array location
// --------------------------

var locane = {
    hn: ['182 Cao Lỗ, H. Đông Anh, Hà Nội','194 Lê Duẩn, Hà Nội','382 Nguyễn Văn Cừ, Hà Nội','348 Hồ Tùng Mậu, Cầu Diễn, Từ Liêm, Hà Nội'],
    hcm: ['1060 Đường 3/2, Phường 12, Quận 11, TP HCM','436 Quang Trung, Phường 10, Quận Gò Vấp, TP.HCM','347 Hoàng Văn Thụ, Quận Tân Bình, TP. Hồ Chí Minh (Vòng xoay Lăng Cha Cả)','188Ter Trần Quang Khải, Quận 1, TP HCM (Địa chỉ cũ: 55 Trần Quang Khải)'],
    hp: ['258 Tô Hiệu - Lê Chân - Hải Phòng','72 Lạch Tray, Ngô Quyền, TP Hải Phòng','67 Bạch Đằng, TT Núi Đèo, Thủy Nguyên, Hải Phòng'],
    dn: ['153-155 Nguyễn Văn Linh, TP Đà Nẵng','580 - 582 Điện BIên Phủ, Thanh Khê Đông, Thanh Khê, Đà Nẵng'],
    ct: ['221 Đường 3 Tháng 2 - Ninh Kiều - Cần Thơ','11 Đại lộ Hoà Bình, Tân An, Ninh Kiều, Cần Thơ (Shop SIS MobiFone)'],
    la: ['189 Hùng Vương, P3, TP. Tân An, Long An'],
    dnai: ['692 Phạm Văn Thuận, Tam Hiệp, TP Biên Hoà, Đồng Nai (Gần chợ Tân Mai)'],
    bd: ['57C-57D Nguyễn Văn Tiết, KP. Bình Hòa, P.Lái Thiêu, TP Thuận An, Bình Dương'],
    bg: ['Số 2 Nguyễn Văn Cừ, TP Bắc Giang']
}

// 
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

// -------------------------
//   click lấy ra tên sản phẩm
// -------------------------

var itemProFs = document.querySelectorAll('.flash-sale .item')
    itemProFs.forEach( function (item){
        item.onclick = function (event){
            var productImage = item.querySelector('img').src
            var productName = item.querySelector('.title').innerText
            var productPriceSale = item.querySelector('.price strong').innerText
            var productPrice = item.querySelector('.price strike').innerText

            addDetail(productImage, productName, productPrice, productPriceSale);
            document.querySelector('.home-page').style.display = "none";
            document.querySelector('.detail-page').style.display = "block";
            window.scrollTo(0,0);
        }
    })


var itemPro = document.querySelectorAll('.content-prooduct-list .item')
    itemPro.forEach( function (item){
        item.onclick = function (event){
            var productImage = item.querySelector('img').src
            var productName = item.querySelector('.title').innerText
            var productPriceSale = item.querySelector('.price strong').innerText
            var productPrice = item.querySelector('.price strike').innerText

            addDetail(productImage, productName, productPrice, productPriceSale);
            document.querySelector('.home-page').style.display = "none";
            document.querySelector('.detail-page').style.display = "block";
            window.scrollTo(0,0);
        }
    })

// ---------------------------
//     thêm chi tiết sản phẩm
// --------------------------

function addDetail(image, name, price, priceSale) {
    var topProduct = document.querySelector('.top-product')
    var linkBack = document.querySelector('.sp')
    var img = document.querySelector('.item-img a')
    var selectPrice = document.querySelector('.price-detail')
    var imagePost = document.querySelector('.wrap-img-btn')
    var namePostRight = document.querySelector('.wrap-detail-sp h3')
    var linkBack1 = document.querySelector('.company')

    var htmlPrice = '<strong>'+priceSale+'</strong><strike>'+price+'</strike>';
    var htmlImg = '<img src="'+image+'" alt="">';
    var htmlNameBack = '<span>'+name+'</span>';
    var htmlName = '<h2>'+name+'</h2>';
    var htmlImagePost = '<img src="'+image+'" alt=""><div class="config-detail"><i class="fad fa-cog"></i><span>Cấu hình chi tiết</span></div>';
    var htmlNamePost = 'Thông số kỹ thuật '+name+'';
    

    topProduct.innerHTML = htmlName;
    linkBack.innerHTML = htmlNameBack;
    img.innerHTML = htmlImg;
    selectPrice.innerHTML = htmlPrice;
    imagePost.innerHTML = htmlImagePost;
    namePostRight.innerText = htmlNamePost;
    if(name.includes('Máy lọc không khí')){
        var htmlCompany = '<span>Máy lọc không khí</span>';
        linkBack1.innerHTML = htmlCompany;
    }

}

// -------------------------------------
//     lấy dữ liệu để thêm vào giỏ hàng
// -------------------------------------

var btnAddCart = document.querySelector('.addcart-btn')
btnAddCart.onclick = function (event) {
    var productName = document.querySelector('.top-product h2').innerText
    var productImage = document.querySelector('.item-img img').src
    var productPrice = document.querySelector('.price-detail strong').innerText
    addCart(productName,productPrice,productImage)
}


// -----------------------
//    thêm giỏ hàng
// -----------------------


function addCart(proName,proPrice,proImage) {
    var addTr = document.createElement('tr')
    var trContent = '<tr ><td style="padding-right: 20px;padding-left: 10px;display: flex;justify-content: center;align-items: center;font-size: 16px;white-space: nowrap;"><img src="'+proImage+'" alt=""><p style="width: 185px;display: inline-block;overflow: hidden;text-overflow: ellipsis;">'+proName+'</p></td><td style="font-size: 18px;font-weight: 600;;padding-right: 20px;color: red;text-align: center;vertical-align: middle;"><p><span class="pro-price" style="white-space: nowrap;">'+proPrice+'</span></p></td><td style="padding-right: 32px;text-align: center;vertical-align: middle;"><input style="width: 30px; outline: none;" type="number" id="soluong" value="1" min="1"></td><td style="text-align: center;vertical-align: middle;padding-right:25px"><span class="pro-delete"><i class="fas fa-times" style="font-size: 30px;color: rgb(253, 71, 39);cursor: pointer;"></i></span></td></tr>'
    addTr.innerHTML = trContent
    var cartTable = document.querySelector(".wrap-cart-pro tbody")
    cartTable.append(addTr)
    cartTotal()
    cartDelete()
}

// -------------------------
//     tổng tiền sản phẩm
// -------------------------

function cartTotal(){
    var cartItem = document.querySelectorAll('.wrap-cart-pro tbody tr')
    var totalB = 0
    var totalQuantily = 0
    cartItem.forEach(function (cartI) {
        var pdPricespace = cartI.querySelector('.pro-price').innerHTML
        var pdPrice = pdPricespace.slice(0, -6)
        var inputVl = cartI.querySelector('input').value
        var totalA = pdPrice*inputVl*1000000
        totalB = totalB + totalA
        var quantity = Number(inputVl)
        totalQuantily = totalQuantily + quantity
    })
    var cartTotalA = document.querySelector('.total-price span')
    var cartTotalQuantily = document.querySelector('.cart .cart-total')
    cartTotalA.innerHTML = totalB.toLocaleString('de-DE')
    cartTotalQuantily.innerHTML = totalQuantily
    updateQuantily()
}

// --------------------------------------
//     xóa sản phẩm trong giỏ hàng
// -------------------------------------

function cartDelete() {
    var cartItem = document.querySelectorAll('.wrap-cart-pro tbody tr')
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll('.pro-delete')
        productT[i].onclick = function (event) {
            var deleteCart = event.target
            var cartRemove = deleteCart.parentElement.parentElement.parentElement
            cartRemove.remove()
            cartTotal()
        }
    }
}   

function updateQuantily() {
    var cartItem = document.querySelectorAll('tbody tr')
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector('input')
        inputValue.onchange = function () {
            cartTotal()
        }
    }
}


// ------------------
//     call
// ------------------

setBorder();
setBorderColor();
heart();
viewMorePost();
changeButtonLocation(locane);
disableTagA();
LocationDefault(locane);
openChatBox();
closeChatBox();
