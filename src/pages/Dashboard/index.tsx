import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repository } from './style';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="github_explorer" />
    <Title>
      Explore repositórios
      no Github.
    </Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisa</button>

    </Form>
    <Repository>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/23259675?s=460&u=c9913c9673a61c27969876994e73c319b0ad8a28&v=4"
          alt="kauayzão"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy Peasy Highly scalabe React & React Native Forms</p>
        </div>

        <FiChevronRight size={30} />
      </a>

      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/23259675?s=460&u=c9913c9673a61c27969876994e73c319b0ad8a28&v=4"
          alt="kauayzão"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy Peasy Highly scalabe React & React Native Forms</p>
        </div>

        <FiChevronRight size={30} />
      </a>

      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/23259675?s=460&u=c9913c9673a61c27969876994e73c319b0ad8a28&v=4"
          alt="kauayzão"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy Peasy Highly scalabe React & React Native Forms</p>
        </div>

        <FiChevronRight size={30} />
      </a>
    </Repository>
  </>
);

export default Dashboard;
