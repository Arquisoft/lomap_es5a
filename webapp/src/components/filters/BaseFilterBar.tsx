import React from "react";
import {
  MAX_CATEGORIES_VISIBLE,
  availableCategories,
} from "../../helpers/CategoryFilterHelper";
import { FilterListIcon } from "../../helpers/IconContants";
import "../../public/css/components/filters/baseFilterBar/BaseFilterBar.scss";
import { useAllPointsStore } from "../../store/point.store";
import SingleFilter from "./SingleFilter";

function BaseFilterBar() {
  const { setShowFilterPopup } = useAllPointsStore();

  const handleShowFilterPopup = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShowFilterPopup(true);
  };

  return (
    <div className="base-filter-bar">
      {/* {availableCategories.slice(0, MAX_CATEGORIES_VISIBLE).map((filter) => (
        <SingleFilter
          code={filter.code}
          key={filter.id}
          iconFilename={filter.icon}
          text={filter.name}
          iconAlt={filter.description}
        />
      ))} */}
      <div
        className="base-filter-bar-filters-button"
        role="button"
        title="Mostrar todos los filtros"
        onClick={(e) => handleShowFilterPopup(e)}
      >
        <FilterListIcon
          sx={{
            color: "#070707",
          }}
        />
        <span>Filtros</span>
      </div>
    </div>
  );
}

export default BaseFilterBar;
