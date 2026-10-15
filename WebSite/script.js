// Находим кнопку и заголовок по их признакам
const button = document.getElementById('colorButton');
const title = document.querySelector('h1');

// Список фраз, которые будут меняться при клике
const messages = [
    "Отличное начало! 🔥",
    "Вы осваиваете VS Code! ✨",
    "Программировать — это круто! 💻",
    "Привет, мир! 🚀"
];

let index = 0;

// Добавляем событие при клике на кнопку
button.addEventListener('click', function() {
    index = (index + 1) % messages.length;
    title.textContent = messages[index];
});