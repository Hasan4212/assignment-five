
const TechnologyCard = ({ item, onAdd,isAdded  }) => {
    return (
        <div className="border border-gray-200 rounded-xl p-5">

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
                <span>⭐ {item.rating}</span>
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