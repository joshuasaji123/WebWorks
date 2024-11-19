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
                            description: 'Learn about the different types of variables and data types in JavaScript, and how to use them effectively.',
                            resources: [
                                { title: 'MDN - JavaScript Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics' },
                                { title: 'JavaScript.info - Variables', url: 'https://javascript.info/variables' }
                            ]
                        },
                        {
                            title: 'Functions and Scope',
                            description: 'Understand how functions work in JavaScript, including scope and closures.',
                            resources: [
                                { title: 'MDN - Functions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions' },
                                { title: 'JavaScript.info - Functions', url: 'https://javascript.info/function-basics' }
                            ]
                        },
                        {
                            title: 'Control Flow',
                            description: 'Explore control flow statements like if-else, switch, and loops to control the execution of your code.',
                            resources: [
                                { title: 'MDN - Control Flow', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling' },
                                { title: 'JavaScript.info - Conditional Operators', url: 'https://javascript.info/ifelse' }
                            ]
                        }
                    ]
                },
                {
                    title: 'Advanced Concepts',
                    lessons: [
                        {
                            title: 'Promises and Async/Await',
                            description: 'Learn about asynchronous programming in JavaScript using Promises and the async/await syntax.',
                            resources: [
                                { title: 'MDN - Promises', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise' },
                                { title: 'JavaScript.info - Async/Await', url: 'https://javascript.info/async-await' }
                            ]
                        },
                        {
                            title: 'Closures',
                            description: 'Dive into closures and understand how they enable powerful patterns in JavaScript.',
                            resources: [
                                { title: 'MDN - Closures', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures' },
                                { title: 'JavaScript.info - Closures', url: 'https://javascript.info/closure' }
                            ]
                        },
                        {
                            title: 'Modules',
                            description: 'Learn how to organize your code using JavaScript modules.',
                            resources: [
                                { title: 'MDN - JavaScript Modules', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules' },
                                { title: 'JavaScript.info - Modules', url: 'https://javascript.info/modules-intro' }
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
                            description: 'Understand the building blocks of React applications: components and props.',
                            resources: [
                                { title: 'React Docs - Components', url: 'https://react.dev/learn/your-first-component' },
                                { title: 'React Docs - Props', url: 'https://react.dev/learn/passing-props-to-a-component' }
                            ]
                        },
                        {
                            title: 'State and Lifecycle',
                            description: 'Learn how to manage state and lifecycle methods in your React components.',
                            resources: [
                                { title: 'React Docs - State and Lifecycle', url: 'https://react.dev/learn/state-and-lifecycle' }
                            ]
                        },
                        {
                            title: 'Handling Events',
                            description: 'Explore how to handle user inputs and events in React.',
                            resources: [
                                { title: 'React Docs - Handling Events', url: 'https://react.dev/learn/handling-events' }
                            ]
                        }
                    ]
                },
                {
                    title: 'Advanced React',
                    lessons: [
                        {
                            title: 'React Hooks',
                            description: 'Master React Hooks to write cleaner and more efficient functional components.',
                            resources: [
                                { title: 'React Docs - Hooks', url: 'https://react.dev/learn/hooks-overview' }
                            ]
                        },
                        {
                            title: 'Context API',
                            description: 'Learn to manage global state in your applications using the Context API.',
                            resources: [
                                { title: 'React Docs - Context', url: 'https://react.dev/learn/context' }
                            ]
                        },
                        {
                            title: 'Performance Optimization',
                            description: 'Understand how to optimize the performance of your React applications.',
                            resources: [
                                { title: 'React Docs - Optimizing Performance', url: 'https://react.dev/learn/optimizing-performance' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'node-express',
            title: 'Node.js & Express',
            description: 'Create scalable backend applications',
            image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=400',
            level: 'intermediate',
            duration: '12 weeks',
            category: 'backend',
            modules: [
                {
                    title: 'Node.js Basics',
                    lessons: [
                        {
                            title: 'Introduction to Node.js',
                            description: 'Get started with Node.js and understand its core concepts and architecture.',
                            resources: [
                                { title: 'Node.js Official Docs', url: 'https://nodejs.org/en/docs/guides/getting-started-guide/' }
                            ]
                        },
                        {
                            title: 'Modules and Packages',
                            description: 'Learn how to use modules and manage dependencies with NPM.',
                            resources: [
                                { title: 'Node.js Official Docs - Modules', url: 'https://nodejs.org/api/modules.html' },
                                { title: 'NPM Documentation', url: 'https://docs.npmjs.com/' }
                            ]
                        }
                    ]
                },
                {
                    title: 'Building with Express',
                    lessons: [
                        {
                            title: 'Express Basics',
                            description: 'Understand the basics of building web applications with Express.',
                            resources: [
                                { title: 'Express Official Docs', url: 'https://expressjs.com/en/starter/hello-world.html' }
                            ]
                        },
                        {
                            title: 'Middleware',
                            description: 'Learn how to use middleware to handle requests and responses in Express.',
                            resources: [
                                { title: 'Express Official Docs - Middleware', url: 'https://expressjs.com/en/guide/using-middleware.html' }
                            ]
                        },
                        {
                            title: 'Routing',
                            description: 'Master the routing capabilities of Express to create robust web applications.',
                            resources: [
                                { title: 'Express Official Docs - Routing', url: 'https://expressjs.com/en/guide/routing.html' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'fullstack-web-dev',
            title: 'Fullstack Web Development',
            description: 'Master both frontend and backend technologies',
            image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=400',
            level: 'advanced',
            duration: '16 weeks',
            category: 'fullstack',
            modules: [
                {
                    title: 'Frontend Development',
                    lessons: [
                        {
                            title: 'HTML & CSS',
                            description: 'Build a solid foundation in HTML and CSS to create beautiful and responsive web pages.',
                            resources: [
                                { title: 'MDN - HTML Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics' },
                                { title: 'MDN - CSS Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics' }
                            ]
                        },
                        {
                            title: 'JavaScript Essentials',
                            description: 'Learn the essential JavaScript skills needed to create dynamic web applications.',
                            resources: [
                                { title: 'MDN - JavaScript Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics' }
                            ]
                        },
                        {
                            title: 'React',
                            description: 'Master React to build interactive and modern web applications.',
                            resources: [
                                { title: 'React Docs - Getting Started', url: 'https://react.dev/learn/getting-started' }
                            ]
                        }
                    ]
                },
                {
                    title: 'Backend Development',
                    lessons: [
                        {
                            title: 'Node.js & Express',
                            description: 'Learn to build scalable backend applications using Node.js and Express.',
                            resources: [
                                { title: 'Node.js Official Docs', url: 'https://nodejs.org/en/docs/guides/getting-started-guide/' },
                                { title: 'Express Official Docs', url: 'https://expressjs.com/en/starter/hello-world.html' }
                            ]
                        },
                        {
                            title: 'Databases (MongoDB)',
                            description: 'Understand how to use MongoDB to store and manage data for your applications.',
                            resources: [
                                { title: 'MongoDB Official Docs', url: 'https://docs.mongodb.com/manual/' }
                            ]
                        },
                        {
                            title: 'Authentication',
                            description: 'Learn how to implement authentication in your applications using Passport.js.',
                            resources: [
                                { title: 'Passport.js Documentation', url: 'http://www.passportjs.org/docs/' }
                            ]
                        }
                    ]
                },
                {
                    title: 'Deployment',
                    lessons: [
                        {
                            title: 'Deploying with Heroku',
                            description: 'Learn how to deploy your applications to Heroku for easy and scalable hosting.',
                            resources: [
                                { title: 'Heroku Documentation', url: 'https://devcenter.heroku.com/categories/deployment' }
                            ]
                        },
                        {
                            title: 'CI/CD Pipelines',
                            description: 'Understand how to set up continuous integration and deployment pipelines with GitHub Actions.',
                            resources: [
                                { title: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions' }
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
                                                    <p>${lesson.description}</p>
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
