# CronosJs 1.1.2 (Alfa)

Libreria para trabajar con fechas en JavaScript

**Importante**

Las funciones ahora pueden trabajar con diferentes tipos de fechas, por defecto new Date espera que el formato sea **YYYY-MM-DD** pero se implmento un funcion para normalizar las fechas por lo cual las funciones que reciben de una fecha tambien deben recibir el formato de la fecha que se envia, en caso de que el formato no este entre los soportados se hara un acercamiento lo mejor que se pueda para determinsr el orden de los datos proporcionados.

Los formatos aceptados son: 
- "DD/MM/YYYY" 
- "MM/DD/YYYY" 
- "YYYY/MM/DD" 
- "DD-MM-YYYY" 
- "MM-DD-YYYY" 
- "YYYY-MM-DD"

## Funciones actuales

Estas son algunas de las funcion que se tienen por el momento

### getDateNow

Devuelve la fecha actual en diferentes formatos

```js
    getDateNow(formnatDate)
```

### Parametros

**formatDate** 
- el formato en el que se quiere la fecha actual, debe ser un string

**Formatos aceptados**
- ISO
- EUR
- USA
- SQL

### getDiference

Toma dos fechas y retorna la diferencias de dos fechas el orden de al operacion es  secondDate - firsDate

```js
    getDiference(firsDate,secondDate,firstFormat,secondFormat)
```

### Parametros

**firsDate**
- La fecha que se tomara para la operacion

**firsDate**

- La fecha que se tomara para la operacion

**firstFormat**

- Formato de la primera fecha

**secondFormat**

- Formato de la segunda fecha

Si solo se envia el primer formato de fecha, se toma como que las fechas comparten formato

### Retorno

Se regresa la diferencia en dias

### addDays 

Toma una fecha y un numero de dias, a la fecha le suma el numero de dias

```js
    addDays(date,format,days)
```

### Parametros

**date** 
- Fecha a la cual se sumaran dias

**days**
- Numero de dias que se sumaran a la fecha

**format**

- Es el formato en el que se manda la fecha

### Retorno

La fecha con la suma de los dias

### getDayReference

Toma una fecha y un lenguaje y devuelve el nombre del dia que representa la semana

```js
    getDayReference(date,format,language)
```

### Parametros

**date**
- Fecha dela cual se obtendra a referencia del dia

**language**
- El lenguaje en el que se quiere obtener la referencia del dia

**Formatos de lenguaje**

- en
- es

**format**

- Es el formato en el que se manda la fecha

### Retorno 

La referencia del dia que esta en la fecha proporcionada

### isValidDate

Toma una fecha y valida que sea una fecha correcta

```js
    isValidDate(date,format)
```

### Parametros

**date**
- Fecha que sera validada

**format**
- Formato en el que esta la fecha, si el formato se omite, se hara a mejor aproximancion posible

**Formatos Esperados**

- "DD/MM/YYYY" 
- "MM/DD/YYYY" 
- "YYYY/MM/DD" 
- "DD-MM-YYYY" 
- "MM-DD-YYYY" 
- "YYYY-MM-DD"

### Retorno

true si la fecha es valida de lo contrario false

### getFirstDayOfMonth 

recibe una fecha y devuelve el primer dia del mes de esa fecha

```js
    getFirstDayOfMonth(date,format)
```
### Parametros

**date**
- Fecha a partir de la cual se regresa el primer dia del mes

recibe una fecha y devuelve el primer dia del mes de esa fecha

**format**

- Es el formato en el que se manda la fecha

### Retorno

Primer dia del mes de la fecha que se envia

### getLastDayOfMonth

recibe una fecha y devuelve el ultimo dia del mes de esa fecha

```js
    getLastDayOfMonth(date,format)
```

### Parametros

**date** 

- Fecha a partir de la cual se regresa el ultimo dia del mes

**format**

- Es el formato en el que se manda la fecha

### Retorno

Ultimo dia del mes de la fecha que se envia

### calculateAge

recibe una fecha de nacimiento y devuelve la edad que corresponde a esa fecha

```js
    calculateAge(birthDate,format)
```

### Parametros

**birthDate**

- Fecha de nacimiento para calcular la edad

**format**

- Es el formato en el que se manda la fecha

### Retorno

La edad que corresponde a la fecha de nacimiento

### formatDate

recibe una fecha y el formato deseado, devuelve la fecha con el formato que se indico

```js
    calculateAge(date,format,formatFinal)
```
### Parametros

**date**

- Fecha que se desea formatear

**format**

- Es el formato en el que se manda la fecha

**formatFinal**

- Formato en el que se quiere la fecha final

### Retorno

La fecha con el nuevo formato

### addMonths 

recibe una fecha y un numero de meses, devuelve la fecha con la suma de los meses que se pasaron

```js
    addMonths(date,format,months)
```

### Parametros

**date**
- Fecha a la cual se le sumaran los meses

**format**

- Es el formato en el que se manda la fecha

**months**
- Numero de meses que se desean sumar a la fecha

### Retorno

