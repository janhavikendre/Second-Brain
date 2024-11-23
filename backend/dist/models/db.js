"use strict";
//It's am db,ts file for storing users and the brain (i.e) ideas tweets and video from youtube user wants to store
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brain = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
//user Schema 
const UserSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    image: { type: String },
});
exports.User = mongoose_1.default.model('User', UserSchema);
const BrainSchema = new mongoose_1.default.Schema({
    user: { type: mongoose_2.Types.ObjectId, ref: "User" },
    contentType: { type: String, enum: ['twitter', 'googledocs', 'youTube', 'instagram'] },
    contentLink: { type: String },
    title: { type: String },
    description: { type: String },
    tags: [{ type: String }],
    manualContent: { type: String },
    createdAt: { type: Date, default: Date.now }
});
exports.Brain = mongoose_1.default.model('Brain', BrainSchema);
