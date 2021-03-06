define({ "api": [
  {
    "type": "delete",
    "url": "/cpf/{cpf}",
    "title": "",
    "group": "CPF",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "cpf",
            "description": "<p>CPF para deletar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>mensagem de retorno</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"CPF removido com sucesso da blacklist\"\n}",
          "type": "json"
        },
        {
          "title": "Erro",
          "content": "HTTP/1.1 404 Not found\n{\n  \"msg\": \"CPF não se encontra na blacklist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apiRoutes.js",
    "groupTitle": "CPF",
    "name": "DeleteCpfCpf"
  },
  {
    "type": "get",
    "url": "/cpf",
    "title": "",
    "group": "CPF",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "cnpjs",
            "description": "<p>cnpjs que constam na blacklist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"cpfs\": [\n        {\n            \"createdDate\": \"11/08/2019\",\n            \"cpf\": \"103.832.220-01\"\n        },\n        {\n            \"createdDate\": \"11/08/2019\",\n            \"cpf\": \"261.142.240-00\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apiRoutes.js",
    "groupTitle": "CPF",
    "name": "GetCpf"
  },
  {
    "type": "get",
    "url": "/cpf/{cpf}",
    "title": "",
    "group": "CPF",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>mensagem de retorno</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"CPF BLOCKED\"\n}",
          "type": "json"
        },
        {
          "title": "Erro",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n  \"msg\": \"CPF FREE\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apiRoutes.js",
    "groupTitle": "CPF",
    "name": "GetCpfCpf"
  },
  {
    "type": "post",
    "url": "/cpf/",
    "title": "",
    "group": "CPF",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "cpf",
            "description": "<p>cpf para adicionar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>mensagem de retorno</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 201 Created\n{\n  \"msg\": \"CPF Adicionado com sucesso na blacklist\"\n}",
          "type": "json"
        },
        {
          "title": "Erro",
          "content": "HTTP/1.1 500 Internal server error\n{\n  \"msg\": \"CPF já está na blacklist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apiRoutes.js",
    "groupTitle": "CPF",
    "name": "PostCpf"
  },
  {
    "type": "get",
    "url": "/status",
    "title": "",
    "group": "STATUS",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uptime",
            "description": "<p>tempo de execução do servidor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "memoryUsed:total",
            "description": "<p>memória total alocada</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "memoryUsed:used",
            "description": "<p>memória utilizada</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "queriesExecuted",
            "description": "<p>número de consultas executadas</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cpfsOnBlacklist",
            "description": "<p>número de cpfs na blacklist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"uptime\": \"0 horas 0 minutos e 31 segundos\",\n    \"memoryUsed\": {\n        \"total\": \"17.75 MB\",\n        \"used\": \"12.85 MB\"\n    },\n    \"queriesExecuted\": 0,\n    \"cpfsOnBlacklist\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apiRoutes.js",
    "groupTitle": "STATUS",
    "name": "GetStatus"
  }
] });
