// Application Data - Ledo Sports Academy with Redirect URL Support
let appData = {
  heroSlides: [
    {
      id: 1,
      title: "Welcome to Ledo Sports Academy",
      subtitle: "Where Champions Are Born",
      description: "Join India's premier sports academy and unlock your potential with world-class training facilities and expert coaches.",
      backgroundImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=800&fit=crop",
      ctaText: "Join Today",
      ctaLink: "#members",
      redirectUrl: "https://forms.google.com/register",
      openNewTab: true
    },
    {
      id: 2,
      title: "Championship Victory 2024",
      subtitle: "Making History Together",
      description: "Celebrating our regional championship win with exceptional team performance and dedication.",
      backgroundImage: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=1200&h=800&fit=crop",
      ctaText: "Our Journey",
      ctaLink: "#experiences",
      redirectUrl: "",
      openNewTab: false
    },
    {
      id: 3,
      title: "State-of-the-Art Facilities",
      subtitle: "Training Excellence",
      description: "Experience training like never before with our modern facilities, synthetic turf, and advanced equipment.",
      backgroundImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
      ctaText: "Explore",
      ctaLink: "#activities",
      redirectUrl: "",
      openNewTab: false
    },
    {
      id: 4,
      title: "Community Sports Festival",
      subtitle: "Building Tomorrow's Athletes",
      description: "Fostering sports culture and healthy competition with over 500 participants from local schools.",
      backgroundImage: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1200&h=800&fit=crop",
      ctaText: "Support Us",
      ctaLink: "#donations",
      redirectUrl: "https://donate.example.com/ledo-academy",
      openNewTab: true
    }
  ],
  activities: [
    {
      id: 1,
      title: "Championship League Match vs Eagles FC",
      date: "2025-08-12",
      time: "16:00",
      description: "Ledo Sports Academy vs Eagles FC - Championship League Quarter Final match at home ground.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
      status: "upcoming",
      type: "match",
      priority: "high",
      redirectUrl: "https://tickets.example.com/eagles-match",
      openNewTab: true
    },
    {
      id: 2,
      title: "Annual Sports Day Celebration",
      date: "2025-08-18",
      time: "09:00",
      description: "Join us for our annual sports day with competitions, awards ceremony, and community celebration.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
      status: "upcoming",
      type: "event",
      priority: "high",
      redirectUrl: "https://events.example.com/sports-day-2025",
      openNewTab: true
    },
    {
      id: 3,
      title: "Weekly Training Session",
      date: "2025-08-06",
      time: "17:30",
      description: "Regular training session for all academy members at the main practice field.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      status: "recent",
      type: "training",
      priority: "medium",
      redirectUrl: "",
      openNewTab: false
    },
    {
      id: 4,
      title: "Junior Academy Trials",
      date: "2025-08-22",
      time: "14:00",
      description: "Open trials for junior academy program. Ages 8-16 welcome to showcase their talent.",
      image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=600&fit=crop",
      status: "upcoming",
      type: "trial",
      priority: "high",
      redirectUrl: "https://trials.example.com/junior-academy",
      openNewTab: true
    },
    {
      id: 5,
      title: "Inter-Academy Tournament",
      date: "2025-08-25",
      time: "10:00",
      description: "Regional tournament featuring top sports academies. Multiple matches throughout the day.",
      image: "https://images.unsplash.com/photo-1526232761682-d26e85d9d5c8?w=800&h=600&fit=crop",
      status: "upcoming",
      type: "tournament",
      priority: "high",
      redirectUrl: "",
      openNewTab: false
    },
    {
      id: 6,
      title: "Skills Development Workshop",
      date: "2025-08-08",
      time: "15:00",
      description: "Special workshop focusing on advanced football techniques and tactical awareness.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
      status: "upcoming",
      type: "workshop",
      priority: "medium",
      redirectUrl: "https://workshop.example.com/skills-dev",
      openNewTab: true
    }
  ],
  members: [
    {
      id: 1,
      name: "Arjun Sharma",
      contact: "arjun@email.com",
      phone: "+91-9876-543210",
      joinDate: "2023-01-15",
      role: "Team Captain",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Priya Patel",
      contact: "priya@email.com",
      phone: "+91-9876-543211",
      joinDate: "2023-02-20",
      role: "Vice Captain",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332b6d9?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Rohit Kumar",
      contact: "rohit@email.com",
      phone: "+91-9876-543212",
      joinDate: "2023-03-10",
      role: "Senior Player",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Anita Singh",
      contact: "anita@email.com",
      phone: "+91-9876-543213",
      joinDate: "2023-04-05",
      role: "Goalkeeper Coach",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Vikram Gupta",
      contact: "vikram@email.com",
      phone: "+91-9876-543214",
      joinDate: "2023-05-12",
      role: "Defense Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Deepika Rao",
      contact: "deepika@email.com",
      phone: "+91-9876-543215",
      joinDate: "2023-06-18",
      role: "Forward",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Rahul Verma",
      contact: "rahul@email.com",
      phone: "+91-9876-543216",
      joinDate: "2023-07-22",
      role: "Midfielder",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Sneha Joshi",
      contact: "sneha@email.com",
      phone: "+91-9876-543217",
      joinDate: "2023-08-15",
      role: "Junior Trainer",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face"
    }
  ],
  donations: [
    {
      id: 1,
      donorName: "Ledo Foundation Trust",
      amount: 50000,
      date: "2025-07-10",
      purpose: "Infrastructure Development"
    },
    {
      id: 2,
      donorName: "Local Sports Committee",
      amount: 25000,
      date: "2025-07-15",
      purpose: "Equipment Purchase"
    },
    {
      id: 3,
      donorName: "Arjun Sharma",
      amount: 5000,
      date: "2025-07-20",
      purpose: "Youth Development Program"
    },
    {
      id: 4,
      donorName: "City Business Association",
      amount: 15000,
      date: "2025-07-25",
      purpose: "Tournament Participation"
    },
    {
      id: 5,
      donorName: "Anonymous Supporter",
      amount: 8000,
      date: "2025-08-01",
      purpose: "General Academy Operations"
    },
    {
      id: 6,
      donorName: "Parents Association",
      amount: 12000,
      date: "2025-08-02",
      purpose: "New Uniforms and Kit"
    }
  ],
  experiences: [
    {
      id: 1,
      title: "Regional Championship Victory 2024",
      date: "2024-12-20",
      description: "Ledo Sports Academy clinched the regional championship title after defeating three top academies. Our players showcased exceptional skill and teamwork throughout the tournament.",
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "New Training Complex Inauguration",
      date: "2024-10-15",
      description: "Official opening of our state-of-the-art training complex with modern facilities, synthetic turf, and advanced training equipment. A milestone achievement for Ledo Sports Academy.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Community Sports Festival Success",
      date: "2024-08-18",
      description: "Organized and hosted the annual community sports festival with over 500 participants from 15 local schools. The event promoted sports culture and healthy competition.",
      image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Academy's 5th Anniversary Celebration",
      date: "2024-06-10",
      description: "Celebrated Ledo Sports Academy's 5th anniversary with a grand ceremony attended by over 400 members, alumni, and supporters. Honored our achievements and future vision.",
      image: "https://images.unsplash.com/photo-1555717588-d53f4e5ea81c?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "First National Tournament Participation",
      date: "2024-04-25",
      description: "Ledo Sports Academy made its debut in the national tournament, reaching the semi-finals. A proud moment that marked our entry into elite-level competition.",
      image: "https://images.unsplash.com/photo-1526232761682-d26e85d9d5c8?w=400&h=300&fit=crop"
    }
  ],
  expenses: [
    {
      id: 1,
      description: "Training Equipment Purchase",
      amount: 15000,
      date: "2025-07-05",
      category: "Equipment",
      vendor: "Sports Pro Equipment Ltd",
      paymentMethod: "Bank Transfer"
    },
    {
      id: 2,
      description: "Monthly Ground Maintenance",
      amount: 8000,
      date: "2025-07-01",
      category: "Maintenance",
      vendor: "Green Fields Services",
      paymentMethod: "Cash"
    },
    {
      id: 3,
      description: "Coach Transportation Allowance",
      amount: 3500,
      date: "2025-07-10",
      category: "Transportation",
      vendor: "Coaching Staff",
      paymentMethod: "UPI"
    },
    {
      id: 4,
      description: "Utility Bills - Electricity",
      amount: 4200,
      date: "2025-07-15",
      category: "Utilities",
      vendor: "State Electricity Board",
      paymentMethod: "Online"
    },
    {
      id: 5,
      description: "Medical Kit and First Aid Supplies",
      amount: 2800,
      date: "2025-07-18",
      category: "Medical",
      vendor: "MedCare Supplies",
      paymentMethod: "Card"
    },
    {
      id: 6,
      description: "Tournament Registration Fees",
      amount: 12000,
      date: "2025-07-22",
      category: "Tournament",
      vendor: "Regional Sports Federation",
      paymentMethod: "Bank Transfer"
    },
    {
      id: 7,
      description: "Marketing and Publicity Materials",
      amount: 5500,
      date: "2025-07-25",
      category: "Marketing",
      vendor: "Creative Print Solutions",
      paymentMethod: "Cash"
    },
    {
      id: 8,
      description: "Insurance Premium",
      amount: 18000,
      date: "2025-07-28",
      category: "Insurance",
      vendor: "National Insurance Co",
      paymentMethod: "Bank Transfer"
    },
    {
      id: 9,
      description: "Refreshments for Training Sessions",
      amount: 3200,
      date: "2025-08-01",
      category: "Food & Beverage",
      vendor: "Local Caterers",
      paymentMethod: "UPI"
    },
    {
      id: 10,
      description: "Office Supplies and Stationery",
      amount: 1800,
      date: "2025-08-02",
      category: "Office",
      vendor: "Office Mart",
      paymentMethod: "Card"
    }
  ],
  weeklyFees: [
    {
      memberId: 1,
      memberName: "Arjun Sharma",
      payments: [
        {"date": "2025-07-06", "amount": 20, "status": "paid"},
        {"date": "2025-07-13", "amount": 20, "status": "paid"},
        {"date": "2025-07-20", "amount": 20, "status": "paid"},
        {"date": "2025-07-27", "amount": 20, "status": "paid"},
        {"date": "2025-08-03", "amount": 20, "status": "pending"}
      ]
    },
    {
      memberId: 2,
      memberName: "Priya Patel",
      payments: [
        {"date": "2025-07-06", "amount": 20, "status": "paid"},
        {"date": "2025-07-13", "amount": 20, "status": "paid"},
        {"date": "2025-07-20", "amount": 20, "status": "overdue"},
        {"date": "2025-07-27", "amount": 20, "status": "paid"},
        {"date": "2025-08-03", "amount": 20, "status": "pending"}
      ]
    },
    {
      memberId: 3,
      memberName: "Rohit Kumar",
      payments: [
        {"date": "2025-07-06", "amount": 20, "status": "paid"},
        {"date": "2025-07-13", "amount": 20, "status": "paid"},
        {"date": "2025-07-20", "amount": 20, "status": "paid"},
        {"date": "2025-07-27", "amount": 20, "status": "paid"},
        {"date": "2025-08-03", "amount": 20, "status": "paid"}
      ]
    },
    {
      memberId: 4,
      memberName: "Anita Singh",
      payments: [
        {"date": "2025-07-06", "amount": 20, "status": "paid"},
        {"date": "2025-07-13", "amount": 20, "status": "overdue"},
        {"date": "2025-07-20", "amount": 20, "status": "paid"},
        {"date": "2025-07-27", "amount": 20, "status": "paid"},
        {"date": "2025-08-03", "amount": 20, "status": "pending"}
      ]
    },
    {
      memberId: 5,
      memberName: "Vikram Gupta",
      payments: [
        {"date": "2025-07-06", "amount": 20, "status": "paid"},
        {"date": "2025-07-13", "amount": 20, "status": "paid"},
        {"date": "2025-07-20", "amount": 20, "status": "paid"},
        {"date": "2025-07-27", "amount": 20, "status": "overdue"},
        {"date": "2025-08-03", "amount": 20, "status": "pending"}
      ]
    },
    {
      memberId: 6,
      memberName: "Deepika Rao",
      payments: [
        {"date": "2025-07-06", "amount": 20, "status": "paid"},
        {"date": "2025-07-13", "amount": 20, "status": "paid"},
        {"date": "2025-07-20", "amount": 20, "status": "paid"},
        {"date": "2025-07-27", "amount": 20, "status": "paid"},
        {"date": "2025-08-03", "amount": 20, "status": "paid"}
      ]
    },
    {
      memberId: 7,
      memberName: "Rahul Verma",
      payments: [
        {"date": "2025-07-06", "amount": 20, "status": "paid"},
        {"date": "2025-07-13", "amount": 20, "status": "paid"},
        {"date": "2025-07-20", "amount": 20, "status": "paid"},
        {"date": "2025-07-27", "amount": 20, "status": "paid"},
        {"date": "2025-08-03", "amount": 20, "status": "pending"}
      ]
    },
    {
      memberId: 8,
      memberName: "Sneha Joshi",
      payments: [
        {"date": "2025-07-06", "amount": 20, "status": "paid"},
        {"date": "2025-07-13", "amount": 20, "status": "paid"},
        {"date": "2025-07-20", "amount": 20, "status": "paid"},
        {"date": "2025-07-27", "amount": 20, "status": "paid"},
        {"date": "2025-08-03", "amount": 20, "status": "paid"}
      ]
    }
  ],
  gallery: [
    {
      id: 1,
      title: "Training Session",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      album: "Training",
      isTopFive: true,
      order: 1
    },
    {
      id: 2,
      title: "Championship Trophy",
      url: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800",
      album: "Awards",
      isTopFive: true,
      order: 2
    },
    {
      id: 3,
      title: "Team Photo",
      url: "https://images.unsplash.com/photo-1555717588-d53f4e5ea81c?w=800",
      album: "Team",
      isTopFive: true,
      order: 3
    },
    {
      id: 4,
      title: "Youth Program",
      url: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800",
      album: "Youth",
      isTopFive: true,
      order: 4
    },
    {
      id: 5,
      title: "Community Event",
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
      album: "Community",
      isTopFive: true,
      order: 5
    },
    {
      id: 6,
      title: "Coach Training",
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      album: "Training",
      isTopFive: false,
      order: 0
    },
    {
      id: 7,
      title: "Match Day",
      url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
      album: "Matches",
      isTopFive: false,
      order: 0
    },
    {
      id: 8,
      title: "Tournament Victory",
      url: "https://images.unsplash.com/photo-1526232761682-d26e85d9d5c8?w=800",
      album: "Awards",
      isTopFive: false,
      order: 0
    }
  ],
  dashboardStats: {
    totalMembers: 8,
    totalActivities: 6,
    totalDonations: 115000,
    totalExpenses: 74000,
    netBalance: 41000,
    weeklyFeesCollected: 640,
    pendingFees: 100,
    overdueFees: 60,
    totalExperiences: 5
  }
};

