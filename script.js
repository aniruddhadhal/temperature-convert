const calculatetemp = () => {
    const numberTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('tempi');
    const valueTemp = tempi.options[tempSelected.selectedIndex].value;

    const celTofah = (cel) => {
        let fahrenheit = Math.round((cel * 9 / 5) + 32);
        return fahrenheit;
    }
    const fahTocel = (fah) => {
        let celsius = Math.round((fah - 32) * 5 / 9);
        return celsius;
    }

    let result;

    if (valueTemp == "cel") {
        result = celTofah(numberTemp);
        document.getElementById('resultcont').innerHTML = `= ${result}°farnhight`;
    } else {
        result = fahTocel(numberTemp);
        document.getElementById('resultcont').innerHTML = `= ${result}°celsius`;

    }
}