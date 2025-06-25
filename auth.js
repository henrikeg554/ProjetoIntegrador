document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const terms = document.getElementById('terms').checked;
            
            if (password !== confirmPassword) {
                showError('As senhas não coincidem');
                return;
            }
            
            if (!terms) {
                showError('Você deve aceitar os termos de serviço');
                return;
            }
            
            setTimeout(() => {
                window.location.href = 'login.html?success=Cadastro realizado com sucesso! Por favor, faça login.';
            }, 1000);
        });
    }
    
    function showError(message) {

        const existingError = document.querySelector('.error-message.global');
        if (existingError) existingError.remove();
        
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message global';
        errorElement.textContent = message;
        
        const form = document.querySelector('form');
        form.insertBefore(errorElement, form.firstChild);
        
        const style = document.createElement('style');
        style.textContent = `
            .error-message.global {
                color: var(--error-color);
                background-color: rgba(211, 47, 47, 0.1);
                padding: 15px;
                border-radius: var(--border-radius);
                margin-bottom: 20px;
                text-align: center;
                font-weight: 600;
            }
        `;
        document.head.appendChild(style);
    }
});