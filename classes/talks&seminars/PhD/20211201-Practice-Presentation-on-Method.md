# The Economy of Intelligence, the Case of YouTube Recommender Algorithm

Hi everyone and welcome to my practice presentation.
As you can read in the I changed the title of my PhD, to the economy of Intelligence. This new title came to me in the past month, and I would like that you keep the economy in this context as a provocation so that we can discuss it later at the end of the presentation.

I will start this presentation giving you some theoretical background on what I am currently doing by discussing the relationship between AI and labour from an Marxist autonomist perspective touching upon _Immaterial Labour_.

Afterwards I'll discuss some specific text on how Youtube algorithms work, from more general perspective of their _captivating_ quality to the more specific algorithms that govern its recommender system.

I'll be than discussing how I used critical debugging as a research method.

Finally I'll come to the provocation already mentioned before explaining how I came to think about it and would could be discussions points.

## Searching for Surplus, on Critical Debugging as a Method

### [What is Contemporary AI and how does it work]() [SLIDE]

I hope that almost everyone here has minimal knowledge how AI systems work, but for those who don't I'll quickly explain it.
The current technology that surrounds AI is composed by two key elements availability of large datasets and access to parallel computing: GPU.
Machine Learning this new branch of AI is method by which it is possibble to "train" machines by feeding them large amount of data onto which, thanks to parallel computing, a statistical analysis is made so that the machine when ever exposed to a single instance of the same kind of data is able to make a prediction about it. That is way big part of AI system are built for analysis mainly for visual recognition: faces, images, digits, etc. Of course not only for such task, because synthesis has become another strength of ML based software, nevertheless this kind of synthesis is still based on analysis and prediction.
the major take here is that such AI systems require large amount of data.

### [labour happens in and on your machine]() [SLIDE]

I started this PhD with the intention to understand whose intelligence is artificial intelligence, the title in itself gives a way my position by acknowledging that the construction of AI systems is based on the accumulation of vast amounts of data, intelligence is not synthesized but rather extracted.

But what is exactly extracted?

First and foremost what is the meaning of such word today? Sandro Mezzadra and Brett Neilson attempt to expand the meaning of such term looking beyond its literal definition.

> Understood in this expanded sense, extraction involves not only the appropriation and expropriation of natural resources but also, and in ever more pronounced ways, processes that cut through patterns of human cooperation and social activity (Mezzadra & Neilson, 2017, pg. 194) @mezzadra2017  [SLIDE]

To explain this quote I will refer to one of the example they give for this new understanding of extraction. They refer for example to new mode of extraction that happens according to them in some warehouses in China, were young migrants are employed to game for hours non stop in order to extract in game currency to be exchanged with other player for real world currency. Such operation is called "Gold Farming", it is a practice commonly used as side hustle or as main occupation for unemployed. But as Neilson and Mezzadra argue by organizing gamers it is possible to make it also a profitable business. What the authors what to point at in this case is not so much how unemployed might use such gaming tactics to raise money for their livelihood, they look specifically at organized labour, where the exploited workforce is used to create a surplus to the benefit of the owner of the gaming machines.
While in this case extraction directly refers to the synthesized virtual action of "gold farming", in other digital context, extraction happens differently. In their text they point to the accumulation and storage of user generated data. They shortly discuss how social media users contribute to this extractive practices, and I would like to expand on this topic a bit. To do so we will need to understand what is labour especially in the digital context, and how it relates to the concept of extraction.

First and foremost, there is _Arbeit_ und _Arbeit_, or translated in english, there is work and there is labour. Marx in his book Capital by the means of historical materialism, and the constant use of dialectics has written quite a famous critique of capitalism. One of such dialectics Work only be explained through another dialectic: value and use-value.

Use-value describes the value of an object for the owner of the object. For example shoes have use-value, they can be used to walk without getting the feet injured. But shoes have also value a quantitative measure that represents the labour time to produce them plus the surplus for the capitalist.

> Labour which creates use-values and is qualitatively determined is called work as opposed to labour; labour which creates value and is only measured quantitatively is called labour, as opposed to work (Fuchs, 2014, 26 | citing Marx, 1867c, 138)@fuchs2014 [SLIDE]

Therefore work is what creates use-value for the worker, for example in the current society means of substinence to pay for rent, food etc. Everything else is considered as labour, so to say to create value that the capitalist can turn into capital; so called surplus-value.