// Application state
let isAdminMode = false;
let currentEditingItem = null;
let currentEditingType = null;
let financialChart = null;
let expenseChart = null;
let slideshowInterval = null;
let currentSlideIndex = 0;
let isCurrentlyOnHome = true;
let isSlideshowPaused = false;
let currentLightboxIndex = 0;
let galleryImages = [];

// URL Validation Function
function isValidUrl(string) {
  try {
    const url = new URL(string);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
}

// Redirect URL Handler
function handleRedirectUrl(redirectUrl, defaultUrl, openNewTab) {
  const finalUrl = redirectUrl && redirectUrl.trim() ? redirectUrl : defaultUrl;
  
  if (finalUrl.startsWith('#')) {
    // Internal navigation
    const target = finalUrl.substring(1);
    showSection(target);
    setActiveNavLink(document.querySelector('[href="' + finalUrl + '"]'));
    isCurrentlyOnHome = (target === 'home');
    if (isCurrentlyOnHome && !isSlideshowPaused) {
      startSlideshow();
    } else {
      stopSlideshow();
    }
    // Close mobile menu if open
    const nav = document.getElementById('nav');
    if (nav) nav.classList.remove('active');
  } else if (isValidUrl(finalUrl)) {
    // External URL
    if (openNewTab) {
      window.open(finalUrl, '_blank');
    } else {
      window.location.href = finalUrl;
    }
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  initializeApp();
  setupEventListeners();
  setupKeyboardShortcuts();
});

function initializeApp() {
  console.log('Initializing app...');
  
  // Update hero slides to use gallery top 5
  updateHeroSlidesFromGallery();
  
  // Render all content
  renderHeroSlideshow();
  renderHeroManagement();
  renderHomeEvents();
  renderDashboard();
  renderActivities();
  renderMembers();
  renderDonations();
  renderExpenses();
  renderExperiences();
  renderWeeklyFees();
  renderGallery();
  updateTotalDonations();
  updateTotalExpenses();
  renderRecentActivities();
  
  // Show home section by default
  showSection('home');
  startSlideshow();
  
  console.log('App initialized successfully');
}

function updateHeroSlidesFromGallery() {
  const topFivePhotos = appData.gallery
    .filter(function(photo) { return photo.isTopFive; })
    .sort(function(a, b) { return a.order - b.order; })
    .slice(0, 5);
  
  if (topFivePhotos.length >= 5) {
    appData.heroSlides = topFivePhotos.map(function(photo, index) {
      const titles = [
        "Welcome to Ledo Sports Academy",
        "Championship Excellence",
        "Team Spirit & Unity",
        "Youth Development Program",
        "Community Sports Festival"
      ];
      const subtitles = [
        "Where Champions Are Born",
        "Celebrating Our Victories",
        "Building Strong Teams",
        "Nurturing Future Stars",
        "Building Tomorrow's Athletes"
      ];
      const descriptions = [
        "Join India's premier sports academy and unlock your potential with world-class training facilities and expert coaches.",
        "Our dedication and hard work have led us to numerous victories and championships throughout the years.",
        "Experience the power of teamwork and collaboration as we build stronger athletes and better individuals.",
        "Investing in youth development to create the next generation of sports champions and leaders.",
        "Fostering sports culture and healthy competition with over 500 participants from local schools."
      ];
      const ctaLinks = ["#members", "#experiences", "#activities", "#donations", "#gallery"];
      const ctaTexts = ["Join Today", "Our Journey", "Explore", "Support Us", "View Gallery"];
      
      return {
        id: photo.id,
        title: titles[index] || photo.title,
        subtitle: subtitles[index] || "Excellence in Sports",
        description: descriptions[index] || "Discover the world of sports excellence at Ledo Sports Academy.",
        backgroundImage: photo.url,
        ctaText: ctaTexts[index] || "Learn More",
        ctaLink: ctaLinks[index] || "#activities",
        redirectUrl: "",
        openNewTab: false
      };
    });
  }
}

function setupEventListeners() {
  console.log('Setting up event listeners...');
  
  // Navigation - fix event delegation to work properly
  document.addEventListener('click', function(e) {
    // Handle navigation links properly
    if (e.target.classList.contains('nav-link') && !e.target.classList.contains('mobile-admin-login') && !e.target.classList.contains('mobile-admin-logout')) {
      e.preventDefault();
      e.stopPropagation();
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = href.substring(1);
        console.log('Navigating to section:', target);
        showSection(target);
        setActiveNavLink(e.target);
        
        // Update slideshow state based on current section
        isCurrentlyOnHome = (target === 'home');
        if (isCurrentlyOnHome && !isSlideshowPaused) {
          startSlideshow();
        } else {
          stopSlideshow();
        }
        
        // Close mobile menu if open
        const nav = document.getElementById('nav');
        if (nav) nav.classList.remove('active');
      }
    }
    
    // Handle logo click to go home
    if (e.target.closest('.logo')) {
      e.preventDefault();
      showSection('home');
      setActiveNavLink(document.querySelector('[href="#home"]'));
      isCurrentlyOnHome = true;
      startSlideshow();
      const nav = document.getElementById('nav');
      if (nav) nav.classList.remove('active');
    }
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      const nav = document.getElementById('nav');
      if (nav) nav.classList.toggle('active');
    });
  }

  // Admin login/logout - with error handling
  setupAdminEventListeners();

  // Member search
  const memberSearch = document.getElementById('memberSearch');
  if (memberSearch) {
    memberSearch.addEventListener('input', function(e) {
      filterMembers(e.target.value);
    });
  }

  // PDF Export buttons
  setupPDFExportListeners();

  // Modal event listeners
  setupModalEventListeners();

  // Slideshow pause on hover
  setupSlideshowHoverListeners();

  // Lightbox event listeners
  setupLightboxEventListeners();
  
  console.log('Event listeners set up successfully');
}

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', function(e) {
    // Check for Ctrl+Shift+A
    if (e.ctrlKey && e.shiftKey && e.code === 'KeyA') {
      e.preventDefault();
      const adminLoginModal = document.getElementById('adminLoginModal');
      if (adminLoginModal && !isAdminMode) {
        adminLoginModal.classList.remove('hidden');
        const passwordInput = document.getElementById('adminPassword');
        if (passwordInput) {
          passwordInput.focus();
        }
      }
    }
    
    // Lightbox navigation
    if (e.code === 'Escape') {
      closeLightbox();
    }
    if (e.code === 'ArrowLeft') {
      previousLightboxImage();
    }
    if (e.code === 'ArrowRight') {
      nextLightboxImage();
    }
  });
}

