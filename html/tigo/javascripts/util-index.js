/* Tsource */
function getTSource() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars["tsource"];
}


$(document).ready(function () {
    /*$("#boton_buscar_legajocav").click(function(){
        buscar_legajocav();
     });*/

    function validate() {
        var errorNode = this.parentNode.querySelector(".error"),
            span = document.createElement("span");

        this.classList.remove("invalid");
        if (errorNode) {
            errorNode.parentNode.removeChild(errorNode);
        }

        if (!this.validity.valid) {
            this.classList.add("invalid");
            this.parentNode.appendChild(span);
            span.classList.add("error");
            span.innerHTML = this.getAttribute(
                this.validity.valueMissing ? "data-required-message" : "data-type-message");
        }
    }
    ;

    var form = document.querySelector("form"),
        inputs = form.querySelectorAll("input");

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("blur", validate);
        inputs[i].addEventListener("invalid", validate);
    }
    ;

    // Turn off the bubbles
    form.addEventListener("invalid", function (event) {
        event.preventDefault();
    }, true);

    // Support: Safari, iOS Safari, default Android browser
    $("#form-llamar").submit(function (event) {
        //alert("TEST");
        event.preventDefault();

        if (this.checkValidity()) {
            event.preventDefault();

            var typeForm = $('#type-form').val();
            var teleContacto = $("#telefonoLlamar").val();
            //Fijo o celular
            if ($('#radio-tipo-telefono-fijo').is(':checked')) {
                var departamento = $("#select-dep").val();
                teleContacto = departamento + teleContacto;
                var tipoContacto = 'fijo';

            } else if ($('#radio-tipo-telefono-celular').is(':checked')) {
                var tipoContacto = 'movil';

            }


            var ts = "";
            if (getTSource()) {
                ts = getTSource();
            } else {
                ts = 'ninguno';
            }
            var laurl = window.location.href;
            var slug = laurl.match(/[^/]*(?=(\/)?$)/)[0];

            var serie = JSON.stringify({ numero: teleContacto, extra: { tsource: slug } });
            console.log(serie);
            //var serie = 'action=contactNow&contactType=' + tipoContacto + '&tsource=' + ts + '&contact=' + teleContacto;
            $.ajax({
                type: "POST",
                url: "https://so.kerberusipbx.com:625/api/v0.1/callback",
                headers: {
                    'authorization': 'AAAA-SO',
                    'Content-Type': 'application/json'
                },
                dataType: 'json',
                data: serie,
                processData: false,
                success: function (msg) {
                    console.log(msg)
                    window.location = '/gracias';
                    //  $("#results").append("The result =" + StringifyPretty(msg));
                }
            });
        } else {
            event.preventDefault();
        }
    });

    $("#form-llamarportable").submit(function (event) {
        //alert("POrtable TEST");
        event.preventDefault();

        if (this.checkValidity()) {
            event.preventDefault();

            var typeForm = $('#type-form').val();
            var teleContacto = $("#telefonoLlamar").val();
            //Fijo o celular
            if ($('#radio-tipo-telefono-fijo').is(':checked')) {
                var departamento = $("#select-dep").val();
                teleContacto = departamento + teleContacto;
                var tipoContacto = 'fijo';
                var idtel = "4";
            } else if ($('#radio-tipo-telefono-celular').is(':checked')) {
                var tipoContacto = 'movil';
                var idtel = "3";
            }


            var ts = "";
            if (getTSource()) {
                ts = getTSource();
            } else {
                ts = 'ninguno';
            }
            var laurl = window.location.href;
            var slug = laurl.match(/[^/]*(?=(\/)?$)/)[0];

            var serie = JSON.stringify({ numero: teleContacto, id: idtel, extra: { tsource: slug } });
            console.log(serie);
            //var serie = 'action=contactNow&contactType=' + tipoContacto + '&tsource=' + ts + '&contact=' + teleContacto;
            $.ajax({
                type: "POST",
                url: "https://so.kerberusipbx.com:625/api/v0.1/callback",
                headers: {
                    'authorization': 'AAAA-SO',
                    'Content-Type': 'application/json'
                },
                dataType: 'json',
                data: serie,
                processData: false,
                success: function (msg) {
                    console.log(msg)
                    window.location = '/gracias';
                    //  $("#results").append("The result =" + StringifyPretty(msg));
                }
            });
        } else {
            event.preventDefault();
        }
    });

    // Support: Safari, iOS Safari, default Android browser
    $("#form-llamaruno").submit(function (event) {
        //alert("TEST1");
        event.preventDefault();
        if (this.checkValidity()) {
            event.preventDefault();

            var typeForm = $('#type-form').val();
            var teleContacto = $("#telefonoLlamar").val();
            //Fijo o celular
            if ($('#radio-tipo-telefono-fijo').is(':checked')) {
                var departamento = $("#select-dep").val();
                teleContacto = departamento + teleContacto;
                var tipoContacto = 'fijo';

            } else if ($('#radio-tipo-telefono-celular').is(':checked')) {
                var tipoContacto = 'movil';

            }

            var ts = "";
            if (getTSource()) {
                ts = getTSource();
            } else {
                ts = 'ninguno';
            }
            var laurl = window.location.href;
            var slug = laurl.match(/[^/]*(?=(\/)?$)/)[0];
            //alert(slug);

            var serie = JSON.stringify({ numero: teleContacto, extra: { tsource: slug } });
            console.log(serie);


            //var serie = JSON.stringify({ numero: teleContacto })
            //var serie = 'action=contactNow&contactType=' + tipoContacto + '&tsource=' + ts + '&contact=' + teleContacto;
            $.ajax({
                type: "POST",
                url: "https://so.kerberusipbx.com:625/api/v0.1/callback",
                headers: {
                    'authorization': 'AAAA-SO',
                    'Content-Type': 'application/json'
                },
                dataType: 'json',
                data: serie,
                processData: false,
                success: function (msg) {
                    console.log(msg)
                    window.location = '/gracias';
                    //  $("#results").append("The result =" + StringifyPretty(msg));
                }
            });
        } else {
            event.preventDefault();
        }
    });
    $("#form-llamarunoportable").submit(function (event) {
        //alert("TEST1");
        event.preventDefault();
        if (this.checkValidity()) {
            event.preventDefault();

            var typeForm = $('#type-form').val();
            var teleContacto = $("#telefonoLlamar").val();
            //Fijo o celular
            if ($('#radio-tipo-telefono-fijo').is(':checked')) {
                var departamento = $("#select-dep").val();
                teleContacto = departamento + teleContacto;
                var tipoContacto = 'fijo';
                var idtel = "4";
            } else if ($('#radio-tipo-telefono-celular').is(':checked')) {
                var tipoContacto = 'movil';
                var idtel = "3";
            }

            var ts = "";
            if (getTSource()) {
                ts = getTSource();
            } else {
                ts = 'ninguno';
            }
            var laurl = window.location.href;
            var slug = laurl.match(/[^/]*(?=(\/)?$)/)[0];
            //alert(slug);

            var serie = JSON.stringify({ numero: teleContacto, id: idtel, extra: { tsource: slug } });
            console.log(serie);


            //var serie = JSON.stringify({ numero: teleContacto })
            //var serie = 'action=contactNow&contactType=' + tipoContacto + '&tsource=' + ts + '&contact=' + teleContacto;
            $.ajax({
                type: "POST",
                url: "https://so.kerberusipbx.com:625/api/v0.1/callback",
                headers: {
                    'authorization': 'AAAA-SO',
                    'Content-Type': 'application/json'
                },
                dataType: 'json',
                data: serie,
                processData: false,
                success: function (msg) {
                    console.log(msg)
                    window.location = '/gracias';
                    //  $("#results").append("The result =" + StringifyPretty(msg));
                }
            });
        } else {
            event.preventDefault();
        }
    });

    // Support: Safari, iOS Safari, default Android browser
    $("#form-llamardos").submit(function (event) {
        // alert("TEST2");
        event.preventDefault();
        if (this.checkValidity()) {
            event.preventDefault();

            var typeForm = $('#type-form').val();
            var teleContacto = $("#telefonoLlamar").val();
            //Fijo o celular
            if ($('#radio-tipo-telefono-fijo').is(':checked')) {
                var departamento = $("#select-dep").val();
                teleContacto = departamento + teleContacto;
                var tipoContacto = 'fijo';

            } else if ($('#radio-tipo-telefono-celular').is(':checked')) {
                var tipoContacto = 'movil';

            }

            var ts = "";
            if (getTSource()) {
                ts = getTSource();
            } else {
                ts = 'ninguno';
            }
            var laurl = window.location.href;
            var slug = laurl.match(/[^/]*(?=(\/)?$)/)[0];
            //alert(slug);

            var serie = JSON.stringify({ numero: teleContacto, extra: { tsource: slug } });
            console.log(serie);

            //var serie = JSON.stringify({ numero: teleContacto })
            //var serie = 'action=contactNow&contactType=' + tipoContacto + '&tsource=' + ts + '&contact=' + teleContacto;
            $.ajax({
                type: "POST",
                url: "https://so.kerberusipbx.com:625/api/v0.1/callback",
                headers: {
                    'authorization': 'AAAA-SO',
                    'Content-Type': 'application/json'
                },
                dataType: 'json',
                data: serie,
                processData: false,
                success: function (msg) {
                    console.log(msg)
                    window.location = '/gracias';
                    //  $("#results").append("The result =" + StringifyPretty(msg));
                }
            });
        } else {
            event.preventDefault();
        }
    });

    // Support: Safari, iOS Safari, default Android browser
    $("#form-llamartres").submit(function (event) {
        //alert("TEST3");
        event.preventDefault();
        if (this.checkValidity()) {
            event.preventDefault();

            var typeForm = $('#type-form').val();
            var teleContacto = $("#telefonoLlamar").val();
            //Fijo o celular
            if ($('#radio-tipo-telefono-fijo').is(':checked')) {
                var departamento = $("#select-dep").val();
                teleContacto = departamento + teleContacto;
                var tipoContacto = 'fijo';

            } else if ($('#radio-tipo-telefono-celular').is(':checked')) {
                var tipoContacto = 'movil';

            }

            var ts = "";
            if (getTSource()) {
                ts = getTSource();
            } else {
                ts = 'ninguno';
            }
            var laurl = window.location.href;
            var slug = laurl.match(/[^/]*(?=(\/)?$)/)[0];
            //alert(slug);

            var serie = JSON.stringify({ numero: teleContacto, extra: { tsource: slug } });
            console.log(serie);


            //var serie = JSON.stringify({ numero: teleContacto })
            //var serie = 'action=contactNow&contactType=' + tipoContacto + '&tsource=' + ts + '&contact=' + teleContacto;
            $.ajax({
                type: "POST",
                url: "https://so.kerberusipbx.com:625/api/v0.1/callback",
                headers: {
                    'authorization': 'AAAA-SO',
                    'Content-Type': 'application/json'
                },
                dataType: 'json',
                data: serie,
                processData: false,
                success: function (msg) {
                    console.log(msg)
                    window.location = '/gracias';
                    //  $("#results").append("The result =" + StringifyPretty(msg));
                }
            });
        } else {
            event.preventDefault();
        }
    });


    // Support: Safari, iOS Safari, default Android browser
    $("#form-llamarcuatro").submit(function (event) {
        //alert("TEST4");
        event.preventDefault();
        if (this.checkValidity()) {
            event.preventDefault();

            var typeForm = $('#type-form').val();
            var teleContacto = $("#telefonoLlamar").val();
            //Fijo o celular
            if ($('#radio-tipo-telefono-fijo').is(':checked')) {
                var departamento = $("#select-dep").val();
                teleContacto = departamento + teleContacto;
                var tipoContacto = 'fijo';

            } else if ($('#radio-tipo-telefono-celular').is(':checked')) {
                var tipoContacto = 'movil';

            }

            var ts = "";
            if (getTSource()) {
                ts = getTSource();
            } else {
                ts = 'ninguno';
            }
            var laurl = window.location.href;
            var slug = laurl.match(/[^/]*(?=(\/)?$)/)[0];
            //alert(slug);

            var serie = JSON.stringify({ numero: teleContacto, extra: { tsource: slug } });
            console.log(serie);


            //var serie = JSON.stringify({ numero: teleContacto })
            //var serie = 'action=contactNow&contactType=' + tipoContacto + '&tsource=' + ts + '&contact=' + teleContacto;
            $.ajax({
                type: "POST",
                url: "https://so.kerberusipbx.com:625/api/v0.1/callback",
                headers: {
                    'authorization': 'AAAA-SO',
                    'Content-Type': 'application/json'
                },
                dataType: 'json',
                data: serie,
                processData: false,
                success: function (msg) {
                    console.log(msg)
                    window.location = '/gracias';
                    //  $("#results").append("The result =" + StringifyPretty(msg));
                }
            });
        } else {
            event.preventDefault();
        }
    });
    // Números a actualizar éstos son de 



    $("#form-llamar-popup").submit(function (event) {
        //alert("TESTp");
        if (this.checkValidity()) {
            event.preventDefault();

            var teleContacto = $("#telefonoLlamar-popup").val();
            //Fijo o celular
            if ($('#radio-tipo-telefono-fijo-popup').is(':checked')) {
                var departamento = $("#select-dep-popup").val();
                teleContacto = departamento + teleContacto;
                var tipoContacto = 'fijo';

            } else if ($('#radio-tipo-telefono-celular-popup').is(':checked')) {
                var tipoContacto = 'movil';

            }

            var ts = "";
            if (getTSource()) {
                ts = getTSource();
            } else {
                ts = 'ninguno';
            }
            var laurl = window.location.href;
            var slug = laurl.match(/[^/]*(?=(\/)?$)/)[0];
            //alert(slug);

            var serie = JSON.stringify({ numero: teleContacto, extra: { tsource: slug } });
            console.log(serie);

            //var serie = 'action=contactNow&contactType=' + tipoContacto + '&tsource=' + ts + '&contact=' + teleContacto;
            $.ajax({
                url: 'https://so.kerberusipbx.com:625/api/v0.1/callback',
                type: 'POST',
                data: serie,
                success: function (data) {


                    console.log("Envia mensaje Popup" + data);
                    var result = jQuery.parseJSON(data);
                    var mensajeRes = "";

                    if (result.status.status == 0 && result.status.message == "mas_tarde") {
                        mensajeRes = '<p class="postMsgTit">ERROR</p><p class="postMsg">Por favor, vuelve a intentarlo más tarde</p>';
                    } else if (result.status.status == 0 && result.status.message == "invalid") {
                        mensajeRes = '<p class="postMsgTit">ERROR</p><p class="postMsg">Por favor, vuelve a intentarlo más tarde</p>';
                    } else if (result.status.status == 0 && result.status.message == "duplicado") {
                        mensajeRes = '<p class="postMsgTit">ERROR</p><p class="postMsg">Esta solicitud ya ha sido enviada durante el d&iacute;a de hoy. Un Asesor se pondr&aacute en contacto contigo en horario de atención al cliente: de lunes a viernes de 7am a 10pm y s&aacute;bado de 7am a 8pm.</p>';
                    } else if (result.status.status == 0 && result.status.message == "telefono") {
                        //$('#c2cMovil').parent().addClass('warningColor');
                        //$('#c2cMovil').css('color', '#f20000');
                        mensajeRes = '<p>Error en el telefono</p>';
                    } else if (result.status.status == 0 && result.status.message == "false") {
                        //$('#c2cMovil').parent().addClass('warningColor');
                        //$('#c2cMovil').css('color', '#f20000');
                        mensajeRes = '<p>Error en el telefono</p>';
                    } else if (result.status.status == 1 && result.status.message == "test_ok") {
                        mensajeRes = '<p class="postMsg">Test OK!</p>';
                    } else if (result.status.status == 1) {
                        mensajeRes = '<h2 style="text-align: center; margin-top: 30%;">Gracias por comunicarte, te contactaremos pronto<br><br><br><br></h2>';
                    }

                    //$(".tellamamos-msg").hide().html(mensajeRes).fadeIn('slow');
                    $(location).attr("href", "/gracias");
                }
            });
        } else {
            event.preventDefault();
        }
    });


});



