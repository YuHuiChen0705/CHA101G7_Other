// 獲取元素
const categorySelect = document.getElementById('category');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const calendarContainer = document.getElementById('calendar');

// 課程數據
const courses = [
    { name: '戰鬥有氧', category: 'aerobic', time: '09:00-12:00' },
    { name: 'Zumba', category: 'aerobic', time: '14:00-15:00' },
    { name: '艾克斯有氧', category: 'aerobic', time: '18:00-21:00' },
    { name: '熱瑜珈', category: 'yoga', time: '09:00-12:00' },
    { name: '阿斯坦加瑜珈', category: 'yoga', time: '14:00-15:00' },
    { name: '和緩瑜珈', category: 'yoga', time: '18:00-21:00' },
    { name: '飛輪入門', category: 'spin', time: '09:00-12:00' },
    { name: '肌力雕塑', category: 'spin', time: '14:00-15:00' },
    { name: '燃脂耐力', category: 'spin', time: '18:00-21:00' },
    { name: '攀岩', category: 'climbing', time: '09:00-12:00' },
];

// 監聽搜索按鈕點擊事件
searchBtn.addEventListener('click', function () {
    const selectedCategory = categorySelect.value;
    const searchQuery = searchInput.value;

    // 過濾符合條件的課程
    const filteredCourses = courses.filter(course => {
        const matchCategory = selectedCategory === '' || course.category === selectedCategory;
        const matchSearch = searchQuery === '' || course.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    displayCalendar(filteredCourses); // 更新週曆顯示
});

// 創建日曆顯示函數
function displayCalendar(courses) {
    // 清空日曆容器
    calendarContainer.innerHTML = '';

    // 創建週曆項目
    courses.forEach(course => {
        const item = document.createElement('div');
        item.classList.add('col-md-4', 'mb-3');
        item.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${course.name}</h5>
          <p class="card-text">時間：${course.time}</p>
        </div>
      </div>
    `;
        calendarContainer.appendChild(item);
    });
}

// 初始顯示所有課程
displayCalendar(courses);