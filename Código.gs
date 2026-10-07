function doGet() {
  // Lê o arquivo do site chamado 'pagina.html'
  var saida = HtmlService.createTemplateFromFile('pagina').evaluate();
  
  // Ajusta o visual para celular e computador
  saida.addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
  
  // Define o título na aba do navegador (SLEEP REVIVE REVIEW & COMPLAINTS 2027 | 2028 - SLEEP REVIVE REVIEWS)
  saida.setTitle("SLEEP REVIVE REVIEW & COMPLAINTS 2027 | 2028 - SLEEP REVIVE REVIEWS");
  
  return saida;
}

