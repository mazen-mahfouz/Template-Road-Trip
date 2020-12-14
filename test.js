function bar(opcl) {
    switch (opcl) {
        case "open":
            document.getElementById("bar-side").style.right = 0;
            break;

        case "clos":
            document.getElementById("bar-side").style.right = -100 + "%";
            break;
    }
}

var img_about1 = ['img2', 'img3', 'img4', 'img5']

for (i = 0; i < document.querySelectorAll('.about1').length; i++) {
    // console.log(document.querySelectorAll('.about1')[i])
    document.querySelectorAll('.about1')[i].style.backgroundImage = 'url(img/' + img_about1[i] + '.jpg)';

}

document.getElementById('header-backg').style.opacity = 0.45;
document.querySelector('#header-conn h1').style.opacity = 1;

window.onscroll = function () {
    scrol();
};

function scrol() {

    for (i = 0; i < document.querySelectorAll('.about1').length; i++) {

        if (document.querySelectorAll('.about1')[i].offsetTop - 350 <= Math.floor(scrollY) && document.querySelectorAll('.about1')[i].offsetTop + 450 >= Math.floor(scrollY)) {
            document.querySelectorAll('.about1-conn')[i].style.opacity = 1;
        } else {
            document.querySelectorAll('.about1-conn')[i].style.opacity = 0;
        }

    }

}