import { useSession } from "@inrupt/solid-ui-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { addPoint } from "../../api/point.api";
import { availableCategories } from "../../helpers/CategoryFilterHelper";
import "../../public/css/components/forms/CreatePointForm.css";
import { HOME_PATH } from "../../routes";
import { useMarkerStore } from "../../store/map.store";
import { usePointDetailsStore } from "../../store/point.store";
import { useUserStore } from "../../store/user.store";
import { generateUUID } from "../../utils/stringUtils";
import {
  NO_OPTION_SELECTED,
  checkAnyCategoryIsSelected,
  checkAnyOptionIsSelected,
  checkIsNotEmpty
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
    imageToUpload,
  } = usePointDetailsStore();

  // Mostrar errores después de 5 segundos
  const [, setShowErrorTimeoutConsumed] =
    useState(false);
  const [errors, setErrors] = useState([] as string[]);
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
    let hasNoErrors = true;
    setErrors([]);
    try {
      checkIsNotEmpty(info.name, "nombre del punto");
      checkAnyCategoryIsSelected(info.category, "categoría del punto");

    } catch (err) {
      setErrors([...errors, (err as Error).message]);
      hasNoErrors = false;
      setTimeout(()=>{
        setIsUploading(false);
      },5000);
    }

    return hasNoErrors;
  };

  const handleRequiredDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRequiredFormData({ ...requiredFormData, [name]: value });
  };

  const handleAddPoint = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if(!validateForm()){
      console.log("Formulario inválido", info);
      return;
    }

    setIsUploading(true);
    setIsFinished(false);

    info._id = generateUUID();
    info.location.postalCode = 0;
    info.location.city = "";
    info.location.country = "";
    info.owner.name = name;
    info.owner.imageUrl = imageUrl;
    if (!info.image) {
      info.image = {
        url: "",
        alt: "",
      };
    }

    await addPoint(info, session, imageToUpload, (isSuccess: boolean) => {
      setIsUploading(false);
      setIsFinished(isSuccess);
      console.log(
        "%c 📍 Punto creado correctamente! ",
        "background: #222; color: #bada55; font-size: 20px; width: 100%; text-align: left;"
      );
      navigate(HOME_PATH);
      setErrors([]);
      resetPointInfo();

    }).catch(err => {
      if(err){
        setIsUploading(false);
        setIsFinished(false);
        setErrors([...errors, "Se produjo un error al crear el punto. Por favor, inténtelo de nuevo más tarde"]);
      }
    });
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
      <form id="">
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
                setCurrentPointProperty("name", "");
                setErrors([...errors, (error as Error).message]);
              }
              //refreshErrors();
            }}
            placeholder="Sidreria Tierra Astur"
            styles={{
              height: "62px",
            }}
          />

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
                if (e.target.value === "not-opt") {
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
            data-testid="create-point-button"
            type="button-black"
            text="Publicar"
            disabled={isUploading}
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
          return <BaseMessage key={generateUUID()} type="error" text={err} />;
        })}
    </div>
  );
}

export default CreatePointForm;
