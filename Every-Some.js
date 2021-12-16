
function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        const everyTest = (singleUser) => goodUsers.some((validUser) => validUser.id === singleUser.id);
        const result = submittedUsers.every(everyTest)
        return result
      }
    }

    module.exports = checkUsersValid