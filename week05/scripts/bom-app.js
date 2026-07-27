const input = document.querySelector('#favchapter');
const button = document.querySelector('#addBtn');
const list = Document.querySelector('#list');
let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});
button.addEventListener('click', () => {
    if (input.value !=='') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value ='';
        input.focus();
    }
});
function displayList(item) {
    let li = document.createElement('li');
    let deleteBtn = document.createElement('button');
    li.textContent = item;
    deleteBtn.textContent ='❌';
    li.append(deleteBtn);
    list.append(li);
    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
        deteleChapter(item);
    });
}
function setChapterList() {
    localStorage.setItem('myBOMList', JSON.stringify(chaptersArray));
}
function getChapterList() {
    return JSON.parse(localStorage.getItem('myBOMList'));
}
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}