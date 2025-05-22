const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const data = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    alert("Merci pour ton message ! Je te répondrai bientôt.");
    form.reset();
  }).catch(error => {
    alert("Oups, une erreur s'est produite.");
  });
});
