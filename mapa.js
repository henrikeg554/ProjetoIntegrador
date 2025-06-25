document.addEventListener('DOMContentLoaded', function() {
    const mapElement = document.getElementById('map');
    
    if (mapElement) {

        mapElement.innerHTML = `
            <div style="width:100%; height:100%; background-color:#e0e0e0; display:flex; align-items:center; justify-content:center; color:#666;">
                <div style="text-align:center;">
                    <i class="fas fa-map-marked-alt" style="font-size:3rem; margin-bottom:15px;"></i>
                    <p>Mapa interativo será exibido aqui</p>
                    <small>Localize o endereço para retirada</small>
                </div>
            </div>
        `;
        
    }
});