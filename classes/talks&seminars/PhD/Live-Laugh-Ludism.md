# From Post-Luddites to *Ludism*, Critical Debugging as Playful Browser Practice

> What I found interesting in the movie, was this single sentence by Deckard, the agent who has to catch the "rogue" robots, that says: "My job is to eliminate machines who don't benefit society anymore" or something along this lines.
> Despite the cheesiness of the sentence, as a provocation, wouldn't it be a good practice to whenever we encounter a new technology, as users, to always ask such a question: who does this technology benefit? [needs to be weaved in into the luddite text]

Ciao a tutti, in this presentation I will present you the current state of my work. To do so I will emply my favorite tactic of tangent anectdotes to describe part of the theory I developed from my practice.
The main topic we will address are:

1. somehow the luddites
2. Data poisoning and its connection to the luddites movement
3. How critical debugging can be understood as a form of data poisoning
4. the need to create a new name for such practice: ***Ludism***

@fisher2009

I will start by talking about the luddites, but I do not want to bore you with historical facts and figures about the legend of Ned Ludd, rather I'd like to present you how its spirit has emerged in front of me in the past months.
Therefore those who do not know anything about the luddites might find the following criptic, but nevertheless, we'll have the q&a section to further discuss about it.

### 1.

The first tangent I'd like to take is to talk to you about Alfredo Cospito, and his detainment in the 41bis system. the latter is a detainment procedure, that was developed by the italian government to tackle organized crime communication between those who are incarcerated and those who are not. Basically it is isolation, with 1 hour of sunlight. As a natural progression toward more authoritarian regime, the italian government has decided to extend such system alslo to the enemy of the state, terrorist, to which a lot of anarchist groups are part of. And here comes alfredo cospito into play. He was sentenced to life without parole in the 41bis system for the kneecapping of Roberto Adinolfi, CEO of Ansaldo Nucleare in 2012. The latter is the italian company who provides engineering products in the energy sector, of course also for the nuclear energy sector. The story is interesting because the it is clear that the sentence is too harsh for a kneecapping, but because of the Alfredo being part of a neo-luddite anrchist group, and for taking pride in his actions the court ruled that he spends the reest of his life isolated not only from society, but also from other inmates. While fascist shooter Luca Traini who wounded six migrants was sentenced to 12 years.
I do not really want to deeply go into the problematic ways in wich italian law works, nevertheless such comparison can only highlight what kind of ideology the italian state considers so dramatically dangerous to require its annihilation.
This of course, what I report here is what mainstream media often tends to portray when they want to resuscitate the spirit of the myth of ned ludd. SO that the comparison is served on a silver platter: Luddites are violent. But while it serves such truth, such portrayal also shows the 2 weights 2 measures that the italian state employs towards different ideology: anarchist luddites life without parole, fascism 12 years.
The connection between Alfredo Cospito and the neo-luddites movement can be found in the manifesto he wrote; where by citing *Michael Bakunin* the italian anarchist sees his actions as liberating mankind from the drudgery and slavery that machinery i.e. techonology imposes, and the need for revolutionary acts to stop this. Therefore this tangent that I took was to introduce you to the luddite movement and how it is often perceived/portrayed from mainstream media.
To further elaborate on the luddites I invite you to listen to me describing this game that I am playing on ps5 since march. The game in question is called Horizon Forbidden West. it is the second installment of the horizon saga, and it takes place 1000 years in the future in the current California. The story centers around Aloy a clone of scientist from the 2000's who helped develop an AGI system for terraforming exoplanets. The AGI gone rogue destroys civilization leaving few humans alive that since the 2000's live in small communities scattered around the world, while machines roam freely having become the new dominant "species".
Therefore most of the gameplay is to break machines. The Luddites dream [this is an ironic sarcastic comment!].
the game also portrays several communities, who despite 1000 years away from the AGI takeover are portraied using the imaginary of primitiveness, I will get back to this. So to say such communities do not use "technology". Or better said each community engages with technology differently to one another. The Carja and Oseram are portryed as what the imaginary would represent them as more advanced, while the communities in the forbidden west still employ more "primitive" technologies. What nevertheless unites all of them is that in order to produce certain artifacts they need to break machines for useful parts. And this is also how the main character is able to upgrade its own weaponry made mainly of bows and arrows, shaped in different forms for different combat tactics.

