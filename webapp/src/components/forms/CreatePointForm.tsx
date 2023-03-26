import { useState } from "react";
import "../../public/css/components/forms/CreatePointForm.css";
import BaseButton from "../buttons/BaseButton";
//import { addPoint } from "src/api/api"
import { availableCategories } from "../../helpers/CategoryFilterHelper";
import BaseSelect from "../inputs/BaseSelect";
import BaseTextArea from "../inputs/BaseTextArea";
import BaseTextInput from "../inputs/BaseTextInput";
import useMarker from "../../hooks/useMarker";

function CreatePointForm() {
  const {currentPosition} = useMarker();
  const [point, setPoint] = useState({
    name: "",
    address: "",
    lat: "",
    lng: "",
    category: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoint({
      ...point,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPoint({
      ...point,
      category: e.target.value,
    });
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPoint({
      ...point,
      description: e.target.value,
    });
  };

  return (
    <div className="create-form-main">
      <div className="create-form-title">Crear un punto</div>
      <div className="create-form-info">
        Los campos con (*) son obligatorios.
      </div>
      <form>
        <div className="create-form-form">
          <BaseTextInput
            label="Nombre"
            type="text"
            name="name"
            value={point.name}
            onChange={handleChange}
            placeholder="Sidreria Tierra Astur"
          />

          <div className="create-form-form-coords-inputs">
            <BaseTextInput
              label="Latitud"
              name="lat"
              type="text"
              value={currentPosition?.lat ?? point.lat}
              onChange={handleChange}
              placeholder="43.12345"
            />

            <BaseTextInput
              label="Longitud"
              name="lng"
              type="text"
              value={currentPosition?.lng ?? point.lng}
              onChange={handleChange}
              placeholder="-6.98765"
            />
          </div>

          <BaseTextInput
            label="Dirección postal"
            name="address"
            type="text"
            value={point.address}
            onChange={handleChange}
            placeholder="Calle Gascona, 1, 33001 Oviedo"
          />

          <BaseSelect
            id="create-point-category-selector"
            label="Categoría"
            name="category"
            options={availableCategories.map((cat) => {
              return { value: cat.name, content: cat.name };
            })}
            handleChange={handleChangeCategory}
          />
          <BaseTextArea
            label="Descripción"
            name="description"
            value={point.description}
            onChange={handleDescriptionChange}
            placeholder="Explica brevemente la ubicación del punto, su horario, etc."
          />
        </div>

        {/* Input file para subir imagen */}

        <div className="create-form-buttons">
          <BaseButton
            type="button-primary"
            text="Publicar"
            onClick={() => ""}
          />
        </div>
      </form>
    </div>
  );
}

export default CreatePointForm;
