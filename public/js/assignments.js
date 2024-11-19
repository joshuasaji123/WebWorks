const Assignments = {
    init() {
        if (!Auth.isAuthenticated) {
            window.location.href = '/login.html';
            return;
        }

        this.setupFormValidation();
        this.setupSubmissionHandling();
    },

    setupFormValidation() {
        const form = document.getElementById('assignmentForm');
        if (!form) return;

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            if (!form.checkValidity()) {
                event.stopPropagation();
                form.classList.add('was-validated');
                return;
            }

            // Handle form submission
            Assignments.submitAssignment(form);
        });
    },

    submitAssignment(form) {
        const fileInput = form.querySelector('input[type="file"]');
        const commentsInput = form.querySelector('textarea');
        
        if (!fileInput.files || fileInput.files.length === 0) {
            alert('Please select a file to upload');
            return;
        }

        const file = fileInput.files[0];
        if (file.size > 10 * 1024 * 1024) { // 10MB limit
            alert('File size exceeds 10MB limit');
            return;
        }

        // Simulate file upload
        const progressHtml = `
            <div class="progress mb-3">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-purple" 
                     role="progressbar" 
                     style="width: 0%"></div>
            </div>
        `;

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Uploading...';

        $(form).prepend(progressHtml);
        const progressBar = $(form).find('.progress-bar');

        // Simulate upload progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += 5;
            progressBar.css('width', `${progress}%`);

            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    this.handleSubmissionSuccess(form, submitBtn, originalBtnText);
                }, 500);
            }
        }, 100);
    },

    handleSubmissionSuccess(form, submitBtn, originalBtnText) {
        // Remove progress bar
        $(form).find('.progress').remove();

        // Show success message
        const alertHtml = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                Assignment submitted successfully!
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
        $(form).prepend(alertHtml);

        // Reset form
        form.reset();
        form.classList.remove('was-validated');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    },

    setupSubmissionHandling() {
        // Handle viewing previous submissions
        window.viewSubmission = (assignmentId) => {
            const modal = $('#submissionModal');
            const modalBody = modal.find('.modal-body');

            // Mock submission data
            const submission = {
                id: 'js-quiz',
                title: 'JavaScript Basics Quiz',
                submittedAt: 'March 10, 2024',
                grade: 90,
                answers: [
                    {
                        question: 'What is the difference between let and var?',
                        answer: 'let has block scope while var has function scope. let was introduced in ES6...',
                        feedback: 'Excellent explanation of scope differences!',
                        points: 10,
                        maxPoints: 10
                    },
                    {
                        question: 'Explain how promises work in JavaScript.',
                        answer: 'Promises are objects representing eventual completion of async operations...',
                        feedback: 'Good understanding, but could mention error handling.',
                        points: 8,
                        maxPoints: 10
                    }
                ]
            };

            modalBody.html(`
                <div class="p-4">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h4 class="mb-0">${submission.title}</h4>
                        <span class="badge bg-success">Grade: ${submission.grade}/100</span>
                    </div>
                    <p class="text-muted mb-4">Submitted on ${submission.submittedAt}</p>
                    
                    <div class="submission-answers">
                        ${submission.answers.map((answer, index) => `
                            <div class="card mb-3">
                                <div class="card-header d-flex justify-content-between">
                                    <span>Question ${index + 1}</span>
                                    <span>${answer.points}/${answer.maxPoints} points</span>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${answer.question}</h5>
                                    <p class="card-text">${answer.answer}</p>
                                    <div class="alert alert-info">
                                        <strong>Feedback:</strong> ${answer.feedback}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `);

            modal.modal('show');
        };
    }
};

$(document).ready(() => {
    Assignments.init();
});