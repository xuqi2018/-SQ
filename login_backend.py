#!/usr/bin/env python
# coding=utf-8

# @file calc_backend.py
# @brief calc_backend
# @author Anemone95,x565178035@126.com
# @version 1.0
# @date 2018-12-12 16:44
import flask
import requests
import json
from flask import Flask,request,jsonify,session

app=Flask(__name__)
with open('./secretkey.txt', 'r') as f:
    SECRET_KEY=f.readline().replace('\r','').replace('\n','')
app.secret_key='random_secret_key'

@app.route('/user/', methods=['GET','POST'])
def login():
    print(session)
    data=json.loads(request.get_data(as_text=True))
    code=data["body"]["code"]
    payload = {'appid': 'wx1c530cec0bfa60c7',
               'secret': SECRET_KEY, # 4da***57
               'js_code': code,
               'grant_type': 'authorization_code',
              }
    r = requests.get("https://api.weixin.qq.com/sns/jscode2session", params=payload)
    # r.text={"session_key":"xWm0r4af3WN79vz00d0Ipg==","openid":"oxGBW4-Q6UXupqZJbL8HTbgPEYmY"}
    print(r.text)
    session["openid"]=json.loads(r.text)["openid"]
    return jsonify(dict(status=200)), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
