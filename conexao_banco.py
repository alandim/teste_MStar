from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from app.routes.mercadorias import mercadorias_bp
from app.routes.entradas import entradas_bp
from app.routes.saidas import saidas_bp

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

app.register_blueprint(mercadorias_bp)
app.register_blueprint(entradas_bp)
app.register_blueprint(saidas_bp)

if __name__ == '__main__':
    app.run(debug=True)
