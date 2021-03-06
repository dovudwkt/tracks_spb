
facilitiesObj = [
    {//11
        customer: "Администрация МО Сосновоборский городской округ Ленинградской области ",    
        description: 'Строительство кладбища «Воронка 2» Площадь застройки 10300 м2.',
        address: 'Ленинградская область, г.Сосновый Бор',
        dateFrom: '22 апреля 2015 г.',
        dateTo: '05 октября 2015 г.', 
    },
    { //10
        customer: "Санкт-Петербургское ГКУ «Организатор перевозок»",    
        description: 'Выполнение работ по подключению к наружным сетям канализации и системе коммунального водоснабжения (реконструкция) автобусной станции.',
        address: 'г.Ломоносов, Привокзальная улица дом 1',
        dateFrom: '1 сентября 2015 г. ',
        dateTo: '18 декабря 2015 г.', 
    },
    { //3
        customer: 'ООО «Лемминкяйнен Строй»',    
        description: 'Комплекс строительных работ по разработка грунта, срубка свай, устройство песчаной подсыпке с уплотнением, устройство щебеночной основание с уплотнением, устройство пластового дренажа, устройство прифундаментного дренажа, устройство обратной засыпки пазух и прифундаментного дренажа на объекте Многофункциональный общественно-деловой центр:  Объем работ: 46000 м3.',
        address: 'СПб,  ул. Салова 61, Лит. А. 2-этап/  ЖК «VALO»',
        dateFrom: '05. 12. 2017 г.',
        dateTo: '22.02.2018г', 
    },
    {//1
        customer: 'Адмнистрация Муниципального Образования «выборгский район» ЛО.',
        description: 'Благоустройство дворовых территорий по адресу г. Выборг, проспект Ленина дом 22-24, и улица Мира дом 3. Объем работ: 5781 м2.',
        address: 'Ленинградский Област, г.  Выборг, пр.  Ленина дом 22-24, и ул. Мира дом 3',
        dateFrom:'10.07.2018 г.',
        dateTo:'08.09.2018г.',
    },
    {//2
        customer: 'ООО «СК «Евромонолит»',
        description: '1. Полный комплекс работ со всеми вспомогательными и сопутвутствующими работами по планировке территории и устройству временных дорог, по объекту Многоквартирные дома со встроено-пристроенными помещениями и встроено- пристроенными гаражами . Объем работ: 8410 м2. 2.Комплекс строительных работ по разработка грунта, срубка свай, устройство песчаной подсыпке с уплотнением, устройство щебеночной основание с уплотнением, устройство пластового дренажа, устройство прифундаментного дренажа, устройство обратной засыпки пазух и прифундаментного дренажа на объекте: Многоквартирные дома со встроено-пристроенными помещениями и встроено- пристроенными гаражами . Объем работ: 42000 м3.',
        address: 'СПб, пр. Патриотов, участки 4 и5 , пересечения с улицей Адмирала Черкасова, квартал 32а-2',
        dateFrom:'01.06.2018г.',
        dateTo:'30.11.2018г.',
    },
    {//4
        customer: 'ООО «Лемминкяйнен Строй»',
        description: 'Комплекс строительных работ по разработка грунта, срубка свай, устройство песчаной подсыпке с уплотнением, устройство щебеночной основание с уплотнением, устройство пластового дренажа, устройство прифундаментного дренажа, устройство обратной засыпки пазух и прифундаментного дренажа на объекте «Жилые многоквартирные дома с встроенно-пристроенными помещениями и встроено-пристроенными гаражами по адресу: СПб, Красносельский административный район, Петергофское шоссе, участок 11. Обект 2229/3. Объем работ: 46000 м3',
        address: 'СПб,  Красносельский  административный  район, Петергофское шоссе, участок 11,  ЖК «Балтийский Берег»',
        dateFrom:'с 01,07.2017 г.',
        dateTo:'15.11.2017г.',
    },
    {//5
        customer: 'ООО «Лемминкяйнен Строй»',
        description: 'Комплекс строительных работ по разработка грунта, срубка свай, устройство песчаной подсыпке с уплотнением, устройство щебеночной основание с уплотнением, устройство пластового дренажа, устройство прифундаментного дренажа, устройство обратной засыпки пазух и прифундаментного дренажа на объекте «Жилые многоквартирные дома с встроенно-пристроенными помещениями и встроено-пристроенными гаражами по адресу: СПб, Красносельский административный район, Петергофское шоссе, участок 11. Обект 2229/1. Объем работ: 86000 м3',
        address: 'СПб,  Красносельский  административный  район, Петергофское шоссе, участок 11,  ЖК «Балтийский Берег»',
        dateFrom: '25 ноября 2016 г.',
        dateTo: '01.07.2017г',
    },
    {//6
        customer: 'ООО «Балт Нефтесервис»',
        description: 'Техническая и биологическая рекультивация земель Госсобственности, нарушенных при строительстве объекта «Отвод Морской порт «Приморск» - «РПК  Высоцк «Лукойл-II» 4800 м вдоль трубопровода.',
        address: 'Ленинградская обл., п.Токарево',
        dateFrom:'3 августа 2016 г.',
        dateTo:'30 сентября 2016г.',
    },
    {//7
        customer: 'ООО «БалтНПП»',
        description: 'Восстановление системы мелиорации и грунтовых дорог ООО «СП Матросово» Ремонт грунтовых дорог 9 км, разработка мелиоративной канавы вдоль трубопровода, устройство 15 переездов через водоотводные канавы вдоль трубопровода.',
        address: 'Ленинградская обл., п.Токарево',
        dateFrom: '11 июля 2016 г.',
        dateTo: '22 августа 2016 г.',
    },
    {//8
        customer: 'Санкт-Петербургское ГКУ «Организатор перевозок»',
        description: 'Комплексное благоустройство земельного участка (отстойно-разворотной площадки), прилегающего к зданию автобусной станции, для размещения объектов транспортной инфраструктуры. Благоустройство земельного участка, устройство наружных сетей водоснабжения и ливневой канализации земельного участка, наружное освещение земельного участка. Площадь застройки 7500м2.',
        address: 'г. Санкт-Петербург,  пос.  Тярлево, Фильтровское шоссе, дом 14.',
        dateFrom: '20 августа  2015 г.',
        dateTo: '10 декабря 2015 г.',
    },
    {//9
        customer: 'Санкт-Петербургское ГКУ «Организатор перевозок»',
        description: 'Комплексное благоустройство земельных участков (отстойно-разворотных площадок), прилегающих к зданиям автобусных станции для размещения объектов транспортной инфраструктуры. Благоустройство земельных участков, устройство наружных сетей водоснабжения и ливневой канализации. Площадь застройки  трех площадок 3800м2,  3. Санкт-Петербург, город Колпино, улица Правды, участок №1.',
        address:'1. Санкт-Петербург, Красное Село , Геологическое улица , участок №1,  2. Санкт –Петербург , Ново-Ковалево, 1-я поперечная улица , участок 1.',
        dateFrom: '1 сентября 2015 г.',
        dateTo: '10 декабря 2015 г.',
    },
    {//12
        customer: ' Санкт-Петербургское ГКУ «Организатор перевозок» ',
        description: 'благоустройство земельных участков (отстойно-разворотных площадок) для размещения объектов транспортной инфраструктуры. Замена асфальтного покрытия площадок общей площадью 7620 м2, установка бортовых камней, устройство пешеходных ограждений, восстановление газонов.',
        address: 'г. Санкт-Петербург, пр.Обуховской Обороны, уч.56, г.Колпино, Финляндская ул., уч.1, Санкт-Петербург, Софийская ул. ,д.4',
        dateFrom: '14 ноября 2014 г',
        dateTo: '12 декабря 2014 г.',
    },
    {//13
        customer: 'СПб ГБУ «Центр повышения эффективности использования государственного имущества»',
        description: 'демонтаж задания по адресу: Расстанная ул., д.12. Объем контракта – 8000 м3',
        address: 'г. Санкт-Петербург, Расстанная ул., д.12',
        dateFrom: '8 декабря 2014 г.',
        dateTo: '22 декабря 2014 г.',
    },
    {//14
        customer: 'Санкт-Петербургское ГКУ «Организатор перевозок» ',
        description: 'благоустройство земельного участка (отстойно-разворотной площадки) для размещения объекта транспортной инфраструктуры. Замена асфальтного покрытия площадки площадью 9422 м2, установка бортовых камней, установка люков, устройство пешеходных ограждений, восстановление газона по периметру.',
        address: 'г. Санкт-Петербург, Малая Балканская ул., уч.1',
        dateFrom: '22 сентября 2014 г',
        dateTo: '24 ноября 2014 г.',
    },
    {//15
        customer: 'Санкт-Петербургское ГКУ «Организатор перевозок»',
        description: 'благоустройство земельных участков (отстойно-разворотных площадок) для размещения объектов транспортной инфраструктуры. Замена асфальтного покрытия площадок общей площадью 9216 м2, установка бортовых камней, устройство пешеходных ограждений, восстановление газонов.',
        address: 'г. Санкт-Петербург, пр.Маршала Жукова, д.80А, Новосельковская ул., уч.16, Сестрорецк, ул.Курортная, уч.1, Шуваловский пр., уч.1',
        dateFrom: '22 сентября 2014 г.',
        dateTo: '24 ноября 2014 г.',
    },
    {//16
        customer: ' Администрация МО Сосновоборский городской округ Ленинградской области ',
        description: 'Выполнение работ по текущему ремонту улично-дорожной сети в г.Сосновый Бор Ленинградской области. ',
        address: 'Ленинградская область, г.Сосновый Бор.',
        dateFrom: '04 июля 2014 г.',
        dateTo: '23 июля 2014 г. ',
    },
    {//17
        customer: ' Комитет по дорожному хозяйству Ленинградской области ',
        description: 'аварийный ремонт части автодороги Сосновый Бор – Глобицы протяженность – 7 км.',
        address: 'Ленинградская область, а/дорога Сосновый Бор - Глобицы',
        dateFrom: '1 сентября 2013 г.',
        dateTo: '30 ноября 2013 г.',
    },
    {//18
        customer: 'ЗАО «УМ-67»',
        description: 'Подготовка территории предназначенной под строительство, механизированный демонтаж зданий  жилого дома, объем 10 тыс.м3, и выемка котлована для нового строительства жилого дома 4 тыс м3, разработка и согласование проектных работ, а также вывоз и утилизация полученных отходов. ',
        address: 'г. Санкт-Петербург, Дибуновская ул., д.30',
        dateFrom: '1 июля 2013 г.',
        dateTo: '31 декабря 2013 г',
    },
    {//19
        customer: 'ООО «Новый Город».',
        description: 'Подготовка территории предназначенной под строительство, механизированный демонтаж зданий  жилого дома, объем 4 тыс.м3, и выемка котлована для нового строительства жилого дома 10 тыс м3, разработка и согласование проектных работ, а также вывоз и утилизация полученных отходов. ',
        address: 'г. Санкт-Петербург, ул.  Дибуновская дом 22.',
        dateFrom: '1 этап: 1  Сентября 2011 г. - 01 Ноября 2011 г. ',
        dateTo: '  2этап: 1 Ноября 2011 г. - 10 Декабря 2011г.',
        
    }

]// end of object






function displayFacilities(appendTo){
    var element;
    if(facilitiesObj.length !== 0){
        for(let i=0; i<facilitiesObj.length;i++){
            element = `<div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__text">
                                    <ul>
                                        <li><i class="fa fa-calendar-o"></i>  ${facilitiesObj[i].dateFrom} - ${facilitiesObj[i].dateTo} </li>
                                    </ul>
                                    <h5><a >${facilitiesObj[i].customer} </a></h5>
                                    <p>${facilitiesObj[i].description}</p>
                                    <ul>
                                        <li><i class="fa fa-map-marker"></i> ${facilitiesObj[i].address}</li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>`;
            appendTo.innerHTML += element;
        }
    } 

};