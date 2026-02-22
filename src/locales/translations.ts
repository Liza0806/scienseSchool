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
  | "workFormat.familyDescription1"
  | "workFormat.familyDescription2"
  | "workFormat.familyPrice"
  | "workFormat.button"
  | "heroWords"
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
  | "workSectionBottom";

type Translations = {
  [key in TranslationKeys]: string | Array<string>;
};

export const translations: Record<"UA" | "RU" | "EN", Translations> = {
  UA: {
    "aboutMini.title": "Наша школа — це більше, ніж підготовка до іспитів",
    "aboutMini.paragraph1":
      "Наша онлайн школа природничих наук допомагає учням зрозуміти складні теми з біології, хімії та фізики просто й доступно",
    "aboutMini.paragraph2":
      "Ми готуємо до НМТ, вступних іспитів у коледжі та університети, а також підтримуємо учнів у навчанні протягом року. Наші викладачі — це фахівці з практичним досвідом та сучасним підходом до освіти.",
    "aboutMini.paragraph3":
      "Навчання відбувається у зручному онлайн-форматі індивідуально або в невеликих групах.",
    "aboutMini.paragraph4":
      "Ми поєднуємо теорію з практичними завданнями та реальними прикладами з життя.",
    "aboutMini.paragraph5":
      "Наша мета — не просто підготувати до іспитів, а сформувати наукове мислення та впевненість у власних знаннях.",
    "button.learnMore": "Дізнатися більше",
    "footer.copyright": "© {year} Карпич Владислав Сегрійович",
    "footer.subtitle": "Лікар-психіатр, психотерапевт",
    "header.home": "Головна",
    "header.about": "Про мене",
    "header.WorkInfoSection": "Як ми будемо працювати",
    "header.contacts": "Контакти",
    "hero.schoolTitle": "Онлайн школа природничих наук",
    "hero.subtitle":
      "Навчаємо розуміти науку, а не просто запам’ятовувати факти",
    "hero.ability.one": "НМТ",
    "hero.ability.two": "КРОК",
    "hero.ability.three": "КРОК2",
    "hero.ability.four": "ХЗ",
    "button.bookAppointment": "Записатися на пробне зайняття",
    "meta.title": "підготовка до НМТ та вступу",
    "meta.description":
      "підготовка до НМТ та вступу, онлайн школа, КРОК, НМТ, біологія, химія, фізіологія",
    "servicesList.title": "Наші курси",
    "servicesList.courseOne": "Хімия",
    "servicesList.courseTwo": "Біологія",
    "servicesList.courseThree": "Математика",
    "servicesList.courseFour": "Фізіологія",
    "servicesList.courseFive": "Гістологія",
    "servicesList.courseSix": "Латінська мова",
    "servicesList.button": "Дізнатись курси",
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
    "workFormat.advantages": "Наши преимущества",
    "workFormat.advantageOne": "У нас есть свои уникальные учебные планы.",
    "workFormat.advantageTwo":
      "Методические материалы подобраны под каждый предмет",
    "workFormat.advantageThree": "Есть база тестов",
    "workFormat.advantageFour": "Индивидуальній подход, яхз",
    "workFormat.individualDescription":
      "Психологічна консультація та психотерапія онлайн.",
    "workFormat.individualPrice": "1000 ₴ — 50 хвилин",
    "workFormat.familyTitle": "Сімейне консультування",
    "workFormat.familyDescription1":
      "Сімейне консультування та психотерапія пар спрямовані на корекцію стосунків та усунення емоційних труднощів у родині.",
    "workFormat.familyDescription2":
      "Робота ведеться з усіма членами родини, які відчувають труднощі в спілкуванні. Найчастіше пари звертаються для відновлення, реабілітації та оновлення стосунків.",
    "workFormat.familyPrice": "1300 ₴ — 75 хвилин",
    "workFormat.button": "Записатися на консультацію",
    errorTitle: "Щось пішло не так...",
    errorMessage:
      "Вибачте, сталася помилка. Будь ласка, спробуйте перезавантажити сторінку або поверніться на головну.",
    backHome: "Повернутись на головну",
    titleNotFound: "404",
    descriptionNotFound:
      "Інколи нам важко знайти навіть себе. Що вже казати про цю сторінку?..",
    homeButtonNotFound: "Повернутися на головну",
    backButtonNotFound: "Назад",
    metaTitleNotFound: "404 — Сторінка не знайдена",
    metaDescriptionNotFound: "Вибачте, запитувана сторінка не існує.",
    chargingTheDayForSuccess: "Заряджаємо день на успіх...",
    workStartTitle: "Як ми почнемо працювати?",
    workStartDescription:
      "Наше знайомство завжди починається з попереднього запису. Ви можете написати мені повідомлення або залишити заявку на сайті — ми підберемо зручний для вас час.\n\nНа першій консультації ми спокійно обговоримо, що привело вас до мене. Неважливо, чи є у вас готова тема для розмови, чи просто є відчуття, що «щось не так» — моя задача допомогти розібратись.\n\nПерша зустріч триває 50 хвилин.",
    workFormatsTitle: "Як проходять консультації?",
    workFormatsDescription:
      "Існує два формати роботи:\n\nКороткострокові консультації (5-10 зустрічей) — якщо ви хочете вирішити конкретне питання або ситуацію.\n\nДовготривала терапія (від 10 зустрічей) — якщо важливо глибше пропрацювати внутрішні причини, змінити звичні сценарії та стосунки.\n\nРазом ми визначимо, який шлях підійде саме вам.",
    workOrganizationalTitle: "Кілька організаційних моментів",
    workOrganizationalDescription:
      "Щоб наша співпраця була комфортною:\n\nКонсультація триває 50 хвилин.\nРекомендована частота зустрічей — 1 раз на тиждень.\nОнлайн-сесії проходять по передоплаті.\n\nЯкщо не виходить прийти — прошу попередити не пізніше, ніж за 24 години. Інакше, сесія вважається проведеною.\n\nЯкщо ви запізнюєтесь — ми працюємо залишений час.\n\nВажливо: я не даю порад «як правильно жити». Замість цього — допомагаю вам почути себе і прийняти власні рішення.",
    workSimpleTitle: "Простими словами",
    workSimpleDescription:
      "Ви можете прийти до мене, навіть якщо не знаєте, з чого почати.\nВаше завдання — просто прийти, моє — допомогти вам знайти відповіді.",
    footerContactTitle: "Контактна інформація:",
    footerSubtitle: "Психологічна допомога онлайн",
    "modal.call": "Зателефонувати",
    "modal.close": "Закрити",
    "modal.ask": "Як вам зручніше записатися?",
    workSectionBottom: "Ваше місце сили",

    heroWords: [
      "Натхнення",
      "Впевненість",
      "Сила",
      "Спокій",
      "Гармонія",
      "Цілі",
      "Рівновага",
      "Самопізнання",
      "Підтримка",
      "Розвиток",
      "Досягнення",
      "Усвідомленість",
      "Довіра",
      "Самооцінка",
      "Мудрість",
    ],
  },
  RU: {
    "aboutMini.title": "Наша школа — це більше, ніж підготовка до іспитів",
    "aboutMini.paragraph1":
      "Наша онлайн школа природничих наук допомагає учням зрозуміти складні теми з біології, хімії та фізики просто й доступно",
    "aboutMini.paragraph2":
      "Ми готуємо до НМТ, вступних іспитів у коледжі та університети, а також підтримуємо учнів у навчанні протягом року. Наші викладачі — це фахівці з практичним досвідом та сучасним підходом до освіти.",
    "aboutMini.paragraph3":
      "Навчання відбувається у зручному онлайн-форматі індивідуально або в невеликих групах.",
    "aboutMini.paragraph4":
      "Ми поєднуємо теорію з практичними завданнями та реальними прикладами з життя.",
    "aboutMini.paragraph5":
      "Наша мета — не просто підготувати до іспитів, а сформувати наукове мислення та впевненість у власних знаннях.",
    "button.learnMore": "Дізнатися більше",
    "footer.copyright": "© {year} Карпич Владислав Сергійович",
    "footer.subtitle": "Врач-психиатр, психотерапевт",
    "header.home": "Главная",
    "header.about": "Обо мне",
    "header.WorkInfoSection": "Как мы будем работать",
    "header.contacts": "Контакты",
    "hero.schoolTitle": "Онлайн школа естественных наук",
    "hero.subtitle":
      "Навчаємо розуміти науку, а не просто запам’ятовувати факти",
    "hero.ability.one": "НМТ",
    "hero.ability.two": "КРОК",
    "hero.ability.three": "КРОК2",
    "hero.ability.four": "ХЗ",
    "button.bookAppointment": "Записатися на пробне зайняття",
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
    "workFormat.familyDescription1":
      "Семейное консультирование и психотерапия пар направлены на коррекцию отношений и устранение эмоциональных трудностей в семье.",
    "workFormat.familyDescription2":
      "Работа ведётся со всеми членами семьи, которые испытывают трудности в общении. Чаще всего пары приходят для восстановления, реабилитации и обновления отношений.",
    "workFormat.familyPrice": "1300 ₴ — 75 минут",
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
    "footerSubtitle": "Психологеская помощь онлайн",
    "modal.call": "Позвонить",
    "modal.close": "Закрыть",
    "modal.ask": "Как вам удобнее записаться?",
    "workSectionBottom": "Ваше место силы",

    "heroWords": [
      "Вдохновение",
      "Уверенность",
      "Сила",
      "Спокойствие",
      "Гармония",
      "Цели",
      "Равновесие",
      "Самопознание",
      "Поддержка",
      "Развитие",
      "Достижения",
      "Осознанность",
      "Доверие",
      "Самооценка",
      "Мудрость",
    ],
  },
  EN: {
    "aboutMini.title": "Наша школа — це більше, ніж підготовка до іспитів",
    "aboutMini.paragraph1":
      "Наша онлайн школа природничих наук допомагає учням зрозуміти складні теми з біології, хімії та фізики просто й доступно",
    "aboutMini.paragraph2":
      "Ми готуємо до НМТ, вступних іспитів у коледжі та університети, а також підтримуємо учнів у навчанні протягом року. Наші викладачі — це фахівці з практичним досвідом та сучасним підходом до освіти.",
    "aboutMini.paragraph3":
      "Навчання відбувається у зручному онлайн-форматі індивідуально або в невеликих групах.",
    "aboutMini.paragraph4":
      "Ми поєднуємо теорію з практичними завданнями та реальними прикладами з життя.",
    "aboutMini.paragraph5":
      "Наша мета — не просто підготувати до іспитів, а сформувати наукове мислення та впевненість у власних знаннях.",
    "button.learnMore": "Дізнатися більше",
    "footer.copyright": "© {year} Borysenko Volodymyr Vasylovych",
    "footer.subtitle": "Psychiatrist, Psychotherapist",
    "header.home": "Home",
    "header.about": "About me",
    "header.WorkInfoSection": "How we will work",
    "header.contacts": "Contacts",
    "hero.schoolTitle": "Online School of Natural Sciences",
    "hero.subtitle":
      "We teach you to understand science, not just memorize facts",
    "hero.ability.one": "NMT",
    "hero.ability.two": "KROK",
    "hero.ability.three": "KROC2",
    "hero.ability.four": "HZ",
    "button.bookAppointment": "Записатися на пробне зайняття",
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
    "workFormat.familyDescription1":
      "Family counseling and couples therapy aimed at correcting relationships and resolving emotional difficulties within the family.",
    "workFormat.familyDescription2":
      "Work is carried out with all family members who experience communication difficulties. Most often, couples come for restoration, rehabilitation, and relationship renewal.",
    "workFormat.familyPrice": "1300 ₴ — 75 minutes",
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
    "footerSubtitle": "Online Psychological Support",
    "modal.ask": "How would you prefer to book an appointment?",
    "modal.call": "Call",
    "modal.close": "Close window",
    "workSectionBottom": "Your place of power",

    "heroWords": [
      "Inspiration",
      "Confidence",
      "Strength",
      "Calmness",
      "Harmony",
      "Goals",
      "Balance",
      "Self-discovery",
      "Support",
      "Growth",
      "Achievements",
      "Awareness",
      "Trust",
      "Self-esteem",
      "Wisdom",
    ],
  },
};

export type { TranslationKeys };
