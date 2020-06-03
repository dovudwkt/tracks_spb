
facilitiesObj = [
    {
        customer: "Администрация МО Сосновоборский городской округ Ленинградской области ",    
        description: 'Строительство кладбища «Воронка 2» Площадь застройки 10300 м2.',
        address: 'Ленинградская область, г.Сосновый Бор',
        dateFrom: '22 апреля 2015 г.',
        dateTo: '05 октября 2015 г.', 
    },
    {
        customer: "Санкт-Петербургское ГКУ «Организатор перевозок»",    
        description: 'Выполнение работ по подключению к наружным сетям канализации и системе коммунального водоснабжения (реконструкция) автобусной станции.',
        address: 'г.Ломоносов, Привокзальная улица дом 1',
        dateFrom: '1 сентября 2015 г. ',
        dateTo: '18 декабря 2015 г.', 
    },
    {
        customer: '',    
        description: '',
        address: '',
        dateFrom: '',
        dateTo: '', 
    },


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