function setupLightboxEventListeners() {
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightbox = document.getElementById('lightbox');

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', previousLightboxImage);
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', nextLightboxImage);
  }

  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }
}

function setupSlideshowHoverListeners() {
  const slideshowContainer = document.querySelector('.hero-slideshow');
  if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseenter', function() {
      if (isCurrentlyOnHome) {
        isSlideshowPaused = true;
        stopSlideshow();
      }
    });
    
    slideshowContainer.addEventListener('mouseleave', function() {
      if (isCurrentlyOnHome) {
        isSlideshowPaused = false;
        startSlideshow();
      }
    });
  }
}

// Slideshow Functions
function renderHeroSlideshow() {
  const slidesWrapper = document.getElementById('slidesWrapper');
  const indicatorsContainer = document.getElementById('slideshowIndicators');
  
  if (!slidesWrapper || !indicatorsContainer) return;
  
  slidesWrapper.innerHTML = '';
  indicatorsContainer.innerHTML = '';
  
  appData.heroSlides.forEach(function(slide, index) {
    // Create slide
    const slideElement = document.createElement('div');
    slideElement.className = index === 0 ? 'slide active' : 'slide';
    slideElement.style.backgroundImage = 'url("' + slide.backgroundImage + '")';
    
    slideElement.innerHTML = 
      '<div class="slide-overlay">' +
        '<div class="slide-content">' +
          '<h1 class="slide-title">' + slide.title + '</h1>' +
          '<h2 class="slide-subtitle">' + slide.subtitle + '</h2>' +
          '<p class="slide-description">' + slide.description + '</p>' +
          '<button class="slide-cta" data-cta-link="' + slide.ctaLink + '" data-redirect-url="' + (slide.redirectUrl || '') + '" data-open-new-tab="' + (slide.openNewTab ? 'true' : 'false') + '">' + slide.ctaText + '</button>' +
        '</div>' +
      '</div>';
    
    slidesWrapper.appendChild(slideElement);
    
    // Add event listener to CTA button
    const ctaButton = slideElement.querySelector('.slide-cta');
    if (ctaButton) {
      ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        const defaultUrl = this.getAttribute('data-cta-link');
        const redirectUrl = this.getAttribute('data-redirect-url');
        const openNewTab = this.getAttribute('data-open-new-tab') === 'true';
        handleRedirectUrl(redirectUrl, defaultUrl, openNewTab);
      });
    }
    
    // Create indicator with proper event handling
    const indicator = document.createElement('div');
    indicator.className = index === 0 ? 'indicator active' : 'indicator';
    indicator.setAttribute('data-slide-index', index);
    indicator.addEventListener('click', function() {
      const slideIndex = parseInt(this.getAttribute('data-slide-index'));
      goToSlide(slideIndex);
    });
    
    indicatorsContainer.appendChild(indicator);
  });
}

