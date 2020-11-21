//Onda cinematica

//Inicialmente definimos las variables con que trabajaremos y los datos de entrada
function Onda__Cinemat(){

let ancho=parseFloat(document.getElementById("ancho").value)
let So=parseFloat(document.getElementById("So").value)
let n=parseFloat(document.getElementById("n").value)
let alfa=parseFloat(document.getElementById("alfa").value)
let dt=parseFloat(document.getElementById("deltat").value)
let dx=parseFloat(document.getElementById("deltax").value)
let lambda=parseFloat(document.getElementById("lambda").value)
let q=0
let Y=0
let q1=parseFloat(document.getElementById("q").value)
let x0=0

let Phi = Math.pow(((n * Math.pow((ancho),(2 / 3))) / Math.pow((So) , (1 / 2))), (0.6))
let phibody = document.getElementById("phi")
phibody.innerHTML="<p>"+ Phi +"</p>"

let distanciac=[15]
let distanciad=[15]
let distanciae=[15]
let distanciaf=[15]
let distanciag=[15]
let distanciah=[15]
let distanciai=[15]
let distnaciaj=[15]
let distanciak=[15]
let distancial=[15]
let distanciam=[15]

//Iteraciones Formula Onda Cinematica
for (let i = 1; i <= 60; i++){
    //Qij2 = ((dt / dx) * Range("C" & fi5 + 1) + lambda * Phi * Range("D" & fi5) * ((Range("D" & fi5) + Range("C" & fi5 + 1)) / 2) ^ (lambda - 1)) / ((dt / dx) + lambda * Phi * ((Range("D" & fi5) + Range("C" & fi5 + 1)) / 2) ^ (lambda - 1))
    Qij2 = ((dt / dx) * distanciac[i] + lambda * Phi * distanciad[i-1]* ((distanciad[i-1]+ distanciac[i]) / 2) ^ (lambda - 1)) / ((dt / dx) + lambda * Phi * ((distanciad[i-1]+ distanciac[i]) / 2) ^ (lambda - 1))
    distanciad.push(Qij2)
}

for (let i = 1 ;i<=60; i++){
    Qij2 = ((dt / dx) * distanciad[i] + lambda * Phi * distanciad[i-1]* ((distanciae[i-1]+ distanciad[i]) / 2) ^ (lambda - 1)) / ((dt / dx) + lambda * Phi * ((distanciae[i-1]+ distanciad[i]) / 2) ^ (lambda - 1))
    distanciae.push(Qij2)
}

for (let i = 1; i<= 60; i++){
    Qij2 = ((dt / dx) * distanciaE[i]+ lambda * Phi * distanciaf[i-1]* ((distanciaf[i-1]+ distanciae[i]) / 2) ^ (lambda - 1)) / ((dt / dx) + lambda * Phi * ((distanciaf[i-1]+ distanciae[i]) / 2) ^ (lambda - 1))
    distanciaf.push(Qij2)
}


for (let i = 1; i<= 60; i++){
    Qij2 = ((dt / dx) * distanciaf[i]+ lambda * Phi * distanciag[i-1] * ((distanciag[i-1] +distanciaf[i]) / 2) ^ (lambda - 1)) / ((dt / dx) + lambda * Phi * ((distanciag[i-1] + distanciaf[i]) / 2) ^ (lambda - 1))
    distanciag.push(Qij2)
}


for (let i = 1; i<= 60; i++){
    Qij2 = ((dt / dx) * distanciag[i] + lambda * Phi * distanciah[i-1] * ((distanciah[i-1] + distanciag[i]) / 2) ^ (lambda - 1)) / ((dt / dx) + lambda * Phi * ((distanciah[i-1] + distanciag[i]) / 2) ^ (lambda - 1))
    distanciah.push(Qij2)
}

for (let i = 1; i<=60; i++){
    Qij2 = ((dt / dx) * distanciah[i] + lambda * Phi * distanciai[i+1]* ((distanciai[i+1]+ distanciah[i]) / 2) ^ (lambda - 1)) / ((dt / dx) + lambda * Phi * ((distanciai[i+1]+ distanciah[i]) / 2) ^ (lambda - 1))
    distanciai.push(Qij2)
}

fi5 = 15
For i = 1 To 60
Qij2 = ((dt / dx) * Range("I" & fi5 + 1) + lambda * Phi * Range("J" & fi5) * ((Range("J" & fi5) + Range("I" & fi5 + 1)) / 2) ^ (lambda - 1)) / ((dt / dx) + lambda * Phi * ((Range("J" & fi5) + Range("I" & fi5 + 1)) / 2) ^ (lambda - 1))
Range("J" & fi5 + 1) = Qij2
fi5 = fi5 + 1
Next

fi5 = 15
For i = 1 To 60
Qij2 = ((dt / dx) * Range("J" & fi5 + 1) + lambda * Phi * Range("K" & fi5) * ((Range("K" & fi5) + Range("J" & fi5 + 1)) / 2) ^ (lambda - 1)) / ((dt / dx) + lambda * Phi * ((Range("K" & fi5) + Range("J" & fi5 + 1)) / 2) ^ (lambda - 1))
Range("K" & fi5 + 1) = Qij2
fi5 = fi5 + 1
Next

fi5 = 15
For i = 1 To 60
Qij2 = ((dt / dx) * Range("K" & fi5 + 1) + lambda * Phi * Range("L" & fi5) * ((Range("L" & fi5) + Range("K" & fi5 + 1)) / 2) ^ (lambda - 1)) / ((dt / dx) + lambda * Phi * ((Range("L" & fi5) + Range("K" & fi5 + 1)) / 2) ^ (lambda - 1))
Range("L" & fi5 + 1) = Qij2
fi5 = fi5 + 1
Next

fi5 = 15
For i = 1 To 60
Qij2 = ((dt / dx) * Range("L" & fi5 + 1) + lambda * Phi * Range("M" & fi5) * ((Range("M" & fi5) + Range("L" & fi5 + 1)) / 2) ^ (lambda - 1)) / ((dt / dx) + lambda * Phi * ((Range("M" & fi5) + Range("L" & fi5 + 1)) / 2) ^ (lambda - 1))
Range("M" & fi5 + 1) = Qij2
fi5 = fi5 + 1
Next

}