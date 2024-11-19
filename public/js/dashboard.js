const Dashboard = {
    init() {
        if (!Auth.isAuthenticated) {
            window.location.href = '/login.html';
            return;
        }

        this.loadUserData();
        this.loadCourseProgress();
        this.loadRecentActivity();
    },

    loadUserData() {
        const user = Auth.user;
        $('#userName').text(user.name);
        $('#userNameDisplay').text(user.name);
    },

    loadCourseProgress() {
        const courses = [
            {
                title: 'Modern JavaScript',
                progress: 45,
                nextLesson: 'Async/Await',
                image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=400'
            },
            {
                title: 'React Fundamentals',
                progress: 70,
                nextLesson: 'State Management',
                image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400'
            }
        ];

        const container = $('#courseProgress');
        container.empty();

        courses.forEach(course => {
            container.append(`
                <div class="mb-4 pb-4 border-bottom">
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <img src="${course.image}" 
                                 alt="${course.title}" 
                                 class="img-fluid rounded">
                        </div>
                        <div class="col-md-7">
                            <h3 class="h5 mb-1">${course.title}</h3>
                            <p class="text-muted mb-2">Next Lesson: ${course.nextLesson}</p>
                            <div class="progress mb-2" style="height: 8px;">
                                <div class="progress-bar bg-purple" 
                                     role="progressbar" 
                                     style="width: ${course.progress}%" 
                                     aria-valuenow="${course.progress}" 
                                     aria-valuemin="0" 
                                     aria-valuemax="100"></div>
                            </div>
                            <small class="text-muted">${course.progress}% Complete</small>
                        </div>
                        <div class="col-md-3 text-md-end">
                            <a href="/course.html" class="btn btn-purple">
                                <i class="bi bi-play-fill me-1"></i>
                                Continue
                            </a>
                        </div>
                    </div>
                </div>
            `);
        });
    },

    loadRecentActivity() {
        const activities = [
            {
                type: 'completion',
                title: 'Completed Module: CSS Flexbox',
                course: 'Modern CSS',
                time: '2 hours ago',
                icon: 'check-circle-fill'
            },
            {
                type: 'assignment',
                title: 'Submitted Assignment: Responsive Layout',
                course: 'Modern CSS',
                time: '1 day ago',
                icon: 'file-text'
            },
            {
                type: 'course',
                title: 'Started New Course',
                course: 'JavaScript Basics',
                time: '2 days ago',
                icon: 'book'
            }
        ];

        const container = $('#activityTimeline');
        container.empty();

        activities.forEach(activity => {
            container.append(`
                <div class="d-flex mb-3">
                    <div class="me-3">
                        <div class="rounded-circle bg-purple bg-opacity-10 p-2">
                            <i class="bi bi-${activity.icon} text-purple"></i>
                        </div>
                    </div>
                    <div>
                        <h4 class="h6 mb-1">${activity.title}</h4>
                        <p class="text-muted mb-0 small">
                            ${activity.course} • ${activity.time}
                        </p>
                    </div>
                </div>
            `);
        });
    }
};

$(document).ready(() => {
    Dashboard.init();
});