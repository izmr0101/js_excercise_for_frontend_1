/**
 * 課題1: id値が 'title' の要素を取得する
 *   - getElementByIdを使う
 *   - console.logで取得したDOMの中身を確認する
 */

const elementByID = document.getElementById('title');

console.log('titleElement1の中身 : ', elementByID);

/**
 * 課題2: id値が 'item-container' の要素を取得する
 *   - querySelectorを使う
 *   - console.logで取得したDOMの中身を確認する
 */

const elemenByQuerySelector = document.querySelector('#item-container');

console.log('item-containerの中身 : ', elemenByQuerySelector);

/**
 * 課題3: li要素を全て取得する
 *   - console.logで取得したDOMの中身を確認する
 */

const liElementsByTagName = document.getElementsByTagName('li');

console.log('liElements : ', liElementsByTagName);

/**
 * 課題4: class値が 'item' の要素を全て取得する
 *   - getElementsByClassNameを使う
 *   - console.logで取得したDOMの中身を確認する
 */

const itemElementsByClassName = document.getElementsByClassName('item');

console.log('itemElements1 : ', itemElementsByClassName);

/**
 * 課題5: class値が 'item' の要素を全て取得する
 *   - querySelectorAllを使う
 *   - console.logで取得したDOMの中身を確認する
 */

const itemElementsByQuerySelectorAll = document.querySelectorAll('.item');

console.log('itemElements2 : ', itemElementsByQuerySelectorAll);
