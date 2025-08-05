import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { PRIORITY_DATA } from "../../utils/data";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { LuTrash2 } from "react-icons/lu";
import SelectDropdown from '../../components/Inputs/SelectDropdown';
import SelectUsers from '../../components/Inputs/SelectUsers';
import TodoListInput from '../../components/Inputs/TodoListInput';
import AddAttachementsInput from '../../components/Inputs/AddAttachementsInput';
import { useEffect } from 'react';
import DeleteAlert from '../../components/DeleteAlert';
import Modal from '../../components/Modal';

const CreateTask = () => {

    const location = useLocation();
    const { taskId } = location.state || {};
    const navigate = useNavigate();

    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
        priority: "Low",
        dueDate: null,
        assignedTo: [],
        todoChecklist: [],
        attachments: []
    });

    const [currentTask, setCurrentTask] = useState(null);

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [openDeleteAlert, setOpenDeleteAlert] = useState(false);

    const handleValueChange = (key, value) => {
        setTaskData((prevData) => ({ ...prevData, [key]: value }));
    };

    const clearData = () => {
        // Reset form to initial state
        setTaskData({
            title: "",
            description: "",
            priority: "Low",
            dueDate: null,
            assignedTo: [],
            todoCheckList: [],
            attachments: [],
        });
    };

    // Create Task
    const createTask = async () => {
        setLoading(true);

        try {
            const todoList = taskData.todoChecklist?.map((item) => ({
                text: item,
                completed: false,
            }));

            const response = await axiosInstance.post(API_PATHS.TASKS.CREATE_TASK, {
                ...taskData,
                dueDate: new Date(taskData.dueDate).toISOString(),
                todoChecklist: todoList,
            });

            toast.success('Task Created Successfully');
            clearData();

        } catch (error) {
            // Handle error here
            console.error("Error creating task:", error);
            setLoading(false)
        } finally {
            setLoading(false)
        }

    };

    // Update Task
    const updateTask = async () => {
        setLoading(true);

        try {
            const todoList = taskData.todoChecklist?.map((item) => {
                const prevTodoChecklist = currentTask?.todoChecklist || [];
                const matchedTask = prevTodoChecklist.find((task) => task.text === item);

                return {
                    text: item,
                    completed: matchedTask ? matchedTask.completed : false,
                };
            });

            const response = await axiosInstance.put(
                API_PATHS.TASKS.UPDATE_TASK(taskId),
                {
                    ...taskData,
                    dueDate: new Date(taskData.dueDate).toISOString(),
                    todoChecklist: todoList,

                }

            );
            toast.success("Task Updated Successfully")
        } catch (error) {
            console.error("Error updating task:", error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };


    const handleSubmitTask = async () => {
        setError(null)
        // Input validation
        if (!taskData.title.trim()) {
            setError("Title is required.")
            return;
        }
        if (!taskData.description.trim()) {
            setError("Description is required.")
            return;
        }
        if (!taskData.dueDate) {
            setError("Due date is required.")
            return;
        }
        if (taskData.assignedTo?.length === 0) {
            setError("Task not assigned to any member");
            return;
        }
        if (taskData.todoChecklist?.length === 0) {
            setError("Add atleast one todo task.")
            return;
        }
        if (taskId) {
            updateTask();
            return;
        }

        createTask();


    }

    //   get Task info by ID
    const getTaskDetailsByID = async (taskId) => {  // Add taskId as parameter
        try {
            const response = await axiosInstance.get(API_PATHS.TASKS.GET_TASK_BY_ID(taskId));

            if (response.data) {
                const taskInfo = response.data;
                setCurrentTask(taskInfo);

                setTaskData((prevState) => ({
                    ...prevState,  // Preserve existing state
                    title: taskInfo.title,
                    description: taskInfo.description,
                    priority: taskInfo.priority,
                    dueDate: taskInfo.dueDate
                        ? moment(taskInfo.dueDate).format("YYYY-MM-DD")
                        : null,
                    assignedTo: taskInfo?.assignedTo?.map((item) => item?._id) || [],
                    todoChecklist: taskInfo?.todoChecklist?.map((item) => item?.text) || [],
                    attachments: taskInfo?.attachments || []
                }));
            }
        } catch (error) {
            console.error("Error fetching task:", error);
            // Add additional error handling if needed
        }
    }

    // Proper useEffect at component level
    useEffect(() => {
        if (taskId) {
            getTaskDetailsByID(taskId);
        }
    }, [taskId]);  // Add getTaskDetailsByID to dependencies if not using useCallback

    // Delete task function (separate from the data fetching)
    const deleteTask = async () => {
        try {
            await axiosInstance.delete(API_PATHS.TASKS.DELETE_TASK(taskId));
            setOpenDeleteAlert(false)
            toast.success("Task Deleted Successfully")
            navigate('/admin/tasks')
            // Add success handling (navigation, notification, etc.)
        } catch (error) {
            console.error("Error deleting task:",
                error.response?.data?.message || error.message);
        }
    }
    return (
        <DashboardLayout activeMenu="Create Task">
            <div className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-4 mt-4">
                    <div className='form-card col-span-3 '>
                        <div className='flex items-center justify-between'>
                            <h2 className=' text-xl md:text-xl font-medium'>
                                {taskId ? "Update Task" : "Create Task"}
                            </h2>
                            {taskId && (
                                <button className='flex items-center gap-1.5 text-[13px] font-medium text-rose-500 bg-rose-50 rounded px-2 py-1 border border-rose-100 hover:border-rose-300 cursor-pointer'
                                    onClick={() => setOpenDeleteAlert(true)}>
                                    <LuTrash2 className='text-base' /> Delete
                                </button>
                            )}
                        </div>
                        <div className='mt-4'>
                            <label className='text-xs font-medium text-slate-600' >Task Title</label>
                            <input
                                placeholder='Create App UI'
                                className='form-input'
                                value={taskData.title}
                                onChange={({ target }) =>
                                    handleValueChange("title", target.value)}
                            />
                        </div>
                        <div className='mt-3'>
                            <label className='text-xs font-medium text-slate-600'>
                                Description
                            </label>
                            <textarea
                                placeholder='Describe Task'
                                className='form-input'
                                rows={4}
                                value={taskData.description}
                                onChange={({ target }) =>
                                    handleValueChange("description", target.value)}
                            />
                        </div>
                        <div className='grid grid-cols-12 gap-4 mt-2'>
                            <div className='col-span-6 md:col-span-4'>
                                <label className='text-xs font-medium text-slate-600'
                                >Priority
                                </label>
                                <SelectDropdown
                                    options={PRIORITY_DATA}
                                    value={taskData.priority}
                                    onChange={(value) => handleValueChange("priority", value)}
                                    placeholder="Select Priority"
                                />
                            </div>

                            <div className='col-span-6 md:col-span-4'>
                                <label className='text-xs font-medium text-slate-600'>
                                    Due Date
                                </label>
                                <input
                                    placeholder='Create App UI'
                                    className='form-input'
                                    value={taskData.dueDate}
                                    onChange={({ target }) => handleValueChange("dueDate", target.value)}
                                    type='date'
                                />
                            </div>
                            <div className='col-span-12 md:col-span-3'>
                                <label className='text-xs font-medium text-slate-600'>
                                    Assign To
                                </label>
                                <SelectUsers
                                    selectedUsers={taskData.assignedTo}
                                    setSelectedUsers={(value) => [
                                        handleValueChange("assignedTo", value)
                                    ]} />
                            </div>

                        </div>
                        <div className='mt-3'>
                            <label className='text-xs font-medium text-slate-600'>
                                TODO Checklist
                            </label>
                            <TodoListInput
                                todoList={taskData.todoChecklist}
                                setTodoList={(value) =>
                                    handleValueChange("todoChecklist", value)
                                }
                            />
                        </div>

                        <div className='mt-3'>
                            <label className='text-xs font-medium text-slate-600'>
                                Add Attachment
                            </label>
                            <AddAttachementsInput
                                attachments={taskData?.attachments}
                                setAttachments={(value) =>
                                    handleValueChange("attachments", value)
                                }
                            />
                        </div>
                        {error && (
                            <p className='text-xs font-medium text-red-500 mt-5'>{error}</p>
                        )}
                        <div className='flex justify-end mt-7'>
                            <button
                                className='add-btn'
                                onClick={handleSubmitTask}  // Changed from handleSubmit to handleSubmitTask
                                disabled={loading}
                            >
                                {taskId ? "UPDATE TASK" : "CREATE TASK"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={openDeleteAlert}
                onClick={() => setOpenDeleteAlert(false)}
                title={
                    <span className="text-lg font-bold text-red-600">
                        Delete Task
                    </span>
                }
            >
                <DeleteAlert
                    content="Are you sure you want to delete this task?"
                    onDelete={() => deleteTask()}
                    onCancel={() => setOpenDeleteAlert(false)}
                />
            </Modal>
        </DashboardLayout>
    );
};

export default CreateTask;