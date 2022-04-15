import React from 'react';

const DEFAULT_CAPTION = (
  <div>
    <div>
      <p>Trail Name: <b>OP</b></p>
    </div>
    <div>
      <p className="justify-content-start">
        Owl Podiatrist
        <br/>
        Over Packed/Over Powered
        <br/>
        Obnoxious Person <b>duh</b>
        <br/>
        Optimally Packed (i figured it out)
        <br/>
        Oh-jesus Pele
      </p>
    </div>
  </div>
);

const captions: { [s: number]: JSX.Element } = {
  0: DEFAULT_CAPTION,
  1: <p> This is a good visualization of the shitty conditions we hiked in. Look at that sun :(  </p>,
  2: <p> My backpack at the end of Oregon :) She was definitely in rough shape but she made it all the way from Campo to Leavenworth!! </p>,
  3: <p> My friend Lily and I went through this volcano-rock invested area and it looked so so so cool! </p>,
  4: <p> Me being particularly frustrated with the day </p>,
  5: <p> Walking on a lava field is <b>mad</b> fun y'all</p>,
  7: (
    <p>
      This picture I actually took on like a really shitty day
      that I was like done with trail and in pain and scared of
      fires and i missed my cat and i was sleep deprived because
      of mice jumping around at midnight and onto Hunter's forehead
      and most importantly I'd been walking through an exposed burn
      section (no sun tree protection), then I came up on this really
      lush portion here, and I stopped and realized that we really
      live in such a resilient and beautiful world. That even
      though we think things are all going to shit, the world can
      bounce back from a whole of destruction, and that the only
      variable is if we're there to see it.
    </p>
  ),
  8: <p> Me and my friend Nate enjoying a fantastic morning in Washington </p>,
  9: <p> Huckleberries!!!!!!!!!!!!!!! </p>,
  10: <p> Mount Hood was SO cool but I was struggling when I took this picture because I ate WAY WAY WAY too much food at the buffet so I legit thought I was about to throw up for like 5 miles on this tourist invested section and was very quickly gaining a migraine, but then ya boi powered thru and got it aha ;*</p>,
  11: <p> My first day after being reunited with my desert trail family :) </p>,
  12: <p> Blueberries on trail just hit so different. </p>,
  13: <p> A gorgeous day on the island of Cascade Locks for Trail Days</p>,
  14: <p> An ADORABLE cat we found at Trail Days :) </p>,
  15: <p> I swear Puffy just finds the most incredible things in the most random of places! </p>,
  16: <p> My first night camping with my desert trail family :) </p>,
  17: <p> These goobers always wanted to take serious photos together and I always tried to get them to do some goof shit so you know that I was STOKED to get this shot :)</p>,
  18: <p> I got by without getting stuck by a catcus but there were some CLOSE CLOSE CLOSE calls</p>,
  19: <p> bro this dog was so so cute and his partner was not doing too hot that day, I hope he's okay :( </p>,
  20: <p> joe kt one time told me that I was a whore for portrait mode and like ok fair enough but doesn't that look SO cool ??!? Like C'MONNNN I rule of third's'ed it and have the PCT logo still really nicely positioned in the frame and like ok ok i'm done</p>,
  21: <p> The Cinnabons rolling out </p>,
  22: <p> When I showed Hunter this picture he said that it was so nice that he was going to send it to his mom and that was probably the best compliment I've ever been given.</p>,
  23: <p> MOUSE!!!!! It was the fourth day and I climbed up on this tree because why not! And then I'm chilling out when this little boy starts squeaking at me all angry-like. I manage to get this incredible photo right before he came out and then started jumping on me and you KNOW that I got out of that tree RIGHT quick :( </p>,
  24: <p> A poorly constructed tent to remind myself how far I've come :) </p>,
  25: <p> This was in the desert when I first cowboy camped and got this fantastic silhouetted landscape shot (peep that moon too)</p>,
  26: <p> Backpacks lined up outside of Mom's Pie's to get that free pie babaaaaayyyyyyyy </p>,
  27: <p> haha i love this not only did I get Legend, one of the greatest trail angel/overall people in the world, in the middle of his famous good morning routine, but then we have Courtney, who is the most bad ass people I've ever had the luxury of meeting (although is a dolphin murderer ;p) and she is super into what's going on</p>,
  28: <p> Note: DO NOT DO THIS, this was a very very fast moving river and got a little desperate trying to cross it, and we actually managed to get halfway across this river and THEN found out that there was no way we could cross it all the way and then we realized that the water has getting higher because it was getting later in the morning and we THOUGHT that we weren't able to cross back and be STUCK but then we managed to hop over the way we came. I was god damn terrified at this point because Sydney got MAD MAD close to falling in at one point and I legitimately thought I was going to have a heart attack because we were pushing boulders to cry to create more of a path and we threw a Pele-sized rock into there that literally got swept up like it was a fucking leaf so i was like oh my jesus if she falls in it's like OVER over. But then we got back. and then walked along the river for half a mile. and then found a giant log stretched perfectly across the river. and then crossed it like a bridge. so yeah. that's my closest with death story ;p </p>,
  29: <p> This is the day that Reese's Speed was discovered: when you had a bag of reese's unwrapped and then they all melted because your bag becomes an oven especially if you're a human space heater but then they would all have melted together into this big oblong blob of reeses that I ate like it was a bar and that was so densely sugary that you would get this absolute insane burst of energy and because i'm a man of momentum, I would go absolutely flying down the trail. Good times.</p>,
  30: <p> That was the worst I've felt in a morning all trail. It was the 4th day and I was crazy fed up with it all and wanted to go home, but then I got to this sight here and that's when the clouds rolled in and then got all dark and gray and soooo windy and cloud and i was like broooooooooo this is exACTLY what I need right now. no but like fr fr it deadass reminded me of Massachusetts hiking and I like YOOOOOO this is MY turf now (and also reese's speed was this same day which probably contributed lmao) and passed every single person in my trail family :) </p>,
  31: <p> Bennett was telling me not to take a picture of him and to just have a bite of his huckleberry pie but then I got this amazing picture of him so take THAT </p>,
  32: <p> sometimes taking photos on trail was weird, because you were actively taking yourself out of your environment in order to focus on capturing it and a lot of times it was hard to figure out that balance. Because taking photos are legitimately a way I interact with and appreciate my surroundings on trail, so it was tough to find that balance I often found. </p>,
  33: <p> This is Hunter close to the end of the trail and it's incredible how deeply people's demeanors and overall composure changes from it all </p>,
  34: <p> Hehehe this was at the church that let us stay in their dorms and oh my god the owners were actually the most incredible people to host us</p>,
  35: <p> Mike's place was a CRAzy weird looking place but it was so fun because no one was there when we stayed the night and slept on the pool table and legitimately had one the best nights of sleep in my entire life on god</p>,
  36: <p> Sydney and Mara at the beginning of trail checking out an incredible view :) </p>,
  37: <p> "anyone wanna do a side hike" yeah guy i wanna side hike tf up away from u if u keep talkin like that</p>,
  38: <p> oh yeah this was the morning I did my first "bump" (not cocaine, but rather taking an instant coffee packet and instead of u know mixing it in some water or somet, pouring the dry grounds in your mouth and then frantically drink water) and I literally FLEW the 23 miles to Idyllwild because of it</p>,
  39: <p> actually aha this was same day where I said "good morning Lizard!" to my friend Lizard and she didn't respond and i was like uh bro?! and then she was like OH I thought you were saying good morning to the lizards bc i do that sometimes too!! which ok fair enough but then a few days later I saw her at this water spot and I was like good morning Lizard! and she was like omg hello! and then I was like oh. wait shit my bad I was actually talking to that lizard down there, omg wait did u think i meant. ohhh bro haha no I didn't mean hello to you, but good to see you too !!  </p>,
  40: <p> Nate took pictures of everyone and was always smiling but never asked to get pictures of himself so I had to get this awesome one on top of San Jacinto </p>,
  41: <p> breh it was dryer than my deadpan sense of humour out there </p>,
  42: <p> Aww this was the sick river spot we all chilled at for like half the day!</p>,
  49: <p> hehehe little wormy boy </p>,
  50: <p> We were in Goat Rocks Wilderness, absolutely astounded by the amazing views when we came across the view of a forest fire blooming in the distance. You can just see everyone's shock and awe of this painfully beautiful scene. </p>,
  51: <p> Mount Rainier is so incredible. This was right before the Knife's Edge section! </p>,
  53: <p> Me, Hunter, and Bryce decided to night hike sometime in the 2nd week and then were so tired afterwards we just plopped down on this beach but then were surprised by this outstanding sunrise the next morning!</p>,
  54: <p> When the raven speaks you must listen </p>,
  55: <p> Knife's Edge in all its glory </p>,
  57: <p> Hunter was REALLY enjoying Knife's Edge :) </p>,
  59: <p> Radio in a moment of solitude </p>,
  62: <p> Bryce was probably one of my favorite people in all of trail. I LOVED bumping into him in towns and having the funniest conversations :) </p>,
  65: <p> Burn areas are really depressing. Straight up. But it's really cool seeing how many things can grow out of those burn sections. There was this one stretch where all you could see was burned trees and sand and it was so depressing until I got to this one place where I saw flowers growing. Things have to burn, everything is temporary. But at least there is some solace in knowing that everything is always growing too. I got this nice shot highlighting that contrast. </p>,
  66: <p> bloooooooooobs in Washington were everywhere it was ridiculous </p>,
  67: <p> and I thought 500 miles was tough lmao </p>,
  68: <p> I don't know why, but I am in love with how this freshly rained-on curved road looks in contrast with the landscape </p>,
  69: <p> I walked this lonely road... because in hikertown Kevin gave me a Fourloko and then I was operating at 0.25x speed and everyone left without me :( </p>,
  72: <p> This is Cheez-it! He was 70-something and I saw him again pretty close to the end in Washington! He said he had been attempting the PCT every single year for the past 7-something years, getting further and further. I really hope he made it, because he seemed so determined to do it this year. It's absolutely incredible what people can do when they put their minds to it.</p>,
  81: <p> Sydney enjoying one of the first views we were graced with in the Sierra </p>,
  82: <p> Sydney absolutely powering through this fantastic view of Mount Rainier </p>,
  83: <p> Nate, loving life </p>,
  86: <p> All of the hikers who did a sunrise hike to get to the top of Mount Whitney for Father's Day :) </p>,
  87: <p> The Cinnabons climbed the tallest mountain in the mainland US! </p>,
  95: <p> Why do you think we were called the Cinnabons lol </p>,
  101: <p> Picca :) </p>,
  108: <p> The most accurate representation of hiker culture I can offer </p>,
  112: <p> We got yelled at for doing this because this is John Muir's hut but fuck that racist piece of shit so it's okay </p>,
  113: <p> Lily called this the most romantic part of trail, I'm inclined to agree </p>,
  115: <p> Inflatable sleeping pads have multiple uses </p>,
  117: <p> This was a week or two before the end of trail and god. look how tired yet happy we all are </p>,
  119: <p> I had this weird fascination with taking pictures of people taking pictures of things </p>,
  121: <p> At 5:30am this water was so still it felt utterly zen </p>,
  131: <p> do NOT cowboy camp on the peak of Cutthroat Pass. That was my most miserable night on trail by far </p>,
  143: <p> If I could finish trail with the experience I had (none), you could absolutely do it too </p>,
  152: <p> this picca screamed at me then did this. like sir that is a ball you are in right now </p>,
  153: <p> This is my favorite picture from trail. period. The colors, the clouds, the lighting on the mountains, the valley to the right, the smooth gradient hills. UGH i cannot. I may actually try to frame this photo. </p>,
  156: <p> The day after we finished trail and had to hike back it got COLD cold to the point where we saw a lot of frost like this. </p>,
  161: <p> Nate and I playing finger jousting </p>,
  162: <p> Chipmunk! Don't feed them please </p>,
  164: <p> Sydney in a rare moment of not being a complete dumbass (like me) </p>,
  165: <p> The kindness of strangers I experienced was absolutely mind-blowing. </p>,
  166: <p> This road was completely closed when we were walking on it so instead of getting a hitch, we ended up getting picked up by squad cars and essentially emergency evacuated </p>,
  172: <p> Nobody knew how amazing trail would be. No one could even fathom the journey at the beginning, but then we all made it. Everyone in this photo I met in the first week, they were my first trail family and even though we got separated and had terribly challenging days, we picked ourselves up and then continued on, because at the end of the day, we knew it would be  worth it. </p>,
  173: <p> "now do a funny one" apparently means pick up and drop OP :^( </p>,
  174: <p> Ponyboy was the best trail angel on trail by far. So many hikers had their asses saved by Gladys (his van) and he helped everyone figure out all of their ride situations around the fires. </p>,
  175: <p> When smoke started rolling in and then it started raining ash. Literally felt like an apocalyptic movie </p>,
  181: <p> such a small pine cone, right ?! </p>,
  182: <p> I thought a lot about my Kung Fu training on trail, and I have a lot of different things I could say, but I guess to keep it concise: I miss the forms the most about Kung Fu. When I was growing up and going through the training I remembered that I would constantly wish that I were learning more fighting and self-defense concepts. Things I could actually use. But regardless, my curriculum was focused on perfection of forms, movements, and posture. Now, what I miss most is that. There was something so beautiful about taking this literally piece of art and being able to reproduce it to some level of satisfaction of a trained martial artist. When I performed those forms, I would be actively participating in the history that accumulated in them. Doing that was just so incredibly satisfying and I blame my Kung Fu training for allowing me to thrive so well on trail. Flexibility, overall strength, and, most importantly, mental fortitude were EXACTLY what I needed to get through the experience and I thank everyone who aided in that process for letting my life take shape in this uniquely cohesive way. </p>,
  183: <p> what would you do if someone told you there was only room left in the trunk where all the backpacks were </p>,
  184: <p> Mike's Place was so much crazily better without Mike actually being there </p>,
  185: <p> Thank you Sifu Tarbell for helping me grow into the person I wanted to be </p>,
};

export default captions;
