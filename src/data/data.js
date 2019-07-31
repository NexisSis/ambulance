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
        prevId: 2,
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
                    this.setState( { needRespiration: true });
                }
            },
            {
                title: 'Взрослый',
                nextId: 5,
                func: function() {
                    this.setState({ needRespiration: false });
                }
            },
            {
                title: 'Взрослый с асфиксией',
                nextId: 5,
                func: function () {
                    this.setState({needRespiration: true});
                }
            },
        ],
    },
    {
        id: 5,
        title: 'Он в сознании <br> [разговаривает; отвечает; реагирует]?',
        prevId: 4,
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
                nextId: 6
            },
        ],
    },
    {
        id: 6,
        title: 'Осторожно встряхните его за плечи и громко спросите "Вы в порядке?". <br> Есть реакция?',
        prevId: 5,
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
                nextId: 7
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
                nextId: 8,
                func: function () {
                    console.log({compressionsType: "«Время подтверждения остановки сердца/дыхания»", stopHeart: new Date()});
                    this.props.dbHandlerStopHeart({stopHeart: new Date().toLocaleString("ru")});
                }
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
        prevId: 7,
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
        title: 'Уложите его на полу на спину <br> [лицом вверх].',
        notification: 'Оперативно перепроверьте, если есть сомнения в правильном положении пострадавшего',
        nextId: 10,
        prevId: 8
    },
    {
        id: 10,
        title: 'Встаньте на колени рядом с ним <br> [возле него; сбоку от него].',
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
        title: 'Сильно давите на грудную клетку. Ваши руки должны быть прямыми. Начинайте: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10... ' +
        'Давите и считайте вслух: 1, 2, 3... Продолжайте. Не останавливайтесь. Я остаюсь на связи.',
        notification: 'После выполнения серии компрессий (30 для взрослых' +
        ' с асфиксией, 15 для детей) перейти к следующему шагу',
        nextId: 13,
        prevId: 11

    },
    {
        id: 13,
        title: 'Теперь одной рукой зажмите ему нос, второй рукой — поднимите подбородок вверх, так чтобы его голова запрокинулась назад, но рот оставался открытым.',
        nextId: 14,
        prevId: 12

    },
    {
        id: 14,
        title: 'Широко открыв свой рот, плотно охватите губами рот пострадавшего.',
        notification: 'Для детей 1-го года жизни следует закрывать своим ртом одновременно и рот, и нос ребенка',
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
        // finish: true,
    },
    {
        id: 1001,
        title: 'Используйте одну их техник:',
        notification:
        '1. Проведите оценку длительности\n' +
        'пауз между вдохами. Если пауза\n' +
        'между вдохами больше 7-10 сек\n' +
        '(частота дыхания = 6-9 в мин),\n' +
        'переходите к предоставлению\n' +
        'инструкций по СЛР.<br><br>' +
        '2. Попросите свидетеля поднести\n' +
        'телефон близко ко рту пострадавшего,\n' +
        'чтобы оценить характер и частоту\n' +
        'дыхания.',
        prevId: 7,
        actionButtom: [
            {
                title: 'СЛР',
                nextId: 8
            },
        ],
    },
];

// Добавить кнопки записи в базу на последней странице


// ИНСТРУКЦИЯ:
// {
//     id: 0, - id страницы
//     title: 'Он нормально дышит?', - большой заголовок
//     notification: 'Надпись под большими буквами', - дополнительная подпись (описание под заголовком)
//     prevId: 6, - кнопка "назад" ведущая на предыдущую страницу с указанным id
//     nextId: 7, - кнопка "далее" ведущая на следующую страницу с указанным id
//     finish: true или false, - эта страница последняя?, добавляет кнопку выхода из алгоритма
//     actionButtom: [ - розовые кнопки
//     {
//         title: 'Да', - надпись на кнопке
//         nextId: -1 - на страницу с каким id ведет кнопка?
//     },
//     {
//         title: 'Нет', - надпись на кнопке
//         nextId: 8, - на страницу с каким id ведет кнопка?
//         func: function () { - функция, которую выполняет кнопка (необязательно).
//             console.log({compressionsType: "«Время подтверждения остановки сердца/дыхания»", stopHeart: new Date()}); - вывод в консоль
//             this.props.dbHandlerStopHeart({stopHeart: new Date().toLocaleString("ru")}); - запись в базу
//         }
//     },
//     ],
// }
//
// Информационные страницы имееют id больше 1000. Имеется в виду страницы, после кнопки "Не уверен", например страница с описанием техники оценки дыхания.