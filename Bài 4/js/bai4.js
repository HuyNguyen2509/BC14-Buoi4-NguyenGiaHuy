document.getElementById('timTamGiac').addEventListener('click', hienthi);
function hienthi() {
    var show = tim();
    var pEL = document.createElement('p');
    pEL.innerHTML = show;


    var divHienThi = document.getElementById("divHienThi");
    divHienThi.innerHTML = "";
    divHienThi.style.display = "block";
    divHienThi.appendChild(pEL);
}

function tim() {
    var num1 = +document.getElementById('num1').value;
    var num2 = +document.getElementById('num2').value;
    var num3 = +document.getElementById('num3').value;

    /* Tam Giác Cân */
    if (num1 == num2 && num1 > num3 && num2 > num3) {
        return "Đây là tam giác Cân";
    }
    if (num2 == num3 && num2 > num1) {
        return "Đây là tam giác Cân";
    }
    if (num1 = num3 && num1 > num2) {
        return "Đây là tam giác Cân";
    }

    /* Tam Giác Đều */
    if (num1 == num2 && num1 == num3) {
        return "Đây là tam giác Đều";
    }

    /* Tam Giác Vuông */
    if (num1 < num2 && num2 < num3) {
        return "Đây là tam giác Vuông";
    }

    /* Tam Giác Thường */
    else {
        return "Đây là tam giác Thường";
    }
}



