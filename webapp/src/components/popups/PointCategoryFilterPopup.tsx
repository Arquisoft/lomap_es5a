import React, { useEffect } from "react";
import { availableCategories } from "../../helpers/CategoryFilterHelper";
import { CloseIcon } from "../../helpers/IconContants";
import "../../public/css/components/popups/pointCategoryFilter/PointCategoryFilterPopup.scss";
import { Friend } from "../../shared/shareddtypes";
import { useAllPointsStore } from "../../store/point.store";
import { useUserStore } from "../../store/user.store";
import { generateUUID } from "../../utils/stringUtils";
import FriendAvatar from "../avatars/FriendAvatar";
import BaseButton from "../buttons/BaseButton";
import SinglePopupFilter from "../filters/SinglePopupFilter";

function PointCategoryFilterPopup() {
  const {
    filters,
    filteredPointsPreview,
    setShowFilterPopup,
    resetFilters,
    addFilter,
    removeFilter,
    filterPointsBySelectedFilters,
    getAllPoints
  } = useAllPointsStore();

  const { friends } = useUserStore();

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

  // Añadir o eliminar un amigo de la lista de amigos a mostrar
  const handleSelectFriendCheckBox = (isChecked: boolean, friend: Friend) => {
    isChecked ? addFilter(friend) : removeFilter(friend);
  };

  useEffect(() => {
    console.log("puntos: ", getAllPoints());
  }, []);

  return (
    <div className="point-category-filter-popup-container" role="alertdialog">
      <CloseIcon
        className="point-category-filter-popup__close-icon"
        onClick={(e: any) => handleClosePopup(e)}
        role="button"
        data-testid="close-popup-button"
      />
      <div className="point-category-filter-popup__body">
        <div className="point-category-filter-popup-body__category-listing">
          <h3>Categorías</h3>
          <h4>Selecciona las categorías a mostrar</h4>
          <div className="point-category-filter-popup-body-category-listing__wrapper">
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
        </div>
        {friends && friends?.length > 0 && (
          <div className="point-category-filter-popup-body__friends-listing">
            <h3>Amigos</h3>
            <h4>Mostrar los puntos de tus amigos</h4>
            <div className="point-category-filter-popup-body-friends-listing__wrapper">
              {friends &&
                friends.map((friend) => {
                  //realizar la construccion del amigo
                  return (
                    <div className="friend-list-comp" key={friend.webId}>
                      <FriendAvatar
                        key={generateUUID()}
                        name={friend.name}
                        imgUrl={friend.imgUrl}
                        vista="vista-add-point"
                      />
                      <label htmlFor="checkbox" />
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          handleSelectFriendCheckBox(e.currentTarget.checked, friend);
                        }}
                        id="checkbox"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        )}
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
