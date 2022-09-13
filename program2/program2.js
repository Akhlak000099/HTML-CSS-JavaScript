function clickToShow(){

    var name=document.getElementById('name').value;
    var mail=document.getElementById('mail').value;
    var hobby=document.getElementById('hobby').value;
    var ph=document.getElementById('ph').value;

    // document.getElementById('getname').innerHTML=name;
    // document.getElementById('getgmail').innerHTML=mail;
    // document.getElementById('gethobby').innerHTML=hobby;
    // document.getElementById('getph').innerHTML=ph;
  
    document.getElementById('demo').innerHTML="Name :"+name+", Email : "+mail+", Hobby :"+hobby+", Phone No."+ph;
    document.getElementById('output').innerHTML="OutPut Deatail";

}