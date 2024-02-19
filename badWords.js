const badWordsPatterns = [
    'пiдманула',
    'пiдвела',
    'понедiло*к[а-я]*',
    'вiвторо*к[а-я]*',
    'серед[а-я]+',
    'четвер',
    'п’ятниц[а-я]+',
    'субот[а-я]+',
    'недiл[а-я]+'
];

export function replaceBadWords(forValidation) {
    let regex1;
    badWordsPatterns.forEach(element => {
        regex1 = new RegExp(element, 'g');
        forValidation = forValidation.replaceAll(regex1, function (match) {
            let replaced = match[0];
            for (let i = 1; i < (match.length - 1); i++) {
                replaced += '*';
                
            }
            replaced += match[match.length - 1];
            return replaced;
        })

    });
    return forValidation;
}