/* Cambio check telefono Fijo - Celular */
function showTelefono() {

    elementFijo = document.getElementById("telefono-fijo");
    elementCelular = document.getElementById("telefono-celular");

    check = document.getElementById("radio-tipo-telefono-fijo");
    if (check.checked) {
        $("#telefonoLlamar").css("width", "99%");
        $("#telefono-fijo").css("display", "inline");
        $("#select-dep").prop('required', true);
        $('#telefonoLlamar').attr('placeholder', 'Teléfono');
        $('#telefonoLlamar').attr('pattern', '^([0-9]{7})$');
    }
    else {
        $("#telefonoLlamar").css("width", "99%");
        $("#telefono-fijo").css("display", "none");
        $("#select-dep").prop('required', false);
        $('#telefonoLlamar').attr('placeholder', 'Tu teléfono celular');
        $('#telefonoLlamar').attr('pattern', '^3(0|1|2)([0-9]{8})$');
    }
}

function showTelefonouno() {
    elementFijo = document.getElementById("telefono-fijouno");
    elementCelular = document.getElementById("telefono-celularuno");

    check = document.getElementById("radio-tipo-telefono-fijouno");
    if (check.checked) {
        $("#telefonoLlamaruno").css("width", "99%");
        $("#telefono-fijouno").css("display", "inline");
        $("#select-depuno").prop('required', true);
        $('#telefonoLlamaruno').attr('placeholder', 'Teléfono');
        $('#telefonoLlamaruno').attr('pattern', '^([0-9]{7})$');
    }
    else {
        $("#telefonoLlamaruno").css("width", "99%");
        $("#telefono-fijouno").css("display", "none");
        $("#select-depuno").prop('required', false);
        $('#telefonoLlamaruno').attr('placeholder', 'Tu teléfono celular');
        $('#telefonoLlamaruno').attr('pattern', '^3(0|1|2)([0-9]{8})$');
    }
}

