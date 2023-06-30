// 拿元素
const previousWeekBtn = document.getElementById('previousWeek');
const nextWeekBtn = document.getElementById('nextWeek');
const currentWeekHeading = document.getElementById('currentWeek');
const datesContainer = document.getElementById('datesContainer');

// 宣告當前日期
let currentDate = new Date();

// 生成七天的日期和時段
function generateWeek() {
    datesContainer.innerHTML = '';

    // 當前日期
    let weekStart = new Date(currentDate);

    // 定位到本週的星期一
    weekStart.setDate(weekStart.getDate() - weekStart.getDay() + 1);

    // 生成七天的日期
    for (let i = 0; i < 7; i++) {
        let date = new Date(weekStart);
        date.setDate(date.getDate() + i);

        // 創建日期
        let dateElement = document.createElement('div');
        dateElement.textContent = date.getDate();

        // 創建星期
        let dayElement = document.createElement('div');
        dayElement.textContent = getWeekday(date.getDay());

        // 將日期和星期元素添加到容器中
        let dateContainer = document.createElement('div');
        dateContainer.appendChild(dateElement);
        dateContainer.appendChild(dayElement);
        datesContainer.appendChild(dateContainer);
    }
}

// 上一週
function previousWeek() {
    currentDate.setDate(currentDate.getDate() - 7);
    updateCurrentWeek();
    generateWeek();
}

// 下一週
function nextWeek() {
    currentDate.setDate(currentDate.getDate() + 7);
    updateCurrentWeek();
    generateWeek();
}

// 更新當前的年月的標題
function updateCurrentWeek() {
    let weekStart = new Date(currentDate);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay() + 1);

    let weekRange = `${weekStart.getFullYear()}年 ${weekStart.getMonth() + 1}月`;

    currentWeekHeading.textContent = weekRange;
}

// 星期名稱
function getWeekday(day) {
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return weekdays[day];
}

// 綁定監聽器
previousWeekBtn.addEventListener('click', previousWeek);
nextWeekBtn.addEventListener('click', nextWeek);

// 回去
updateCurrentWeek();
generateWeek();

//==================================================================================================
// 生成7*3表格
const tableContainer = document.createElement('div');
tableContainer.classList.add('timeslots');

const courseData = [
    ["團課", "團課", "團課"],
    ["團課", "團課", "團課"],
    ["團課", "團課", "團課"],
    ["團課", "團課", "團課"],
    ["團課", "團課", "團課"],
    ["團課", "團課", "團課"],
    ["團課", "團課", "團課"]
];

for (let i = 0; i < 7; i++) {
    let timeSlotContainer = document.createElement('div');
    timeSlotContainer.classList.add('timeslot');

    for (let j = 0; j < 3; j++) {
        let timeSlot = document.createElement('div');
        timeSlot.textContent = `${i}-${j}: ${courseData[i][j]}`;

        timeSlotContainer.appendChild(timeSlot);
    }

    tableContainer.appendChild(timeSlotContainer);
}

// 添加到日歷
document.querySelector('.calendar').appendChild(tableContainer);