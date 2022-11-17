/* Основой html-документа являются тэги. */
// В соответствии с объектной моделью документа (Document Object Model, DOM), каждый html-тэг является объектом. Вложенные тэги являются "детьми" родительского элемента. Текст, который находится внтури тэга, также является объектом. 
/* Все эти объекты доступны при помощи JS, мы можем использовать их для изменения страницы. Например, document.body - это объект для тэга body. */

document.body.style.background = 'red';
setTimeout(() => document.body.style.background = '', 3000); //если запустить этот код, то body станет красным на 3 секунды
