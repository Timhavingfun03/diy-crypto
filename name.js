

// function caesarEncrypt(msg, shift){

// const charCodes = []
// for (let i = 0; i < secretMessage.length; i++) {
//     charCodes.push(msg[i].charCodeAt(0))
// }

// for (let i = 0; i < charCodes.length; i++) {
//     charCodes[i] = charCodes[i] + shift
// }

// let result = ""
// for (let i = 0; i < charCodes.length; i++) {
//     result = result + String.fromCharCode(charCodes[i])
    
//     }

//     return result
// }

// function caesarDecrypt(encryptedMsg, shift){

// }

// const secretMessage = "RETREATTOMORROW"
// const decryptMessage = caesarDecrypt(encryptedMessage, 5)
// const encryptedMessage = caesarEncrypt(secretMessage, 5)

// console.log(secretMessage, encryptedMessage, decryptedMessage)

import { caesarEncrypt, caesarDecrypt } from "./diycrypto.js"

console.log(caesarEncrypt("HELLO", 1))