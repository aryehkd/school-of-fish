const Cloud = require('@google-cloud/storage')
const path = require('path')
const util = require('util')

const serviceKey = path.join(__dirname, '../service-account/schools-of-fish-e2e93d9acfe6.json')

const { Storage } = Cloud

const gcStorage = new Storage({
  keyFilename: serviceKey,
  projectId: 'schools-of-fish',
})

const bucket = gcStorage.bucket('photo-storage-1')

export const uploadImage = (file: any) => new Promise((resolve, reject) => {
    const { originalname, buffer } = file

    const blob = bucket.file(originalname.replace(/ /g, "_"))
    const blobStream = blob.createWriteStream({
        resumable: false
    })
    blobStream.on('finish', () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`
        resolve(publicUrl)
    })
    .on('error', () => {
        reject(`Unable to upload image, something went wrong`)
    })
    .end(buffer)
})
