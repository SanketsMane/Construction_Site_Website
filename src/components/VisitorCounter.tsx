import React, { useState, useEffect } from 'react';
import { EyeIcon, UsersIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const VisitorCounter: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [todayVisitors, setTodayVisitors] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Get visitor count from localStorage or initialize
    const storedCount = localStorage.getItem('totalVisitors');
    const storedTodayCount = localStorage.getItem('todayVisitors');
    const storedDate = localStorage.getItem('lastVisitDate');
    const currentDate = new Date().toDateString();

    let totalCount = storedCount ? parseInt(storedCount) : 12847; // Starting count
    let todayCount = 0;

    // Check if it's a new day
    if (storedDate !== currentDate) {
      // New day, reset today's count
      todayCount = 1;
      localStorage.setItem('lastVisitDate', currentDate);
    } else {
      // Same day, increment today's count
      todayCount = storedTodayCount ? parseInt(storedTodayCount) + 1 : 1;
    }

    // Increment total count
    totalCount += 1;

    // Store updated counts
    localStorage.setItem('totalVisitors', totalCount.toString());
    localStorage.setItem('todayVisitors', todayCount.toString());

    // Animate the counter
    setIsVisible(true);
    animateCounter(totalCount, setVisitorCount);
    animateCounter(todayCount, setTodayVisitors);
    
    // Simulate online users (random between 15-45)
    const online = Math.floor(Math.random() * 30) + 15;
    animateCounter(online, setOnlineUsers);

    // Update online users every 30 seconds
    const interval = setInterval(() => {
      const newOnline = Math.floor(Math.random() * 30) + 15;
      animateCounter(newOnline, setOnlineUsers);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const animateCounter = (targetValue: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
    let startValue = 0;
    const duration = 2000; // 2 seconds
    const increment = targetValue / (duration / 16); // 60fps

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= targetValue) {
        setter(targetValue);
        clearInterval(timer);
      } else {
        setter(Math.floor(startValue));
      }
    }, 16);
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-6 border border-gray-600">
        <h4 className="font-playfair text-lg font-bold text-white mb-4 text-center">
          Site Statistics
        </h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Total Visitors */}
          <div className="text-center group">
            <div className="flex items-center justify-center mb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <EyeIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1 font-mono">
              {formatNumber(visitorCount)}
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">
              Total Visitors
            </div>
          </div>

          {/* Today's Visitors */}
          <div className="text-center group">
            <div className="flex items-center justify-center mb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <UsersIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1 font-mono">
              {formatNumber(todayVisitors)}
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">
              Today's Visitors
            </div>
          </div>

          {/* Online Users */}
          <div className="text-center group">
            <div className="flex items-center justify-center mb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                <GlobeAltIcon className="w-5 h-5 text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1 font-mono">
              {formatNumber(onlineUsers)}
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">
              Online Now
            </div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Monthly Goal</span>
            <span>87%</span>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-2">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '87%' }}></div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-3 text-center">
          <span className="text-xs text-gray-500">
            Last updated: {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;
