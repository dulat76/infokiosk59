let currentSlide = 0;
let slideInterval;

function init() {
    // Устанавливаем язык из localStorage или по умолчанию
    const savedLang = localStorage.getItem('schoolKioskLang') || 'ru';
    applyLang(savedLang);
    
    updateClock();
    setInterval(updateClock, 1000);

    initSlider();
}

function updateClock() {
    const clockEl = document.getElementById('clock');
    if (clockEl) {
        const now = new Date();
        clockEl.innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }
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
    const btnRu = document.getElementById('btn-ru');
    const btnKz = document.getElementById('btn-kz');
    if (btnRu) btnRu.classList.toggle('active', lang === 'ru');
    if (btnKz) btnKz.classList.toggle('active', lang === 'kz');
}

function initSlider() {
    const slider = document.getElementById('slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    if (slides.length <= 1) return;

    startSlider();
}

function startSlider() {
    slideInterval = setInterval(() => {
        const slider = document.getElementById('slider');
        const slides = slider.querySelectorAll('.slide');
        currentSlide = (currentSlide + 1) % slides.length;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 5000);
}

// Запуск
document.addEventListener('DOMContentLoaded', init);
