function guardarDatos() {
    let D = document.getElementById("D").value;
    let Q = document.getElementById("Q").value;
    let nfull = document.getElementById("n").value;
    let S = document.getElementById("S").value;
    let A = 0;
    let P = 0;
    let R = 0;
    let Qi = 0;
    let V = 0;
    let theta = 0;
    let n = 0;
    let Arn = 0;
    sessionStorage.setItem("Q", Q)
    sessionStorage.setItem("D", D)
    sessionStorage.setItem("nfull", nfull)
    sessionStorage.setItem("S", S)
    let y = [D]
    let targetValue = Q / (1.49* (Math.pow(S, (1/2))))
    sessionStorage.setItem("targetValue", targetValue)
    for (let k=0; k < 10000; k++) {
        Arn = calcularNormalDepth(y[k]);
        //console.log(Arn)
        dif = targetValue - Arn
        console.log(dif)
        if (Math.abs(dif)>=0.01){
            //console.log(Arn)
            y.push(y[k]-0.01);
        } else {
            console.log(y[k])
            break;
        }
    }
    sessionStorage.setItem("y", y)
}

function calcularNormalDepth(y) {
    nfull = sessionStorage.getItem("nfull")
    D = sessionStorage.getItem("D")
    r = D / 2
    targetValue = sessionStorage.getItem("targetValue")
    theta = 2 * Math.acos((r - y) / r)
    n = nfull * (1+ Math.pow((y/D),0.54)- Math.pow((y/D),1.2))
    A = ((Math.pow(r,2))*(theta-Math.sin(theta)))/2
    P = theta * r
    R = A /P
    Arn = (A * Math.pow(R, (2/3)))/n
    return Arn
}