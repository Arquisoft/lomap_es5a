import React from "react";
import Icon from "@mui/material/Icon";
import "../../public/css/components/filters/singleFilter/SingleFilter.scss";
import { SingleFilterProps } from "../../shared/shareddtypes";
import { useAllPointsStore } from "../../store/point.store";

function SingleFilter({
  iconFilename,
  text,
  code,
  isActive = false,
}: SingleFilterProps) {
  const { setFilteredPoints, setIsFiltering, points } = useAllPointsStore();

  const handleFilterPoints = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsFiltering(true);
    setFilteredPoints(points.filter((point) => point.category === code));
  };

  return (
    <div
      className={`single-filter-container ${
        isActive && "category-filter--active"
      }`}
      onClick={(e) => handleFilterPoints(e)}
      title={"Filtrar por " + text}
    >
      <Icon>{iconFilename}</Icon>
      <span>{text}</span>
    </div>
  );
}

export default SingleFilter;
