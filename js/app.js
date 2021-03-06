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
            getElementView.querySelector('strong').innerText = 'XEM TH??M';
        }else{
            getElementPost.classList.add('extend')
            getElementView.querySelector('strong').innerText = 'THU G???N';
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
            if(getText === 'Xem t???t c???'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getBD.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getBD[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                for(var i=0;i<getBG.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getBG[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                for(var i=0;i<getCT.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getCT[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                for(var i=0;i<getDN.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getDN[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                for(var i=0;i<getDNai.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getDNai[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                for(var i=0;i<getHCM.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHCM[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                for(var i=0;i<getHN.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHN[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                for(var i=0;i<getHP.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHP[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                for(var i=0;i<getLA.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getLA[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                
            }if(getText === 'B??nh D????ng'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getBD.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getBD[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                
            }if(getText === 'B???c Giang'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getBG.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getBG[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                
            }if(getText === 'C???n Th??'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getCT.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getCT[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                
            }if(getText === '???? N???ng'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getDN.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getDN[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                
            }if(getText === '?????ng Nai'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getDNai.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getDNai[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
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
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHCM[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                
            }if(getText === 'H?? N???i'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getHN.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHN[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
                    addLi.innerHTML = liContent
                    var storeUl = document.querySelector('.store ul')
                    storeUl.append(addLi)
                }
                
            }if(getText === 'H???i Ph??ng'){
                var parentLi = document.querySelector('.store')
                var childLi = document.querySelector('.store ul')
                parentLi.removeChild(childLi);
                var addUl = document.createElement('ul')
                var ulcontent = ''
                addUl.innerHTML = ulcontent
                parentLi.append(addUl)
                for(var i=0;i<getHP.length;i++){
                    var addLi = document.createElement('li')
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHP[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
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
                    var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getLA[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
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
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getBD[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
        addLi.innerHTML = liContent
        var storeUl = document.querySelector('.store ul')
        storeUl.append(addLi)
    }
    for(var i=0;i<getBG.length;i++){
        var addLi = document.createElement('li')
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getBG[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
        addLi.innerHTML = liContent
        var storeUl = document.querySelector('.store ul')
        storeUl.append(addLi)
    }
    for(var i=0;i<getCT.length;i++){
        var addLi = document.createElement('li')
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getCT[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
        addLi.innerHTML = liContent
        var storeUl = document.querySelector('.store ul')
        storeUl.append(addLi)
    }
    for(var i=0;i<getDN.length;i++){
        var addLi = document.createElement('li')
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getDN[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
        addLi.innerHTML = liContent
        var storeUl = document.querySelector('.store ul')
        storeUl.append(addLi)
    }
    for(var i=0;i<getDNai.length;i++){
        var addLi = document.createElement('li')
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getDNai[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
        addLi.innerHTML = liContent
        var storeUl = document.querySelector('.store ul')
        storeUl.append(addLi)
    }
    for(var i=0;i<getHCM.length;i++){
        var addLi = document.createElement('li')
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHCM[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
        addLi.innerHTML = liContent
        var storeUl = document.querySelector('.store ul')
        storeUl.append(addLi)
    }
    for(var i=0;i<getHN.length;i++){
        var addLi = document.createElement('li')
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHN[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
        addLi.innerHTML = liContent
        var storeUl = document.querySelector('.store ul')
        storeUl.append(addLi)
    }
    for(var i=0;i<getHP.length;i++){
        var addLi = document.createElement('li')
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getHP[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
        addLi.innerHTML = liContent
        var storeUl = document.querySelector('.store ul')
        storeUl.append(addLi)
    }
    for(var i=0;i<getLA.length;i++){
        var addLi = document.createElement('li')
        var liContent = '<li><i class="fas fa-caret-right"></i><span>'+getLA[i]+'<a href="">B???n ????? ???????ng ??i</a></span></li>'
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
    hn: ['182 Cao L???, H. ????ng Anh, H?? N???i','194 L?? Du???n, H?? N???i','382 Nguy???n V??n C???, H?? N???i','348 H??? T??ng M???u, C???u Di???n, T??? Li??m, H?? N???i'],
    hcm: ['1060 ???????ng 3/2, Ph?????ng 12, Qu???n 11, TP HCM','436 Quang Trung, Ph?????ng 10, Qu???n G?? V???p, TP.HCM','347 Ho??ng V??n Th???, Qu???n T??n B??nh, TP. H??? Ch?? Minh (V??ng xoay L??ng Cha C???)','188Ter Tr???n Quang Kh???i, Qu???n 1, TP HCM (?????a ch??? c??: 55 Tr???n Quang Kh???i)'],
    hp: ['258 T?? Hi???u - L?? Ch??n - H???i Ph??ng','72 L???ch Tray, Ng?? Quy???n, TP H???i Ph??ng','67 B???ch ?????ng, TT N??i ????o, Th???y Nguy??n, H???i Ph??ng'],
    dn: ['153-155 Nguy???n V??n Linh, TP ???? N???ng','580 - 582 ??i???n BI??n Ph???, Thanh Kh?? ????ng, Thanh Kh??, ???? N???ng'],
    ct: ['221 ???????ng 3 Th??ng 2 - Ninh Ki???u - C???n Th??','11 ?????i l??? Ho?? B??nh, T??n An, Ninh Ki???u, C???n Th?? (Shop SIS MobiFone)'],
    la: ['189 H??ng V????ng, P3, TP. T??n An, Long An'],
    dnai: ['692 Ph???m V??n Thu???n, Tam Hi???p, TP Bi??n Ho??, ?????ng Nai (G???n ch??? T??n Mai)'],
    bd: ['57C-57D Nguy???n V??n Ti???t, KP. B??nh H??a, P.L??i Thi??u, TP Thu???n An, B??nh D????ng'],
    bg: ['S??? 2 Nguy???n V??n C???, TP B???c Giang']
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
            return value.trim() ? undefined : 'Vui l??ng nh???p tr?????ng n??y'
        }
    };
}

Validator.isEmail = function (selector) {
    return {
        selector: selector, 
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            return regex.test(value) ? undefined : 'Vui l??ng nh???p Email';
        }
    };
}

Validator.isNumberPhone = function (selector){
    return {
        selector: selector, 
        test: function (value) {
            var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ ;
            return regex.test(value) ? undefined : 'Vui l??ng nh???p S??? ??i???n Tho???i';
        }
    };
}

// -------------------------
//   click l???y ra t??n s???n ph???m
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
//     th??m chi ti???t s???n ph???m
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
    var htmlImagePost = '<img src="'+image+'" alt=""><div class="config-detail"><i class="fad fa-cog"></i><span>C???u h??nh chi ti???t</span></div>';
    var htmlNamePost = 'Th??ng s??? k??? thu???t '+name+'';
    

    topProduct.innerHTML = htmlName;
    linkBack.innerHTML = htmlNameBack;
    img.innerHTML = htmlImg;
    selectPrice.innerHTML = htmlPrice;
    imagePost.innerHTML = htmlImagePost;
    namePostRight.innerText = htmlNamePost;
    if(name.includes('M??y l???c kh??ng kh??')){
        var htmlCompany = '<span>M??y l???c kh??ng kh??</span>';
        linkBack1.innerHTML = htmlCompany;
    }

}

// -------------------------------------
//     l???y d??? li???u ????? th??m v??o gi??? h??ng
// -------------------------------------

var btnAddCart = document.querySelector('.addcart-btn')
btnAddCart.onclick = function (event) {
    var productName = document.querySelector('.top-product h2').innerText
    var productImage = document.querySelector('.item-img img').src
    var productPrice = document.querySelector('.price-detail strong').innerText
    addCart(productName,productPrice,productImage)
}


// -----------------------
//    th??m gi??? h??ng
// -----------------------


function addCart(proName,proPrice,proImage) {
    var addTr = document.createElement('tr')
    var trContent = '<tr ><td style="padding-right: 20px;padding-left: 10px;display: flex;justify-content: center;align-items: center;font-size: 16px;white-space: nowrap;"><img src="'+proImage+'" alt=""><p style="width: 185px;display: inline-block;overflow: hidden;text-overflow: ellipsis;">'+proName+'</p></td><td style="font-size: 18px;font-weight: 600;;padding-right: 20px;color: red;text-align: center;vertical-align: middle;"><p><span class="pro-price" style="white-space: nowrap;">'+proPrice+'</span></p></td><td style="padding-right: 32px;text-align: center;vertical-align: middle;"><input style="width: 30px; outline: none;" type="number" id="soluong" value="1" min="1"></td><td style="text-align: center;vertical-align: middle;padding-right:36px"><span class="pro-delete"><i class="fas fa-times" style="font-size: 30px;color: rgb(253, 71, 39);cursor: pointer;"></i></span></td></tr>'
    addTr.innerHTML = trContent
    var cartTable = document.querySelector(".wrap-cart-pro tbody")
    cartTable.append(addTr)
    cartTotal()
    cartDelete()
}

// -------------------------
//     t???ng ti???n s???n ph???m
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
//     x??a s???n ph???m trong gi??? h??ng
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
