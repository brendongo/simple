from flask import Flask, jsonify
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

@app.route('/time')
def get_time():
    now = datetime.now()
    return jsonify({'time': now.strftime("%Y-%m-%d %H:%M:%S")})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
