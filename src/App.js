import './App.css'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home/index'
import TeamMatches from './components/TeamMatches/index'
import NotFound from './components/NotFound/index'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route exact component={NotFound} />
    </Switch>
  </div>
)
export default App
