# import json
# import logging
# import os
# from functools import wraps
# from flask import Flask, render_template, request, redirect, jsonify, send_from_directory, flash, url_for

# app = Flask(__name__, static_folder='static', template_folder="templates")


# @app.route('/')
# def home_page():
#     logging.info("This is the blank path::%s",request.path)
#     logging.info("This is the blank form::%s",request.form)
#     messages = {}
#     return render_template('index.html', messages = messages)

# # @app.route('/static/<path:path>', methods=['GET'])
# # @app.route('/<path:path>', methods=['GET', 'POST'])
# @app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
# def send_js(path):
#     messages = {}
#     return render_template('index.html', messages = messages)

# @app.route('/<number>/static/<path:path>', methods=['GET'])
# def send_company_static_js(path, number):
    
#     return send_from_directory(app.static_folder, path)

# if __name__ == '__main__':
#     # app.config['SESSION_TYPE'] = 'filesystem'
#     app.run(port=5051, host='localhost', debug=True, use_debugger=True, use_reloader=True)

import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='arxena-site-react/build')

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)