The game in itslef fetishes a lot this dialectic between primitiveness and technological advancement. While it is true that there is a general romantic view of primitive communities as being more connected to nature and to live in armony within eachother, what the game does is also to show the emancipatory power of being able as a community to self proclamate the ways in which technology should be creted and used. Because despite the "primitive" look, such communities handle advanced technology to their benefit. For Exaple the Utaru of Plainsong are able to "Override" certain machines and use them for agriculture.
Where do I want to go with this: luddites and neo-luddites are often portraied as being anti technology, violent and primitivist. The fiction of the game described above further suggests that autonomous communities who decide which kind of technologies they want to use are depicted using the stereotipical thropes of primitiveness. This implicitly suggests that there is Technology and technology, so to say there is Technology that serves accumulation of wealth and technology that helps worker to work less for the same amount of products.
As Mueller Gavin puts it in his book "Breaking things at work", the myth of ned ludd was never about being against technology. It rather was an ideology for unifing class struggle against the 

> "*The wealthy and powerful [who] understood machines as a method to accumulate power, and so too did the toiling classes over whom they wished to exert it.*"

and furthermore 

> "*Their revolt was not against machines in themselves, but against the industrial society that threatened their established ways of life, and of which machines were the chief weapon. [...] Machine breaking was one weapon among many, but it was also a technique for something else: forging a shared communal struggle.*"

To bring in another tangent, Blade Runner offers a good reflection, on automated Luddism: machines destroying other machines that do not benefit society anymore. Similarly to that the weavers of the XIX century were asking themselves, who does such technology benefit, me the worker, or the factory owner?
Therefore the shared struggle of the luddites was never against technology or technological advancement, but rather towards the uneven and asymmetrical power relation that a certain technological advancement entails. 

### 2.

In what I described above are two forms of luddites, the OG luddites form the victorian and earli XX century to the neo-luddites of late XX and early XXI century. But here I want to attempt to establish a new strain of luddites that I will for the moment call post-luddites, nevertheless, such naming will change by the end of this presentation.
To do this I will start by describing data-poisoning as form of machine breaking practice, with the specific look towards youtube and its recommender algorithm.
In order to describe it in such way I ought to do a step back and frame youtube users, so to say the people who watch youtube, and not the content creators, as workers.

While Marx analyzed labour and work only in its canonical form Italian Marxists Autonomist Maurizio Lazzarato expanded the concept of labour including its alternative manifestation as immaterial labour. It is quite important to discuss this point as it is the way to connect labour to the digital ~~extractivism~~ manufacture.

From his point of view _Immaterial Labour_

> [...] On the other hand, as regards the activity that produces the “cultural content” of the commodity, immaterial labor involves a series of activities that are not normally recognized as “work” — in other words, the kinds of activities involved in defining and fixing cultural and artistic standards, fashions, tastes, consumer norms, and, more strategically, public opinion. (Lazzarato, 1996, 1) [SLIDE]

The main take here is the idea that immaterial labour consists in a series of activities that are not recognized as labour. Moreover Tiziana Terranova explains its virtual qualities

> However, in the young worker, the “precarious worker,” and the unemployed youth, these capacities are “virtual,” that is they are there but are still undetermined. This means that immaterial labor is a virtuality (an undetermined capacity) that belongs to the postindustrial productive subjectivity as a whole. (Terranova, 2000, 41) @terranovaFreeLaborProducing2000 [SLIDE]

Along the ideas of the previous authors it is possible to foresee how immaterial labour takes place within social media platform.

First and foremost using social media platforms could be understood as a form of work to create use-value, in this case a non physical use-value in the form of social relations and communication. But while a part of the time spent on the platform it is used for the use-value, another big part of the time is used to create a surplus-value for the owner of the platform; the owners of the platform for sure know quantitatively how many minutes a day a person should spend on their platforms in order for it to be profitable, that is probably also hardcoded in the algorithms [themselves](../diss_notes/practice/sounding-out-hovering/observations/debugging/debugging.md).
While the work invested for the use-value is clear to the user the labour to create surplus-value is concealed from them, and it is concealed so perfectly that the user is convinced to only create use-value for its own sake. The owners of the platforms are very well aware of the "still undetermined, virtual," capacities of their users and use the leverage of a "free" service to access the potential of such virtuality and turn it into surplus value: labour not recognized as labour.

