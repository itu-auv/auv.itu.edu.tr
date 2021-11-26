var tasks = {
	"data":[
        // Ekipler
        {"id":1, "text":"Mekanik", "start_date":"04-10-2019", "duration":"120", "progress": 0.8, "open": true},
        {"id":2, "text":"Elektronik", "start_date":"04-10-2019", "duration":"120", "progress": 0.6, "open": true},
        {"id":3, "text":"Yazılım", "start_date":"04-10-2019", "duration":"120", "progress": 0.3, "open": true},
        {"id":4, "text":"Organizasyon", "start_date":"04-10-2019", "duration":"120", "progress": 0.5, "open": true},

        // Mekanik (100-199)
		{"id":100, "text":"Aracın Yeniden Modellenmesi", "start_date":"04-10-2019", "duration":"10", "parent":"1", "progress":0.25, "open": true},
		{"id":101, "text":"Pileksi Lazer Kesim", "start_date":"04-10-2019", "duration":"14", "parent":"1", "progress": 0.0, "open": true},
		{"id":102, "text":"Dropper Mekanizması", "start_date":"14-10-2019", "duration":"12", "parent":"1", "progress": 0.45, "open": true},
		{"id":103, "text":"DVL Montaj Parçası Üretimi", "start_date":"11-10-2019", "duration":"10", "parent":"1", "progress": 0.0, "open": true},
		{"id":104, "text":"Torpido Tüpü Tasarımı", "start_date":"04-10-2019", "duration":"7", "parent":"1", "progress": 0.25, "open": true},
		{"id":105, "text":"Model Havuzu İçin Montaj Parçası", "start_date":"04-10-2019", "duration":"7", "parent":"1", "progress": 0.0, "open": true},
		{"id":106, "text":"Torpido Montaj Parçası", "start_date":"18-10-2019", "duration":"7", "parent":"1", "progress": 0.0, "open": true},
		{"id":107, "text":"Kablo Kısaltmaları", "start_date":"08-10-2019", "duration":"3", "parent":"1", "progress": 0.0, "open": true},
		{"id":108, "text":"Civata Yenileme", "start_date":"06-10-2019", "duration":"2", "parent":"1", "progress": 0.0, "open": true},
		
        // Elektronik (200-299)
		{"id":200, "text":"Task 1", "start_date":"04-10-2019", "duration":"3", "parent":"2", "progress": 0.9, "open": true},
		{"id":201, "text":"Task 2", "start_date":"07-10-2019", "duration":"2", "parent":"2", "progress": 0.5, "open": true},
		{"id":202, "text":"Task 3", "start_date":"09-10-2019", "duration":"5", "parent":"2", "progress": 0.8, "open": true},
		{"id":203, "text":"Task 4", "start_date":"14-10-2019", "duration":"12", "parent":"2", "progress": 0.2, "open": true},
		{"id":204, "text":"Task 5", "start_date":"24-10-2019", "duration":"3", "parent":"2", "progress": 0, "open": true},

        // Yazilim (300-399)
        {"id":300, "text":"Task 1", "start_date":"11-10-2019", "duration":"4", "parent":"3", "progress": 0.3, "open": true},
        {"id":301, "text":"Task 2", "start_date":"12-10-2019", "duration":"6", "parent":"3", "progress": 0.1, "open": true},
        {"id":302, "text":"Task 3", "start_date":"27-10-2019", "duration":"2", "parent":"3", "progress": 0.5, "open": true},
        {"id":303, "text":"Task 4", "start_date":"10-10-2019", "duration":"3", "parent":"3", "progress": 0.15, "open": true},
        {"id":304, "text":"Task 5", "start_date":"4-10-2019", "duration":"15", "parent":"3", "progress": 0.9, "open": true},
        
        // Organizasyon (400-499)

        {"id":400, "text":"Task 1", "start_date":"11-10-2019", "duration":"14", "parent":"4", "progress": 0.2, "open": true},
        {"id":401, "text":"Task 2", "start_date":"22-10-2019", "duration":"5", "parent":"4", "progress": 0.0, "open": true},
        {"id":402, "text":"Task 3", "start_date":"05-10-2019", "duration":"20", "parent":"4", "progress": 0.9, "open": true},
        {"id":403, "text":"Task 4", "start_date":"08-10-2019", "duration":"13", "parent":"4", "progress": 0.75, "open": true},
        {"id":404, "text":"Task 5", "start_date":"04-10-2019", "duration":"2", "parent":"4", "progress": 0.25, "open": true},
        

	],
	"links":[
        // Mekanik (100-199)
        {"id":"100","source":"105","target":"107","type":"2"},
        {"id":"101","source":"107","target":"108","type":"1"},
        // Elektronik (200-299)
		{"id":"200","source":"200","target":"201","type":"0"},
        {"id":"201","source":"201","target":"301","type":"0"},
        // Yazilim (300-399)
        // Organizasyon (400-499)
	]
};