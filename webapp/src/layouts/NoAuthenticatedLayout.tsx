type Props = {
  children: JSX.Element;
};

// TODO: Mover estilo en línea a fichero CSS externo
function NoAuthenticatedLayout({ children }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Vista no autenticado</p>
      {children}
    </div>
  );
}

export default NoAuthenticatedLayout;
