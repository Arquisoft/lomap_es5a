import React from "react";
import { SingleFilterProps } from "../../shared/shareddtypes";
import Icon from "@mui/material/Icon";
import "../../public/css/components/filters/popupFilter/SinglePopupFilter.scss";
import { useAllPointsStore } from "../../store/point.store";

function SinglePopupFilter({
  iconFilename,
  text,
  filterObject,
}: SingleFilterProps) {
  const { filters, addFilter, removeFilter, makeFilteredPointsPreview } =
    useAllPointsStore();

  /**
   * Añade el filtro seleccionado a la lista de filtros activos.
   * Si el filtro ya está activo, lo elimina de la lista de filtros activos.
   * @param e
   */
  const handleToogleAddFilter = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    
    if (filterObject && !filters?.includes(filterObject)) {
        addFilter(filterObject);
        
    } else if (filterObject && filters?.includes(filterObject)) {
        removeFilter(filterObject);
    }
    
    makeFilteredPointsPreview();
  };

  return (
    <div
      className={`single-popup-filter-container ${
        filterObject &&
        filters?.includes(filterObject) &&
        "single-popup-filter-container--active"
      }`}
      onClick={(e) => handleToogleAddFilter(e)}
    >
      <Icon>{iconFilename}</Icon>
      <span>{text}</span>
    </div>
  );
}

export default SinglePopupFilter;
