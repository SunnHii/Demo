import type  { User } from "../types/User";

type Props = {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
};

export default function UserTable({ users, onEdit, onDelete }: Props) {
  return (
    <table className="w-full border mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">ID</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Age</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="border p-2 text-center">{user.id}</td>
            <td className="border p-2">{user.name}</td>
            <td className="border p-2">{user.email}</td>
            <td className="border p-2 text-center">{user.age}</td>
            <td className="border p-2 text-center space-x-2">
              <button
                onClick={() => onEdit(user)}
                className="bg-yellow-400 px-2 py-1 rounded"
              >
                Sửa
              </button>
              <button
                onClick={() => onDelete(user.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Xóa
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
