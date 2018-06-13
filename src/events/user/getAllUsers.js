export default async function getAllUsers(users, userId) {
  if (users.length === 0) {
    return {
      error: {
        body: {
          message: 'list is empty',
        },
        status: 204,
      },
    };
  }
  if (userId !== 'admin') {
    return {
      error: {
        body: {
          message: 'You are not allowed to see users list',
        },
        status: 409,
      },
    };
  }
  return {
    usersList: { users },
  };
}
