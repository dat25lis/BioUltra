from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', title="Главная")

@app.route('/about')
def about():
    return render_template('about.html', title="Обо мне")

@app.route('/contact')
def contact():
    return render_template('contact.html', title="Контакты")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
