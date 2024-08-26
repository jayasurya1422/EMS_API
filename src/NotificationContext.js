import React, { createContext, useState, useContext } from 'react';

// Create the context
const NotificationContext = createContext();

// Create a provider component
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Function to add a notification
  const addNotification = (notification) => {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
  };

  // Function to remove a notification
  const removeNotification = (notificationId) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notif) => notif.id !== notificationId)
    );
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

// Custom hook to use the notification context
export const useNotifications = () => {
  return useContext(NotificationContext);
};
