import {
  useEffect, useState,
} from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function Menu() {
  const { id } = useParams();

  const [tabela, setTabela] = useState([]);

  useEffect(() => {
    api.get(`/campeonatos/${id}/tabela`)
      .then(({ data }) => {
        setTabela(data);
      })
      .catch(() => toast.error('Problema ao buscar informações, tente novamente mais tarde!'));
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-10 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-6 lg:px-8">

        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Campeonato</h1>
          </div>
        </div>

        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Posição
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Time
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Pontos
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Jogos
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                        Ultimos jogos
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {tabela.map((posicao : any) => (
                      <tr key={posicao.time.time_id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {posicao.posicao}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <img className="h-20 w-20" src={posicao.time.escudo} alt="" />
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{posicao.pontos}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{posicao.jogos}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">{posicao.ultimos_jogos}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
