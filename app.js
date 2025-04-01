// Load components
function loadComponents() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header').innerHTML = html;
            setupHeader();
        });

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer').innerHTML = html;
        });
}

// Setup header functionality
function setupHeader() {
    // User dropdown menu
    const userMenu = document.getElementById('user-menu');
    const dropdownMenu = document.getElementById('dropdown-menu');
    
    if (userMenu && dropdownMenu) {
        userMenu.addEventListener('click', () => {
            dropdownMenu.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!userMenu.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.add('hidden');
            }
        });
    }

    // Language switcher
    document.querySelectorAll('.language-switcher').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            console.log(`Switching to ${lang} language`);
            // TODO: Implement actual language switching
        });
    });
}

// Handle resident form submission
function handleResidentFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(document.getElementById('residentForm'));
    const residentData = Object.fromEntries(formData.entries());
    
    // In a real app, this would be an API call
    console.log('New resident data:', residentData);
    
    // Show success message
    alert('Resident added successfully!');
    closeResidentModal();
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
    
    // Add form submission handler when modal is loaded
    document.addEventListener('residentModalLoaded', () => {
        document.getElementById('residentForm')?.addEventListener('submit', handleResidentFormSubmit);
    });

    // Load feature cards
    const features = [
        {
            icon: 'fa-users',
            title: 'Resident Management',
            description: 'Manage all resident information and apartment assignments'
        },
        {
            icon: 'fa-money-bill-wave',
            title: 'Financial Tracking',
            description: 'Handle fees, expenses and financial reporting'
        },
        {
            icon: 'fa-tools',
            title: 'Maintenance',
            description: 'Track maintenance requests and repairs'
        },
        {
            icon: 'fa-shield-alt',
            title: 'Security',
            description: 'Visitor management and security systems'
        },
        {
            icon: 'fa-comments',
            title: 'Communication',
            description: 'Announcements and messaging system'
        },
        {
            icon: 'fa-chart-pie',
            title: 'Reports',
            description: 'Generate financial and operational reports'
        }
    ];

    const featuresContainer = document.querySelector('.grid');
    if (featuresContainer) {
        features.forEach(feature => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow';
            card.innerHTML = `
                <div class="text-blue-600 text-4xl mb-4">
                    <i class="fas ${feature.icon}"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">${feature.title}</h3>
                <p class="text-gray-600">${feature.description}</p>
            `;
            featuresContainer.appendChild(card);
        });
    }
});