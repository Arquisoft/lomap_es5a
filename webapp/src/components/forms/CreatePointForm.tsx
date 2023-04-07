import { useSession } from "@inrupt/solid-ui-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { addPoint } from "../../api/point.api";
import { availableCategories } from "../../helpers/CategoryFilterHelper";
import "../../public/css/components/forms/CreatePointForm.css";
import { HOME_PATH } from "../../routes";
import { Coordinate } from "../../shared/shareddtypes";
import { useMarkerStore } from "../../store/map.store";
import { usePointDetailsStore } from "../../store/point.store";
import { useUserStore } from "../../store/user.store";
import {
  NO_OPTION_SELECTED,
  checkAnyOptionIsSelected,
  checkIsNotEmpty,
  checkIsValidGeoCoordinate,
} from "../../utils/validator";
import BaseButton from "../buttons/BaseButton";
import BaseSelect from "../inputs/BaseSelect";
import BaseTextArea from "../inputs/BaseTextArea";
import BaseTextInput from "../inputs/BaseTextInput";
import BaseMessage from "../messages/BaseMessage";

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
    resetPointInfo,
    image,
  } = usePointDetailsStore();
  const [errors, setErrors] = useState([] as any);
  const [requiredFormData, setRequiredFormData] = useState({
    name: "",
    category: NO_OPTION_SELECTED,
    lat: NaN,
    lng: NaN,
  });
  const navigate = useNavigate();
  const { session } = useSession();
  const { name, imageUrl } = useUserStore();

  const validateForm = (): boolean => {
    let hasErrors: boolean = false;
    setErrors([]);
    try {
      if (info.description) {
        checkIsNotEmpty(info.description, "descripción del punto");
      }
      checkAnyOptionIsSelected(info.category, "categoría del punto");
      checkIsValidGeoCoordinate(info.location.coords.lat, Coordinate.LAT);
      checkIsValidGeoCoordinate(info.location.coords.lng, Coordinate.LNG);
    } catch (err) {
      setErrors([...errors, (err as Error).message]);
      hasErrors = true;
    }

    return hasErrors;
  };

  const hasAnyRequiredFieldInvalid = (): boolean => {
    return (
      requiredFormData.name.length > 0 &&
      requiredFormData.category !== NO_OPTION_SELECTED &&
      (!isNaN(requiredFormData.lat) || !isNaN(info.location.coords.lat)) &&
      (!isNaN(requiredFormData.lng) || !isNaN(info.location.coords.lng))
    );
  };

  const handleRequiredDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRequiredFormData({ ...requiredFormData, [name]: value });
  };

  const refreshErrors = () => {
    if (hasAnyRequiredFieldInvalid()) {
      setErrors([]);
    }
  };

  const handleAddPoint = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    validateForm();

    console.log("info", info);
    console.log("errors", errors);

    console.log("Punto creado correctamente!");

    setIsUploading(true);
    setIsFinished(false);
    info._id = crypto.randomUUID();
    info.location.postalCode = 0;
    info.location.city = "";
    info.location.country = "";
    info.owner.name = name;
    info.owner.imageUrl = imageUrl;

    await addPoint(
      info,
      session,
      image,
      (isSuccess: boolean) => {
        setIsUploading(false);
        setIsFinished(isSuccess);
        console.log(
          "%c 📍 Punto creado correctamente! ",
          "background: #222; color: #bada55; font-size: 20px; width: 100%; text-align: left;"
        );
        navigate(HOME_PATH);
        setErrors([]);
        resetPointInfo();
      }
    );
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
            id="nombre"
            label="Nombre (*)"
            type="text"
            name="name"
            required={true}
            showClearButton={true}
            value={info.name}
            onChange={(e) => {
              try {
                checkIsNotEmpty(e.target.value, "Nombre del punto");
                setCurrentPointProperty("name", e.target.value);
                handleRequiredDataChange(e);
              } catch (error) {
                setErrors([...errors, (error as Error).message]);
              }
              refreshErrors();
            }}
            placeholder="Sidreria Tierra Astur"
            styles={{
              height: "62px",
            }}
          />

          <div className="create-form-form-coords-inputs">
            <BaseTextInput
              id="latitud"
              label="Latitud (*)"
              name="lat"
              type="number"
              required={true}
              value={info.location.coords.lat || 0}
              onChange={(e) => {
                setPosition({
                  lat: !isNaN(parseFloat(e.currentTarget.value))
                    ? parseFloat(e.currentTarget.value)
                    : 0,
                  lng: info.location.coords.lng,
                });

                handleRequiredDataChange(e);
              }}
              placeholder="43.12345"
              styles={{
                width: "296px",
                height: "62px",
              }}
            />

            <BaseTextInput
              id="longitud"
              label="Longitud (*)"
              name="lng"
              type="number"
              required={true}
              onChange={(e) => {
                setPosition({
                  lat: info.location.coords.lat,
                  lng: !isNaN(parseFloat(e.target.value))
                    ? parseFloat(e.target.value)
                    : 0,
                });

                handleRequiredDataChange(e);
              }}
              value={info.location.coords.lng || 0}
              placeholder="-6.98765"
              styles={{
                width: "296px",
                height: "62px",
              }}
            />
          </div>

          <BaseTextInput
            id="direccion"
            label="Dirección postal"
            name="address"
            type="text"
            value={info.location.address}
            showClearButton={true}
            onChange={(e) => {
              setPointAddress(e.target.value);
            }}
            placeholder="Calle Gascona, 1, 33001 Oviedo"
            styles={{
              width: "600px",
              height: "62px",
            }}
          />

          <BaseSelect
            id="create-point-category-selector"
            label="Categoría (*)"
            name="category"
            showContent={true}
            options={availableCategories.map((cat) => {
              return { value: cat.code, content: cat.name };
            })}
            styles={{
              height: "62px",
            }}
            handleChange={(e) => {
              try {
                if (e.currentTarget.value === "not-opt") {
                  throw new Error("Debes seleccionar una categoría");
                }
                setRequiredFormData({
                  ...requiredFormData,
                  category: e.currentTarget.value,
                });
                checkAnyOptionIsSelected(e.target.value, "categoría del punto");
                setCurrentPointProperty("category", e.target.value);
              } catch (error) {
                setErrors([...errors, (error as Error).message]);
              }
              refreshErrors();
            }}
          />
          <BaseTextArea
            label="Descripción"
            name="description"
            value={info.description}
            onChange={(e) =>
              setCurrentPointProperty("description", e.target.value)
            }
            placeholder="Explica brevemente la ubicación del punto, su horario, etc."
            maxLength={1000}
          />
        </div>

        <div className="create-form-buttons">
          <BaseButton
            type="button-black"
            text="Publicar"
            disabled={
              errors.length > 0 || !hasAnyRequiredFieldInvalid() || isUploading
            }
            isLoading={isUploading}
            loadingText="Publicando..."
            onClick={handleAddPoint}
          />
        </div>
      </form>
      {!isUploading && isFinished && (
        <BaseMessage type="success" text="Punto publicado correctamente" />
      )}
      {errors.length > 0 &&
        errors.map((err: any) => {
          return (
            <BaseMessage key={crypto.randomUUID()} type="error" text={err} />
          );
        })}
    </div>
  );
}

export default CreatePointForm;
