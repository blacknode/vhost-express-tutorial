
(function (doc) {

    doc.forms.formcliente.addEventListener('submit', (e) => {
        e.preventDefault();
        let movil = doc.forms.formcliente.tipo_telefono;
        let fijo = doc.forms.formcliente.tipo_telefono;
        let telefono = doc.forms.formcliente.telefono;
        let typeMobile = undefined;
        let checkterm = doc.forms.formcliente.checktermi;
        if (movil.checked) {
            typeMobile = "Teléfono";
        }
        if (fijo.checked) {
            typeMobile = "Teléfono";
        }
        let errores = 0;

        /**reset campos */
        document.getElementById('error1').style.display = "none";
        document.getElementById('error2').style.display = "none";


        /** validar */
        if (!telefono.value) {
            document.getElementById('error1').style.display = "block";
            errores++;
        }
        if (!checkterm.checked) {
            document.getElementById('error2').style.display = "block";
            errores++;
        }


        if (errores > 0) {
            return;
        }

        var typeForm = $('#type-form').val();
        var teleContacto = $("#telefonoLlamar").val();
        //Fijo o celular
        if ($('#radio-tipo-telefono-fijo').is(':checked')) {
            //var departamento = $("#select-dep").val();
            var departamento = "4";
            teleContacto = departamento + teleContacto;
            var tipoContacto = 'fijo';
        } else if ($('#radio-tipo-telefono-celular').is(':checked')) {
            var tipoContacto = 'movil';
        }

        var serie = JSON.stringify({ numero: teleContacto });
        console.log(serie);
        $.ajax({
            type: "POST",
            url: "https://so03.kerberusipbx.com:625/api/v0.1/callback",
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
            }

        });
        if (hashCiudades[getTSource()] != null) {
            $(".bogota-cali").hide();
            $(".medellin-barranquilla").hide();

            $(".llamar-movil").attr("onclick", "goog_report_conversion('tel:" + hashCiudades[getTSource()].indicativo + hashCiudades[getTSource()].numero + "')");

            $("#ciudades").show();
            $("#ciudad").html("<select id='selector-ciudad' class='list-search'></select>");
            $("#ciudad-numero").html(hashCiudades[getTSource()].numero);
        }
        else {
            // $("#ciudades").show();
            // $("#ciudad").html("<select id='selector-ciudad' class='list-search'></select>");
            // $("#ciudad-numero").html(hashCiudades[''].numero);
        }


        doc.forms.formcliente.submit();

    });

    $("#close-modal--TYC").click(function () {
        $("#overlay").hide();
        $("#modal--TYC").fadeOut(300);
    })
})(document);

function openModal(modal) {
    $("#overlay").show();
    $("#modal--TYC").fadeIn(300);

}




