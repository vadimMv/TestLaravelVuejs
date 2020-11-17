export const isValidIsraeliID = id =>
    /\d{9}/.test(id) && Array.from(id, Number).reduce((counter, digit, i) => {
        const step = digit * ((i % 2) + 1);
        return counter + (step > 9 ? step - 9 : step);
    }) % 10 === 0;

export const isValidName = name => {
    const arr = name.split(/\s+/);
    if (arr.length < 2) return false;
    return arr.every(part => /^([a-zA-Z\u0590-\u05fe ])+$/.test(part) === true);
};

export const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const isValidTelephone = tel => /^\d{10}$/.test(tel);
