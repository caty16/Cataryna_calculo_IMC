const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    /* Previne o comportamento padrão do evento submit do JS, ou seja,
    impede o recarregamento da página */
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    if (!isNaN(bmi)) {
        const value = document.getElementById('value');
        let description = '';
        let imageResult = document.getElementById("imgResult")
        const selectOptions = {
            option1: 1,
            option2: 2
        };
        let select = document.querySelector('input[name="ageGroup"]:checked').value;
        console.log("select: ", select)
        if (select == selectOptions.option1){
            description = adultImcCalculator(bmi).description;
            imageResult.src = adultImcCalculator(bmi).imageResult;
        }
        else if(select == selectOptions.option2){
            description = oldImcCalculator(bmi).description;
            imageResult.src = oldImcCalculator(bmi).imageResult;
        }

        value.classList.add('attention');

        document.getElementById('infos').classList.remove('hidden');

        

        value.textContent = bmi.replace('.', ',');
        document.getElementById('description').textContent = description;
    }

});

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calculate').click();
    }
});

function adultImcCalculator(bmi){
    if (bmi < 18.5){
        return {
            description: 'Cuidado! Você está abaixo do peso!',
            imageResult: 'imgs/abaixo_do_peso.png'
        }
    } 
    if (bmi >= 18.5 && bmi < 25) {
        //value.classList.remove('attention');
        //value.classList.add('normal');
        return {
            description: "Você está no peso ideal!",
            imageResult: 'imgs/normal.png'
        }
        
    }
    if (bmi >= 25 && bmi < 30) {
        return {
            description: "Cuidado! Você está com sobrepeso!",
            imageResult: 'imgs/acima_do_peso.png'
        }

    }
    if (bmi >= 30 && bmi < 35) {
        return {
            description: "Cuidado! Você está com obesidade moderada!",
            imageResult: 'imgs/Obesidade_I.png'
        }
    }
    if (bmi > 35 && bmi < 40) {
        return {
            description: "Cuidado! Você está com obesidade severa!",
            imageResult: 'imgs/Obesidade_II.png'
        }
    }
    if (bmi >= 40) {
        return {
            description: "Cuidado! Você está com obesidade morbida!",
            imageResult: 'imgs/Obesidade_II.png'
        }
    }
}

function oldImcCalculator(bmi){
    if (bmi < 22){
        return {
            description: 'Cuidado!Alerta de idoso abaixo do peso',
            imageResult: 'imgs/abaixo_do_peso.png'
        } 
    }

    if (bmi >= 22 && bmi < 27){
        return {
            description: 'Idoso adequado ou etrófico',
            imageResult: 'imgs/normal.png'   
        }
    }

    if (bmi >= 27){
        return {
            description: 'Alerta de idoso em sobrepeso',
            imageResult: 'imgs/Obesidade_I.png'   
        }
    }
}