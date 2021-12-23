function getHash(str, algo = "SHA-256") {
    let strBuf = new TextEncoder().encode(str);
    return crypto.subtle.digest(algo, strBuf)
        .then(hash => {
            window.hash = hash;
            let result = '';
            const view = new DataView(hash);
            for (let i = 0; i < hash.byteLength; i += 4) {
                result += ('00000000' + view.getUint32(i).toString(16)).slice(-8);
            }
            return result;
        });
}

let hash = {}
hash.code = function (str) {
    return getHash(str)
}

export default hash