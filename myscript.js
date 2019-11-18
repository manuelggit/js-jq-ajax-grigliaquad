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
    $('#container').append('<div class="quadrato"><span></span></div>');
  }

}

// funzione per la selezione del quadrato
function cliccaQuadrato(){

  $('.quadrato').click(function(){
    var quadratoSelezionato = $(this);
    console.log(quadratoSelezionato);

    $.ajax({
      url : "https://flynn.boolean.careers/exercises/api/random/int",
      method : "GET",

      success: function(numeroRandom) {
        var numero = numeroRandom.response;
        if (numero <= 5) {
          $(quadratoSelezionato).css("background", "yellow");
        } else if(numero > 5){
          $(quadratoSelezionato).css("background", "green");
        }

      error: function(errore) {
        alert("C'è un errore, ed è: " errore);
      }

      }
  })



  });

};
