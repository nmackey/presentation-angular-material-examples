class MainController {
  constructor ($mdSidenav, mainService) {
    'ngInject';

    this.add = false;
    this.proposals = mainService.getProposals();

    this.toggleSidenav = () => {
      $mdSidenav('left').toggle();
    }

    this.save = () => {
      this.newProposal.rank = 1;
      this.proposals.push(this.newProposal);
      this.add = false;
      this.newProposal = {};
    }

    this.cancel = () => {
      this.add = false;
      this.newProposal = {};
    }
  }
}

export default MainController;
