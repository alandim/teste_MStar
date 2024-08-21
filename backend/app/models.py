from . import db
from datetime import datetime

class Mercadoria(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(128), nullable=False)
    numero_registro = db.Column(db.String(64), nullable=False, unique=True)
    fabricante = db.Column(db.String(128), nullable=False)
    tipo = db.Column(db.String(64), nullable=False)
    descricao = db.Column(db.String(256))

class Entrada(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mercadoria_id = db.Column(db.Integer, db.ForeignKey('mercadoria.id'), nullable=False)
    quantidade = db.Column(db.Integer, nullable=False)
    data_hora = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    local = db.Column(db.String(128), nullable=False)

    mercadoria = db.relationship('Mercadoria', backref=db.backref('entradas', lazy=True))

class Saida(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mercadoria_id = db.Column(db.Integer, db.ForeignKey('mercadoria.id'), nullable=False)
    quantidade = db.Column(db.Integer, nullable=False)
    data_hora = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    local = db.Column(db.String(128), nullable=False)

    mercadoria = db.relationship('Mercadoria', backref=db.backref('saidas', lazy=True))
