<h1>Setup Developer para MacOS High Sierra</h1>

<h2>1 - Executar a atualização do sistema e as aplicações</h2>

<h2>2 - Instalar o Xcode</h2>

<h2>3 - Instalar HomeBrew</h2>
https://brew.sh/

```
Comando para instalar homebrew
/usr/bin/ruby -e "\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew cask install insomnia
brew install git
brew install node
brew install yarn
brew install watchman
brew install php72
brew install composer

npm install -g ipt
npm install -g http-server
npm install -g esformatter
npm install -g prettier
npm install -g eslint
# yeah, haters gonna hate
npm install -g replace
```

<h2>4 - Instalação de softwares</h2>

```
# Dev
brew cask install visual-studio-code
brew cask install virtualbox
brew cask install insomnia

# Navegadores
brew cask install firefox
brew cask install google-chrome

# Outros
brew cask install skype
brew cask install caffeine
brew cask install vlc
brew cask install slack 

# Docker
https://www.docker.com

```

<h2>Download VMs</h2>
https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/

<h2>PHPStorm</h2>
Instalar a IDE PHPStorm disponível no disco de arquivos

<h2>Configurando o VS Studio Code</h2>
Extensões que devem ser instaladas:

```
# ESLint - Dirk Baeumer

# Prettier Code formatter - Esben Petersen

# Laravel 5 Snippets - Winnie Lin

# PHP IntelliSense - Fliz Becker 

# Material Icon Theme - Philipp Kief

# Docker - Microsoft

# Dracula Official - dracula-theme.theme-dracula


Após incluir as extensões, deve ir em setting (JSON) e incluir as linhas:
{
  "workbench.iconTheme": "material-icon-theme",
  "prettier.singleQuote": true,
  "editor.formatOnSave": true,
  "prettier.eslintIntegration": true,
  "prettier.trailingComma": "all",
  "prettier.semi": false,
  "editor.fontFamily": "Fira Code, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "workbench.statusBar.feedback.visible": false,
  "editor.tabSize": 2,
  "editor.minimap.enabled": false,
  "workbench.colorTheme": "Dracula",
  "editor.lineHeight": 24,
  "editor.renderLineHighlight": "gutter",
  "terminal.integrated.fontSize": 14,
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "javascript.updateImportsOnFileMove.enabled": "never",
  "breadcrumbs.enabled": true,
  "editor.parameterHints.enabled": false
}

A fonte Fira Code deve ser baixada e instalada no MacOS. https://github.com/tonsky/FiraCode

```

<h2>Configurando Terminal</h2>

Baixar perfil de tema Dracula
```
git clone https://github.com/dracula/terminal-app.git
```

Instalar o tema de cores do terminal
```
https://ohmyz.sh/

sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

Instalar pelo homebrew:
```
brew install fish
```

Quando a instalação estiver concluída, adicione Fish ao /etc/shells, o que exigirá uma senha administrativa:
```
echo "/usr/local/bin/fish" | sudo tee -a /etc/shells
```

Para fazer Fish ser o terminal padrão:
```
chsh -s /usr/local/bin/fish
```

<h2>Alterar local de captura de tela</h2>
O comando abaixo altera o local que é feito a captura de tela

```
defaults write com.apple.screencapture location ~/Pictures
```




