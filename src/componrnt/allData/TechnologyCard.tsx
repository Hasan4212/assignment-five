import type { Idata } from '../../types/dataType';

interface TechnologyCardProps {
  item: Idata;
  onAdd: (item: Idata) => void;
  isAdded: boolean;
}

const TechnologyCard = ({ item, onAdd, isAdded }: TechnologyCardProps) => {
    return (
        <div className="relative border border-gray-200 rounded-xl p-5">

<span
    className={`jakarta absolute top-3 right-3 text-xs px-3 py-1 rounded-full
       
        ${ ["Popular", "Essential", "Top SQL", "Containers", "Modern", "Robust"].includes(item.badge)
             ? "bg-[#F0F9FF] text-[#0284C7]"
           : ["Fast", "Ubiquitous"].includes(item.badge)
        ? "bg-[#FFF7ED] text-[#EC6A25]"
      : ["Versatile", "Standard"].includes(item.badge)
     ? "bg-[#ECFDF5] text-[#149D72]"
       : item.badge === "Cache"
      ? "bg-[#FEF2F2] text-[#E24C4C]": ""
    }`}
>
    {item.badge}
</span>

            <img
                src={item.icon}
                alt={item.name}
                className="w-8 h-8"
            />

            <h2 className="text-xl font-semibold mt-3">
                {item.name}
            </h2>

            <p className="text-sm text-gray-500 mt-2">
                {item.description}
            </p>

            <div className="flex justify-between text-xs mt-5">
                <span>{item.category}</span>
                <span>{item.difficulty}</span>
                <span className="flex items-center gap-1" > <img src={item.star} alt="rating" className="w-3 h-3" />
<span>{item.rating}</span> </span>
            </div>

        <button
    onClick={() => onAdd(item)} 
    disabled={isAdded}
    className={`w-full py-2 rounded-md mt-5 ${
        isAdded
            ? "bg-white text-black border border-gray-300"
            : "bg-[#111827] text-white"
    }`}
>
    {isAdded ? "Added" : "Add to Stack"}
</button>

        </div>
    );
};

export default TechnologyCard;