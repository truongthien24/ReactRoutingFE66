import {Route} from 'react-router-dom'
import HomeHeader from '../../Components/HomeHeader/HomeHeader'

export const HomeTemplate = (props) => {
    return <Route exact path={props.path} render={(propsRoute)=>{
        return <div>
              <HomeHeader {...propsRoute}/>
              <props.component {...propsRoute}/>
        </div>  
    }}>

    </Route>
}
