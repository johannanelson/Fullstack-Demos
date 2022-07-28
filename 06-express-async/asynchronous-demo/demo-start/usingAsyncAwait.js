const fs = require('fs');

const readFile = (fileName) => {
  const newPromise = new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (error, data) => {
      if (error) {
        reject(error)
      }
      else {
        resolve(data)
      }
    })
  })
  return newPromise;

}

const main = async () => {
  try {
    const textPromise = await readFile('./frankenstein.txt')
    console.log('Here is my text promise: ', textPromise)
    //console.log('Here is my text: ', await textPromise)
  }
  catch(error) {
    console.log("An error occurred", error)
  }
}

main()
