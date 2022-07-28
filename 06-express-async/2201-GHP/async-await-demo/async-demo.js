const fs = require('fs');

const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (error, data) => {
      if (error) {
        reject(error)
      }
      else {
        resolve(data)
      }
    })
  })
}

const main = async () => {
  try {
    const textPromise = await readFile('./frankenstein.txt')
    console.log('Here is my text: ', textPromise)
  } catch(error) {
    console.error("An error occured", error)
  }
}

main()
