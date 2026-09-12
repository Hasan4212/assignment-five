const YourStack = ({ stack, onRemove, onRemoveAll }) => {
    return (
        <div className="border border-gray-200 rounded-xl p-5">

            <h2 className="text-xl font-bold">
                Your Stack
            </h2>

            <p className="text-sm text-gray-400 mt-1">
                {stack.length} technologies selected
            </p>

            <div className="mt-5">

                {stack.length === 0 ? (

                    <p className="text-sm text-gray-400 text-center border border-dashed rounded-lg p-5">
                        You haven't added any technologies yet.
                    </p>

                ) : (

                    <>
                        {stack.map((item) => (

                            <div
                                key={item.id}
                                className="flex items-center justify-between gap-3 my-3"
                            >

                                <div className="flex items-center gap-3">

                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="w-7 h-7"
                                    />

                                    <span className="font-medium">
                                        {item.name}
                                    </span>

                                </div>

                                <button
                                    onClick={() => onRemove(item.id)}
                                    className="flex items-baseline justify-center text-gray-400 hover:bg-gray-200 rounded-full w-8 h-8 text-xl font-light transition duration-300"
                                >
                                    ×
                                </button>

                            </div>

                        ))}

    <button
 onClick={onRemoveAll}
 className="mt-5 w-full py-2 border border-red-300 text-red-500 rounded-lg hover:bg-red-50">
     Remove All
    </button>

                    </>

                )}

            </div>

        </div>
    );
};

export default YourStack;