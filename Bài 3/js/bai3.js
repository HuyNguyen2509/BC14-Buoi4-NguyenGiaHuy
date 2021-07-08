
function tinh() {
    var num1 = +document.getElementById('num1').value;
    var num2 = +document.getElementById('num2').value;
    var num3 = +document.getElementById('num3').value;

    var arrChan = [];
    var arrLe = [];

    if (num1 > 0 && num1 % 2 === 0) {
        arrChan.push(num1);
    }
    if (num1 > 0 && num1 % 2 !== 0) {
        arrLe.push(num1);
    }

    if (num2 > 0 && num2 % 2 === 0) {
        arrChan.push(num2);

    }
    if (num2 > 0 && num2 % 2 !== 0) {
        arrLe.push(num2);
    }

    if (num3 > 0 && num3 % 2 === 0) {
        arrChan.push(num3);
    }
    if (num3 > 0 && num3 % 2 !== 0) {
        arrLe.push(num3);
    }

    var divHienThi = document.getElementById('divHienThi');
    var pChan = document.createElement('p');
    var pLe = document.createElement('p');

    var soChan = arrChan.join(" - ");
    var soLe = arrLe.join(" - ");

    pChan.innerHTML = "Số Chẳn: " + soChan;
    pLe.innerHTML = "Số Lẻ: " + soLe;

    divHienThi.appendChild(pChan);
    divHienThi.appendChild(pLe);

    divHienThi.style.display = "block";

    console.log("Số chẳn: ", arrChan);
    console.log("Số lẻ: ", arrLe);
}