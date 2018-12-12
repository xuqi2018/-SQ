#!/usr/bin/env python
# coding=utf-8

# @file calc_backend.py
# @brief calc_backend
# @author Anemone95,x565178035@126.com
# @version 1.0
# @date 2018-12-12 16:44
import flask
from flask import Flask,request,jsonify

app=Flask(__name__)


@app.route('/calculate', methods=['GET'])
def calc():
    formula=request.args.get('formula')
    try:
        result = eval(formula, {})
    except:
        result = 'Error formula'
    return jsonify(result), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)

