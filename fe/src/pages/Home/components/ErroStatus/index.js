import PropTypes from 'prop-types';

import { Container } from './styles';

import Button from '../../../../components/Button';
import sad from '../../../../assets/images/sad.svg';

export default function ErroStatus({ onTruAgain }) {
  return (
    <Container>
      <img src={sad} alt="sad" />

      <div className="details">
        <strong>Ocorreu um erro ao obter seus contatos</strong>

        <Button type="button" onClick={onTruAgain}>Tentar novamente</Button>

      </div>
    </Container>
  );
}

ErroStatus.propTypes = {
  onTruAgain: PropTypes.func.isRequired,
};
