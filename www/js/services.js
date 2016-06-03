/// <reference path="../typings/browser.d.ts" />
var Services;
(function (Services) {
    var Chats = (function () {
        function Chats() {
            this.chats = [{
                    id: 0,
                    name: 'Ben Sparrow',
                    lastText: 'You on your way?',
                    face: 'img/ben.png'
                }, {
                    id: 1,
                    name: 'Max Lynx',
                    lastText: 'Hey, it\'s me',
                    face: 'img/max.png'
                }, {
                    id: 2,
                    name: 'Adam Bradleyson',
                    lastText: 'I should buy a boat',
                    face: 'img/adam.jpg'
                }, {
                    id: 3,
                    name: 'Perry Governor',
                    lastText: 'Look at my mukluks!',
                    face: 'img/perry.png'
                }, {
                    id: 4,
                    name: 'Mike Harrington',
                    lastText: 'This is wicked good ice cream.',
                    face: 'img/mike.png'
                }];
        }
        Chats.prototype.all = function () {
            return this.chats;
        };
        ;
        Chats.prototype.remove = function (chat) {
            this.chats.splice(this.chats.indexOf(chat), 1);
        };
        ;
        Chats.prototype.get = function (chatId) {
            for (var i = 0; i < this.chats.length; i++) {
                if (this.chats[i].id === parseInt(chatId)) {
                    return this.chats[i];
                }
            }
            return null;
        };
        return Chats;
    }());
    Services.Chats = Chats;
})(Services || (Services = {}));
angular.module('starter.services', [])
    .service('Chats', Services.Chats);
//# sourceMappingURL=services.js.map