While Marx analyzed labour and work only in its canonical form Italian Marxists Autonomist Maurizio Lazzarato expanded the concept of labour including its alternative manifestation as immaterial labour. It is quite important to discuss this point as it is the way to connect labour to the digital extractivism.

From his point of view _Immaterial Labour_

> [...] On the other hand, as regards the activity that produces the “cultural content” of the commodity, immaterial labor involves a series of activities that are not normally recognized as “work” — in other words, the kinds of activities involved in defining and fixing cultural and artistic standards, fashions, tastes, consumer norms, and, more strategically, public opinion. (Lazzarato, 1996, 1) [SLIDE]

The main take here is the idea that immaterial labour consists in a series of activities that are not recognized as labour. Moreover Tiziana Terranova explains its virtual qualities

> However, in the young worker, the “precarious worker,” and the unemployed youth, these capacities are “virtual,” that is they are there but are still undetermined. This means that immaterial labor is a virtuality (an undetermined capacity) that belongs to the postindustrial productive subjectivity as a whole. (Terranova, 2000, 41) @terranovaFreeLaborProducing2000 [SLIDE]

Along the ideas of the previous authors it is possible to foresee how immaterial labour takes place within social media platform.

First and foremost using social media platforms could be understood as a form of work to create use-value, in this case a non physical use-value in the form of social relations and communication. But while a part of the time spent on the platform it is used for the use-value, another big part of the time is used to create a surplus-value for the owner of the platform; the owners of the platform for sure know quantitatively how many minutes a day a person should spend on their platforms in order for it to be profitable, that is probably also hardcoded in the algorithms [themselves](../diss_notes/practice/sounding-out-hovering/observations/debugging/debugging.md). [SLIDE]
While the work invested for the use-value is clear to the user the labour to create surplus-value is concealed from them, and it is concealed so perfectly that the user is convinced to only create use-value for its own sake. The owners of the platforms are very well aware of the "still undetermined, virtual," capacities of their users and use the leverage of a "free" service to access the potential of such virtuality and turn it into surplus value: labour not recognized as labour.

The ways by which users are "coerced" into immaterial labour in this case is the use of what Nick Seaver calls captivating algorithms (Seaver, 2019), so to say algorithmic technologies made to keep the users as long as possible on the platform, to name some of them: infinite scrolling and infinite playlists. Moreover in his text the author specifically discusses recommender systems as algorithmic means for the captivation of user on the platform.
Recommender systems are the site for the extraction of immaterial labour, and this extraction is twofold:

1. an extraction for extraction itself, so to say a feedback loop where the information extracted is used to better the AI recommender system, and therefore to captivate the user even more
2. the extraction for the surplus-value for the platform owner, the same information as before, but thanks to the ubiquitous nature of digital data, the same information can be collected stored and sold in the advertising market

> Capital's problem is how to extract as much value as possible (in the autonomists’ jargon, to “valorize”) out of this abundant, and yet slightly intractable, terrain. (Terranova, 2000) [SLIDE]

In this case the metaphorical terrain that Terranova is referring to is the landscape of user interactions: playing or stopping a video, hovering over a thumbnail or simply closing the window, are recorded actions that are then fed into the AI recommender system, and a copy of it is stored to create a digital fingerprint of the user that can be sold to advertisers.

Mezzadra and Nielson, recognize that the extractive quality of contemporary capitalism continues the formation of what David Harvey calls the prehistory of capital: Primitive Accumulation. The latter renamed accumulation by dispossesion by Harvey, describes the predatory practices in place during colonialism, when European settlers managed to get ahold of territories by claiming untouched land as free to be turned into property, following the Lockian "labour theory of property".
In a similar manner contemporary extractive practices of metadata extraction from social media users relies on the fact that the production of metadata from the user is not recognized as labour, and is therefore free to be turned into property by the owner of the platform. This "violent" separation of the worker from the fruits of its own labour is what constitutes, according to Harvey as the prehistory of capital: a form of primitive accumulation. Therefore while the user is convinced to only generate use-value for its own sake, in the background its virtual ability, its immaterial labour, to produce metadata is accumulated and privatized by the owner of platform to create surplus-value. The key take here is that this form of immaterial labour takes materially place in and on the computer, making the latter the material site for the extractive practice.

