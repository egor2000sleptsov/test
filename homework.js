const arr = [1, [2], [3, [4, 5, 6, [7]]]]
const flatten = array => {
		let result = []
		for (let i = 0; i < array.length; i++) {
				if (Array.isArray(array[i])) {
						result = [...result, ...flatten(array[i])]
				} else {
						result.push(array[i])
				}
		}
		return result
}
const fix = arr => arr.reduce((result, currValue) => result.concat(Array.isArray(currValue) ? fix(currValue) : currValue), [])
// console.log(fix(arr));

const getSumFromCheck = namesAndPrices => {
		const deleteDote = string => {
				if (string.indexOf('.') !== -1 && string.split('.')[1].length === 3) {
						string = string.replace('.', '')
				}
				return string
		}
		let arrOfNumber = []
		let isNumber = false
		let number = ''
		for (let i = 1; i < namesAndPrices.length; i++) {
				if (isNaN(+namesAndPrices[i]) && namesAndPrices[i] !== '.') {
						if (isNumber) {
								arrOfNumber.push(number)
								number = ''
						}
						isNumber = false
				} else {
						isNumber = true
						number += namesAndPrices[i]
				}
		}
		arrOfNumber.push(number)
		arrOfNumber = arrOfNumber.map(el => {
				let numberOfDots = el.match(/\./g) ?? []
				numberOfDots = numberOfDots.length
				if (numberOfDots < 2) {
						el = deleteDote(el)
						return +el
				} else {
						console.log(el)
						for (let i = 1; i < 2; i++) {
								el = el.replace('.', '')
						}
						el = deleteDote(el)
						return +el
				}
				// return 1
		})
		console.log(arrOfNumber)
		return arrOfNumber.reduce((acc, currentValue) => acc + currentValue)
}
const testString = 'bread132milk1.23oil2.333eggs2.333.23may45.454'
const testString1 = 'A132A1.23A2.333A2.333.23A45.454.292'
console.log(getSumFromCheck(testString1))
// const re = /[a-z]/
// console.log(string.replace(re))

