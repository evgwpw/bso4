﻿Так сложилось исторически, что хотя HTML и имеет стандарты, но браузеры игнорируют теги и атрибуты которые не могут идентифицировать. При этом эти элементы есть в DOM и с ними вполне можно работать с ними посредством JavaScript. Этим издревле пользуются web-программисты.

Появилось множество различных фреймворков использующих описанный выше факт для создания web-приложений.  Как правило используется некоторая модель к которой привязывается некоторое представление, при этом вводятся новые теги-атрибуты, в некоторых фраймфорках просто огромное количество, JavaScript библиотеки с опять же немереным количеством сущностей и правилами их использования. Что самое плачевное, получаются несколько разрозненных частей, например Model и View, которые связаны между собой только посредством строковых идентификаторов. Ошибку можно выявить только на стадии исполнения, в независимости, тест это или реальное приложение. Не менее плачевно то, что для использования таких фреймворков нужно выучить кучу новой информации, которая вполне может оказаться ненужной, при выходе следующей версии фреймворка. Это в принципе не проблема, когда ты узкий спец по вебу, но если сегодня пишешь web-приложение, вчера делал загрузчик из XML в БД, а завтра будешь работать с криптографией, то не все так просто становиться.

Вот и мне недавно пришлось делать гибкий отзывчивый пользовательский интерфейс, нажимаешь в одном месте, в 10 других перерисовывается. Имея некий опыт и поизучав современные фрейворки пришел к выводу, что либо их возможностей не хватает, либо я недостаточно толков, что бы применить их. Повторюсь, сильно раздражало использование строковых идентификаторов, а я так привык к тому, что csc всегда ткнет тебя носом, в то место, где ты допустил ошибку. К тому же разделение на части может и правильно, для тестирования там и поддержания, но по мне это как говорил один мой преподаватель:  «Баня здесь, а раздевалка за углом». Да и напоминало скелет (VIEW), который чтобы шевелился, дергают за ниточки, а что бы он ожил, ему нужны настоящие мышцы! В результате у меня получилось на выходе несколько тысяч строк js кода (хорошо хоть есть JQuery).

Я подумал, хорошо было бы иметь некий DSL для такой работы. И что бы можно было ООП, полиморфизм, вплоть до параметрического, функции высших порядков, лямбды, вывод типов, замыкания, intellisense и прочие прелести и все это строго типизированное. Так же я уверен, что лучший DSL для HTML, это сам HTML. В принципе я знаю по крайней мере одну такую штуку – WebSharper. Но беда в том, что надо писать на F# и это при том, что многие C# программисты не понимают, что такое лямбды…

Еще в 2012 году Андерс Хейлсберг явил миру TypeScript, который настолько хорош, что его используют даже те, кто конкурирует или недолюбливает Microsoft. Там есть все, к чему я привык и о чем писал в предыдущем параграфе и даже немного больше.

Собрав все вместе, я задумался над некоторой реализацией. Надо сказать я не один пришел к этому. Вот Antonariy изобрел свой велосипед. Ну а я сделал свой J

Суть проста, для каждого HTML  тега (вроде все описал) есть функция, которая принимает несколько необязательных параметров.

       Некоторое действие, которое можно совершить с элементом после его создания, как правили инициализация свойств или обработчиков событий.
       Список функций, которые возвращают наследников HTMLElement или же список массивов (достаточно одного элемента в списке) содержащих наследников HTMLElement.
Имя функции соответствует названию тега, над элементом производятся действия описанные в первом параметре, элементы из последующих параметров добавляются в childNodes.

                 

Не большой пример использования в файлах todo.htm/todo.ts.


Добавил DataBinding.

Первое, что приходило в голову, было сделать proxy для привязываемых объектов и перехватывать в сетторе изменение объектов, также подписаться на onchange изменяемых элементов управления. Но потом подумал нафига козе баян?

Сделал абстрактный класс Binder<T>, которому в конструктор передается привязываемый объект/интерфейс, который в свою очередь описывает свойства объекта. 

Для привязки простого свойства, как правило это строка, следует использовать метод

public BS<E>(el: E, elProp: (e: E) => any, objProp: (t: T) => any): void, пример вызова

() => inputText(t=> { binder.BS(t, x=> x.value, x=> x.LastName); t.className = bootstrapCss.form_control; }.

Для сложных свойств используется метод 

public BC<E, K>(el: E, objProp: (t: T) => any, Get: (e: E) => K, Set: (v: any) => void): void

пример вызова

() => inputText(t=>

{

t.className = bootstrapCss.form_control;

var dp = $(t).datetimepicker( { autoclose: true, format: "dd.mm.yyyy", language: "ru", todayBtn: true, startView: 2, minView: 2, showClear: true, showClose: true, pickTime: false }) .data('datetimepicker'); binder.BC(t, t=> binder.Data.BirthDay, t=> dp.getDate(), e=> { dp.setDate(binder.Data.BirthDay); }); dp.setDate(binder.srcData.BirthDay); })
http://www.sql.ru/forum/1206096/pokritikuyte-bso



