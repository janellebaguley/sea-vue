function makeCsvRow (csvContent, tmp, rowDelimiter = `\r\n`, fieldSeperator = ';', idName = 'id') { // TBD Make alphbetical order?
    if (!csvContent) {
        csvContent += idName // set id as first columns
        for (let k1 in tmp) {
            if (tmp.prototype.hasOwnProperty.call(k1) && k1 !== idName) { // set id as first columns
                let text = k1.replace(/;/g, ' ')
                text = text.replace(/([A-Z])/g, ' $1')
                text = text.charAt(0).toUpperCase() + text.slice(1) // capitalize the first letter - as an example.
                csvContent += ';' + text
            }
        }
        csvContent += rowDelimiter
    }
    csvContent += `${tmp[idName]}`
    for (let k2 in tmp) {
        if (tmp.prototype.hasOwnProperty.call(k2) && k2 !== idName) {
            let value = ''
            if (typeof tmp[k2] === 'undefined' || !tmp[k2]) {
                // do nothing
            } else if (typeof tmp[k2] === 'string') {
                value = tmp[k2]
            } else if (Array.isArray(tmp[k2])) {
                value = JSON.stringify(tmp[k2])
            } else if (typeof tmp[k2] === 'object') {
                value = JSON.stringify(tmp[k2])
            } else {
                try {
                    value = tmp[k2].toString()
                } catch (e) {
                    console.log('error', e.toString())
                }
            }
            csvContent += ';' + value.replace(/;/g, ' ')
        }
    }
    csvContent += rowDelimiter
    return csvContent
}

// improved download function
function downloadData (content, filename, type = 'text/csv;charset=utf-8;') {
    const blob = new Blob([content], { type })
    // IE11 & Edge
    if (navigator.msSaveBlob) { // IE hack; see http://msdn.microsoft.com/en-us/library/ie/hh779016.aspx
        navigator.msSaveBlob(blob, filename)
    } else {
        // In FF link must be added to DOM to be clicked
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.setAttribute('download', filename)
        document.body.appendChild(link)
        link.click() // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
        document.body.removeChild(link)
    }
}


// call only after X ms has passed
// Usage debounce(<Your Function>, <debounce time in milliseconds>)
// searchIdDom.addEventListener('input', () => { debounce(makeApiFetch(), 1000); }
// Application
// - Debouncing an input type event handler. (like our search input example)
// - Debouncing a scroll event handler.
const debounce = (callback, delay) => {
    let timeout = null
    return (...args) => {
        const next = () =>
            callback(...args);
        clearTimeout(timeout);
        timeout = setTimeout(next, delay)
    }
}

// call only X times in Y ms
// Usage throttle(<Your Function>, <debounce time in milliseconds>)
// const myHandler = (event) => {...do some stuf...}
// const myThrottleHandler = throttle(myHandler, 1000);
// myMouseDomElement.addEventListener("mousemove", myThrottleHandler);
// Application
// - Throttling an API call.
// - Throttling a button click so we can???t spam click.
// - Throttling a touch/move mouse event handler.
function throttle(callback, wait) {
    var time = Date.now()
    return function() {
        if ((time + wait - Date.now()) < 0) {
            time = Date.now()
            return callback()
        }
        return null
    }
}

const foo = Math.PI + Math.SQRT2

export { foo, makeCsvRow, exportCsv, exportJson, downloadData, debounce, throttle }