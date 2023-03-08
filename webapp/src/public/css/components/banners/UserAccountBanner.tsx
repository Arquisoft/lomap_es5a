import { ComponentClassName } from 'src/shared/shareddtypes';

 function UserAccountBanner({_className}: ComponentClassName) {
  return (
    <div className={`user-account-banner-container ${_className}`}>
        {/* Imagen de fondo como prop */}
        {/* Componente para mostrar avatar y nombre del usuario */}
        Banner de la cuenta
    </div>
  )
}


export default UserAccountBanner;