function startSlideshow() {
  if (slideshowInterval) clearInterval(slideshowInterval);
  
  // Only start if we're on home and not paused
  if (isCurrentlyOnHome && !isSlideshowPaused) {
    slideshowInterval = setInterval(function() {
      nextSlide();
    }, 3000); // 3 seconds
  }
}

function stopSlideshow() {
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
  }
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % appData.heroSlides.length;
  goToSlide(currentSlideIndex);
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');
  
  // Remove active class from all slides and indicators
  slides.forEach(function(slide) {
    slide.classList.remove('active');
  });
  indicators.forEach(function(indicator) {
    indicator.classList.remove('active');
  });
  
  // Add active class to current slide and indicator
  if (slides[index]) slides[index].classList.add('active');
  if (indicators[index]) indicators[index].classList.add('active');
  
  currentSlideIndex = index;
}

// Hero Management Functions
function renderHeroManagement() {
  const grid = document.getElementById('heroSlidesGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  appData.heroSlides.forEach(function(slide) {
    const slideCard = createHeroSlideCard(slide);
    grid.appendChild(slideCard);
  });
}

function createHeroSlideCard(slide) {
  const card = document.createElement('div');
  card.className = 'hero-slide-card';
  const hasRedirect = slide.redirectUrl && slide.redirectUrl.trim();
  card.innerHTML =
    '<div class="slide-preview" style="background-image: url(\'' + slide.backgroundImage + '\')">' +
      '<div class="slide-preview-overlay">' + slide.ctaText + '</div>' +
    '</div>' +
    '<h4 class="slide-title">' + slide.title + '</h4>' +
    '<h5 class="slide-subtitle">' + slide.subtitle + '</h5>' +
    '<p class="slide-description">' + slide.description + '</p>' +
    '<div class="slide-meta">' +
      '<div class="slide-cta-info">Default: ' + slide.ctaLink + '</div>' +
      (hasRedirect ?
        '<div class="redirect-url-info">Redirects to: ' + slide.redirectUrl + (slide.openNewTab ? ' (New Tab)' : '') + '</div>' :
        '<div class="redirect-url-info">No redirect URL set</div>'
      ) +
    '</div>' +
    '<div class="card-actions">' +
      '<button class="btn btn--sm btn--outline" onclick="editHeroSlide(\'' + slide._id + '\')">Edit</button>' +
      '<button class="btn btn--sm btn--outline" onclick="deleteHeroSlide(\'' + slide._id + '\')" style="color: var(--club-red); border-color: var(--club-red);">Delete</button>' +
    '</div>';
  return card;
}

