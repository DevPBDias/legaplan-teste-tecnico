# Teste Dev Junior da Legaplan - Lista de tarefas

## 📌 Sobre o projeto:

<p>O teste consiste em desenvolver uma lista de tarefas que respeite os requisitos especificados previamente.</p>

<details>
  <summary> Requisitos</summary>
  <h3> Este projeto é um desafio proposto pela equipe da LegaPlan para uma vaga de dev Junior, os pontos levantados são:</h3>
  
   - O projeto deve ser criado utilizando NextJS utilizando o App Router e SCSS.
  
   - Além das boas práticas de programação, esperamos ver fidelidade MÁXIMA ao design. Preste atenção aos detalhes como sombras, gradientes, entre outros
</details>
<details><summary>Funcionalidades</summary>
<ul>
   <li>Adcionar/Remover tarefas;</li>
    <li>Ativar/Desativar modal ao clickar nos botões</li>
    <li>Responsividade da aplicação</li>
</ul>
</details>
<details><summary>Aprendizados</summary>
 <ul>
  <li>Usar SCSS para estilizar</li>
  <li>Estilizar checkbox de forma customizada</li>
</ul>
</details>
</br>

## ✨ Como ficou o projeto?
<div align="center">
  
  ![Alt Text](https://github.com/user-attachments/assets/c41c1649-9647-4541-8183-5c446fbb1af5)
    
</div>
<details>
  <summary>Deploy da aplicação</summary>
  
> <a href="https://legaplan-teste-tecnico.vercel.app" target="_blank">https://legaplan-teste-tecnico.vercel.app</a>

</details>
<details>
  <summary>Figma do projeto</summary>

> <a href="https://www.figma.com/design/4iESWnasLZSHyghg1ipj1P/Teste-Dev-Junior---Legaplan?node-id=0-1&node-type=canvas&t=GxQUSS4KxQUWBUBN-0" target="_blank">https://www.figma.com/design/4iESWnasLZSHyghg1ipj1P/Teste-Dev-Junior---Legaplan?node-id=0-1&node-type=canvas&t=GxQUSS4KxQUWBUBN-0</a>

</details>

<details>
  <summary>Confira a versão mobile</summary>
</br>
    <div align="left">

![image](https://github.com/user-attachments/assets/67171464-36b1-40e9-be8a-f08c7254b689)
![image](https://github.com/user-attachments/assets/1fd66ee0-8964-43bb-9007-bd3b68508d88)

  </div>
</details>

<details>
  <summary>Como está o localStorage?</summary>
</br>
  <div align="center">
    
![image](https://github.com/user-attachments/assets/35f414f3-ef17-4ecf-9cef-02bc5934ad27)

  </div>
</details>
</br>

## 🖥 Quais tecnologias foram utilizadas?
<div align="left">
	<img width="32" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/>
	<img width="32" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next.js" title="Next.js"/>
	<img width="32" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/>
	<img width="32" src="https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png" alt="Sass" title="Sass"/>
</div>
</br>
<details>
  <summary>Frameworks e bibliotecas (versões utilizadas)</summary>
  
  ```js
    - Next: 14.2.12
    - React: 18
    - Typescript: 5
    - Sass/Scss: 1.79.1
  ```
</details>
</br>

## 🔎 Como me localizar no projeto?

### Todos os arquivos de código fonte do projeto estão em: `./src`

<details>
  <summary>Como o projeto está estruturado?</summary>
  
  - `./src/app:` Este projeto com o App Router, entretanto não temos nenhuma outra rota. Então esta pasta você pode localizar a página principal, scss global, o layout com as configurações e o favicon do site.
  
  - `./src/assets:` Onde está todas as imagens e os ícones que vão ser usadas no projeto.
  
  - `./src/components:` Onde está os componentes que serão reutilizados em diversas partes do código. Nesta primeira versão do site temos os components:
      - addTaskBtn: Botão para adicionar novas tarefas;
      - header: Cabeçalho padrão do app;
      - modals: Contém os modais que serão chamados para tela;
      - taskCard: Componente da lista de tarefas com checkbox, nome da tarefa e botão de deletar;
      - taskList: Responsável por agrupar todas as tarefas e ser renderizado na página principal.
        
  - `./src/contexts:` Os contexts são onde separamos os dados que serão compartilhados com toda a aplicação, neste projeto possue dois contextos: 
      - 'modal-provider.tsx' é o responsável por fazer a ativação/desativação dos modais.
      - 'task-provider.tsx' é o responsável por fazer a adição/remoção das tarefas e salvar/remover as tarefas do localStorage. 
  
</details>

<details>
  <summary>Como rodar o projeto na minha máquina?</summary>

- Vale ressaltar que já está o link do site no topo desta documentação. Mas caso queira analisar o código fonte fique a vontade para instalar este case na sua máquina! Tutorial a baixo:

- Antes de tudo, você precisa ter o Git instalado no seu computador. O Git é uma ferramenta que permite clonar e gerenciar repositórios de código.
    - Windows: Baixe o Git <a href="https://git-scm.com/download/win" target="_blank">aqui</a> e siga as instruções de instalação.
    - macOS: Você pode instalar o Git <a href="https://git-scm.com/download/mac" target="_blank">aqui</a> ou usando o Homebrew com o comando brew install git:
        ```bash
        brew install git
        ```
    - Linux: Use o gerenciador de pacotes da sua distribuição, por exemplo para Debian/Ubuntu:
        ```bash
        sudo apt install git
        ```

- Abra o terminal (no Windows, você pode usar o Git Bash, que é instalado junto com o Git).

- Navegue até o diretório onde deseja armazenar o projeto.

- Execute o comando para clonar o repositório:

    ```bash
    git@github.com:DevPBDias/legaplan-teste-tecnico.git
    ```
- Após clonar o repositório, navegue até a pasta do projeto
    ```bash
    cd legaplan-teste-tecnico
    ```

- Agora você pode abrir os arquivos do projeto com seu editor de texto ou IDE preferido. Exemplo do vsCode: 
    ```bash
    code .
    ```

- 🚨 Não esqueça que para não ocorrer erros no código ao clonar ele, você deve fazer o comando abaixo 🚨
    ```bash
    npm i   
    ```

- Pronto! Todo o site estará funcionado na sua máquina. Porém, caso precise de alguma ajuda em algo entre em contato comigo pelo meu <a href="https://www.linkedin.com/in/devpaulobrunomdias" target="_blank">Linkedin</a>.</p>

</details>
</br>

## 🤝🏼 Vamos nos conectar?

<h4>🎉 É isso! Este é o projeto finalizado, caso tenha ficado com alguma dúvida ou deseje complementar algo diretamente comigo você pode estar entrando em contato através do meu <a href="https://www.linkedin.com/in/devpaulobrunomdias" target="_blank">Linkedin</a>.</h4>

<h4>🚀 Se gostou desse projeto, confira mais projetos como este no meu <a href="https://portfolio-final-jade-pi.vercel.app" target="_blank">Portfolio</a>.</h4>

<h4>👋🏻 Obrigado pela atenção e espero que tenha gostado do que tenha visto aqui, que tal agora dar uma olhada nos meus outros <a href="https://github.com/DevPBDias" target="_blank">repositórios</a>?</h4>
</br>

## ❤️ Créditos

<details>
  <summary>Créditos do figma total a equipe LegaPlan</summary>

> <a href="https://www.figma.com/design/4iESWnasLZSHyghg1ipj1P/Teste-Dev-Junior---Legaplan?node-id=0-1&node-type=canvas&t=GxQUSS4KxQUWBUBN-0" target="_blank">https://www.figma.com/design/4iESWnasLZSHyghg1ipj1P/Teste-Dev-Junior---Legaplan?node-id=0-1&node-type=canvas&t=GxQUSS4KxQUWBUBN-0</a>

</details>
<details>
  <summary>Créditos dos emojis</summary>

> <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>

</details>
<details>
  <summary>Créditos dos ícones</summary>

> <a href="https://marwin1991.github.io/profile-technology-icons/" target="_blank">https://marwin1991.github.io/profile-technology-icons/</a>

</details>

