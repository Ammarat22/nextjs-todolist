"use client"
import React from 'react'

export default function Footer() {
  const stats = [
    { value: 6, label: "Million", description: "Users that using this app" },
    { value: 3, label: "Million", description: "and compliant" },
    { value: 5, label: "Million", description: "happy beta tester" },
    { value: 4.8, label: "Star", description: "Google Play Store " },
  ];

  return (
    <div className="flex items-center justify-center w-full mt-28">
      {stats.map((item, index) => (
        <div key={index} className="flex flex-col w-[200px] text-center mb-4">
          <p className="font-bold text-xl">
            <span className="text-amber-600">{item.value}</span>
            <span> {item.label}</span>
          </p>
          <p className="sm:hidden lg:block text-gray-500 text-center">{item.description}</p>
        </div>
      ))}
    </div>
  );
}


