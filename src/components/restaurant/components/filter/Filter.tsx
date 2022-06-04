import React, { FC, useState } from "react";
import { IRestaurant } from "../../main/Restaurant";

interface Ilist {
    title: string;
    category: number;
}

interface IFilter {
    list: Ilist[];
    restList: IRestaurant[];
    handler: ([]: IRestaurant[]) => void;
}

const Filter: FC<IFilter> = ({ list, handler, restList }) => {
    const [category, setCategory] = useState<number>(0);

    const filterHandler = (e: any) => {
        const activeFilter = +e.currentTarget.dataset.filter;
        setCategory(activeFilter);

        if (activeFilter === 0) {
            handler([...restList]);
            return;
        }

        handler([...restList.filter((item) => item.filter === activeFilter)]);
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
                        onClick={filterHandler}
                    >
                        {item.title}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default Filter;
