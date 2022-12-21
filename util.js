const nombre_de_places = document.getElementById('nbseat').value;

function Total(){
    sum =0;
    if (document.getElementById('assurance').checked == true){
        sum += 20;
    }
    sum = sum + nombre_de_places*45;
    
    const total = document.getElementById('total');
    total.innerHTML += `<label> Total de la réservation : ${sum} </label>`;
}

const button = document.getElementById('bt_total');
button.addEventListener('click',Total);