/* Cambio check telefono Fijo - Celular */
function showTelefonoPopup() {
    elementFijo = document.getElementById("telefono-fijo-popup");
    elementCelular = document.getElementById("telefono-celular");

    check = document.getElementById("radio-tipo-telefono-fijo-popup");
    if (check.checked) {
        $("#telefonoLlamar-popup").css("width", "99%");
        $("#telefono-fijo-popup").css("display", "inline");
        $("#select-dep-popup").prop('required', true);
        $('#telefonoLlamar-popup').attr('placeholder', 'Teléfono');
        $('#telefonoLlamar-popup').attr('pattern', '^([0-9]{7})$');
    }
    else {
        $("#telefonoLlamar-popup").css("width", "99%");
        $("#telefono-fijo-popup").css("display", "none");
        $("#select-dep-popup").prop('required', false);
        $('#telefonoLlamar-popup').attr('placeholder', 'Tu teléfono celular');
        $('#telefonoLlamar-popup').attr('pattern', '^3(0|1|2)([0-9]{8})$');
    }
}

document.addEventListener('wpcf7mailsent', function (event) {
    buscar_legajocav();
}, false);

function validateselecto() {
    var eldep = $("#departaments").val();
    if (eldep == "Bogotá") {
        var minumero = 1;
    }
    if (eldep == "Amazonas") {
        var minumero = 7;
    }
    if (eldep == "Antioquia") {
        var minumero = 4;
    }
    if (eldep == "Arauca") {
        var minumero = 7;
    }
    if (eldep == "Atlántico") {
        var minumero = 5;
    }
    if (eldep == "Bolívar") {
        var minumero = 5;
    }
    if (eldep == "Boyacá") {
        var minumero = 8;
    }
    if (eldep == "Caldas") {
        var minumero = 6;
    }
    if (eldep == "Caquetá") {
        var minumero = 6;
    }
    if (eldep == "Caldas") {
        var minumero = 6;
    }
    if (eldep == "Caldas") {
        var minumero = 6;
    }
    if (eldep == "Caldas") {
        var minumero = 6;
    }
    if (eldep == "Caldas") {
        var minumero = 6;
    }/*
    "" "Casanare" "Cauca" "Cesar" "Choco" "Córdoba" "Cundinamarca" "Guainía" "Guajira" "Guaviare" "Huila" "Magdalena" "Meta" "Nariño" "Nor Santander" "Putumayo" "Quindío*/
    return minumero;
}


