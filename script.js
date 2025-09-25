 // Menú móvil
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Tabs de ejemplos de código
        const tabs = document.querySelectorAll('.tab');
        const codeBlocks = document.querySelectorAll('.code-body pre');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remover clase active de todas las pestañas
                tabs.forEach(t => t.classList.remove('active'));
                // Añadir clase active a la pestaña clickeada
                this.classList.add('active');
                
                // Ocultar todos los bloques de código
                codeBlocks.forEach(block => {
                    block.style.display = 'none';
                });
                
                // Mostrar el bloque de código correspondiente
                const language = this.getAttribute('data-language');
                document.getElementById(`${language}-code`).style.display = 'block';
            });
        });

        // Botón copiar código
        document.querySelector('.code-actions button').addEventListener('click', function() {
            const activeCode = document.querySelector('.code-body pre[style="display: block;"]');
            const codeText = activeCode.textContent;
            
            navigator.clipboard.writeText(codeText).then(() => {
                const originalText = this.textContent;
                this.textContent = '¡Copiado!';
                
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        });