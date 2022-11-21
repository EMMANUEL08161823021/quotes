function generate() {
    var quotes = {
        "__Bob Marley" : "Better to die fighting for freedom then be a prisoner all the days of your life.",
        "C.Joybell" : "“The unhappiest people in this world, are those who care the most about what other people think.”",
        "_David foster" : "“The truth will set you free. But not until it is finished with you.”",
        "_Nelson Mandela": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "_Walt Disney" : "The way to get started is to quit talking and begin doing.",
        "_Steve Jobs": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
        "_Eleandor Roosevelts": "If life were predictable it would cease to be life, and be without flavor.",
        "__James Cameron": "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        "__Oprah Winfrey": "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        "__John Lennon": "Life is what happens when you're busy making other plans."


    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}