Now that it is somehow clear how the extractive process happens on such platforms, the questions for me remains: what is extracted, how and when does it happens is not cleared yet. How can I with debugging tools trace the prehistory of recommendation, the prehistory of this AI, so to say when the metadata is separated from the worker?

before getting into my method, critical debugging, I'd like to be more precise on what is extracted and how it relates to intelligence, the how and when will be discussed later.

### [the fresher the smarter]() [SLIDE]

> Although explicit feedback mechanisms exist on YouTube (thumbs up/down, in-product surveys, etc.) we use the implicit feedback of watches to train the model, where a user completing a video is a positive example. (Covington et al., 2016, 2) @covington2016
>
> [...]
> Recommending this recently uploaded (“fresh”) content is extremely important for YouTube as a product. We consistently observe that users prefer fresh content, though not at the expense of relevance. [SLIDE]

In their paper "Deep Neural Network for YouTube Recommendations" Paul Covington, Jay Adams and Emre Sargin describe the inner logic of the recommender system that governs YouTube as platform. The paper written within the wall of Google in Mountain View points to a very interesting concept, often also repeated from the YouTube CEO, Susan Wojcicki, the idea of __Freshness__, and that users prefer fresh content.
Therefore their machine learning algorithm is built to contrast the "implicit bias toward the past" (Covington et al., 2016, 3) in order to show newly uploaded content, that reflects the past. The reverberation in the real world of such a choice means that content creators in order to maintain visibility on the platform need to create content regularly; a practice that the YouTube academy pushes to all their students. I can confirm this through my own experience in participating in this academy, the main take out of it is that if you want to generate revenue you need to create as much content as possible, creating a sort of feedback loop, where the creator according to the metrics can adjust the content of his videos.
This idea of feedback is also used in the construction of the smart recommender algorithm; the more information about the watching habits it gathers the better it becomes at generating recommendation that are both __fresh__ and relevant.

It is the idea of the passive activity of watching that sparks my curiosity, because while the verb implies passivity, watching on youtube has become a very active endeavour: actively searching for a video, scrolling to find a video, scrolling the timeline in a video, stopping the video, resuming the video, making it louder or mute are all activities that are part of the concept of watching, basically watching to be watched, a perverse form o voyeuristic surveillance.

> However for the final determination of the effectiveness of an algorithm or model, we rely on A/B testing via live experiments. In a live experiment, we can measure subtle changes in __click-through__ rate, __watch time__, and many other metrics that measure user engagement. [SLIDE]

The importance of __fresh__ content relating to the context of this presentation is crucial because, its idea and how it is materialized in the world has a big influence in how users are captivated by the recommender system. The more content is created the more the recommender system can create __fresh__ playlist. The better the playlist the better the user will spend time on the platform, that betters the recommender system, that betters the playlist, that betters the recommender system, that better the playlist, and so on and so on...

And here an argument can be made that not only users are captivated, but creators as well. The latter grown up in society that heralded virality as the shortcut to success will soon face the fact that youtube dropped that idea long ago to engage with a model that requires the creators to constantly produce content.

As this slide tells you the engagement is what is measured to better the recommender algorithm, and while all the dimension of this vector are not known the paper from the google scholars points to a couple of metrics: watchtime and click-through. Those are two let's call them behavioural tokens, that are extracted in the form of free labour from the user, therefore, those where the two metrics I wanted to explore in my practice to understand the when and how such metrics are extracted, to be bale to timely asses their extraction and to pin point in the codebase when such extraction happens, to surgically be able to tell which line of code contributes to the extraction.

Therefore I'd like to start by letting you listen to watchtime [perf]

### [Searching for Surplus, on Critical Debugging as a Method]() [SLIDE]

This part of the presentation will be quite anecdotal as I will describe a method of which I neither searched nor now about is existence as a method. What I can say repeating what I already told you in my past presentation is that it encompasses some methods listed by Kitchin:

* Examining pseudo-code/source code
* Reflexively producing code
* Reverse engineering
* Examining how algorithms do work in the world => to do this I took classes at the youtube academy, and collected evidence of algorithm imaginaries from youtube users

In addition to that the code I produced turned into a sort of soundscape for a direct sonic feedback of the working of the recommender system.

