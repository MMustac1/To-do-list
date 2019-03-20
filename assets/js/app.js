//linethrough na klik
$("ul").on("click", "li", function () { //kod runa samo kad je li klknut unutar UL
    $(this).toggleClass("done")
})
//click on X to delete
$("ul").on("click","span", function (e) { //kod runa samo kad je span klknut unutar UL
    $(this).parent().fadeOut(500, function () {
        $(this).remove()
    })
    e.stopImmediatePropagation();

})


$("input[type='text']").on("keypress",function (e) {
     //text iz inputa
    var input = $(this).val()

    if (e.which === 13) {
       //novi li  i dodaj ga u UL
        $("ul").append(`<li><span>
    <i class="fa fa-trash" aria-hidden="true"></i>
</span> ${input}</li>`)
        //izbriši input
        $(this).val('')
        
    }

})

$(".fas").on("click", function () {
    $("input[type='text']").fadeToggle(250)
})

