(function () {

  // Hash-based routing
  function processHash() {
    var hash = location.hash || '#';
    if (!app.router.run(hash.substr(1))) {
      app.notFound();
    }
  }

  window.addEventListener('hashchange', processHash);
  processHash();

})();
