from flask import Blueprint, request, jsonify
from app.models import db, Mercadoria

mercadorias_bp = Blueprint('mercadorias', __name__)

@mercadorias_bp.route('/mercadorias', methods=['POST'])
def cadastrar_mercadoria():
    dados = request.json
    nova_mercadoria = Mercadoria(
        nome=dados['nome'],
        numero_registro=dados['numero_registro'],
        fabricante=dados['fabricante'],
        tipo=dados['tipo'],
        descricao=dados.get('descricao', '')
    )
    db.session.add(nova_mercadoria)
    db.session.commit()
    return jsonify({"message": "Mercadoria cadastrada com sucesso!"}), 201
    
