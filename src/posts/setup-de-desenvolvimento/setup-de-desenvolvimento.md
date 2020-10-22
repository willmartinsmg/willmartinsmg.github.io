---
title: "Configurações básicas do meu setup de desenvolvimento"
date: 2020-10-22T11:07:34.575Z
draft: false
feature_image: wallhaven-nzd21y_2560x1440.png
featured: false
published_at: 2020-10-22T11:07:34.575Z
updated_at: 2020-10-22T11:07:34.575Z
created_at: 2020-10-22T11:07:34.575Z
weight: 2
page: false
tags:
    - setup
slug: "setup-de-desenvolvimento"
author: "william"
comment: true
meta_description: ""
id: "setup-de-desenvolvimento"
---

Toda vez que é preciso trocar de máquina ou formatar é bem chato ficar configurando a máquina para iniciar os trabalhos, por isso... montei esse post com o que eu preciso fazer para deixar a máquina pronta para decolar.

#### 1. Executar a atualização do sistema e as aplicações

#### 2. Instalar o Xcode

#### 3. Instalar HomeBrew

https://brew.sh/

Comando para instalar homebrew

```
$ /usr/bin/ruby -e "\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### 4. Ferramentas para utilizar durante o desenvolvimento

```
$ brew install git
$ brew install node
$ brew install yarn
$ brew cask install visual-studio-code
$ brew cask install insomnia
$ brew cask install google-chrome
$ brew cask install firefox
```

#### 5. Ferramentas de comunicação e outros

```
brew cask install skype
brew cask install slack
brew cask install caffeine
brew cask install vlc
```

#### 6. Configurando o VS Studio Code

O VScode habilitou a sincronização de extensões e configurações de acordo com o usuário, mas antes disso, era necessário sempre configurar tudo sempre, por isso, eu tenho as configurações que sempre faço no VScode.

Extensões que devem ser instaladas:

```
# ESLint - Dirk Baeumer

# Prettier Code formatter - Esben Petersen

# Material Icon Theme - Philipp Kief

# Docker - Microsoft

# Dracula Official - dracula-theme.theme-dracula

# Color Highlight - naumovs.color-highlight

# DotENV - mikestead.dotenv

# EditorConfig for VS Code - editorconfig.editorconfig

# ES7 React/Redux/GraphQL/React-Native snippets - dsznajder.es7-react-js-snippets

# GitLens — Git supercharged - eamodio.gitlens

# Live Server - ritwickdey.liveserver

# Markdown All in One - yzhang.markdown-all-in-one

# Markdown Preview Enhanced - shd101wyy.markdown-preview-enhanced

# Rocketseat React Native - rocketseat.rocketseatreactnative

# vscode-styled-components - jpoissonnier.vscode-styled-components
```

Após incluir as extensões, deve ir em setting (JSON) e incluir as linhas:

```json
{
    // Configuração geral do VS Code
    "workbench.iconTheme": "material-icon-theme",
    "workbench.statusBar.feedback.visible": false,
    "workbench.colorTheme": "Dracula",
    "terminal.integrated.fontSize": 14,
    "breadcrumbs.enabled": true,
    "explorer.confirmDragAndDrop": false,

    // Configuração do editor
    "editor.formatOnSave": true,
    "editor.fontFamily": "Fira Code, Menlo, Monaco, 'Courier New', monospace",
    "editor.fontLigatures": true,
    "editor.fontSize": 14,
    "editor.lineHeight": 24,
    "editor.renderLineHighlight": "gutter",
    "editor.tabSize": 2,
    "editor.minimap.enabled": false,
    "editor.parameterHints.enabled": false,
    "editor.autoClosingQuotes": "always",
    "editor.rulers": [80, 120],

    // Configuração do prettier
    "prettier.singleQuote": true,

    // "prettier.eslintIntegration": true,
    "prettier.eslint": true,
    "prettier.trailingComma": "all",
    "prettier.semi": false,
    "[javascript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        }
    },
    "[javascriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        }
    },
    "[typescript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        }
    },
    "[typescriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        }
    },
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    // Configuração de arquivos javascript
    "emmet.syntaxProfiles": {
        "javascript": "jsx"
    },
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "javascript.updateImportsOnFileMove.enabled": "never",

    // Configuração da extensão git
    "git.confirmSync": false,
    "git.enableSmartCommit": true,
    "git.autofetch": true,

    // Configuração da extensão HTML
    "html.format.enable": true,
    "html.autoClosingTags": true,
    "html.suggest.html5": true,
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.port": 5501,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "liveServer.settings.donotVerifyTags": true
}
```

#### 7. Configuração de fonte

A fonte Fira Code deve ser baixada e instalada no MacOS.
https://github.com/tonsky/FiraCode

#### 8. Configurando Terminal</h2>

Baixar perfil de tema Dracula

```
$ git clone https://github.com/dracula/terminal-app.git

