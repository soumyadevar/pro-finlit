from flask import Flask, render_template, request, jsonify
import openai

app = Flask(__name__)
openai.api_key = "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"  # *REPLACE WITH YOUR KEY*

@app.route('/')
def index():
    return render_template("chat.html")

@app.route('/api', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

    if not user_message:
        return jsonify({"response": "Message cannot be empty."})

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": user_message}
            ]
        )
        actual_response = response.choices[0].message.content
        return jsonify({"response": actual_response})
    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({"response": "An error occurred."}), 500

if __name__ == '_main_':
    app.run(debug=True)