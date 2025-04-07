document.addEventListener('DOMContentLoaded', function() {
    
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const screen3 = document.getElementById('screen3');
    
    
    const corn = document.getElementById('corn');
    const machine = document.getElementById('machine');
    
    
    corn.classList.add('draggable');
    
    
    corn.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', 'corn');
        
        document.body.classList.add('dragging');
    });
    
    
    corn.addEventListener('dragend', function(event) {
        
        document.body.classList.remove('dragging');
    });
    
    
    machine.addEventListener('dragover', function(event) {
        event.preventDefault();
    });
    
    machine.addEventListener('drop', function(event) {
        event.preventDefault();
        
        
        document.body.classList.remove('dragging');
        
        
        screen1.classList.remove('active');
        screen2.classList.add('active');
        
        
        setTimeout(function() {
            screen2.classList.remove('active');
            screen3.classList.add('active');
            
            
            const popcornGuy = document.getElementById('popcorn-guy');
            
            
            const originalTransform = 'translate(-50%, -50%)';
            
            
            popcornGuy.style.transition = 'transform 1.5s ease-out';
            popcornGuy.style.transform = `${originalTransform} scale(0.01) rotate(0deg)`;
            
            
            void popcornGuy.offsetWidth;
            
            
            setTimeout(function() {
                popcornGuy.style.transform = `${originalTransform} rotate(720deg)`;
            }, 10);
        }, 1500);
    });
    
    
    screen3.addEventListener('click', function() {
        screen3.classList.remove('active');
        screen1.classList.add('active');
    });
});