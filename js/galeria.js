$(function() {
    $('a.galeria').on('click', function() {
        let img = $(this).find('img').attr('src')
        $('.div-box img').attr('src', img).css({ 'width': '100%' })
        $('.bg-box, .div-box').fadeIn('slow')
    })
    $('.bg-box, .btn-fechar').on('click', function() {
        $('.bg-box, .div-box').fadeOut('slow')
    })
})