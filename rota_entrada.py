from flask import Blueprint, request, jsonify
from app.models import db, Entrada

entradas_bp = Blueprint('entradas', __name__)

@entradas_bp.route('/entradas', methods=['POST'])
def cadastrar_entrada():
    dados = request.json
    nova_entrada = Entrada(
        mercadoria_id=dados['mercadoria_id'],
        quantidade=dados['quantidade'],
        local=dados['local']
    )
    db.session.add(nova_entrada)
    db.session.commit()
    return jsonify({"message": "Entrada registrada com sucesso!"}), 201
