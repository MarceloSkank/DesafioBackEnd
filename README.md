# Desafio Dev. Backend

* Construido com:
    * NodeJS
    * Mongoose
    * Jest
    * Express
    * Body-Parser

### **Demostração**: https://desafiosbackend.herokuapp.com/tools

### Rotas

### ``` GET /Tools ```
    Lista todos os itens inseridos no banco de dados

Responta 200 (application/json):

``` Json [
    {
    "tags": [
      "organizing",
      "webapps",
      "domain",
      "developer",
      "https",
      "proxy"
    ],
    "_id": "5e52165e5bf05c578d1c4ddc",
    "title": "Hotel",
    "link": "https://github.com/typicode/hotel",
    "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
    "__v": 0
  }

```
__

### ``` POST /Tools ```
    Insere um ou mais itens no banco de dados 

* Input de exemplo:
    + Header
        + Aceito: application/json
```Json
{
    "title": "Hotel",
    "link": "https://github.com/typicode/hotel",
    "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
    "tags":["organizing", "webapps", "domain", "developer", "https", "proxy"]
}
```
+ Resposta 201 (application/json):
```Json
   {
    "tags": [
      "organizing",
      "webapps",
      "domain",
      "developer",
      "https",
      "proxy"
    ],
    "_id": "5e52165e5bf05c578d1c4ddc",
    "title": "Hotel",
    "link": "https://github.com/typicode/hotel",
    "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
    "__v": 0
  }
```
### ``` DELETE /tools/:id ```
    Deleta o item do banco de dados a partir do id passado na requisição
+ Resposta 204 (No Content)
