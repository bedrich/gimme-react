from flask import Flask, render_template
from sassutils.wsgi import SassMiddleware
app = Flask(__name__, static_url_path="", static_folder="src")
app.wsgi_app = SassMiddleware(app.wsgi_app, {
    'src': ('scss', 'css', '/css')
})

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
