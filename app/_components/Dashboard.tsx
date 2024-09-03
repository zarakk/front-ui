import React from "react";
import {
  Search,
  Settings,
  Bell,
  ChevronDown,
  Paperclip,
  MoreHorizontal,
  MessageCircle,
  Share2,
  Clock,
  AlertTriangle,
  Users,
  Headphones,
} from "lucide-react";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className=" flex flex-col h-screen bg-[#f0f4f8] text-gray-800 rounded-xl">
      {/* Top Navigation */}
      <div className="bg-[#1a2233] text-white p-4 flex items-center justify-between rounded-xl">
        <div className="flex items-center space-x-4">
          <MessageCircle size={20} />
          <Share2 size={20} />
          <Clock size={20} />
          <AlertTriangle size={20} />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-[#2c3a57] flex items-center rounded-md px-2">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full py-1 text-sm focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Settings size={20} />
          <Bell size={20} />
          <Image
            src="/profile-img.jpg"
            alt="User"
            className="rounded-full object-cover"
            height={12}
            width={12}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden rounded-xl">
        {/* Left Sidebar */}
        <div className="w-64 bg-white p-4 overflow-y-auto">
          <button className="bg-blue-500 text-white rounded-full px-4 py-2 w-full mb-4">
            Compose
          </button>
          <nav>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>My Inbox</span>
                <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">
                  27
                </span>
              </li>
              <li className="text-gray-500 flex items-center">
                <Users size={16} className="mr-2" />
                <span>Assigned to me</span>
                <span className="ml-auto">4</span>
              </li>
              <li className="text-gray-500">Shared with me</li>
              <li className="text-gray-500">VIP</li>
              <li className="text-gray-500">P1</li>
              <li className="text-gray-500 flex items-center">
                <AlertTriangle size={16} className="mr-2 text-orange-500" />
                <span>Urgent</span>
              </li>
              <li className="font-semibold mt-4">Priority Accounts</li>
              <li className="text-gray-500">
                Paystack <span className="ml-auto">8378</span>
              </li>
              <li className="text-gray-500">
                Instagram <span className="ml-auto">17</span>
              </li>
              <li className="text-gray-500">
                Twitter <span className="ml-auto">31</span>
              </li>
              <li className="text-gray-500">
                Whatsapp <span className="ml-auto">5</span>
              </li>
              <li className="text-gray-500">
                SMS <span className="ml-auto">125</span>
              </li>
              <li className="font-semibold mt-4">Tier 1 Support</li>
              <li className="font-semibold">Tier 2 Support</li>
              <li className="font-semibold">Northwest Sales</li>
            </ul>
          </nav>
        </div>

        {/* Email List */}
        <div className="w-1/3 bg-white border-x overflow-y-auto">
          {/* Email items */}
          <div className="p-4 border-b bg-blue-100 hover:bg-blue-200 cursor-pointer">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold">Ernest Pierce</span>
              <span className="text-xs text-gray-500">3m</span>
            </div>
            <p className="text-sm font-semibold">Q on Investment portfolio</p>
            <p className="text-xs text-gray-600 truncate">
              Hey there, I&apos;m a platinum member with ...
            </p>
          </div>
          <div className="p-4 border-b hover:bg-gray-100 cursor-pointer">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold">Sabrina Calhoun</span>
              <span className="text-xs text-gray-500">10m</span>
            </div>
            <p className="text-sm">Offer accepted - help with wire...</p>
            <p className="text-xs text-gray-600 truncate">
              Hey all! That has all info...
            </p>
          </div>
          <div className="p-4 border-b hover:bg-gray-100 cursor-pointer">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold">Mark Cyr</span>
              <span className="text-xs text-gray-500">2h</span>
            </div>
            <p className="text-sm">New account setup</p>
            <p className="text-xs text-gray-600 truncate">
              Hello there, My name is Mark and I am...
            </p>
          </div>
          {/* Add more email items */}
        </div>

        {/* Email Content */}
        <div className="flex-1 flex flex-col bg-white">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="font-semibold text-lg">Ernest Pierce</h2>
            <div className="flex items-center space-x-2">
              <button className="bg-gray-200 text-xs px-3 py-1 rounded-full">
                INBOX
              </button>
              <button className="bg-gray-200 text-xs px-3 py-1 rounded-full">
                SUPPORT
              </button>
              <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                Assign
              </button>
              <Search size={20} className="text-gray-400" />
              <MoreHorizontal size={20} className="text-gray-400" />
            </div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/profile-img.jpg"
                alt="Ernest"
                className="rounded-full object-cover"
                height={10}
                width={10}
              />
              <div>
                <p className="font-semibold">Ernest Pierce</p>
                <p className="text-sm text-gray-500">
                  Subject: Q on Investment portfolio
                </p>
              </div>
            </div>
            <p className="mb-4">
              Hey there,
              <br />
              <br />
              I&apos;m a platinum member with Rocket Invest and need to talk
              with someone familiar with my account.
              <br />
              <br />
              Thanks!
            </p>
            {/* Conversation thread */}
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile-img.jpg"
                  alt="Marisa"
                  className="rounded-full object-cover"
                  width={10}
                  height={10}
                />
                <div className="bg-gray-100 p-2 rounded-lg">
                  <p className="text-sm">
                    <span className="font-semibold">Marisa Golden</span>{" "}
                    @madeline Looks like you worked with Ernest last month.
                    Assigning to you but let me know if you need insight!
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/female-profile.jfif"
                  alt="Madeline"
                  className=" rounded-full object-cover"
                  height={10}
                  width={10}
                />
                <div className="bg-gray-100 p-2 rounded-lg">
                  <p className="text-sm">
                    <span className="font-semibold">Madeline Abrams</span>{" "}
                    Ernest is great. On it!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex items-center space-x-2 text-gray-400">
              <input
                type="text"
                placeholder="Add comment..."
                className="flex-1 bg-transparent outline-none"
              />
              <Paperclip size={20} />
              <span>B</span>
              <span>I</span>
              <span>U</span>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-64 bg-white p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">People</h3>
            <ChevronDown size={16} />
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Image
                src="/female-profile.jfif"
                alt="Mary"
                className=" rounded-full object-cover"
                height={10}
                width={10}
              />
              <div>
                <p className="font-semibold">Mary Alyse</p>
                <p className="text-xs text-gray-600">Account: Soon + Co</p>
                <p className="text-xs text-gray-600">Phone: (215) 555-2376</p>
                <p className="text-xs text-gray-600">(610) 555-8898</p>
                <p className="text-xs text-gray-600">Email: mary@soon.co</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Image
                src="/profile-img.jpg"
                alt="Ernest"
                className=" rounded-full object-cover"
                height={10}
                width={10}
              />
              <div>
                <p className="font-semibold">Ernest Pierce</p>
                <p className="text-xs text-gray-600">
                  Account: Green Flash Inc
                </p>
                <p className="text-xs text-gray-600">Phone: (234) 555-2324</p>
                <p className="text-xs text-gray-600">Email: pierce@meehi.com</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Accounts</h3>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-600 font-bold">
                R
              </div>
              <div>
                <p className="font-semibold">Rocket Invest</p>
                <p className="text-xs text-gray-600">Owner: Jared Benedict</p>
                <p className="text-xs text-gray-600">Manager: Sam Henderson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
