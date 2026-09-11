import { use } from 'react'; 
import type {Idata} from '../../types/dataType'; 
import AvailableSites from './AvailableSites';


interface DataPrors {
    dataPromise :  Promise<Idata[]>
}

const Data = ({dataPromise}) : DataPrors => { 
    // console.log(dataPromise); 
    const data = use(dataPromise) 
    console.log(data, 'data');
    return (
        <div>
            <AvailableSites data= {data} />
        </div>
    );
};

export default Data;