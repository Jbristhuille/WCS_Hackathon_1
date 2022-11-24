/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-24 09:07:46
 * @ Description: Main project component
 */

/* SUMMARY
  * Ionic
  * React
  * Pages
  * Components
  * Styles
*/

/* Ionic */
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
/***/

/* React */
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
/***/

/* Pages */
import Home from './pages/Home';
/***/

/* Components */
import Menu from './components/Menu';
/***/

/* Styles */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';
/***/

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact={true}>
              <Home />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
