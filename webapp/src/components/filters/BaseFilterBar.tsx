import { availableCategories } from "../../helpers/CategoryFilterHelper";
import SingleFilter from "./SingleFilter";
import "../../public/css/components/filters/BaseFilterBar.scss";

function BaseFilterBar() {
  return (
    <div className="base-filter-bar">
      {availableCategories.map((filter) => (
        <SingleFilter
          key={filter.id}
          iconFilename={filter.icon}
          text={filter.name}
          iconAlt={filter.description}
        />
      ))}
    </div>
  );
}

export default BaseFilterBar;
