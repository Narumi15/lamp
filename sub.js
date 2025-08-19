// news archive
const newsList = [
    {date: new Date('2025-7-31'), title: '8月1日より営業再開いたします。', url: 'news/news-20250731.html'},
    // {date: new Date('日付'), title: 'タイトル', url: 'news/news-日付.html'},
];

newsList.sort((a,b) => b.date - a.date);  //　日付の降順（新しい順）で並び替え

const topNews = newsList.slice(0, 3);  // 最新の3件だけ取得

const ul = document.getElementById('news-archive');

topNews.forEach(news => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = news.url;

    // 日付を「YYYY.MM.DD」形式の整形
    const year = news.date.getFullYear();
    const month = String(news.date.getMonth() + 1).padStart(2, '0');
    const day = String(news.date.getDate()).padStart(2, '0');
    const dateStr = `${year}.${month}.${day}`;

    const dateTag = document.createElement('time');
    dateTag.textContent = dateStr;

    const pTag = document.createElement('p');
    pTag.textContent = news.title;

    // aの中に追加
    a.appendChild(dateTag);
    a.appendChild(pTag);

    // liの中に追加
    li.appendChild(a);
    ul.appendChild(li);
});


// slider
const slide = document.querySelector('.slide');
slide.innerHTML += slide.innerHTML; // 同じスライドを追加

const slideCount = slide.children.length;
const slideWidth = window.innerWidth;
const gap = 30;
let pos = 0;

function animate() {

    // 1pxずつ左に動かす
    pos += 1;

    const oneSlideTotalWidth = slideWidth + gap;
    const resetPoint = oneSlideTotalWidth * (slideCount / 2);

    if(pos >= resetPoint) {
        pos = 0;
        slide.style.transform = `translateX(0)`;
    } else {
        slide.style.transform = `translateX(-${pos}px)`;
    }
    requestAnimationFrame(animate);
}

animate();
