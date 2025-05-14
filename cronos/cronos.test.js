import { getDateNow } from './cronos.js';

test('getDateNow("ISO") debe retornar una fecha en formato YYYY-MM-DD', () => {
    const result = getDateNow("ISO");
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
});

test('getDateNow("EUR") debe retornar una fecha en formato DD/MM/YYYY', () => {
    const result = getDateNow("EUR");
    expect(result).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
});

test('getDateNow("USA") debe retornar una fecha en formato MM/DD/YYYY', () => {
    const result = getDateNow("USA");
    expect(result).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
});

import { getDifference } from './cronos.js';

test('getDifference() debe calcular la diferencia entre dos fechas en días', () => {
    const diff = getDifference("2024-02-01", "2024-02-10");
    expect(diff).toBe(9);
});

test('getDifference() debe lanzar un error si las fechas son inválidas', () => {
    expect(() => getDifference("invalid", "2024-02-10")).toThrow("Invalid date");
});

import { addDays } from './cronos.js';

test('addDates("01/10/2025","DD/MM/YYYY",5) debe retornar la fecha mas 4 dias', ()=>{
    const result = addDays('01/10/2025','DD/MM/YYYY',4);
    expect(result).toBe("05/10/2025")
})

test('addDates("01-10-2025",DD-MM-YYYY",5) debe retornar la fecha mas 4 dias', ()=>{
    const result = addDays('01-10-2025','DD-MM-YYYY',4)
    expect(result).toBe("05-10-2025")
})

import { getDayReference } from './cronos.js';

test('getDayReference("28/02/2025","DD/MM/YYYY","es") debe retornar el dia de la semana', ()=>{
    const result = getDayReference('28/02/2025','DD/MM/YYYY','es')
    expect(result).toBe("Viernes")
})

test('getDayReference("01/03/2025","DD/MM/YYYY","es") debe retornar el dia de la semana', ()=>{
    const result = getDayReference('01/03/2025','DD/MM/YYYY','es')
    expect(result).toBe("Sábado")
})

import { isValidDate } from './cronos.js';

test('isValidDate("01-01-2025","DD-MM-YYYY") debe se una fecha valida', ()=>{
    const result = isValidDate("01-01-2025","DD-MM-YYYY")
    expect(result).toBe(true)
})

test('isValidDate("01/01/2025","DD/MM/YYYY") debe ser una fecha valida', ()=>{
    const result = isValidDate("01/01/2025","DD/MM/YYYY")
    expect(result).toBe(true)
})

test('isValidDate("03-25-2025","MM-DD-YYYY") debe ser una fecha valida', ()=>{
    const result = isValidDate("03-25-2025","MM-DD-YYYY")
    expect(result).toBe(true)
})

test('isValidDate("03/25/2025","MM/DD/YYYY") debe ser una fecha valida', ()=>{
    const result = isValidDate("2025/01/01","YYYY/MM/DD")
    expect(result).toBe(true)
})

test('isValidDate("2025-01-01","YYYY-MM-DD") debe ser una fecha valida', ()=>{
    const result = isValidDate("2025-01-01","YYYY-MM-DD")
    expect(result).toBe(true)
})

import { getFirstDayOfMonth } from './cronos.js';

test('getFirstDayOfMonth("28/02/2025","DD/MM/YYYY")', ()=>{
    const result = getFirstDayOfMonth('28/02/2025','DD/MM/YYYY')
    expect(result).toBe('01/02/2025')
})

import { getLastDayOfMonth } from './cronos.js';

test('getLastDayOfMonth("05/10/2025","DD/MM/YYYY")', ()=>{
    const result = getLastDayOfMonth('05/10/2025','DD/MM/YYYY')
    expect(result).toBe('31/10/2025')
})

import { calculateAge } from './cronos.js';

test('calculateAge("28/11/1999","DD/MM/YYYY")', ()=>{
    const result = calculateAge("28/11/1999","DD/MM/YYYY")
    expect(result).toBe(25)
})

import { formatDate } from './cronos.js';

test('formatDate("1999-11-28","YYYY-MM-DD","DD/MM/YYYY")', ()=>{
    const result = formatDate("1999-11-28","YYYY-MM-DD","DD/MM/YYYY")
    expect(result).toBe('28/11/1999')
})

import { addMonths } from './cronos.js';

test('addMonths("01/01/2025","DD/MM/YYYY",4)', ()=>{
    const result = addMonths("01/01/2025","DD/MM/YYYY",4)
    expect(result).toBe('01/05/2025')
})

import { getUnitDifference } from './cronos.js';

test('getUnitDifference("01/10/2025","05/10/2025","days","DD/MM/YYYY")', ()=>{
    const result = getUnitDifference('01/10/2025','05/10/2025','days','DD/MM/YYYY')
    expect(result).toBe(4)
})

test('getUnitDifference("01/10/2025","05-10-2025","days","DD/MM/YYYY","DD-MM-YYYY")',()=>{
    const result = getUnitDifference('01/10/2025','05-10-2025','days','DD/MM/YYYY','DD-MM-YYYY')
    expect(result).toBe(4)
})

import { isLeapYear } from './cronos.js';

test('isLeapYear() debe devolver true para 2024 (año bisiesto)', () => {
    expect(isLeapYear(2024)).toBe(true);
});

test('isLeapYear() debe devolver false para 2023 (no es año bisiesto)', () => {
    expect(isLeapYear(2023)).toBe(false);
});

import { compareDates } from './cronos.js';

test('compareDates() debe devolver 1 si la primera fecha es mayor', () => {
    expect(compareDates("2024-02-10", "2024-02-01")).toBe(1);
});

test('compareDates() debe devolver -1 si la segunda fecha es mayor', () => {
    expect(compareDates("2024-02-01", "2024-02-10")).toBe(-1);
});

test('compareDates() debe devolver 0 si las fechas son iguales', () => {
    expect(compareDates("2024-02-10", "2024-02-10")).toBe(0);
});


import { getMonthName } from './cronos.js';

test('getMonthName("01/01/2025","DD/MM/YYYY","es") debe devolver enero', () => {
    expect(getMonthName("01/01/2025","DD/MM/YYYY","es")).toBe("enero");
});

test('getMonthName("01/10/2025","DD/MM/YYYY","es") debe devolver octubre',() => {
    expect(getMonthName("01/10/2025","DD/MM/YYYY","es")).toBe("octubre");
});

import { isDateInRange } from './cronos.js';

test('isDateInRange("03/10/2025","01/10/2025","05/10/2025","DD/MM/YYYY","DD/MM/YYYY","DD/MM/YYYY") debe devolver true', () => {
    expect(isDateInRange("03/10/2025","01/10/2025","05/10/2025","DD/MM/YYYY","DD/MM/YYYY","DD/MM/YYYY")).toBe(true);
});