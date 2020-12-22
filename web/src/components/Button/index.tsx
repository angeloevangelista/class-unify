import React from 'react';
import { IconType } from 'react-icons/lib';

import { Container } from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ icon: Icon, children, ...rest }, ref) => (
    <Container ref={ref} {...rest}>
      {children}
      {Icon && <Icon size={24} />}
    </Container>
  ),
);

export default Button;
