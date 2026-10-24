from flask import Flask, request, jsonify

app = Flask(__name__)

events = [
    {"id": 1, "title": "Yoga in the Park"},
    {"id": 2, "title": "Lake 5K Run"}
]

@app.route("/", methods=["GET"])
def welcome():
    return jsonify({"message": "Welcome!"}), 200

@app.route("/events", methods=["GET/events"])
def get_events():
    return jsonify(events), 200

@app.route("/events", methods=["POST/events"])
def add_event():
    data = request.get_json()
    new_id = max((e["id"] for e in events),
default=0) + 1
   new_event = {"id": new_id, "title":
 data["title"]}
   products.append(new_event)
    return jsonify(new_event), 201

if __name__ == "__main__":
    app.run(debug=True)