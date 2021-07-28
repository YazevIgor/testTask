function compare(ruText, enTextWithComments) {
    let equalPairs = [];
    let sizeEnText = {};
    for (let k = 0; k < enTextWithComments.length; k++) {
        let enText = enTextWithComments[k].split('|')[0];
        let comment = enTextWithComments[k].split('|')[1]
        let sum = indexConsider(enText)  + indexConsider(comment);
        if (sizeEnText[sum] == null) {
            sizeEnText[sum] = [];
        }
        sizeEnText[sum].push(k);
    }
    for (let i = 0; i < ruText.length; i++) {
        let sizeRuText = indexConsider(ruText[i]);
        if (sizeEnText[sizeRuText] == null) {
            continue;
        }
        for (let el of sizeEnText[sizeRuText]) {
            equalPairs.push({
                ruText: ruText[i],
                enText: enTextWithComments[el]
            });
        }
    }
    return equalPairs;
}

function indexConsider(text) {
    let nonLetters = [' ', ',', '.', ':', '-', ';', '\''];
    let stringIndex = 0;
    for (let n = 0; n < text.length; n++) {
        if (!nonLetters.includes(text[n])) stringIndex += 1;
    }
    return stringIndex * stringIndex / 2;
}
