const button = document.getElementById('current-state');

button.addEventListener('click',()=>{
    if(button.innerHTML==='<i class="fas fa-play-circle"></i>'){
        button.innerHTML='<i class="fas fa-pause-circle"></i>';
    }
    if(button.innerHTML==='<i class="fas fa-pause-circle"></i>'){
        button.innerHTML='<i class="fas fa-play-circle"></i>';
    }
});