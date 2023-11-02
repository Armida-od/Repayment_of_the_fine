"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey) {

    if (searchKey !== null) {
        let results = [];

        for (let dbKey in DB) {
            if (DB[dbKey].номер === searchKey || DB[dbKey].тип === searchKey) {
                results.push({
                    номер: DB[dbKey].номер,
                    тип: DB[dbKey].тип,
                    сума: DB[dbKey].сума,
                    дата: DB[dbKey].дата
                });
            }
        }

        if (results.length > 0) {
            return results;
        } else {
            alert("No records with the specified number or type were found.");
        }
    } else {
        alert("Enter a search value.");
    }
}
/*
 Напишіть свій код тут!
 Як ви бачите функція повертає статичні дані.
 Замість масиву який прописаний хардкодом, вам необхідно реалізувати цю функцію
 так, щоб вона повертала масив відповідно переданому значенню в функцію.
 Саме значення - це "Пошук за номером" або "Пошук за типом штрафу"
 Тип штрафу може бути тільки
 - Перевищення швидкості
 - Невірне паркування
 - Їзда у не тверезому стані
 */

