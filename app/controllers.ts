/// <reference path="../typings/index.d.ts" />
/// <reference path="./services.ts" />

class DashCtrl {
  constructor() { }
}

class WeightsCtrl {
  public $inject = ['Weights'];
  weights: any[];
  constructor(
    public Weights: Services.IWeightsService
    ) {
    this.weights = Weights.all();
  }
  remove(weight) {
    this.Weights.remove(weight);
  };
}

interface IStateParams extends ng.ui.IStateParamsService {
  chatId: string;
}

class ChatDetailCtrl {
  public $inject = ['Chats', '$stateParams'];
  chat: Object;
  constructor(
    public Chats: Services.IWeightsService,
    public $stateParams: IStateParams
    ) {
    this.chat = Chats.get($stateParams.chatId);
  }
}

class SettingsCtrl {
  settings: Object;
  constructor() {
    this.settings = {
      enableFriends: true
    };
  }
}

angular.module('starter.controllers', [])
  .controller('DashCtrl', DashCtrl)
  .controller('WeightsCtrl', WeightsCtrl)
  .controller('ChatDetailCtrl', ChatDetailCtrl)
  .controller('AccountCtrl', SettingsCtrl);
