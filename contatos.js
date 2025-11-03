'use strict'


 async function lerContatos() {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/`


    const response = await fetch (url)
    const contatos = await response.json()

    console.log(contatos)
    return contatos
}

async function criarContato(contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/`

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato) 
    }

    const response = await fetch(url, options)

    console.log( response.ok)
    return response.ok
}

const novoContato = {
"nome": "Breno Dias Machado",
"celular": "11 9 1111-2222",
"foto": "sem.foto.img",
"email": "Brenolindo@gmail.com",
"endereco": "Av. tereza, 144",
"cidade": "Jandira"

}

async function atualizarContato(id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        'method': 'PUT',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato) 
    }

    const response = await fetch (url, options)

    console.log( response.ok)
    return response.ok
}
const update = {
    "nome": "Breno Dias Machado NOVO",
    "celular": "11 9 1111-2222",
    "foto": "sem.foto.img",
    "email": "Brenolindo@gmail.com",
    "endereco": "Av. tereza, 144",
    "cidade": "Jandira"
    
    }

    async function deleteContato(id) {
        
         const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

         const options = {
            method: 'DELETE'
         }

         const response = await fetch(url, options)
         console.log(response.ok)
         return response.ok
    }