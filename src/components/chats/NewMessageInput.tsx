'use client';
import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { IoSendSharp } from 'react-icons/io5';
import Picker from '@emoji-mart/react';
import emojiData from '@emoji-mart/data';
import {
  Modal,
  ModalContent,
  useDisclosure,
} from '@nextui-org/react';
export default function NewMessageInput() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [message, setMessage] = useState('');

  return (
    <div className='px-6 py-2 flex gap-6 items-center'>
      <div className='flex-1'>
        <Input
          value={message}
          onChange={e => {
            setMessage(e.target.value);
          }}
          radius={'full'}
          startContent={
            <div className='mr-2 text-gray-500'>
              <BsEmojiSmile
                className={'cursor-pointer'}
                onClick={onOpen}
                size={24}
              />
            </div>
          }
          placeholder='Search a conversition'
          size='sm'
          className={`border-1 border-gray-200 text-[18px] outline-none rounded-full w-full `}
        />
      </div>
      <button className=' rounded-lg text-green-500 outline-none border-none '>
        <IoSendSharp size={24} />
      </button>
      <Modal
        placement='top'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
      >
        <ModalContent>
          <Picker
            onClickOutside={onOpenChange}
            data={emojiData}
            onEmojiSelect={(emoji: any) => {
              const emj = emoji?.native;
              setMessage(preMessage => preMessage + emj);
            }}
          />
        </ModalContent>
      </Modal>
    </div>
  );
}
