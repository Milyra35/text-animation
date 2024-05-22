window.addEventListener("DOMContentLoaded", function() {

    function generateRandomString(length) 
    {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let randomString = '';

        for (let i = 0; i < length; i++) 
        {
            randomString += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return randomString;
    }

    function changeText()
    {
        let section = document.getElementById("text");
        let p = document.createElement('p');
    
        section.addEventListener("mousemove", function(event) {
            p.textContent = generateRandomString(2000);
            section.appendChild(p);
        });
    }

    changeText();
})