
Array.prototype.first = function () {
    return this[0];
};

function inpute_key(e){
    if(e && e.keyCode == 13) {
        search();
    }
}

function nettoyage(){
    //
    while(document.getElementById("liste_mots").children.length>0){
        for(c of document.getElementById("liste_mots").children){
            document.getElementById("liste_mots").removeChild(c);
        }
    }
    document.getElementById("liste_mots").children=[];
    console.log(document.getElementById("liste_mots").children);
}

function search(){
    nettoyage();
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