function editHeroSlide(id) {
  const slide = appData.heroSlides.find(function(s) { return s._id === id; });
  if (!slide) return;
  currentEditingItem = id;
  currentEditingType = 'heroSlide';
  const elements = {
    modalTitle: document.getElementById('heroSlideModalTitle'),
    title: document.getElementById('heroSlideTitle'),
    subtitle: document.getElementById('heroSlideSubtitle'),
    description: document.getElementById('heroSlideDescription'),
    backgroundImage: document.getElementById('heroSlideBackgroundImage'),
    ctaText: document.getElementById('heroSlideCtaText'),
    ctaLink: document.getElementById('heroSlideCtaLink'),
    redirectUrl: document.getElementById('heroSlideRedirectUrl'),
    openNewTab: document.getElementById('heroSlideOpenNewTab'),
    modal: document.getElementById('heroSlideModal')
  };
  if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Hero Slide';
  if (elements.title) elements.title.value = slide.title;
  if (elements.subtitle) elements.subtitle.value = slide.subtitle;
  if (elements.description) elements.description.value = slide.description;
  if (elements.backgroundImage) elements.backgroundImage.value = slide.backgroundImage;
  if (elements.ctaText) elements.ctaText.value = slide.ctaText;
  if (elements.ctaLink) elements.ctaLink.value = slide.ctaLink;
  if (elements.redirectUrl) elements.redirectUrl.value = slide.redirectUrl || '';
  if (elements.openNewTab) elements.openNewTab.checked = slide.openNewTab || false;
  if (elements.modal) elements.modal.classList.remove('hidden');
}

function deleteHeroSlide(id) {
  if (confirm('Are you sure you want to delete this hero slide?')) {
    appData.heroSlides = appData.heroSlides.filter(function(s) { return s._id !== id; });
    renderHeroManagement();
    renderHeroSlideshow();
    if (isCurrentlyOnHome) {
      startSlideshow();
    }
    showMessage('Hero slide deleted successfully');
  }
}

