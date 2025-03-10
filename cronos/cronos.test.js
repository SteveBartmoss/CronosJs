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

test('getDayReference("01/03/2025","DD/MM/YYYY","es") de retornar el dia de la semana', ()=>{
    const result = getDayReference('01/03/2025','DD/MM/YYYY','es')
    expect(result).toBe("Sábado")
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
