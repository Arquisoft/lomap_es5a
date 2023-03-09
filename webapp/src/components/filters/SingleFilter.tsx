import Icon from "@mui/material/Icon";
import "../../public/css/components/filters/SingleFilter.scss";

type Props = {
  iconFilename: any;
  iconAlt?: string;
  text: string;
  isActive?: boolean;
};

function SingleFilter({
  iconFilename,
  iconAlt,
  text,
  isActive = false,
}: Props) {
  return (
    <div
      className={`single-filter-container ${
        isActive && "category-filter--active"
      }`}
    >
      <Icon>{iconFilename}</Icon>
      <span>{text}</span>
    </div>
  );
}

export default SingleFilter;
