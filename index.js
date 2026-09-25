// ================= 1. БАЗА ДАННЫХ СКИНОВ (52 ШТУК) =================
const skinsData = [
    { id: 1, name: "Неон Самурай", tag: "hd", tagText: "HD Скин", file: "skin_samurai.png", img: "images/samurai.png" },
    { id: 2, name: "Эндер Маг", tag: "classic", tagText: "Стив", file: "skin_ender.png", img: "images/ender.png" },
    { id: 3, name: "Кибер-Стив", tag: "hd", tagText: "HD Скин", file: "skin_cyber.png", img: "images/cyber.png" },
    { id: 4, name: "Разведчик Пустоты", tag: "alex", tagText: "Алекс", file: "skin_scout.png", img: "images/scout.png" },
    { id: 5, name: "Лорд Бедрока", tag: "classic", tagText: "Стив", file: "skin_void.png", img: "images/void.png" },
    { id: 6, name: "Крипер-Босс", tag: "3d", tagText: "3D Модель", file: "model_creeper.zip", img: "images/creeper.png" },
    { id: 7, name: "Адский Рыцарь", tag: "hd", tagText: "HD Скин", file: "skin_knight.png", img: "images/knight.png" },
    { id: 8, name: "Ледяной Воин", tag: "classic", tagText: "Стив", file: "skin_ice.png", img: "images/ice.png" },
    { id: 9, name: "Ниндзя Скрытности", tag: "alex", tagText: "Алекс", file: "skin_ninja.png", img: "images/ninja.png" },
    { id: 10, name: "Космический Стив", tag: "classic", tagText: "Стив", file: "skin_space.png", img: "images/space.png" },
    { id: 11, name: "Аква-Гладиатор", tag: "hd", tagText: "HD Скин", file: "skin_aqua.png", img: "images/aqua.png" },
    { id: 12, name: "Робот-Шахтер", tag: "alex", tagText: "Алекс", file: "skin_robot.png", img: "images/robot.png" },
    { id: 13, name: "Дракон Края", tag: "3d", tagText: "3D Модель", file: "model_dragon.zip", img: "images/dragon.png" },
    { id: 14, name: "Пират Морей", tag: "classic", tagText: "Стив", file: "skin_pirate.png", img: "images/pirate.png" },
    { id: 15, name: "Хранитель Леса", tag: "hd", tagText: "HD Скин", file: "skin_forest.png", img: "images/forest.png" },
    { id: 16, name: "Призрачный Жнец", tag: "hd", tagText: "HD Скин", file: "skin_reaper.png", img: "images/reaper.png" },
    { id: 17, name: "Охотник Края", tag: "classic", tagText: "Стив", file: "skin_ender_hunter.png", img: "images/ender_hunter.png" },
    { id: 18, name: "Техно-Алекс", tag: "alex", tagText: "Алекс", file: "skin_techno.png", img: "images/techno.png" },
    { id: 19, name: "Стимпанк Инженер", tag: "hd", tagText: "HD Скин", file: "skin_steampunk.png", img: "images/steampunk.png" },
    { id: 20, name: "Древний Страж", tag: "3d", tagText: "3D Модель", file: "model_guardian.zip", img: "images/guardian.png" },
    { id: 21, name: "Теневой Ассасин", tag: "hd", tagText: "HD Скин", file: "skin_shadow.png", img: "images/shadow.png" },
    { id: 22, name: "Паладин Света", tag: "classic", tagText: "Стив", file: "skin_paladin.png", img: "images/paladin.png" },
    { id: 23, name: "Лесной Следопыт", tag: "alex", tagText: "Алекс", file: "skin_ranger.png", img: "images/ranger.png" },
    { id: 24, name: "Ифрит-Командир", tag: "hd", tagText: "HD Скин", file: "skin_blaze.png", img: "images/blaze.png" },
    { id: 25, name: "Незеритовый Голем", tag: "3d", tagText: "3D Модель", file: "model_golem.zip", img: "images/golem.png" },
    { id: 26, name: "Генерал Скелетов", tag: "classic", tagText: "Стив", file: "skin_skeleton.png", img: "images/skeleton.png" },
    { id: 27, name: "Неоновый Хакер", tag: "alex", tagText: "Алекс", file: "skin_hacker.png", img: "images/hacker.png" },
    { id: 28, name: "Сёгун Края", tag: "hd", tagText: "HD Скин", file: "skin_shogun.png", img: "images/shogun.png" },
    { id: 29, name: "Кибер-Зомби", tag: "classic", tagText: "Стив", file: "skin_czombie.png", img: "images/czombie.png" },
    { id: 30, name: "Маг Времени", tag: "hd", tagText: "HD Скин", file: "skin_time.png", img: "images/time.png" },
    { id: 31, name: "Пустынный Кочевник", tag: "alex", tagText: "Алекс", file: "skin_nomad.png", img: "images/nomad.png" },
    { id: 32, name: "Железный Наездник", tag: "classic", tagText: "Стив", file: "skin_rider.png", img: "images/rider.png" },
    { id: 33, name: "Механический Паук", tag: "3d", tagText: "3D Модель", file: "model_spider.zip", img: "images/spider.png" },
    { id: 34, name: "Морозный Лорд", tag: "hd", tagText: "HD Скин", file: "skin_frost.png", img: "images/frost.png" },
    { id: 35, name: "Огненный Демон", tag: "classic", tagText: "Стив", file: "skin_demon.png", img: "images/demon.png" },
    { id: 36, name: "Снайпер Края", tag: "alex", tagText: "Алекс", file: "skin_sniper.png", img: "images/sniper.png" },
    { id: 37, name: "Золотой Король", tag: "hd", tagText: "HD Скин", file: "skin_king.png", img: "images/king.png" },
    { id: 38, name: "Гладиатор Арены", tag: "classic", tagText: "Стив", file: "skin_gladiator.png", img: "images/gladiator.png" },
    { id: 39, name: "Разрушитель Незера", tag: "3d", tagText: "3D Модель", file: "model_ravager.zip", img: "images/ravager.png" },
    { id: 40, name: "Самурай Пустоты", tag: "hd", tagText: "HD Скин", file: "skin_vsamurai.png", img: "images/vsamurai.png" },
    { id: 41, name: "Безумный Ученый", tag: "alex", tagText: "Алекс", file: "skin_scientist.png", img: "images/scientist.png" },
    { id: 42, name: "Рыцарь Дракона", tag: "classic", tagText: "Стив", file: "skin_dknight.png", img: "images/dknight.png" },
    { id: 43, name: "Звездный Странник", tag: "hd", tagText: "HD Скин", file: "skin_wanderer.png", img: "images/wanderer.png" },
    { id: 44, name: "Снайпер Пустоты", tag: "alex", tagText: "Алекс", file: "skin_vscout.png", img: "images/vscout.png" },
    { id: 45, name: "Тяжелый Экзокостюм", tag: "3d", tagText: "3D Модель", file: "model_exo.zip", img: "images/exo.png" },
    { id: 46, name: "Маг Иллюзий", tag: "classic", tagText: "Стив", file: "skin_illusion.png", img: "images/illusion.png" },
    { id: 47, name: "Кибер-Ниндзя", tag: "hd", tagText: "HD Скин", file: "skin_cninja.png", img: "images/cninja.png" },
    { id: 48, name: "Хранитель Времени", tag: "classic", tagText: "Стив", file: "skin_keeper.png", img: "images/keeper.png" },
    { id: 49, name: "Лесной Лучник", tag: "alex", tagText: "Алекс", file: "skin_archer.png", img: "images/archer.png" },
    { id: 50, name: "Бог Грома", tag: "hd", tagText: "HD Скин", file: "skin_thunder.png", img: "images/thunder.png" },
    { id: 51, name: "Владыка Бедствий", tag: "3d", tagText: "3D Модель", file: "model_calamity.zip", img: "images/calamity.png" },
    { id: 52, name: "Кибер-Следопыт", tag: "alex", tagText: "Алекс", file: "skin_cyberscout.png", img: "images/cyberscout.png" }
];

