const model ={
}
document.getElementById('fjelltur').innerHTML =`
<h3> FJellTUR!</h3>
<table>
             
            <tr>
                <th>Titel</th>
                <th>Skuespiller</th>
                <th>Sjanger</th>
                <th>Årsgang</th>
                <th>Vurdering</th>
                
                
            <tr>
                
            </table>

            <button onclick="model.page='newFjell'; updateView();">Legg til nytt Fjell</button>
            
    
            `;