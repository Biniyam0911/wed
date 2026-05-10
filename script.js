document.addEventListener('DOMContentLoaded', () => {
    
    // Initial animations trigger for hero section
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);

    // Scroll Reveal Animation with Intersection Observer
    const revealElements = document.querySelectorAll('.section-reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Generate QR Code linking to Google Maps Search for the Venue
    const mapUrl = "https://maps.app.goo.gl/search/Polytechnic+College+Saris+Addis+Ababa";
    
    setTimeout(() => {
        if(typeof QRCode !== 'undefined') {
            const qrContainer = document.getElementById("qrcode");
            new QRCode(qrContainer, {
                text: mapUrl,
                width: 180,
                height: 180,
                colorDark : "#0a1510", // Dark green/black
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });
        }
    }, 500);

    // RSVP Form Submit handler
    const rsvpForm = document.getElementById('rsvp-form');
    if(rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = rsvpForm.querySelector('button');
            btn.innerText = 'Sending...';
            btn.disabled = true;
            
            setTimeout(() => {
                rsvpForm.classList.add('hidden');
                document.getElementById('rsvp-success').classList.remove('hidden');
            }, 1000);
        });
    }
});
