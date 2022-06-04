import React, { FC, useState } from "react";

interface ISort {
    icon: string;
    label: string;
    list: string[];
    handler: (selected: number) => void;
}

const SortSimple: FC<ISort> = ({ icon, label, list, handler }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [current, setCurrent] = useState<number>(0);

    const sortHandler = () => {
        setOpen(!open);
    };
    const selectHandler = (select: number) => {
        setOpen(!open);
        setCurrent(select);
        handler(select);
    };

    return (
        <>
            <div className="main-restaurant-filter-sort-time main-restaurant-filter-sort-time--icon">
                <span className="main-restaurant-filter-sort-time__icon">
                    <img src={icon} alt={label} />
                </span>

                <span
                    className="main-restaurant-filter-sort-time__value"
                    onClick={sortHandler}
                >
                    {label}
                </span>
                {open && (
                    <div className="main-restaurant-filter-sort-time__popup">
                        {list.map((item, i) => (
                            <span
                                onClick={() => selectHandler(i)}
                                className={i === current ? "active" : ""}
                                key={i}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default SortSimple;
