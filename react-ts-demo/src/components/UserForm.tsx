import { useState, useEffect } from "react";
import type  { User } from "../types/User";

type Props = {
  onSubmit: (data: Omit<User, "id">) => void;
  editingUser?: User | null;
};

export default function UserForm({ onSubmit, editingUser }: Props) {
  const [form, setForm] = useState<Omit<User, "id">>({
    name: "",
    email: "",
    age: 0,
  });

  useEffect(() => {
    if (editingUser) {
      setForm({
        name: editingUser.name,
        email: editingUser.email,
        age: editingUser.age,
      });
    }
  }, [editingUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "age" ? Number(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", email: "", age: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 rounded w-full"
        required
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="border p-2 rounded w-full"
        required
      />
      <input
        name="age"
        type="number"
        value={form.age}
        onChange={handleChange}
        placeholder="Age"
        className="border p-2 rounded w-full"
        required
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        {editingUser ? "Cập nhật" : "Thêm mới"}
      </button>
    </form>
  );
}
