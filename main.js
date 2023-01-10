const pwd = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#pwd-confirm");
const pwDiv = document.querySelector("#sign-up-form").lastElementChild.firstElementChild;
pwDiv.style.setProperty('--pw-alert', 'hidden'); 
const pwInfo = document.querySelector(".pw-info");
pwInfo.style.visibility = 'hidden';
const form = document.querySelector("#sign-up-form");
form.addEventListener('submit', submitPws)

const regex = /(?=.*[\S]{8,16})(?=.*[\d])(?=.*[^\w\s])(?=.*[a-z])(?=.*[A-Z])[\S]{8,16}/;

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener('click', () => {
    pwInfo.style.visibility = 'hidden';
})

pwd.addEventListener('input', e => {
    let pw = e.target.value;
    checkPws(pw, 'pwd');
})

pwdConfirm.addEventListener('input', e => {
    let pw = e.target.value;
    checkPws(pw, 'pwd-confirm');
})

function checkPws(pw, input) {
    if (input == 'pwd') {
        const color = pw.match(regex) ? 'var(--valid-color)' : 'var(--invalid-color)'; 
        const pwd2 = pwdConfirm.value;

        if (pwd2 != pw) pwsMatch(false);
        else pwsMatch(true)

        pwd.style.setProperty('--regex-match-color', color)
    } 
    else {
        const pwd1 = pwd.value;
        if (pwd1 != pw) {
            pwsMatch(false);
            pwdConfirm.style.setProperty('--confirm-pw-color', 'var(--invalid-color)');
        }
        else {
            pwsMatch(true);
            pwdConfirm.style.setProperty('--confirm-pw-color', 'var(--valid-color)');
        }
    }
}

function pwsMatch(match) {
    if (!pwdConfirm.value) return;
    if (match) pwDiv.style.setProperty('--pw-alert', 'hidden'); 
    else pwDiv.style.setProperty('--pw-alert', 'visible');
    
}

function submitPws(e) {
    pwd1 = pwd.value;
    pwd2 = pwdConfirm.value;
    if (!pwd1.match(regex)) {
        e.preventDefault();
        pwInfo.style.visibility = 'visible';
    } else if (pwd1 != pwd2) {
        e.preventDefault();
    }
    return;
}