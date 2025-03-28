const estadoSalvoEn = localStorage.getItem("en");

var en = false;
en = estadoSalvoEn === "true";
const language = document.getElementById("language");
const tit1 = document.getElementById("tit1");
const txt1 = document.getElementById("txt1");
const tit2 = document.getElementById("tit2");
const txt2 = document.getElementById("txt2");
const tit3 = document.getElementById("tit3");
const txt3 = document.getElementById("txt3");
const tit4 = document.getElementById("tit4");
const txt4 = document.getElementById("txt4");



updateLanguage()
language.addEventListener("click", updateLanguage);


function updateLanguage(){

    if (!en){
        en = true


        language.innerHTML = "EN";
        tit1.innerHTML = "🌍 Conscientização e Educação Ambiental ";
        txt1.innerHTML = "A degradação do planeta causada pelo excesso de lixo e a falta de práticas sustentáveis é um problema crescente. Este jogo busca ensinar de forma interativa os impactos da poluição e como cada um pode fazer a diferença.";
        tit2.innerHTML = "📌 Problemas do Excesso de Lixo ";
        txt2.innerHTML = "A poluição contamina oceanos, rios e solos, prejudicando a biodiversidade e a produção de alimentos. A decomposição de resíduos libera gases que intensificam o aquecimento global, além de aumentar doenças respiratórias e afetar a saúde humana. Animais também sofrem, ingerindo plástico ou ficando presos em resíduos, comprometendo o equilíbrio ecológico.";
        tit3.innerHTML = "✅ Como Ajudar?";
        txt3.innerHTML = "Reduzir o consumo e reutilizar materiais diminui a produção de lixo. Reciclar corretamente evita desperdícios e dá um novo destino aos resíduos. Descartar o lixo de forma adequada mantém o ambiente limpo e preservado. Conscientizar outras pessoas multiplica os impactos positivos e incentiva hábitos sustentáveis.";
        tit4.innerHTML = "⚠️ Consequências de Não Agir ";
        txt4.innerHTML = "A poluição crescerá, tornando cidades mais sujas e afetando a qualidade de vida. O aquecimento global provocará desastres naturais mais intensos, e os recursos naturais ficarão cada vez mais escassos. Além disso, mais espécies entrarão em extinção, desequilibrando os ecossistemas.";
    } else if (en){
        en = false;

        language.innerHTML = "BR";
        tit1.innerHTML = "🌍 Awareness and Environmental Education";
        txt1.innerHTML = "The degradation of the planet caused by excessive waste and lack of sustainable practices is a growing problem. This game aims to teach, in an interactive way, the impacts of pollution and how everyone can make a difference.";
        tit2.innerHTML = "📌 Problems Caused by Excessive Waste";
        txt2.innerHTML = "Pollution contaminates oceans, rivers, and soil, harming biodiversity and food production. Waste decomposition releases gases that intensify global warming, increase respiratory diseases, and affect human health. Animals also suffer by ingesting plastic or getting trapped in waste, disrupting the ecological balance.";
        tit3.innerHTML = "✅ How to Help?";
        txt3.innerHTML = "Reducing consumption and reusing materials decreases waste production. Proper recycling prevents waste and gives materials a new purpose. Disposing of trash correctly keeps the environment clean and preserved. Raising awareness multiplies positive impacts and encourages sustainable habits.";
        tit4.innerHTML = "⚠️ Consequences of Inaction";
        txt4.innerHTML = "Pollution will increase, making cities dirtier and affecting quality of life. Global warming will lead to more intense natural disasters, and natural resources will become increasingly scarce. Furthermore, more species will become extinct, disrupting ecosystems.";
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