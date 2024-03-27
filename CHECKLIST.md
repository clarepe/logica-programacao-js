# Setap inicial de um repositorio do GitHub no Visual Studio Code local.

1. Limpar credenciais do sistema
2. Limpar os dados do navegador
3. Abrir meu repositorio no GitHub
4. Copiar a Url do repositorio(HTTPS)
5. Abrir Vs Code
6. Se tiver algun projeto Aberto no Vs Code Feche! (CTRL + K F)
7. Se houver algum usuario logado no Vs code, então clique em sair!
8. Verifique as variaveis `user.name` e `user.email` globais:
~~~bash
git config --global  user.name
git config --global  user.email
~~~
9. Se as variaveis retornarem algum valor, redefina ambas as variaveis:
~~~bash
git config --global --unset user.name
git config --global --unset user.email
~~~
10. Faça a clonagem do repositorio no computador local:
~~~git
git clone https://github.com/<usuario>/<repositorio>.git
~~~
11. Abra o projeto clonando no Vs code:
~~~bash
code -r <repositorio_local>/
~~~
12. Faça o login no Vs Code local para sincronizar suas exetenções e temas.
13. Ative o salvamento automatico _(AutoSave)_: Arquivo>Salvamento automático.
14. clonar com 1 comando : 
~~~git
git clone https://github.com/<usuario>/<repositorio>.git | code -r "e o nome do diretorio a ser aberto na sequencia"


