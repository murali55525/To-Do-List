import React, { useContext, useState } from "react";
import Greeting from "../Utils/Greeting";
import DisplayTodos from "../Utils/DisplayTodos";
import { RxPlus } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import DataContext from "../context/DataContext";

const Home = () => {
  const {
    data,
    setData,
    edit,
    setEdit,
    addNotificationTitle,
    editNotificationTitle,
    deleteNotificationTitle,
    setDeleteNotificationTitle,
    addNotification,
    editNotification,
    deleteNotification,
    setDeleteNotification,
    setTaskDetails,
  } = useContext(DataContext);

  const navigate = useNavigate();
  
  // Theme state
  const [theme, setTheme] = useState("light");

  // Theme options
  const themes = {
    light: {
      background: "bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300",
      notificationBg: "bg-white",
      notificationBorder: "border-green-600",
      buttonBg: "bg-white",
      buttonIcon: "text-purple-500",
    },
    dark: {
      background: "bg-gradient-to-r from-gray-900 via-gray-700 to-black",
      notificationBg: "bg-gray-800",
      notificationBorder: "border-purple-600",
      buttonBg: "bg-purple-700",
      buttonIcon: "text-white",
    },
    sunset: {
      background: "bg-gradient-to-r from-orange-300 via-red-400 to-pink-500",
      notificationBg: "bg-yellow-100",
      notificationBorder: "border-red-600",
      buttonBg: "bg-orange-500",
      buttonIcon: "text-yellow-300",
    },
  };

  const currentTheme = themes[theme];

  return (
    <div className={`w-full relative min-h-screen pb-60 ${currentTheme.background}`}>
      <div className="max-w-[1300px] px-3 m-auto">
        <div>
          <Greeting />

          {/* Theme Toggle */}
          <div className="flex justify-end mb-4">
            <select
              className="p-2 rounded border border-gray-300"
              onChange={(e) => setTheme(e.target.value)}
              value={theme}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="sunset">Sunset</option>
            </select>
          </div>

          <DisplayTodos
            data={data}
            setData={setData}
            edit={edit}
            setEdit={setEdit}
            setDeleteNotificationTitle={setDeleteNotificationTitle}
            setDeleteNotification={setDeleteNotification}
            setTaskDetails={setTaskDetails}
          />

          {/* Add Notification */}
          {addNotification && (
            <div className={`z-10 px-4 py-3 rounded-lg shadow-lg border-l-[6px] flex items-center gap-3 ${currentTheme.notificationBg} ${currentTheme.notificationBorder} fixed bottom-8 left-[50%] transform -translate-x-[50%]`}>
              <FaCheck className="text-2xl text-green-600" />
              <h2 className="text-base text-green-800 font-semibold">
                Added task - {addNotificationTitle}
              </h2>
            </div>
          )}

          {/* Edit Notification */}
          {editNotification && (
            <div className={`z-10 px-4 py-3 rounded-lg shadow-lg border-l-[6px] flex items-center gap-3 ${currentTheme.notificationBg} ${currentTheme.notificationBorder} fixed bottom-8 left-[50%] transform -translate-x-[50%]`}>
              <FaCheck className="text-2xl text-blue-600" />
              <h2 className="text-base text-blue-800 font-semibold">
                Task {editNotificationTitle} updated
              </h2>
            </div>
          )}

          {/* Delete Notification */}
          {deleteNotification && (
            <div className={`z-10 px-4 py-3 rounded-lg shadow-lg border-l-[6px] flex items-center gap-3 ${currentTheme.notificationBg} ${currentTheme.notificationBorder} fixed bottom-8 left-[50%] transform -translate-x-[50%]`}>
              <FaCheck className="text-2xl text-red-600" />
              <h2 className="text-base text-red-800 font-semibold">
                Deleted Task - {deleteNotificationTitle}
              </h2>
            </div>
          )}

          {/* Floating Button */}
          <div
            onClick={() => navigate("/addTodo")}
            className={`fixed bottom-10 w-16 h-16 cursor-pointer grid place-items-center rounded-full left-[50%] transform -translate-x-[50%] shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out ${currentTheme.buttonBg}`}
          >
            <RxPlus className={`text-4xl ${currentTheme.buttonIcon}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
