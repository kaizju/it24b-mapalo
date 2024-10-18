class tropnames {
    constructor(dataUrl) {
        this.dataUrl = dataUrl; 
        this.utang = [];    
        this.way();           
    }

    async way() {
        await this.wayData(); 
        this.listutang('tropa');
        this.bindSearchEvent('studentSearchBar', 'studentSearchList'); 
    }

    async wayData() {
        try {
            const response = await fetch(this.dataUrl);
            this.utang = await response.json(); 
        } catch (error) {
            console.error('Error fetching data:', error);
            document.getElementById('tropa').innerHTML = 'Error loading student data.';
        }
    }

    renderStudentList(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = this.students.map(student => 
            `<button class="btn btn-primary" style="margin-top:15px; width:25rem">
                ${student.student_name} | ${student.student_program}
            </button><br>`
        ).join('');
    }

    bindSearchEvent(searchBarId, searchListId) {
        const searchBar = document.getElementById(searchBarId);
        const searchListContainer = document.getElementById(searchListId);

        searchBar.addEventListener('input', () => {
            const query = searchBar.value.toLowerCase();
            const filteredStudents = this.students.filter(student => 
                `${student.student_name} ${student.student_program}`.toLowerCase().includes(query)
            );
            this.renderStudentList(searchListId, filteredStudents);
        });
    }
}
const studentList = new StudentList('appletinfo.json');