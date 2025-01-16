
const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
const notice = document.querySelector('.notice');
const list = document.querySelector('.list');


// 待辦事項資料
let data = [];

save.addEventListener('click', function () {
    if (txt.value == '') {
        notice.textContent = `還沒填入待辦事項哦`;
        notice.style.display = 'block';
        return;
    };
    let obj = {};
    obj.content = txt.value;
    data.push(obj);
    renderData();
});



// 初始化資料
function renderData() {
    // 處理待辦事項資料，呈現成li
    let str = '';
    data.forEach(function (item, index) {
        str += `<li>
        ${item.content}
        <input data-num="${index}" type="button" value="×" class="delete">
        </li>`;
    });
    const list = document.querySelector('.list');
    list.innerHTML = str;
    txt.value = '';
    notice.style.display = 'none';

};

// 刪除資料
// 針對list去綁監聽事件
list.addEventListener('click', function(e){
    if (e.target.className !== 'delete') {
        return;
    };
    let num = e.target.dataset.num;
    data.splice(num, 1);
    renderData();
});

