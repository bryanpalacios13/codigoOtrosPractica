const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {  // La función debe ser asincrona, ya que estamos consuminedo una promesa en await
  console.log(baseEndpoint);
  $n.textContent = 'cargando...';
  const responseJSON = await fetch(`${usersEndpoint}/${username}`);
  const response = await responseJSON.json();   // Cambiar nuestros objetos a tipo json
  $n.textContent = response.name; // mandar a llamar los atributos de mi objeto
  $b.textContent = response.blog;
  $l.textContent = response.location;
}


function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);