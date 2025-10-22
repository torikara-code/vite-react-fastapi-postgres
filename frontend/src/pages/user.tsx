import React, { useEffect, useState } from "react";
import axios from "axios";
import EditModal from "../components/EditModal";

const About: React.FC = () => {
  type User = {
    id: number;
    name: string;
  };

  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Axiosインスタンス（必要に応じて共通設定）
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
  });

  // ユーザー一覧取得
  const fetchUsers = async () => {
    try {
      const res = await api.get<{ users: User[] }>("/api/v1/user");
      setUsers(res.data.users); // users配列を取り出す
    } catch (error) {
      console.error("ユーザー取得エラー:", error);
    }
  };

  // ユーザー追加
  const addUser = async () => {
    if (!name.trim()) return;
    try {
      const res = await api.post<User>("/api/v1/user", { name });
      setUsers([...users, res.data]);
      setName("");
    } catch (error) {
      console.error("ユーザー追加エラー:", error);
    }
  };

  const openEditModal = (user: User) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleSave = async (id: number, newName: string) => {
    try {
      const res = await api.put<User>(`/api/v1/user/${id}`, {
        id,
        name: newName,
      });
      setUsers(users.map((u) => (u.id === id ? res.data : u)));
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  // ユーザー削除
  const deleteUser = async (id: number) => {
    try {
      await api.delete(`/api/v1/user/${id}`);
      setUsers(users.filter((u) => u.id !== id));
    } catch (error) {
      console.error("ユーザー削除エラー:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-6 box-border">
      <h1 className="text-3xl font-bold text-slate-200 mb-6">
        ユーザー管理 CRUD
      </h1>

      <div className="flex mb-6 w-full max-w-md text-black">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="名前を入力"
          className="flex-1 p-2 border rounded-1-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addUser}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-md transition-colors"
        >
          追加
        </button>
      </div>

      <ul className="w-full max-w-md space-y-2">
        {users.map((u) => (
          <li
            key={u.id}
            className="bg-white p-3 rounded-md shadow flex justify-between items-center"
          >
            <span className="text-gray-800 font-medium">{u.name}</span>
            <div className="space-x-2">
              <button
                onClick={() => openEditModal(u)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded-md transition-colors"
              >
                編集
              </button>
              <button
                onClick={() => deleteUser(u.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md transition-colors"
              >
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editingUser && (
        <EditModal
          userId={editingUser.id}
          currentName={editingUser.name}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default About;
