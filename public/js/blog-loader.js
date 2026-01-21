document.addEventListener('DOMContentLoaded', () => {
    const blogGrid = document.getElementById('blog-grid');
    const searchInput = document.getElementById('blog-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const yearSelect = document.getElementById('year-select');
    
    // Determine language based on filename
    const isEnglish = window.location.pathname.includes('blogEN.html');
    const jsonPath = isEnglish ? 'files/blog-posts-en.json' : 'files/blog-posts.json';
    
    // Localization strings
    const texts = {
        notFound: isEnglish ? 'No posts found.' : 'Eşleşen yazı bulunamadı.',
        readMore: isEnglish ? 'Read More' : 'Devamını Oku',
        general: isEnglish ? 'General' : 'Genel'
    };

    let allPosts = [];
    let activeCategory = 'all';
    let activeYear = 'all';
    let searchQuery = '';

    // Fetch posts
    fetch(jsonPath)
        .then(response => response.json())
        .then(data => {
            allPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort new to old
            populateYearFilter(allPosts);
            renderPosts();
        })
        .catch(error => console.error('Error loading blog posts:', error));

    // Populate Year Dropdown
    function populateYearFilter(posts) {
        const years = [...new Set(posts.map(post => new Date(post.date).getFullYear()))];
        years.sort((a, b) => b - a); // Descending
        
        years.forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        });
    }

    // Render Posts
    function renderPosts() {
        blogGrid.innerHTML = '';

        const filteredPosts = allPosts.filter(post => {
            const postDate = new Date(post.date);
            const matchesCategory = activeCategory === 'all' || post.sub_team === activeCategory;
            const matchesYear = activeYear === 'all' || postDate.getFullYear().toString() === activeYear;
            const matchesSearch = post.title.toLowerCase().includes(searchQuery) || 
                                  post.content.toLowerCase().includes(searchQuery);

            return matchesCategory && matchesYear && matchesSearch;
        });

        if (filteredPosts.length === 0) {
            blogGrid.innerHTML = `<div class="col-12 text-center text-white"><p>${texts.notFound}</p></div>`;
            return;
        }

        filteredPosts.forEach((post, index) => {
            const card = document.createElement('div');
            // Check if image exists, otherwise use a placeholder or style differently
            // Note: In a real app we might check if file exists, here we verify if string is not empty
            // We use a default logo if image is missing/empty
            const imageUrl = post.image && post.image.trim() !== '' ? post.image : 'images/logo/auvLogo.png';
            
            // Truncate content for summary (strip HTML tags first)
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = post.content;
            const textContent = tempDiv.textContent || tempDiv.innerText || '';
            const summary = textContent.length > 150 ? textContent.substring(0, 150) + '...' : textContent;

            card.className = 'blog-card';
            // Staggered animation delay (max 1s to avoid too long waits)
            card.style.animationDelay = `${Math.min(index * 0.1, 1)}s`;
            
            card.innerHTML = `
                <div class="blog-card-image">
                    <img src="${imageUrl}" alt="${post.title}" onerror="this.src='images/logo/auvLogo.png'">
                    <span class="blog-date">${post.date}</span>
                    <span class="blog-category ${getCategoryClass(post.sub_team)}">${post.sub_team || texts.general}</span>
                </div>
                <div class="blog-card-content">
                    <h3>${post.title}</h3>
                    <p class="author"><i class="fas fa-user"></i> ${post.author}</p>
                    <p class="summary">${summary}</p>
                    <button class="read-more-btn" onclick="openBlogModal(${post.id})">${texts.readMore}</button>
                </div>
            `;
            blogGrid.appendChild(card);
        });
    }

    function getCategoryClass(category) {
        if (!category) return 'cat-general';
        const cat = category.toLowerCase();
        
        // Check Turkish names
        if (cat === 'yazılım' || cat === 'software') return 'cat-software';
        if (cat === 'elektronik' || cat === 'electronics') return 'cat-electronics';
        if (cat === 'mekanik' || cat === 'mechanic' || cat === 'mechanics') return 'cat-mechanic';
        if (cat === 'organizasyon' || cat === 'organization') return 'cat-org';
        
        return 'cat-general';
    }

    // Event Listeners
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');
            activeCategory = btn.dataset.filter;
            renderPosts();
        });
    });

    yearSelect.addEventListener('change', (e) => {
        activeYear = e.target.value;
        renderPosts();
    });

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderPosts();
    });

    // Modal Logic (Simple implementation)
    window.openBlogModal = function(id) {
        const post = allPosts.find(p => p.id === id);
        if (!post) return;
        
        const modalHtml = `
            <div class="blog-modal-overlay" onclick="closeBlogModal()">
                <div class="blog-modal-content" onclick="event.stopPropagation()">
                    <div class="modal-hero">
                        <img src="${post.image || 'images/logo/auvLogo.png'}" class="modal-hero-img" onerror="this.src='images/logo/auvLogo.png'">
                        <div class="modal-hero-overlay"></div>
                    </div>
                    <div class="modal-body">
                        <div class="modal-header-row">
                            <h2>${post.title}</h2>
                            <button class="close-modal-minimal" onclick="closeBlogModal()">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="modal-meta">
                            <span><i class="fas fa-user"></i> ${post.author}</span>
                            <span><i class="fas fa-calendar-alt"></i> ${post.date}</span>
                            <span class="badge bg-primary">${post.sub_team || texts.general}</span>
                        </div>
                        <div class="modal-text">
                            ${post.content}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Append to body
        const modalContainer = document.createElement('div');
        modalContainer.id = 'active-blog-modal';
        modalContainer.innerHTML = modalHtml;
        document.body.appendChild(modalContainer);
        document.body.style.overflow = 'hidden';
        
        // Parallax scroll effect with fade-out
        const modalContent = modalContainer.querySelector('.blog-modal-content');
        const heroSection = modalContainer.querySelector('.modal-hero');
        const heroImg = modalContainer.querySelector('.modal-hero-img');
        if (modalContent && heroImg && heroSection) {
            const heroHeight = heroSection.offsetHeight || 400;
            modalContent.addEventListener('scroll', () => {
                const scrollTop = modalContent.scrollTop;
                // Parallax movement
                heroImg.style.transform = `translateY(${scrollTop * 0.4}px)`;
                // Fade out: fully visible at 0, fully hidden at heroHeight
                const opacity = Math.max(0, 1 - (scrollTop / heroHeight));
                heroSection.style.opacity = opacity;
            });
        }
    };

    window.closeBlogModal = function() {
        const modal = document.getElementById('active-blog-modal');
        if (modal) {
            const overlay = modal.querySelector('.blog-modal-overlay');
            if (overlay) {
                overlay.classList.add('closing');
                // Wait for animation to complete, then remove
                setTimeout(() => {
                    modal.remove();
                    document.body.style.overflow = 'auto';
                }, 300); // Match CSS animation duration
            } else {
                modal.remove();
                document.body.style.overflow = 'auto';
            }
        }
    };
});