// ================= 2. ПОИСК И СВЯЗЫВАНИЕ ЭЛЕМЕНТОВ DOM =================
const skinsGrid = document.querySelector('.skins-grid');
const searchInput = document.querySelector('.mc-filter-bar__input');
const filterButtons = document.querySelectorAll('.mc-filter-bar__btn');

let currentCategory = 'Все скины';
let searchQuery = '';

// ================= 3. ИГРОВОЙ ЗВУК КЛИКА КНОПОК =================
const clickSound = new Audio('audio/click.mp3');

function playClickSound() {
    clickSound.currentTime = 0; // Сброс в начало для спама кликами
    clickSound.play().catch(err => {
        console.log("Браузер ожидает первого клика по странице перед воспроизведением звука.");
    });
}

// ================= 4. УМНАЯ ФУНКЦИЯ ОТРИСОВКИ КАРТОЧЕК С КЛИКОМ И РЕГИСТРОМ =================
function renderSkins() {
    skinsGrid.innerHTML = '';

    const filteredSkins = skinsData.filter(skin => {
        // Переводим поисковый запрос строго в нижний регистр для независимости от больших букв
        const query = searchQuery.toLowerCase().trim();

        // Умная логика поиска по названию, тегу или общим ключевым словам
        const matchesSearch =
            skin.name.toLowerCase().includes(query) ||
            skin.tagText.toLowerCase().includes(query) ||
            "скин".includes(query) ||
            "модель".includes(query);

        // Проверка соответствия выбранной категории
        let matchesCategory = false;
        if (currentCategory === 'Все скины') matchesCategory = true;
        if (currentCategory === 'Стив (Steve 64x64)' && skin.tag === 'classic') matchesCategory = true;
        if (currentCategory === 'Алекс (Alex 3px)' && skin.tag === 'alex') matchesCategory = true;
        if (currentCategory === 'HD Скины' && skin.tag === 'hd') matchesCategory = true;
        if (currentCategory === '3D Модели' && skin.tag === '3d') matchesCategory = true;

        return matchesSearch && matchesCategory;
    });

    if (filteredSkins.length === 0) {
        skinsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #ff5555; font-size: 12px; padding: 20px;">[ Скины не найдены ]</p>`;
        return;
    }

    filteredSkins.forEach(skin => {
        const card = document.createElement('div');
        card.className = 'mc-card'; // Профессиональный БЭМ-класс карточки из SCSS

        card.innerHTML = `
            <div class="mc-card__preview">
                <img src="${skin.img}" alt="${skin.name}" class="mc-card__img">
            </div>
            <h3 class="mc-card__name">Скин: ${skin.name}</h3>
            <span class="mc-card__tag mc-card__tag--${skin.tag}">${skin.tagText}</span>
            <button class="mc-card__btn-download" onclick="alert('Скачивание файла ${skin.file}')">СКАЧАТЬ</button>
        `;
        skinsGrid.appendChild(card);
    });
}

// ================= 5. ПОДКЛЮЧЕНИЕ ОБРАБОТЧИКОВ СОБЫТИЙ И ЗВУКА =================

// Активация звука и поиска в строке ввода
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderSkins();
});

// Активация звука и фильтров на кнопках категорий
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        playClickSound(); // Воспроизводим игровой клик
        filterButtons.forEach(btn => btn.classList.remove('mc-filter-bar__btn--active'));
        button.classList.add('mc-filter-bar__btn--active');

        currentCategory = button.textContent;
        renderSkins();
    });
});// Навешивание звука на кнопку "ЗАКАЗАТЬ" в шапкеconst 
ctaBtn = document.querySelector('.mc-btn-cta');
if (ctaBtn) { ctaBtn.addEventListener('click', playClickSound); }// Навешивание звука на динамические кнопки "СКАЧАТЬ" через делегирование
skinsGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('mc-card__btn-download')) { playClickSound(); }
});// ================= 6. СТАРТ СИСТЕМЫ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ =================
renderSkins();