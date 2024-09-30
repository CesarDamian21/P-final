/* function calcularHipoteca() {
    // Obtener valores de los campos
    const montoHipoteca = parseFloat(document.getElementById('montoHipoteca').value);
    const plazo = parseFloat(document.getElementById('plazo').value);
    const tasaInteres = parseFloat(document.getElementById('tasaInteres').value) / 100;
    const tipoHipoteca = document.getElementById('tipoHipoteca').value;
  
    // Calcular cuota mensual (fórmula simplificada)
    let cuotaMensual;
    if (tipoHipoteca === 'repayment') {
      // Fórmula para hipoteca con amortización
      cuotaMensual = (montoHipoteca * tasaInteres * Math.pow(1 + tasaInteres, plazo)) / (Math.pow(1 + tasaInteres, plazo) - 1);
    } else {
      // Fórmula para hipoteca solo intereses
      cuotaMensual = montoHipoteca * tasaInteres / 12;
    }
  
    // Mostrar resultado
    document.getElementById('resultado').textContent = `La cuota mensual es de: ${cuotaMensual.toFixed(2)}`;
  } */