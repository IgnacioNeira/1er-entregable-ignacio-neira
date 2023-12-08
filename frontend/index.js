const element = document.querySelector('.menu');
element.addEventListener("click",
    function (event) {
        event.preventDefault(); // don't navigate away
        const route = window.location.href.split('/')
        if(route.pop() === 'form.html'){
            window.location.href="index.html";
        }   else    {
            window.location.href="form.html";
        }
        
    }
);

const request = document.querySelector('.btn_enviar');
request.addEventListener("click",
    async function (event) {
        console.log('entre perrito')
        event.preventDefault(); // mensajedon't navigate away
        const nombre = document.getElementById('nombre').value
        const celular = document.getElementById('celular').value
        const email = document.getElementById('email').value
        const mensaje = document.getElementById('mensaje').value
        console.log(nombre)
        fetch('http://localhost:3000', {
            method: 'POST',
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({nombre, celular, email, mensaje})
          }).then(data => console.log(data));
        }
);