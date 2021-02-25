var sended = false;
function submitAjax(e) {
    e.preventDefault();

    $('#ajax-form .container').removeClass('error_field');
    $('#ajax-form .error').remove();
    
    if (!sended) {
        sended = true;
        let form = document.getElementById('ajax-form');
        let formData = new FormData(form);

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: './validator.php?action=ajax-form',
            cache: false,
            processData: false,
            contentType: false,
            data: formData,
            success: function (response) {
                sended = false;
                console.log(response);
                // return false;
                if (typeof response.errors !== 'undefined') {
                Object.keys(response.errors).forEach(function (key) {
                    let error_text = response.errors[key];
                    let show_error_message = $(
                        '<small class="error">' + error_text + '</small>'
                    );
                    let input_field = $('.ajax-form *[name=' + key + ']');

                    show_error_message.appendTo(input_field.closest('.container').addClass('error_field')).delay(3000).fadeOut(800, function () {
                        $(this).remove();
                    })
                });
                } else if (typeof response.success !== 'undefined') {
                    form.reset();
                    $('body .modal').attr('style', '');
                }
            },
            error: function () {
                sended = false;
            },
        });
    }
}