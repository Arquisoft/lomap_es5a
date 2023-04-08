import { availableCategories } from "../../helpers/CategoryFilterHelper";
import { CloseIcon } from "../../helpers/IconContants";
import "../../public/css/components/popups/pointCategoryFilter/PointCategoryFilterPopup.scss";
import { useAllPointsStore } from "../../store/point.store";
import BaseButton from "../buttons/BaseButton";
import SinglePopupFilter from "../filters/SinglePopupFilter";

function PointCategoryFilterPopup() {
  const {
    filters,
    filteredPointsPreview,
    setShowFilterPopup,
    resetFilters,
    filterPointsBySelectedFilters,
  } = useAllPointsStore();

  /**
   * Número de resultados a mostrar en el botón de "Aplicar filtros"
   * @returns
   */
  const getNumberOfResults = (): string => {
    if (filteredPointsPreview.length > 0) {
      return (
        filteredPointsPreview.length +
        " " +
        (filteredPointsPreview.length > 1 ? "puntos" : "punto")
      );
    }
    return "";
  };

  /**
   * Restablece los filtros de categorías
   * @param e
   */
  const handleFilterReset = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    resetFilters();
  };

  /**
   * Aplica los filtros seleccionados, actualizando los puntos mostrados en el mapa.
   * @param e
   */
  const handleFilterApply = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    filterPointsBySelectedFilters();
    setShowFilterPopup(false);
  };

  const handleClosePopup = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowFilterPopup(false);
  };

  return (
    <div className="point-category-filter-popup-container" role="alertdialog">
      <div className="point-category-filter-popup__body">
        <CloseIcon className="point-category-filter-popup__close-icon" onClick={(e: any) => handleClosePopup(e)}/>
        <h3>Categorías</h3>
        <h4>Selecciona las categorías a mostrar</h4>
        <div className="point-category-filter-popup-body__category-listing">
          {availableCategories.map((filter) => {
            return (
              <SinglePopupFilter
                code={filter.code}
                key={filter.id}
                iconFilename={filter.icon}
                text={filter.name}
                iconAlt={filter.description}
                filterObject={filter}
              />
            );
          })}
        </div>
        {/* <h3>Amigos</h3>
        <h4>Mostrar los puntos de tus amigos</h4> */}
      </div>
      <div className="point-category-filter-popup__footer">
        <BaseButton
          type={filters.length === 0 ? "button-disabled" : "button-primary"}
          text="Borrar filtros"
          disabled={filters.length === 0}
          onClick={(e) => handleFilterReset(e)}
        />
        <BaseButton
          type="button-black"
          text={`Mostrar ${getNumberOfResults()}`}
          onClick={(e) => handleFilterApply(e)}
        />
      </div>
    </div>
  );
}

export default PointCategoryFilterPopup;
