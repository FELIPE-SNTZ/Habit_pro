### **BACKEND PROJETO HABITPRO**
backend desenvolvido para implementação de projeto mobile com consumo de api.

### **Estrutura do Projeto**

```plaintext
HabitPro/
├── backend/              # Projeto Django (API)
│   ├── core/             # Diretório principal do projeto
│   ├── habits/           # App Django para gerenciamento de hábitos
│   ├── manage.py         # Gerenciador do Django
│   ├── requirements.txt  # Dependências do Python
│   ├── db.sqlite3        # Banco de dados local (ou PostgreSQL)
│   └── README.md         # Documentação do back-end
├── mobile/               # Projeto React Native (Expo)
│   ├── src/
│   ├── App.js
│   └── package.json
└── README.md             # Documentação geral do projeto
```

---

### **Documentação do Back-end (README.md)**

```markdown
# HabitPro - Back-end

O HabitPro é um sistema de gerenciamento de hábitos e rotinas que utiliza Django como framework back-end. Ele fornece uma API REST para gerenciamento de usuários, hábitos, check-ins e notificações.

## Tecnologias Utilizadas

- **Python 3.10+**
- **Django 4.2+**
- **Django REST Framework**
- **PostgreSQL** (ou SQLite para desenvolvimento)
- **Docker** (opcional)

---

## Estrutura do Projeto

```plaintext
backend/
├── core/               # Configurações principais do projeto Django
├── habits/             # App responsável pela lógica de negócios de hábitos
├── manage.py           # Gerenciador do Django
├── requirements.txt    # Dependências do projeto
└── README.md           # Documentação do projeto
```

---

## Configuração do Ambiente de Desenvolvimento

### 1. Clone o Repositório

```bash
git clone https://github.com/wesscosta/habitpro.git
cd habitpro/backend
```

### 2. Crie um Ambiente Virtual

```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

### 3. Instale as Dependências

```bash
pip install -r requirements.txt
```

### 4. Configure o Banco de Dados

No arquivo `backend/core/settings.py`, configure o banco de dados:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'habitpro_db',
        'USER': 'postgres',
        'PASSWORD': 'sua_senha',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

> Para desenvolvimento rápido, você pode usar SQLite sem necessidade de configuração adicional.

### 5. Realize as Migrações

```bash
python manage.py makemigrations
python manage.py migrate
```

### 6. Execute o Servidor

```bash
python manage.py runserver
```

A API estará disponível em [http://127.0.0.1:8000](http://127.0.0.1:8000).

---

## Endpoints Disponíveis

| Método | Endpoint             | Descrição                         |
|--------|-----------------------|-----------------------------------|
| POST   | `/api/auth/login/`    | Autenticação do usuário           |
| POST   | `/api/auth/register/` | Registro de novos usuários        |
| GET    | `/api/habits/`        | Lista todos os hábitos do usuário |
| POST   | `/api/habits/`        | Cria um novo hábito               |
| PUT    | `/api/habits/<id>/`   | Atualiza um hábito existente      |
| DELETE | `/api/habits/<id>/`   | Remove um hábito                  |
| GET    | `/api/checkins/`      | Lista check-ins do usuário        |
| POST   | `/api/checkins/`      | Registra um novo check-in         |

---

## Estrutura dos Modelos

### Habit

| Campo       | Tipo       | Descrição                            |
|-------------|------------|--------------------------------------|
| `title`     | `string`   | Nome do hábito                      |
| `description` | `text`    | Descrição opcional                  |
| `start_time` | `time`     | Horário de início                   |
| `end_time`   | `time`     | Horário de término                  |
| `location`   | `string`   | Localização (opcional)              |
| `user`       | `foreign`  | Relacionado ao usuário autenticado  |

### CheckIn

| Campo          | Tipo       | Descrição                          |
|----------------|------------|------------------------------------|
| `habit`        | `foreign`  | Relacionado ao hábito             |
| `check_in_time`| `datetime` | Data e hora do check-in           |
| `location`     | `string`   | Localização no momento do check-in|
| `status`       | `boolean`  | Concluído ou não                  |

---

## Testes

### 1. Rodar os Testes Automatizados

```bash
python manage.py test
```

---

## Melhorias Futuras

1. **Notificações Avançadas**: Envio de notificações baseadas em geofencing.
2. **Relatórios**: Painéis para análise de progresso em hábitos.
3. **Integração com dispositivos IoT**: Conexão com wearables para coleta de dados.
4. **Modo Offline**: Sincronização de dados ao voltar à conexão.
5. **Gamificação Avançada**: Desafios e conquistas compartilháveis em redes sociais.

---

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
```

---
