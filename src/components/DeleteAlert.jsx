import React from 'react';

const DeleteAlert = ({ content, onDelete, onCancel }) => {
  return (
    <div className="p-4">
      <p className="text-sm text-gray-700 mb-6">{content}</p>

      <div className="flex justify-end gap-3 mt-6">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlert;