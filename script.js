const toggle = document.getElementById("toggle");
const refresh = document.getElementById("refresh");
const theme = window.localStorage.getItem("theme");

/* verifica se o tema armazenado no localStorage é escuro
se sim aplica o tema escuro ao body */
if (theme === "dark") document.body.classList.add("dark");

// event listener para quando o botão de alterar o tema for clicado
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else window.localStorage.setItem("theme", "dark");
});

refresh.addEventListener("click", () => {
  window.location.reload();
});


// verificando se o browser suport o localstorage
 if(typeof(Storage) != "undefined"  ){

   localStorage.setItem("theme" , "dark"); //cria a chave

   // localStorage.removeItem(theme); basta colocar a chave para ser removido. O getItem a gente usa p/ obter o valor da chave.

   var themes = localStorage.getItem("theme"); //coloca o nome da chave que quer obter. ou uso: var themes = localStorage.theme;

   //document.write(themes); imprime o valor da variavel.
 } else {

   document.write("Sem Suporte ao Web Storage! ");
 }
