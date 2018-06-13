export default async function getUser(user, userId) {
  if (!user) {
    return {
      error: {
        body: {
          message: 'Unknown userId',
        },
        status: 409,
      },
    };
  }
  if (userId !== 'admin' && user.id !== userId) {
    return {
      error: {
        body: {
          message: 'You are not allowed to see user informations of other users',
        },
        status: 409,
      },
    };
  }
  return {
    userInfo: { user },
  };
}
