import './style.css'
import Alert from '../../assets/alert.jpeg'
import Danger from '../../assets/danger.jpeg'
import Success from '../../assets/success.png'


export default function Notification() {
  return (
    <div className="toast">
        <button className='toast-close'>&times;</button>
        <div className="toast-content">
            <div className="toast-info">
                <img src={Alert}  height={"45px"} width={"45px"}/>
                <div className="toast-title-desc">
                    <span>Title</span>
                    <span>Description</span>
                </div>
            </div>
            <div className="toast-cta"></div>
        </div>
        <div className="toast-progress"></div>
    </div>
  )
}

