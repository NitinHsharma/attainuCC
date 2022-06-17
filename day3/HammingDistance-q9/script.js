var submitBtn = document.getElementById('submit');

    submitBtn.addEventListener('click', function () {
        var inputString = document.getElementById('inputString').value;
        var [firstString, secondString] = inputString.split(',');
       
        firstString = firstString ? firstString.trim() : "";
        secondString = secondString ? secondString.trim() : "";

        if (firstString.length == 0 || secondString.length == 0 || firstString.length != secondString.length) {
            document.getElementById('result').innerText = 'Please enter two strings';
            return;
        }

        var hammingDistance = 0;
        for (let index = 0; index < firstString.length; index++) {
            const charOfFirstString = firstString[index];
            const CharOfSecondString = secondString[index];
            
            if (charOfFirstString != CharOfSecondString) {
                hammingDistance++;
            }

        }

        document.getElementById('result').innerText = `Hamming distance is ${hammingDistance}`;


    });