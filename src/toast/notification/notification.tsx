import './style.css'
import Alert from '../../assets/alert.jpeg'
import Danger from '../../assets/danger.jpeg'
import Success from '../../assets/success.png'



const NotificationTypes ={
  danger : Danger,
  success :Success,
  info : Alert,
}

type NotificationProp={
  position : "top-right"|"top-right"|"bottom-left"|"bottom-right";
  type : "danger"|"info"|"success";
  title: string;
  desc:string;
  cta :string;
  onRemove:()=>{},
  id:string
}

export default function Notification({title = "",desc ="", cta = "", id = "",type ="" ,onRemove=()=>{}}:NotificationProp) {

  function handleRemove(){
    onRemove(id);
  }
  return (
    <div className="toast"  data-types={NotificationTypes[type]}  data-position={}>
        <button className='toast-close'>&times;</button>
        <div className="toast-content">
            <div className="toast-info">
                <img src={NotificationTypes[type]}  height={"45px"} width={"45px"}/>
                <div className="toast-title-desc">
                    <span>{title}</span>
                    <span>{desc}</span>
                </div>
            </div>
            <div className="toast-cta">
              {cta}
            </div>
        </div>
        <div className="toast-progress"></div>
    </div>
  )
}

