from flask import Blueprint, request, jsonify
from app.models import db, Saida

saidas_bp = Blueprint('saidas', __name__)

@saidas_bp.route('/saidas', methods=['POST'])
def cadastrar_saida():
    dados = request.json
    nova_saida = Saida(
        mercadoria_id=dados['mercadoria_id'],
        quantidade=dados['quantidade'],
        local=dados['local']
    )
    db.session.add(nova_saida)
    db.session.commit()
    return jsonify({"message": "Saída registrada com sucesso!"}), 201
