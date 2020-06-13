
function inpute_key(e){
    if(e && e.keyCode == 13) {
        search();
    }
}

function search(){
    //
    for(c of document.getElementById("liste_mots").children){
        document.getElementById("liste_mots").removeChild(c);
    }
    document.getElementById("liste_mots").children=[];
    console.log(document.getElementById("liste_mots").children);
    //
    txt=document.getElementById("inpute").value;
    for(w of words){
        if(w.includes(txt)){
            var pp=document.createElement("p");
            pp.innerHTML=w;
            document.getElementById("liste_mots").appendChild(pp);
        }
    }
}






