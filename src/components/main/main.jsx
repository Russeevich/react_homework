import { Map } from "../map/map"
import { Profile } from "../profile/profile"
import { TopBar } from "../topbar/topbar"
import './main.scss'


export const Main = ({props}) =>{
    return(<>
        <TopBar props={{...props}}/>
        {props.path === 'map' && <Map/>}
        {props.path === 'profile' && <Profile/>}
    </>
    )
}