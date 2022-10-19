function getStudentById() {
    var id = $("#record_id").val();
    $.ajax({
        url: "students/" + id,
        type: "get",
        success: function (response){
            $("#student_result").text(response);
            console.log( response);

        },
        error: function(xhr){
            $("#student_result").text("error:" + xhr)
        }
    })
}