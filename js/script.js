function btnSend(ownValue) {
    let firstName = document.querySelector('#firstName');
    let lastName = document.querySelector('#lastName');
    let email = document.querySelector('#email');
    let subject = document.querySelector('#subject');
    let des = document.querySelector('#des');
    let allInput = [firstName, lastName, email, subject, des];
    
    ownValue.setAttribute('href','nikhilchandraroypoet@gmail.com?subject='+subject.value+';body='+des.value+ ' Thanks you ,' + firstName.value + ' ' + lastName.value);
    ownValue.setAttribute('target', '_blank');
}

// input validation

let inputAll = document.querySelectorAll('input');
let des = document.querySelector('#des');

for (let i = 0; i < inputAll.length; i++) {
    inputAll[i].oninput = function () {
        let resAll = /[^a-z]/gi;
     inputAll[i].value = inputAll[i].value.replace(resAll, '')
    }
}


// function letterinputFunction(input) {
//     var ltr = /[^a-z ]/gi;
//     input.value = input.value.replace(ltr, '');
// }
