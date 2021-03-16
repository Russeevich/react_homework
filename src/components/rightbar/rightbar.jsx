import { Form } from '../form/form'
import './rightbar.scss'

export const RightBar = ({props}) =>{
    return(
        <section className="rightbar">
            <Form props={props}/>
        </section>
    )
}