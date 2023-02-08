// 所有貨幣
let allCoinData = [
  {
    key: 1,
    starLight: false,
    coinIcon: "<img src='./img/coin1.svg'/>",
    product: "UCDT / TWD",
    price: "32.110",
    crease: "<img src='./img/decreaseSmall.svg' style = 'margin-left:4px'>",
    webLink: "./dashboard.html",
  },
  {
    key: 2,
    starLight: false,
    coinIcon: "<img src='./img/coin2.svg'/>",
    product: "DTC / TWD",
    price: "623093",
    crease: "<img src='./img/decreaseSmall.svg' style = 'margin-left:4px'>",
    webLink: "./notFinish.html",
  },
  {
    key: 3,
    starLight: false,
    coinIcon: "<img src='./img/coin3.svg'/>",
    product: "LtFD / TWD",
    price: "42012.63",
    crease: "<img src='./img/increaseSmall.svg' style = 'margin-left:4px'>",
    webLink: "./notFinish.html",
  },
];

const setAllCoinTableItem = (initial) => {
  const table = document.getElementById("allCoinTable");
  table.innerHTML = "";
  const dotNumber = new Intl.NumberFormat("en-US");
  const itemMap = initial.map((value) => {
    let row = table.insertRow();
    let imageStar = row.insertCell();
    let product = row.insertCell();
    let price = row.insertCell();

    if (value.starLight) {
      imageStar.innerHTML =
        "<a class = 'star' onclick='onClick(" +
        value.key +
        ")'>" +
        "<img src='./img/StarFill.svg'  style='cursor: pointer'/>" +
        "</a>";
    }
    if (!value.starLight) {
      imageStar.innerHTML =
        "<a class = 'star' onclick='onClick(" +
        value.key +
        ")'>" +
        "<img src='./img/starBorder.svg'  style='cursor: pointer'/>" +
        "</a>";
    }
    product.innerHTML =
      "<p>" +
      value.coinIcon +
      "<a href='" +
      value.webLink +
      "'>" +
      value.product +
      "</a></p>";
    price.innerHTML =
      "<p>" + dotNumber.format(value.price) + value.crease + "</p>";

    function colorPrice() {
      if (price.innerHTML.includes("increase")) {
        price.style["color"] = "#61ffb1";
      } else if (price.innerHTML.includes("nonecrease")) {
        price.style["color"] = "#ffffff";
      } else {
        price.style["color"] = "#ff7c8a";
      }
    }
    colorPrice();
  });
  return itemMap;
};

let changeFirst = JSON.stringify(allCoinData);
let finallyAllCoinData = JSON.parse(changeFirst);

// 點擊收藏後的資料
let collectionData = [];

//搜尋資料
let input = document.getElementsByClassName("search")[0];
let inputTest = "";