The ways by which users are "coerced" into immaterial labour in this case is the use of what Nick Seaver calls captivating algorithms (Seaver, 2019), so to say algorithmic technologies made to keep the users as long as possible on the platform, to name some of them: infinite scrolling and infinite playlists. Moreover in his text the author specifically discusses recommender systems as algorithmic means for the captivation of user on the platform.
Recommender systems are the site for the extraction of immaterial labour, and this extraction is twofold:

1. an extraction for extraction itself, so to say a feedback loop where the information extracted is used to better the AI recommender system, and therefore to captivate the user even more
2. the extraction for the surplus-value for the platform owner, the same information as before, but thanks to the ubiquitous nature of digital data, the same information can be collected stored and sold in the advertising market

> Capital's problem is how to extract as much value as possible (in the autonomists’ jargon, to “valorize”) out of this abundant, and yet slightly intractable, terrain. (Terranova, 2000)

In this case the metaphorical terrain that Terranova is referring to is the landscape of user interactions: playing or stopping a video, hovering over a thumbnail or simply closing the window, are recorded actions that are then fed into the AI recommender system, and a copy of it is stored to create a digital fingerprint of the user that can be sold to advertisers.

Following the writings of tha authors presented above is possible to assert that  interacting with a social media platform can be understood as fun and gamified form of work, making the user de-facto workers.
It is important to get to this point as in order to bridge the luddite movement with data-poisoning, because as stated above, machine breaking should be understood as a form of struggle against the owner of machinery.
Nevertheles, prior to make any connection between the luddites and data poisoning, I should take a bit of time to explain what the latter is.
in order to understand how it works one should know how machine learning systems are trained. Put it very simply, ML systems are trained with huge amount of data, that by adjusting internal parameters of so called "neurons" are than able to predict outputs given certain inputs. So to say ML system tend to find pattern within noisy data. Training an image recognition system to recognize cats, will need to be fed with thousands of images of cats, so that the system learns what is the statistical grouping of pixels that represents a cat.
Given such description one could already see how data could be poisoned: what if in the cat dataset there would be images of turtles? Would the system still be able to recognize cats?
Therefore data-poisoning is the practice of meddling with training data-sets, so that the prediction is not accurate anymore. Therefore if recommender algorithm are based on what the user is watching, one approach to poison their dataset would be to watch what they actually do not want to watch. Or if someone has the necessary skill, to intercept the data about watching practices and change it to something else.
Now this would be tha standard approach, intercept the data you produce, and either modify it to something else, or block it completely.
Nevertheless, such approach, would in my opinion flag the platform owners that something fishy is happening, and therefore flag such modified data as not original. [[I mean the owners of the platforms are not stupid]]

Such adversarial approaches toward data acumulation can be seen as a contemporary development of machine breaking, because despite the lack of violence the goal is to break the algorithm so that the prediction is not that accurate anymore. Perhaps such practice could be a post-luddite approach to machine breaking.

### 3.

Data-poisoning can be a good escamotage to break the machine, nevertheless I would like to propose an alternative approach, based on method called critical debugging that turns the social media platform into a browser performance device.

But first what is critical debugging?

For those who are new here, and in order to not be to repetitive for the other who already attended my practice presentation I will swiftly explain what debugging is. I will spend a bit more time to explain what the word critical means in such context.

Debugging is the way programmers analyze and check the functionality of code, by searching bugs, errors in the logic of the code.
To do this over the years engineers have come up with tool which facilitate such enadeavour, specially in the context of browser, which come with built in debugging tool opaquely accessible to all the users.
The browser allows the user to interact with the network as well directly with the code by the insertion of log and breakpoint, to be able to analyze and halt the code in specific places. The network debugger offers a transparent view of the message passing between your machine and remote servers.

Critical debugging, in my view subverts and disrupts the original purpose of debugging. Instead of looking for faulty code, a critical debugger analyzes working code either for reverse engineering purposes, but in my case to pin point the extraction of surplus value. Additional to that in my case critical debugging becomes also a method to reclaim the fruits of my own labor. Now I can use my own metadata to satisfy my need of glitchy soundscapes, therefore creating use-value. I hope this won't wrongly understood a form of praise to the metadata extraction, on the contrary reclaiming the fruits of my own labor should be understood as radical positioning against such practice, by exposing it to the public.

[SHORT DEMO]

[EXPLAIN CRITICAL DEBUGGING AS ]

### 4.

[TURN POST LUDDITES INTO *LUDISM*]


Gamify resistance?



