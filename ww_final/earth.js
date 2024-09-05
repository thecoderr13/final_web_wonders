function fadeOut(element, duration) {
    element.style.opacity = 0;
    setTimeout(() => {
        element.style.opacity = 0;
    }, duration);
}

function fadeIn(element, duration) {
    element.style.opacity = 1;
    setTimeout(() => {
        element.style.opacity = 1;
    }, duration);
}

function changeContentAndImage(imagePath, planetName) {
    const mainImage = document.getElementById('mainImage');
    const sideDiv = document.getElementById('sideDiv');

    // Define the content for each planet
    const content = {
        'Mercury': "Mercury’s life expectancy is a hard 0%, Imagine a place where you’d get roasted during the day and freeze at night—like a cosmic BBQ and deep freeze combined. It's not so much a planet as a galactic mood swing. Plus, no atmosphere means you’re getting blasted by solar radiation like a cosmic tanning bed on max settings. So, unless you’re a fan of extreme sports in extreme conditions, Mercury is a no-go zone. Swipe left and save yourself the heatstroke and frostbite.",
        'Venus': "Venus, you’re rocking a 1% chance of life, and that’s being optimistic. If you thought a sauna was intense, Venus is like an interplanetary pressure cooker, with surface temperatures hot enough to melt lead and clouds made of sulfuric acid. So, while Venus does have some stellar sunsets (if you can survive the clouds), it’s not exactly the place for a chill day out. Life here is a no-go unless you’re into extreme chemical reactions.",
        'Earth': "Earth is the MVP with a 100% chance of life, and it’s not just because it’s our home. We’ve got breathable air, drinkable water, and weather that isn’t trying to kill us. Plus, our planet’s vibes are top-tier with memes, coffee shops, and animal videos. We’ve got everything you need to survive and thrive, from oceans and mountains to the best pizza joints. Earth’s the ultimate life-support system; it’s where life’s at, where you’re at, and where the good vibes never end.",
        'Mars': "Mars is sitting at a hopeful 10% chance of life. While it’s a chilly desert with a dusty atmosphere, there’s water ice and a lot of potential—think of it as the cosmic version of a fixer-upper. Elon Musk is busy trying to turn it into a space Airbnb, and who knows? With a little terraforming, Mars might just become the next big thing. For now, it’s a bit too frosty and barren for a regular life, but if you’re into space travel and adventure, it’s definitely worth a follow-up.",
        'Jupiter': "Jupiter’s chance of hosting life is about 2%, and only if you’re into extreme conditions. This gas giant is like the ultimate cosmic rollercoaster—intense gravity, fierce storms, and no solid surface to stand on. With winds that could rival the wildest storm you've ever seen and a magnetic field that’d give you the chills, Jupiter’s more of a wild ride than a vacation spot. If you’re dreaming of floating in the clouds or hanging out with giant storms, Jupiter’s your jam.",
        'Saturn': "Saturn’s rocking a 5% chance of life, but only if you like a side of rings with your galactic drama. This gas giant is famous for its stunning rings, but it’s also a frosty, windy place with a lot of clouds and not much solid ground. Life might have a shot if you’re okay with extreme cold and high winds. Think of Saturn as the ultimate space glamour with no comfort. It’s a beautiful but inhospitable destination, perfect for a space selfie but nothing else.",
        'Uranus': "Uranus is sitting at a solid 1% for life, and that’s mainly because it’s a bit of a weird one. With its sideways tilt and atmosphere full of methane, it’s like the planet’s got a permanent case of the giggles. You’d be floating around in a chilly gaseous ocean. If you’re into the unconventional, this icy planet’s your spot, but don’t expect a cozy living arrangement. Uranus is quirky, but it’s more of a galactic oddball than a life-sustaining wonder.",
        'Neptune': "Neptune’s chances of life are around 2%, mostly due to its extreme weather and icy conditions. It’s a dark, windy, and frigid place with storms that could rival any tropical hurricane. Neptune is like that one friend who’s always on the edge of chaos—winds over 1,200 mph and temperatures that make your freezer look like a sauna. It’s not exactly inviting for life, but if you’re up for a cosmic thrill ride with a hint of frostbite, Neptune might just tickle your fancy.",
        'Pluto': "Pluto’s hanging out at a hopeful 5% for life, not because it’s particularly inviting, but because it’s the adorable underdog. It’s icy, small, and far from the Sun, but it has a heart-shaped feature and a diverse terrain that keeps things interesting. Think of Pluto as the cute, distant relative that you only see during the holidays. It’s cold and far out, but there’s a certain charm to it. Life might have a shot if you’re into extreme cold and tiny, icy worlds."
    };

    // Fade out the current content
    fadeOut(sideDiv, 1000);

    // Update the content and image after the fade-out effect
    setTimeout(() => {
        sideDiv.textContent = content[planetName];
        mainImage.src = imagePath;
        // Fade in the new content
        fadeIn(sideDiv, 1000);
    }, 1000); // Matches the fade-out duration
}
