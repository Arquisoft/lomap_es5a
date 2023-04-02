import { useEffect } from "react";
import "../../public/css/components/forms/CreatePointForm.css";
import BaseButton from "../buttons/BaseButton";
//import { addPoint } from "src/api/api"
import { availableCategories } from "../../helpers/CategoryFilterHelper";
import { useMarkerStore } from "../../store/map.store";
import { usePointDetailsStore } from "../../store/point.store";
import BaseSelect from "../inputs/BaseSelect";
import BaseTextArea from "../inputs/BaseTextArea";
import BaseTextInput from "../inputs/BaseTextInput";
import { addPoint } from "../../api/point.api";
import { useSession } from "@inrupt/solid-ui-react";

function CreatePointForm() {
  const { setCurrentPointProperty, setPosition, setPointAddress, info, image } = usePointDetailsStore();
  const { session} = useSession();

  const handleAddPoint = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    info._id = crypto.randomUUID();
    info.location.postalCode = 0;
    info.location.city = "";
    info.location.country = "";

    await addPoint(info, session.info.webId as string, image).then(() => {
      console.log("Punto creado");
    });
    //addPoint(info);
  }

  useEffect(() => {
    useMarkerStore.subscribe((position: any) => {
      const { lat, lng } = position.position;
      setCurrentPointProperty("location.coords", { lat, lng });
    });
  }, []);

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
            value={info.name}
            onChange={(e) => setCurrentPointProperty("name", e.target.value)}
            placeholder="Sidreria Tierra Astur"
          />

          <div className="create-form-form-coords-inputs">
            <BaseTextInput
              label="Latitud"
              name="lat"
              type="text"
              value={info.location.coords.lat || ""}
              onChange={(e) =>
                setPosition({
                  lat: isNaN(e.target.value as any) ? 0 : Number(e.target.value),
                  lng: isNaN(info.location.coords.lng) ? 0 : info.location.coords.lng,
                })
              }
              placeholder="43.12345"
            />

            <BaseTextInput
              label="Longitud"
              name="lng"
              type="text"
              value={info.location.coords.lng || ""}
              onChange={(e) =>
                setPosition({
                  lat: isNaN(info.location.coords.lat) ? 0 : info.location.coords.lat,
                  lng: isNaN(e.target.value as any) ? 0 : Number(e.target.value),
                })
              }
              placeholder="-6.98765"
            />
          </div>

          <BaseTextInput
            label="Dirección postal"
            name="address"
            type="text"
            value={info.location.address}
            onChange={(e) =>
              setPointAddress(e.target.value)
            }
            placeholder="Calle Gascona, 1, 33001 Oviedo"
          />

          <BaseSelect
            id="create-point-category-selector"
            label="Categoría"
            name="category"
            options={availableCategories.map((cat) => {
              return { value: cat.name, content: cat.name };
            })}
            handleChange={(e) =>
              setCurrentPointProperty("category", e.target.value)
            }
          />
          <BaseTextArea
            label="Descripción"
            name="description"
            value={info.description}
            onChange={(e) =>
              setCurrentPointProperty("description", e.target.value)
            }
            placeholder="Explica brevemente la ubicación del punto, su horario, etc."
          />
        </div>

        <div className="create-form-buttons">
          <BaseButton
            type="button-primary"
            text="Publicar"
            onClick={handleAddPoint}
          />
        </div>
      </form>
    </div>
  );
}

export default CreatePointForm;
