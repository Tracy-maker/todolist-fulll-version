import React from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testId="sidebar">
      <ul className="sidebar__generic">
        <li>Inbox</li>
        <li>Today</li>
        <li>Next 7 days</li>
      </ul>
    </div>
  );
};
