# WhatsApp Flood Bot

Este é um bot para WhatsApp que envia mensagens com intervalos personalizados. Usando a bibliotecas.
Ele pode ser configurado para enviar mensagens em massa em grupos ou para indivíduos.
USANDO:
### 1. Clone este repositório.

### 2. Instale as dependências:
npm install

npm install whatsapp-web.js qrcode-terminal

npm install --save-dev @types/qrcode-terminal

### 3. Configure o WhatsApp Web:
Quando você rodar o bot pela primeira vez, ele gerará um código QR. Escaneie o QR com o seu WhatsApp para logar no bot.

Para rodar o bot (com compilação do TypeScript):
npm start

Caso tenha algum problema com TS gere o arquivo JS para melhor resultado.
npx tsc

### 4. Comandos disponíveis:
Abra um browser e usando o whatsweb rode os códigos.
!test: Verifica se o bot está funcionando, voce vai obter a resposta: The bot is ready!
!flood <quantidade> <intervalo_em_segundos> <mensagem>: Envia várias mensagens com intervalo.
EXEMPLO: !flood 5 2 Olá, isso é um teste.

Isso enviará "Olá, isso é um teste" 5 vezes, com um intervalo de 2 segundos entre cada envio.

Dica importante!
1) Não feche o terminal enquanto estiver rodando o script.
2) Envie os comandos nas conversas via browser e caso demore obter resposta de um ENTER no terminal onde está rodando o código, isso vai ajudar.
3) Não use para fins comerciais! Você pode ser bloqueado pelo Meta, perder seu número e até ser banido caso esteja vinculado a uma conta empresa.
4) Para sua segurança tenha um número (reserva ou não pessoal) para usar a ferramenta.
