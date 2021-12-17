// function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//     const everyTest = (singleUser) => goodUsers.some((validUser) => validUser.id === singleUser.id);
//     const result = submittedUsers.every(everyTest)
//     return result
//   }
// }


function checkUsersValid(goodUsers) {
  const goodUsersId = goodUsers.map(({id}) => id)
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every((user) => goodUsersId.includes(user.id))
  }
}



module.exports = checkUsersValid