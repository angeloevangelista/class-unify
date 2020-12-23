import React from 'react';
import { IconType } from 'react-icons/lib';

import { Container } from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  cancellationButton?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ icon: Icon, cancellationButton = false, children, ...rest }, ref) => (
    <Container ref={ref} {...rest} cancellationButton={cancellationButton}>
      {children}
      {Icon && <Icon size={24} />}
    </Container>
  ),
);

export default Button;
