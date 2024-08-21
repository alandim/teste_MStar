from flask import Blueprint, request, jsonify
from .models import Mercadoria, Entrada, Saida, db
from sqlalchemy import func

main = Blueprint('main', __name__)

@main.route('/mercadorias', methods=['POST'])
def add_mercadoria():
    data = request.json
    mercadoria = Mercadoria(
        nome=data['nome'],
        numero_registro=data['numero_registro'],
        fabricante=data['fabricante'],
        tipo=data['tipo'],
        descricao=data.get('descricao')
    )
    db.session.add(mercadoria)
    db.session.commit()
    return jsonify({'message': 'Mercadoria adicionada com sucesso!'}), 201

@main.route('/entradas', methods=['POST'])
def add_entrada():
    data = request.json
    entrada = Entrada(
        mercadoria_id=data['mercadoria_id'],
        quantidade=data['quantidade'],
        data_hora=data['data_hora'],
        local=data['local']
    )
    db.session.add(entrada)
    db.session.commit()
    return jsonify({'message': 'Entrada adicionada com sucesso!'}), 201

@main.route('/saidas', methods=['POST'])
def add_saida():
    data = request.json
    saida = Saida(
        mercadoria_id=data['mercadoria_id'],
        quantidade=data['quantidade'],
        data_hora=data['data_hora'],
        local=data['local']
    )
    db.session.add(saida)
    db.session.commit()
    return jsonify({'message': 'Saída adicionada com sucesso!'}), 201

@main.route('/relatorio-mensal', methods=['GET'])
def relatorio_mensal():
    # Implementar a lógica de gerar o PDF
    return jsonify({'message': 'Relatório gerado com sucesso!'}), 200
