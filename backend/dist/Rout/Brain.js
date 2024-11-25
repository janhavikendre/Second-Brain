"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usermiddleware_1 = __importDefault(require("../middlewares/usermiddleware"));
const db_1 = require("../models/db");
const BrainRouter = (0, express_1.Router)();
BrainRouter.post("/create", usermiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.userId) !== null && _a !== void 0 ? _a : "";
        const { contentType, contentLink, title, description, tags, manualContent } = req.body;
        const brain = yield db_1.Brain.create({
            user: userId,
            contentType,
            contentLink,
            title,
            description,
            tags,
            manualContent
        });
        if (brain) {
            res.status(201).json({
                message: "Brain created",
                brain,
                _id: brain._id
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating brain", error });
    }
}));
BrainRouter.put("/update/:id", usermiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.userId) !== null && _a !== void 0 ? _a : "";
        const { id } = req.params;
        const { contentType, contentLink, title, description, tags, manualContent } = req.body;
        const brain = yield db_1.Brain.findOneAndUpdate({
            _id: id,
            user: userId
        }, {
            contentType,
            contentLink,
            title,
            description,
            tags,
            manualContent,
        }, {
            new: true
        });
        if (brain) {
            res.status(200).json({
                message: "Brain updated",
                brain,
                _id: brain._id
            });
        }
        else {
            res.status(400).json({
                message: "Brain not found"
            });
        }
    }
    catch (error) {
        console.error(error);
    }
}));
BrainRouter.delete("/delete/:id", usermiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.userId) !== null && _a !== void 0 ? _a : "";
        const { id } = req.params;
        const brain = yield db_1.Brain.findOneAndDelete({
            _id: id,
            user: userId
        });
        if (brain) {
            res.status(200).json({
                message: "Brain deleted",
                brain,
                _id: brain._id
            });
        }
    }
    catch (error) {
        console.error(error);
    }
}));
BrainRouter.get("/get", usermiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.userId) !== null && _a !== void 0 ? _a : "";
        const brain = yield db_1.Brain.find({
            user: userId
        });
        if (brain) {
            res.status(200).json({
                message: "Brain fetched",
                brain,
                _id: brain._id
            });
        }
        else {
            res.status(400).json({
                message: "Brain not found"
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching brains", error });
    }
}));
exports.default = BrainRouter;
