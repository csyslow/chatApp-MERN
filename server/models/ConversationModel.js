import mongoose, { Schema, model } from "mongoose";

const conversationSchema = new Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "messages",
            required: true,
            default: []
        }
    ]

}, { timestamps: true });

const ConversationModel = model('conversation', conversationSchema);

export default ConversationModel;