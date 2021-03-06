import React, { FC, useState } from "react";

interface ISort {
    label: string;
    list: string[];
    handle: (selected: number) => void;
}

const Sort: FC<ISort> = ({ label, list, handle }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [current, setCurrent] = useState<number>(0);

    const sortHandle = () => {
        setOpen(!open);
    };
    const selectHandle = (select: number) => {
        setOpen(!open);
        setCurrent(select);
        handle(select);
    };

    return (
        <>
            <div className="main-restaurant-filter-sort-time">
                <span className="main-restaurant-filter-sort-time__label">
                    {label}:
                </span>
                <span
                    className="main-restaurant-filter-sort-time__value"
                    onClick={sortHandle}
                >
                    {list[current]}
                    <svg
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1L6 6L11 1"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="#8A8894"
                        />
                    </svg>
                </span>
                {open && (
                    <div className="main-restaurant-filter-sort-time__popup">
                        {list.map((item, i) => (
                            <span
                                onClick={() => selectHandle(i)}
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

export default Sort;
