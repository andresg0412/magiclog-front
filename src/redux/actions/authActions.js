export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
});

export const logout = () => ({
    type: 'LOGOUT',
});

export const checkAuth = () => ({
    type: 'AUTH_SUCCESS',
});
