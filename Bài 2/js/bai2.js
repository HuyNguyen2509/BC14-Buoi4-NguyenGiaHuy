
function xinchao() {
    var text = "";
    var name = prompt("Cho hỏi ai đang sử dụng máy tính");

    switch (name) {
        case "B":
            text = "Robot xin hỏi tối nay Ông Chủ bắt kèo Euro nào?";
            break;
        case "M":
            text = "Robot xin hỏi Bà Chủ hôm nay nấu món gì?";
            break;
        case "Bro":
            text = "Robot hỏi Cậu chủ hôm nay đi làm cảm thấy thế nào?";
            break;
        case "Sis":
            text = "Robot hỏi Tiểu Thư có đi chơi trong mùa dịch này không?";
            break;
        default:
            text = ">>> Người lạ xâm nhập máy tính <<<";
            break;
    }

    var divHT = document.getElementById('divHienThi');
    var pEL = document.createElement('p');
    divHT.appendChild(pEL);
    pEL.innerHTML = text;

    divHT.style.display = "block";
}

