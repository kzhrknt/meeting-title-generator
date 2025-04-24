document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const resultElement = document.getElementById('result');
    
    generateBtn.addEventListener('click', function() {
        // Get input values
        const meetingType = document.getElementById('meeting-type').value;
        const projectName = document.getElementById('project-name').value;
        const agenda = document.getElementById('agenda').value;
        const location = document.getElementById('location').value;
        
        // Validate inputs
        if (!projectName || !agenda) {
            alert('すべての項目を入力してください');
            return;
        }
        
        // Send request to server
        fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                meeting_type: meetingType,
                project_name: projectName,
                agenda: agenda,
                location: location
            })
        })
        .then(response => response.json())
        .then(data => {
            resultElement.textContent = data.title;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('エラーが発生しました。もう一度お試しください。');
        });
    });
    
    copyBtn.addEventListener('click', function() {
        const textToCopy = resultElement.textContent;
        
        if (textToCopy === 'ここに生成されたタイトルが表示されます') {
            alert('コピーするタイトルがありません');
            return;
        }
        
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('クリップボードにコピーしました');
            })
            .catch(err => {
                console.error('コピーに失敗しました:', err);
                alert('コピーに失敗しました');
            });
    });
});