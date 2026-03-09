type TranslationKeys =
  | "aboutMini.title"
  | "aboutMini.paragraph1"
  | "aboutMini.paragraph2"
  | "aboutMini.paragraph3"
  | "aboutMini.paragraph4"
  | "button.learnMore"
  | "aboutMini.title"
  | "aboutMini.paragraph1"
  | "aboutMini.paragraph2"
  | "aboutMini.paragraph3"
  | "aboutMini.paragraph4"
  | "button.learnMore"
  | "footer.copyright"
  | "footer.subtitle"
  | "aboutMini.title"
  | "aboutMini.paragraph1"
  | "aboutMini.paragraph2"
  | "aboutMini.paragraph3"
  | "aboutMini.paragraph4"
  | "aboutMini.paragraph5"
  | "button.learnMore"
  | "footer.copyright"
  | "footer.subtitle"
  | "header.home"
  | "header.about"
  | "header.WorkInfoSection"
  | "header.contacts"
  | "aboutMini.title"
  | "aboutMini.paragraph1"
  | "aboutMini.paragraph2"
  | "aboutMini.paragraph3"
  | "aboutMini.paragraph4"
  | "button.learnMore"
  | "button.bookAppointment"
  | "footer.copyright"
  | "footer.subtitle"
  | "header.home"
  | "header.about"
  | "header.WorkInfoSection"
  | "header.contacts"
  | "hero.schoolTitle"
  | "hero.subtitle"
  | "hero.ability.one"
  | "hero.ability.two"
  | "hero.ability.three"
  | "hero.ability.four"
  | "meta.title"
  | "meta.description"
  | "servicesList.title"
  | "servicesList.courseOne"
  | "servicesList.courseTwo"
  | "servicesList.courseThree"
  | "servicesList.courseFour"
  | "servicesList.courseFive"
  | "servicesList.courseSix"
  | "servicesList.button"
  | "servicesList.courseOne.item1"
  | "servicesList.courseOne.item2"
  | "servicesList.courseOne.item3"
  | "servicesList.courseOne.item4"
  | "servicesList.courseTwo.item1"
  | "servicesList.courseTwo.item2"
  | "servicesList.courseTwo.item3"
  | "servicesList.courseTwo.item4"
  | "servicesList.courseThree.item1"
  | "servicesList.courseThree.item2"
  | "servicesList.courseThree.item3"
  | "servicesList.courseThree.item4"
  | "servicesList.courseFour.item1"
  | "servicesList.courseFour.item2"
  | "servicesList.courseFour.item3"
  | "servicesList.courseFour.item4"
  | "servicesList.courseFive.item1"
  | "servicesList.courseFive.item2"
  | "servicesList.courseFive.item3"
  | "servicesList.courseFive.item4"
  | "servicesList.courseSix.item1"
  | "servicesList.courseSix.item2"
  | "servicesList.courseSix.item3"
  | "servicesList.courseSix.item4"
  | "workFormat.title"
  | "workFormat.paragraph1"
  | "workFormat.paragraph2"
  | "workFormat.advantages"
  | "workFormat.advantageOne"
  | "workFormat.advantageTwo"
  | "workFormat.advantageThree"
  | "workFormat.advantageFour"
  | "workFormat.individualTitle"
  | "workFormat.individualDescription"
  | "workFormat.individualPrice"
  | "workFormat.familyTitle"
  | "workFormat.groupDescription1"
  | "workFormat.groupDescription2"
  | "workFormat.groupPrice"
  | "workFormat.button"
  | "errorTitle"
  | "errorMessage"
  | "backHome"
  | "titleNotFound"
  | "descriptionNotFound"
  | "homeButtonNotFound"
  | "backButtonNotFound"
  | "metaTitleNotFound"
  | "metaDescriptionNotFound"
  | "chargingTheDayForSuccess"
  | "workStartTitle"
  | "workStartDescription"
  | "workFormatsTitle"
  | "workFormatsDescription"
  | "workOrganizationalTitle"
  | "workOrganizationalDescription"
  | "workSimpleTitle"
  | "workSimpleDescription"
  | "workStartTitle"
  | "workStartDescription"
  | "workFormatsTitle"
  | "workFormatsDescription"
  | "workOrganizationalTitle"
  | "workOrganizationalDescription"
  | "workSimpleTitle"
  | "workSimpleDescription"
  | "footerSubtitle"
  | "footerContactTitle"
  | "modal.call"
  | "modal.close"
  | "modal.ask"
  | "workSectionBottom"
  |"teachers.title"
