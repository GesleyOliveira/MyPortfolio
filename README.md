<div align="center">
  <h1 style="font-size: 3rem; margin-bottom: 0.5rem;">💼 MyPortfolio</h1>
  <p style="font-size: 1.2rem; max-width: 700px;">
    Projeto de portfólio pessoal desenvolvido com <strong>React</strong>, <strong>TypeScript</strong>, <strong>Vite</strong> e <strong>Material UI</strong>. Apresenta, de maneira moderna e responsiva, informações sobre minha formação, habilidades, projetos e formas de contato profissional.
  </p>
</div>

---

## 🛠️ Tecnologias Utilizadas

<ul style="list-style: none; padding-left: 0;">
  <li>⚛️ <a href="https://react.dev/">React 19</a></li>
  <li>🔷 <a href="https://www.typescriptlang.org/">TypeScript</a></li>
  <li>⚡ <a href="https://vitejs.dev/">Vite</a></li>
  <li>🎨 <a href="https://mui.com/">Material UI v7</a></li>
  <li>💅 <a href="https://emotion.sh/docs/introduction">Emotion</a></li>
  <li>🔣 <a href="https://mui.com/components/material-icons/">MUI Icons</a></li>
  <li>🧩 <a href="https://github.com/vitejs/vite-plugin-react">Vite Plugin React</a></li>
</ul>

---

## 📁 Estrutura do Projeto

```shell
myPortfolio/
├── public/                 # Arquivos públicos (favicons, etc.)
├── src/
│   ├── assets/             # Imagens e mídias
│   ├── components/         # Componentes reutilizáveis
│   ├── pages/              # Páginas principais (ex: Home, About)
│   ├── themes/             # Configurações de tema MUI
│   └── main.tsx           # Ponto de entrada da aplicação
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

## 🚀 Como Executar Localmente

```bash
# 1. Clone o repositório:
git clone https://github.com/seu-usuario/myPortfolio.git
cd myPortfolio

# 2. Instale as dependências:
npm install

# 3. Execute em modo de desenvolvimento:
npm run dev
```

> O projeto estará disponível em: [http://localhost:5173](http://localhost:5173)

```bash
# 4. Build para produção:
npm run build

# 5. Preview do build:
npm run preview
```

---

## ⚙️ Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera os arquivos otimizados para produção
- `npm run preview`: Visualiza o build localmente
- `npm run lint`: Executa o linter para checagem de boas práticas

---

## 🧪 Requisitos

- Node.js >= 18
- Navegador moderno (Chrome, Edge, Firefox)

---

## 📝 Informações Adicionais

Este projeto foi criado com foco em:

- Desempenho
- Boas práticas de código
- Arquitetura modular
- Componentização e reutilização de elementos

Sinta-se à vontade para personalizar com suas informações profissionais.

---

## 📢 Contato

Desenvolvido por: **Gesley de Oliveira Rosa**  
🎓 Engenheiro de Produção | 💻 Desenvolvedor de Software  
📧 geeh.oliveira@hotmail.com / gesleyoliveirarosa@gmail.com  
🌍 Brasil

---

<p align="center" style="font-style: italic; font-size: 1.1rem;">
  “Grandes coisas têm pequenos começos.” — Peter S.
</p>



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# MyPortfolio
Portfolio
c823277faaf5b629f93892876e4fe3cc566c875c
