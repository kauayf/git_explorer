/* eslint-disable camelcase */
import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Title,
  Form,
  Repository,
  Error,
} from './style';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };

}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRespositories = localStorage.getItem('@GitExplorer:repositories');

    if (storagedRespositories) {
      return JSON.parse(storagedRespositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GitExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o nome do autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const respository = response.data;

      setRepositories([...repositories, respository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Repositorio inexistente/incorreto');
    }
  }
  return (
    <>
      <img src={logoImg} alt="github_explorer" />
      <Title>
        Explore repositórios
        no Github.
      </Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          placeholder="Digite autor/repositorio. Ex: facebook/react"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />

        <button type="submit">Pesquisa</button>

      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repository>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={30} />
          </Link>
        ))}
      </Repository>
    </>
  );
};

export default Dashboard;
