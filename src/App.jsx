import React from 'react';

function App() {
  return (
    <div className="bg-light min-vh-100 py-4">
      {/* Container principal para centralizar e dar alinhamento */}
      <div className="container">
        
        {/* Cabeçalho */}
        <header className="row mb-4">
          <div className="col text-center">
            <h1 className="display-5 fw-bold text-primary">Projeto React + Bootstrap Grid</h1>
            <p className="lead text-secondary">
              Exemplo de layout responsivo utilizando o sistema de colunas do Bootstrap.
            </p>
          </div>
        </header>

        {/* Seção Principal: 3 Cards Responsivos */}
        <main className="row g-4 mb-4">
          {/* Coluna 1: Ocupa 12 colunas em telas pequenas, 4 colunas em telas médias+ */}
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h2 className="h5 card-title text-success">Coluna 1</h2>
                <p className="card-text">
                  Esta coluna ocupa 100% da largura em dispositivos móveis e 1/3 do espaço em telas médias ou maiores (`col-md-4`).
                </p>
              </div>
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h2 className="h5 card-title text-success">Coluna 2</h2>
                <p className="card-text">
                  O sistema de Grid do Bootstrap se baseia em um total de 12 colunas por linha (`row`).
                </p>
              </div>
            </div>
          </div>

          {/* Coluna 3 */}
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h2 className="h5 card-title text-success">Coluna 3</h2>
                <p className="card-text">
                  A classe `h-100` garante que todos os cards tenham a mesma altura na mesma linha.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Linha Assimétrica (Divisão 8 / 4) */}
        <section className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="p-4 bg-white rounded shadow-sm">
              <h2 className="h4 text-dark">Conteúdo Principal (8 Colunas)</h2>
              <p>
                Em telas grandes (`lg`), esta área ocupa 8 das 12 colunas, sendo ideal para artigos,
                tabelas ou feeds de dados.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="p-4 bg-primary text-white rounded shadow-sm">
              <h2 className="h4">Sidebar (4 Colunas)</h2>
              <p>
                Esta área ocupa as 4 colunas restantes, perfeita para menus laterais, links úteis ou informações secundárias.
              </p>
            </div>
          </div>
        </section>

        {/* Rodapé */}
        <footer className="row mt-5">
          <div className="col text-center text-muted">
            <small>&copy; {new Date().getFullYear()} Meu Projeto React. Todos os direitos reservados.</small>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
