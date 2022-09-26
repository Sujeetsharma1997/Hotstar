let data=JSON.parse(localStorage.getItem('singup')) || [];
document.getElementById('submit').addEventListener('click',function(event){
    event.preventDefault();
    let form =document.querySelector('form');
    let email=form.email.value;
    let password=form.password.value;
    let flag=false;
    data.forEach(element => {
        if(email==element.email && password==element.password){
            flag=true;
        }
    });
    if(flag){
        alert('login Succesfully')
        window.location.href='index.html'
    }
    else{
        alert('wrong creditional ')
    }
    console.log(data);

})