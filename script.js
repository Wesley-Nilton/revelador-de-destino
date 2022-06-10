// General data capture
const answerElement = document.querySelector("div#answer");
const entryQuestion = document.querySelector("input#entryQuestion");
const askButton = document.querySelector("button#askbutton");
const answers = [
    "Certeza!", 
    "Não tenho tanta certeza.", 
    "É decididamente assim.", 
    "Não conte com isso.", 
    "Sem dúvidas!", 
    "Pergunte novamente mais tarde.", 
    "Sim, definitivamente!", 
    "Minha resposta é não.", 
    "Você pode contar com isso.", 
    "Melhor não te dizer agora.", 
    "A meu ver, sim.", 
    "Minhas fontes dizem não.", 
    "Provavelmente.", 
    "Não é possível prever agora.", 
    "Perspectiva boa.", 
    "As perspectivas não são tão boas.", 
    "Sim.", 
    "Concentre-se e pergunte novamente.", 
    "Sinais apontam que sim."
];

// Click on the button
function askQuestion(){
    if(entryQuestion.value == ""){
        alert("Digite sua pergunta");
        return;
    };

    askButton.setAttribute("disabled", true);

    // Generate random number
    const totalAnswers = answers.length;
    const randomNumber = Math.floor(Math.random() * totalAnswers);

    // Print result
    const question = `<p>${entryQuestion.value}</p>`;
    const finalAnswer = `<h3>${answers[randomNumber]}</h3>`;
    answerElement.innerHTML = `${question + finalAnswer}`;
    answerElement.classList.add("visible");

    // Disappear after 4 seconds
    setTimeout(function() {
        answerElement.classList.remove("visible");
        askButton.removeAttribute("disabled");
    }, 4000);
}