"use strict";
/**
 Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
 Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
 яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

/**
 Вам необхідно реалізувати наступний функціонал.
 Зробити валідацію до всіх полів
 1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
 alert "Номер не співпадає" або "Сума не співпадає"

 2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
 Якщо не співпадає то видавати alert "Не вірний паспортний номер"

 3. Номер кредитної карки 16 цифр -
 якщо не співпадає то видавати alert "Не вірна кредитна картка"

 4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

 Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */
buttonSubmit.addEventListener('click', payFine);

function payFine() {
    const dbFine = data.finesData;
    //Перевірка номера та суми

    if (!isNaN(amount.value)) {
        let matchFound = false;

        dbFine.forEach((fine, index) => {
            if (fineNumber.value === fine.номер && Number(amount.value) === fine.сума) {
                matchFound = true;
                dbFine.splice(index, 1); // Видалити об'єкт з бази даних
                alert("The fine paid and removed from the database.");
            }
        });
        if (matchFound === false) {
            alert("The information is incorrect, the fine was not paid.");
        }
    } else {
        alert("Amount is not a valid number.");
    }
    // Перевірка паспортних даних
    let passportRegex = /^[А-ЯA-Z]{2}\d{6}$/i;
    if (passportRegex.test(passport.value) === false) {
        alert("You entered incorrect passport information");
    }

    // Перевірка номера кредитної карти
    let creditCardRegex = /^\d{16}$/;
    if (creditCardRegex.test(creditCardNumber.value) === false) {
        alert("Invalid credit card");
    }

    // Перевірка CVV
    let cvvRegex = /^\d{3}$/;
    if (cvvRegex.test(cvv.value) === false) {
        alert("Invalid CVV");
    }
}
