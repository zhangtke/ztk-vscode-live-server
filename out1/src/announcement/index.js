"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkNewAnnouncement = exports.SETUP_STRING = void 0;
const vscode_1 = require("vscode");
const opn = __importStar(require("opn"));
exports.SETUP_STRING = 'liveServer.setup.version';
function checkNewAnnouncement(memento) {
    return __awaiter(this, void 0, void 0, function* () {
        const packageJSON = vscode_1.extensions.getExtension('ritwickdey.LiveServer').packageJSON;
        const announment = packageJSON.announcement;
        if (!announment && Object.keys(announment).length === 0)
            return;
        const stateVersion = (yield memento.get(exports.SETUP_STRING)) || '0.0.0';
        const installedVersion = packageJSON.version;
        if (stateVersion !== installedVersion && installedVersion === announment.onVersion) {
            yield memento.update(exports.SETUP_STRING, installedVersion);
            const showDetails = 'Show Details';
            const choice = yield vscode_1.window.showInformationMessage(announment.message, showDetails);
            if (choice === showDetails) {
                const url = announment.url || 'https://github.com/zhangtke/ztk-vscode-live-server';
                opn(url);
            }
        }
    });
}
exports.checkNewAnnouncement = checkNewAnnouncement;
//# sourceMappingURL=index.js.map