const Messages = {
    contacts: [],
    messages: [],
    selectedContact: null,

    init() {
        if (!Auth.isAuthenticated) {
            window.location.href = '/login.html';
            return;
        }

        this.loadContacts();
        this.setupEventListeners();
    },

    loadContacts() {
        // Simulated contacts data - replace with API call
        this.contacts = [
            {
                id: 1,
                name: 'Prof. John Smith',
                avatar: 'https://ui-avatars.com/api/?name=John+Smith&background=7c3aed&color=fff',
                lastMessage: 'How can I help you with the assignment?',
                timestamp: '10:30 AM',
                unread: 2,
                online: true
            },
            {
                id: 2,
                name: 'Dr. Sarah Johnson',
                avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=7c3aed&color=fff',
                lastMessage: 'Great progress on your project!',
                timestamp: 'Yesterday',
                unread: 0,
                online: false
            }
        ];
        this.renderContacts();
    },

    loadMessages(contactId) {
        // Simulated messages data - replace with API call
        this.messages = [
            {
                id: 1,
                senderId: 'teacher1',
                content: 'Hello! How can I help you with the JavaScript assignment?',
                timestamp: '10:30 AM'
            },
            {
                id: 2,
                senderId: 'student1',
                content: 'Hi Professor! I\'m having trouble understanding async/await concepts.',
                timestamp: '10:31 AM'
            },
            {
                id: 3,
                senderId: 'teacher1',
                content: 'Let me explain with an example...',
                timestamp: '10:32 AM'
            }
        ];
        this.renderMessages();
    },

    renderContacts() {
        const contactsList = $('#contactsList');
        contactsList.empty();

        this.contacts.forEach(contact => {
            contactsList.append(`
                <a href="#" class="list-group-item list-group-item-action px-4 py-3" data-contact-id="${contact.id}">
                    <div class="d-flex align-items-center">
                        <div class="position-relative me-3">
                            <img src="${contact.avatar}" 
                                 class="rounded-circle" 
                                 width="48" 
                                 height="48"
                                 alt="${contact.name}">
                            ${contact.online ? 
                                `<span class="position-absolute bottom-0 end-0 bg-success rounded-circle" 
                                       style="width: 10px; height: 10px;"></span>` : ''}
                        </div>
                        <div class="flex-grow-1 min-width-0">
                            <div class="d-flex justify-content-between align-items-center mb-1">
                                <h6 class="mb-0 text-truncate">${contact.name}</h6>
                                <small class="text-muted ms-2">${contact.timestamp}</small>
                            </div>
                            <p class="mb-0 small text-muted text-truncate">${contact.lastMessage}</p>
                        </div>
                        ${contact.unread > 0 ? 
                            `<span class="badge bg-purple rounded-pill ms-2">${contact.unread}</span>` : ''}
                    </div>
                </a>
            `);
        });
    },

    renderMessages() {
        const messagesList = $('#messagesList');
        messagesList.empty();

        this.messages.forEach(message => {
            const isOwn = message.senderId === 'student1';
            messagesList.append(`
                <div class="d-flex ${isOwn ? 'justify-content-end' : 'justify-content-start'} mb-3">
                    <div class="message ${isOwn ? 'message-own' : 'message-other'}
                                max-w-75 bg-${isOwn ? 'purple text-white' : 'light'}
                                rounded-3 p-3">
                        <div class="message-content">
                            <p class="mb-1">${message.content}</p>
                            <small class="${isOwn ? 'text-white-50' : 'text-muted'}">${message.timestamp}</small>
                        </div>
                    </div>
                </div>
            `);
        });

        messagesList.scrollTop(messagesList[0].scrollHeight);
    },

    sendMessage(content) {
        if (!content.trim() || !this.selectedContact) return;

        this.messages.push({
            id: this.messages.length + 1,
            senderId: 'student1',
            content: content,
            timestamp: 'Just now'
        });

        this.renderMessages();
    },

    setupEventListeners() {
        // Contact selection
        $('#contactsList').on('click', 'a', (e) => {
            e.preventDefault();
            const contactId = $(e.currentTarget).data('contact-id');
            this.selectedContact = this.contacts.find(c => c.id === contactId);
            this.loadMessages(contactId);
            
            // Update UI
            $('#contactsList a').removeClass('active');
            $(e.currentTarget).addClass('active');
        });

        // Message submission
        $('#messageForm').on('submit', (e) => {
            e.preventDefault();
            const input = $('#messageInput');
            const content = input.val().trim();

            if (content) {
                this.sendMessage(content);
                input.val('');
            }
        });
    }
};

// Initialize messages on page load
$(document).ready(() => {
    Messages.init();
});