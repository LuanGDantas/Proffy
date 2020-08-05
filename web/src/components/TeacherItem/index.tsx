import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/47144271?s=460&u=369fb031170e4c17b2138878ce03bee13e6f8fe9&v=4" alt="Luan Dantas" />
        <div>
          <strong>Luan Dantas</strong>
          <span>Educação Física</span>
        </div>
      </header>

      <p>
        Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.
            <br /><br />
            Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;