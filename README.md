# Chip-8 Emulator

## Descrição

Este projeto é um emulador do **Chip-8**, um sistema de máquina virtual desenvolvido na década de 1970 para computadores de 8 bits. O emulador é implementado em **JavaScript** e permite executar jogos e programas escritos para o Chip-8 em navegadores modernos. O objetivo é fornecer uma experiência fiel ao hardware original, com suporte para entrada de teclado, gráficos monocromáticos e som básico.

## Funcionalidades

- **Emulação Completa**: Suporta todas as instruções do Chip-8, incluindo operações aritméticas, lógicas, controle de fluxo e manipulação de sprites.
- **Renderização de Gráficos**: Exibe gráficos em uma tela de 64x32 pixels, com suporte para sprites e colisão.
- **Entrada**: Mapeia o teclado do usuário para o keypad hexadecimal do Chip-8.
- **Som**: Implementa o buzzer do Chip-8 para efeitos sonoros simples.
- **Carregamento de ROMs**: Permite carregar ROMs do Chip-8 para executar jogos e programas.
- **Interface Web**: Interface simples e responsiva para interagir com o emulador diretamente no navegador.

## Tecnologias Utilizadas

- **JavaScript**: Lógica principal do emulador.
- **HTML5 Canvas**: Renderização dos gráficos do Chip-8.
- **Web Audio API**: Reprodução de som para o buzzer.
- **ES6+**: Recursos modernos de JavaScript para uma codebase limpa e modular.

## Como Usar

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/gblnovaes/chip8-emulator-js.git
   ```
2. **Abra o Projeto**:
   - Navegue até o diretório do projeto.
   - Abra o arquivo `index.html` em um navegador web.
3. **Carregue uma ROM**:
   - Use o campo de upload na interface para selecionar um arquivo `.ch8` (ROM do Chip-8).
4. **Controles**:
   - O keypad do Chip-8 (0-F) é mapeado para teclas do teclado (detalhes no arquivo `controls.txt` ou na interface).
5. **Jogue**:
   - Após carregar a ROM, o emulador iniciará automaticamente. Use as teclas mapeadas para interagir.

## Estrutura do Projeto

- `public/index.html`: Página principal que carrega o emulador.
- `src/js/Chip8.js`: Lógica central do emulador (CPU, memória, registros, etc.).
- `src/js/Display.js`: Gerenciamento da renderização no Canvas.
- `src/js/Input.js`: Mapeamento e manipulação de entrada do teclado.
- `src/js/Audio.js`: Controle do som usando Web Audio API.
- `roms/`: Diretório para armazenar ROMs de teste (não incluídas no repositório).

## Requisitos

- Navegador moderno (Chrome, Firefox, Edge, etc.).
- ROMs do Chip-8 (disponíveis em repositórios públicos ou homebrew).

## Exemplos de ROMs

- Jogos clássicos como _Pong_, _Tetris_ e _Space Invaders_ estão disponíveis em comunidades como [Chip-8 Archive](https://chip8.github.io/).
- Coloque as ROMs no diretório `roms/` ou use o upload na interface.

## Como Contribuir

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m "Adiciona minha feature"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Agradecimentos

- Inspirado pela documentação original do Chip-8 e pela comunidade de emulação.
- Agradecimentos a todos os desenvolvedores de ROMs homebrew que mantêm o Chip-8 vivo.
