import Icon from "@mui/material/Icon";
import "../../public/css/components/filters/SingleFilter.scss";
import { SingleFilterProps } from "../../shared/shareddtypes";
import { useAllPointsStore } from "../../store/point.store";

function SingleFilter({
  iconFilename,
  iconAlt,
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
    >
      <Icon>{iconFilename}</Icon>
      <span>{text}</span>
    </div>
  );
}

export default SingleFilter;
