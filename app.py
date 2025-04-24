from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate_title():
    data = request.json
    
    meeting_type = data.get('meeting_type')
    project_name = data.get('project_name')
    agenda = data.get('agenda')
    location = data.get('location')
    
    # Generate the title with the new format
    title = f"[{location}]{meeting_type}.{project_name}_{agenda}"
    
    return jsonify({'title': title})

if __name__ == '__main__':
    app.run(debug=True)