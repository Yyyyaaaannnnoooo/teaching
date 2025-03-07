# Data Manufacture and the infinite scrolling

* Start from auto ethnography - my experience as user of social media platforms, how much time do I spend clicking and scrolling rather than watching. And how the former activity is the activity of data-manufacture and entrapment that

1. Quick tour of my proposal
   1. What is AI? How does it work? And the importance of data
      1. Explain the basics of AI
      2. Therefore AI is a way to organise noisy data [Katz]
   2. Deadlock of current critic of technology (and AI)
      1. Emergence of AI from division of labour and slavery [Daston, Simondon, Bodei]
      2. Marxist critique of technology and new class formations [Wark, Pasquinelli]
      3. Invisible work of dataset training [Heteromation, Suri (Ghost Work)]
2. What I have been doing lately: looking at data manufacture and how recommender systems and infinite scrolling "trap" users
   1. Extraction, entrapment, excavation, data-capital, manufacture, enclosure, colonialism etc. Navigating terminology
   2. *Free labor, not slavery*
   3. Collection of my own data to analyse the YT predicting algorithm

-----------------------

I will start this talk by trying to bring all of us on the same page, I hope this will not bore you to death, but I will make a quick explanation of how contemporary AI systems work. This in order to explain the importance of data in today's society.

Contemporary AI Systems are built upon an algorithm that was developed in the 50's by Frank Rosenblatt. His method to simulate intelligence was based on the research made by Warren McCulloch and Pitts [forgot the first name] on the neurons that govern frogs vision. In their work they discovered how the **control mechanism** between neurons work, there is the need for an electric charge to pass a threshold in order to be elaborated by the nucleus of the neuron and then sent further to other neurons. Rosenblatt was able to formalise such control mechanism into a a series of algorithm that could describe the functioning of a single neuron: the perceptron.
The latter was developed during the Cold War era within the ballistic research facilities of the US Army, as they were looking for a system to recognise targets, Rosenblatt algorithm, mimicking an eye, was already then able to recognise between circles, triangles and simple forms.

Of course such implementation was not enough, but how was it working exactly you may ask?

