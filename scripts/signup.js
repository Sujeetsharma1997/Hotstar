document.getElementById('submit').addEventListener('click',function(){
    let data=JSON.parse(localStorage.getItem('singup')) || [];
    let form =document.querySelector('form');
    let name=form.name.value;
    let contact=form.contact.value;
    let email=form.email.value;
    let password=form.password.value;
    let obj={name,contact,email,password}
    data.push(obj);
    localStorage.setItem('singup',JSON.stringify(data));

})