// Authentication module for Zerouali Residence Management System

// User roles
const ROLES = {
    ADMIN: 'admin',
    RESIDENT: 'resident',
    GUARD: 'guard'
};

// Mock user database (in production, this would be server-side)
const users = [
    {
        username: 'admin',
        password: 'admin123',
        role: ROLES.ADMIN,
        name: 'System Administrator',
        apartment: null
    },
    {
        username: 'john.doe',
        password: 'resident123',
        role: ROLES.RESIDENT,
        name: 'John Doe',
        apartment: 'A101'
    },
    {
        username: 'security1',
        password: 'guard123',
        role: ROLES.GUARD,
        name: 'Security Officer',
        apartment: null
    }
];

// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    // Authenticate user
    const user = authenticateUser(username, password);
    
    if (user) {
        // Store user session
        storeUserSession(user, rememberMe);
        
        // Redirect based on role
        redirectAfterLogin(user.role);
    } else {
        showLoginError();
    }
});

// Authenticate user credentials
function authenticateUser(username, password) {
    return users.find(user => 
        user.username === username && 
        user.password === password
    );
}

// Store user session in localStorage/sessionStorage
function storeUserSession(user, remember) {
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem('currentUser', JSON.stringify(user));
}

// Redirect user after successful login
function redirectAfterLogin(role) {
    let redirectUrl = 'index.html';
    
    // Role-based redirection (can be expanded)
    switch(role) {
        case ROLES.ADMIN:
            redirectUrl = 'admin-dashboard.html';
            break;
        case ROLES.RESIDENT:
            redirectUrl = 'resident-portal.html';
            break;
        case ROLES.GUARD:
            redirectUrl = 'security-dashboard.html';
            break;
    }
    
    window.location.href = redirectUrl;
}

// Show login error message
function showLoginError() {
    const errorElement = document.createElement('div');
    errorElement.className = 'mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded';
    errorElement.textContent = 'Invalid username or password';
    
    const form = document.getElementById('loginForm');
    form.insertBefore(errorElement, form.firstChild);
    
    // Remove error after 3 seconds
    setTimeout(() => {
        errorElement.remove();
    }, 3000);
}

// Check for existing session on page load
function checkExistingSession() {
    const userData = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    
    if (userData) {
        const user = JSON.parse(userData);
        redirectAfterLogin(user.role);
    }
}

// Initialize auth module
document.addEventListener('DOMContentLoaded', checkExistingSession);