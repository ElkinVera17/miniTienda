


document.addEventListener("DOMContentLoaded", iniciaPagina);
let productosjson = [];
let usuarios = [];          // API
let usuariosLocales = [];   // LocalStorage
document.getElementById("btnCrearUsuario").addEventListener("click", agregarUsuario);

const btnProductos = document.getElementById("btnCargarProductos");
btnProductos.addEventListener("click", cargarProductos);


const btnCatFact = document.getElementById("btnCatFact");
btnCatFact.addEventListener("click", cargarCatFact);
//Perfile
async function fotoPerfil() {


    const img = document.getElementById("imagenPerfil");
    const estado = document.getElementById("estadoImagen");
    try {
        const respuesta = await fetch("https://dog.ceo/api/breeds/image/random");
        const perfil = await respuesta.json();

        estado.textContent = "Renderizando pixeles..."
        img.src = perfil.message;
        estado.textContent = "Listo!"

    } catch (error) {
        estado.textContent = "Error loading profile image.";
    }

}

//Inicio de pagina
function iniciaPagina() { 
    fotoPerfil();
    const datos = localStorage.getItem("usuariosLocales");

    if (datos != null) {
        usuariosLocales = JSON.parse(datos);
    }

}

//Usuarios

const btnUsuarios = document.getElementById("btnCargarUsuarios");
btnUsuarios.addEventListener("click", CargarUsuarios);
async function CargarUsuarios() {

    const estado = document.getElementById("estadoTabla");

     try {

    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    usuarios = await respuesta.json();

    const contenedor = document.getElementById("contenedorTabla");

    mostrarUsuarios();
    estado.textContent = "Unete¡";

    } catch (error) {

        estado.textContent = "Error loading users.";

    }

}

//Nuevo Usuario
function agregarUsuario() {

    const nombre = document.getElementById("txtName").value;
    const email = document.getElementById("txtEmail").value;
    const telefono = document.getElementById("txtPhone").value;
    const ciudad = document.getElementById("txtCity").value;
    const empresa = document.getElementById("txtCompany").value;

    const nuevoUsuario = {
        name: nombre,
        email: email,
        phone: telefono,

        address: {
            city: ciudad
        },

        company: {
            name: empresa
        }
    };

    usuariosLocales.push(nuevoUsuario);
    localStorage.setItem("usuariosLocales", JSON.stringify(usuariosLocales));

    mostrarUsuarios();

    document.getElementById("formUsuario").reset();

}


function mostrarUsuarios() {

    const listaCompleta = [...usuarios, ...usuariosLocales];

    let tabla = `
    <div class="table-responsive">
       <table class="table table-bordered table-striped align-middle">

            <thead class="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Company</th>
                </tr>
            </thead>

            <tbody>
    `;

    listaCompleta.forEach(usuario => {

        tabla += `
            <tr>
                <td>${usuario.name}</td>
                <td>${usuario.email}</td>
                <td>${usuario.phone}</td>
                <td>${usuario.address.city}</td>
                <td>${usuario.company.name}</td>
            </tr>
        `;

    });

    tabla += `
    </tbody>
</table>

</div>
`;

    document.getElementById("contenedorTabla").innerHTML = tabla;

}

//Products

async function cargarProductos() {
    const estado = document.getElementById("estadoProductos");

    try {
    const respuesta = await fetch("https://dummyjson.com/products");
    const productos = await respuesta.json();

    productosjson = productos.products;

    mostrarProductos(productos.products);

    estado.textContent = "Nuevo calago bajos precios¡";
     } catch (error) {

        estado.textContent = "Error loading products.";

    }
}

function mostrarProductos(productos) {

    productos.forEach(producto => {
        contenedorProductos.innerHTML +=
            `<div class ="col-md-4 col-lg-3" >
            <div class="card product-card" >
                <h5 class="card-title">${producto.title}</h5>
                <img src="${producto.thumbnail}" class="card-img-top" alt="${producto.title}">
                <div class="card-body">
                    <p class="card-text">${producto.category}</p>
                    <p class="card-text">${producto.description}</p>
                     <p class="card-text">${producto.price}</p>
                     <button class="btn-comprar" data-id="${producto.id}">Comprar</button>
                </div>
        </div>`

    });
    document.getElementById("contenedorProductos").innerHTML = cards;
}

async function cargarCatFact() {

    const alerta = document.getElementById("catFact");

    try {
    const respuesta = await fetch("https://catfact.ninja/fact");
    const estado = document.getElementById("estadoFact");
    const dato = await respuesta.json();
    alerta.textContent = dato.fact;
    alerta.classList.remove("d-none");
    estado.textContent = "WOW!";

     } catch (error) {
        alerta.textContent = "Error loading cat fact.";
        alerta.classList.remove("d-none");
        alerta.classList.replace("alert-info", "alert-danger");
    }
}

document
    .getElementById("btnVerJSONUsuarios")
    .addEventListener("click", verJSONUsuarios);
function verJSONUsuarios() {

    document.getElementById("contenidoJSON").textContent =
        JSON.stringify(usuarios, null, 2);

    const modal = new bootstrap.Modal(
        document.getElementById("modalJSON")
    );

    modal.show();

}

document
    .getElementById("btnVerJSONProductos")
    .addEventListener("click", verJSONProductos);

function verJSONProductos() {

    document.getElementById("contenidoJSON").textContent =
        JSON.stringify(productosjson, null, 2);

    const modal = new bootstrap.Modal(
        document.getElementById("modalJSON")
    );

    modal.show();

}

