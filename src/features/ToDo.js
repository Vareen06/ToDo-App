import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, updateItem, deleteItem, handleinputChange } from './toDoSlice';

export function ToDo() {
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">TO DO LIST:</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter text"
            value={state.inputValue}
            onChange={(e) => dispatch(handleinputChange(e.target.value))}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="button"
            aria-label="Add/Update Text"
            onClick={() => dispatch(addItem(state.inputValue))}
            className="mt-2 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {state.update.isupdate ? "Update text" : "Add Text"}
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2">Tasks to perform:</th>
            </tr>
          </thead>
          <tbody>
            {state.value.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{item}</td>
                <td className="p-2">
                  <button
                    type="button"
                    aria-label="Delete"
                    onClick={() => dispatch(deleteItem(index))}
                    className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    Delete
                  </button>
                </td>
                <td className="p-2">
                  <button
                    aria-label="Update"
                    disabled={state.update.isupdateIndex === index}
                    onClick={() => dispatch(updateItem({ data: state.value[index], index: index }))}
                    className={`bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 ${
                      state.update.isupdateIndex === index ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
