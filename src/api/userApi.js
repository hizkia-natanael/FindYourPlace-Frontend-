import axiosInstance from "./axiosInstance"

const login = async (email, password) => {
    try {
        const { data } = await axiosInstance.post('/auth/login', { email, password })
        if (data.token) {
            localStorage.setItem('token', data.token)
        }
        return data
    } catch (error) {
        console.error('Login error details:', error.response?.data)
        throw error
    }
}

export const userApi = {
    login
}