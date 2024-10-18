class tropnames {
    constructor(dataUrl) {
        this.dataUrl = dataUrl; 
        this.utang = [];    
        this.way();           
    }

    async way() {
        await this.wayData(); 
        this.listutang('tropa');
        this.bindSearchEvent('utangSearchBar', 'tropaSearchList'); 
    }

    async wayData() {
        try {
            const response = await fetch(this.dataUrl);
            this.utang = await response.json(); 
        } catch (error) {
            console.error('Error fetching data:', error);
            document.getElementById('tropa').innerHTML = 'Error loading data.';
        }
    }

    renderUtangList(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = this.utang.map(utang => 
            `<button class="btn btn-primary" style="margin-top:15px; width:25rem">
                ${utang.tropa_name} | ${utang.dahilan}
            </button><br>`
        ).join('');
    }

    bindSearchEvent(searchBarId, searchListId) {
        const searchBar = document.getElementById(searchBarId);
        const searchListContainer = document.getElementById(searchListId);

        searchBar.addEventListener('input', () => {
            const query = searchBar.value.toLowerCase();
            const filteredStudents = this.utang.filter(utang => 
                `${utang.tropa_name} ${utang.dahilan}`.toLowerCase().includes(query)
            );
            this.renderStudentList(searchListId, filteredStudents);
        });
    }
}
const studentList = new StudentList('appletinfo.json');