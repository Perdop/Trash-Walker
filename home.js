const estadoSalvoEn = localStorage.getItem("en");

var en = false;
en = estadoSalvoEn === "true";
const language = document.getElementById("language");
const infoTit = document.getElementById("infoTit");
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const info4 = document.getElementById("info4");
const creditTit = document.getElementById("creditTit");
const aprendizado = document.getElementById("aprendizado");


updateLanguage()
language.addEventListener("click", updateLanguage);


function updateLanguage(){

    if (!en){
        en = true

        language.innerHTML = "EN";
        infoTit.innerHTML = "Informação";
        info1.innerHTML = "• Pressione o botão Start";
        info2.innerHTML = "• Pule com o espaço";
        info3.innerHTML = "• Ao perder é só clicar no botão restart";
        info4.innerHTML = "• No caso de algum erro, reinicie a página";
        creditTit.innerHTML = "Creditos";
        aprendizado.innerHTML = "Aprendizado";
    } else if (en){
        en = false;
        
        language.innerHTML = "BR";
        infoTit.innerHTML = "Information";
        info1.innerHTML = "• Press Start";
        info2.innerHTML = "• Use space to jump";
        info3.innerHTML = "• Press restar to try again";
        info4.innerHTML = "• if you get some error, please restart the page";
        creditTit.innerHTML = "Credits";
        aprendizado.innerHTML = "Learn";
    }
}

// Local Storage
   // Language
   const enCheck = document.getElementById("enCheck")
document.addEventListener("DOMContentLoaded", function () {

    // Obtém o estado salvo no LocalStorage
    const estadoSalvoEn = localStorage.getItem("en");
 
    // Define o estado inicial da checkbox
    enCheck.checked = (estadoSalvoEn === "true");

});
language.addEventListener("click", () => {
    enCheck.checked = !enCheck.checked;
    localStorage.setItem("en", enCheck.checked);
    console.log("sim", enCheck.checked);
});