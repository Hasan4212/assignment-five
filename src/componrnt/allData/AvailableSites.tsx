
import React from 'react';

const AvailableSites = ({data}) => { 
    console.log(data, 'from available site');
    return (
        <div>
          { data.map((data) => { 
            return <div>
                {data.name}
            </div>

            })}
        </div>
    );
};

export default AvailableSites;