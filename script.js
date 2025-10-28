import { animate, inView } from "https://esm.run/framer-motion";

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const sections = document.querySelectorAll('.scroll-target');

    sections.forEach(section => {
        inView(section, () => {
            animate(
                section,
                { 
                    opacity: 1, 
                    y: 0 
                },
                { 
                    duration: 0.8, 
                    ease: 'easeOut' 
                }
            );
            return (leavingInfo) => {



            }
        }, {
             margin: "-100px 0px -100px 0px"
        });
    });

    const heroTitle = document.querySelector('#hero h1');
    animate(
        heroTitle,
        { opacity: [0, 1], y: [-20, 0] },
        { duration: 1, ease: 'easeOut', delay: 0.2 }
    );
    
    const heroSubtitle = document.querySelector('#hero p');
     animate(
        heroSubtitle,
        { opacity: [0, 1] },
        { duration: 1, ease: 'easeOut', delay: 0.8 }
    );

});
