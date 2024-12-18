import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/auth`;

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    const token = response.data.data.token;

    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('userId', response.data.data.userId);
      localStorage.setItem('username', response.data.data.username);
      localStorage.setItem('email', response.data.data.email);

      return response.data.data;
    } else {
      throw new Error('Login gagal: Tidak ada token');
    }
  } catch (error) {
    console.error('Error saat login:', error.response?.data?.message || error.message);
    throw error.response?.data?.message || 'Login gagal';
  }
};

// Fungsi register
const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error.response?.data?.message || error.message);
    throw error.response?.data?.message || 'Registrasi gagal';
  }
};

// Fungsi untuk mengambil profil pengguna
const getProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    
    if (!token) {
      throw new Error('Tidak ada token yang tersimpan');
    }

    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('Error saat mengambil profil:', error.response?.data?.message || error.message);
    throw error.response?.data?.message || 'Gagal mengambil profil';
  }
};

// Fungsi baru untuk memperbarui profil
const updateProfile = async (updateData) => {
  try {
    const token = localStorage.getItem("token");
    
    if (!token) {
      throw new Error('Tidak ada token yang tersimpan');
    }

    const response = await axios.put(`${API_URL}/edit-profile`, updateData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('Error saat memperbarui profil:', error.response?.data?.message || error.message);
    throw error.response?.data?.message || 'Gagal memperbarui profil';
  }
};

// Fungsi sign out
const signOut = async () => {
  try {
    const token = localStorage.getItem("token");
    
    if (!token) {
      throw new Error('Tidak ada token yang tersimpan');
    }

    await axios.post(`${API_URL}/signout`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('email');

    return true;
  } catch (error) {
    console.error('Error saat sign out:', error.response?.data?.message || error.message);
    throw error.response?.data?.message || 'Gagal sign out';
  }
};

export { 
  login, 
  register, 
  getProfile, 
  updateProfile,
  signOut 
};