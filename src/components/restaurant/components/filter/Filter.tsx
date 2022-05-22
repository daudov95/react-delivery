import React, { FC, ReactElement, useState } from "react";
import { IRestaurant } from "../../main/Restaurant";

interface Ilist {
    title: string;
    category: number;
}

interface IFilter {
    list: Ilist[];
    restList: IRestaurant[];
    handle: ([]: IRestaurant[]) => void;
}

const Filter: FC<IFilter> = ({ list, handle, restList }) => {
    const [category, setCategory] = useState<number>(0);

    const filterHandle = (e: any) => {
        const activeFilter = +e.currentTarget.dataset.filter;
        setCategory(activeFilter);

        if (activeFilter === 0) {
            handle([...restList]);
            return;
        }

        handle([...restList.filter((item) => item.filter === activeFilter)]);
    };

    return (
        <ul className="main-restaurant-filter">
            {list.map((item, i) => (
                <li
                    className="main-restaurant-filter__item"
                    key={item.category}
                >
                    <span
                        data-filter={item.category}
                        className={`main-restaurant-filter__link ${
                            i === category ? "active" : ""
                        }`}
                        onClick={filterHandle}
                    >
                        {item.title}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default Filter;
