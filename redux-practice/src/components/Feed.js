import Style from "./all.module.css" ; 
import Feedbottom from "./Feedbottom";
import Feedtop from "./Feedtop";

export default function Feed() {
    return (
        <div className={Style.feed}>
            <Feedbottom></Feedbottom>
            <Feedtop></Feedtop>
        </div>

        )
}