const topStar = document.getElementById("usdtStar");
// 點擊星星的事件
const onClick = (value) => {
  if (value == 1 && !finallyAllCoinData[0].starLight) {
    topStar.innerHTML =
      "<a onclick='onClick(1)' style='cursor: pointer'>" +
      "<img src='./img/StarFill.svg' />" +
      "</a>";
  } else if (value == 1 && finallyAllCoinData[0].starLight) {
    topStar.innerHTML =
      "<a onclick='onClick(1)' style='cursor: pointer'>" +
      "<img src='./img/starBorder.svg' />" +
      "</a>";
  }

  const sortData = () => {
    if (myCollectionbButton.innerHTML.includes("StarFill")) {
      const data = collectionData.filter(
        (value) =>
          value.starLight && value.product.toUpperCase().includes(inputTest)
      );
      return data;
    }
    if (!myCollectionbButton.innerHTML.includes("StarFill")) {
      return finallyAllCoinData.filter((value) =>
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
  setAllCoinTableItem(sortData());
};

// 收藏按鈕
let myCollectionbButton = document.getElementById("collectionbButton");
const onMyCollection = () => {
  const filter = finallyAllCoinData.filter((item) => item.starLight);
  if (!myCollectionbButton.innerHTML.includes("StarFill")) {
    myCollectionbButton.innerHTML = "<img src='./img/StarFill.svg' />";
    if (inputTest === "") {
      collectionData = filter;
      setAllCoinTableItem(collectionData);
      return;
    } else {
      collectionData = filter.filter((value) =>
        value.product.toUpperCase().includes(inputTest)
      );
      setAllCoinTableItem(collectionData);
      return;
    }
  }
  if (myCollectionbButton.innerHTML.includes("StarFill")) {
    myCollectionbButton.innerHTML = "<img src='./img/starBorder.svg' />";

    if (inputTest === "") {
      collectionData = finallyAllCoinData;
      setAllCoinTableItem(collectionData);
      return;
    } else {
      collectionData = finallyAllCoinData.filter((value) =>
        value.product.toUpperCase().includes(inputTest)
      );
      setAllCoinTableItem(collectionData);
      return;
    }
  }
};

// 搜尋功能
function search() {
  const filterData = () => {
    let inputValue = input.value.toUpperCase();
    inputTest = inputValue;
    if (myCollectionbButton.innerHTML.includes("StarFill")) {
      const filterTest = collectionData.filter(
        (value) =>
          value.product.toUpperCase().includes(inputValue) && value.starLight
      );

      return filterTest;
    }
    if (!myCollectionbButton.innerHTML.includes("StarFill")) {
      const filterTest = finallyAllCoinData.filter((value) =>
        value.product.toUpperCase().includes(inputValue)
      );

      return filterTest;
    }
  };
  setAllCoinTableItem(filterData());
}

input.addEventListener("onchange", search());

//最新成交
let newOrderData = [];

const orderTable = document.getElementById("newOrderTable");
const setOrderTableItem = (initial) => {
  orderTable.innerHTML = "";

  const dotNumber = new Intl.NumberFormat("en-US");

  const itemMap = initial.map((value) => {
    let row = orderTable.insertRow();
    let time = row.insertCell();
    row.className = "colorRow";
    let dealPrice = row.insertCell();
    let dealValum = row.insertCell();

    time.innerHTML = "<p>" + value.time + "</p>";
    dealPrice.innerHTML =
      "<p class='price' style='color: #61ffb1;'>" +
      value.dealPrice +
      "<img src='./img/increaseSmall.svg' style = 'margin-left:4px'/></p>";
    dealValum.innerHTML = "<p>" + dotNumber.format(value.dealValum) + "</p>";
  });
  return itemMap;
};
setOrderTableItem(newOrderData);

// 最新成交時間延遲
showNewOrderPlus();
let call1 = setTimeout(showNewOrderPlus, 1000);
let call2 = setTimeout(showNewOrderPlus, 2000);
let call3 = setTimeout(showNewOrderPlus, 3000);
let call4 = setTimeout(showNewOrderPlus, 4000);
let call5 = setTimeout(showNewOrderPlus, 5000);
let call6 = setTimeout(showNewOrderPlus, 6000);
let call7 = setTimeout(showNewOrderPlus, 7000);
let call8 = setTimeout(showNewOrderPlus, 8000);
let call9 = setTimeout(showNewOrderPlus, 9000);
let call10 = setTimeout(showNewOrderPlus, 10000);
let call11 = setTimeout(showNewOrderSetInterval, 9000);

function showNewOrderPlus() {
  let now = new Date();
  let nowHr = now.getHours().toString().padStart(2, "0");
  let nowMin = now.getMinutes().toString().padStart(2, "0");
  let nowSec = now.getSeconds().toString().padStart(2, "0");
  let nowTime = nowHr + ":" + nowMin + ":" + nowSec;

  let nowdeal = (min, max) => {
    return (
      (Math.floor(Math.random() * (max - min + 1) * 1000) + min * 1000) / 1000
    );
  };
  let nowdealPrice = Math.floor(Math.random() * 100000);
  let ucdtNowDeal = nowdeal(31, 33).toFixed(3);
  let newOrder = {
    time: nowTime,
    dealPrice: ucdtNowDeal.toString(),
    dealValum: nowdealPrice.toString(),
  };

  newOrderData.unshift(newOrder);

  setOrderTableItem(newOrderData);

  let colorPrice = document.getElementsByClassName("price");

  function colorDealPrice() {
    for (let n = 0; n < newOrderData.length - 1; n++) {
      if (
        parseFloat(newOrderData[n].dealPrice) >
        parseFloat(newOrderData[n + 1].dealPrice)
      ) {
        colorPrice[n].style.color = "#61ffb1";
      } else if (
        parseFloat(newOrderData[n].dealPrice) ==
        parseFloat(newOrderData[n + 1].dealPrice)
      ) {
        colorPrice[n].style.color = "#ffffff";
        colorPrice[n].children[0].outerHTML =
          "<img src='./img/nonecreaseSmall.svg' style = 'margin-left:4px'/>";
      } else {
        colorPrice[n].style.color = "#ff7c8a";
        colorPrice[n].children[0].outerHTML =
          "<img src='./img/decreaseSmall.svg' style = 'margin-left:4px'/>";
      }
    }
  }
  colorDealPrice();
}
function showNewOrder() {
  let now = new Date();
  let nowHr = now.getHours().toString().padStart(2, "0");
  let nowMin = now.getMinutes().toString().padStart(2, "0");
  let nowSec = now.getSeconds().toString().padStart(2, "0");
  let nowTime = nowHr + ":" + nowMin + ":" + nowSec;

  let nowdeal = (min, max) => {
    return (
      (Math.floor(Math.random() * (max - min + 1) * 1000) + min * 1000) / 1000
    );
  };
  let nowdealPrice = Math.floor(Math.random() * 100000);
  let ucdtNowDeal = nowdeal(31, 33).toFixed(3);
  let newOrder = {
    time: nowTime,
    dealPrice: ucdtNowDeal.toString(),
    dealValum: nowdealPrice.toString(),
  };

  newOrderData.unshift(newOrder);
  newOrderData.pop();

  setOrderTableItem(newOrderData);
  let colorPrice = document.getElementsByClassName("price");
  function delectOrder11() {
    colorPrice[10].parentNode.parentElement.style.display = "none";
  }

  delectOrder11();
  function colorDealPrice() {
    for (let n = 0; n < newOrderData.length - 1; n++) {
      if (
        parseFloat(newOrderData[n].dealPrice) >
        parseFloat(newOrderData[n + 1].dealPrice)
      ) {
        colorPrice[n].style.color = "#61ffb1";
      } else if (
        parseFloat(newOrderData[n].dealPrice) ==
        parseFloat(newOrderData[n + 1].dealPrice)
      ) {
        colorPrice[n].style.color = "#ffffff";
        colorPrice[n].children[0].outerHTML =
          "<img src='./img/nonecreaseSmall.svg' style = 'margin-left:4px'/>";
      } else {
        colorPrice[n].style.color = "#ff7c8a";
        colorPrice[n].children[0].outerHTML =
          "<img src='./img/decreaseSmall.svg' style = 'margin-left:4px'/>";
      }
    }
  }
  colorDealPrice();
}
function showNewOrderSetInterval() {
  setInterval(showNewOrder, 1000);
}

// 最新成交上色

let setTimeColorBg = setTimeout(colorBg, 1001);
let setTimeColorBg2 = setTimeout(colorBg, 2001);
let setTimeColorBg3 = setTimeout(colorBg, 3001);
let setTimeColorBg4 = setTimeout(colorBg, 4001);
let setTimeColorBg5 = setTimeout(colorBg, 5001);
let setTimeColorBg6 = setTimeout(colorBg, 6001);
let setTimeColorBg7 = setTimeout(colorBg, 7001);
let setTimeColorBg8 = setTimeout(colorBg, 8001);
let setTimeColorBg9 = setTimeout(colorBg, 9001);
let setTimeColorBg10 = setTimeout(colorBg, 10001);
let setIntervalColorBg = setTimeout(colorBgSetInterval, 9001);
function colorBg() {
  let rowBg = document.querySelector(".colorRow");
  if (
    parseFloat(newOrderData[0].dealPrice) >
    parseFloat(newOrderData[1].dealPrice)
  ) {
    rowBg.classList.remove("animationColorWhite");
    rowBg.classList.remove("animationColorRed");
    rowBg.classList.add("animationColorGreen");
  } else if (
    parseFloat(newOrderData[0].dealPrice) ==
    parseFloat(newOrderData[1].dealPrice)
  ) {
    rowBg.classList.remove("animationColorRed");
    rowBg.classList.remove("animationColorGreen");
    rowBg.classList.add("animationColorWhite");
  } else {
    rowBg.classList.remove("animationColorGreen");
    rowBg.classList.remove("animationColorWhite");
    rowBg.classList.add("animationColorRed");
  }
}
function colorBgSetInterval() {
  setInterval(colorBg, 1000);
}

// 當前訂單
let nowOrderData = [
  // {
  //   cancel: false,
  //   product: "UCDT/TWD",
  //   type: "限價 賣出",
  //   price: "32.110",
  //   volumnNow: "8783",
  //   volumnTotal: "9964",
  // },
];

const nowOrderTable = (initial) => {
  const table = document.getElementById("nowOrderTable");
  table.innerHTML = "";
  const dotNumber = new Intl.NumberFormat("en-US");
  const itemMap = initial.map((value) => {
    let row = table.insertRow();
    let cancel = row.insertCell();
    let product = row.insertCell();
    let type = row.insertCell();
    let price = row.insertCell();
    let volumn = row.insertCell();

    cancel.innerHTML =
      "<a onclick='removeOrder(" +
      value.key +
      ")' style='cursor: pointer'><img src='./img/cancel.svg'><a>";

    product.innerHTML = "<p>" + value.product + "</p>";
    type.innerHTML = "<p>" + value.type + "</p>";
    price.innerHTML = "<p>" + dotNumber.format(value.price) + "</p>";
    volumn.innerHTML =
      "<p>" +
      dotNumber.format(value.volumnNow) +
      " / " +
      dotNumber.format(value.volumnTotal) +
      "</p>";

    let colorType = () => {
      if (type.innerHTML.includes("買入")) {
        type.style["color"] = "#61ffb1";
      } else {
        type.style["color"] = "#ff7c8a";
      }
    };
    colorType();
  });
  return itemMap;
};

let filterData = [];

const removeOrder = (i) => {
  let n = confirm("確定要刪除這筆訂單？");
  if (n == true) {
    alert("訂單已刪除");
    nowOrderData[nowOrderData.length - i - 1].cancel = true;
    let filterData = nowOrderData.filter((value) => !value.cancel);
    nowOrderTable(filterData);
  }
  if (!n == true) {
    alert("訂單未取消");
  }
};

const sendLimitOrderBuy = () => {
  let limitUcdtValue = document.getElementById("limitUcdtValue");
  let limitOrderVolumn = document.getElementById("limitOrderVolumn");
  let limitOrderCheckBox = document.getElementById("limitAlert");
  let newOrder = {
    key: nowOrderData.length,
    cancel: false,
    product: "UCDT/TWD",
    type: "限價 買入",
    price: limitUcdtValue.value.toString(),
    volumnNow: "0",
    volumnTotal: limitOrderVolumn.value.toString(),
  };
  if (
    limitUcdtValue.value < 0.001 ||
    limitUcdtValue.value > 9999999 ||
    limitOrderVolumn.value < 0.001 ||
    limitOrderVolumn.value > 9999999
  ) {
    alert("請輸入正確交易金額");
    return;
  }
  if (limitUcdtValue.value * limitOrderVolumn.value > 50000) {
    alert("請確認您的錢包餘額是否足夠");
    return;
  }
  if (!limitOrderCheckBox.checked) {
    alert("請先同意交易申請注意事項");
    return;
  }
  if (
    limitUcdtValue.value > 0 &&
    limitOrderVolumn.value > 0 &&
    limitOrderCheckBox.checked
  ) {
    nowOrderData.unshift(newOrder);
    alert("訂單已成功送出");
    limitUcdtValue.value = "32.110";
    limitOrderVolumn.value = "";
    limitOrderCheckBox.checked = !limitOrderCheckBox.checked;
  }

  let filterData = nowOrderData.filter((value) => !value.cancel);
  nowOrderTable(filterData);
};
const sendLimitOrderSale = () => {
  let limitUcdtValue = document.getElementById("limitUcdtValue");
  let limitOrderVolumn = document.getElementById("limitOrderVolumn");
  let limitOrderCheckBox = document.getElementById("limitAlert");
  let newOrder = {
    key: nowOrderData.length,
    cancel: false,
    product: "UCDT/TWD",
    type: "限價 賣出",
    price: limitUcdtValue.value.toString(),
    volumnNow: "0",
    volumnTotal: limitOrderVolumn.value.toString(),
  };

  if (
    limitUcdtValue.value < 0.001 ||
    limitUcdtValue.value > 9999999 ||
    limitOrderVolumn.value < 0.001 ||
    limitOrderVolumn.value > 9999999
  ) {
    alert("請輸入正確交易金額");
    return;
  }
  if (limitUcdtValue.value * limitOrderVolumn.value > 50000) {
    alert("請確認您的錢包餘額是否足夠");
    return;
  }
  if (!limitOrderCheckBox.checked) {
    alert("請先同意交易申請注意事項");
    return;
  }
  if (
    limitUcdtValue.value > 0 &&
    limitOrderVolumn.value > 0 &&
    limitOrderCheckBox.checked
  ) {
    nowOrderData.unshift(newOrder);
    alert("訂單已成功送出");
    limitUcdtValue.value = "32.110";
    limitOrderVolumn.value = "";
    limitOrderCheckBox.checked = !limitOrderCheckBox.checked;
  }
  let filterData = nowOrderData.filter((value) => !value.cancel);
  nowOrderTable(filterData);
};

const sendMarketOrder = () => {
  let marketUcdtValue = document.getElementById("marketUcdtValue");
  let marketOrderVolumn = document.getElementById("marketOrderVolumn");
  let marketOrderCheckBox = document.getElementById("marketAlert");
  if (marketOrderVolumn.value < 0.001 || marketOrderVolumn.value > 9999999) {
    alert("請輸入正確交易金額");
    return;
  }
  if (marketUcdtValue.value * marketOrderVolumn.value > 50000) {
    alert("請確認您的錢包餘額是否足夠");
    return;
  }
  if (!marketOrderCheckBox.checked) {
    alert("請先同意交易申請注意事項");
    return;
  }
  if (marketOrderVolumn.value > 0 && marketOrderCheckBox.checked) {
    alert("交易完成，請確認錢包");
    marketOrderVolumn.value = "";
    marketOrderCheckBox.checked = !marketOrderCheckBox.checked;
  }
  let filterData = nowOrderData.filter((value) => !value.cancel);
  nowOrderTable(filterData);
};

const sendStopLossOrderBuy = () => {
  let stopLossUcdtValue = document.getElementById("stopLossUcdtValue");
  let stopLossLimitUcdtValue = document.getElementById(
    "stopLossLimitUcdtValue"
  );
  let stopLossOrderVolumn = document.getElementById("stopLossOrderVolumn");
  let stopLossOrderCheckBox = document.getElementById("stopLossAlert");
  let newOrder = {
    key: nowOrderData.length,
    cancel: false,
    product: "UCDT/TWD",
    type: "停損 買入",
    price: stopLossUcdtValue.value.toString(),
    volumnNow: "0",
    volumnTotal: stopLossOrderVolumn.value.toString(),
  };

  if (
    stopLossUcdtValue.value < 0.001 ||
    stopLossUcdtValue.value > 9999999 ||
    stopLossOrderVolumn.value < 0.001 ||
    stopLossOrderVolumn.value > 9999999 ||
    stopLossLimitUcdtValue.value < stopLossUcdtValue.value
  ) {
    alert("請輸入正確交易金額");
    return;
  }
  if (stopLossUcdtValue.value * stopLossOrderVolumn.value > 50000) {
    alert("請確認您的錢包餘額是否足夠");
    return;
  }
  if (!stopLossOrderCheckBox.checked) {
    alert("請先同意交易申請注意事項");
    return;
  }
  if (
    stopLossUcdtValue.value > 0 &&
    stopLossOrderVolumn.value > 0 &&
    stopLossOrderCheckBox.checked
  ) {
    nowOrderData.unshift(newOrder);
    alert("訂單已成功送出");
    stopLossUcdtValue.value = "";
    stopLossLimitUcdtValue.value = "";
    stopLossOrderVolumn.value = "";
    stopLossOrderCheckBox.checked = !stopLossOrderCheckBox.checked;
  }
  let filterData = nowOrderData.filter((value) => !value.cancel);
  nowOrderTable(filterData);
};

const sendStopLossOrderSale = () => {
  let stopLossUcdtValue = document.getElementById("stopLossUcdtValue");
  let stopLossOrderVolumn = document.getElementById("stopLossOrderVolumn");
  let stopLossLimitUcdtValue = document.getElementById(
    "stopLossLimitUcdtValue"
  );
  let stopLossOrderCheckBox = document.getElementById("stopLossAlert");
  let newOrder = {
    key: nowOrderData.length,
    cancel: false,
    product: "UCDT/TWD",
    type: "停損 賣出",
    price: stopLossUcdtValue.value.toString(),
    volumnNow: "0",
    volumnTotal: stopLossOrderVolumn.value.toString(),
  };

  if (
    stopLossUcdtValue.value < 0.001 ||
    stopLossUcdtValue.value > 9999999 ||
    stopLossOrderVolumn.value < 0.001 ||
    stopLossOrderVolumn.value > 9999999 ||
    stopLossLimitUcdtValue.value > stopLossUcdtValue.value
  ) {
    alert("請輸入正確交易金額");
    return;
  }
  if (stopLossUcdtValue.value * stopLossOrderVolumn.value > 50000) {
    alert("請確認您的錢包餘額是否足夠");
    return;
  }
  if (!stopLossOrderCheckBox.checked) {
    alert("請先同意交易申請注意事項");
    return;
  }
  if (
    stopLossUcdtValue.value > 0 &&
    stopLossOrderVolumn.value > 0 &&
    stopLossOrderCheckBox.checked
  ) {
    nowOrderData.unshift(newOrder);
    alert("訂單已成功送出");
    stopLossUcdtValue.value = "";
    stopLossLimitUcdtValue.value = "";
    stopLossOrderVolumn.value = "";
    stopLossOrderCheckBox.checked = !stopLossOrderCheckBox.checked;
  }
  let filterData = nowOrderData.filter((value) => !value.cancel);
  nowOrderTable(filterData);
};

// 滾動條與價格計算
const limitColorRangeDot = () => {
  let rangeDotOne = document.getElementById("limitRangeTen");
  let rangeDotTwo = document.getElementById("limitRangeTwenty");
  let rangeDotThree = document.getElementById("limitRangeThirty");
  let rangeDotFour = document.getElementById("limitRangeFourty");
  let rangeDotFive = document.getElementById("limitRangeFifty");
  let rangeDotSix = document.getElementById("limitRangeSixty");
  let rangeDotSeven = document.getElementById("limitRangeSeventy");
  let rangeDotEight = document.getElementById("limitRangeEighty");
  let rangeDotNine = document.getElementById("limitRangeNinety");
  let rangeDotTen = document.getElementById("limitRangeHundred");
  let tooltip = document.getElementsByClassName("tooltip");
  let rangeInput = document.getElementById("limitPriceRange").value;
  let limitOrderVolumn = document.getElementById("limitOrderVolumn");
  if (rangeInput == 0) {
    limitOrderVolumn.value = 0;
    rangeDotOne.style["background-color"] = "#45474e";
    tooltip[0].style["visibility"] = "hidden";
    tooltip[1].style["visibility"] = "hidden";
    tooltip[2].style["visibility"] = "hidden";
    tooltip[3].style["visibility"] = "hidden";
    tooltip[4].style["visibility"] = "hidden";
    tooltip[5].style["visibility"] = "hidden";
    tooltip[6].style["visibility"] = "hidden";
    tooltip[7].style["visibility"] = "hidden";
    tooltip[8].style["visibility"] = "hidden";
  }
  if (rangeInput == 10) {
    limitOrderVolumn.value = 156;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#45474e";
    rangeDotThree.style["background-color"] = "#45474e";
    rangeDotFour.style["background-color"] = "#45474e";
    rangeDotFive.style["background-color"] = "#45474e";
    rangeDotSix.style["background-color"] = "#45474e";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[0].style["visibility"] = "visible";
    tooltip[1].style["visibility"] = "hidden";
    tooltip[2].style["visibility"] = "hidden";
    tooltip[3].style["visibility"] = "hidden";
    tooltip[4].style["visibility"] = "hidden";
    tooltip[5].style["visibility"] = "hidden";
    tooltip[6].style["visibility"] = "hidden";
    tooltip[7].style["visibility"] = "hidden";
    tooltip[8].style["visibility"] = "hidden";
  }
  if (rangeInput == 20) {
    limitOrderVolumn.value = 156 * 2;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#45474e";
    rangeDotFour.style["background-color"] = "#45474e";
    rangeDotFive.style["background-color"] = "#45474e";
    rangeDotSix.style["background-color"] = "#45474e";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[0].style["visibility"] = "hidden";
    tooltip[1].style["visibility"] = "visible";
    tooltip[2].style["visibility"] = "hidden";
    tooltip[3].style["visibility"] = "hidden";
    tooltip[4].style["visibility"] = "hidden";
    tooltip[5].style["visibility"] = "hidden";
    tooltip[6].style["visibility"] = "hidden";
    tooltip[7].style["visibility"] = "hidden";
    tooltip[8].style["visibility"] = "hidden";
  }
  if (rangeInput == 30) {
    limitOrderVolumn.value = 156 * 3;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#45474e";
    rangeDotFive.style["background-color"] = "#45474e";
    rangeDotSix.style["background-color"] = "#45474e";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[0].style["visibility"] = "hidden";
    tooltip[1].style["visibility"] = "hidden";
    tooltip[2].style["visibility"] = "visible";
    tooltip[3].style["visibility"] = "hidden";
    tooltip[4].style["visibility"] = "hidden";
    tooltip[5].style["visibility"] = "hidden";
    tooltip[6].style["visibility"] = "hidden";
    tooltip[7].style["visibility"] = "hidden";
    tooltip[8].style["visibility"] = "hidden";
  }
  if (rangeInput == 40) {
    limitOrderVolumn.value = 156 * 4;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#45474e";
    rangeDotSix.style["background-color"] = "#45474e";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[0].style["visibility"] = "hidden";
    tooltip[1].style["visibility"] = "hidden";
    tooltip[2].style["visibility"] = "hidden";
    tooltip[3].style["visibility"] = "visible";
    tooltip[4].style["visibility"] = "hidden";
    tooltip[5].style["visibility"] = "hidden";
    tooltip[6].style["visibility"] = "hidden";
    tooltip[7].style["visibility"] = "hidden";
    tooltip[8].style["visibility"] = "hidden";
  }
  if (rangeInput == 50) {
    limitOrderVolumn.value = 156 * 5;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#45474e";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[0].style["visibility"] = "hidden";
    tooltip[1].style["visibility"] = "hidden";
    tooltip[2].style["visibility"] = "hidden";
    tooltip[3].style["visibility"] = "hidden";
    tooltip[4].style["visibility"] = "visible";
    tooltip[5].style["visibility"] = "hidden";
    tooltip[6].style["visibility"] = "hidden";
    tooltip[7].style["visibility"] = "hidden";
    tooltip[8].style["visibility"] = "hidden";
  }
  if (rangeInput == 60) {
    limitOrderVolumn.value = 156 * 6;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#ddb08f";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[0].style["visibility"] = "hidden";
    tooltip[1].style["visibility"] = "hidden";
    tooltip[2].style["visibility"] = "hidden";
    tooltip[3].style["visibility"] = "hidden";
    tooltip[4].style["visibility"] = "hidden";
    tooltip[5].style["visibility"] = "visible";
    tooltip[6].style["visibility"] = "hidden";
    tooltip[7].style["visibility"] = "hidden";
    tooltip[8].style["visibility"] = "hidden";
  }
  if (rangeInput == 70) {
    limitOrderVolumn.value = 156 * 7;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#ddb08f";
    rangeDotSeven.style["background-color"] = "#ddb08f";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[0].style["visibility"] = "hidden";
    tooltip[1].style["visibility"] = "hidden";
    tooltip[2].style["visibility"] = "hidden";
    tooltip[3].style["visibility"] = "hidden";
    tooltip[4].style["visibility"] = "hidden";
    tooltip[5].style["visibility"] = "hidden";
    tooltip[6].style["visibility"] = "visible";
    tooltip[7].style["visibility"] = "hidden";
    tooltip[8].style["visibility"] = "hidden";
  }
  if (rangeInput == 80) {
    limitOrderVolumn.value = 156 * 8;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#ddb08f";
    rangeDotSeven.style["background-color"] = "#ddb08f";
    rangeDotEight.style["background-color"] = "#ddb08f";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[0].style["visibility"] = "hidden";
    tooltip[1].style["visibility"] = "hidden";
    tooltip[2].style["visibility"] = "hidden";
    tooltip[3].style["visibility"] = "hidden";
    tooltip[4].style["visibility"] = "hidden";
    tooltip[5].style["visibility"] = "hidden";
    tooltip[6].style["visibility"] = "hidden";
    tooltip[7].style["visibility"] = "visible";
    tooltip[8].style["visibility"] = "hidden";
  }
  if (rangeInput == 90) {
    limitOrderVolumn.value = 156 * 9;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#ddb08f";
    rangeDotSeven.style["background-color"] = "#ddb08f";
    rangeDotEight.style["background-color"] = "#ddb08f";
    rangeDotNine.style["background-color"] = "#ddb08f";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[0].style["visibility"] = "hidden";
    tooltip[1].style["visibility"] = "hidden";
    tooltip[2].style["visibility"] = "hidden";
    tooltip[3].style["visibility"] = "hidden";
    tooltip[4].style["visibility"] = "hidden";
    tooltip[5].style["visibility"] = "hidden";
    tooltip[6].style["visibility"] = "hidden";
    tooltip[7].style["visibility"] = "hidden";
    tooltip[8].style["visibility"] = "visible";
  }
  if (rangeInput == 100) {
    limitOrderVolumn.value = 1557;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#ddb08f";
    rangeDotSeven.style["background-color"] = "#ddb08f";
    rangeDotEight.style["background-color"] = "#ddb08f";
    rangeDotNine.style["background-color"] = "#ddb08f";
    rangeDotTen.style["background-color"] = "#ddb08f";
    tooltip[0].style["visibility"] = "hidden";
    tooltip[1].style["visibility"] = "hidden";
    tooltip[2].style["visibility"] = "hidden";
    tooltip[3].style["visibility"] = "hidden";
    tooltip[4].style["visibility"] = "hidden";
    tooltip[5].style["visibility"] = "hidden";
    tooltip[6].style["visibility"] = "hidden";
    tooltip[7].style["visibility"] = "hidden";
    tooltip[8].style["visibility"] = "hidden";
  }
};

const limitEnterTotal = () => {
  const price = document.getElementById("limitUcdtValue");
  const volumn = document.getElementById("limitOrderVolumn");
  const total = document.getElementById("limitTotal");
  const dotNumber = new Intl.NumberFormat("en-US");
  total.innerText = dotNumber.format((price.value * volumn.value).toFixed(3));
};

const marketColorRangeDot = () => {
  let rangeDotOne = document.getElementById("marketRangeTen");
  let rangeDotTwo = document.getElementById("marketRangeTwenty");
  let rangeDotThree = document.getElementById("marketRangeThirty");
  let rangeDotFour = document.getElementById("marketRangeFourty");
  let rangeDotFive = document.getElementById("marketRangeFifty");
  let rangeDotSix = document.getElementById("marketRangeSixty");
  let rangeDotSeven = document.getElementById("marketRangeSeventy");
  let rangeDotEight = document.getElementById("marketRangeEighty");
  let rangeDotNine = document.getElementById("marketRangeNinety");
  let rangeDotTen = document.getElementById("marketRangeHundred");
  let tooltip = document.getElementsByClassName("tooltip");
  let rangeInput = document.getElementById("marketPriceRange").value;
  let marketOrderVolumn = document.getElementById("marketOrderVolumn");
  if (rangeInput == 0) {
    marketOrderVolumn.value = 0;
    rangeDotOne.style["background-color"] = "#45474e";
    tooltip[9].style["visibility"] = "hidden";
    tooltip[10].style["visibility"] = "hidden";
    tooltip[11].style["visibility"] = "hidden";
    tooltip[12].style["visibility"] = "hidden";
    tooltip[13].style["visibility"] = "hidden";
    tooltip[14].style["visibility"] = "hidden";
    tooltip[15].style["visibility"] = "hidden";
    tooltip[16].style["visibility"] = "hidden";
    tooltip[17].style["visibility"] = "hidden";
  }
  if (rangeInput == 10) {
    marketOrderVolumn.value = 156;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#45474e";
    rangeDotThree.style["background-color"] = "#45474e";
    rangeDotFour.style["background-color"] = "#45474e";
    rangeDotFive.style["background-color"] = "#45474e";
    rangeDotSix.style["background-color"] = "#45474e";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[9].style["visibility"] = "visible";
    tooltip[10].style["visibility"] = "hidden";
    tooltip[11].style["visibility"] = "hidden";
    tooltip[12].style["visibility"] = "hidden";
    tooltip[13].style["visibility"] = "hidden";
    tooltip[14].style["visibility"] = "hidden";
    tooltip[15].style["visibility"] = "hidden";
    tooltip[16].style["visibility"] = "hidden";
    tooltip[17].style["visibility"] = "hidden";
  }
  if (rangeInput == 20) {
    marketOrderVolumn.value = 156 * 2;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#45474e";
    rangeDotFour.style["background-color"] = "#45474e";
    rangeDotFive.style["background-color"] = "#45474e";
    rangeDotSix.style["background-color"] = "#45474e";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[9].style["visibility"] = "hidden";
    tooltip[10].style["visibility"] = "visible";
    tooltip[11].style["visibility"] = "hidden";
    tooltip[12].style["visibility"] = "hidden";
    tooltip[13].style["visibility"] = "hidden";
    tooltip[14].style["visibility"] = "hidden";
    tooltip[15].style["visibility"] = "hidden";
    tooltip[16].style["visibility"] = "hidden";
    tooltip[17].style["visibility"] = "hidden";
  }
  if (rangeInput == 30) {
    marketOrderVolumn.value = 156 * 3;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#45474e";
    rangeDotFive.style["background-color"] = "#45474e";
    rangeDotSix.style["background-color"] = "#45474e";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[9].style["visibility"] = "hidden";
    tooltip[10].style["visibility"] = "hidden";
    tooltip[11].style["visibility"] = "visible";
    tooltip[12].style["visibility"] = "hidden";
    tooltip[13].style["visibility"] = "hidden";
    tooltip[14].style["visibility"] = "hidden";
    tooltip[15].style["visibility"] = "hidden";
    tooltip[16].style["visibility"] = "hidden";
    tooltip[17].style["visibility"] = "hidden";
  }
  if (rangeInput == 40) {
    marketOrderVolumn.value = 156 * 4;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#45474e";
    rangeDotSix.style["background-color"] = "#45474e";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[9].style["visibility"] = "hidden";
    tooltip[10].style["visibility"] = "hidden";
    tooltip[11].style["visibility"] = "hidden";
    tooltip[12].style["visibility"] = "visible";
    tooltip[13].style["visibility"] = "hidden";
    tooltip[14].style["visibility"] = "hidden";
    tooltip[15].style["visibility"] = "hidden";
    tooltip[16].style["visibility"] = "hidden";
    tooltip[17].style["visibility"] = "hidden";
  }
  if (rangeInput == 50) {
    marketOrderVolumn.value = 156 * 5;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#45474e";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[9].style["visibility"] = "hidden";
    tooltip[10].style["visibility"] = "hidden";
    tooltip[11].style["visibility"] = "hidden";
    tooltip[12].style["visibility"] = "hidden";
    tooltip[13].style["visibility"] = "visible";
    tooltip[14].style["visibility"] = "hidden";
    tooltip[15].style["visibility"] = "hidden";
    tooltip[16].style["visibility"] = "hidden";
    tooltip[17].style["visibility"] = "hidden";
  }
  if (rangeInput == 60) {
    marketOrderVolumn.value = 156 * 6;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#ddb08f";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[9].style["visibility"] = "hidden";
    tooltip[10].style["visibility"] = "hidden";
    tooltip[11].style["visibility"] = "hidden";
    tooltip[12].style["visibility"] = "hidden";
    tooltip[13].style["visibility"] = "hidden";
    tooltip[14].style["visibility"] = "visible";
    tooltip[15].style["visibility"] = "hidden";
    tooltip[16].style["visibility"] = "hidden";
    tooltip[17].style["visibility"] = "hidden";
  }
  if (rangeInput == 70) {
    marketOrderVolumn.value = 156 * 7;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#ddb08f";
    rangeDotSeven.style["background-color"] = "#ddb08f";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[9].style["visibility"] = "hidden";
    tooltip[10].style["visibility"] = "hidden";
    tooltip[11].style["visibility"] = "hidden";
    tooltip[12].style["visibility"] = "hidden";
    tooltip[13].style["visibility"] = "hidden";
    tooltip[14].style["visibility"] = "hidden";
    tooltip[15].style["visibility"] = "visible";
    tooltip[16].style["visibility"] = "hidden";
    tooltip[17].style["visibility"] = "hidden";
  }
  if (rangeInput == 80) {
    marketOrderVolumn.value = 156 * 8;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#ddb08f";
    rangeDotSeven.style["background-color"] = "#ddb08f";
    rangeDotEight.style["background-color"] = "#ddb08f";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[9].style["visibility"] = "hidden";
    tooltip[10].style["visibility"] = "hidden";
    tooltip[11].style["visibility"] = "hidden";
    tooltip[12].style["visibility"] = "hidden";
    tooltip[13].style["visibility"] = "hidden";
    tooltip[14].style["visibility"] = "hidden";
    tooltip[15].style["visibility"] = "hidden";
    tooltip[16].style["visibility"] = "visible";
    tooltip[17].style["visibility"] = "hidden";
  }
  if (rangeInput == 90) {
    marketOrderVolumn.value = 156 * 9;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#ddb08f";
    rangeDotSeven.style["background-color"] = "#ddb08f";
    rangeDotEight.style["background-color"] = "#ddb08f";
    rangeDotNine.style["background-color"] = "#ddb08f";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[9].style["visibility"] = "hidden";
    tooltip[10].style["visibility"] = "hidden";
    tooltip[11].style["visibility"] = "hidden";
    tooltip[12].style["visibility"] = "hidden";
    tooltip[13].style["visibility"] = "hidden";
    tooltip[14].style["visibility"] = "hidden";
    tooltip[15].style["visibility"] = "hidden";
    tooltip[16].style["visibility"] = "hidden";
    tooltip[17].style["visibility"] = "visible";
  }
  if (rangeInput == 100) {
    marketOrderVolumn.value = 1557;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#ddb08f";
    rangeDotSeven.style["background-color"] = "#ddb08f";
    rangeDotEight.style["background-color"] = "#ddb08f";
    rangeDotNine.style["background-color"] = "#ddb08f";
    rangeDotTen.style["background-color"] = "#ddb08f";
    tooltip[9].style["visibility"] = "hidden";
    tooltip[10].style["visibility"] = "hidden";
    tooltip[11].style["visibility"] = "hidden";
    tooltip[12].style["visibility"] = "hidden";
    tooltip[13].style["visibility"] = "hidden";
    tooltip[14].style["visibility"] = "hidden";
    tooltip[15].style["visibility"] = "hidden";
    tooltip[16].style["visibility"] = "hidden";
    tooltip[17].style["visibility"] = "hidden";
  }
};

const marketEnterTotal = () => {
  const price = document.getElementById("marketUcdtValue");
  const volumn = document.getElementById("marketOrderVolumn");
  const total = document.getElementById("marketTotal");
  const dotNumber = new Intl.NumberFormat("en-US");
  total.innerText = dotNumber.format((price.value * volumn.value).toFixed(3));
};

const stopLossColorRangeDot = () => {
  let rangeDotOne = document.getElementById("stopLossRangeTen");
  let rangeDotTwo = document.getElementById("stopLossRangeTwenty");
  let rangeDotThree = document.getElementById("stopLossRangeThirty");
  let rangeDotFour = document.getElementById("stopLossRangeFourty");
  let rangeDotFive = document.getElementById("stopLossRangeFifty");
  let rangeDotSix = document.getElementById("stopLossRangeSixty");
  let rangeDotSeven = document.getElementById("stopLossRangeSeventy");
  let rangeDotEight = document.getElementById("stopLossRangeEighty");
  let rangeDotNine = document.getElementById("stopLossRangeNinety");
  let rangeDotTen = document.getElementById("stopLossRangeHundred");
  let tooltip = document.getElementsByClassName("tooltip");
  let rangeInput = document.getElementById("stopLossPriceRange").value;
  let stopLossOrderVolumn = document.getElementById("stopLossOrderVolumn");
  if (rangeInput == 0) {
    stopLossOrderVolumn.value = 0;
    rangeDotOne.style["background-color"] = "#45474e";
    tooltip[18].style["visibility"] = "hidden";
    tooltip[19].style["visibility"] = "hidden";
    tooltip[20].style["visibility"] = "hidden";
    tooltip[21].style["visibility"] = "hidden";
    tooltip[22].style["visibility"] = "hidden";
    tooltip[23].style["visibility"] = "hidden";
    tooltip[24].style["visibility"] = "hidden";
    tooltip[25].style["visibility"] = "hidden";
    tooltip[26].style["visibility"] = "hidden";
  }
  if (rangeInput == 10) {
    stopLossOrderVolumn.value = 156;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#45474e";
    rangeDotThree.style["background-color"] = "#45474e";
    rangeDotFour.style["background-color"] = "#45474e";
    rangeDotFive.style["background-color"] = "#45474e";
    rangeDotSix.style["background-color"] = "#45474e";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[18].style["visibility"] = "visible";
    tooltip[19].style["visibility"] = "hidden";
    tooltip[20].style["visibility"] = "hidden";
    tooltip[21].style["visibility"] = "hidden";
    tooltip[22].style["visibility"] = "hidden";
    tooltip[23].style["visibility"] = "hidden";
    tooltip[24].style["visibility"] = "hidden";
    tooltip[25].style["visibility"] = "hidden";
    tooltip[26].style["visibility"] = "hidden";
  }
  if (rangeInput == 20) {
    stopLossOrderVolumn.value = 156 * 2;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#45474e";
    rangeDotFour.style["background-color"] = "#45474e";
    rangeDotFive.style["background-color"] = "#45474e";
    rangeDotSix.style["background-color"] = "#45474e";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[18].style["visibility"] = "hidden";
    tooltip[19].style["visibility"] = "visible";
    tooltip[20].style["visibility"] = "hidden";
    tooltip[21].style["visibility"] = "hidden";
    tooltip[22].style["visibility"] = "hidden";
    tooltip[23].style["visibility"] = "hidden";
    tooltip[24].style["visibility"] = "hidden";
    tooltip[25].style["visibility"] = "hidden";
    tooltip[26].style["visibility"] = "hidden";
  }
  if (rangeInput == 30) {
    stopLossOrderVolumn.value = 156 * 3;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#45474e";
    rangeDotFive.style["background-color"] = "#45474e";
    rangeDotSix.style["background-color"] = "#45474e";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[18].style["visibility"] = "hidden";
    tooltip[19].style["visibility"] = "hidden";
    tooltip[20].style["visibility"] = "visible";
    tooltip[21].style["visibility"] = "hidden";
    tooltip[22].style["visibility"] = "hidden";
    tooltip[23].style["visibility"] = "hidden";
    tooltip[24].style["visibility"] = "hidden";
    tooltip[25].style["visibility"] = "hidden";
    tooltip[26].style["visibility"] = "hidden";
  }
  if (rangeInput == 40) {
    stopLossOrderVolumn.value = 156 * 4;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#45474e";
    rangeDotSix.style["background-color"] = "#45474e";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[18].style["visibility"] = "hidden";
    tooltip[19].style["visibility"] = "hidden";
    tooltip[20].style["visibility"] = "hidden";
    tooltip[21].style["visibility"] = "visible";
    tooltip[22].style["visibility"] = "hidden";
    tooltip[23].style["visibility"] = "hidden";
    tooltip[24].style["visibility"] = "hidden";
    tooltip[25].style["visibility"] = "hidden";
    tooltip[26].style["visibility"] = "hidden";
  }
  if (rangeInput == 50) {
    stopLossOrderVolumn.value = 156 * 5;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#45474e";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[18].style["visibility"] = "hidden";
    tooltip[19].style["visibility"] = "hidden";
    tooltip[20].style["visibility"] = "hidden";
    tooltip[21].style["visibility"] = "hidden";
    tooltip[22].style["visibility"] = "visible";
    tooltip[23].style["visibility"] = "hidden";
    tooltip[24].style["visibility"] = "hidden";
    tooltip[25].style["visibility"] = "hidden";
    tooltip[26].style["visibility"] = "hidden";
  }
  if (rangeInput == 60) {
    stopLossOrderVolumn.value = 156 * 6;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#ddb08f";
    rangeDotSeven.style["background-color"] = "#45474e";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[18].style["visibility"] = "hidden";
    tooltip[19].style["visibility"] = "hidden";
    tooltip[20].style["visibility"] = "hidden";
    tooltip[21].style["visibility"] = "hidden";
    tooltip[22].style["visibility"] = "hidden";
    tooltip[23].style["visibility"] = "visible";
    tooltip[24].style["visibility"] = "hidden";
    tooltip[25].style["visibility"] = "hidden";
    tooltip[26].style["visibility"] = "hidden";
  }
  if (rangeInput == 70) {
    stopLossOrderVolumn.value = 156 * 7;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#ddb08f";
    rangeDotSeven.style["background-color"] = "#ddb08f";
    rangeDotEight.style["background-color"] = "#45474e";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[18].style["visibility"] = "hidden";
    tooltip[19].style["visibility"] = "hidden";
    tooltip[20].style["visibility"] = "hidden";
    tooltip[21].style["visibility"] = "hidden";
    tooltip[22].style["visibility"] = "hidden";
    tooltip[23].style["visibility"] = "hidden";
    tooltip[24].style["visibility"] = "visible";
    tooltip[25].style["visibility"] = "hidden";
    tooltip[26].style["visibility"] = "hidden";
  }
  if (rangeInput == 80) {
    stopLossOrderVolumn.value = 156 * 8;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#ddb08f";
    rangeDotSeven.style["background-color"] = "#ddb08f";
    rangeDotEight.style["background-color"] = "#ddb08f";
    rangeDotNine.style["background-color"] = "#45474e";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[18].style["visibility"] = "hidden";
    tooltip[19].style["visibility"] = "hidden";
    tooltip[20].style["visibility"] = "hidden";
    tooltip[21].style["visibility"] = "hidden";
    tooltip[22].style["visibility"] = "hidden";
    tooltip[23].style["visibility"] = "hidden";
    tooltip[24].style["visibility"] = "hidden";
    tooltip[25].style["visibility"] = "visible";
    tooltip[26].style["visibility"] = "hidden";
  }
  if (rangeInput == 90) {
    stopLossOrderVolumn.value = 156 * 9;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#ddb08f";
    rangeDotSeven.style["background-color"] = "#ddb08f";
    rangeDotEight.style["background-color"] = "#ddb08f";
    rangeDotNine.style["background-color"] = "#ddb08f";
    rangeDotTen.style["background-color"] = "#45474e";
    tooltip[18].style["visibility"] = "hidden";
    tooltip[19].style["visibility"] = "hidden";
    tooltip[20].style["visibility"] = "hidden";
    tooltip[21].style["visibility"] = "hidden";
    tooltip[22].style["visibility"] = "hidden";
    tooltip[23].style["visibility"] = "hidden";
    tooltip[24].style["visibility"] = "hidden";
    tooltip[25].style["visibility"] = "hidden";
    tooltip[26].style["visibility"] = "visible";
  }
  if (rangeInput == 100) {
    stopLossOrderVolumn.value = 1557;
    rangeDotOne.style["background-color"] = "#ddb08f";
    rangeDotTwo.style["background-color"] = "#ddb08f";
    rangeDotThree.style["background-color"] = "#ddb08f";
    rangeDotFour.style["background-color"] = "#ddb08f";
    rangeDotFive.style["background-color"] = "#ddb08f";
    rangeDotSix.style["background-color"] = "#ddb08f";
    rangeDotSeven.style["background-color"] = "#ddb08f";
    rangeDotEight.style["background-color"] = "#ddb08f";
    rangeDotNine.style["background-color"] = "#ddb08f";
    rangeDotTen.style["background-color"] = "#ddb08f";
    tooltip[18].style["visibility"] = "hidden";
    tooltip[19].style["visibility"] = "hidden";
    tooltip[20].style["visibility"] = "hidden";
    tooltip[21].style["visibility"] = "hidden";
    tooltip[22].style["visibility"] = "hidden";
    tooltip[23].style["visibility"] = "hidden";
    tooltip[24].style["visibility"] = "hidden";
    tooltip[25].style["visibility"] = "hidden";
    tooltip[26].style["visibility"] = "hidden";
  }
};

const stopLossEnterTotal = () => {
  const price = document.getElementById("stopLossUcdtValue");
  const volumn = document.getElementById("stopLossOrderVolumn");
  const total = document.getElementById("stopLossTotal");
  const dotNumber = new Intl.NumberFormat("en-US");
  total.innerText = dotNumber.format((price.value * volumn.value).toFixed(3));
};

// tab content
const openOrder = (e, orderName) => {
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  let tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(orderName).style.display = "block";
  e.currentTarget.className += " active";
};

document.getElementById("defaultOpen").click();

// 掛單區
const higherListGetRandomNum = () => {
  let nowOrderListHigher1 = Math.floor(Math.random() * 1000);
  let nowOrderListHigher2 = Math.floor(Math.random() * 1000);
  let nowOrderListHigher3 = Math.floor(Math.random() * 10000);
  let nowOrderListHigher4 = Math.floor(Math.random() * 10000);
  let nowOrderListHigher5 = Math.floor(Math.random() * 10000);
  let nowOrderListHigher6 = Math.floor(Math.random() * 10000);
  let nowOrderListHigher7 = Math.floor(Math.random() * 100000);
  let nowOrderListHigher8 = Math.floor(Math.random() * 100000);
  let nowOrderListHigher9 = Math.floor(Math.random() * 100000);
  let nowOrderListHigher10 = Math.floor(Math.random() * 100000);
  let nowOrderListHigher11 = Math.floor(Math.random() * 100000);
  let nowOrderListHigher12 = Math.floor(Math.random() * 100000);
  let nowOrderListHigher13 = Math.floor(Math.random() * 1000000);
  let nowOrderListHigher14 = Math.floor(Math.random() * 10000000);
  let nowOrderListHigherDataFirst = [
    {
      price: "32.123",
      volumn: nowOrderListHigher1,
    },
    {
      price: "32.122",
      volumn: nowOrderListHigher2,
    },
    {
      price: "32.121",
      volumn: nowOrderListHigher3,
    },
    {
      price: "32.120",
      volumn: nowOrderListHigher4,
    },
    {
      price: "32.119",
      volumn: nowOrderListHigher5,
    },
    {
      price: "32.118",
      volumn: nowOrderListHigher6,
    },
    {
      price: "32.117",
      volumn: nowOrderListHigher7,
    },
    {
      price: "32.116",
      volumn: nowOrderListHigher8,
    },
    {
      price: "32.115",
      volumn: nowOrderListHigher9,
    },
    {
      price: "32.114",
      volumn: nowOrderListHigher10,
    },
    {
      price: "32.113",
      volumn: nowOrderListHigher11,
    },
    {
      price: "32.112",
      volumn: nowOrderListHigher12,
    },
    {
      price: "32.111",
      volumn: nowOrderListHigher13,
    },
    {
      price: "32.110",
      volumn: nowOrderListHigher14,
    },
  ];

  const nowOrderListHigherDataFinal = nowOrderListHigherDataFirst.map(
    (value) => ({
      price: value.price.toString(),
      volumn: value.volumn,
      total: value.price * value.volumn,
    })
  );

  const nowOrderListHigherTable = (initial) => {
    const table = document.getElementById("nowOrderListHigher");
    table.innerHTML = "";
    const dotNumber = new Intl.NumberFormat("en-US");
    const itemMap = initial.map((value) => {
      let row = table.insertRow();
      let price = row.insertCell();
      let volumn = row.insertCell();
      let total = row.insertCell();

      price.innerHTML = "<p>" + value.price + "</p>";
      volumn.innerHTML = "<p>" + dotNumber.format(value.volumn) + "</p>";
      total.innerHTML = "<p>" + dotNumber.format(value.total) + "</p>";
    });
    return itemMap;
  };

  nowOrderListHigherTable(nowOrderListHigherDataFinal);

  let nowOrderListHigherBg = document.getElementsByClassName(
    "nowOrderListHigherBg"
  );
  const controlHigherListWidth = () => {
    for (let i = 0; i <= 13; i++) {
      nowOrderListHigherBg[i].style["width"] =
        (14 / 150000) * nowOrderListHigherDataFirst[i].volumn + "vw";
    }
  };
  controlHigherListWidth();
};
higherListGetRandomNum();
setInterval(higherListGetRandomNum, 2000);

const lowerListGetRandomNum = () => {
  let nowOrderListLower1 = Math.floor(Math.random() * 1000);
  let nowOrderListLower2 = Math.floor(Math.random() * 1000);
  let nowOrderListLower3 = Math.floor(Math.random() * 1000);
  let nowOrderListLower4 = Math.floor(Math.random() * 10000);
  let nowOrderListLower5 = Math.floor(Math.random() * 10000);
  let nowOrderListLower6 = Math.floor(Math.random() * 10000);
  let nowOrderListLower7 = Math.floor(Math.random() * 100000);
  let nowOrderListLower8 = Math.floor(Math.random() * 100000);
  let nowOrderListLower9 = Math.floor(Math.random() * 100000);
  let nowOrderListLower10 = Math.floor(Math.random() * 100000);
  let nowOrderListLower11 = Math.floor(Math.random() * 100000);
  let nowOrderListLower12 = Math.floor(Math.random() * 100000);
  let nowOrderListLower13 = Math.floor(Math.random() * 500000);
  let nowOrderListLower14 = Math.floor(Math.random() * 5000000);
  let nowOrderListLower15 = Math.floor(Math.random() * 10000000);
  let nowOrderListLowerDataFirst = [
    {
      price: "32.109",
      volumn: nowOrderListLower15,
    },
    {
      price: "32.108",
      volumn: nowOrderListLower14,
    },
    {
      price: "32.107",
      volumn: nowOrderListLower13,
    },
    {
      price: "32.106",
      volumn: nowOrderListLower12,
    },
    {
      price: "32.105",
      volumn: nowOrderListLower11,
    },
    {
      price: "32.104",
      volumn: nowOrderListLower10,
    },
    {
      price: "32.103",
      volumn: nowOrderListLower9,
    },
    {
      price: "32.102",
      volumn: nowOrderListLower8,
    },
    {
      price: "32.101",
      volumn: nowOrderListLower7,
    },
    {
      price: "32.100",
      volumn: nowOrderListLower6,
    },
    {
      price: "32.099",
      volumn: nowOrderListLower5,
    },
    {
      price: "31.098",
      volumn: nowOrderListLower4,
    },
    {
      price: "31.097",
      volumn: nowOrderListLower3,
    },
    {
      price: "31.096",
      volumn: nowOrderListLower2,
    },
    {
      price: "31.095",
      volumn: nowOrderListLower1,
    },
  ];

  const nowOrderListLowerDataFinal = nowOrderListLowerDataFirst.map(
    (value) => ({
      price: value.price.toString(),
      volumn: value.volumn,
      total: value.price * value.volumn,
    })
  );

  const nowOrderListLowerTable = (initial) => {
    const table = document.getElementById("nowOrderListLower");
    table.innerHTML = "";
    const dotNumber = new Intl.NumberFormat("en-US");
    const itemMap = initial.map((value) => {
      let row = table.insertRow();
      let price = row.insertCell();
      let volumn = row.insertCell();
      let total = row.insertCell();

      price.innerHTML = "<p>" + value.price + "</p>";
      volumn.innerHTML = "<p>" + dotNumber.format(value.volumn) + "</p>";
      total.innerHTML = "<p>" + dotNumber.format(value.total) + "</p>";
    });
    return itemMap;
  };

  nowOrderListLowerTable(nowOrderListLowerDataFinal);

  let nowOrderListLowerBg = document.getElementsByClassName(
    "nowOrderListLowerBg"
  );
  const controlLowerListWidth = () => {
    for (let i = 0; i <= 14; i++) {
      nowOrderListLowerBg[i].style["width"] =
        (14 / 150000) * nowOrderListLowerDataFirst[i].volumn + "vw";
    }
  };
  controlLowerListWidth();
};
lowerListGetRandomNum();
setInterval(lowerListGetRandomNum, 2000);
