import React from "react";

import { FilterListIcon } from "../../helpers/IconContants";
import "../../public/css/components/filters/baseFilterBar/BaseFilterBar.scss";
import { useAllPointsStore } from "../../store/point.store";

function BaseFilterBar() {
  const { setShowFilterPopup } = useAllPointsStore();

  const handleShowFilterPopup = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShowFilterPopup(true);
  };

  return (
    <div className="base-filter-bar">
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
