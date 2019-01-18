import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { CasePage } from '../case/case';
import { HelpPage } from '../help/help';
import { JoinusPage } from '../joinus/joinus';
import { PayPage } from '../pay/pay';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PayPage;
  tab3Root = CasePage;
  tab4Root = HelpPage;
  tab5Root = JoinusPage;


  constructor(  ) 
  {
    
  }
 
}

