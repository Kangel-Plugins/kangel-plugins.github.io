export const translations = {
  ru: {
    header: 'ПРАВИЛА ПУБЛИКАЦИИ', language: 'Выбор языка', switchUi: 'Переключить на Needy UI', themeLabel: 'Тема оформления', light: 'Светлая', dark: 'Тёмная', system: 'Система', eyebrow: 'KPM / ДЛЯ АВТОРОВ ПЛАГИНОВ',
    title: 'Хорошие плагины.', titleAccent: 'Честные правила', subtitle: 'Всё, что нужно знать перед публикацией плагина в Kangel Plugins Manager.', explore: 'К ПРАВИЛАМ', art: 'ОТКРЫТЫЙ КОД. ОТКРЫТОЕ СООБЩЕСТВО.',
    introLabel: 'ПРЕАМБУЛА', introTitle: 'Сначала немного контекста.', intro: ['Маленькая преамбула, на которую всем похуй в 99% случаев:', 'Репозитории KPM всегда были и будут полностью OSS. Весь исходный код плагинов открыт, любой желающий может зайти и посмотреть.', 'Ну а теперь к правилам. Как подавать плагин, вы и так в курсе, не глупые.'],
    contents: 'СОДЕРЖАНИЕ', sideNote: 'НЕ МНОГО БУКВ.\nНО ВАЖНЫЕ.', part: 'ЧАСТЬ',
    sections: [
      { id: 'security', title: 'Безопасность', symbol: '✳', rules: [
        'Плагин, который невозможно нормально и полностью проверить, идёт нахуй.',
        'Любой вредоносный код с целью заразить устройство — сразу нахуй.',
        'Если в плагине есть DEX или .so, мы вправе вскрыть их и проверить на вирусы.',
        'Держите .dex и .so внутри самого плагина. Скачивание бинарников из сети расценивается как прямая угроза подмены кода.',
        'Если информации мало, мы можем запросить исходники .so или DEX. Отказ — идёте нахуй.',
        'Телеметрия не запрещена, мы даже не против. Но только если вы не собираете чувствительные данные пользователей.',
      ] },
      { id: 'requirements', title: 'Общие требования', symbol: '✦', rules: [
        'Плагин не должен быть тупым нейрослопом, в котором автор сам без понятия, как оно работает. Юзать ИИ можно, но только если вы понимаете, что делаете.',
        'Никаких клонов уже существующих плагинов с нулевыми отличиями и без новых фич.',
        'Плагины для спама, докса и прочей хуйни здесь не публикуются.',
        'Не публикуем плагины, которые крутят или подменяют бейджи (исключение — отметки авторов и ссылки на оф. каналы).',
        'Если вы искусственно раздуваете вес плагина без понятной причины, мы откажем в публикации и отправим чистить.',
      ] },
      { id: 'other', title: 'Прочая хуйня', symbol: '✺', rules: [
        'Если установите плагины вне каталога KPM, а там будет вирус — разгребайте сами, репозиторий за это ответственности не несёт.',
        'Публиковать чужие плагины можно, но только если они проходят по всем правилам выше.',
        'Чётких сроков проверки нет. Если кажется, что про вас забыли, — можно напомнить. Нас всего 7 человек, а активно разбирает заявки вообще один. Такие дела.',
        'Правила можем обновить в любой момент. Если что-то изменится, напишем прямо в этой теме.',
      ] },
    ],
    outroLabel: 'ВОТ И ВСЁ', outroTitle: 'Спасибо, что прочитали', outroText: 'Оригинал и обновления правил — в Telegram.', source: 'ОТКРЫТЬ В TELEGRAM', footer: 'СДЕЛАНО ДЛЯ СООБЩЕСТВА', back: 'НАВЕРХ',
  },
  en: {
    header: 'PUBLISHING RULES', language: 'Choose language', switchUi: 'Switch to Needy UI', themeLabel: 'Color theme', light: 'Light', dark: 'Dark', system: 'System', eyebrow: 'KPM / FOR PLUGIN AUTHORS',
    title: 'Good plugins.', titleAccent: 'Honest rules', subtitle: 'Everything you need to know before publishing a plugin in Kangel Plugins Manager.', explore: 'EXPLORE THE RULES', art: 'OPEN SOURCE. OPEN COMMUNITY.',
    introLabel: 'THE PREAMBLE', introTitle: 'First, a little context.', intro: ["A little preamble that 99% of people won't give a fuck about.", 'KPM repositories have always been and will always remain fully OSS (Open Source Software). This means that every plugin must include its complete source code, allowing anyone to inspect and review it.', "Now, onto the publishing rules. You already know how to submit a plugin, so let's get straight to the point."],
    contents: 'CONTENTS', sideNote: 'NOT MANY WORDS.\nBUT IMPORTANT ONES.', part: 'PART',
    sections: [
      { id: 'security', title: 'Security', symbol: '✳', rules: [
        'A plugin that can’t be properly and fully tested can go fuck itself.',
        'Any malicious code intended to infect a device — straight to fuck-all.',
        'If a plugin contains DEX or .so files, we reserve the right to open them and check them for viruses.',
        'Keep .dex and .so files inside the plugin itself. Downloading binaries from the network is considered a direct threat of code substitution.',
        'If there’s not enough information, we may request the source files—specifically .so or DEX files. If you refuse, then go fuck yourself.',
        'Telemetry is not prohibited—we don’t even mind it. But that’s only provided you don’t collect sensitive user data.',
      ] },
      { id: 'requirements', title: 'General requirements', symbol: '✦', rules: [
        'A plugin shouldn’t just be some mindless AI-generated slop where the author has no clue how it actually works. You can use AI, but only if you understand what you’re doing.',
        'No clones of existing plugins that offer zero differences and no new features.',
        'Plugins for spam, doxxing and other crap are not published here.',
        'We do not publish plugins that manipulate or replace badges (with the exception of author attributions and links to official channels).',
        'If you artificially inflate the size of your plugin without a clear reason, we will reject its publication and ask you to clean it up.',
      ] },
      { id: 'other', title: 'Other crap', symbol: '✺', rules: [
        'If you install plugins outside the KPM directory and one of them turns out to be a virus, you’re on your own—the repository bears no responsibility for that.',
        'You may publish plugins created by others, but only if they comply with all the rules mentioned above.',
        'There’s no set timeframe for the review process. If it feels like you’ve been forgotten, feel free to send a reminder. There are only 7 of us in total, and in reality, only two-three person is actively processing applications. That’s just how things are.',
        'We may update the rules at any time. If anything changes, we will post an update right here in this thread.',
      ] },
    ],
    outroLabel: 'THAT’S IT', outroTitle: 'Thanks for reading', outroText: 'Find the original and rule updates on Telegram.', source: 'OPEN IN TELEGRAM', footer: 'MADE FOR THE COMMUNITY', back: 'BACK TO TOP',
  },
}