|"teachers.description"
|"teachers.teacher1.name"
|"teachers.teacher1.subjects"
|"teachers.teacher1.bio"
|"teachers.teacher2.name"
|"teachers.teacher2.subjects"
|"teachers.teacher2.bio"
|"teachers.teacher3.name"
|"teachers.teacher3.subjects"
|"teachers.teacher3.bio"
|"formats.title"
|"formats.individual.title"
|"formats.individual.desc"
|"formats.individual.benefit1"
|"formats.individual.benefit2"
|"formats.individual.benefit3"
|"formats.individual.benefit4"
|"formats.group.title"
|"formats.group.desc"
|"formats.group.benefit1"
|"formats.group.benefit2"
|"formats.group.benefit3"
|"formats.group.benefit4"
|"formats.button"
|"footerSubtitle"
  ;

type Translations = {
  [key in TranslationKeys]: string | Array<string>;
};
export const translations: Record<"UA" | "RU" | "EN", Translations> = {
  UA: {
    "aboutMini.title": "Наша школа — це більше, ніж підготовка до іспитів",
    "aboutMini.paragraph1":
      "Ми — онлайн-школа природничих наук, де допомагаємо учням і студентам зрозуміти складні теми з біології, хімії та інших предметів просто й доступно.",
    "aboutMini.paragraph2":
      "Ми готуємо до НМТ, вступних іспитів у коледжі та університети, а також допомагаємо покращити успішність у школі чи університеті.",
    "aboutMini.paragraph3":
      "Наші викладачі — фахівці з практичним досвідом, які пояснюють складні теми зрозумілою мовою.",
    "aboutMini.paragraph4":
      "Навчання проходить у зручному онлайн-форматі: індивідуально або в невеликих групах.",
    "aboutMini.paragraph5":
      "Наша мета — не лише підготувати до іспитів, а й сформувати впевненість у власних знаннях та інтерес до науки.",

    "button.learnMore": "Дізнатися більше",

    "footer.copyright": "© {year} Карпич Владислав Сергійович",
    "footer.subtitle": "Онлайн-репетитори",

    "header.home": "Головна",
    "header.about": "Про нас",
    "header.WorkInfoSection": "Як ми працюємо",
    "header.contacts": "Контакти",

    "hero.schoolTitle": "Онлайн-школа природничих наук",
    "hero.subtitle":
      "Допомагаємо зрозуміти науку, а не просто запам’ятовувати факти",

    "hero.ability.one": "Підготовка до НМТ",
    "hero.ability.two": "Підготовка до КРОК",
    "hero.ability.three": "Підготовка до вступу",
    "hero.ability.four": "Поглиблене вивчення предметів",

    "button.bookAppointment": "Записатися на пробне заняття",

    "meta.title": "Онлайн-репетитори: підготовка до НМТ та вступу",
    "meta.description":
      "Онлайн-репетитори з біології, хімії, математики та медичних дисциплін. Підготовка до НМТ, КРОК та вступних іспитів.",

    "servicesList.title": "Наші курси",

    "servicesList.courseOne": "Хімія",
    "servicesList.courseTwo": "Біологія",
    "servicesList.courseThree": "Математика",
    "servicesList.courseFour": "Фізіологія",
    "servicesList.courseFive": "Гістологія",
    "servicesList.courseSix": "Латинська мова",

    "servicesList.button": "Дізнатись більше",

    "servicesList.courseOne.item1": "Підготовка до НМТ з хімії",
    "servicesList.courseOne.item2": "Пояснення складних тем простими словами",
    "servicesList.courseOne.item3": "Розбір тестових завдань",
    "servicesList.courseOne.item4": "Системне розуміння предмета",

    "servicesList.courseTwo.item1": "Підготовка до НМТ з біології",
    "servicesList.courseTwo.item2": "Розбір складних тем",
    "servicesList.courseTwo.item3": "Практичні завдання та тести",
    "servicesList.courseTwo.item4": "Підготовка до вступу",

    "servicesList.courseThree.item1": "Пояснення шкільної програми",
    "servicesList.courseThree.item2": "Підготовка до контрольних та іспитів",
    "servicesList.courseThree.item3": "Розвиток логічного мислення",
    "servicesList.courseThree.item4": "Індивідуальний підхід",

    "servicesList.courseFour.item1": "Поглиблене вивчення фізіології",
    "servicesList.courseFour.item2": "Допомога студентам медичних спеціальностей",
    "servicesList.courseFour.item3": "Пояснення складних процесів організму",
    "servicesList.courseFour.item4": "Підготовка до іспитів",

    "servicesList.courseFive.item1": "Вивчення тканин організму",
    "servicesList.courseFive.item2": "Пояснення складних тем",
    "servicesList.courseFive.item3": "Підготовка до медичних іспитів",
    "servicesList.courseFive.item4": "Практичні завдання та тести",

    "servicesList.courseSix.item1": "Основи медичної латини",
    "servicesList.courseSix.item2": "Медична термінологія",
    "servicesList.courseSix.item3": "Підготовка до заліків та іспитів",
    "servicesList.courseSix.item4": "Зручні пояснення та приклади",

    "workFormat.title": "Формат нашої роботи",

    "workFormat.paragraph1":
      "Ми допомагаємо учням та студентам зрозуміти складні теми з природничих наук і підготуватися до важливих іспитів.",

    "workFormat.paragraph2":
      "Заняття проходять онлайн у зручний для вас час через популярні платформи відеозв'язку. Такий формат дозволяє навчатися з будь-якого місця.",

    "workFormat.individualTitle": "Індивідуальні заняття",

    "workFormat.individualDescription":
      "Індивідуальний формат дозволяє зосередитися саме на ваших потребах та темпі навчання.",

    "workFormat.individualPrice": "Вартість уточнюється",

    "workFormat.familyTitle": "Групові заняття",

    "workFormat.groupDescription1":
      "Невеликі групи дозволяють поєднати індивідуальну увагу викладача та активне обговорення матеріалу.",

    "workFormat.groupDescription2":
      "Такий формат підходить учням, яким комфортно навчатися разом з іншими.",

    "workFormat.groupPrice": "Вартість уточнюється",

    "workFormat.advantages": "Наші переваги",

    "workFormat.advantageOne": "Авторські навчальні програми",
    "workFormat.advantageTwo": "Сучасні методики викладання",
    "workFormat.advantageThree": "Велика база тестів",
    "workFormat.advantageFour": "Індивідуальний підхід",

    "workFormat.button": "Записатися на заняття",

    "errorTitle": "Щось пішло не так...",
    "errorMessage":
      "Вибачте, сталася помилка. Спробуйте перезавантажити сторінку або поверніться на головну.",
    "backHome": "Повернутись на головну",

    "titleNotFound": "404",
    "descriptionNotFound": "Сторінку не знайдено.",
    "homeButtonNotFound": "На головну",
    "backButtonNotFound": "Назад",

    "metaTitleNotFound": "404 — Сторінка не знайдена",
    "metaDescriptionNotFound": "Запитувана сторінка не існує.",

    "chargingTheDayForSuccess": "Готуємо новий день для успіху...",

    "workStartTitle": "Як починається навчання?",
    "workStartDescription":
      "Після запису ми проводимо коротку консультацію та визначаємо рівень знань учня. Разом формуємо індивідуальний план навчання.",

    "workFormatsTitle": "Як проходять заняття?",
    "workFormatsDescription":
      "Можливі індивідуальні або групові заняття. Формат підбирається залежно від цілей та рівня підготовки.",

    "workOrganizationalTitle": "Організаційні моменти",
    "workOrganizationalDescription":
      "Тривалість заняття — приблизно 50–60 хвилин. Рекомендована частота — 1–2 рази на тиждень.",

    "workSimpleTitle": "Простими словами",
    "workSimpleDescription":
      "Ваше завдання — прийти на заняття. Наше — допомогти вам зрозуміти матеріал.",

    "footerContactTitle": "Контактна інформація:",

    "modal.call": "Зателефонувати",
    "modal.close": "Закрити",
    "modal.ask": "Як вам зручніше записатися?",

    "workSectionBottom": "Разом ми досягнемо результату",



    "teachers.title": "Наші викладачі",

"teachers.description":
"У нашій школі працюють викладачі з реальним досвідом підготовки до НМТ, вступних іспитів та медичних тестів. Ми не просто пояснюємо матеріал — ми допомагаємо зрозуміти логіку науки та навчитися мислити самостійно.",

"teachers.teacher1.name": "Олена Коваль",
"teachers.teacher1.subjects": "Біологія, Хімія",
"teachers.teacher1.bio":
"Викладач із понад 10-річним досвідом підготовки до НМТ та вступних іспитів. Допомагаю учням систематизувати знання та впевнено складати іспити.",

"teachers.teacher2.name": "Ігор Мельник",
"teachers.teacher2.subjects": "Фізика, Математика",
"teachers.teacher2.bio":
"Пояснюю складні теми просто та зрозуміло. Використовую приклади з реального життя, щоб показати практичне застосування науки.",

"teachers.teacher3.name": "Марія Шевченко",
"teachers.teacher3.subjects": "Хімія, Біологія",
"teachers.teacher3.bio":
"Допомагаю учням полюбити природничі науки та зрозуміти логіку предметів. Моя мета — зробити навчання цікавим і результативним.",
"footerSubtitle": "Репетитор онлайн",




"formats.title": "Формати навчання",

"formats.individual.title": "Індивідуальне навчання",
"formats.individual.desc":
"Персональний формат занять, де вся увага викладача зосереджена на одному учневі. Програма підбирається відповідно до рівня знань, темпу навчання та цілей.",

"formats.individual.benefit1": "Гнучкий графік занять",
"formats.individual.benefit2": "Програма під рівень учня",
"formats.individual.benefit3": "Максимум уваги від викладача",
"formats.individual.benefit4": "Швидший прогрес у навчанні",

"formats.group.title": "Навчання у групах",
"formats.group.desc":
"Групові заняття проходять у невеликих командах учнів зі схожим рівнем підготовки. Це дозволяє поєднати ефективне навчання з підтримкою однодумців.",

"formats.group.benefit1": "Мотивація та підтримка однодумців",
"formats.group.benefit2": "Доступніша вартість занять",
"formats.group.benefit3": "Обговорення та дискусії",
"formats.group.benefit4": "Структурована навчальна програма",

"formats.button": "Записатися",

  },

  RU: {   "aboutMini.title": "Наша школа — это больше, чем подготовка к экзаменам",
    "aboutMini.paragraph1": "Мы — онлайн-школа естественных наук, где помогаем студентам и школьникам легко понимать биологию, химию и другие предметы.",
    "aboutMini.paragraph2": "Готовим к НМТ, вступительным экзаменам и помогаем повышать успеваемость.",
    "aboutMini.paragraph3": "Наши преподаватели — эксперты с практическим опытом, объясняют материал простым языком.",
    "aboutMini.paragraph4": "Обучение проходит онлайн: индивидуально или в небольших группах.",
    "aboutMini.paragraph5": "Наша цель — не только подготовить к экзаменам, но и развить уверенность в знаниях и интерес к науке.",
    "button.learnMore": "Узнать больше",
    "footer.copyright": "© {year} Карпич Владислав Сергійович",
    "footer.subtitle": "Онлайн репетиторы",
    "header.home": "Главная",
    "header.about": "О нас",
    "header.WorkInfoSection": "Как мы работаем",
    "header.contacts": "Контакты",
    "hero.schoolTitle": "Онлайн школа естественных наук",
    "hero.subtitle": "Помогаем понять науку, а не просто заучивать факты",
    "hero.ability.one": "Подготовка к НМТ",
    "hero.ability.two": "Подготовка к КРОК",
    "hero.ability.three": "Вступительные экзамены",
    "hero.ability.four": "Углублённое изучение предметов",
    "button.bookAppointment": "Записаться на пробное занятие",
    "meta.title": "підготовка до НМТ та вступу",
    "meta.description":
      "підготовка до НМТ та вступу, онлайн школа, КРОК, НМТ, біологія, химія, фізіологія",
    "servicesList.button": "Дізнатись курси",
    "servicesList.title": "Наші курси",
    "servicesList.courseOne": "Хімия",
    "servicesList.courseTwo": "Біологія",
    "servicesList.courseThree": "Математика",
    "servicesList.courseFour": "Фізіологія",
    "servicesList.courseFive": "Гістологія",
    "servicesList.courseSix": "Латінська мова",
    "servicesList.courseOne.item1": "химия такая",
    "servicesList.courseOne.item2": "химия сякая",
    "servicesList.courseOne.item3": "и к нмт и для себя",
    "servicesList.courseOne.item4": "Вах, какая песня",
    "servicesList.courseTwo.item1": "Біологія такая",
    "servicesList.courseTwo.item2": "Біологія сякая",
    "servicesList.courseTwo.item3": "и к нмт и для себя",
    "servicesList.courseTwo.item4": "Вах, какая песня",
    "servicesList.courseThree.item1": "Математика такая",
    "servicesList.courseThree.item2": "Математика сякая",
    "servicesList.courseThree.item3": "и к нмт и для себя",
    "servicesList.courseThree.item4": "Вах, какая песня",
    "servicesList.courseFour.item1": "Фізіологія такая",
    "servicesList.courseFour.item2": "Фізіологія сякая",
    "servicesList.courseFour.item3": "и к нмт и для себя",
    "servicesList.courseFour.item4": "Вах, какая песня",
    "servicesList.courseFive.item1": "Гістологія такая",
    "servicesList.courseFive.item2": "Гістологія сякая",
    "servicesList.courseFive.item3": "и к нмт и для себя",
    "servicesList.courseFive.item4": "Вах, какая песня",
    "servicesList.courseSix.item1": "Латінська мова такая",
    "servicesList.courseSix.item2": "Латінська мова сякая",
    "servicesList.courseSix.item3": "и к нмт и для себя",
    "servicesList.courseSix.item4": "Вах, какая песня",
    "workFormat.title": "Формат нашої роботи",
    "workFormat.paragraph1":
      "Мы короче очень хорошо работаем уже много лет подряд, нам не страшкодоверить детей, взрослых и домашних животных. Ясен пень, что мы профессионалы и вообще красавчики",
    "workFormat.paragraph2":
      "Онлайн-уроки здійснюються через Skype, Zoom, Viber, Whatsapp, Telegram, FaceTime. Онлайн-уроки є такімі ж ефективними, як і особисті зустрічі.",
    "workFormat.individualTitle": "workFormat.individualTitle",
    "workFormat.individualDescription": "workFormat.individualDescription",
    "workFormat.advantages": "Наши преимущества",
    "workFormat.advantageOne": "У нас есть свои уникальные учебные планы.",
    "workFormat.advantageTwo":
      "Методические материалы подобраны под каждый предмет",
    "workFormat.advantageThree": "Есть база тестов",
    "workFormat.advantageFour": "Индивидуальній подход, яхз",
    "workFormat.individualPrice": "Записывайтесь на пробный урок",
    "workFormat.familyTitle": "Семейное консультирование",
    "workFormat.groupDescription1":
      "Семейное консультирование и психотерапия пар направлены на коррекцию отношений и устранение эмоциональных трудностей в семье.",
    "workFormat.groupDescription2":
      "Работа ведётся со всеми членами семьи, которые испытывают трудности в общении. Чаще всего пары приходят для восстановления, реабилитации и обновления отношений.",
    "workFormat.groupPrice": "1300 ₴ — 75 минут",
    "workFormat.button": "Записаться на консультацию",
    "errorTitle": "Что-то пошло не так...",
    "errorMessage":
      "Извините, произошла ошибка. Пожалуйста, попробуйте перезагрузить страницу или вернитесь на главную.",
    "backHome": "Вернуться на главную",
    "titleNotFound": "404",
    "descriptionNotFound":
      "Иногда нам сложно найти даже себя. Что уже говорить об этой странице?..",
    "homeButtonNotFound": "Вернуться на главную",
    "backButtonNotFound": "Назад",
    "metaTitleNotFound": "404 — Страница не найдена",
    "metaDescriptionNotFound": "Извините, запрашиваемая страница не существует.",
    "chargingTheDayForSuccess": "Заряжаем день на успех...",
    "workStartTitle": "Как мы начнем работать?",
    "workStartDescription":
      "Наше знакомство всегда начинается с предварительной записи. Вы можете написать мне сообщение или оставить заявку на сайте — мы подберем удобное для вас время.\n\nНа первой консультации мы спокойно обсудим, что вас привело ко мне. Неважно, есть ли у вас готовая тема для разговора или просто ощущение, что «что-то не так» — моя задача помочь разобраться.\n\nПервая встреча длится 50 минут.",
    "workFormatsTitle": "Как проходят консультации?",
    "workFormatsDescription":
      "Существует два формата работы:\n\nКраткосрочные консультации (5-10 встреч) — если вы хотите решить конкретный вопрос или ситуацию.\n\nДлительная терапия (от 10 встреч) — если важно глубже проработать внутренние причины, изменить привычные сценарии и отношения.\n\nВместе мы определим, какой путь подойдет именно вам.",
    "workOrganizationalTitle": "Несколько организационных моментов",
    "workOrganizationalDescription":
      "Чтобы наше сотрудничество было комфортным:\n\nКонсультация длится 50 минут.\nРекомендуемая частота встреч — 1 раз в неделю.\nОнлайн-сессии проходят по предоплате.\n\nЕсли не получается прийти — прошу предупредить минимум за 24 часа. В противном случае, сессия считается проведенной.\n\nЕсли вы опаздываете — мы работаем оставшееся время.\n\nВажно: я не даю советов «как правильно жить». Вместо этого — помогаю вам услышать себя и принять собственные решения.",
    "workSimpleTitle": "Простыми словами",
    "workSimpleDescription":
      "Вы можете прийти ко мне, даже если не знаете, с чего начать.\nВаша задача — просто прийти, моя — помочь вам найти ответы.",
    "footerContactTitle": "Контактная информация:",
    "footerSubtitle": "Репетитор онлайн",
    "modal.call": "Позвонить",
    "modal.close": "Закрыть",
    "modal.ask": "Как вам удобнее записаться?",
    "workSectionBottom": "Ваше место силы",
     "teachers.title": "Наши преподаватели",
  "teachers.description":
    "В нашей школе работают преподаватели с реальным опытом подготовки к НМТ, вступительным экзаменам и медицинским тестам. Мы не просто объясняем материал — мы помогаем понять логику науки и научиться мыслить самостоятельно.",
  "teachers.teacher1.name": "Олена Коваль",
  "teachers.teacher1.subjects": "Биология, Химия",
  "teachers.teacher1.bio":
    "Преподаватель с более чем 10-летним опытом подготовки к НМТ и вступительным экзаменам. Помогаю ученикам систематизировать знания и уверенно сдавать экзамены.",
  "teachers.teacher2.name": "Игорь Мельник",
  "teachers.teacher2.subjects": "Физика, Математика",
  "teachers.teacher2.bio":
    "Объясняю сложные темы просто и понятно. Использую примеры из реальной жизни, чтобы показать практическое применение науки.",
  "teachers.teacher3.name": "Мария Шевченко",
  "teachers.teacher3.subjects": "Химия, Биология",
  "teachers.teacher3.bio":
    "Помогаю ученикам полюбить естественные науки и понять логику предметов. Моя цель — сделать обучение интересным и результативным.",

  "formats.title": "Форматы обучения",
  "formats.individual.title": "Индивидуальное обучение",
  "formats.individual.desc":
    "Персональный формат занятий, где всё внимание преподавателя сосредоточено на одном ученике. Программа подбирается в соответствии с уровнем знаний, темпом обучения и целями.",
  "formats.individual.benefit1": "Гибкий график занятий",
  "formats.individual.benefit2": "Программа под уровень ученика",
  "formats.individual.benefit3": "Максимум внимания от преподавателя",
  "formats.individual.benefit4": "Более быстрый прогресс в обучении",

  "formats.group.title": "Обучение в группах",
  "formats.group.desc":
    "Групповые занятия проходят в небольших командах учеников с похожим уровнем подготовки. Это позволяет сочетать эффективное обучение с поддержкой единомышленников.",
  "formats.group.benefit1": "Мотивация и поддержка единомышленников",
  "formats.group.benefit2": "Более доступная стоимость занятий",
  "formats.group.benefit3": "Обсуждения и дискуссии",
  "formats.group.benefit4": "Структурированная учебная программа",

  "formats.button": "Записаться"
  },
  EN: {
    "aboutMini.title": "Our school is more than exam preparation",
    "aboutMini.paragraph1": "We are an online school of natural sciences helping students easily understand biology, chemistry, and other subjects.",
    "aboutMini.paragraph2": "We prepare students for entrance exams and help improve school performance.",
    "aboutMini.paragraph3": "Our teachers are experts with practical experience, explaining complex topics clearly.",
    "aboutMini.paragraph4": "Lessons are held online: individually or in small groups.",
    "aboutMini.paragraph5": "Our goal is not only to prepare for exams but to build confidence in knowledge and interest in science.",
    "button.learnMore": "Learn More",
    "footer.copyright": "© {year} Borysenko Volodymyr Vasylovych",
    "footer.subtitle": "Online tutors",
    "header.home": "Home",
    "header.about": "About us",
    "header.WorkInfoSection": "How we work",
    "header.contacts": "Contacts",
    "hero.schoolTitle": "Online School of Natural Sciences",
    "hero.subtitle": "We teach understanding science, not just memorizing facts",
    "hero.ability.one": "NMT Preparation",
    "hero.ability.two": "KROK Preparation",
    "hero.ability.three": "Entrance Exams",
    "hero.ability.four": "Advanced Subject Study",
    "button.bookAppointment": "Book a trial lesson",
    "meta.title": "Онлайн школа природничих наук",
    "meta.description":
      "підготовка до НМТ та вступу, онлайн школа, КРОК, НМТ, біологія, химія, фізіологія",
    "servicesList.button": "Дізнатись курси",
    "servicesList.title": "Наші курси",
    "servicesList.courseOne": "Хімия",
    "servicesList.courseTwo": "Біологія",
    "servicesList.courseThree": "Математика",
    "servicesList.courseFour": "Фізіологія",
    "servicesList.courseFive": "Гістологія",
    "servicesList.courseSix": "Латінська мова",
    "servicesList.courseOne.item1": "химия такая",
    "servicesList.courseOne.item2": "химия сякая",
    "servicesList.courseOne.item3": "и к нмт и для себя",
    "servicesList.courseOne.item4": "Вах, какая песня",
    "servicesList.courseTwo.item1": "Біологія такая",
    "servicesList.courseTwo.item2": "Біологія сякая",
    "servicesList.courseTwo.item3": "и к нмт и для себя",
    "servicesList.courseTwo.item4": "Вах, какая песня",
    "servicesList.courseThree.item1": "Математика такая",
    "servicesList.courseThree.item2": "Математика сякая",
    "servicesList.courseThree.item3": "и к нмт и для себя",
    "servicesList.courseThree.item4": "Вах, какая песня",
    "servicesList.courseFour.item1": "Фізіологія такая",
    "servicesList.courseFour.item2": "Фізіологія сякая",
    "servicesList.courseFour.item3": "и к нмт и для себя",
    "servicesList.courseFour.item4": "Вах, какая песня",
    "servicesList.courseFive.item1": "Гістологія такая",
    "servicesList.courseFive.item2": "Гістологія сякая",
    "servicesList.courseFive.item3": "и к нмт и для себя",
    "servicesList.courseFive.item4": "Вах, какая песня",
    "servicesList.courseSix.item1": "Латінська мова такая",
    "servicesList.courseSix.item2": "Латінська мова сякая",
    "servicesList.courseSix.item3": "и к нмт и для себя",
    "servicesList.courseSix.item4": "Вах, какая песня",
    "workFormat.title": "Формат нашої роботи",
    "workFormat.paragraph1":
      "Мы короче очень хорошо работаем уже много лет подряд, нам не страшкодоверить детей, взрослых и домашних животных. Ясен пень, что мы профессионалы и вообще красавчики",
    "workFormat.paragraph2":
      "Онлайн-уроки здійснюються через Skype, Zoom, Viber, Whatsapp, Telegram, FaceTime. Онлайн-уроки є такімі ж ефективними, як і особисті зустрічі.",
    "workFormat.individualTitle": "workFormat.individualTitle",
    "workFormat.individualDescription": "workFormat.individualDescription",
    "workFormat.advantages": "Наши преимущества",
    "workFormat.advantageOne": "У нас есть свои уникальные учебные планы.",
    "workFormat.advantageTwo":
      "Методические материалы подобраны под каждый предмет",
    "workFormat.advantageThree": "Есть база тестов",
    "workFormat.advantageFour": "Индивидуальній подход, яхз",
    "workFormat.individualPrice": "1000 ₴ — 50 minutes",
    "workFormat.familyTitle": "Family Counseling",
    "workFormat.groupDescription1":
      "Family counseling and couples therapy aimed at correcting relationships and resolving emotional difficulties within the family.",
    "workFormat.groupDescription2":
      "Work is carried out with all family members who experience communication difficulties. Most often, couples come for restoration, rehabilitation, and relationship renewal.",
    "workFormat.groupPrice": "1300 ₴ — 75 minutes",
    "workFormat.button": "Book an appointment",
    "errorTitle": "Something went wrong...",
    "errorMessage":
      "Sorry, an error occurred. Please try refreshing the page or go back to the homepage.",
    "backHome": "Go back home",
    "titleNotFound": "404",
    "descriptionNotFound":
      "Sometimes it's hard to find even ourselves. Let alone this page...",
    "homeButtonNotFound": "Go to Homepage",
    "backButtonNotFound": "Back",
    "metaTitleNotFound": "404 — Page Not Found",
    "metaDescriptionNotFound": "Sorry, the requested page does not exist.",
    "chargingTheDayForSuccess": "Charging the day for success...",
    "workStartTitle": "How Will We Start Working Together?",
    "workStartDescription":
      "Our acquaintance always begins with a scheduled appointment. You can send me a message or leave a request on the website — we’ll find a convenient time for you.\n\nDuring the first consultation, we will calmly discuss what brought you to me. It doesn’t matter if you have a clear topic to discuss or just a feeling that 'something’s not right' — my task is to help you figure it out.\n\nThe first meeting lasts 50 minutes.",
    "workFormatsTitle": "How Do Consultations Work?",
    "workFormatsDescription":
      "There are two formats of work:\n\nShort-term consultations (5-10 sessions) — if you want to resolve a specific issue or situation.\n\nLong-term therapy (from 10 sessions) — if it’s important to deeply work through internal causes, change habitual patterns and relationships.\n\nTogether we will determine which path suits you best.",
    "workOrganizationalTitle": "A Few Organizational Points",
    "workOrganizationalDescription":
      "To make our collaboration comfortable:\n\nA consultation lasts 50 minutes.\nRecommended frequency — once a week.\nOnline sessions are prepaid.\n\nIf you can’t attend — please notify me at least 24 hours in advance. Otherwise, the session is considered held.\n\nIf you’re late — we work for the remaining time.\n\nImportant: I don’t give advice on 'how to live correctly.' Instead, I help you hear yourself and make your own decisions.",
    "workSimpleTitle": "In Simple Terms",
    "workSimpleDescription":
      "You can come to me even if you don’t know where to start.\nYour task is simply to come, and mine — to help you find the answers.",
    "footerContactTitle": "Contact Information:",
    "footerSubtitle": "",
    "modal.ask": "How would you prefer to book an appointment?",
    "modal.call": "Call",
    "modal.close": "Close window",
    "workSectionBottom": "Your place of power",
     "teachers.title": "Our Teachers",
  "teachers.description":
    "Our school employs teachers with real experience preparing students for NMT, entrance exams, and medical tests. We don't just explain the material — we help students understand the logic of science and learn to think independently.",
  "teachers.teacher1.name": "Olena Koval",
  "teachers.teacher1.subjects": "Biology, Chemistry",
  "teachers.teacher1.bio":
    "A teacher with over 10 years of experience preparing students for NMT and entrance exams. I help students organize their knowledge and confidently pass exams.",
  "teachers.teacher2.name": "Ihor Melnyk",
  "teachers.teacher2.subjects": "Physics, Mathematics",
  "teachers.teacher2.bio":
    "I explain complex topics simply and clearly. I use real-life examples to show the practical application of science.",
  "teachers.teacher3.name": "Maria Shevchenko",
  "teachers.teacher3.subjects": "Chemistry, Biology",
  "teachers.teacher3.bio":
    "I help students fall in love with natural sciences and understand the logic of subjects. My goal is to make learning interesting and effective.",

  "formats.title": "Learning Formats",
  "formats.individual.title": "Individual Learning",
  "formats.individual.desc":
    "A personal format where the teacher's full attention is focused on one student. The program is tailored according to the student's knowledge level, learning pace, and goals.",
  "formats.individual.benefit1": "Flexible schedule",
  "formats.individual.benefit2": "Program tailored to student level",
  "formats.individual.benefit3": "Maximum attention from the teacher",
  "formats.individual.benefit4": "Faster progress in learning",

  "formats.group.title": "Group Learning",
  "formats.group.desc":
    "Group lessons take place in small teams of students with similar preparation levels. This allows combining effective learning with peer support.",
  "formats.group.benefit1": "Motivation and support from peers",
  "formats.group.benefit2": "More affordable tuition",
  "formats.group.benefit3": "Discussions and debates",
  "formats.group.benefit4": "Structured curriculum",

  "formats.button": "Sign Up"
  },
};

export type { TranslationKeys };
