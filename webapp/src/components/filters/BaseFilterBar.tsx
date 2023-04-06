import { MAX_CATEGORIES_VISIBLE, availableCategories } from "../../helpers/CategoryFilterHelper";
import SingleFilter from "./SingleFilter";
import "../../public/css/components/filters/BaseFilterBar.scss";

function BaseFilterBar() {
  return (
    <div className="base-filter-bar">
      {availableCategories.slice(0, MAX_CATEGORIES_VISIBLE).map((filter) => (
        <SingleFilter
          code={filter.code}
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
