const requiredMessage = 'Это обязательное поле'
export const ValidationMessages = {
        email: {
            required: requiredMessage,
            pattern: 'Не верный формат email'
        },
        password: {
            required: requiredMessage,
            pattern: 'не менее 10 символов, не менее1 числа, не менее 1 буквы в верхнем регистре'
        },
        phone: {
            required: requiredMessage,
            pattern: 'Не верный формат телефона'
        },
        amount: {
            required: requiredMessage,
            pattern: '5 - 5000',
            min: 'Слишком мало',
            max: 'Слишком много'
        },
        card: {
            required: requiredMessage,
            pattern: 'Введите 16 цифр без пробелов'
        },
        cvv: {
            required: requiredMessage,
            pattern: '3 цифры'
        }
    }