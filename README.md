# EduTrack Pro - Gestão Acadêmica Senior

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Uma solução moderna e elegante para gestão de notas acadêmicas, desenvolvida com foco em **Objetos Literais**, padrões de projeto avançados e experiência do usuário (UX) de alto nível.

## 🚀 Visão Geral

Este projeto nasceu como uma exploração educacional sobre a manipulação de objetos em JavaScript e evoluiu para uma aplicação web completa (Dashboard). Ele demonstra como utilizar a sintaxe de objetos literais de forma escalável, aplicando desestruturação, *spread operator* e métodos de instância para criar um fluxo de trabalho eficiente e profissional.

## ✨ Funcionalidades Principais

- **Dashboard Interativo**: Interface moderna com glassmorphism e animações fluidas.
- **Gestão de Alunos**: Adição dinâmica de alunos e notas via interface intuitiva.
- **Cálculo em Tempo Real**: Médias aritméticas e status acadêmico (Aprovado/Recuperação) processados instantaneamente.
- **Estatísticas Avançadas**: Painel de indicadores com média geral da turma e contagem de aprovados.
- **Persistência Local**: Todos os dados são salvos no `localStorage` do navegador, garantindo que as informações não sejam perdidas ao recarregar a página.
- **Arquitetura de Objetos**: Uso de *factory functions* para criação de objetos literais robustos e métodos encapulados.

## 🛠️ Tecnologias Utilizadas

- **Núcleo**: JavaScript (ES6+) aplicando os conceitos mais modernos.
- **Bundler**: [Vite](https://vitejs.dev/) para um desenvolvimento ultra-rápido e build otimizado.
- **Estilização**: CSS3 Custom Properties (Variáveis CSS) para um design system flexível.
- **Tipografia**: Google Fonts (Inter) para máxima legibilidade.
- **Ícones**: SVG inline para performance e escalabilidade visual.

## 🏗️ Estrutura do Projeto

```text
js-object-literals-aluno/
├── src/
│   ├── main.js             # Orquestrador da Interface e Eventos
│   ├── student-manager.js  # Lógica de Negócios e Objetos Literais
│   ├── style.css           # Design System e Estilização Premium
│   └── student.js          # (Opcional) Módulos adicionais
├── index.html              # Estrutura Semântica Base
├── package.json            # Dependências e Scripts
└── README.md               # Documentação Profissional
```

## ⚙️ Instruções de Instalação e Uso

### Pré-requisitos
- Node.js (v18 ou superior)
- NPM ou Yarn

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/matheussiqueira-dev/js-object-literals-aluno.git
   ```

2. **Acesse o diretório:**
   ```bash
   cd js-object-literals-aluno
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Para build de produção:**
   ```bash
   npm run build
   ```

## 🏆 Boas Práticas Implementadas

- **Imutabilidade**: Uso de *spread operator* para atualização de dados sem mutação direta de estados complexos.
- **Clean Code**: Funções com responsabilidade única e nomes semânticos.
- **Acessibilidade**: Contraste adequado (WCAG), uso de fontes legíveis e estrutura HTML semântica.
- **Mobile First**: Layout responsivo que se adapta perfeitamente a dispositivos móveis e desktops.

## 🔮 Melhorias Futuras

- [ ] Exportação de boletins em PDF.
- [ ] Gráficos de desempenho individual utilizando Chart.js.
- [ ] Autenticação de professores/usuários.
- [ ] Integração com API externa para armazenamento em nuvem.

---

**Autoria**: Matheus Siqueira  
**Website**: [https://www.matheussiqueira.dev/](https://www.matheussiqueira.dev/)
