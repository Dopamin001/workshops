function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        const solution = submittedUsers.some(isValid)
        function isValid(goodUsers) {
          return submittedUsers.id === goodUsers.id
        }
        return submittedUsers.every(solution)
        
    }

    module.exports = checkUsersValid