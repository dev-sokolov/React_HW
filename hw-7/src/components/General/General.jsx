import Description from '../Description/Description';
import Batton from '../Batton/Batton';

import style from './General.module.css';

const General = () => {
    return (
        <div className={style.wrap}>
            <Description />
            <Batton />
        </div>
    )
}

export default General;