// CRUD operations
function saveActivity() {
  const title = document.getElementById('activityTitle').value;
  const date = document.getElementById('activityDate').value;
  const time = document.getElementById('activityTime').value;
  const description = document.getElementById('activityDescription').value;
  const image = document.getElementById('activityImage').value || 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop';
  const status = document.getElementById('activityStatus').value;
  const redirectUrl = document.getElementById('activityRedirectUrl').value;
  const openNewTab = document.getElementById('activityOpenNewTab').checked;

  // Validate redirect URL if provided
  if (redirectUrl && !isValidUrl(redirectUrl)) {
    showMessage('Please enter a valid redirect URL starting with http:// or https://', 'error');
    return;
  }

  if (currentEditingItem) {
    const index = appData.activities.findIndex(function(a) { return a.id === currentEditingItem; });
    if (index !== -1) {
      appData.activities[index] = Object.assign({}, appData.activities[index], { 
        title: title, 
        date: date, 
        time: time, 
        description: description, 
        image: image, 
        status: status,
        redirectUrl: redirectUrl,
        openNewTab: openNewTab
      });
    }
  } else {
    const newId = Math.max.apply(Math, appData.activities.map(function(a) { return a.id; }).concat([0])) + 1;
    appData.activities.push({ 
      id: newId, 
      title: title, 
      date: date, 
      time: time, 
      description: description, 
      image: image, 
      status: status,
      redirectUrl: redirectUrl,
      openNewTab: openNewTab
    });
  }

  renderActivities();
  renderHomeEvents();
  renderRecentActivities();
  updateDashboardMetrics();
  showMessage(currentEditingItem ? 'Activity updated successfully' : 'Activity added successfully');
}

function editActivity(id) {
  const activity = appData.activities.find(function(a) { return a.id === id; });
  if (!activity) return;

  currentEditingItem = id;
  currentEditingType = 'activity';
  
  const elements = {
    modalTitle: document.getElementById('activityModalTitle'),
    title: document.getElementById('activityTitle'),
    date: document.getElementById('activityDate'),
    time: document.getElementById('activityTime'),
    description: document.getElementById('activityDescription'),
    image: document.getElementById('activityImage'),
    status: document.getElementById('activityStatus'),
    redirectUrl: document.getElementById('activityRedirectUrl'),
    openNewTab: document.getElementById('activityOpenNewTab'),
    modal: document.getElementById('activityModal')
  };

  if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Activity';
  if (elements.title) elements.title.value = activity.title;
  if (elements.date) elements.date.value = activity.date;
  if (elements.time) elements.time.value = activity.time;
  if (elements.description) elements.description.value = activity.description;
  if (elements.image) elements.image.value = activity.image;
  if (elements.status) elements.status.value = activity.status || 'upcoming';
  if (elements.redirectUrl) elements.redirectUrl.value = activity.redirectUrl || '';
  if (elements.openNewTab) elements.openNewTab.checked = activity.openNewTab || false;
  if (elements.modal) elements.modal.classList.remove('hidden');
}

function deleteActivity(id) {
  if (confirm('Are you sure you want to delete this activity?')) {
    appData.activities = appData.activities.filter(function(a) { return a.id !== id; });
    renderActivities();
    renderHomeEvents();
    renderRecentActivities();
    updateDashboardMetrics();
    showMessage('Activity deleted successfully');
  }
}

function saveMember() {
  const name = document.getElementById('memberName').value;
  const contact = document.getElementById('memberContact').value;
  const phone = document.getElementById('memberPhone').value;
  const role = document.getElementById('memberRole').value;
  const joinDate = document.getElementById('memberJoinDate').value;
  const image = document.getElementById('memberImage').value || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face';

  if (currentEditingItem) {
    const index = appData.members.findIndex(function(m) { return m.id === currentEditingItem; });
    if (index !== -1) {
      appData.members[index] = Object.assign({}, appData.members[index], { name: name, contact: contact, phone: phone, role: role, joinDate: joinDate, image: image });
    }
    
    // Update weekly fees member name
    const feeIndex = appData.weeklyFees.findIndex(function(f) { return f.memberId === currentEditingItem; });
    if (feeIndex !== -1) {
      appData.weeklyFees[feeIndex].memberName = name;
    }
  } else {
    const newId = Math.max.apply(Math, appData.members.map(function(m) { return m.id; }).concat([0])) + 1;
    appData.members.push({ id: newId, name: name, contact: contact, phone: phone, role: role, joinDate: joinDate, image: image });
    
    // Add weekly fee record for new member
    appData.weeklyFees.push({
      memberId: newId,
      memberName: name,
      payments: [
        { date: "2025-08-03", amount: 20, status: "pending" }
      ]
    });
  }

  renderMembers();
  renderWeeklyFees();
  updateDashboardMetrics();
  showMessage(currentEditingItem ? 'Member updated successfully' : 'Member added successfully');
}

function editMember(id) {
  const member = appData.members.find(function(m) { return m.id === id; });
  if (!member) return;

  currentEditingItem = id;
  currentEditingType = 'member';
  
  const elements = {
    modalTitle: document.getElementById('memberModalTitle'),
    name: document.getElementById('memberName'),
    contact: document.getElementById('memberContact'),
    phone: document.getElementById('memberPhone'),
    role: document.getElementById('memberRole'),
    joinDate: document.getElementById('memberJoinDate'),
    image: document.getElementById('memberImage'),
    modal: document.getElementById('memberModal')
  };

  if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Member';
  if (elements.name) elements.name.value = member.name;
  if (elements.contact) elements.contact.value = member.contact;
  if (elements.phone) elements.phone.value = member.phone;
  if (elements.role) elements.role.value = member.role;
  if (elements.joinDate) elements.joinDate.value = member.joinDate;
  if (elements.image) elements.image.value = member.image;
  if (elements.modal) elements.modal.classList.remove('hidden');
}

function deleteMember(id) {
  if (confirm('Are you sure you want to delete this member?')) {
    appData.members = appData.members.filter(function(m) { return m.id !== id; });
    appData.weeklyFees = appData.weeklyFees.filter(function(f) { return f.memberId !== id; });
    renderMembers();
    renderWeeklyFees();
    updateDashboardMetrics();
    showMessage('Member deleted successfully');
  }
}

