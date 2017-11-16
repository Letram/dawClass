/**
 * Created by usuario on 16/11/2017.
 */
$(function (){
    //usamos el on mediante una delegacion. Se creará un evento onClick y se ejecutará solo si es un li dentro de un nav
   $(document).on("click",".nav li", function () {
       $(this).addClass("active").siblings().removeClass("active");
   });

    $("#form").on("submit", function (e) {
        e.preventDefault();
        $(".modal").modal({
            backdrop:"static",
            keyboard:false
        })
    })
});