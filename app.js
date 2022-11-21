const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');   
}); 


/*if (document.body.className = "dark"){
    document.getElementById("nav").className = "navbar bg-dark";
};*/

/*if (document.getElementsByClassName("dark") != null){
    document.getElementById("nav").className = "navbar bg-dark";
};*/