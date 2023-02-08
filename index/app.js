//news輪播圖

window.onload = function () {
  let news = document.getElementById("news");
  let ul = document.getElementById("list");
  let img = document.getElementById("pic");
  let left_btn = document.getElementById("left");
  let right_btn = document.getElementById("right");
  let allLi = document.getElementsByClassName("listLi");

  //第一個按鈕設置顏色
  let currentNUM = 1;
  allLi[0].style.backgroundColor = "#aa8161";

  //圖片循環改變
  let timer = setInterval(startloop, 4000);
  function startloop() {
    currentNUM++;
    changeIMG();
  }
  function changeIMG() {
    if (currentNUM == 0) {
      currentNUM = 3;
    }
    if (currentNUM == 4) {
      currentNUM = 1;
    }
    img.src = "img/" + currentNUM + ".jpg";
    //清空小圓點顏色，改變下一個顏色
    for (var i = 0; i < allLi.length; i++) {
      allLi[i].style.backgroundColor = "#70727a";
    }
    allLi[currentNUM - 1].style.backgroundColor = "#aa8161"; //設置當前的顏色的
  }

  //點擊左右按鈕

  left_btn.addEventListener(
    "click",
    function () {
      currentNUM--;
      changeIMG();
    },
    false
  );
  right_btn.addEventListener("click", startloop, false);

  //小圓點轉換
  for (var i = 0; i < allLi.length; i++) {
    allLi[i].index = i + 1;
    allLi[i].addEventListener(
      "mouseover",
      function () {
        allLi[0].style.backgroundColor = "#aaa";
        currentNUM = this.index;
        changeIMG();
      },
      false
    );
  }
};

let ctx = document.getElementById("myChart1");
let ctxc = ctx.getContext("2d");
ctx.height = 90;
let gradient = ctxc.createLinearGradient(0, 0, 0, 100);
gradient.addColorStop(0, "#795437");
gradient.addColorStop(1, "#101115");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "24hr before",
      "21hr before",
      "18hr before",
      "15hr before",
      "12hr before",
      "9hr before",
      "6hr before",
      "3hr before",
      "now",
    ],

    datasets: [
      {
        label: "price",
        data: [32.15, 32.19, 32.5, 32.48, 32.46, 32.71, 32.65, 32.52, 32.44],
        borderColor: "#ddb08f",
        backgroundColor: gradient,
        fill: true,
        borderWidth: 4,
        pointRadius: 0,
        borderJoinStyle: "round",
        pointHitRadius: 30,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    animation: {
      duration: 0,
    },

    responsiveAnimationDuration: 0,
  },
});