function saveDonation() {
  const donorName = document.getElementById('donorName').value;
  const amount = parseInt(document.getElementById('donationAmount').value);
  const date = document.getElementById('donationDate').value;
  const purpose = document.getElementById('donationPurpose').value;

  if (currentEditingItem) {
    const index = appData.donations.findIndex(function(d) { return d.id === currentEditingItem; });
    if (index !== -1) {
      appData.donations[index] = Object.assign({}, appData.donations[index], { donorName: donorName, amount: amount, date: date, purpose: purpose });
    }
  } else {
    const newId = Math.max.apply(Math, appData.donations.map(function(d) { return d.id; }).concat([0])) + 1;
    appData.donations.push({ id: newId, donorName: donorName, amount: amount, date: date, purpose: purpose });
  }

  renderDonations();
  updateTotalDonations();
  updateDashboardMetrics();
  renderCharts();
  showMessage(currentEditingItem ? 'Donation updated successfully' : 'Donation added successfully');
}

function editDonation(id) {
  const donation = appData.donations.find(function(d) { return d.id === id; });
  if (!donation) return;

  currentEditingItem = id;
  currentEditingType = 'donation';
  
  const elements = {
    modalTitle: document.getElementById('donationModalTitle'),
    donorName: document.getElementById('donorName'),
    amount: document.getElementById('donationAmount'),
    date: document.getElementById('donationDate'),
    purpose: document.getElementById('donationPurpose'),
    modal: document.getElementById('donationModal')
  };

  if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Donation';
  if (elements.donorName) elements.donorName.value = donation.donorName;
  if (elements.amount) elements.amount.value = donation.amount;
  if (elements.date) elements.date.value = donation.date;
  if (elements.purpose) elements.purpose.value = donation.purpose;
  if (elements.modal) elements.modal.classList.remove('hidden');
}

function deleteDonation(id) {
  if (confirm('Are you sure you want to delete this donation record?')) {
    appData.donations = appData.donations.filter(function(d) { return d.id !== id; });
    renderDonations();
    updateTotalDonations();
    updateDashboardMetrics();
    renderCharts();
    showMessage('Donation deleted successfully');
  }
}

function saveExpense() {
  const description = document.getElementById('expenseDescription').value;
  const amount = parseInt(document.getElementById('expenseAmount').value);
  const date = document.getElementById('expenseDate').value;
  const category = document.getElementById('expenseCategory').value;
  const vendor = document.getElementById('expenseVendor').value;
  const paymentMethod = document.getElementById('expensePaymentMethod').value;

  if (currentEditingItem) {
    const index = appData.expenses.findIndex(function(e) { return e.id === currentEditingItem; });
    if (index !== -1) {
      appData.expenses[index] = Object.assign({}, appData.expenses[index], { description: description, amount: amount, date: date, category: category, vendor: vendor, paymentMethod: paymentMethod });
    }
  } else {
    const newId = Math.max.apply(Math, appData.expenses.map(function(e) { return e.id; }).concat([0])) + 1;
    appData.expenses.push({ id: newId, description: description, amount: amount, date: date, category: category, vendor: vendor, paymentMethod: paymentMethod });
  }

  renderExpenses();
  updateTotalExpenses();
  updateDashboardMetrics();
  renderCharts();
  showMessage(currentEditingItem ? 'Expense updated successfully' : 'Expense added successfully');
}

function editExpense(id) {
  const expense = appData.expenses.find(function(e) { return e.id === id; });
  if (!expense) return;

  currentEditingItem = id;
  currentEditingType = 'expense';
  
  const elements = {
    modalTitle: document.getElementById('expenseModalTitle'),
    description: document.getElementById('expenseDescription'),
    amount: document.getElementById('expenseAmount'),
    date: document.getElementById('expenseDate'),
    category: document.getElementById('expenseCategory'),
    vendor: document.getElementById('expenseVendor'),
    paymentMethod: document.getElementById('expensePaymentMethod'),
    modal: document.getElementById('expenseModal')
  };

  if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Expense';
  if (elements.description) elements.description.value = expense.description;
  if (elements.amount) elements.amount.value = expense.amount;
  if (elements.date) elements.date.value = expense.date;
  if (elements.category) elements.category.value = expense.category;
  if (elements.vendor) elements.vendor.value = expense.vendor;
  if (elements.paymentMethod) elements.paymentMethod.value = expense.paymentMethod;
  if (elements.modal) elements.modal.classList.remove('hidden');
}

function deleteExpense(id) {
  if (confirm('Are you sure you want to delete this expense record?')) {
    appData.expenses = appData.expenses.filter(function(e) { return e.id !== id; });
    renderExpenses();
    updateTotalExpenses();
    updateDashboardMetrics();
    renderCharts();
    showMessage('Expense deleted successfully');
  }
}

function saveExperience() {
  const title = document.getElementById('experienceTitle').value;
  const date = document.getElementById('experienceDate').value;
  const description = document.getElementById('experienceDescription').value;
  const image = document.getElementById('experienceImage').value || 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop';

  if (currentEditingItem) {
    const index = appData.experiences.findIndex(function(e) { return e.id === currentEditingItem; });
    if (index !== -1) {
      appData.experiences[index] = Object.assign({}, appData.experiences[index], { title: title, date: date, description: description, image: image });
    }
  } else {
    const newId = Math.max.apply(Math, appData.experiences.map(function(e) { return e.id; }).concat([0])) + 1;
    appData.experiences.push({ id: newId, title: title, date: date, description: description, image: image });
  }

  renderExperiences();
  showMessage(currentEditingItem ? 'Experience updated successfully' : 'Experience added successfully');
}

function editExperience(id) {
  const experience = appData.experiences.find(function(e) { return e.id === id; });
  if (!experience) return;

  currentEditingItem = id;
  currentEditingType = 'experience';
  
  const elements = {
    modalTitle: document.getElementById('experienceModalTitle'),
    title: document.getElementById('experienceTitle'),
    date: document.getElementById('experienceDate'),
    description: document.getElementById('experienceDescription'),
    image: document.getElementById('experienceImage'),
    modal: document.getElementById('experienceModal')
  };

  if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Experience';
  if (elements.title) elements.title.value = experience.title;
  if (elements.date) elements.date.value = experience.date;
  if (elements.description) elements.description.value = experience.description;
  if (elements.image) elements.image.value = experience.image;
  if (elements.modal) elements.modal.classList.remove('hidden');
}

