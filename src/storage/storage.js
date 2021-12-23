function addJws(jws) {
    localStorage.setItem("jws", jws)
}
function clearJws() {
    localStorage.setItem("jws", "")
}
function getJws() {
    if (localStorage.getItem("jws") === null) {
        clearJws()
        return ""
    } else {
        return localStorage.getItem("jws")
    }
}

let storage = {}
storage.addJws = function (jws) {
    addJws(jws)
}
storage.clearJws = function () {
    clearJws()
}
storage.getJws = function () {
    return getJws()
}

export default storage
