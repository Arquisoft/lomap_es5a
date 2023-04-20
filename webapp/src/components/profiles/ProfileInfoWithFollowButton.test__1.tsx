import {render,fireEvent, cleanup } from '@testing-library/react';
import ProfileInfoWithFollowButton from "./ProfileInfoWithFollowButton";

//mockeamos la consola pra realizar la prueba
console.log = jest.fn();


describe('ProfileInfoWithFollowButton componente', () => {

    afterAll(cleanup);
  
   it('Renderiza', () => {
      const { getByText, getByAltText, getByRole } = render(
        <ProfileInfoWithFollowButton 
          name='John Doe' 
          imageUrl='https://example.com/image.jpg' 
          webId='https://example.com/johndoe'
        />
      );
      
      const nameElement = getByText('John Doe');
      const imageElement = getByAltText('John Doe');
      const followButton = getByRole('button', {name: 'Seguir'});
      
      expect(nameElement).toBeInTheDocument();
      expect(imageElement).toBeInTheDocument();
      expect(followButton).toBeInTheDocument();
    });
  
    it('Llamamos a la funcion', () => {
      const { getByRole } = render(
        <ProfileInfoWithFollowButton 
          name='John Doe' 
          imageUrl='https://example.com/image.jpg' 
          webId='https://example.com/johndoe'
        />
      );
  
      const followButton = getByRole('button', {name: 'Seguir'});
  
      fireEvent.click(followButton);
  
      expect(console.log).toHaveBeenCalledWith('Followed', 'https://example.com/johndoe');
    });
  });