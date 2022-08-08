import {
  useEffect, useState,
} from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

function Menu() {
  const [campeonatos, setCampeonatos] = useState([]);

  useEffect(() => {
    api.get('/campeonatos')
      .then(({ data }) => {
        setCampeonatos(data);
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
          {campeonatos.map((campeonato : any) => (
            <div key={campeonato.campeonato_id} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{campeonato.nome}</h2>
                <div className="aspect-w-3 aspect-h-2">
                  <img className="object-cover shadow-lg rounded-lg h-30 w-30" src={campeonato.logo} alt="" />
                </div>
                <p className="mt-4 text-sm text-gray-500">{campeonato.tipo}</p>
                <a
                  href={`/campeonato/${campeonato.campeonato_id}`}
                  className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >
                  Visualizar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
