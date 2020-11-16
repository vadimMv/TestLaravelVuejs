export const isValidIsraeliID = id => {
     id = String(id).trim();
    if (id.length > 9 || id.length < 5 || isNaN(id)) return false;
    id = id.length < 9 ? ("00000000" + id).slice(-9) : id;
    return Array
        .from(id, Number)
        .reduce((counter, digit, i) => {
            const step = digit * ((i % 2) + 1);
            return counter + (step > 9 ? step - 9 : step);
        }) % 10 === 0;
};

export const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const isValidTelephone = tel => /^\d{10}$/.test(tel);
export const isValidName = name => /^([a-zA-Z\u0590-\u05fe ])+$/.test(name);
