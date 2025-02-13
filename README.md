# API - Controle de Pets em um Hotel para Animais

## ✨ Sobre a API
Esta API foi desenvolvida para gerenciar o controle de hospedagem de animais em um hotel para pets. Permite cadastrar, listar, atualizar e deletar registros de animais, bem como atualizar o status de hospedagem (“check-in”, “em estadia”, “check-out”).

---

## 🚀 Como executar o projeto
### 🔧 Configuração inicial
1. Certifique-se de ter o **Node.js** instalado na sua máquina.
   - [Baixe e instale o Node.js](https://nodejs.org/)

2. Clone este repositório:
```bash
$ git clone <URL_DO_REPOSITORIO>
$ cd <PASTA_DO_PROJETO>
```

3. Instale as dependências do projeto:
```bash
$ npm install
```

4. Crie um arquivo `.env` na raiz do projeto com a seguinte variável:
```env
PORTA=SUA_PORTA
```

5. Inicie o servidor:
```bash
$ node index.js
```

6. O servidor estará rodando em:
```
http://localhost:PORTA
```

---

## 📊 Funcionalidades da API

### ⬆ Listar todos os pets
**Rota:** `GET /`

**Resposta de sucesso:**
```json
{
  "msg": "Não há pets a serem exibidos"
}
```
Ou:
```json
[
  {
    "id": 1,
    "nome": "Fido",
    "especie": "Cachorro",
    "raca": "Golden Retriever",
    "status": "check-in",
    "nomeDono": "Carlos Silva"
  }
]
```

---

### ➕ Cadastrar um pet
**Rota:** `POST /`

**Corpo da requisição:**
```json
{
  "id": 1,
  "nome": "Fido",
  "especie": "Cachorro",
  "raca": "Golden Retriever",
  "status": "check-in",
  "nomeDono": "Carlos Silva"
}
```

**Resposta de sucesso:**
```json
{
  "msg": "Pet cadastrado com sucesso"
}
```

---

### ✍ Atualizar um pet
**Rota:** `PUT /:id`

**Exemplo de corpo da requisição:**
```json
{
  "novoNome": "Rex",
  "novaEspecie": "Cachorro",
  "novaRaca": "Labrador",
  "novoStatus": "em estadia",
  "novoNomeDono": "Ana Souza"
}
```

**Resposta de sucesso:**
```json
{
  "msg": "Pet atualizado com sucesso"
}
```

---

### 🔄 Atualizar o status de um pet
**Rota:** `PUT /pets/:id`

**Exemplo de corpo da requisição:**
```json
{
  "status": "check-out"
}
```

**Resposta de sucesso:**
```json
{
  "msg": "Status atualizado com sucesso"
}
```

---

### ❌ Remover um pet
**Rota:** `DELETE /:id`

**Resposta de sucesso:**
```json
{
  "msg": "Pet removido com sucesso"
}
```

---

## 🔢 Testando a API
### 🛠 Ferramentas recomendadas


1. **Extensão REST Client no VSCode**:
   - Instale a extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).
   - Crie um arquivo `.http` para testar as requisições:

```http
### Listar pets
GET http://localhost:3000/

### Cadastrar pet
POST http://localhost:3000/
Content-Type: application/json

{
  "id": 2,
  "nome": "Mia",
  "especie": "Gato",
  "raca": "Siamês",
  "status": "check-in",
  "nomeDono": "João Lima"
}

### Atualizar status
PUT http://localhost:3000/pets/2
Content-Type: application/json

{
  "status": "em estadia"
}

### Deletar pet
DELETE http://localhost:3000/2
```

---

## 🎩 Contribuição
Sinta-se à vontade para contribuir com melhorias no código ou documentação.

1. Faça um fork deste repositório.
2. Crie uma branch com sua funcionalidade:
```bash
git checkout -b minha-feature
```
3. Faça o commit das alterações:
```bash
git commit -m 'Minha nova funcionalidade'
```
4. Envie para a branch principal:
```bash
git push origin minha-feature
```
5. Abra um Pull Request.

---

## 🛠️ Tecnologias utilizadas
- Node.js
- Express.js

---

## 🏡 Autor
**João Pedro**
---

