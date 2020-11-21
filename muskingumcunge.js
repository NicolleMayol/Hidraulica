clearSessionStorage();
function obtenerDatos() {
    //Obtener datos del documento html
    let Qp = document.getElementById("Qp").value;
    let Ap = document.getElementById("Ap").value;
    let tp = document.getElementById("tp").value;
    let deltat = document.getElementById("deltat").value;
    let deltax = document.getElementById("deltax").value;
    let beta = document.getElementById("beta").value;
    let So = document.getElementById("So").value;
    let n = document.getElementById("n").value;
    let q = (document.getElementById("str").value).split(',');

    //Guardar datos en el Storage
    sessionStorage.setItem("Qp", Qp);
    sessionStorage.setItem("Ap", Ap);
    sessionStorage.setItem("tp", tp);
    sessionStorage.setItem("deltat", deltat);
    sessionStorage.setItem("deltax", deltax);
    sessionStorage.setItem("beta", beta);
    sessionStorage.setItem("So", So);
    sessionStorage.setItem("n", n);
    sessionStorage.setItem("q", JSON.stringify(q));

    let V = Qp / Ap;
    let qo = Qp / tp;
    let c = beta * V;
    let Q = [];

    deltat = deltat * 3600;
    deltax = deltax * 1000;

    let deltatl = [];
    let deltaxl = [];
    deltatl.push(deltat);
    deltaxl.push(deltax);
    deltati = deltat
    deltaxi = deltax
    let i=0;
    /*
    while (Math.round(Q[i])!=q[n-1]){
        deltat = deltat + deltati
        deltax = deltax + deltaxi
        deltatl.push(deltat);
        deltaxl.push(deltax);
        C = c * (deltatl[i] / deltaxl[i]); //Número de Courant 
        D = qo / (So * c * deltaxl[i]); //Número de Cell Reynolds
        Q.push(MuskingumCunge(qo, c, q, i, So, D, C));
        i++;
    }*/
    
    for (let i = 0; i < n - 1; i++) {
        deltat = deltat + deltati
        deltax = deltax + deltaxi
        deltatl.push(deltat);
        deltaxl.push(deltax);
        C = c * (deltatl[i] / deltaxl[i]); //Número de Courant 
        D = qo / (So * c * deltaxl[i]); //Número de Cell Reynolds
        Q.push(MuskingumCunge(qo, c, q, i, So, D, C));
    }
    sessionStorage.setItem("Q", JSON.stringify(Q))
    sessionStorage.setItem("deltatl", JSON.stringify(deltatl))
    sessionStorage.setItem("deltaxl", JSON.stringify(deltaxl))
    generarTabla();
}

function MuskingumCunge(qo, c, q, i, So, D, C) {
    let C0 = (-1 + C + D) / (1 + C + D);
    let C1 = (1 + C - D) / (1 + C + D);
    let C2 = (1 - C + D) / (1 + C + D);
    let Qi = C0 * q[i + 1] + C1 * q[i] + C2 * q[i]
    return Qi
}

function generarTabla() {
    //Cargar clientes del localstorage
    let Q_list = sessionStorage.getItem("Q")
    // Parse a Array
    Q = JSON.parse(Q_list)
    if (Q == null) {
        Q = []
    }
    let t = sessionStorage.getItem("deltat") * 1
    let deltatlist = sessionStorage.getItem("deltatl")
    deltatl = JSON.parse(deltatlist)
    if (deltatl == null) {
        deltatl = []
    }

    let deltaxlist = sessionStorage.getItem("deltaxl")
    deltaxl =JSON.parse(deltaxlist)
    if (deltaxl==null){
        deltaxl =[]
    }
    let q_list = sessionStorage.getItem("q")
    q = JSON.parse(q_list)
    if (q == null) {
        q = []
    }
    let t2 = -2;
    let aux = -1;
    Q.unshift(q[0])
    let tbody = document.getElementById("muskingumBody");
    tbody.innerHTML = "";
    for (let index = 0; index < Q.length; index++) {
        let row = ""
        t2 = t2 + t;
        aux++
        row += "<tr>"
        row += "<td>" + aux + "</td>"
        row += "<td>" + t2 + "</td>"
        row += "<td>" + q[index] + "</td>"
        row += "<td>" + Q[index] + "</td>"
        row += "</tr>"
        tbody.innerHTML += row;
    }
    let x = []
    for (let i =0; i<deltatl.length; i++){
        x[i] =deltatl[i]/3600;
    }
    //Graficar
    var hid0 = {
        x: x,
        y: q,
        mode: 'lines+markers',
        name: 'Hidrógrafa O'
    };
    var hid1 = {
        x: x,
        y: Q,
        mode: 'lines+markers',
        name: 'Hidrógrafa 1'
    };
    var title ={
        title:'Muskingum-Cunge routing',
        xaxis:{
            title: 'Caudal',
        },
        yaxis:{
            title:'Tiempo (horas)',
        }
    }
    var data = [hid0, hid1];
    Plotly.newPlot('graphDiv', data)
}
function limpiarDatos(){
    document.getElementById("Qp").value="";
    document.getElementById("Ap").value="";
    document.getElementById("tp").value="";
    document.getElementById("deltat").value="";
    document.getElementById("deltax").value="";
    document.getElementById("beta").value="";
    document.getElementById("So").value="";
    document.getElementById("n").value="";
    document.getElementById("str").value="";

    sessionStorage.setItem("Qp", "");
    sessionStorage.setItem("Ap", "");
    sessionStorage.setItem("tp", "");
    sessionStorage.setItem("deltat", "");
    sessionStorage.setItem("deltax", "");
    sessionStorage.setItem("beta", "");
    sessionStorage.setItem("So", "");
    sessionStorage.setItem("n", "");
    sessionStorage.setItem("q", "");
    let tbody = document.getElementById("muskingumBody");
    tbody.innerHTML = "";
    let graphDiv = document.getElementById("graphDiv");
    graphDiv.innerHTML="";

}
function clearSessionStorage(){
    sessionStorage.setItem("Qp", "");
    sessionStorage.setItem("Ap", "");
    sessionStorage.setItem("tp", "");
    sessionStorage.setItem("deltat", "");
    sessionStorage.setItem("deltax", "");
    sessionStorage.setItem("beta", "");
    sessionStorage.setItem("So", "");
    sessionStorage.setItem("n", "");
    sessionStorage.setItem("q", "");
}