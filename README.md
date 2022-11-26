# Todo-приложение

## Стек

React, Less
База: Firebase
Дополнительные библиотеки:

- dayjs
- formik
- react-router-dom

## Функционал:

- создание, просмотр, редактирование (изменение полей или то, что задача выполнена) и удаление задачи.
- возможность прикрепления файлов к записи.
- поля в задаче: заголовок, описание, дата завершения, прикрепленные файлы.
- если дата завершения истекла или задача выполнена, это должно быть визуально отмечено.

#### Баги и невыполненные условия

1. Код не откомментирован через JSDoc.
2. Код местами требует рефакторинга.
3. Ререндеринг компонентов не оптимизирован.
4. Код формы дублируется в компонетах Create и Edit.
5. Все изображения подключаются в jsx, а не из стилей (less не поборолся).
6. Не использованы module.less, хотя надо бы :(
7. При удалении файлов из задачи, они не дропаются в бд, а остаются там.
8. Если в папке задачи уже есть файл, то такой же не загрузится.
9. Загрузка файлов происходит отдельно от создания/редактирования задачи. Если сначала выбрать файлы, а потом отменить создание/редактирование задачи, то файлы улетят в бд. Также, если файлы не успеют загрузиться к нажатию на "Создать"/"Сохранить", то в задачу попадут только все файлы.
