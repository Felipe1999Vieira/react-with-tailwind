import {
  useEffect, useState,
} from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import api from '../services/api';

interface Campeonato {
  campeonato_id: number,
  nome: string,
  nome_popular: string,
  tipo: string,
  logo: string,
  rodada_atual: {
    nome:string
  }
}

function Menu() {
  const [campeonatos, setCampeonatos] = useState([]);

  useEffect(() => {
    api.get('/campeonatos')
      .then(({ data }) => {
        const dataFilter = data.filter((item : Campeonato) => item.campeonato_id === 10);
        setCampeonatos(dataFilter);
      })
      .catch(() => toast.error('Problema ao buscar informações, tente novamente mais tarde!'));
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Campeonatos</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center"> Acesse os dados de campeonatos do mundo todo!</p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {campeonatos?.map((campeonato : Campeonato) => (
            <div key={campeonato.campeonato_id} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{campeonato.nome}</h2>

                <div className="inline-flex w-full justify-between">
                  <p className="mt-2 text-sm text-gray-500">{campeonato.tipo}</p>
                  <p className="mt-2 text-sm text-gray-500">{campeonato.rodada_atual?.nome}</p>
                </div>

                <div className="aspect-w-3 aspect-h-2 max-w-sm">
                  <img className="inline-block my-5" src={campeonato.logo} alt="" />
                </div>

                <Link to={`/campeonato/${campeonato.campeonato_id}`}>
                  <button
                    type="button"
                    className="w-full items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Visualizar
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
