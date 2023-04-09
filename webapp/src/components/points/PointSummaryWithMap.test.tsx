import { render, screen,cleanup } from '@testing-library/react';
import PointSummaryWithMap from './PointSummaryWithMap';
import React from "react";

describe('Renderizacion del componente', () => {
  afterAll(cleanup);

  it("SIN renderizacion del minimap",()=>{
    const { getByText, queryByTestId } = render(
      <PointSummaryWithMap
        name="Test location"
        address="Test address"
        lat={0}
        lng={0}
      />
    );
    expect(getByText("Test location")).toBeInTheDocument();
    expect(getByText("Test address")).toBeInTheDocument();
    expect(queryByTestId("map-container")).toBeNull();
  });
  
  it("renderizacion del minimap",()=>{
  
  const name = 'nombre';
  const address = 'direccion';
  const lat = 40.7128;
  const lng = -74.006;
  const hasMap = true;

  render(<PointSummaryWithMap name={name} address={address} lat={lat} lng={lng} hasMap={hasMap} />);

  //Comprueba que el componete renderiza el mapa si hasmap es true
  const mapElement = screen.getByTestId('point-summary-with-map__map');
  expect(mapElement).toBeInTheDocument();

  //Comprueba que el minimapa es renderizado
  const miniMap = screen.getByRole('img', { name: 'MiniMap' });
  expect(miniMap).toBeInTheDocument();
  expect(miniMap).toHaveAttribute('src', `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+FF0000(${lng},${lat})/${lng},${lat},13,0/250x163?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`);

  //Comprueba que el nombre y direcciones sean correctos
  const nameElement = screen.getByText(name);
  expect(nameElement).toBeInTheDocument();

  const addressElement = screen.getByText(address);
  expect(addressElement).toBeInTheDocument();

  // Ahareicon se renderiza
  const shareIcon = screen.getByRole('img', { name: 'Share icon' });
  expect(shareIcon).toBeInTheDocument();

  // Boton Ver renderiza
  const verPuntoButton = screen.getByRole('button', { name: 'Ver punto' });
  expect(verPuntoButton).toBeInTheDocument();
  expect(verPuntoButton).toHaveTextContent('Ver punto');

  // Boton editar renderiza
  const editarButton = screen.getByRole('button', { name: 'Editar' });
  expect(editarButton).toBeInTheDocument();
  expect(editarButton).toHaveTextContent('Editar');
  });
  
});