For those who are new here, and in order to not be to repetitive for the other who already attended my practice presentation I will swiftly explain what debugging is. I will spend a bit more time to explain what the word critical means in such context.

Debugging is the way programmers analyze and check the functionality of code, by searching bugs, errors in the logic of the code.
To do this over the years engineers have come up with tool which facilitate such enadeavour, specially in the context of browser, which come with built in debugging tool opaquely accessible to all the users.
The browser allows the user to interact with the network as well directly with the code by the insertion of log and breakpoint, to be able to analyze and halt the code in specific places. The network debugger offers a transparent view of the message passing between your machine and remote servers.

Critical debugging, in my view subverts and disrupts the original purpose of debugging. Instead of looking for faulty code, a critical debugger analyzes working code either for reverse engineering purposes, but in my case to pin point the extraction of surplus value. Additional to that in my case critical debugging becomes also a method to reclaim the fruits of my own labor. Now I can use my own metadata to satisfy my need of glitchy soundscapes, therefore creating use-value. I hope this won't wrongly understood a form of praise to the metadata extraction, on the contrary reclaiming the fruits of my own labor should be understood as radical positioning against such practice, by exposing it to the public.

The last point I'd like to make in relation to critical debugging are its pedagogical properties. My journey exploring the codebase of youtube came with a lot of new knowledge, not only on how the code operates, but also new ways to code. I learned new coding skills by reading someone else's code. My assumption is that if applied to other websites such method will always require the student/researcher to engage with new ways of coding.
Additional to that critical debugging becomes a method that starts from a critical position of wanting to know better how something works, and engages the student/researcher into formulating precise questions about what he wants to debug, as the codebase of corporate websites are too big to be scrutinized in their entirety. And in order to make an informed question without randomly scrambling the codebase in the search for some interesting parts to debug the researcher/student needs to engage in either critical or technical papers that talk about the system he is investigating. The former will give them a general idea of what to search while the latter a more precise context for where to search.
And while what already described forms the base to acquire new knowledge by engaging with reading and coding, the practice of critical debugging also leads to new discoveries, in my case the surprising final payload, that would have been impossible to spot by only looking at the network panel, as well as discovering the many ways hovering information is extracted from users.

[perf]

[the economy of intelligence]() [SLIDE]

> In practice, the confusion around AI’s capacities serves as a pretext for imposing more metrics upon human endeavors and advancing traditional neoliberal policies (Katz, 2017, 1) @katzManufacturingArtificialIntelligence2017 [SLIDE]

Cutting directly through the bullshit Yarden Katz exposes what he claims what the Artificial Intelligence stands for.
Of course he is not the only academic having a similar thought about the the topic of AI. A growing number of scholars are questioning the relationship between capitalist mode of production and AI, some of them inquiry from a marxist autonomist perspective tracing the relationship between neoliberal practices and the General Intellect like Matteo Pasquinelli (Pasquinelli, 2019) @pasquinelli2019 moreover him in collaboration with Vladan Joler produced a map that investigates the extractive processes behind contemporary AI (Pasquinelli & Joler, 2020) @pasquinelli2020.[SLIDE]
The exploitation that are inherent of AI systems are also exposed from the perspective of racism, Neda Atanasoski and Kalindi Vora describe the construction of AI system that replicate the exploitation and exploitative desires of slavery, as well as putting forward the concept of the technoliberal subject, the subject to which automated system need to tend to, and how such subjectivity has clear boundaries often in relation to skin color and gender.(Atanasoski & Vora, 2019) @atanasoskiSurrogateHumanityRace2019
Moreover other scholars continue to analyze the exploitative realm of the gig economy in relation to the labelling of dataset, highlighting its exploitative nature as well as exposing that Intelligent system heavily rely on the constant exploitation of people generally located in the global south.

It is following the reading of such Authors and many others that did not made it in this presentation, that I came to formulate the concept of the "Economy of intelligence".
Going back to the citation from Yarden Katz, it is possible to draw the conclusion that the word intelligence in the context of technology has been voided of its meaning. Intelligence if anything has become a token of behavioral metrics that needs to be labelled and metabolized (to borrow Jamie's wording) in more "intelligent systems" as well as creating surplus value for those who extract such tokens of behavioral metrics, by reselling them into the advertising market.


# Bibliography



# Bibliography


# Bibliography
