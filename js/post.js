var count=0;

var isedit=0;

function postLiked(){
    count++;
    document.getElementById("likeCount").innerHTML=count+" person likes this!"
    document.getElementById("likeBlog").innerHTML = "Liked!"
}


function addComments(id){
    document.getElementById("viewComments").style.visibility = "visible";
    var addEventName = id.value +'<br>';
    var a = document.getElementById('cmntText');
    document.getElementById('addEventNames').innerHTML = '<p style="padding:10px;background-color:white;">'+addEventName+'</p>' +document.getElementById('addEventNames').innerHTML;          
    a.value=a.defaultValue;
}


function editPost(){

    if(isedit===0){
        var content = document.getElementById("toBeEdited").innerHTML;
        var heading = document.getElementById("titleSolid").innerHTML;


        document.getElementById("toogleButtonIcon").innerHTML = ' '
        document.getElementById("toogleButtonIcon").innerHTML = '<i id="toogleButtonIcon" class="fa fa-save"></i>'
        document.getElementById("EditAndSave").innerHTML = "Save &nbsp";
        

        //content 
        document.getElementById("editablearea").value = content;
        document.getElementById("editablearea").style.visibility = "visible";
        document.getElementById("editablearea").style.display = "block";
        document.getElementById("toBeEdited").style.visibility = "hidden";
        document.getElementById("toBeEdited").style.display = "none";


        //heading
        document.getElementById("titleEdit").value = heading;
        document.getElementById("titleEdit").style.visibility = "visible";
        document.getElementById("titleEdit").style.display = "block";
        document.getElementById("titleSolid").style.visibility = "hidden";
        document.getElementById("titleSolid").style.display = "none";


        //document.getElementById("toBeEdited").innerHTML = '<textarea style="height: 400px; width: 100%">' + x + '</textarea>'
        isedit=1;
    }

    else if(isedit===1){
        var content = document.getElementById("editablearea").value;
        var heading = document.getElementById("titleEdit").value;

        document.getElementById("toogleButtonIcon").innerHTML = ' '
        document.getElementById("toogleButtonIcon").innerHTML = '<i id="toogleButtonIcon" class="fa fa-edit"></i>'
        document.getElementById("EditAndSave").innerHTML = "Edit &nbsp";


        //content
        document.getElementById("toBeEdited").innerHTML = content;
        document.getElementById("editablearea").style.visibility = "hidden";
        document.getElementById("editablearea").style.display = "none";
        document.getElementById("toBeEdited").style.visibility = "visible";
        document.getElementById("toBeEdited").style.display = "block";


        //heading
        document.getElementById("titleSolid").innerHTML = heading;
        document.getElementById("titleEdit").style.visibility = "hidden";
        document.getElementById("titleEdit").style.display = "none";
        document.getElementById("titleSolid").style.visibility = "visible";
        document.getElementById("titleSolid").style.display = "block";
        //document.getElementById("toBeEdited").innerHTML = '<p>' + x + '</p>'
        isedit=0;
    }

    
}