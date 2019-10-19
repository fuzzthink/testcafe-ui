import { Selector } from 'testcafe';

const Sel = {
  nav: {
    get div() {
      return Selector('header > nav').nth(1);
    },
    get nav1() {
      return Sel.nav.div.find('span').withText('Nav1');
    },
  },
};

export default Sel;
