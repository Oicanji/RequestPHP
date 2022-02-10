click = new Audio("src/click.mp3");
save = new Audio("src/save.mp3");

$("#number").click(function(){
    ressetSave();
    click.play();
    getNumber();
});
$("#save").click(function(){
    save.play();
    saveNumber();
});

function getNumber(){
    $.ajax({
        url: "request.php",
        type: "GET",
        success: function(data){
            $("#number_text").html(data);
            colorized(data);
        }
    });
}
function saveNumber(){
    if($("#number_text").html() != ""){
        $.ajax({
            url: "request.php",
            type: "POST",
            data: {
                num: $("#number_text").html()
            },
            success: function(data){
                successNumber();
            }
        });
    }else{
        alert("Adicione um número antes de salvar!");
    }
}
function successNumber(){
   if(!$("#save").hasClass("btn-success")){
    $("#save").removeClass("btn-primary");
    $("#save").addClass("btn-success");
   }
   resetNumber();
}
function colorized(number){
    if(number <= 50){
        setHtml("success");
        return;
    }
    if(number <= 70){
        setHtml("warning");
        return;
    }
    if(number <= 100){
        setHtml("danger");
        return;
    }
}
function setHtml(className){
    if(!$("#number").hasClass("btn-"+className)){
        $("#number").removeClass();
        $("#number").addClass("btn btn-"+className);
    }
}
function resetNumber(){
    setHtml("primary");
}
function ressetSave(){
    if($("#save").hasClass("btn-success")){
        $("#save").removeClass("btn-success");
        $("#save").addClass("btn-primary");
    }
}