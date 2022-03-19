function setdata() {
    var nim = document.getElementById("nim").value;
    var nama = document.getElementById("nama").value;
    var nm_mk = document.getElementById("nm_mk").value;

    localStorage.setItem("setnim", nim);
    localStorage.setItem("setnama", nama);
    localStorage.setItem("setnm_mk", nm_mk);
}

function getdata(){
    document.getElementById("getnim").innerHTML = localStorage.getItem("setnim");
    document.getElementById("getnama").innerHTML = localStorage.getItem("setnama");
    document.getElementById("getnm_mk").innerHTML = localStorage.getItem("setnm_mk");
}

function calculate(){
    var tugas = document.getElementById("ntugas").value;
    var quiz = document.getElementById("nquiz").value;
    var uts = document.getElementById("nuts").value;
    var uas = document.getElementById("nuas").value;
    var total = (parseFloat(tugas)*10/100) + (parseFloat(quiz)*20/100) + (parseFloat(uts)*30/100) + (parseFloat(uas)*40/100);

    /* Ini kalo hasil inputnya mau dalam bentuk form
    document.getElementById("gettotal").value = total;
    */
   document.getElementById("gettotal").innerHTML = total;
    
   if (total <= 69){
        document.getElementById("getnhuruf").textContent="C";
        document.getElementById("deskripsi").textContent="Cukup. Dapat mengingat, mengetahui sebagian materi perkuliahan,tetapi kurang bisa menerapkan, menganalisis dan mengevaluasi beberapa materi perkuliahan";
   }else if(total <= 74){
       document.getElementById("getnhuruf").textContent="B-";
       document.getElementById("deskripsi").textContent="Cukup baik. Dapat mengingat, mengetahui, menerapkan sebagian besar materi perkuliahan tetapi kurang bisa menganalisis dan mengevaluasi dua materi perkuliahan";
   }else if(total <= 79){
       document.getElementById("getnhuruf").textContent="B";
       document.getElementById("deskripsi").textContent="Baik. Dapat mengingat, mengetahui, menerapkan, menganalis sebagian besar materi perkuliahan tetapi kurang bisa mengevaluasi dua materi perkuliahan";
   }else if(total <= 84){
       document.getElementById("getnhuruf").textContent="B+";
       document.getElementById("deskripsi").textContent=" Baik sekali. Dapat mengingat, mengetahui, menerapkan, menganalisis sebagian besar materi perkuliahan tetapi kurang bisa mengevaluasi salah satu dari materi perkuliahan";
   }else if(total <= 90){
       document.getElementById("getnhuruf").textContent="A-";
       document.getElementById("deskripsi").textContent=" Baik dan sempurna. Dapat mengingat, mengetahui, menerapkan, menganalisis semua materi perkuliahan tetapi kurang teliti mengevaluasi salah satu materi perkuliahan";
   }else if(total <= 100){
       document.getElementById("getnhuruf").textContent="A";
       document.getElementById("deskripsi").textContent="Sangat baik dan sempurna. Dapat mengingat, mengetahui, menerapkan, menganalisis, dan mengevaluasi semua materi perkuliahan";
   }else {
       document.getElementById("getnhuruf").textContent="Nilai tidak valid";
       document.getElementById("gettotal").textContent="";
       document.getElementById("deskripsi").textContent="";
   }
}