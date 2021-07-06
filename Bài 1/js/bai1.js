document.getElementById("SapXep").addEventListener('click', Tinh);

function Tinh() {
    var Number1 = +document.getElementById("num1").value;
    var Number2 = +document.getElementById("num2").value;
    var Number3 = +document.getElementById("num3").value;
    var arr = [Number1, Number2, Number3];

    arr.sort(function sortNumber(a, b) {
        return a - b;
    })

    var arrKQ = arr.join(' - ');

    var pEL = document.createElement('p');
    pEL.innerHTML = "Giá trị được sắp xếp tăng dần: " + arrKQ;

    var divHienThi = document.getElementById("divHienThi");
    divHienThi.innerHTML = "";
    divHienThi.style.display = "block";
    divHienThi.appendChild(pEL);
}