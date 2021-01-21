---
title: "Git e Github"
excerpt: "Instalação git windows/linux, criar conta github"
---

### O que é o Git?

O Git é um sistema open-source de controle de versão utilizado pela grande maioria dos desenvolvedores atualmente. Com ele podemos criar todo histórico de alterações no código do nosso projeto e facilmente voltar para qualquer ponto para saber como o código estava naquela data.

Além disso, o Git nos ajuda muito a controlar o fluxo de novas funcionalidades entre vários desenvolvedores no mesmo projeto com ferramentas para análise e resolução de conflitos quando o mesmo arquivo é editado por mais de uma pessoa em funcionalidades diferentes.


### O que é o Github?

O Github é um serviço online de hospedagem de repositórios Git (como são chamados os projetos que utilizam Git). Com ele podemos manter todos nossos commits e ramos sincronizados entre os membros do time.

Além de servir como hospedagem, o Github possui muitas integrações com serviços que auxiliam no deploy da aplicação através de integração contínua.

### Como instalar

#### No windows

Para a instalação no windows é muito simples basta acessar o site do [git](https://git-scm.com/), e clicar para baixar, salve o arquivo e siga as instruções, como está no widows o clássico "Next, Next, ..."
Após a instalação você pode procurar por Git, que logo irá aparecer "Git Bash", esse é o terminal do git, é bem similar ao cmd do windows, porém nele podemos executar comando do linux, e podemos ter cores diferentes para as mensagem, facilitando assim saber se erramos ou acertamos.

#### No linux

Na maioria das distribuições Linux, o git já vem instalado nativamente, para saber se você possui no seu computador, basta digitar no terminal "git", se aparecer uma lista de comandos é porque você possui o git instaldo. Agora caso no aparece, você pode rodar os seguintes comandos:

##### Debian/Ubuntu
> sudo apt-get install git

- via PPA

> add-apt-repository ppa:git-core/ppa && apt update && apt install git

##### Fedora

> yum install git (up to Fedora 21)

> dnf install git (Fedora 22 and later)

##### Gentoo

> emerge --ask --verbose dev-vcs/git

##### Arch Linux

> pacman -S git

##### OpenSUSE

> zypper install git
