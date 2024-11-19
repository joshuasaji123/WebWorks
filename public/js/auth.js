const Auth = {
    user: null,
    isAuthenticated: false,
    rememberMe: false,

    init() {
        // Check for consent
        if (!localStorage.getItem('consent_given')) {
            this.showConsentModal();
        }

        // Check for remembered login
        const remembered = localStorage.getItem('remember_me');
        if (remembered) {
            const userData = JSON.parse(remembered);
            this.loginWithToken(userData);
        } else {
            // Check for session storage
            const token = sessionStorage.getItem('auth_token');
            if (token) {
                this.user = JSON.parse(sessionStorage.getItem('user_data'));
                this.isAuthenticated = true;
                this.updateUI();
            }
        }
    },

    showConsentModal() {
        const modal = `
            <div class="modal fade" id="consentModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Cookie Consent</h5>
                        </div>
                        <div class="modal-body">
                            <p>We use cookies and local storage to improve your experience. By continuing to use our site, you agree to our use of cookies and local storage.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" onclick="Auth.rejectConsent()">Reject</button>
                            <button type="button" class="btn btn-purple" onclick="Auth.acceptConsent()">Accept</button>
                        </div>
                    </div>
                </div>
            </div>`;
        
        $('body').append(modal);
        $('#consentModal').modal('show');
    },

    acceptConsent() {
        localStorage.setItem('consent_given', 'true');
        $('#consentModal').modal('hide');
    },

    rejectConsent() {
        $('#consentModal').modal('hide');
        alert('Some features may be limited without cookie consent.');
    },

    login(email, password, remember = false) {
        // Mock user data - replace with actual API call
        const users = {
            'student@webworks.com': {
                id: 1,
                name: 'John Student',
                email: 'student@webworks.com',
                password: 'student123',
                role: 'student'
            },
            'teacher@webworks.com': {
                id: 2,
                name: 'Sarah Teacher',
                email: 'teacher@webworks.com',
                password: 'teacher123',
                role: 'teacher'
            }
        };

        const user = users[email];
        if (user && user.password === password) {
            this.isAuthenticated = true;
            this.user = user;
            
            if (remember) {
                localStorage.setItem('remember_me', JSON.stringify({
                    token: 'mock-token',
                    user: user
                }));
            } else {
                sessionStorage.setItem('auth_token', 'mock-token');
                sessionStorage.setItem('user_data', JSON.stringify(user));
            }
            
            this.updateUI();
            return Promise.resolve({ success: true });
        }
        
        return Promise.reject('Invalid credentials');
    },

    loginWithToken(userData) {
        this.isAuthenticated = true;
        this.user = userData.user;
        this.updateUI();
    },

    logout() {
        this.isAuthenticated = false;
        this.user = null;
        localStorage.removeItem('remember_me');
        sessionStorage.removeItem('auth_token');
        sessionStorage.removeItem('user_data');
        this.updateUI();
        window.location.href = '/';
    },

    updateUI() {
        if (this.isAuthenticated) {
            $('#loggedOutBtns').hide();
            $('#loggedInBtns').show();
            $('#dashboardLink').show();
            $('#assignmentsLink').show();
            $('#messagesLink').show();
            $('#userNameDisplay').text(this.user.name);
        } else {
            $('#loggedOutBtns').show();
            $('#loggedInBtns').hide();
            $('#dashboardLink').hide();
            $('#assignmentsLink').hide();
            $('#messagesLink').hide();
            $('#userNameDisplay').text('Account');
        }
    }
};

$(document).ready(() => {
    Auth.init();
});