So the basic functioning of a perceptron is like this: there is are some weighted inputs $$ xw_1, xw_2, xw_n $$, an output $$ y $$ and a known result $$ y_r $$ also referred to as label. 
To "teach" a machine there is the need for a training, that is a way to adjust the internal logic of network composed by weighted inputs and connections. The training consists of long process of checking the elaborated inputs against the known result of the latter. If there is a mismatch the error is back propagated over the whole network to adjust its internal weights.
A concrete example would be: if we would train a system to recognise cats by 3 parameters, fur density, weight and length, we would need first to collect a consistent dataset of cats with such parameters, than feed the parameters as input, and check them after they have been processed with the original data, and adjust the internal weights.
[DEMO](https://s4ac.github.io/ML4all/)
Of course this is an implementation of a very simple AI, and it has a lot of limitations, that have been overcome over the years, for example this perceptron could only recognise between two categories, but the world is much more complex than that, therefore newer and more complex systems have been developed, the so called neural networks, and deep neural network. The functioning is almost the same, but instead of a single neuron they they architecture uses a network of perceptrons that need to be adjusted during training.

The point I want to make out of this is that neural networks need a lot of data to be able to function.

To put in the words of Yarden Katz 

> This narrative is misleading because it doesn’t capture the malleability of the AI label, or the fact that the agenda of AI researchers can change. The label “AI” has in fact recently undergone a rebranding. Corporations have helped manufacture an “AI revolution” in which AI stands for a confused mix of terms—such as “big data,” “machine learning,” or “deep learning”—whose common denominator is the use of expensive computing power to analyze massive centralized data. AI has essentially become a convenient redressing of a stale vision long promoted by Silicon Valley entrepreneurs. It’s a vision in which truth emerges from big data, where more metrics always need to be imposed upon human endeavors, and where inexorable progress in technology can “solve” humanity’s problems. Powerful companies have played a crucial role in the rebranding by hiring academics working on statistical analysis of big data (a term now interchangeable with AI), intervening more aggressively in academic research, and dominating mainstream discourse on AI.

In his text "Manufacturing an AI Revolution" the author tries to demystify the allure of intelligent machines, making their genesis, specially the data gathering more evident to the reader. I the text Katz specifically talks about the usage of the amazon mechanical turk as a system to label data. The latter is a gig-work platform in which humans can be hired do micro tasks, like labelling data-sets. Of course such labelling is done mostly by precarious workers who need an extra income, therefore the demographics of the turkers is to be found between precarious workers mainly from the so called global south. The work of Adam Harvey, Megapixels.cc, for example has made the public aware how face recognition datasets have been created without the consent of the "owners" of the faces, by exploiting images of security cameras, Flickr and so on. And while the data is gathered by scraping algorithm the turkers in turn need to label it for the machine to be able to make sense out of this noisy data.

To conclude this part I want to point at two things, first modern machine learning techniques rely on the accumulation of immense datasets, that are gathered in dubious ways to the at the limits of legality. Second that  lot of underpaid labor is involved specially in the labelling of such datasets.

While above we discussed the technical appearance of AI in the following I wan to talk about its genesis as emergent from the division of labour.

On page 105 of the Gilbert Simondon dissertation titled "on mode of existence of technical" objects, the author makes quite an interesting claim:

> The disappearance of slavery in Europe allowed ancient servile techniques to come to light and manifest themselves in clear thought: the Renaissance recognized artisanal techniques by shedding the light of rationality onto them.
> Rational mechanics introduced machines into the domain of mathematical thought: Descartes calculated the transformation of movement within the simple machines used by the slaves of antiquity.

This process of rationalisation of mechanics, spawning out from the "disappearance" of slavery is also referred in the text of Remo Bodei, who tries to trace a lineage between slavery and machinery. What both authors seem to suggest is the process of rationalisation: the formalisation of a physical interaction into a mathematical formula. And while Descartes was interested into understanding the mechanics of physical objects, authors of the first encyclopaedia D'Alambert and Diderot, were interested in describing the functioning of machines and production techniques.
One of the famous production techniques descried in this book is also cited in a very important text by Lorraine Daston who describes the transition between the calculation as a cognitive faculty to the modern mindless computation.
Her text that describes the evolution of calculation over 200 years (1750 – 1950), starts with the an image found in the aforementioned encyclopaedia: the manufacture of pins. Such an image became the inspiration for two chapters of Adams Smiths *Wealth of Nations*, and eventually inspiration for a young French engineer to *"[...] manufacture my logarithms as one manufacture pins"*.

But what is so striking in such an image to be implemented in the *"manufacture"* of logarithms? [IMAGE for presentation]

The image shows the production of pins, and by observing it one can see how the process of manufacture of pins has been divided by many men. The so called division of labour.
The division of labour was the key element for the aforementioned French engineer, named Gaspard de Prony, to create system in which the complex logarithms could be turned into simple addition and subtraction that unskilled underclass could calculate. Its strategy was to hire few trained mathematicians to deconstruct the logarithms in simpler equations, the latter would be passed to algebraicist to reduce them to additions and subtraction.
It is in this process that what once was a cognitive process became mechanisable, and used by what the author calls the *factories of Big Calculation*: insurance companies, astronomical observatories, statistical bureaus etc., But the mechanisation did not entail the disappearance of calculation, it only shifted the labour of calculation to the minds of the gendered and radicalised underclass: the computers. But it won't be until the beginning of the XX century until the appearance of mechanical devices who would replace the human computers, but once again human have to stay in the loop, and their task from calculation switches to data entry.
What we are left with this text is this idea, of machines as emergent from the division of labour, the task carried out by the single workers are synthesised into a machine, but this does not imply the exclusion of the human in the production. On the contrary the human is evermore needed to take on the task the machines can't execute, mechanising its own faculties, until they become replaced by another machine. And as the machine get better, the task for the humans become ever so repetitive and meaningless.
I hope this helps in demystifying the idea of possible futures with Artificial General Intelligence as an autonomous being, because currently there is no autonomy within machines, also the most advanced.

The important bit to take with us is that technology rather than liberating humans from tedious work, it just shifts it to someone else, and in doing that it tends not to solve social problems like precarity, actually we could argue that it almost feeds on it. This of course only happens in situation where technology meets capitalism.
If Lorraine Daston shows us how precarity was exploited to compute complex logarithms, today precarity is still exploited to do just similar task. The most notable example is Amazon Mechanical Turk, as aforementioned, that taps into the ever enlarging gulf of precarious workers, without solving their socioeconomic condition. Turkers, cleaners and so on are part of the AI industry and perform the most tedious work, the labelling of data. Being it impossible for machine to recognize object without training the labelling remains a cognitive work that needs to be done by humans. And despite being an important building block for the creation of the so called AI, it remains largely underpaid.

Work analysing the situation of precarious and underpaid work within the gig-economy platforms has been done extensively, by many scholars and authors, specially stressing the inequality between the global north and south. 
While what described above describes an **explicit** form of labour, even though it is hidden to the user, so called ghost work, *free labour* is constantly performed by social media platform users.
My interest is to understand this ecosystem of free labour and the design strategies at play to enable the tech companies to extract it.

But first how did we arrive to call the usage of social media to free labour? And how does design help in promoting free labour?

As already discussed above to train any machine learning algorithm a huge amount of data is needed, and social media are quite an interesting ecosystems because for each users they need to train an algorithm that is able to provide the right content for the user. In my case I will concentrate on YouTube as it is my favourite social media platform, and the only one I use. Alphabet aka Google aka YouTube, has enormous and vast library of videos, but it needs to select the right ones for each one of its viewer. To do that an AI aka Machine Learning aka Statistical analysis system is used to predict which videos the user would like to watch. and of course the only way to make such decision is by letting the user fabricate its own information about himself: time spent looking a video, liking, channel subscription, video history, search history and so on are compressed into a vector that is fed into the machine learning algorithm, that in turn returns a prediction of the videos the user might want to watch.
It is important to note the wording I used: the data is fabricated.

What do I mean with this?

Oftentimes popular media depict data as the oil of XXI century. But while oil is a material that has a physical form, data on the contrary does not. Such terminology also supposed that data exist in a raw form and that it is a natural resource that can be extracted. But the data used by machine learning algorithm to train recommender systems does not exist in any raw form or as a tangible object. Such data is manufactured by the users while interacting with the platform.
The way in which such data is manufactured is by letting the users use the platform. As we all know such platforms collect every single interaction we make on their websites. As mentioned above the metrics might include watch time, watch history, search history and so on. But contrary to our believe liking has not this big influence over the way in which content is preselected than for us.

What is then made out of this data?
As aforementioned this data is used to train predicting algorithms, suggest the user what to watch next, in the case of youtube, what this does is to keep the user on the platform, while stealing its attention from other things he might want to do. Because keeping the user on the platform it means that the user can be bombed with advertising, that is the way in which companies like google make their money.
It is therefore imperative for such companies to keep their users as long as possible on the platform, therefore one of their focus is develop systems that keep the users there, one of those are recommender systems, oftentimes dubbed as algorithm for entrapment. 
As described above a recommender system selects some 100s videos from the billions and ranks them from the more interesting to the least interesting for the user, additional to that video are also scored by their "freshness": Youtube has a preference to show the newest videos possible.
This of course adds an additional interesting layer to the whole story as the creators of videos are basically forced to constantly upload new video in order not to be ignored by the recommender system. And video creation is also labour, but in its case once reached a certain amount of followers the video production becomes also economically remunerative. But I don't have any specific information on how monetisation works, and whether one could really make a living out of it, excluding the whole youtube stars ecosystem.
By reading one of the paper on the usage of Deep Neural Network in the recommender system, it was quite clear how engineer understand the uploading of videos as something that happens almost naturally and spontaneously, as there is no work behind it.

What I'm tapping into here, in my view, is the tip of a very complex iceberg in which users and creators are bound by an algorithm, the recommender algorithm that extracts free labour in form of manufactured data from users, and forces creators in constantly creating new content in order to reach an audience and turn an hobby into "profitable" labour.

On a more concrete level, beside reading and synthesising, i'm also collecting my own data regarding my youtube usage, mainly the videos that populate the home every-time I open the platform. I don't know yet what to do with it or whether it will be helpful, but by doing it i'm helping other researcher who want to reverse engineer the recommender algorithm developed by youtube.

I will close with a couple of MEMEs

What I found interesting in the movie, was this single sentence by Deckard, the agent who has to catch the "rogue" robots, that says: "My job is to eliminate machines who don't benefit society anymore" or something along this lines.
Despite the cheesiness of the sentence, as a provocation, wouldn't it be a good practice to whenever we encounter a new technology, as users, to always ask such a question: who does this technology benefit?


# Decolonize machines

Machines have also under the control of capital become “colonized” reshaped and transformed and themselves enslaved to the logic of profit. To query a machine, by asking who they benefit and how they ***benefit\**** them. Technology is then revealed in its essence, I argue, as this is the only way to truly state how the machine comes to operate in the world.

* The main character talks about his duty of removing the machines who benefit

![Image.jpeg](00-Commerce.jpg)

Rachel from blade runner says

“I’m not in the business... I’m the business” 1:04:00

![Image_1.jpeg](01-business.jpg)

# Bibliography
