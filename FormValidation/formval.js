function checkAll(){
    let ufname=document.getElementById("fn").value;
    let regfname="^[a-zA-Z]{3,15}$";
    //let uedu=document.formval.edu;
    if(ufname.trim()===""){
        window.alert("first name is required");
        return false;
    }
    if(!ufname.trim().match(regfname)){
        window.alert("user name must contain only character and 3 to 15 characters");
        return false;
    }
    let ulname=document.getElementById("ln").value;
    let reglname="^[a-zA-Z]{1,15}$";
    //let uedu=document.formval.edu;
    if(ulname.trim()===""){
        window.alert("last name is required");
        return false;
    }
    if(!ulname.trim().match(reglname)){
        window.alert("user last name must contain only character and 1 to 15 characters");
        return false;
    }
}