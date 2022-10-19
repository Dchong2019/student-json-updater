function deleteStudent() {
    var id = $("#delete_id").val();
    $.ajax({
        url: "students/" + id,
        type: "delete",
        success: function (response){
          $("#delete_message").text("Student with ID:" + id + "deleted");

        },
        error: function(xhr){
            $("#student_result").text("error:" + xhr)
        }
    });
}