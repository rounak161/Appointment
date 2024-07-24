import React, { useContext, useState, useEffect } from 'react';
import './Notification.css';
import { StoreContext } from '../../context/storeContext';

const Notification = () => {
  const [data, setData] = useState([]);
  const userId = JSON.parse(localStorage.getItem('user'))._id; // Assuming user is stored as JSON

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(`http://localhost:5000/notify/notifications/${userId}`);
        if (response.ok) {
          const notifications = await response.json();
          setData(notifications);
        } else {
          console.error('Failed to fetch notifications');
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [userId]);

  return (
     <div className="cohg">
        <div className='notification-container'>
            <ul>
            {data.map((notification) => (
                <li key={notification._id}>
                <p>{notification.message} </p>
                <span>{notification.seen ? 'Read' : 'Unread'}</span>
                </li>
            ))}
            </ul>
        </div>
     </div>
  );
};

export default Notification;
