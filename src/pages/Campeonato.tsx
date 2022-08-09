import {
  useEffect, useState,
} from 'react';
import { toast } from 'react-toastify';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/solid';
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
    <div className="max-w-5xl mx-auto mt-10 sm:px-6 lg:px-8">
      <div className="px-2 sm:px-4 lg:px-8">

        <div className="sm:flex sm:items-center">
          <div className="flex justify-items-center items-center">
            <Link to="/">
              <button
                type="button"
                className="w-full items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >

                <ChevronLeftIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              </button>
            </Link>
            <h1 className="text-xl mx-5 font-semibold text-gray-900">Campeonato</h1>
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
                        Pontos
                      </th>

                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Time
                      </th>

                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Jogos
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        V
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        E
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        D
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        GP
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        GC
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        SG
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Aproveitamento
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                        Ultimos jogos
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {tabela.map((posicao: any) => (
                      <tr key={posicao.time.time_id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {posicao.posicao < 5 ? (
                            <div className="bg-green-600 w-6 py-10 text-center text-white">
                              {posicao.posicao}
                            </div>
                          ) : null}
                          {posicao.posicao > 4 && posicao.posicao < 17 ? (
                            <div className="bg-gray-400 w-6 py-10 text-center text-white">
                              {posicao.posicao}
                            </div>
                          ) : null}
                          {posicao.posicao > 16 ? (
                            <div className="bg-red-400 w-6 py-10 text-center text-white">
                              {posicao.posicao}
                            </div>
                          ) : null}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{posicao.pontos}</td>
                        <td>
                          <img className="w-14" src={posicao.time.escudo} alt="" />
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{posicao.jogos}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {posicao.vitorias}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {posicao.empates}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {posicao.derrotas}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {posicao.gols_pro}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {posicao.gols_contra}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {posicao.saldo_gols}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {posicao.aproveitamento}
                          %
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <div className="flex justify-end">
                            {posicao.ultimos_jogos.map((item : string) => {
                              if (item === 'v') return (<div className="bg-green-600 w-5 h-5 border rounded-xl py-1 mb-1 text-center text-white" />);
                              if (item === 'e') return (<div className="bg-yellow-600 w-5 h-5 border rounded-xl py-1 mb-1 text-center text-white" />);
                              return (<div className="bg-red-600 w-5 h-5 border rounded-xl py-1 mb-1 text-center text-white" />);
                            })}
                          </div>
                        </td>

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
