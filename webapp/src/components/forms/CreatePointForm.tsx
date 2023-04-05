import { useSession } from "@inrupt/solid-ui-react";
import { useEffect, useState } from "react";
import { availableCategories } from "../../helpers/CategoryFilterHelper";
import "../../public/css/components/forms/CreatePointForm.css";
import { Category, Coordinate } from "../../shared/shareddtypes";
import { useMarkerStore } from "../../store/map.store";
import { usePointDetailsStore } from "../../store/point.store";
import { useUserStore } from "../../store/user.store";
import { checkAnyOptionIsSelected, checkIsNotEmpty, checkIsValidGeoCoordinate } from "../../utils/validator";
import BaseButton from "../buttons/BaseButton";
import BaseSelect from "../inputs/BaseSelect";
import BaseTextArea from "../inputs/BaseTextArea";
import BaseTextInput from "../inputs/BaseTextInput";
import BaseMessage from "../messages/BaseMessage";
import { addPoint } from "../../api/point.api";

function CreatePointForm() {
  const {
    setCurrentPointProperty,
    setPosition,
    setPointAddress,
    info,
    isUploading,
    isFinished,
    setIsUploading,
    setIsFinished,
    image,
  } = usePointDetailsStore();
  const [errors, setErrors] = useState([] as any);
  const { session } = useSession();
  const { name, imageUrl } = useUserStore();

  const validateForm = (): boolean => {
    let hasErrors: boolean = false;
    setErrors([]);
    try {
      if(info.description){
        checkIsNotEmpty(info.description, "descripción del punto");
      }
      checkAnyOptionIsSelected(info.category, "categoría del punto");
      checkIsValidGeoCoordinate(info.location.coords.lat.toString(), Coordinate.LAT);
      checkIsValidGeoCoordinate(info.location.coords.lng.toString(), Coordinate.LNG);

    }catch(err){
      setErrors([...errors, (err as Error).message]); 
      hasErrors = true;
    }

    return hasErrors;

  };

  const handleAddPoint = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const hasErrors: boolean = validateForm();
    console.log("hasErrors", errors);

    //if(hasErrors){
      setPosition({lat: 0, lng: 0});
      setCurrentPointProperty("name", "");
      setCurrentPointProperty("description", "");
      setCurrentPointProperty("category", Category.NONE);

      //return;
    //}

    console.log("info", info);

    console.log("Punto creado correctamente!");

    // setIsUploading(true);
    // setIsFinished(false);
    // info._id = crypto.randomUUID();
    // info.location.postalCode = 0;
    // info.location.city = "";
    // info.location.country = "";
    // info.owner.name = name;
    // info.owner.imageUrl = imageUrl;

    // await addPoint(
    //   info,
    //   session.info.webId as string,
    //   image,
    //   (isSuccess: boolean) => {
    //     setIsUploading(false);
    //     setIsFinished(isSuccess);
    //     console.log('%c 📍 Punto creado correctamente! ', 'background: #222; color: #bada55; font-size: 20px; width: 100%; text-align: left;');
    //   }
    // );
  };

  useEffect(() => {
    useMarkerStore.subscribe((position: any) => {
      const { lat, lng } = position.position;
      setPosition({ lat, lng });
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
            required={true}
            value={info.name}
            onChange={(e) => setCurrentPointProperty("name", e.target.value)}
            placeholder="Sidreria Tierra Astur"
            styles={{
              height: "62px",
            }}
          />

          <div className="create-form-form-coords-inputs">
            <BaseTextInput
              label="Latitud"
              name="lat"
              type="text"
              required={true}
              value={info.location.coords.lat || ""}
              onChange={(e) =>
                setPosition({
                  lat: isNaN(e.target.value as any)
                    ? 0
                    : Number(e.target.value),
                  lng: isNaN(info.location.coords.lng)
                    ? 0
                    : info.location.coords.lng,
                })
              }
              placeholder="43.12345"
              styles={{
                width: "296px",
                height: "62px",
              }}
            />

            <BaseTextInput
              label="Longitud"
              name="lng"
              type="text"
              required={true}
              value={info.location.coords.lng || ""}
              onChange={(e) =>
                setPosition({
                  lat: isNaN(info.location.coords.lat)
                    ? 0
                    : info.location.coords.lat,
                  lng: isNaN(e.target.value as any)
                    ? 0
                    : Number(e.target.value),
                })
              }
              placeholder="-6.98765"
              styles={{
                width: "296px",
                height: "62px",
              }}
            />
          </div>

          <BaseTextInput
            label="Dirección postal"
            name="address"
            type="text"
            value={info.location.address}
            onChange={(e) => {
              setPointAddress(e.target.value);
              setErrors([]);
            }}
            placeholder="Calle Gascona, 1, 33001 Oviedo"
            styles={{
              width: "600px",
              height: "62px",
            }}
          />

          <BaseSelect
            id="create-point-category-selector"
            label="Categoría"
            name="category"
            showContent={true}
            options={availableCategories.map((cat) => {
              return { value: cat.code, content: cat.name };
            })}
            styles={{
              height: "62px",
            }}
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
            type="button-black"
            text="Publicar"
            disabled={errors.length > 0}
            isLoading={isUploading}
            loadingText="Publicando..."
            onClick={handleAddPoint}
          />
        </div>
      </form>
      {!isUploading && isFinished && (
        <BaseMessage type="success" text="Punto publicado correctamente" />
      )}
      {
        errors.length > 0 && errors.map((err: any) => {
          return <BaseMessage key={crypto.randomUUID()} type="error" text={err} />
        })
      }
    </div>
  );
}

export default CreatePointForm;
