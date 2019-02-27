let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const init = {
  method: 'GET',
  headers: myHeaders,
  cache: 'default',
  credentials: 'include'
};

fetch('http://localhost:3001', init)
  .then(response => {
    console.log(response)
  });


setTimeout(() => {
  fetch('http://localhost:3001/assinatura', {
    ...init,
    method: 'POST'
  })
  .then(response => {
    console.log(response)
  })
}, 500)