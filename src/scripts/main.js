'use strict';

const spider = document.querySelector('.spider');

const spiderStyle = getComputedStyle(spider);
const spiderWidth = parseInt(spiderStyle.width);
const spiderHeight = parseInt(spiderStyle.height);
const field = document.querySelector('.wall');
const fieldStyle = getComputedStyle(field);
const fieldWidth = parseInt(fieldStyle.width);
const fieldHeight = parseInt(fieldStyle.height);

Object.assign(spider.style, {
  top: `${(fieldHeight - spiderHeight) / 2}px`,
  left: `${(fieldWidth - spiderWidth) / 2}px`,
});
