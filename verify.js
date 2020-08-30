const blockcoremessage = require('./')

const privateKey = [167, 33, 194, 18, 9, 244, 98, 27, 25, 18, 86, 142, 67, 58, 25, 77, 35, 198, 239, 212, 185, 58, 51, 136, 209, 241, 80, 220, 103, 69, 210, 205]

// JWT header and payload.
const message = Buffer.from([101, 121, 74, 104, 98, 71, 99, 105, 79, 105, 74, 70, 85, 122, 73, 49, 78, 107, 115, 105, 76, 67, 74, 48, 101, 88, 65, 105, 79, 105, 74, 75, 86, 49, 81, 105, 76, 67, 74, 114, 97, 87, 81, 105, 79, 105, 74, 81, 86, 71, 85, 50, 84, 85, 90, 79, 98, 51, 86, 76, 81, 86, 82, 121, 84, 69, 89, 49, 87, 87, 74, 113, 101, 70, 73, 120, 89, 110, 78, 108, 97, 84, 74, 54, 100, 51, 112, 107, 101, 85, 120, 86, 73, 110, 48, 46, 101, 121, 74, 117, 89, 87, 49, 108, 73, 106, 111, 105, 83, 107, 81, 105, 102, 81])

var signature = blockcoremessage.sign(message, Buffer.from(privateKey), true, '')

var signatureText = signature.toString('base64')

if (signatureText === 'H78FoVVBZWDjgIU5fKq5cyZCSN7ZXLs27k6zTZkuPuHLEv85V5gIGmjhWsBSn69WbiQofzBnJnJoU8HWW+jx1JI=') {
  console.log('Verified OK!')
} else {
  console.log('Verification failed!')
}
