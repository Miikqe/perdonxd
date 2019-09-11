function modifHTMLText (elemento,cont){
  $(elemento).html(cont);
}
$('#pel').click(function(){
  modifHTMLText("#titulo","Películas");
  modifHTMLText("#el1", "<img src='../statics/images/endgam.jpeg' class='img' id='avengers'> <h4 class='obj'>Avengers: Endgame</h4> <p class='pr'>$800</p>");
  modifHTMLText("#el2", "<img src='../statics/images/godfather.jpeg' class='img'> <h4 class='obj'>The Godfather</h4> <p class='pr'>$500</p>");
  modifHTMLText("#el3", "<img src='../statics/images/gump.jpeg' class='img'> <h4 class='obj'>Forrest Gump</h4> <p class='pr'>$400</p>");
  modifHTMLText("#el4", "<img src='../statics/images/lambs.jpg' class='img'> <h4 class='obj'>The Silence of the Lambs</h4> <p class='pr'>$600</p>");
  modifHTMLText("#el5", "<img src='../statics/images/revenant.jpeg' class='img'> <h4 class='obj'>The Revenant</h4> <p class='pr'>$800</p>");
  modifHTMLText("#el6", "<img src='../statics/images/rhapsody.jpeg' class='img'> <h4 class='obj'>Bohemian Rhapsody</h4> <p class='pr'>$800</p>");
;});
$('#mus').click(function(){
  modifHTMLText("#titulo","Musica");
  modifHTMLText("#el1", "<img src='../statics/images/casino.jpg' class='img'> <h4 class='obj'>Tranquility Base Hotel & Casino</h4> <p class='pr'>$800</p>");
  modifHTMLText("#el2", "<img src='../statics/images/shopping.jpeg' class='img'> <h4 class='obj'>Simulation Theory</h4> <p class='pr'>$500</p>");
  modifHTMLText("#el3", "<img src='../statics/images/roses.jpg' class='img'> <h4 class='obj'>Appetite for Destruction</h4> <p class='pr'>$400</p>");
  modifHTMLText("#el4", "<img src='../statics/images/nirvana.jpeg' class='img'> <h4 class='obj'>Nevermind</h4> <p class='pr'>$400</p>");
  modifHTMLText("#el5", "<img src='../statics/images/queen.jpg' class='img'> <h4 class='obj'>Greatest Hits I, II & III</h4> <p class='pr'>$800</p>");
  modifHTMLText("#el6", "<img src='../statics/images/soda.jpg' class='img'> <h4 class='obj'>Me Verás Volver</h4> <p class='pr'>$400</p>");
;});
$('#jue').click(function(){
  modifHTMLText("#titulo","Videojuegos");
  modifHTMLText("#el1", "<img src='../statics/images/zelda.jpeg' class='img'> <h4 class='obj'>The Legend of Zelda: Breath of the Wild</h4> <p class='pr'>$120</p>");
  modifHTMLText("#el2", "<img src='../statics/images/cod.jpeg' class='img'> <h4 class='obj'>Call of Duty: Black Ops 4</h4> <p class='pr'>$1600</p>");
  modifHTMLText("#el3", "<img src='../statics/images/gow.jpeg' class='img'> <h4 class='obj'>God of War</h4> <p class='pr'>$800</p>");
  modifHTMLText("#el4", "<img src='../statics/images/fifa.jpeg' class='img'> <h4 class='obj'>FIFA 2020</h4> <p class='pr'>$1200</p>");
  modifHTMLText("#el5", "<img src='../statics/images/tlou.jpg' class='img'> <h4 class='obj'>The Last of Us</h4> <p class='pr'>$500</p>");
  modifHTMLText("#el6", "<img src='../statics/images/gears.jpeg' class='img'> <h4 class='obj'>Gears of War 5</h4> <p class='pr'>$700</p>");
;});
$("#avengers").click(function(){
  modifHTMLText(".modal",'<div class="desc"><img id="tumama" src="../statics/images/endgam.jpeg" ><h1>Avengers: Endgame</h1><p>Adquirir:</p><ul><li>Rentar<button type="button">$100</button></li><li>Comprar<button type="button">$700</button></li></ul><ul id="lang"><li><b>Idiomas:<b</li><li>Español</li><li>Inglés</li><li>Japonés</li><li>Alemán</li><li>Portugués</li><li>Francés</li></ul><p class="descripcion">Al final de Avengers:Infinity War, Thanos reúne las seis Gemas del Infinito en el Guantelete del Infinito y tras una rápida pero violenta batalla contra los Avengers, chasquea los dedos y desaparece a la mitad de la población del universo, incluidos varios de los superhéroes. Solo sobreviven unos cuantos que ahora tienen la obligación de detener al titán loco e intentar, de ser posible, regresar a sus compañeros caídos.</p></div>')
;});
