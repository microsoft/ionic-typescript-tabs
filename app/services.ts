/// <reference path="../typings/index.d.ts" />
module Services {
  export interface IWeightsService {
    all(): Array<IWeightUser>;
    remove(weight: IWeightUser);
    get(chatId: string);
  }

  export interface IWeightUser {
    id: Number;
    name: String;
    lastText: String;
    face: String;
  }

  export class Weights implements IWeightsService {
    weights: Array<IWeightUser>;
    constructor() {
      this.weights = [{
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
    all() {
      return this.weights;
    };
    remove(weights) {
      this.weights.splice(this.chats.indexOf(weight), 1);
    };
    get(chatId) {
      for (var i = 0; i < this.weights.length; i++) {
        if (this.weights[i].id === parseInt(weightId)) {
          return this.weights[i];
        }
      }
      return null;
    }
  }
}

angular.module('starter.services', [])

  .service('Weights', Services.Weights);
