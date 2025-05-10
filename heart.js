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
        let sp = `<p>我的学生们：</p>
<p>当你们看到这封信的时候，说明你们已经翻越了人生中高考这座大山了，接下来准备征服哪一座，你们自己决定了。但此时此刻回首高中时期，苦味中总有一丝甘甜。</p>
<p>很荣幸在你们高一的时候，成为你们的计算机老师，我也不清楚两年之后的我会是什么样的，可能在某个公司上班，也可能在某个学校上学。但是现在的我正在看着某个班的晚自习，抓到了两个学生在互相猜拳，谁输了就要撸起袖子被扇胳膊。我不是很理解这是什么行为，现在的你们对于当年的行为，又会是一个什么样的感想呢</p>
<p>今天是2023年6月1日，晚自习和尹主任一起给学生们买了西瓜，下课铃响起的时候，倒是没有人着急回宿舍了。还有一个月我就要结束实习了，这一段时间的实习，遇到了这么多可爱的老师和学生，我觉得我很幸运。想过写点什么东西用来指导两年后高考结束的你们，不过高考都过去了，你们大概不想再听老师唠叨了，儿童节快乐学生们</p>
<p>今天是2023年6月14日，又是看晚自习的一天，晚自习上我让你们写属于自己的弹幕，我放在了网站里，可能有的人还不知道，在网站的名单上找到我的名字点一下就可以看到了，去看看吧，看看自己写的都是什么，都是些精神小伙语录......。哦对了，网站中的打字练习，你们可能还有人没有真正打完那段字吧，你们也可以去试试，那里记录了你们当时的成绩。</p>
<p>今天是2023年7月2日，我的实习结束了，我在操场上看着你们排着长长的队伍放假，离开，每一个人的面孔都很熟悉。</p>
<p>最后想对你们说，感谢这段时光，感谢永远关不上的网上冲浪和小恐龙游戏，永远带不走的机房垃圾，被抠下的键盘按键，偷跑的机房值日生和旋转180°的电脑显示器。感谢你们让我见识了学生的调皮。让我理解的作为老师的职责。在见证你们成长的过程中，也给我留下了一段深深的回忆。</p>
<p>接下来你们的人生才刚刚开始，所以我们从这一刻出发，共同努力吧。</p><sign>2023年<br>陈老师</sign>`
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
