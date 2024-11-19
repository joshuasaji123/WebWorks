const Courses = {
    courses: [
        {
            id: 'js-fundamentals',
            title: 'Modern JavaScript',
            description: 'Master modern JavaScript features and best practices',
            image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=400',
            level: 'beginner',
            duration: '8 weeks',
            category: 'frontend',
            modules: [
                {
                    title: 'JavaScript Basics',
                    lessons: [
                        {
                            title: 'Variables and Data Types',
                            resources: [
                                { title: 'MDN - JavaScript Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics' },
                                { title: 'JavaScript.info - Variables', url: 'https://javascript.info/variables' }
                            ]
                        },
                        {
                            title: 'Functions and Scope',
                            resources: [
                                { title: 'MDN - Functions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions' },
                                { title: 'JavaScript.info - Functions', url: 'https://javascript.info/function-basics' }
                            ]
                        }
                    ]
                },
                {
                    title: 'Advanced Concepts',
                    lessons: [
                        {
                            title: 'Promises and Async/Await',
                            resources: [
                                { title: 'MDN - Promises', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise' },
                                { title: 'JavaScript.info - Async/Await', url: 'https://javascript.info/async-await' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'react-masterclass',
            title: 'React Masterclass',
            description: 'Build modern web applications with React',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400',
            level: 'intermediate',
            duration: '10 weeks',
            category: 'frontend',
            modules: [
                {
                    title: 'React Fundamentals',
                    lessons: [
                        {
                            title: 'Components and Props',
                            resources: [
                                { title: 'React Docs - Components', url: 'https://react.dev/learn/your-first-component' },
                                { title: 'React Docs - Props', url: 'https://react.dev/learn/passing-props-to-a-component' }
                            ]
                        }
                    ]
                }
            ]
        }
    ],

    init() {
        this.loadCourses();
        this.setupEventListeners();
    },

    loadCourses() {
        const courseGrid = $('#courseGrid');
        courseGrid.empty();

        this.courses.forEach(course => {
            courseGrid.append(`
                <div class="col-md-4">
                    <div class="card course-card h-100">
                        <img src="${course.image}" class="card-img-top" alt="${course.title}">
                        <div class="card-body">
                            <h3 class="h5 mb-3">${course.title}</h3>
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <span class="badge bg-purple">${course.level}</span>
                                <small class="text-muted">${course.duration}</small>
                            </div>
                            <p class="text-muted">${course.description}</p>
                            <button class="btn btn-purple w-100" onclick="Courses.showCourseDetails('${course.id}')">
                                View Course
                            </button>
                        </div>
                    </div>
                </div>
            `);
        });
    },

    showCourseDetails(courseId) {
        const course = this.courses.find(c => c.id === courseId);
        if (!course) return;

        const modal = $('#courseModal');
        const modalBody = modal.find('.modal-body');

        modalBody.html(`
            <div class="p-4">
                <div class="row">
                    <div class="col-md-4">
                        <img src="${course.image}" class="img-fluid rounded mb-4" alt="${course.title}">
                        <div class="d-grid gap-2">
                            <button class="btn btn-purple">Enroll Now</button>
                            <a href="/course-preview.html?id=${course.id}" class="btn btn-outline-purple">Preview Course</a>
                        </div>
                        <hr>
                        <div class="mb-3">
                            <strong>Duration:</strong> ${course.duration}
                        </div>
                        <div class="mb-3">
                            <strong>Level:</strong> ${course.level}
                        </div>
                        <div>
                            <strong>Category:</strong> ${course.category}
                        </div>
                    </div>
                    <div class="col-md-8">
                        <h2 class="h3 mb-4">${course.title}</h2>
                        <p class="lead mb-4">${course.description}</p>
                        
                        <h3 class="h4 mb-3">Course Content</h3>
                        <div class="accordion" id="moduleAccordion">
                            ${course.modules.map((module, moduleIndex) => `
                                <div class="accordion-item">
                                    <h4 class="accordion-header">
                                        <button class="accordion-button ${moduleIndex !== 0 ? 'collapsed' : ''}" 
                                                type="button" 
                                                data-bs-toggle="collapse" 
                                                data-bs-target="#module${moduleIndex}">
                                            ${module.title}
                                        </button>
                                    </h4>
                                    <div id="module${moduleIndex}" 
                                         class="accordion-collapse collapse ${moduleIndex === 0 ? 'show' : ''}"
                                         data-bs-parent="#moduleAccordion">
                                        <div class="accordion-body">
                                            ${module.lessons.map(lesson => `
                                                <div class="mb-3">
                                                    <h5 class="h6 mb-2">${lesson.title}</h5>
                                                    <div class="list-group">
                                                        ${lesson.resources.map(resource => `
                                                            <a href="${resource.url}" 
                                                               target="_blank"
                                                               class="list-group-item list-group-item-action d-flex align-items-center">
                                                                <i class="bi bi-link-45deg me-2"></i>
                                                                ${resource.title}
                                                            </a>
                                                        `).join('')}
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `);

        modal.modal('show');
    },

    setupEventListeners() {
        $('#levelFilter, #categoryFilter').on('change', () => this.filterCourses());
        $('#searchInput').on('input', () => this.filterCourses());
    },

    filterCourses() {
        const level = $('#levelFilter').val();
        const category = $('#categoryFilter').val();
        const search = $('#searchInput').val().toLowerCase();

        const filtered = this.courses.filter(course => {
            const levelMatch = !level || course.level === level;
            const categoryMatch = !category || course.category === category;
            const searchMatch = !search || 
                course.title.toLowerCase().includes(search) || 
                course.description.toLowerCase().includes(search);

            return levelMatch && categoryMatch && searchMatch;
        });

        const courseGrid = $('#courseGrid');
        courseGrid.empty();

        if (filtered.length === 0) {
            courseGrid.html('<div class="col-12 text-center">No courses found matching your criteria.</div>');
            return;
        }

        filtered.forEach(course => {
            // Reuse the same course card template as in loadCourses
            this.renderCourseCard(course, courseGrid);
        });
    },

    renderCourseCard(course, container) {
        container.append(`
            <div class="col-md-4">
                <div class="card course-card h-100">
                    <img src="${course.image}" class="card-img-top" alt="${course.title}">
                    <div class="card-body">
                        <h3 class="h5 mb-3">${course.title}</h3>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="badge bg-purple">${course.level}</span>
                            <small class="text-muted">${course.duration}</small>
                        </div>
                        <p class="text-muted">${course.description}</p>
                        <button class="btn btn-purple w-100" onclick="Courses.showCourseDetails('${course.id}')">
                            View Course
                        </button>
                    </div>
                </div>
            </div>
        `);
    }
};

$(document).ready(() => {
    Courses.init();
});