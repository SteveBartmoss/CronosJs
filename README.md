# CronosJs

Libreria para manipulas fechas en JavaScript

## Funciones actuales

Estas son algunas de las funcion que se tienen por el momento

### getDateNow

Devuele la fecha actual en diferentes formatos, por ahora los formatos aceptados son los siguientes: ISO, EUR, USA, SQL

### getDiference

Toma dos fechas y retorna la diferencias de dos fechas, tomando la segunda fecha y restandole la primera con lo cual se regresa la diferencia en dias

### addDays 

Toma una fecha y un numero de dias, a la fecha le suma el numero de dias que se pasa como parametro

### getDayReference

Toma una fecha y un lenguaje y devuelve el nombre del dia que representa la semana, los lenguajes con soporte actual es (en,es)

### isValidDate

Toma una fecha y devuelve true si es una fecha valida de lo contrario devuelve false

### getFirstDayOfMonth 

recibe una fecha y devuelve el primer dia de esa fecha

### getLastDayOfMonth

recibe una fecha y devuelve el ultimo dia de esa fecha

### calculateAge

recibe una fecha de nacimiento y devuelve la edad que corresponde a esa fecha

### formatDate

recibe una fehca y el formato deseado, devuelve la fecha con el formato que se indico

### addMonths 

recibe una fecha y un numero de meses, devuelve la fecha con la suma de los meses que se pasaron

### getUnitDiference

recibe dos fechas y una unidad, devuelve la diferencia entre las dos fechas en la unidad que se envia

### isLeapyear

recibe un anio numerico y retorna true si el anio es biciesto o de lo cotrario retorna false

### toTimestamp

recibe una fecha y una unidad de tiempo, la pasa al formato de la unidas que toma como argumento

### compareDates

recibe dos fechas y compara la primer fecha con la segunda, si la primer fecha es mmayor que la segunda retorna 1, de lo contrario retorna -1 y si son iguales retorna 0

### getMonthName 

recibe una fecha y un lenguaje, retorna el nombre del mes que corresponde a la fecha que se pasa como parametro

### isDateInRange

recibe tres fechas, la fecha de inicio, la fecha de fin y la fecha que se buscara entre la fecha de inicio y de fin, regresa si la fecha esta dentro del rango

### getWeekRange

recibe una fecha y regresa el inicio de semana de esa fecha y el fin de semana de esa fecha

### timestampToDate 

recibe un timestamp y una unidad, devuelve una fecha tomando el timestamp y transformandola a la unidad que se paso