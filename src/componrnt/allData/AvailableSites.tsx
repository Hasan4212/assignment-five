import { useState } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

const AvailableSites = ({ data }) => {

    const [stack, setStack] = useState([]);

    const handleAdd = (item) => { 
        
        const alreadyAdded = stack.some(
        (tech) => tech.id === item.id
    );

    if (alreadyAdded) {
        return;
    }


        setStack([...stack, item]); 
    };

const handleRemove = (id) => {
    setStack(stack.filter((item) => item.id !== id));
};

const handleRemoveAll = () => {
    setStack([]);
};

    return (
        <section className=" mx-20 py-10">

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* Technology Cards */}
                <div className="lg:col-span-3">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                        {data.map((item) => (
                            <TechnologyCard
                                key={item.id}
                                item={item}
                                onAdd={handleAdd} 
                                 isAdded={stack.some((tech) => tech.id === item.id)}
                            />
                        ))}

                    </div>

                </div>


                {/* Your Stack */}
                <div className="lg:col-span-1">

                    <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll}/>

                </div>

            </div>

        </section>
    );
};

export default AvailableSites;





