const $cvEspanol = document.getElementById('cvEspanol');
const $cvIngles = document.getElementById('cvIngles');
const $CvDownload = document.getElementById('CvDownload'); 
const $changeCV = document.getElementById('changeCV');

$changeCV.addEventListener('click', ()=>{
    if($cvEspanol.style.display == 'none' && $cvIngles.style.display == 'block'){
        $cvEspanol.style.display = 'block';
        $cvIngles.style.display = 'none';
        $CvDownload.href = './assets/pdf/JavierSerranoCVSpanish.pdf';
        
    }else{
        $cvEspanol.style.display = 'none';
        $cvIngles.style.display = 'block';
        $CvDownload.href = './assets/pdf/JavierSerranoCVEnglish.pdf';
    }
});

function changeCV(){
    if($cvEspanol.style.display == 'none' && $cvIngles.style.display == 'block'){
        debugger;
        $cvEspanol.style.display == 'block' && $cvIngles.style.display == 'none';
    }else{
        $cvEspanol.style.display == 'none' && $cvIngles.style.display == 'block'
    }
}