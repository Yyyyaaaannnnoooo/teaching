## Presentation

### video from Anna "FacebookZeichnung"



In 2019 I taught an experimental design class together with Shintaro Miyazaki called UNMAKE ALL. The goal of the class was to unmake the internet, dissect its technical layers and look at the inner workings. We discussed ip addresses and routing, client and server relationships specially in the case of social media platform. The latter became the prominent in the work of Anna who was interested in the data that leaves our machine whenever we interact with interfaces. The "HALLO" left in traces was a message that Anna wanted to send to the machines who read her data: "Hi I am Anna, and I now I know that my mouse position is recorded before a I press any link on your interface."

She was practicing Critical Debugging. She was not debugging, she was critically engaging with the interface and subverting the use of the debugger tool to make invisible computation visible.
In 2019 the term big data had already be renamed into data extractivism, and the student of our course were quite aware of such shift. Therefore one of the classes was focused on using debugging tool to analyze network messages between users and servers. What we discovered was what Anna shows in her artwork: mouse interaction are captured as data and sent to remote servers.
In order to access such information the class engaged with the networking tool, that usually is used in by developers to check whether message passing between client and server is working. In this case we were not so much interested in whether the message passing operates without bugs. Rather the class was curios to read the content of such messages. And while most of the messages were unreadable machine jargon, some of it showed some recognizable patterns. And the class discovered that mouse interactions were logged to remote servers.
It is important to note how the use of the debugger was subverted; the class started with a question that was not about a technical error, but rather questioning the social error that data extractivism creates, and used the debugger tool to find out about the latter.

This is was my first attempt to make the practice of critical debugging a pedagogical tool. Back then was not very straightforward, and only one student was picked such method. And rightfully so the other ignored it. It was barely a method, was complex and required a lot of copy pasting and widow switching.
Within my PhD research I started to refine this method in a way that is more usable by building a some tools: a web extension and a server. And I will demonstrate them now.



[DEMO]



despite not being finished nor perfect, this tool/method provides the possibility to question the inner workings of webpages. As you might have seen the inner workings of webpages might be very complex ecosystems of algorithms, therefore trying to shoot in the dark to find something might lead nowhere. Therefore, critical debugging only really works in combination with a refined and pointy research question. The critical debugger needs to know what he is looking for. Anna knew how to spot mouse data and found it in the network messages. Additionally she knew about mouse interaction tracking, because we read it in the class in a paper about behavioral tracking.
Critical debugging therefore lends itself, and is targeted to the formulation of social questions to be asked to algorithms, and wants to expose the answer through aesthetic experience.