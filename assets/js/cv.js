const $cvEspanol = document.getElementById('cvEspanol');
const $cvIngles = document.getElementById('cvIngles');

function changeCV(){
    if($cvEspanol.style.display == 'none' && $cvIngles.style.display == 'block'){
        $cvEspanol.style.display == 'block' && $cvIngles.style.display == 'none';
    }else{
        $cvEspanol.style.display == 'none' && $cvIngles.style.display == 'block'
    }
}