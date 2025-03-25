
const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
const notice = document.querySelector('.notice');
const list = document.querySelector('.list');


// 待辦事項資料
let data = [
    // {
    //     content: '去圖書館借書',
    //     state: 'checked'
    // },
    // {
    //     content: '買番茄',
    //     state: '',
    // }
];

save.addEventListener('click', function () {
    if (txt.value == '') {
        notice.textContent = `還沒填入待辦事項哦`;
        notice.style.display = 'block';
        return;
    };
    let obj = {};
    obj.content = txt.value;
    obj.state = '';
    data.push(obj);
    renderData();
});



// 初始化資料
function renderData() {
    // 處理待辦事項資料，呈現成li
    let str = '';
    data.forEach(function (item, index) {
        str += `<li>
        <input type="checkbox" name="" class="finishcheck" ${item.state} data-num="${index}" id="">
        <span data-num="${index}">${item.content}</span>
        <input data-num="${index}" type="button" value="×" class="delete">
        </li>`;
    });
    const list = document.querySelector('.list');
    list.innerHTML = str;
    txt.value = '';
    notice.style.display = 'none';

};
renderData();


// 刪除資料
// 針對list去綁監聽事件
list.addEventListener('click', function (e) {
    if (e.target.className !== 'delete') {
        return;
    };
    let num = e.target.dataset.num;
    data.splice(num, 1);
    renderData();
});

// 完成待辦事項
list.addEventListener('click', function (e) {
    //選到句子時
    if (e.target.nodeName == 'SPAN') {
        let checked = e.target.previousElementSibling.checked;
        let num = e.target.dataset.num;

        if (checked == true) {
            e.target.style.textDecoration = 'unset';
            e.target.style.color = '#000';
            e.target.previousElementSibling.checked = false;
            data[num].state = '';
            renderData();

        } else {
            e.target.style.textDecoration = 'line-through';
            e.target.style.color = '#666';
            e.target.previousElementSibling.checked = true;
            data[num].state = 'checked';
            renderData();
        };
    };
    if (e.target.className == 'finishcheck') {
        let checked = e.target.checked;
        let num = e.target.dataset.num;
        if (checked == true) {
            data[num].state = 'checked';
            renderData();
        } else {
            data[num].state = '';
            renderData();
        }
    }   

})