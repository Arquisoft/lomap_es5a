import React from 'react';
import "../../public/css/components/buttons/BaseButton.scss";
import "../../public/css/components/buttons/IconButton.scss";
import Icon from '@mui/material/Icon';

type Props = {
  type: string;
  mode?: string;
  text: string;
  muaIconName: string;
  handleClick?: React.MouseEventHandler<HTMLElement>;
}

function IconButton({ type, mode, text, muaIconName, handleClick }: Props) {
  return (
    <button className={`icon-button ${type} ${mode}`} onClick={handleClick}>
      <Icon sx={{ fontSize: 18 }}>{muaIconName}</Icon>
      {text}
    </button>
  );
}

export default IconButton;
