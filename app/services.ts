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

  export interface IExercise {
    id: Number;
    name: String;
    workingWeight: Number;
    warmupWeight: Number;
    workingSets: Number;
    warmupSets: Number;
    maxWeight: Number;
    reps: Number;
  }

  export interface ISession {
    id: Number;
    date: Date;
    exercises: Array<IExercise>;
  }

  export interface IUserSettings {
    restPerExercise: Number;
    restPerSet: Number;
    availableWeights: Array<WeightValue>;
  }


  export class WeightValue {
    constructor(public weight: Number, public enabled: Boolean) {
      this.weight = weight;
      this.enabled = enabled;
    }
}  
  export class UserSettings implements IUserSettings {
     restPerExercise: 180;
      restPerSet: 90;
       
    availableWeights: Array<WeightValue>
      constructor() {
        this.availableWeights = [];
        this.restPerExercise = 180;
        this.restPerSet = 90;
        let defaultWeightValues = [2.5, 5, 10, 15, 25, 35, 45];        

        for (let val in defaultWeightValues) {
          this.availableWeights.push(new WeightValue(defaultWeightValues[val], true));
        }        

     }
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
      console.log(this.weights);
      return this.weights;
    };
    remove(weight) {
      this.weights.splice(this.weights.indexOf(weight), 1);
    };
    get(weightId) {
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
  .service('Settings', Services.UserSettings)
  .service('Weights', Services.Weights);
