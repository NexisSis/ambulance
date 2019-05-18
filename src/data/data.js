export default [
    {
        id: 1,
        title: 'Скорая. Что у вас случилось?',
        nextId: 2
    },
    {
        id: 2,
        title: 'Какой адрес?',
        prevId: 1,
        actionButtom: [
            {
                title: 'Адрес подтверждён',
                nextId: 3,
                func: function () {
                    console.log({acceptAddress: new Date()});
                    this.props.dbHandlerAddress({acceptAddress: new Date().toLocaleString("ru")});
                }
            },
        ],
    },
    {
        id: 3,
        title: 'Кому нужна помощь?',
        nextId: 4,
    },
    {
        id: 4,
        title: 'Сколько ему примерно лет?',
        notification: 'В случае остановки сердца у ребенка или взрослого \n' +
                      'с асфиксией, потребуется искусственное дыхание',
        prevId: 3,
        actionButtom: [
            {
                title: 'Ребенок',
                nextId: 5,
                func: function() {
                    console.log({age: "Ребенок"});
                    this.setState( { needRespiration: true });
                    this.props.dbHandlerAge({age: "Ребенок"});
                }
            },
            {
                title: 'Взрослый',
                nextId: 5,
                func: function() {
                    console.log({age: "Взрослый"});
                    this.setState({ needRespiration: false });
                    this.props.dbHandlerAge({age: "Взрослый"});
                }
            },
            {
                title: 'Взрослый с асфиксией',
                nextId: 5,
                func: function () {
                    console.log({age: "Взрослый c асфиксией"});
                    this.setState({needRespiration: true});
                    this.props.dbHandlerAge({age: "Взрослый с асфиксией"});
                }
            },
        ],
    },
    {
        id: 5,
        title: 'Он в сознании (разговаривает; отвечает; реагирует)?',
        prevId: 4,
        actionButtom: [
            {
                title: 'Да',
                nextId: 6
            },
            {
                title: 'Нет',
                nextId: 7
            }
        ],
    },
    {
        id: 6,
        title: 'Осторожно встряхните его за плечи и громко спросите "Вы в порядке?". Есть реакция?',
        actionButtom: [
            {
                title: 'Да',
                nextId: -1
            },
            {
                title: 'Нет',
                nextId: 7
            },
            {
                title: 'Не уверен',
                nextId: 1001
            },
        ],
    },
    {
        id: 7,
        title: 'Он нормально дышит?',
        actionButtom: [
            {
                title: 'Да',
                nextId: -1
            },
            {
                title: 'Нет',
                nextId: 8
            },
            {
                title: 'Не уверен',
                nextId: 1001
            },
        ],
    },
    {
        id: 8,
        title: 'Машина выехала. Слушайте меня внимательно. Я объясню, что делать до приезда скорой.',
        notification: 'Разъясните: "Я объясню как делать реанимацию" или "Я объясню как оказать первую помощь"',
        actionButtom: [
            {
                title: 'Только компрессии',
                nextId: 9,
                func: function () {
                    console.log({compressionsType: "Только компрессии" ,compressionTime: new Date()});
                    this.setState({ needRespiration: false });
                    this.props.dbHandlerCompression({compressionsType: "Только компрессии" ,compressionTime: new Date().toLocaleString("ru")});
                }
            },
            {
                title: 'Компрессии и искусственное дыхание\n',
                nextId: 9,
                func: function () {
                    console.log({compressionsType: 'Компрессии и искусственное дыхание', compressionTime: new Date()});
                    this.setState({ needRespiration: true });
                    this.props.dbHandlerCompression({compressionsType: "Компрессии и искусственное дыхание", compressionTime: new Date().toLocaleString("ru")});
                }
            }
        ],

    },
    {
        id: 9,
        title: 'Уложите его на полу на спину [лицом вверх].',
        notification: 'Оперативно перепроверьте, если есть сомнения в правильном положении пострадавшего',
        nextId: 10,
    },
    {
        id: 10,
        title: 'Встаньте на колени рядом с ним [возле него; сбоку от него].',
        notification: 'Оперативно перепроверьте, если есть сомнения в правильном положении пострадавшего',
        nextId: 11,
        prevId: 9
    },
    {
        id: 11,
        title: 'Поставьте одну руку в центр грудной клетки [в центр груди; между сосков]. Вторую руку поставьте сверху.',
        notification: 'Для детей младше 1 года – в центре грудной клетки указательным и средним пальцами <br>' +
        'Для детей от 1 года до 8 лет – одной рукой',
        nextId: 12,
        prevId: 10

    },
    {
        id: 12,
        title: 'Давите на грудную клетку' +
        'как можно сильнее. Ваши руки должны быть прямыми. Начинайте: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10... ' +
        'Давите и считайте вслух. Продолжайте. Не останавливайтесь. Я остаюсь на связи.',
        notification: 'После выполнения серии компрессий (30 для взрослых' +
        'с асфиксией, 15 для детей) перейти к следующему шагу',
        nextId: 13,
        prevId: 11

    },
    {
        id: 13,
        title: 'Теперь одной рукой зажмите ему нос, второй рукой — поднимите подбородок вверх, так чтобы его голова запрокинулась назад.',
        nextId: 14,
        prevId: 12

    },
    {
        id: 14,
        title: 'Полностью накройте его рот своим ртом.',
        notification: 'Для детей 1 года жизни следует закрывать своим ртом одновременно и рот, и нос ребенка',
        nextId: 15,
        prevId: 13

    },
    {
        id: 15,
        title: 'Два раза быстро вдохните в него воздух.',
        nextId: 16,
        prevId: 14

    },
    {
        id: 16,
        title: 'Снова начинайте давить на грудную клетку.',
        nextId: 12,
        prevId: 15,
        finish: true,
    },
    {
        id: 1001,
        title: 'Используйте одну их техник:',
        notification: '1. Проведите оценку длительности пауз между вдохами. Для этого попросите свидетеля произносить «есть» каждый раз, когда пострадавший делает вдох,' +
        ' и оцените интервал между вдохами. Если пауза между вдохами превышает 7-10 секунд у пострадавшего без сознания (что соответствует частоте дыхания 6-9 в минуту), ' +
        'следует переходить к предоставлению инструкций по СЛР.<br><br>' +
        '2. Попросите свидетеля поднести телефон близко ко рту пострадавшего, чтобы услышать и таким образом оценить характер и частоту дыхания.\n',
        prevId: 7,
    },
];

// Cделать запись в базу
// Какой механизм записи выбрать?
// https://www.html5rocks.com/en/tutorials/offline/storage/
// Выбор https://www.w3.org/TR/IndexedDB/

// Настроил переходы
// Добавил таймер
// Условие выхода из при компресси и исскуственное дыхание, в доке написан цикл без точки выхода



// Выделить кнопку старт таймера
// Добавить кнопку выхода


// Источники указывать так : [ Цифра ].
// В конце указать соответсвие. так: [1] WIKI: (автор) "название публикации" (год статьи/либо copywriting)-url "http:google.com" (проверено 18.06.2019)
