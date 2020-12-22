import React from 'react';
import { IconType } from 'react-icons/lib';

import { Container, SelectElement } from './styles';

interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: IconType;
}

const Select = React.forwardRef<HTMLSelectElement, ISelectProps>(
  ({ icon: Icon, ...rest }, ref) => (
    <Container>
      {Icon && <Icon size={24} />}
      <SelectElement ref={ref} {...rest} />
    </Container>
  ),
);

export default Select;
