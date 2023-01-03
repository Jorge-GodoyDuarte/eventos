console.log("Estoy vinculado aunque sea feo");

window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
    //-------------------DE REGISTRO DE PELÍCULAS------------------//    



    const $ = (element) => document.getElementById(element);


    $('title').focus();


    const msgError = (element, msg, target) => {
        $(element).innerText = msg;
        target.classList.add("is-invalid");
        target.classList.remove("is-valid");
    };

    const validField = (element, target) => {
        $(element).innerText = null;
        target.classList.remove("is-invalid");
        target.classList.add("is-valid");
        
    };


    $('title').addEventListener('blur', function ({ target }) {
        switch (true) {
            case !this.value.trim():
                msgError("errorTitle", "El campo no puede estar vacío", target);
                this.target.classList.add("is-invalid");
                break;
            default:
                validField("errorTitle", target);
                break;
        }
    });

    $('rating').addEventListener('blur', function ({ target }) {
        switch (true) {
            case !this.value.trim():
                msgError("errorRating", "El campo no puede estar vacío", target);
                this.target.classList.add("is-invalid");
                break;
            case this.value < 0 || this.value > 10:
                msgError("errorRating", "El campo debe estar entre 0 y 10", target);
                this.target.classList.add("is-invalid");
                break;
            default:
                validField("errorRating", target);
                break;
        }
    });

    $('awards').addEventListener('blur', function ({ target }) {
        switch (true) {
            case !this.value.trim():
                msgError("errorAwards", "El campo no puede estar vacío", target);
                this.target.classList.add("is-invalid");
                break;
            case this.value < 0 || this.value > 10:
                msgError("errorAwards", "El campo debe estar entre 0 y 10", target);
                this.target.classList.add("is-invalid");
                break;
            default:
                validField("errorAwards", target);
                break;
        }
    });

    $('release_date').addEventListener('blur', function ({ target }) {
        switch (true) {
            case !this.value.trim():
                msgError("errorRelease_date", "El campo no puede estar vacío", target);
                this.target.classList.add("is-invalid");
                break;
            default:
                validField("errorRelease_date", target);
                break;
        }
    });
    $('length').addEventListener('blur', function ({ target }) {
        switch (true) {
            case !this.value.trim():
                msgError("errorLength", "El campo no puede estar vacío", target);
                this.target.classList.add("is-invalid");
                break;
            case this.value < 60 || this.value > 360:
                msgError("errorLength", "El campo debe estar entre 60 y 360", target);
                this.target.classList.add("is-invalid");
                break;
            default:
                validField("errorLength", target);
                break;
        }
    });

    $('genre_id').addEventListener('blur', function ({ target }) {
        switch (true) {
            case !this.value.trim():
                msgError("errorGenre_id", "El campo no puede estar vacío", target);
                this.target.classList.add("is-invalid");
                break;
            default:
                validField("errorGenre_id", target);
                break;
        }
    });

    $('form').addEventListener('submit', function (e) {
        e.preventDefault();
        let error = false;

        let elementsForm = $('form').elements;
        console.log([elementsForm]);
        
        for (let i = 0; i < elementsForm.length - 2; i++) {
            if (!elementsForm[i].value || elementsForm[i].classList.contains('is-invalid')) {
                error = true;
                elementsForm[i].classList.add("is-invalid");
                $("erroresUl").classList.add("alert-warning");
                $("erroresUl").innerHTML += `<li>El campo ${elementsForm[i].name} no puede estar vacío</li>`;
            }
        }
        
        if (!error) {
            Swal.fire(
                'La pelicula se guardo satisfactoriamente',
            )
            this.submit();
    };
    })
}
