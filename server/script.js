function redirect(event, url) {
    event.preventDefault(); // Impedisce la visualizzazione dell'URL nella barra di stato
    window.open(url, '_blank');
}
