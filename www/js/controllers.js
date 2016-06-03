/// <reference path="../typings/browser.d.ts" />
/// <reference path="./services.ts" />
var DashCtrl = (function () {
    function DashCtrl() {
    }
    return DashCtrl;
}());
var ChatsCtrl = (function () {
    function ChatsCtrl(Chats) {
        this.Chats = Chats;
        this.$inject = ['Chats'];
        this.chats = Chats.all();
    }
    ChatsCtrl.prototype.remove = function (chat) {
        this.Chats.remove(chat);
    };
    ;
    return ChatsCtrl;
}());
var ChatDetailCtrl = (function () {
    function ChatDetailCtrl(Chats, $stateParams) {
        this.Chats = Chats;
        this.$stateParams = $stateParams;
        this.$inject = ['Chats', '$stateParams'];
        this.chat = Chats.get($stateParams.chatId);
    }
    return ChatDetailCtrl;
}());
var AccountCtrl = (function () {
    function AccountCtrl() {
        this.settings = {
            enableFriends: true
        };
    }
    return AccountCtrl;
}());
angular.module('starter.controllers', [])
    .controller('DashCtrl', DashCtrl)
    .controller('ChatsCtrl', ChatsCtrl)
    .controller('ChatDetailCtrl', ChatDetailCtrl)
    .controller('AccountCtrl', AccountCtrl);
//# sourceMappingURL=controllers.js.map