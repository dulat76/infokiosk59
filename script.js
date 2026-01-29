function init() {
    // Устанавливаем язык из localStorage или по умолчанию
    const savedLang = localStorage.getItem('schoolKioskLang') || 'ru';
    applyLang(savedLang);
    
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

// Функция для смены языка
function setLang(lang) {
    localStorage.setItem('schoolKioskLang', lang);
    applyLang(lang);
}

// Функция для применения языка к интерфейсу
function applyLang(lang) {
    // Переключаем класс на body для CSS
    document.body.className = lang + '-mode';
    // Обновляем активную кнопку
    document.getElementById('btn-ru').classList.toggle('active', lang === 'ru');
    document.getElementById('btn-kz').classList.toggle('active', lang === 'kz');
}

// Запуск
document.addEventListener('DOMContentLoaded', init);