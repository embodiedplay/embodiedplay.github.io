var storyContent = ﻿{"inkVersion":20,"root":[["^One day during lunch a strange thing happened...","\n","ev","str","^What happened?","/str","/ev",{"*":"0.c-0","flg":20},"ev","str","^Skip to the choice","/str","/ev",{"*":"0.c-1","flg":20},{"c-0":["^ ",{"->":"Intro"},"\n",{"->":"0.g-0"},{"#f":5}],"c-1":["^ ",{"->":"HeadsUp"},"\n",{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"Intro":[[{"#":"IMAGE: images/FutureBeaver.png"},"^A beaver in what looks like a space suit appeared!","\n","^In a squeaky yet robotic voice it said \"Hello from an alternate dimension! I need your help!\"","\n","ev","str","^Keep going","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Skip to the choice","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"Intro2"},"\n",{"#f":5}],"c-1":["^ ",{"->":"HeadsUp"},"\n",{"#f":5}]}],{"#f":1}],"Intro2":[[{"#":"CLEAR"},{"#":"IMAGE: images/ScaryFuture.png"},"^In some dimensions, the future is scary!! The world is covered in pollution and things are horrible for both beavers and humans.","\n","ev","str","^Keep going","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Skip to the choice","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"Intro3"},"\n",{"#f":5}],"c-1":["^ ",{"->":"HeadsUp"},"\n",{"#f":5}]}],{"#f":1}],"Intro3":[[{"#":"CLEAR"},{"#":"IMAGE: images/HappyPast.png"},"^In your world, the past was the opposite! Beavers and humans were thriving! There were many trees, clear skies, and crystal clear streams!!","\n","ev","str","^Keep going","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Skip to the choice","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"Intro4"},"\n",{"#f":5}],"c-1":["^ ",{"->":"HeadsUp"},"\n",{"#f":5}]}],{"#f":1}],"Intro4":[[{"#":"CLEAR"},{"#":"IMAGE: images/NeutralPresent.png"},"^Your present has a mix. Some things are natural and wonderful, but also some bad things are happening. Can you work with us to help design a positive future for beavers, humans, and all of the rest of nature?","\n","ev","str","^Keep going","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"HeadsUp"},"\n",{"#f":5}]}],{"#f":1}],"HeadsUp":[[{"#":"CLEAR"},"^Before we start, we want to make sure you know that the software tools we are using have some artificial intelligence (AI) technologies built in. These AI technologies are designed to try and understand what you are doing so that we can give you helpful feedback and suggestions. To do this, the AI tech will track what you are doing, but won't know who you are.","\n","^The research team may also look at the results the AI tool tracked if you and your parents have consented to participate in the research.","\n","^If you aren't sure what this means, or if you are uncomfortable with this, now is a good time to discuss it with the teachers or researchers.","\n","ev","str","^OK, let's go","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"Choice1"},"\n",{"#f":5}]}],{"#f":1}],"Choice1":[[{"#":"CLEAR"},{"#":"IMAGE: images/FutureBeaver.png"},"^We have created a high-tech beaver-become-r-ator! If you click any of the links below, you can try out what it is like to be a beaver! Which version would you like to try?","\n","ev","str","^Try imagining what it is like to be a beaver and telling a story with our beaver-ification story model","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Be a beaver in a new open field, in the present","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Be a beaver that already has a dam in the past","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^All done","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["\n",{"#":"CLEAR"},"^Open the model titled \"wetlands_beaver_story\" ",{"#":"CLASS: model"},"\n","ev",true,"/ev",{"VAR=":"tried_story","re":true},{"->":"ContinueFromModel"},{"#f":5}],"c-1":["\n",{"#":"CLEAR"},"^Open the model titled \"wetlands_beaver_empty\" ",{"#":"CLASS: model"},"\n","ev",true,"/ev",{"VAR=":"tried_present","re":true},{"->":"ContinueFromModel"},{"#f":5}],"c-2":["\n",{"#":"CLEAR"},"^Open the model titled \"wetlands_beaver_built\" ",{"#":"CLASS: model"},"\n","ev",true,"/ev",{"VAR=":"tried_past","re":true},{"->":"ContinueFromModel"},{"#f":5}],"c-3":["\n",{"->":"Conclusion"},{"#f":5}]}],{"#f":1}],"ContinueFromModel":[[{"#":"IMAGE: images/FutureBeaver.png"},"^Awesome! Some things I am noticing as you work ...","\n","ev","str","^Your Beavers are getting eaten quickly! (AI)","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Your Beavers are starving before you can try things! (AI)","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Your Beavers aren't just using twigs, but also mud and rocks. (AI)","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^You seem to be all doing the same kinds of things (AI)","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^You seem to be all doing very different things... (AI)","/str","/ev",{"*":".^.c-4","flg":20},"ev","str","^Click this when you are done with your current model in the beaver-become-r-ator","/str","/ev",{"*":".^.c-5","flg":4},{"c-0":["\n",{"#":"CLEAR"},"^Your Beavers are getting eaten quickly, so ...","\n","^Try building a lodge to stay safe!","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["\n",{"#":"CLEAR"},"^Your Beavers are starving before you can try things!","\n","^If you want, you can edit the Beaver script to not lose energy. That'll let you try out more ideas and then you can turn it back on.","\n",{"->":".^.^.^"},{"#f":5}],"c-2":["\n",{"#":"CLEAR"},"^Your Beavers aren't just using twigs, but also mud and rocks.","\n","^I wonder why?  Do you know?","\n",{"->":".^.^.^"},{"#f":5}],"c-3":["\n",{"#":"CLEAR"},"^You seem to be all doing the same kinds of things.","\n","^Is there a way you can coordinate your actions?","\n",{"->":".^.^.^"},{"#f":5}],"c-4":["\n",{"#":"CLEAR"},"^You seem to be all doing very different things...","\n","^Is there a way you can coordinate your actions?","\n",{"->":".^.^.^"},{"#f":5}],"c-5":["\n",{"#":"CLEAR"},{"->":"DoneWithModel"},{"#f":5}]}],{"#f":1}],"DoneWithModel":[[{"#":"CLEAR"},"^Nice work in the model!","\n","^One thing I wonder is, is this good for the world? For the beavers? What about humans? How might we make it better for everyone?","\n","ev","str","^How about we try representing what you've learned?","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Would you like the beaver-become-r-ator AI to try and summarize what you did?","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Maybe we should try looking at water particles? (AI)","/str",{"VAR?":"tried_present"},{"VAR?":"tried_story"},"&&",{"VAR?":"tried_past"},"&&","/ev",{"*":".^.c-2","flg":5},"ev","str","^Since you have tried the present but haven't tried the past, maybe that? (AI)","/str",{"VAR?":"tried_present"},{"VAR?":"tried_past"},"!","&&","/ev",{"*":".^.c-3","flg":5},"ev","str","^This all looks great! Wanna try turning on the graphs?","/str",{"VAR?":"tried_present"},{"VAR?":"tried_story"},"&&",{"VAR?":"tried_past"},"&&","/ev",{"*":".^.c-4","flg":5},"ev","str","^See my options","/str","/ev",{"*":".^.c-5","flg":4},"ev","str","^All done for today","/str","/ev",{"*":".^.c-6","flg":4},{"c-0":["\n",{"#":"CLEAR"},{"->":"TryMeme"},{"#f":5}],"c-1":["\n",{"#":"CLEAR"},{"->":"TrySummary"},{"#f":5}],"c-2":["^ ","\n",{"#":"CLEAR"},{"->":"WaterParticles"},{"#f":5}],"c-3":["^ ","\n",{"#":"CLEAR"},"^Open the model titled \"wetlands_beaver_built\" ",{"#":"CLASS: model"},"\n","ev",true,"/ev",{"VAR=":"tried_past","re":true},{"->":"ContinueFromModel"},{"#f":5}],"c-4":["\n","^To do that, you can add them from setup and then re-start the model.","\n",{"->":"ContinueFromModel"},{"#f":5}],"c-5":["^ ",{"->":"Choice1"},"\n",{"#f":5}],"c-6":["^ ",{"->":"Conclusion"},"\n",{"#f":5}]}],{"#f":1}],"TrySummary":[[{"#":"clear"},"^The beaver-become-r-ator AI will try summarizing!","\n","^Check out the summary in the other window. ",{"#":"CLASS: model"},"\n","^Does this look right?  What's missing? Maybe we need to try something different?","\n","ev","str","^See all my modeling options","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^All done for today","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"Choice1"},"\n",{"#f":5}],"c-1":["^ ",{"->":"Conclusion"},"\n",{"#f":5}]}],{"#f":1}],"TryMeme":[[{"#":"clear"},"^I think you all have some really great ideas! Can we try representing them in the MEME model communication device and see what the folks in my dimension think?","\n","^Open MEME at http://167.172.147.247:3000/",{"#":"/"},{"#":"CLASS: model"},"\n","^Login with: \"BEAVERS EXPLORING-M5EIJ\" (without the quotes)","\n","ev","str","^Done representing","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^All done for today","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"Choice1"},"\n",{"#f":5}],"c-1":["^ ",{"->":"Conclusion"},"\n",{"#f":5}]}],{"#f":1}],"WaterParticles":[["^If we had this, we'd let you ...","\n","ev","str","^Do something else","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^All done for today","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"Choice1"},"\n",{"#f":5}],"c-1":["^ ",{"->":"Conclusion"},"\n",{"#f":5}]}],{"#f":1}],"Conclusion":[{"#":"CLEAR"},"^Nice work! See you next time.","\n","end",{"#f":1}],"global decl":["ev",false,{"VAR=":"tried_story"},false,{"VAR=":"tried_present"},false,{"VAR=":"tried_past"},"/ev","end",null],"#f":1}],"listDefs":{}};