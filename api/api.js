$(function(){
    $('#calc').click(function(){
        const metros = parseFloat($('#metros').val())
        const cm = 100 * metros
        $('#cen').val(cm)
        
    })
})