function buscar_legajocav() {
    event.preventDefault();
    $('.boxerror').empty();

    var telefono = $("#phonecallback").val();
    var departament = validateselecto();


    // it is checked
    //var serie = JSON.stringify({ numero: telefono,id:"3" })
    var serie = JSON.stringify({ numero: teleContacto, id: idtel, extra: { tsource: slug } });
    //var serie = 'action=contactNow&contactType=' + tipoContacto + '&tsource=' + ts + '&contact=' + teleContacto;
    $.ajax({
        type: "POST",
        url: "https://so.kerberusipbx.com:625/api/v0.1/callback",
        headers: {
            'authorization': 'AAAA-SO',
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        data: serie,
        processData: false,
        success: function (msg) {
            console.log(msg),
                console.log(departament)
            //window.location = '/gracias';
            //  $("#results").append("The result =" + StringifyPretty(msg));
        }
    })
}

document.forms.form_footer.addEventListener('submit', (e) => {
    e.preventDefault();
    let movil = document.forms.form_footer.Telefono;
    let fijo = document.forms.form_footer.selectelocel;
    let name = document.forms.form_footer.your_name;
    let email = document.forms.form_footer.your_email;
    let typeMobile = undefined;
    let acepterms = document.forms.form_footer.aceptoterminos;
    let controlsub = document.forms.form_footer.aceptoterminos;

    if (movil.checked) {
        typeMobile = "Teléfono";
    }
    if (fijo.checked) {
        typeMobile = "Teléfono";
    }

    let errores = 0;

    document.getElementById('error1').style.display = 'none';
    document.getElementById('error2').style.display = 'none';
    document.getElementById('error3').style.display = 'none';
    document.getElementById('error4').style.display = 'none';
    document.getElementById('sendok').style.display = 'none';

    if (!name.value) {
        document.getElementById('error1').style.display = "block";
        return;
    }
    if (!fijo.value.length) {
        document.getElementById('error2').style.display = "block";
        return;
    }

    if (!movil.value.length) {
        document.getElementById('error2').style.display = "block";
        return;
    }

    if (!email.value.length) {
        document.getElementById('error3').style.display = "block";
        return;
    }

    if (!acepterms.checked) {
        document.getElementById('error4').style.display = "block";
        return;
    }

    if (!controlsub.checked) {
        document.getElementById('sendok').style.display = "block";
        return;
    }

    if (document.forms.form_footer.Telefono.value.length) {
        console.log('enviando desde el footer el telefono', document.forms.form_footer.Telefono.value);

        var serie = JSON.stringify({ numero: document.forms.form_footer.Telefono.value });

        $.ajax({
            type: "POST",
            url: 'https://so05.kerberusipbx.com:625/api/v0.1/callback',
            headers: {
                'authorization': 'AAAA-SO',
                'Content-Type': 'application/json'
            },
            dataType: 'json',
            data: serie,
            processData: false,
            success: function (msg) {
                console.log(msg)
                document.getElementById('sendok').style.display = 'block'
                document.forms.form_footer.reset()
                //window.location = '/gracias';
            }
        });
    } else {
        //alert('Sin datos a enviar (Telefono)');
    }

})
// sendcontact.request(req.body.mobile, (e, r, b) => {
//     if (e) {
//         console.log(e);
//         return res.render('confirm', { message: 'Pronto nos comunicaremos contigo' });;
//     }
//     if (b) {
//         console.log(b);
//     }
// })
// if (typeof req.body.name !== 'undefined') {
//     const mariadb = dbcore.createConnection(
//         {
//             host: '',
//             user: '',
//             password: '',
//             port: 3306,
//             database: ''
//         }
//     ).then((o) => {
//         mariadb.then((conn) => {
//             conn.query(sprintf("INSERT INTO datos VALUES ('%s','%d','%s','%s','%d')",
//                 req.body.name, req.body.mobile, req.body.email, req.body.city, new Date().getTime())
//             ).then((res) => {
//                 console.log('Insert OK, sending email...');
//             }).catch((e) => {
//                 console.log('Insert failed, ' + e);
//             })
//         }).catch((e) => {
//             console.log(e);
//         });
//         const makeEmail = sendmail.createTransport({
//             host: '',
//             auth: {
//                 user: '',
//                 pass: ''
//             }
//         });
//         makeEmail.sendMail({
//             from: '',
//             to: '',
//             subject: '',
//             text: sprintf('A continuacion se detallan los datos de usuario:\n\n Nombre: %s\nTeléfono de contacto: %s\nEmail: %s\nCiudad: %s\n',
//                 req.body.name, req.body.mobile, req.body.email, req.body.city
//             )
//         }, (error, info) => {
//             if (error) {
//                 console.log(sprintf('Email sending was failed, reason => %s', error));
//             } else {
//                 console.log("Email sent! Perfect.");
//             }
//         });
//     }).catch((e) => {
//         console.log(sprintf('Binding to MariaDB Server was failed, reason => %s', e));
//     });
// }

// /**
//  * El usuario siempre recibe confirmación, sin importar lo que suceda en el backend.
//  */
// res.render('confirm', { message: 'Pronto nos comunicaremos contigo' });



$(document).ready(function () {

});




