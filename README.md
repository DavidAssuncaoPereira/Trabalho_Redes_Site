# Site de redes

Um motor de sites moderno construído com **Vite**, **TypeScript** e **Tailwind CSS**.
Este projeto serve como base para criar websites rápidos, modulares e fáceis de personalizar.

---

##  Pré-requisitos

Antes de começar, certifica-te de que tens o **Node.js** instalado:

```bash
node -v
```

 Recomenda-se **Node.js v18** ou superior.
Se ainda não o tens, instala em [https://nodejs.org](https://nodejs.org).

---

##  Instalação

Clona o repositório e entra na pasta do projeto:

```bash
git clone https://github.com/DavidAssuncaoPereira/genius-site-engine.git
cd Trabalho_Redes_Site
```

Depois instala as dependências:

```bash
npm install
```

> Podes também usar `yarn` ou `pnpm`, se preferires.

---

##  Executar em modo de desenvolvimento

Para arrancar o servidor local de desenvolvimento:

```bash
npm run dev
```

Quando o Vite estiver pronto, verás algo como:

```
VITE vX.X.X  ready in 300ms
Local:   http://localhost:5173/
```

Abre esse link no teu navegador para veres o site em funcionamento.

---

##  Gerar build de produção

Para compilar o projeto otimizado para produção:

```bash
npm run build
```

Os ficheiros gerados ficam na pasta `dist/`.

Se quiseres testar o build localmente:

```bash
npm run preview
```

---

##  Estrutura do projeto

```
Trabalho_Redes_Site/
├── src/              # Código fonte principal
│   ├── components/   # Componentes reutilizáveis
│   ├── pages/        # Páginas do site
│   └── main.tsx      # Ponto de entrada da aplicação
├── public/           # Ficheiros estáticos (imagens, favicon, etc.)
├── index.html        # HTML principal
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

##  Tecnologias usadas

*  **Vite** — Bundler rápido e simples
*  **TypeScript** — Tipagem estática moderna
*  **Tailwind CSS** — Estilização utilitária
*  **React** (se aplicável) — Framework de componentes

---

##  Licença

Este projeto está disponível sob a licença **MIT**.
Sente-te à vontade para usar, modificar e distribuir.

---

##  Próximos passos

* Adicionar exemplos de sites criados com o motor
* Melhorar a documentação
* Implementar suporte a temas, templates e plugins
---
