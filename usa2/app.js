const app = (function() {

  var btn, content, result ;
  var etats = ["alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho",
    "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "new hampshire", "new jersey", "new mexico",
    "new york", "north carolina", "north dakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhode island", "south carolina", "south dakota", "tennessee", "texas",
    "utah", "vermont", "virginia", "washington", "west virginia", "wisconsin", "wyoming"]


  var displayHTML = function(html) {

    html.forEach(function(element) {
      content.innerHTML +="<p>"+ element +"</p>";
    });

    
  };

  function filtreTexte(valeurinput) {
    var inputmin = valeurinput.toLowerCase();
    result = etats.filter(function(el) {
      return el.startsWith(inputmin);
    });
    displayHTML(result);
    return result;
  };



  const start = function() {
    input = document.getElementById('champs');
    content = document.getElementById("resultat");
    displayHTML(etats);
    input.addEventListener("keyup", function(){

      content.innerHTML = "";

        filtreTexte(input.value);


    });
  };

  window.addEventListener('DOMContentLoaded', start)

}())
