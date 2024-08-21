from . import db
from datetime import datetime

class Mercadoria(db.Model):
    __tablename__ = 'mercadorias'
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    numero_registro = db.Column(db.String(50), nullable=False, unique=True)
    fabricante = db.Column(db.String(100), nullable=False)
    tipo = db.Column(db.String(50), nullable=False)
    descricao = db.Column(db.Text, nullable=True)
    
class Entrada(db.Model):
    __tablename__ = 'entradas'
    id = db.Column(db.Integer, primary_key=True)
    mercadoria_id = db.Column(db.Integer, db.ForeignKey('mercadorias.id'), nullable=False)
    quantidade = db.Column(db.Integer, nullable=False)
    data_hora = db.Column(db.DateTime, default=datetime.utcnow)
    local = db.Column(db.String(100), nullable=False)
    
class Saida(db.Model):
    __tablename__ = 'saidas'
    id = db.Column(db.Integer, primary_key=True)
    mercadoria_id = db.Column(db.Integer, db.ForeignKey('mercadorias.id'), nullable=False)
    quantidade = db.Column(db.Integer, nullable=False)
    data_hora = db.Column(db.DateTime, default=datetime.utcnow)
    local = db.Column(db.String(100), nullable=False)