function deleteExperience(id) {
  if (confirm('Are you sure you want to delete this experience?')) {
    appData.experiences = appData.experiences.filter(function(e) { return e.id !== id; });
    renderExperiences();
    showMessage('Experience deleted successfully');
  }
}

// Gallery CRUD operations
function saveGalleryItem() {
  const title = document.getElementById('galleryTitle').value;
  const url = document.getElementById('galleryUrl').value;
  const album = document.getElementById('galleryAlbum').value || '';

  // Validate URL
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    showMessage('Please enter a valid image URL starting with http:// or https://', 'error');
    return;
  }

  if (currentEditingItem) {
    const index = appData.gallery.findIndex(function(g) { return g.id === currentEditingItem; });
    if (index !== -1) {
      appData.gallery[index] = Object.assign({}, appData.gallery[index], { title: title, url: url, album: album });
    }
  } else {
    const newId = Math.max.apply(Math, appData.gallery.map(function(g) { return g.id; }).concat([0])) + 1;
    appData.gallery.push({ 
      id: newId, 
      title: title, 
      url: url, 
      album: album, 
      isTopFive: false, 
      order: 0 
    });
  }

  renderGallery();
  showMessage(currentEditingItem ? 'Photo updated successfully' : 'Photo added successfully');
}

function editGalleryItem(id) {
  const galleryItem = appData.gallery.find(function(g) { return g._id === id; });
  if (!galleryItem) return;

  currentEditingItem = id;
  currentEditingType = 'gallery';
  
  const elements = {
    modalTitle: document.getElementById('galleryModalTitle'),
    title: document.getElementById('galleryTitle'),
    url: document.getElementById('galleryUrl'),
    album: document.getElementById('galleryAlbum'),
    modal: document.getElementById('galleryModal')
  };

  if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Photo';
  if (elements.title) elements.title.value = galleryItem.title;
  if (elements.url) elements.url.value = galleryItem.url;
  if (elements.album) elements.album.value = galleryItem.album || '';
  if (elements.modal) elements.modal.classList.remove('hidden');
}

function deleteGalleryItem(id) {
  if (confirm('Are you sure you want to delete this photo?')) {
    appData.gallery = appData.gallery.filter(function(g) { return g._id !== id; });
    renderGallery();
    updateHeroSlidesFromGallery();
    renderHeroSlideshow();
    if (isCurrentlyOnHome) {
      startSlideshow();
    }
    showMessage('Photo deleted successfully');
  }
}

function togglePaymentStatus(memberId, paymentDate) {
  if (!isAdminMode) return;
  
  const feeRecord = appData.weeklyFees.find(function(f) { return f.memberId === memberId; });
  if (!feeRecord) return;
  
  const payment = feeRecord.payments.find(function(p) { return p.date === paymentDate; });
  if (!payment) return;
  
  // Cycle through statuses: pending -> paid -> overdue -> pending
  if (payment.status === 'pending') {
    payment.status = 'paid';
  } else if (payment.status === 'paid') {
    payment.status = 'overdue';
  } else {
    payment.status = 'pending';
  }
  
  renderWeeklyFees();
  updateDashboardMetrics();
  showMessage('Payment status updated to ' + payment.status);
}

// PDF Export Functions (simplified for brevity)
function exportToPDF(type) {
  if (!window.html2pdf) {
    showMessage('PDF export library not loaded. Please refresh the page.', 'error');
    return;
  }

  showMessage('Generating PDF report...', 'info');
  
  const opt = {
    margin: 1,
    filename: 'ledo-sports-academy-' + type + '-report.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  let content = generateSimpleReport(type);

  const element = document.createElement('div');
  element.innerHTML = content;
  element.style.padding = '20px';
  element.style.fontFamily = 'Arial, sans-serif';

  html2pdf().set(opt).from(element).save().then(function() {
    showMessage('PDF report generated successfully!');
  }).catch(function() {
    showMessage('Error generating PDF report', 'error');
  });
}

function generateSimpleReport(type) {
  const totalDonations = appData.donations.reduce(function(sum, d) { return sum + d.amount; }, 0);
  const totalExpenses = appData.expenses.reduce(function(sum, e) { return sum + e.amount; }, 0);
  const netBalance = totalDonations - totalExpenses;

  return '<div style="text-align: center; margin-bottom: 30px;">' +
      '<h1 style="color: #1e3a8a; margin-bottom: 10px;">Ledo Sports Academy</h1>' +
      '<h2 style="color: #6b7280; margin-bottom: 5px;">' + type.charAt(0).toUpperCase() + type.slice(1) + ' Report</h2>' +
      '<p style="color: #6b7280;">Generated on ' + new Date().toLocaleDateString() + '</p>' +
    '</div>' +
    '<div style="margin-bottom: 30px;">' +
      '<h3 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 5px;">Academy Overview</h3>' +
      '<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 20px 0;">' +
        '<div style="text-align: center; padding: 15px; background: #f3f4f6; border-radius: 8px;">' +
          '<h4>Total Members</h4>' +
          '<p style="font-size: 24px; font-weight: bold; color: #1e3a8a;">' + appData.members.length + '</p>' +
        '</div>' +
        '<div style="text-align: center; padding: 15px; background: #f3f4f6; border-radius: 8px;">' +
          '<h4>Total Activities</h4>' +
          '<p style="font-size: 24px; font-weight: bold; color: #1e3a8a;">' + appData.activities.length + '</p>' +
        '</div>' +
        '<div style="text-align: center; padding: 15px; background: #f3f4f6; border-radius: 8px;">' +
          '<h4>Net Balance</h4>' +
          '<p style="font-size: 24px; font-weight: bold; color: ' + (netBalance >= 0 ? '#10b981' : '#ef4444') + ';">₹' + netBalance.toLocaleString() + '</p>' +
        '</div>' +
      '</div>' +
    '</div>';
}