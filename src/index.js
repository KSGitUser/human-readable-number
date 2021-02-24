module.exports = function toReadable(number) {
    const numberToStr = (number, str = '') => {
        switch (true) {
            case number === 0:
                str += 'zero';
                break;
            case number === 1:
                str += 'one';
                break;
            case number === 2:
                str += 'two';
                break;
            case number === 3:
                str += 'three';
                break;
            case number === 4:
                str += 'four';
                break;
            case number === 5:
                str += 'five';
                break;
            case number === 6:
                str += 'six';
                break;
            case number === 7:
                str += 'seven';
                break;
            case number === 8:
                str += 'eight';
                break;
            case number === 9:
                str += 'nine';
                break;
            case number === 10:
                str += 'ten';
                break;
            case number === 11:
                str += 'eleven';
                break;
            case number === 12:
                str += 'twelve';
                break;
            case number === 13:
                str += 'thirteen';
                break;
            case number === 15:
                str += 'fifteen';
                break;
            case number === 18:
                str += 'eighteen';
                break;
            case (number >= 14 && number <= 19) && (number !== 15 && number !== 18):
                str += numberToStr(number - 10, str) + "teen";
                break;
            case number >= 20 && number < 30:
                str += "twenty " + numberToStr(number - 20 || null, str);
                break;
            case number >= 30 && number < 40:
                str += `thirty ${numberToStr(number - 30 || null, str)}`;
                break;
            case number >= 40 && number < 50:
                str += `forty ${numberToStr(number - 40 || null, str)}`;
                break;
            case number >= 50 && number < 60:
                str += `fifty ${numberToStr(number - 50 || null, str)}`;
                break;
            case number >= 60 && number < 80:
                str += `${numberToStr(+String(number)[0], str)}ty ${numberToStr(+String(number)[1] || null, str)}`;
                break;
            case number >= 80 && number < 90:
                str += `${numberToStr(+String(number)[0], str)}y ${numberToStr(+String(number)[1] || null, str)}`;
                break;
            case number >= 90 && number < 100:
                str += `${numberToStr(+String(number)[0], str)}ty ${numberToStr(+String(number)[1] || null, str)}`;
                break;
            case number >= 100 && number < 1000:
                str += `${numberToStr(+String(number)[0], str)} hundred ${numberToStr(+String(number).slice(-2) || null, str)}`;
                break;
            case number >= 1000 && number < 1000000:
                const strFromNumber = String(number);
                const stringLength = strFromNumber.length;
                str += `${numberToStr(+strFromNumber.slice(0, stringLength - 3), str)} thousand ${numberToStr(+strFromNumber.slice(-3) || null, str)}`;
                break;
            default:
                str += '';
        }

        return str.trim();
    }
    let finalString = '';
    return numberToStr(number, finalString);
}

