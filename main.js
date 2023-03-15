const meform = document.querySelector('#meform');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

meform.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    console.log(nameInput.value)

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        console.log('Success');

        const li = document.createElement('li');
        li.appendChild(document.createTextNode('${nameInput.value} : ${emailInput.value}'));

        userList.appendChild(li);

        //Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