```

#### 9. Instalar oh my zsh

Acessar a página https://ohmyz.sh/ e executar o comando de instalação.

```
$ sh -c "\$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

```

#### 10 - Instalar o [Spaceship](https://github.com/denysdovhan/spaceship-prompt)

Executar o comando:

```
$ git clone https://github.com/denysdovhan/spaceship-prompt.git "\$ZSH_CUSTOM/themes/spaceship-prompt" --depth=1
```

Fazer link do tema spaceship para o oh-my-zsh:

```
ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
```

Configurar o tema no arquivo .zshrc: ZSH_THEME="spaceship"

#### 11 [Zinit](https://github.com/zdharma/zinit)

Executar o seguinte comando:

```
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/zdharma/zinit/master/doc/install.sh)"
```

#### 12. Configuração do arquivo .zshrc

```

export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:\$ANDROID_HOME/platform-tools

source ~/.zinit/bin/zinit.zsh

# If you come from bash you might have to change your \$PATH.

# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.

export ZSH="/Users/william/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will

# load a random theme each time oh-my-zsh is loaded, in which case,

# to know which specific one was loaded, run: echo \$RANDOM_THEME

# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes

ZSH_THEME="spaceship"

# Set list of themes to pick from when loading at random

# Setting this variable when ZSH_THEME=random will cause zsh to load

# a theme from this variable instead of looking in ~/.oh-my-zsh/themes/

# If set to an empty array, this variable will have no effect.

# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.

# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.

# Case-sensitive completion must be off. \_ and - will be interchangeable.

# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.

# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).

# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.

# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.

# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.

# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.

# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files

# under VCS as dirty. This makes repository status check for large repositories

# much, much faster.

# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time

# stamp shown in the history command output.

# You can set one of the optional three formats:

# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"

# or set a custom format using the strftime function format specifications,

# see 'man strftime' for details.

# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than \$ZSH/custom?

# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?

# Standard plugins can be found in ~/.oh-my-zsh/plugins/\*

# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/

# Example format: plugins=(rails git textmate ruby lighthouse)

# Add wisely, as too many plugins slow down shell startup.

plugins=(git)

source \$ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:\$MANPATH"

# You may need to manually set your language environment

# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions

# if [[ -n $SSH_CONNECTION ]]; then

# export EDITOR='vim'

# else

# export EDITOR='mvim'

# fi

# Compilation flags

# export ARCHFLAGS="-arch x86_64"

# ssh

# export SSH_KEY_PATH="~/.ssh/rsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,

# plugins, and themes. Aliases can be placed here, though oh-my-zsh

# users are encouraged to define aliases within the ZSH_CUSTOM folder.

# For a full list of active aliases, run `alias`.

#

# Example aliases

# alias zshconfig="mate ~/.zshrc"

# alias ohmyzsh="mate ~/.oh-my-zsh"

### Added by Zplugin's installer

source '/Users/william/.zplugin/bin/zplugin.zsh'
autoload -Uz \_zplugin
(( \${+\_comps} )) && \_comps[zplugin]=\_zplugin

### End of Zplugin's installer chunk

SPACESHIP_PROMPT_ORDER=(
user
dir
host
git
node
package
exec_time
line_sep
vi_mode
jobs
exit_code
char
)

SPACESHIP_PROMPT_ADD_NEWLINE=false
SPACESHIP_CHAR_SYMBOL=">"
SPACESHIP_CHAR_SUFFIX=" "

### zplugin light zsh-users/zsh-autosuggestions

### zplugin light zsh-users/zsh-completions

### zplugin light zdharma/fast-syntax-highlighting### End of Zinit's installer chunk

### End of Zinit's installer chunk

# Two regular plugins loaded without tracking.

zinit light zsh-users/zsh-autosuggestions
zinit light zdharma/fast-syntax-highlighting
zinit light zsh-users/zsh-completions
zinit light zdharma/fast-syntax-highlighting

# Plugin history-search-multi-word loaded with tracking.

zinit load zdharma/history-search-multi-word

```

#### 13. Alterar local de captura de tela</h2>

O comando abaixo altera o local que é feito a captura de tela

```
defaults write com.apple.screencapture location ~/Pictures
```

### Links úteis

#### Download VMs

https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/
