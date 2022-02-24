const toggleSwitch = document.querySelector('input[type="checkbox"]');



// EVENT LISTENER
toggleSwitch.addEventListener('change',function(event){
    //console.log(event.target.checked);
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
    }
    else{
        document.documentElement.setAttribute('data-theme','');
    }
});