import { set } from 'mongoose';
import { create } from 'zustand';


//for settng conversations and messages
const useConversation = create((set) => ({
    selectedConversation: null,
    setSelevtedConversation: (selectedConversation) => set({selectedConversation}),
    messages: [],
    setMessages: (messages) => set({messages}),
}));

export default useConversation;