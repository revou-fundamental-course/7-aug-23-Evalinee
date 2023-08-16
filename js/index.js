function hitungLuasSegitiga() {
    let alas = parseFloat(document.getElementById("alas-s").value);
	let tinggi = parseFloat(document.getElementById("tinggi-s").value);
	let luas = 0.5 * alas * tinggi;
	document.getElementById("luas-s").value = luas;
}

//Keliling Segitiga//
function hitungKelilingSegitiga() {
    let sisiA = parseFloat(document.getElementById("sisi-a").value);
    let sisiB = parseFloat(document.getElementById("sisi-b").value);
    let sisiC = parseFloat(document.getElementById("sisi-c").value);
    let keliling = sisiA + sisiB + sisiC;
    document.getElementById("keliling-s").value = keliling;
}

//Luas Jajargenjang// 
function hitungLuasJajargenjang() {
    let alas = parseFloat(document.getElementById("alas-j").value);
    let tinggi = parseFloat(document.getElementById("tinggi-j").value);
    let luas = alas * tinggi;
    document.getElementById("luas-j").value = luas;
}

//Keliling Jajargenjang// 
function hitungKelilingJajarGenjang() {
    let sisiAB = parseFloat(document.getElementById("sisi-ab").value);
    let sisiBC = parseFloat(document.getElementById("sisi-bc").value);
    let keliling = 2 * (sisiAB + sisiBC);
    document.getElementById("keliling-j").value = keliling;
}
//Reset// 
function resetForm() {
    document.getElementById("alas-s").value = "";
    document.getElementById("tinggi-s").value = "";
    document.getElementById("luas-s").value = "";
    document.getElementById("sisi-a").value = "";
    document.getElementById("sisi-b").value = "";
    document.getElementById("sisi-c").value = "";
    document.getElementById("keliling-s").value = "";
}
function reset(){
    document.getElementById("alas-j").value = "";
    document.getElementById("tinggi-j").value = "";
    document.getElementById("luas-j").value = "";
    document.getElementById("sisi-ab").value = "";
    document.getElementById("sisi-bc").value = "";
    document.getElementById("keliling-j").value = "";
}