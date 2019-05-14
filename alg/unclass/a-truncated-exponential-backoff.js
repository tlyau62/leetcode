(async function () {
    'use strict';

    const maxRetry = 10;
    let retry, maxBackOff;

    retry = 0;
    maxBackOff = 60;

    /**
     * Simulate transmission
     */
    while (true) {
        try {
            const msg = await simulateTransmission(retry, maxBackOff);

            console.log(msg);
            break;
        } catch (ex) {
            console.log(ex);

            if (retry >= maxRetry) {
                console.log('exceed max retry');
                break;
            }

            retry++;
        }
    }

    /**
     * Truncated exponential backoff
     * Ref: https://cloud.google.com/storage/docs/exponential-backoff
     * @param {number} retry 
     * @param {number} maxBackOff 
     */
    function ComputeBackoff(retry, maxBackOff) {
        return (Math.min(maxBackOff, Math.pow(2, retry)) + Math.random()) * 1000;
    }

    /**
     * Simulate transmission. However, it never receives successfully.
     * @param {number} retry 
     * @param {number} maxBackOff 
     */
    function simulateTransmission(retry, maxBackOff) {
        return new Promise(function (res, rej) {
            setTimeout(function () {
                rej("get fail, retry: " + retry + ", waited: " + ComputeBackoff(retry, maxBackOff) / 1000);
            }, ComputeBackoff(retry, maxBackOff));
        });
    }
})();