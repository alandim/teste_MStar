CREATE TABLE mercadorias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    numero_registro TEXT NOT NULL UNIQUE,
    fabricante TEXT NOT NULL,
    tipo TEXT NOT NULL,
    descricao TEXT
);

CREATE TABLE entradas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    mercadoria_id INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    local TEXT NOT NULL,
    FOREIGN KEY (mercadoria_id) REFERENCES mercadorias(id)
);

CREATE TABLE saidas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    mercadoria_id INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    local TEXT NOT NULL,
    FOREIGN KEY (mercadoria_id) REFERENCES mercadorias(id)
);
