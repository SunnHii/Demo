import { useEffect, useState } from "react";
import axios from "axios";
import type  { User } from "./types/User";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

const API_URL = "http://localhost:3000/users";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  // Load users
  const fetchUsers = async () => {
    const res = await axios.get<User[]>(API_URL);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add or update
  const handleSubmit = async (data: Omit<User, "id">) => {
    if (editingUser) {
      await axios.put(`${API_URL}/${editingUser.id}`, data);
      setEditingUser(null);
    } else {
      await axios.post(API_URL, data);
    }
    fetchUsers();
  };

  // Delete
  const handleDelete = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchUsers();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧍 Quản lý User</h1>

      <UserForm onSubmit={handleSubmit} editingUser={editingUser} />
      <UserTable users={users} onEdit={setEditingUser} onDelete={handleDelete} />
    </div>
  );
}
