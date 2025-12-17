function asuraGenelTemizlik() {
    
    const allWFulls = document.querySelectorAll('div.w-full');
    allWFulls.forEach(div => {
        const text = div.innerText || "";
        
        if (text.includes("ASURA+ Premium") || text.includes("Unlock Premium features")) {
            div.remove();
        }
    });

    
    const styleTargets = document.querySelectorAll('div[style*="rgb(15, 15, 35)"]');
    styleTargets.forEach(el => {
        const parentBanner = el.closest('.w-full');
        if (parentBanner) {
            parentBanner.remove();
        }
    });

    const targetSelector = 'div.fixed.inset-0.bg-gray-900.bg-opacity-75.flex.items-center.justify-center.z-50.p-4.overflow-y-auto';
    const overlay = document.querySelector(targetSelector);
    
    if (overlay) {
    
        const parent = overlay.closest('div[class*="jsx-"]');
        if (parent) {
            parent.remove();
            console.log("Spesifik pop-up katmanı imha edildi.");
        } else {
            overlay.remove();
        }
    }

    
    document.body.style.setProperty('overflow', 'auto', 'important');
    document.documentElement.style.setProperty('overflow', 'auto', 'important');
    document.body.style.setProperty('pointer-events', 'auto', 'important');
}


asuraGenelTemizlik();


const observer = new MutationObserver(() => {
    asuraGenelTemizlik();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});


setInterval(() => {
    if (document.body.style.overflow === 'hidden') {
        document.body.style.setProperty('overflow', 'auto', 'important');
    }
}, 1000);