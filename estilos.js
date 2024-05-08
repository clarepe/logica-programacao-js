const links = [
    {'rel' : 'stylesheet', 'href' : '/reset.css'},
    {'rel' : 'stylesheet', 'href' : '/estilos.css'},
    {'rel' : 'stylesheet', 'href' : '/responsividade.css'},

]

links.forEach(link => {
   const l = document.createElement('link');
   l.rel = link.rel;
   l.href = link.href;
   document.head.appendChild(l)
})