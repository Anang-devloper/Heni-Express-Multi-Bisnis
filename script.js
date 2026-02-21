window.addEventListener("load", function(){
document.querySelector(".loader").style.display="none";
});

function kirimWA(){
var nama=document.getElementById("nama").value;
var alamat=document.getElementById("alamat").value;
var telepon=document.getElementById("telepon").value;
var email=document.getElementById("email").value;

var pesan=`PENDAFTARAN AGEN MULTI BISNIS%0A%0A
Nama: ${nama}%0A
Alamat: ${alamat}%0A
Telepon: ${telepon}%0A
Email: ${email}`;

window.open("https://wa.me/6285366573886?text="+pesan,"_blank");
}
