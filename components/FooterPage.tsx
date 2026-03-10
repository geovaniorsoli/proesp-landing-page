import React from 'react';

export default function Footer() {
    return (
        // O container externo dá um espaçamento para a "caixa" do footer não colar nas bordas
        <footer className="p-5 md:p-6 lg:p-8 bg-white">
            {/* A caixa principal com fundo cinza claro e bordas arredondadas igual à imagem */}
            <div className="bg-[#F4F4F5] rounded-2xl pt-20 pb-8 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">

                {/* NOME DA ORG GIGANTE */}
                <div className="flex justify-center mb-10 md:mb-24 px-4">
                    <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-[#17C964] leading-tight text-center">
                        Associação Protetora da Diversidades das Espécies PROESP
                    </h2>
                </div>


                {/* COLUNAS DE INFORMAÇÕES */}
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center align-center gap-10 md:gap-4 mb-16">

                    {/* Coluna 1: Endereço */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900 mb-4">
                            Endereço
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Avenida das Amoreiras, nº 165 <br />
                            Parque Itália <br />
                            13036-225 <br />
                            Campinas-SP
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900 mb-4">
                            Siga-nos
                        </h3>
                        <a
                            href="https://www.instagram.com/proesp_campinas/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[#F31260] text-sm md:text-base transition-colors flex items-center gap-1 mb-2 w-fit"
                        >
                            Instagram <span className="text-xs">↗</span>
                        </a>

                        <a
                            href="mailto:proesp@preservacao.org.br"
                            className="text-gray-600 hover:text-[#006FEE] text-sm md:text-base transition-colors flex items-center gap-1 w-fit"
                        >
                            proesp@preservacao.org.br <span className="text-xs">↗</span>
                        </a>
                    </div>


                    <div className="md:justify-self-end">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900 mb-4">
                            DIRETORIA DO PERÍODO 2026-2028
                        </h3>
                        <p
                            className="text-gray-600 text-sm md:text-base flex items-center"
                        >
                            PRESIDENTE: Roseli Buzanelli Torres <br />
                            VICE PRESIDENTE: Vitor Hugo Penedo <br />
                            SECRETÁRIA: Ernestina Gomes de Oliveira <br />
                            2º. SECRETÁRIO: Tiago Fernandes de Lira <br />
                            TESOUREIRO: José Antônio de Oliveira <br />
                            2º. TESOUREIRO: Giovana Guarizzo <br />
                        </p>
                    </div>

                </div>

                {/* RODAPÉ INFERIOR (Links e Créditos) */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 mt-8 text-sm text-gray-500">

                    {/* Seus créditos */}
                    <p className="text-center md:text-right">
                        Feito por:{' '}
                        <a
                            href="https://geovaniorsoli.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-bold underline-offset-1 text-[#006FEE] hover:text-[#66AAF9] transition-colors"
                        >
                            Geovani Orsoli
                        </a>
                    </p>
                </div>

            </div>
        </footer>
    );
}