export const useDocument = () => {

    function wrapPromise(promise) {
        let status = 'pending';
        let result;
        let suspender = promise.then(
            r => {
                status = 'success';
                result = r;
            },
            e => {
                status = 'error';
                result = e;
            }
        );
        return {
            read() {
                if (status === 'pending') {
                    throw suspender;
                } else if (status === 'error') {
                    throw result;
                } else if (status === 'success') {
                    return result;
                }
            }
        };
    }

    function fontStatus () {
        return new Promise((resolve, reject) => {
            document.fonts.ready.then(() => {
                resolve(true)
            }).catch(error => {
                reject(null)
            })
        })
    }

    function appReady () {
        const fontStatusPromise = fontStatus()
        return {
            fontLoaded: wrapPromise(fontStatusPromise)
        }
    }
    return [appReady]
}