export default async function addUser(user, data) {
  if (user) {
    return {
      error: {
        status: 409,
        massage: 'user already exist',
      },
    };
  }

  return {
    action: 'ADD_USER',
    payload: {
      user: data,
    },
  };
}
