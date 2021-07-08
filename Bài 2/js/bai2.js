
document.getElementById("XinChao").addEventListener('click', xinchao);
function xinchao() {
    var user = document.getElementById('user');

    switch (user) {
        case "Bo": {
            console.log("Vợ Chào Chồng");
        }
        default:
            console.log("None0");
    }
}