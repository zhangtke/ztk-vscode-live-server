"use strict";
//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//
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
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'assert' provides assertion methods from node
const assert = __importStar(require("assert"));
// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = __importStar(require("vscode"));
// Defines a Mocha test suite to group tests of similar kind together
suite('Extension Tests', () => {
    test('Extension should be present', () => {
        assert.ok(vscode.extensions.getExtension('ritwickdey.LiveServer'));
    });
    test('should activate', function () {
        this.timeout(1 * 60 * 1000);
        return vscode.extensions.getExtension('ritwickdey.LiveServer').activate()
            .then((api) => {
            assert.ok(true);
        });
    });
    test('should register all live server commands', function () {
        return vscode.commands.getCommands(true).then((commands) => {
            const COMMANDS = [
                'extension.liveServer.goOnline',
                'extension.liveServer.goOffline',
                'extension.liveServer.changeWorkspace'
            ];
            const foundLiveServerCommands = commands.filter((value) => {
                return COMMANDS.indexOf(value) >= 0 || value.startsWith('extension.liveServer.');
            });
            assert.equal(foundLiveServerCommands.length, COMMANDS.length);
        });
    });
});
//# sourceMappingURL=extension.test.js.map