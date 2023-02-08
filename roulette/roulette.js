let pointer = document.getElementsByClassName("rouletteUnicorn");
let rouletteBg = document.getElementsByClassName("roulette")[0];
let rouletteArea = 40;
let num = 0;
let offOn = true;
let again = true;

function alert1UCDT() {
  alert("恭喜獲得 1 UCDT，請至錢包內確認內容");
  canvas1.render();
}
function alert3UCDT() {
  alert("恭喜獲得 3 UCDT，請至錢包內確認內容");
  canvas2.render();
}
function alertTomorrow() {
  alert("未中獎，明天再來挑戰吧");
}

function delayFunction1() {
  setTimeout(alert1UCDT, 5000);
}
function delayFunction3() {
  setTimeout(alert3UCDT, 5000);
}
function delayFunctionTo() {
  setTimeout(alertTomorrow, 5000);
}

let start = () => {
  if (offOn) {
    let n = Math.floor(Math.random() * 18);
    let m = Math.floor(Math.random() * 39);

    if (again == true) {
      if (n % 18 == 1 || n % 18 == 2) {
        rouletteBg.style.transform = "rotate(" + (1780.5 + m) + "deg)";
        offOn = !offOn;
        delayFunction1();
      }
      if (n % 18 == 3 || n % 18 == 4 || n % 18 == 5) {
        rouletteBg.style.transform = "rotate(" + (1825.5 + m) + "deg)";
        offOn = !offOn;
        delayFunctionTo();
      }
      if (n % 18 == 6) {
        rouletteBg.style.transform = "rotate(" + (1870.5 + m) + "deg)";
        offOn = !offOn;
        delayFunction3();
      }
      if (n % 18 == 7 || n % 18 == 8 || n % 18 == 9) {
        rouletteBg.style.transform = "rotate(" + (1915.5 + m) + "deg)";
        again = !again;
      }
      if (n % 18 == 10 || n % 18 == 11) {
        rouletteBg.style.transform = "rotate(" + (1960.5 + m) + "deg)";
        offOn = !offOn;
        delayFunction1();
      }
      if (n % 18 == 12 || n % 18 == 13 || n % 18 == 14) {
        rouletteBg.style.transform = "rotate(" + (2005.5 + m) + "deg)";
        offOn = !offOn;
        delayFunctionTo();
      }
      if (n % 18 == 15) {
        rouletteBg.style.transform = "rotate(" + (2050.5 + m) + "deg)";
        offOn = !offOn;
        delayFunction3();
      }
      if (n % 18 == 16 || n % 18 == 17 || n % 18 == 0) {
        rouletteBg.style.transform = "rotate(" + (2095.5 + m) + "deg)";
        again = !again;
      }
    } else {
      if (n % 18 == 1 || n % 18 == 2 || n % 18 == 3 || n % 18 == 4) {
        rouletteBg.style.transform = "rotate(" + (3580.5 + m) + "deg)";
        offOn = !offOn;
        delayFunction1();
      }
      if (n % 18 == 5 || n % 18 == 6 || n % 18 == 7 || n % 18 == 8) {
        rouletteBg.style.transform = "rotate(" + (3625.5 + m) + "deg)";
        offOn = !offOn;
        delayFunctionTo();
      }
      if (n % 18 == 9) {
        rouletteBg.style.transform = "rotate(" + (3670.5 + m) + "deg)";
        offOn = !offOn;
        delayFunction3();
      }
      if (n % 18 == 10 || n % 18 == 11 || n % 18 == 12 || n % 18 == 13) {
        rouletteBg.style.transform = "rotate(" + (3760.5 + m) + "deg)";
        offOn = !offOn;
        delayFunction1();
      }
      if (n % 18 == 14 || n % 18 == 15 || n % 18 == 16 || n % 18 == 17) {
        rouletteBg.style.transform = "rotate(" + (3805.5 + m) + "deg)";
        offOn = !offOn;
        delayFunctionTo();
      }
      if (n % 18 == 0) {
        rouletteBg.style.transform = "rotate(" + (3850.5 + m) + "deg)";
        offOn = !offOn;
        delayFunction3();
      }
    }

    return;
  }
  if (!offOn) {
    alert("今天已經玩過了");
  }
};
