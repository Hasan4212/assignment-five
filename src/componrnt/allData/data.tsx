import { use } from 'react';  
import type {Idata} from '../../types/dataType';  
import AvailableSites from './AvailableSites'; 
 
 
interface DataProps { 
    dataPromise : Promise<Idata[]> 
} 
 
const Data = ({dataPromise}: DataProps) => {  
    // console.log(dataPromise);  
    const data: Idata[] = use(dataPromise)  
    console.log(data, 'data'); 
    return ( 
        <div> 
            <AvailableSites data={data} /> 
        </div> 
    ); 
}; 
 
export default Data; 