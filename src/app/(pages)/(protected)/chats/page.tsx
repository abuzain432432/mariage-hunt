'use client';
import ActiveConversationMessagesBox from '@/components/chats/ActiveConversationMessagesBox';
import ActiveConversationDetails from '@/components/chats/ActiveConversationDetails';
import RecentConversations from '@/components/chats/RecentConversations';
import { PAGE_FULL_HEIGHT } from '@/constants/tailwind';
import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import ProtectedLayouNavbar from '@/components/ui/ProtectedLayouNavbar';

export default function Dashboard() {
  const [activeConversationId, setActiveConversationId] = useState<
    null | string
  >(null);
  const handleActiveUser = (id: string) => {
    setActiveConversationId(id);
  };
  const socket = useRef(null);

  // useEffect(() => {
  //   if (!user) return console.log('Please login first!');
  //   const newSocket = io('http://localhost:3000', {
  //     transports: ['websocket'],
  //   });

  //   newSocket.on('connect_error', (error) => {
  //     console.error('Connection error:', error.message);
  //   });

  //   newSocket.on('connect', () => {
  //     newSocket.on('message', (message) => {
  //       console.log(message);
  //       setMessages([...messages, message]);
  //     });
  //   });

  //   socket.current = newSocket;

  //   return () => newSocket.disconnect();
  // }, [messages, user]);

  return (
    <div>
      <ProtectedLayouNavbar />
      <div className={`grid grid-cols-12 ${PAGE_FULL_HEIGHT} `}>
        <RecentConversations
          activeConversationId={activeConversationId as string}
          onActiveUser={handleActiveUser}
        />
        <ActiveConversationMessagesBox
          activeUserConversationId={activeConversationId}
        />
        <ActiveConversationDetails />
      </div>
    </div>
  );
}
