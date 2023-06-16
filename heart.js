//滚动条header script
// 获取页面中的元素
const header = document.querySelector('.fade-in-text');
header.classList.add('show');
let triggerPosition = window.innerHeight - header.offsetTop - header.offsetHeight * 3;
window.addEventListener('resize', function () {
    // 在这里更新 triggerPosition 的值
    triggerPosition = window.innerHeight - header.offsetTop - header.offsetHeight * 3;
    if (triggerPosition < 20) {
        triggerPosition = 20;
    }
});
// 监听滚动事件
window.addEventListener('scroll', () => {
    // 检查滚动条是否到达指定位置
    const header = document.querySelector('.fade-in-text');
    if (window.scrollY > triggerPosition) {
        // 添加一个类名来触发动画
        header.classList.add('hide');
    } else {
        // 添加一个类名来触发动画
        header.classList.add('show');
        header.classList.remove('hide')
    }
});



//滚动条footer script
// 获取页面中的元素
const footer = document.querySelector('.fc');
footer.classList.add('show');
let footerPosition = footer.offsetTop - window.innerHeight - footer.offsetHeight;
window.addEventListener('resize', function () {
    // 在这里更新 footerPosition 的值
    footerPosition = footer.offsetTop - window.innerHeight - footer.offsetHeight;
    if (footerPosition < 20) {
        footerPosition = 20;
    }
});
// 监听滚动事件
window.addEventListener('scroll', () => {
    // 检查滚动条是否到达指定位置
    const footer = document.querySelector('.fc');
    if (window.scrollY < footerPosition) {
        // 添加一个类名来触发动画
        footer.classList.add('hide');
    } else {
        // 添加一个类名来触发动画
        footer.classList.add('show');
        footer.classList.remove('hide')
    }
});



//倒计时script
// 定义倒计时的时间
var countDownDate = new Date("2025-06-07T08:00:00").getTime();
//var countDownDate = new Date("2023-05-31T10:00:00").getTime();
// 每秒更新一次倒计时
var x = setInterval(function () {

    // 获取当前时间
    var now = new Date().getTime();

    // 计算时间差
    var distance = countDownDate - now;

    // 计算剩余时间
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 在页面上显示剩余时间
    document.getElementById("countdown").innerHTML = days + "天 " + hours + "小时 "
        + minutes + "分钟 " + seconds + "秒 ";

    // 如果倒计时结束，则提示
    if (distance < 0) {
        document.getElementById("countdowntitle").innerHTML = "高考已经过去了"
        days += 1;
        hours += 1;
        minutes += 1;
        seconds += 1;
        document.getElementById("countdown").innerHTML = (-days) + "天 " + (-hours) + "小时 "
            + (-minutes) + "分钟 " + (-seconds) + "秒 ";
        let sp = '<p>我的学生们：</p><p>当你们看到这封信的时候，说明你们已经翻越了人生中高考这座大山了，接下来准备征服哪一座，你们自己决定了。但此时此刻回首高中时期，苦味中总有一丝甘甜。</p><p>很荣幸在你们高一的时候，成为你们的计算机老师，我也不清楚两年之后的我会是什么样的，可能在某个公司上班，也可能在某个学校上学。</p><p>接下来你们的人生才刚刚开始，所以我们从这一刻出发，共同努力吧。</p><sign>2023年6月1日<br>陈老师</sign>'
        document.getElementById("countdownletter").innerHTML = sp;
        document.getElementById("countdownletter").style.fontSize = "1rem";
        document.getElementById("countdown").style.fontSize = "4vw";
        //document.getElementById("countdowntitle").innerHTML = "";
    }
}, 1000);


//显示小恐龙元素


// //黑白转换
// document.getElementById("b_w").addEventListener("click", function () {
//     if (document.body.style.backgroundColor != "white") {
//         document.body.style.backgroundColor = "white";
//         var elements = document.querySelectorAll("*");
//         for (var i = 0; i < elements.length; i++) {
//             elements[i].style.color = "black";
//         }
//         //姓名转换
//         var nameElements = document.querySelectorAll('.name');
//         for (var i = 0; i < nameElements.length; i++) {
//             nameElements[i].style.backgroundColor = "#fff";
//         }
//         nameElements.forEach((nameElements) => {
//             nameElements.addEventListener('mouseover', () => {
//                 nameElements.style.backgroundColor = "#000";
//                 nameElements.style.color = "#fff";
//             });
//             nameElements.addEventListener('mouseout', () => {
//                 nameElements.style.backgroundColor = "#fff";
//                 nameElements.style.color = "#000";
//             });
//         });


//         //照片边框
//         const dpelements = document.querySelectorAll("#dp");
//         dpelements.forEach(dpelement => {
//             dpelement.style.borderColor = "#000";
//         });
//         //游戏边框
//         document.getElementById("game").style.borderColor = "#000";
//     } else {
//         document.body.style.backgroundColor = "#000";
//         var elements = document.querySelectorAll("*");
//         for (var i = 0; i < elements.length; i++) {
//             elements[i].style.color = "#fff";
//         }
//         //姓名转换
//         var nameElements = document.querySelectorAll('.name');
//         for (var i = 0; i < nameElements.length; i++) {
//             nameElements[i].style.backgroundColor = "#000";
//         }
//         nameElements.forEach((nameElements) => {
//             nameElements.addEventListener('mouseover', () => {
//                 nameElements.style.backgroundColor = "#fff";
//                 nameElements.style.color = "#000";
//             });
//             nameElements.addEventListener('mouseout', () => {
//                 nameElements.style.backgroundColor = "#000";
//                 nameElements.style.color = "#fff";
//             });
//         });
//         //照片边框
//         const dpelements = document.querySelectorAll("#dp");
//         dpelements.forEach(dpelement => {
//             dpelement.style.borderColor = "#fff";
//         });
//         //游戏边框
//         document.getElementById("game").style.borderColor = "#fff";

//         document.getElementById("bu").style.color = "#000";
//     }

// });
