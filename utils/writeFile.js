const fs = require('fs');

const writeFile = pageHTML => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) {
                reject(err)
                return
            }
            resolve({
                ok: true,
                message: 'File created'
            })
        })
    })
}

module.exports = writeFile;