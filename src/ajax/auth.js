export default function (instance) {
    return {
        registration(payload) {
            return instance.post('users/registration', payload)
        },
        login(payLoad) {
            return instance.post('/users/logging', payLoad)
        },
        checkLogin(payload) {
            return instance.post('/users/checking', payload)
        },
        addPoint(payload) {
            return instance.post('/points/adding', payload)
        },
        getPoints(payload) {
            return instance.post('/points/receiving', payload)
        },
        removePoints(payload) {
            return instance.post('/points/removing', payload)
        }
    }
}