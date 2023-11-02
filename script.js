//1.prender ce que l'utilisateur entre
const input = document.querySelector('input');
const produits = document.querySelectorAll('.produit');
input.addEventListener('input',(e)=>{
    //console.log(e.target.value); pour vérifier le e
    let content = e.target.value;
    produits.forEach((prod)=>{//pour chaque element on nome prod
                     // console.log(prod.textContent); pour verifier
                     if(prod.textContent.indexOf(content)>=0){
                        
                         prod.style.display ="block";
                 }  
                    else{
                        prod.style.display ="none";
                    }                

    })
})

//console.log(input); code de verification
//console.log(produit); code de verification
//2.camparer cela aux produits disponibles
//3.si le les caractères entré par l'utilisateur corespont a un plusieurs produits,
//affiches les, 
//si non 
//masque les 