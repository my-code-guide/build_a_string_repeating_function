function repeatStringNumTimes(str, num) {
  let result = ''

  for (let i = 1; i <= num; i += 1) {
    result += str
  }

  return result
}