import { isSequenceOfDigits } from '../helpers/isSequenceOfDigits.js'

const keyboard = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}

export const numberToWord = (input) => {
  // if (arguments.length !== 1) {
  //   throw new Error('Accepts only one input')
  // }
  if (typeof input !== 'string') {
    throw new Error('Accepts only string value')
  }
  if (!isSequenceOfDigits(input)) {
    throw new Error('Input should be sequence of digits')
  }

  const digits = input.split('').filter(digit => digit > 1)

  let result = []

  digits.forEach((digit, i) => {
    if (i === 0) {
      result.push(keyboard[digit])
    } else {
      result.forEach((word, i) => {
        const newWord = []
        keyboard[digit].forEach((letter) => {
          newWord.push(`${word}${letter}`)
        })
        result[i] = newWord
      })
    }
    result = [...result]
  })
  return result
} 

export const getInput = async (req, res) => {
  const { input } = req.params
  if (typeof input !== 'string') {
    return res.status(422).json({ error: 'Input should be a string' })
  }
  if (!isSequenceOfDigits(input)) {
    return res.status(422).json({ error: 'Input should be sequence of digits.' })
  }

  const wordList = numberToWord(input)
  const result = { result: wordList }
  return res.status(200).json(result)
}