let ctxTwo = document.getElementById("myChart2");
let ctxcTwo = ctxTwo.getContext("2d");
ctxTwo.height = 90;
let gradientTwo = ctxcTwo.createLinearGradient(0, 0, 0, 100);
gradient.addColorStop(0, "#795437");
gradient.addColorStop(1, "#101115");
const myChartTwo = new Chart(ctxTwo, {
  type: "line",
  data: {
    labels: [
      "24hr before",
      "21hr before",
      "18hr before",
      "15hr before",
      "12hr before",
      "9hr before",
      "6hr before",
      "3hr before",
      "now",
    ],
    datasets: [
      {
        label: "price",
        data: [
          623354, 623200, 623311, 623280, 623295, 623187, 623150, 623120,
          623093,
        ],
        borderColor: "#ddb08f",
        backgroundColor: gradient,
        fill: true,
        borderWidth: 4,
        pointRadius: 0,
        borderJoinStyle: "round",
        pointHitRadius: 30,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    animation: {
      duration: 0,
    },

    responsiveAnimationDuration: 0,
  },
});

let ctxThree = document.getElementById("myChart3");
let ctxcThree = ctxThree.getContext("2d");
ctxThree.height = 90;
let gradientThree = ctxcThree.createLinearGradient(0, 0, 0, 100);
gradient.addColorStop(0, "#795437");
gradient.addColorStop(1, "#101115");
const myChartThree = new Chart(ctxThree, {
  type: "line",
  data: {
    labels: [
      "24hr before",
      "21hr before",
      "18hr before",
      "15hr before",
      "12hr before",
      "9hr before",
      "6hr before",
      "3hr before",
      "now",
    ],
    datasets: [
      {
        label: "price",
        data: [
          85.654, 82.357, 77.653, 84.569, 86.382, 79.662, 74.351, 75.201,
          75.381,
        ],
        borderColor: "#ddb08f",
        backgroundColor: gradient,
        fill: true,
        borderWidth: 4,
        pointRadius: 0,
        borderJoinStyle: "round",
        pointHitRadius: 30,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    animation: {
      duration: 0,
    },

    responsiveAnimationDuration: 0,
  },
});

let ctxFour = document.getElementById("myChart4");
let ctxcFour = ctxFour.getContext("2d");
ctxFour.height = 90;
let gradientFour = ctxcFour.createLinearGradient(0, 0, 0, 100);
gradient.addColorStop(0, "#795437");
gradient.addColorStop(1, "#101115");
const myChartFour = new Chart(ctxFour, {
  type: "line",
  data: {
    labels: [
      "24hr before",
      "21hr before",
      "18hr before",
      "15hr before",
      "12hr before",
      "9hr before",
      "6hr before",
      "3hr before",
      "now",
    ],
    datasets: [
      {
        label: "price",
        data: [
          0.000873, 0.002996, 0.001224, 0.000999, 0.002173, 0.003085, 0.003999,
          0.004112, 0.004096,
        ],
        borderColor: "#ddb08f",
        backgroundColor: gradient,
        fill: true,
        borderWidth: 4,
        pointRadius: 0,
        borderJoinStyle: "round",
        pointHitRadius: 30,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    animation: {
      duration: 0,
    },

    responsiveAnimationDuration: 0,
  },
});

let unicornData = [
  {
    key: 1,
    coinIcon: "<img src='./img/coin1.svg'/>",
    product: "UCDT / TWD",
    price: "32.110",
    upDown: "+0.09",
    volumeIn24Hr: "5732148.48",
    highestPrice: "32.110",
    lowestPrice: "32.050",
    starLight: false,
    link: "./dashboard.html",
  },
  {
    key: 2,
    coinIcon: "<img src='./img/coin2.svg'/>",
    product: "DTC / TWD",
    price: "623093",
    upDown: "-0.54",
    volumeIn24Hr: "32161038620",
    highestPrice: "631500",
    lowestPrice: "619877",
    starLight: false,
    link: "./notFinish.html",
  },
  {
    key: 3,
    coinIcon: "<img src='./img/coin3.svg'/>",
    product: "LtFD / TWD",
    price: "42012.63",
    upDown: "+0.75",
    volumeIn24Hr: "665421.00",
    highestPrice: "42015",
    lowestPrice: "42000",
    starLight: false,
    link: "./notFinish.html",
  },
  {
    key: 4,
    coinIcon: "<img src='./img/coin4.svg'/>",
    product: "FNC / TWD",
    price: "0.635",
    upDown: "+1.97",
    volumeIn24Hr: "171412.00",
    highestPrice: "0.665",
    lowestPrice: "0.625",
    starLight: false,
    link: "./notFinish.html",
  },
  {
    key: 5,
    coinIcon: "<img src='./img/coin5.svg'/>",
    product: "XLD / TWD",
    price: "75.381",
    upDown: "-3.44",
    volumeIn24Hr: "3655127.63",
    highestPrice: "75.425",
    lowestPrice: "74.999",
    starLight: false,
    link: "./notFinish.html",
  },
  {
    key: 6,
    coinIcon: "<img src='./img/coin6.svg'/>",
    product: "ENM / TWD",
    price: "528.39",
    upDown: "0.00",
    volumeIn24Hr: "100.42",
    highestPrice: "550.15",
    lowestPrice: "527.19",
    starLight: false,
    link: "./notFinish.html",
  },
  {
    key: 7,
    coinIcon: "<img src='./img/coin7.svg'/>",
    product: "DDP / TWD",
    price: "0.004096",
    upDown: "+2.94",
    volumeIn24Hr: "5884461000",
    highestPrice: "0.00435",
    lowestPrice: "0.003979",
    starLight: false,
    link: "./notFinish.html",
  },
];

let changeFirst = JSON.stringify(unicornData);
let finallyUnicornData = JSON.parse(changeFirst);

// 排序項的開啟與否
let sortStatus = {
  price: true,
  upDown: true,
  volumeIn24Hr: true,
  highestPrice: true,
  lowestPrice: true,
};

// 表格資料set
const setTableItem = (initial) => {
  //insertRow -> table設ID
  //insertCell -> 只能在td執行
  // finallyUnicornData = initial || unicornData;
  const table = document.getElementById("allCoin");
  table.innerHTML = "";
  const dotNumber = new Intl.NumberFormat("en-US");
  const itemMap = initial.map((value) => {
    let row = table.insertRow();
    let imageStar = row.insertCell();
    let product = row.insertCell();
    let price = row.insertCell();
    let upDown = row.insertCell();
    let volumeIn24Hr = row.insertCell();
    let highestPrice = row.insertCell();
    let lowestPrice = row.insertCell();
    let buyButton = row.insertCell();
    if (value.starLight) {
      imageStar.innerHTML =
        "<a class = 'star' onclick='onClick(" +
        value.key +
        ")' >" +
        "<img src='./img/StarFill.svg'  style='cursor: pointer'/>" +
        "</a>";
    }
    if (!value.starLight) {
      imageStar.innerHTML =
        "<a class = 'star' onclick='onClick(" +
        value.key +
        ")'>" +
        "<img src='./img/starBorder.svg' />" +
        "</a>";
    }
    product.innerHTML = "<h6>" + value.coinIcon + value.product + "</h6>";
    price.innerHTML = "<h6>" + dotNumber.format(value.price) + "</h6>";
    upDown.innerHTML = "<h6>" + value.upDown + "%" + "</h6>";
    function colorUpDown() {
      if (value.upDown > 0) {
        upDown.style["color"] = "#61ffb1";
      } else if (value.upDown == 0) {
        upDown.style["color"] = "#ffffff";
      } else {
        upDown.style["color"] = "#ff7c8a";
      }
    }
    colorUpDown();
    volumeIn24Hr.innerHTML =
      "<h6>" + dotNumber.format(value.volumeIn24Hr) + "</h6>";
    highestPrice.innerHTML =
      "<h6>" + dotNumber.format(value.highestPrice) + "</h6>";
    lowestPrice.innerHTML =
      "<h6>" + dotNumber.format(value.lowestPrice) + "</h6>";
    buyButton.innerHTML =
      "<a href='" + value.link + "'><button><h5>立即交易</h5></button></a>";
  });
  return itemMap;
};

// 點擊收藏後的資料
let collectionData = [];

//搜尋資料
let input = document.getElementsByClassName("searchCoin")[0];
let inputTest = "";

// 點擊星星的事件
const onClick = (value) => {
  const sortData = () => {
    if (myCollectionbButton.classList.contains("clicked")) {
      const data = collectionData.filter(
        (value) =>
          value.starLight && value.product.toUpperCase().includes(inputTest)
      );
      return data;
    }
    if (!myCollectionbButton.classList.contains("clicked")) {
      return finallyUnicornData.filter((value) =>
        value.product.toUpperCase().includes(inputTest)
      );
    }
  };
  sortData().map((item) => {
    if (item.key === value) {
      item.starLight = !item.starLight;
      return item;
    }
    return item;
  });
  setTableItem(sortData());
};

// 收藏按鈕
let myCollectionbButton = document.getElementById("myCollectionbButton");
const onMyCollection = () => {
  if (!myCollectionbButton.classList.contains("clicked")) {
    const filter = finallyUnicornData.filter((item) => item.starLight);
    myCollectionbButton.classList.add("clicked");
    if (inputTest === "") {
      collectionData = filter;
      setTableItem(collectionData);
      return;
    } else {
      collectionData = filter.filter((value) =>
        value.product.toUpperCase().includes(inputTest)
      );
      setTableItem(collectionData);
      return;
    }
  }
  if (myCollectionbButton.classList.contains("clicked")) {
    myCollectionbButton.classList.remove("clicked");

    if (inputTest === "") {
      collectionData = finallyUnicornData;
      setTableItem(collectionData);
      return;
    } else {
      console.log(777);
      collectionData = finallyUnicornData.filter((value) =>
        value.product.toUpperCase().includes(inputTest)
      );
      setTableItem(collectionData);
      return;
    }
  }
};

// 搜尋功能
function search() {
  const filterData = () => {
    let inputValue = input.value.toUpperCase();
    inputTest = inputValue;
    if (myCollectionbButton.classList.contains("clicked")) {
      const filterTest = collectionData.filter(
        (value) =>
          value.product.toUpperCase().includes(inputValue) && value.starLight
      );
      // collectionData = filterTest;
      return filterTest;
    }
    if (!myCollectionbButton.classList.contains("clicked")) {
      const filterTest = finallyUnicornData.filter((value) =>
        value.product.toUpperCase().includes(inputValue)
      );
      // collectionData = filterTest;
      return filterTest;
    }
  };
  setTableItem(filterData());
}

input.addEventListener("onchange", search());

const onSortClick = (item) => {
  const sortData = () => {
    if (myCollectionbButton.classList.contains("clicked")) {
      const data = finallyUnicornData.filter((value) => value.starLight);
      return data;
    }
    if (!myCollectionbButton.classList.contains("clicked")) {
      return finallyUnicornData;
    }
  };
  const sortArray = sortData().sort((a, b) => {
    // a.item === a[item]
    const prev = a[item];
    const cors = b[item];
    if (sortStatus[item]) {
      if (Number(prev) > Number(cors)) {
        return -1;
      }
      if (Number(prev) < Number(cors)) {
        return 1;
      }
      return;
    }
    if (!sortStatus[item]) {
      if (Number(prev) > Number(cors)) {
        return 1;
      }
      if (Number(prev) < Number(cors)) {
        return -1;
      }
      return;
    }
    return 0;
  });

  sortStatus[item] = !sortStatus[item];
  setTableItem(sortArray);
};

// 按鈕反轉
let sortButtonPrice = document.getElementById("sortButtonPrice");
let sortButtonUpDown = document.getElementById("sortButtonUpDown");
let sortButtonVolumeIn24Hr = document.getElementById("sortButtonVolumeIn24Hr");
let sortButtonHighestPrice = document.getElementById("sortButtonHighestPrice");
let sortButtonLowestPrice = document.getElementById("sortButtonLowestPrice");

let clickOnce = {
  price: true,
  upDown: true,
  volumeIn24Hr: true,
  highestPrice: true,
  lowestPrice: true,
};

function switchIcon(i) {
  if (clickOnce[i]) decrease(i);
  else increase(i);
  clickOnce[i] = !clickOnce[i];
}

function decrease(i) {
  if (i == "price") {
    sortButtonPrice.className = "decrease";
    sortButtonUpDown.className = "";
    sortButtonVolumeIn24Hr.className = "";
    sortButtonHighestPrice.className = "";
    sortButtonLowestPrice.className = "";
  } else if (i == "upDown") {
    sortButtonPrice.className = "";
    sortButtonUpDown.className = "decrease";
    sortButtonVolumeIn24Hr.className = "";
    sortButtonHighestPrice.className = "";
    sortButtonLowestPrice.className = "";
  } else if (i == "volumeIn24Hr") {
    sortButtonPrice.className = "";
    sortButtonUpDown.className = "";
    sortButtonVolumeIn24Hr.className = "decrease";
    sortButtonHighestPrice.className = "";
    sortButtonLowestPrice.className = "";
  } else if (i == "highestPrice") {
    sortButtonPrice.className = "";
    sortButtonUpDown.className = "";
    sortButtonVolumeIn24Hr.className = "";
    sortButtonHighestPrice.className = "decrease";
    sortButtonLowestPrice.className = "";
  } else if (i == "lowestPrice") {
    sortButtonPrice.className = "";
    sortButtonUpDown.className = "";
    sortButtonVolumeIn24Hr.className = "";
    sortButtonHighestPrice.className = "";
    sortButtonLowestPrice.className = "decrease";
  }
}

function increase(i) {
  if (i == "price") {
    sortButtonPrice.className = "increase";
    sortButtonUpDown.className = "";
    sortButtonVolumeIn24Hr.className = "";
    sortButtonHighestPrice.className = "";
    sortButtonLowestPrice.className = "";
  } else if (i == "upDown") {
    sortButtonPrice.className = "";
    sortButtonUpDown.className = "increase";
    sortButtonVolumeIn24Hr.className = "";
    sortButtonHighestPrice.className = "";
    sortButtonLowestPrice.className = "";
  } else if (i == "volumeIn24Hr") {
    sortButtonPrice.className = "";
    sortButtonUpDown.className = "";
    sortButtonVolumeIn24Hr.className = "increase";
    sortButtonHighestPrice.className = "";
    sortButtonLowestPrice.className = "";
  } else if (i == "highestPrice") {
    sortButtonPrice.className = "";
    sortButtonUpDown.className = "";
    sortButtonVolumeIn24Hr.className = "";
    sortButtonHighestPrice.className = "increase";
    sortButtonLowestPrice.className = "";
  } else if (i == "lowestPrice") {
    sortButtonPrice.className = "";
    sortButtonUpDown.className = "";
    sortButtonVolumeIn24Hr.className = "";
    sortButtonHighestPrice.className = "";
    sortButtonLowestPrice.className = "increase";
  }
}

let coinList = document.querySelectorAll("tr");
