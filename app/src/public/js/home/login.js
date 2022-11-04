'use strict';
console.log('hello');
console.log('bye');

const id = document.querySelector('#id'),
    psword = document.querySelector('#psword'),
    loginBtn = document.querySelector('button');

    console.log(id)

loginBtn.addEventListener('click',login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value
    }
    console.log(req);
    console.log(JSON.stringify(req));
    
    
    
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(req),
    })
}