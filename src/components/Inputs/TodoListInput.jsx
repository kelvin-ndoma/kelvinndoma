import React, { useState } from 'react';
import { HiMiniPlus, HiOutlineTrash } from "react-icons/hi2";

const TodoListInput = ({ todoList = [], setTodoList }) => {
    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        if (newItem.trim()) {
            // Add new item to the list
            setTodoList([...todoList, newItem.trim()]);
            setNewItem('');
        }
    };

    const handleDeleteItem = (index) => {
        const updatedList = todoList.filter((_, idx) => idx !== index);
        setTodoList(updatedList);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddItem();
        }
    };

    return (
        <div className="space-y-2">
            {/* Display existing todo items */}
            {todoList.map((item, index) => (
                <div
                    key={`todo-${index}`}
                    className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-md p-3"
                >
                    <div className="flex items-center">
                        <span className="text-xs font-medium text-gray-500 mr-3">
                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                        <span className="text-sm text-gray-800">
                            {typeof item === 'string' ? item : item.text}
                        </span>
                    </div>
                    <button
                        onClick={() => handleDeleteItem(index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                        aria-label="Delete task"
                    >
                        <HiOutlineTrash className="w-5 h-5" />
                    </button>
                </div>
            ))}

            {/* Add new todo item */}
            <div className="flex items-center gap-2 mt-4">
                <input
                    type="text"
                    placeholder="Enter task description"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                    onClick={handleAddItem}
                    disabled={!newItem.trim()}
                    className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
                >
                    <HiMiniPlus className="w-4 h-4" />
                    Add
                </button>
            </div>
        </div>
    );
};

export default TodoListInput;