La fecha con la suma de los meses especificados

### getUnitDiference

recibe dos fechas y una unidad, devuelve la diferencia entre las dos fechas en la unidad que se envia, el orden de la operacion es endDate - startDate

```js
    getUnitDiference(startDate,endDate,unit,startFormat,endFormat)
```

### Parametros

**startDate** 
- Primera fecha que se tomara para la operacion

**endDate** 
- Segunda fecha que se tomara para la operacion

**unit** 
- Tipo de unidad en la que se quiere la diferencia entre las fechas

**startFormat**

- Formato en el que se manda la primer fecha

**endFormat**

- Formato en el que se manda la segunda fecha, se se omite se toma que las fechas comparten el formato

Las unidades aceptadas son 
- days
- hours
- minutes
- seconds

### Retorno

La diferencia entre las fechas en la unidad que se en envia

### isLeapyear

recibe un anio numerico y retorna true si el anio es biciesto o de lo cotrario retorna false

```js
    isLeapyear(year)
```

### Parametros

**year**
- Anio que se desa comprovar si es biciesto

### Retorno

true si es biciesto o false si no lo es

### toTimestamp

recibe una fecha y una unidad de tiempo, la pasa al formato de la unidas que toma como argumento

```js
    toTimestamp(date,format,unit)
```

### Parametros 

**date**

- Fecha que se quiere pasar a un formato de timestamp

**format**

- Es el formato en el que se manda la fecha

**unit** 

- Unidad a la que se desea pasar la fecha

Las unidades disponibles son 

- seconds
- miliseconds

### Retorno 

Los segundos o mili segundos que corresponden a la fecha envida

### compareDates

recibe dos fechas y las compara el orden de comparacion es date1 < date2

```js
    compareDates(date1,date2,formatOne,formatTwo)
```

### Parametros 

**date1**

- Primer fecha a comparar

**date2** 

- Segunda fecha a comparar

**formatOne**

- Formato en el que se envia la primer fecha

**formatTwo**

- Formato en el que se envia la segunda fecha, si se omite se toma como que las fechas comparten el formato

### Retorno 

si la primer fecha es mayor que la segunda retorna 1, de lo contrario retorna -1 y si las fechas son 
iguales retorna 0

### getMonthName 

recibe una fecha y un lenguaje, retorna el nombre del mes que corresponde a la fecha que se pasa como parametro

```js
    getMonthName(date,format,language)
```

### Parametros

**date**

- Fecha de la cual se quiere obtener el nombre del mes

**format**

- Es el formato en el que se manda la fecha

**language**

- Idioma en el que se quiere el nombre del mes

### Retorno 

Nombre del mes que corresponde a la fecha que se manda como parametro

### isDateInRange

Comprueba si una fecha esta dentro de un rango, el orden de comparacion es startDate <= date <= endDate

```js
    isDateInRange(date,startDate,endDate,dateFormat,startFormat,endFormat)
```

### Parametros

**date**

- Fecha que se quiere comprobar si esta dentro del rango

**startDate**

- Fecha inferior del rango

**endDate**

- Fecha superior del rango

**dateFormat**

- Formato de la fecha que se quiere comprobar dentro del rango de fechas 

**startFormat**

- Formato de la fecha que se toma como inicio del rango

**endFormat**

- Formato de la fecha que se toma como fin del rango

### Retorno

Retorna true si la fecha entra dentro del rango o flase si no esta dentro del rango

### getWeekRange

Obtener el inicio y el fin de seana de una fecha

```js
    getWeekRange(date)
```

### Paramnetros

**date**

- Fecha de la cual se quiere obtener el inicio y fin de de la semana

**format**

- Es el formato en el que se manda la fecha

### Retorno 

Regresa el inicio y fin de semana de la fecha enviada, se toma que la semana inicia en domingo, por lo que buscara el domingo y el sabado a parti de la fecha que se envia

### timestampToDate 

recibe un timestamp y una unidad, devuelve una fecha tomando el timestamp y transformandola a la unidad que se paso

```js
    timestampToDate(timestamp, unit)
```

### Parametros

**timestamp**

- Marca de tiempo que se desea transformar a una fecha

**unit**

- Unidad de tiempo en la que esta la marca de tiempo

Las unidades disponibles son 

- seconds
- miliseconds

### Retorno

Regresa una fecha a partir de la marca de tiempo

### normalizeDate

Esta funcion es para el uso interno de la liberia, pero puede ser utilizada recibe una fecha y la normaliza al estandar de las fechas javascript YYYY-MM-DD

```js
    normalizeDate(date,format)
```

### Parametros

**date**

- Fecha que se quiere normalizar al formato que usa en javascript

**format**

- Formato en el que se envia la fecha que se quiere normalizar, si el formato se omite se trata de hacer la mejor aproximacion a los valores de las fechas

Los formatos aceptados son: 
- "DD/MM/YYYY" 
- "MM/DD/YYYY" 
- "YYYY/MM/DD" 
- "DD-MM-YYYY" 
- "MM-DD-YYYY" 
- "YYYY-MM-DD"