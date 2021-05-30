# Модуль 34. Продвинутая работа с объектами в JS

В заданиях 4, 5 состояния подключения устройств (isPluggedIn) к розетки и их включение (isTurnedOn) задаются следующей функцией случайным образом:

    <code>
        function() {
            this.isPluggedIn = Math.random() < 0.5;
            this.isTurnedOn = this.isPluggedIn && Math.random() < 0.5;
        }
    </code>

Для измененич этих состояний достаточно запустить код повторно.
