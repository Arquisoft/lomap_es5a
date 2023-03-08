import AccountLayout from "src/layouts/AccountLayout";

function UserAccountPage({ ...props }) {
  return (
    <AccountLayout hasBanner={true}>
      <div className="user-account-container">
        <section className="user-account-container__body">
            {/* Listado de puntos creados por el usuario */}
            <p>Contenido del perfil</p>
        </section>
      </div>
    </AccountLayout>
  );
}

export default UserAccountPage;
