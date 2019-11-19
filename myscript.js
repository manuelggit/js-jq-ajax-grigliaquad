//  Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$('document').ready(function(){

  generaCelle();
  cliccaQuadrato();

});

//funzione per generare la griglia
function generaCelle() {

  for(var i = 0; i < 36; i++){
    $('#container').append('<div class="quadrato"><span></span></div>'); //creo 36 quadrati
  }

}

// funzione per la selezione del quadrato
function cliccaQuadrato(){

  $('.quadrato').click(function(){
    var quadratoSelezionato = $(this); //il quadrato selezionato è quello che seleziono al click
    console.log(quadratoSelezionato);

    $.ajax({
      url : "https://flynn.boolean.careers/exercises/api/random/int",
      method : "GET",

      success: function(numeroRandom) {
        var numero = numeroRandom.response;
        console.log(numero); // stampo il numero che esce
        quadratoSelezionato.html(numero); // stampo il numero all'interno del quadratoSelezionato (in pagina)
        if (numero <= 5) { //se "numero" è minore o uguale a 5
          $(quadratoSelezionato).css("background", "yellow"); //lo rendo giallo
        } else if(numero > 5){ //altrimenti
          $(quadratoSelezionato).css("background", "green"); //lo rendo verde
        }
        quadratoSelezionato.off('click'); // disattivo il click sul quadratoSelezionato
      },

      error: function(errore) {
        alert("C'è un errore, ed è: ", errore);
      }

    })

  });

};
