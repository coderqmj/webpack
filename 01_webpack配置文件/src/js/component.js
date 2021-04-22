import "../css/index.css";
import "../css/component.less";

function component() {
  const element = document.createElement("div");

  element.innerHTML = ["hello", "webpack"].join(" ");
  element.className = "content";

  // 创建一个img元素，设置src属性
  const imgEl = new Image();
  imgEl.src = require('../img/coderqmj1.png');
  element.appendChild(imgEl);

  // 创建div，设置背景图片
  const bgDivEl = document.createElement('div');
  bgDivEl.style.width = 200 + 'px';
  bgDivEl.style.height = 200 + 'px';
  bgDivEl.className = 'bg-image';
  bgDivEl.style.backgroundColor = "red";
  element.appendChild(bgDivEl);

  return element;
}

document.body.appendChild(component());