var arr = ['<img src="assets/img1.jpg"></img>', '<img src="assets/img2.jpg"></img>', '<img src="assets/img3.jpg"></img>',
    '<img src="assets/img4.jpg"></img>', '<img src="assets/img5.jpg"></img>', '<img src="assets/img6.jpg"></img>',
    '<img src="assets/img7.jpg"></img>', '<img src="assets/img8.jpg"></img>', '<img src="assets/img1.jpg"></img>', '<img src="assets/img2.jpg"></img>', '<img src="assets/img3.jpg"></img>',
    '<img src="assets/img4.jpg"></img>', '<img src="assets/img5.jpg"></img>', '<img src="assets/img6.jpg"></img>',
    '<img src="assets/img7.jpg"></img>', '<img src="assets/img8.jpg"></img>'
]


function compareRandom(a, b) {          //функция, которая перемешивает массив
    return Math.random() - 0.5;
}

arr.sort(compareRandom);


var a = document.getElementsByClassName('back');
for (var i = 0; i < a.length; i++) {                //заполняем div массивом
    a[i].innerHTML = arr[i];
}

var all = 0;        //количество открытых изображений
var mem = [];   //массив для хранения двух выбранных элементов
var cells = document.querySelectorAll("label.backfaces>div.back>img");
var inpt = document.querySelectorAll("input.checkbox");

function Flip(val) {
    if (mem.length < 2) {
        
        mem.push(val);
        console.log(cells[val].src);
    }
    if (mem.length == 2) {
        if (cells[mem[0]].src == cells[mem[1]].src) {
            
                inpt[mem[0]].disabled = true;
                inpt[mem[1]].disabled = true;

            mem = [];
            all += 2;

        }
        else {
            setTimeout(function fun() {
                inpt[mem[0]].disabled = false;
                inpt[mem[1]].disabled = false;
                inpt[mem[0]].checked = false;
                inpt[mem[1]].checked = false;
                mem = [];

            }, 700);
        }

    }
    //когда все элементы стали открыты
    setTimeout(function() {
        if (all == inpt.length) {
            for (var i = 0; i < inpt.length; i++) {
                inpt[i].disabled = false;
                inpt[i].checked = false;        //переворачиваем обратно все изображения
            }
            //выводим сообщение о победе
            document.getElementById("msg").classList.add('msg_displayed');
            setTimeout(function() {
                document.getElementById("msg").classList.remove('msg_displayed')
            }, 3000);
            //снова перемешиваем массив
            arr.sort(compareRandom);
            for (var i = 0; i < a.length; i++) {
                a[i].innerHTML = arr[i];
            }
            cells = document.querySelectorAll("label.backfaces>div.back>img");
            inpt = document.querySelectorAll("input.checkbox");
            all = 0;

        }
    }, 11000);

}


// var board = document.getElementsByClassName("conteiner")[0];
// board.addEventListener("click", function(e){
//     // console.log(e.target, e.currentTarget, this, e.target.parentNode.parentNode.getAttribute("for"));
//     var f = e.target.parentNode.parentNode.getAttribute("for");
//     console.log(f)
//     var el = document.querySelector('[for='+f+']');
//     console.log(el.getAttribute("checked"));
// })