import React, { useState, useEffect } from "react";

type EditModalProps = {
  userId: number;
  currentName: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: number, newName: string) => void;
};

const EditModal: React.FC<EditModalProps> = ({
  userId,
  currentName,
  isOpen,
  onClose,
  onSave,
}) => {
  const [name, setName] = useState(currentName);

  useEffect(() => {
    setName(currentName);
  }, [currentName]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg text-slate-800 shadow-lg w-96 p-6">
        <h2 className="text-xl font-semibold mb-4">ユーザー編集</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 text-white hover:bg-gray-400 transition-colors"
          >
            キャンセル
          </button>
          <button
            onClick={() => onSave(userId, name)}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