1. Luddites, new-Luddites => Post-Luddites?

   1. the myth of Ned Ludd
   2. kneecapping of Roberto Adinolfi
   3. fictional world of Horizon to describe the movement
      1. Usually describing luddites as anti-technology or primitivist, once again highlights what is considered technology, and technological advancemennt. Posing at the center of it that the technology that exerts the most control over human social realtions must be the Technology with capital T. So to say the technology that serves capitalist wealth accumulation. To turn human labor into surplus.
      2. so to say here you show how generally luddites are described as backwards and primitive, and reluctant to embrace technology. rather they are portrayed as enemy of technological advancement.
         But what the game does is to also show how community driven development produces different forms of technology that better suite the people within the community.
      3. while the usual imaginary of AGI portrais some super human entities, in Horizon advanced AI tech takes the form of animals. Therefore suggesting that trascendental intelligence is animal.
   4. Differently to how neo-luddites pose themselve towards technology, one should think 
   5. bridging into the next part describe breaking machine as form of struggle against capital and not against technology

2. frame *data-poisoning* as a form of post-luddism

   1. click work is work

      1. introduce by referemcing Suri's ghost Workers from the global south, and your interest of the click work as yt *pronsumer* ["new forms of exploitation through [unpaid work](https://en.wikipedia.org/wiki/Unpaid_work) [gamified](https://en.wikipedia.org/wiki/Gamification) as fun" @jemielniak2020]

   2. canonical ***data poisoning***, does not really disrupt the status quo of ML technologies, specially in regard to YouTube's recommender system. Because the standard way to approach data poisoning is to inject falsified data. and in the case of you tube by intercepting the data leaving the users laptop and exchanging it with fake information. 

      1. Nevertheless the relationship of viewership and consumptiom remains the same. The user is still using the platform for how it is.
      2. Moreover falsified data could be easy to detect by bot detector, and therefore the system coulkd decide to ignore such data to retrain the recommender system. 
      3. Additionally such approach preserve the dictate that data is something that should be accumulated
      4. it also needs to be considered that the platform itself even without the data accumulation still uses exploitation tactics to enforce mass content creation

      

3. describe critical debugging as a form of browser performance practice

4. conclude by describing the browser performance as *ludism* and its radical / critical 





In the past weeks the Italian news has been covering the new sentencing of Alfredo Cospito, an Italian anarchist and *Neo-Luddite*. Such term has is overlapping with his persone and the anarchist group he is part of, because of the knecapping of Roberto Adinolfi in 2012. Roberto Adinolfi is the CEO of Ansaldo Nucleare, an Italian company developing machinery for nuclear power plants. By citing *Michael Bakunin* the italian anarchist sees his actions as liberating mankind from the drudgery and slavery that machinery i.e. techonology imposes, and the need for revolutionary acts to stop this.
Beside the italian anarchists, and the infamous *Unabomber* in the US, *Neo-Luddites*, so to say Luddites of the XX and XXI Century, continue with the sabotaging of technology. Not necessarily being against technology in itself, but rather as a political statement against technology jepardizes humanity and their wellbeing: Nuclear energy, Drones, Weaponry and so on.
While *Neo-Luddites* often target heavy industry, in recent years the appearence of social media and computers has revealed the everpresent gazing of the *Surveillance Capitalism*[^1] apparatus. To counter the *Data Extractivism*[^2], artists, activists and computer scientists have started to develop counter strategies for this form of exploitation. One of such actions is often called *Data Poisoning* can be described as the injection of falsified data in the training dataset for Machine Learning models, and thus making the model malfunction[^3]. Such practice can be specially useful to compromise the data social media platforms collect from their user.
One of such practices develped by the author is called Critical debugging. The latter subverts the use of browser built in debugging tools to generate sound according to the content of the data that is extracted from the user. In the case of the  Critical debugging the *Data Poisoning* does not happen by intercepting data and compromising it, but rather by transforming the browsing into a performative experience. This is done by transforming data into MIDI and passing it to musical instruments. Therefore according to the page visited on the Social Media Platform the instruments will change their melodies according to the data is currently extracted.
Such Browser perfomance could be described as a form of *Ludism*, by dropping a *d* we refer to both *Neo-Luddism* for its radical positioning towards technology, but also to the latin menaing of the world, dropping the violence and embracing play, as a radical and critical practice to overcome data accumulation.

[^1]: @zuboffAgeSurveillanceCapitalism2019
[^2]: @mezzadraMultipleFrontiersExtraction2017
[^3]: @shafahi2018

