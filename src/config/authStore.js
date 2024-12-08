import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3000/api/auth/login', {
      email,
      password,
    });

    // Akses token dari response.data.data.token
    const token = response.data.data.token;

    console.log('Token yang diterima:', token);

    if (token) {
      localStorage.setItem('token', token);
      console.log("Token berhasil disimpan di localStorage");
      
      // Simpan informasi user lainnya jika diperlukan
      localStorage.setItem('userId', response.data.data.userId);
      localStorage.setItem('username', response.data.data.username);
      localStorage.setItem('email', response.data.data.email);

      return response.data.data;
    } else {
      console.error('Token tidak ditemukan dalam respons');
      throw new Error('Login gagal: Tidak ada token');
    }
  } catch (error) {
    console.error('Error saat login:', error.response?.data?.message || error.message);
    throw error.response?.data?.message || 'Login gagal';
  }
};



// Fungsi untuk register
const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    return response.data; // Mengembalikan data pengguna atau token
  } catch (error) {
    console.error('Error during registration:', error.response?.data?.message || error.message);
    throw error.response?.data?.message || 'Registrasi gagal';
  }
};

// Fungsi untuk mengambil semua pengguna
const getAllUsers = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    const response = await axios.get(`${API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`, // Kirim token di header Authorization
      },
    });
    return response.data; // Mengembalikan daftar pengguna
  } catch (error) {
    console.error('Error during fetching users:', error.response?.data?.message || error.message);
    throw error.response?.data?.message || 'Gagal mengambil data pengguna';
  }
};

const handleDeleteUser = async (userId) => {
  try {
    await deleteUser(userId); // Panggil fungsi deleteUser
    setUsers(users.filter((user) => user._id !== userId)); // Hapus user dari state lokal
    console.log(`Pengguna dengan ID ${userId} berhasil dihapus.`);
  } catch (error) {
    console.error("Gagal menghapus pengguna:", error);
  }
};


export { login, register, getAllUsers, handleDeleteUser };
