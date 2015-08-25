class MainService {
  constructor () {
    'ngInject';

    this.proposals = [
      {
        title: 'Directives',
        description: 'Cool talk about custom directives',
        rank: 1
      },
      {
        title: 'ControllerAs',
        description: 'Cooler talk about ControllerAs syntax',
        rank: 3
      },
      {
        title: 'Style Guides',
        description: 'Someone should tell us about the best style guides',
        rank: 2
      },
      {
        title: 'Angular Material',
        description: 'Why is Angular Material so good?',
        rank: 10
      },
      {
        title: 'Services',
        description: 'Talk about lame services.',
        rank: 2
      }
    ];
  }

  getProposals() {
    return this.proposals;
  }
}

export default MainService;
