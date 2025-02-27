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
    getDiference(firsDate,secondDate)
```

### Parametros

**firsDate**
- La fecha que se tomara para la operacion

**firsDate**

- La fecha que se tomara para la operacion

### Retorno

Se regresa la diferencia en dias

### addDays 

Toma una fecha y un numero de dias, a la fecha le suma el numero de dias

```js
    addDays(date,days)
```

### Parametros

**date** 
- Fecha a la cual se sumaran dias

**days**
- Numero de dias que se sumaran a la fecha

### Retorno

La fecha con la suma de los dias

### getDayReference

Toma una fecha y un lenguaje y devuelve el nombre del dia que representa la semana

```js
    getDayReference(date,language)
```

### Parametros

**date**
- Fecha dela cual se obtendra a referencia del dia

**language**
- El lenguaje en el que se quiere obtener la referencia del dia

**Formatos de lenguaje**

- en
- es

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
    getFirstDayOfMonth(date)
```
### Parametros

**date**
- Fecha a partir de la cual se regresa el primer dia del mes

recibe una fecha y devuelve el primer dia del mes de esa fecha

### Retorno

Primer dia del mes de la fecha que se envia

### getLastDayOfMonth

recibe una fecha y devuelve el ultimo dia del mes de esa fecha

```js
    getLastDayOfMonth(date)
```

### Parametros

**date** 

- Fecha a partir de la cual se regresa el ultimo dia del mes

### Retorno

Ultimo dia del mes de la fecha que se envia

### calculateAge

recibe una fecha de nacimiento y devuelve la edad que corresponde a esa fecha

```js
    calculateAge(birthDate)
```

### Parametros

**birthDate**

- Fecha de nacimiento para calcular la edad

### Retorno

La edad que corresponde a la fecha de nacimiento

### formatDate

recibe una fecha y el formato deseado, devuelve la fecha con el formato que se indico

```js
    calculateAge(date,format)
```
### Parametros

**date**

- Fecha que se desea formatear

**format**

- Formato en el que se quiere la fecha final

### Retorno

La fecha con el nuevo formato

### addMonths 

recibe una fecha y un numero de meses, devuelve la fecha con la suma de los meses que se pasaron

```js
    addMonths(date,months)
```

### Parametros

**date**
- Fecha a la cual se le sumaran los meses

**months**
- Numero de meses que se desean sumar a la fecha

### Retorno

La fecha con la suma de los meses especificados

### getUnitDiference

recibe dos fechas y una unidad, devuelve la diferencia entre las dos fechas en la unidad que se envia, el orden de la operacion es endDate - startDate

```js
    getUnitDiference(startDate,endDate,unit)
```

### Parametros

**startDate** 
- Primera fecha que se tomara para la operacion

**endDate** 
- Segunda fecha que se tomara para la operacion

**unit** 
- Tipo de unidad en la que se quiere la diferencia entre las fechas

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
    toTimestamp(date,unit)
```

### Parametros 

**date**

- Fecha que se quiere pasar a un formato de timestamp

**unit** 

- Unidad a la que se desea pasar la fecha

Las unidades disponibles son 

- seconds
- miliseconds

### Retorno 

Los segundos o mili segundos que corresponden a la fecha envida

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