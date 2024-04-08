import {

 
  shoutkaro,
  webtopia,
  Paperpresntation,
  quiz,
  connection,
  codedebug
} from "../assets/events/eventsImages";

interface Event {
  id: number;
  poster: string;
  title: string;
  description: string;
  rules:string;
  coordinates:string;
  form_link: string;
  button: boolean;
}

const events: Event[] = [
  {
    id: 5,
    poster: Paperpresntation,
    title: "PAPER PRESENTATION",
    description: "🌟Our paper presentation event where you can showcase your innovative ideas. We're looking for tech enthusiasts to share their groundbreaking concepts through captivating PowerPoint presentations and detailed papers. Explore themes like AI, Cybersecurity, Renewable Energy, IoT, and more.  You'll also have the chance to compete for awards and recognition. This event is more than just a gathering, It's a celebration of innovation and the boundless potential of technology.",
     rules:`• Teams must have a maximum of 3 participants.
• Bring your PowerPoint presentation on a pen drive or hard drive.
• The paper presentation can focus on any area within the field of computer science and technology.
• PowerPoint presentations are limited to 10 slides, saved in "ppt Extension" format with the naming convention "Teamname_Collegename".
• Share your PPT via email and with coordinators.
• Presentations are limited to 7 minutes, followed by Q&A.
• Strict formal dress code is required. No participant can be part of multiple teams.
• Judges decisions are final, all rules must be followed.`,
coordinates:`Darmick    -   8825946654
Dharshini    - 95662 56761
RohanBernard  -8939204211
    `,
    form_link: "https://docs.google.com/forms/d/e/1FAIpQLSd0VZM5Z-dq3FdAzyJW71xXDKUa8xvpdv34gA2tTgIKTXjpAg/viewform?usp=sf_link",
    button: true,
  },
  {
    id: 2,
    poster: webtopia,
    title: "WEBTOPIA",
    description: `WEBTOPIA is an exciting web development challenge with two engaging rounds. In the first round, individuals and teams of two face a quiz on web development languages and syntax. Successful participants and teams advance to the second round, where they create a themed website on the spot, showcasing their creativity`,
    rules:` 
    • Participants can individually or in teams of two members.
    •  The event comprises 2 rounds
    •   Round 1: Quiz with 20 questions.
    •   Round 2: On-spot website designing.
    •  Punctuality and decorum are essential.
    •  Any form of malpractice is strictly prohibited.
    •  Tab switching or using external editors is not allowed and will lead to disqualification.`,
    coordinates:"",
    form_link: "https://docs.google.com/forms/d/e/1FAIpQLSd0VZM5Z-dq3FdAzyJW71xXDKUa8xvpdv34gA2tTgIKTXjpAg/viewform?usp=sf_link",
    button: true,
  },
  {
    id: 5,
    poster: codedebug,
    title: "CODE REPLAY",
    description: `CODE REPLAY is a competitive event focused on debugging code, designed to challenge participants' programming skills and problem-solving abilities. The event consists of two rounds, and participants can compete individually or in teams of two members. In the team category, each team must have exactly two members.
    `,
    rules:`•All Participants are expected to abide by the rules & regulations of the contest.
•	Participants can compete individually or in teams of two members.
•	The event has 2 rounds
•	Round 1: 7 questions (paper pen mode)
•	Round 2: 8 questions (Computer-Based Debugging Round).
•	Be on time and maintain the decorum discipline.
•	No malpractice can be accepted
•	Changing tabs / applications or using external editors are prohibited and consider as disqualified.
•	The participants must have a HackeRank ID.`,
    coordinates:`Nithyasri V G – 7092936067
    Gowtham M – 8825710552
    Dhanushri R - 7418587710.
    Naveed H - 8248072767
    `,
    form_link: "https://docs.google.com/forms/d/e/1FAIpQLSd0VZM5Z-dq3FdAzyJW71xXDKUa8xvpdv34gA2tTgIKTXjpAg/viewform?usp=sf_link",
    button: true,
  },
  {
    id: 6,
    poster: quiz,
    title: "QUIZILLA",
    description: `Prepare to delve into the fascinating world of technology, databases, and programming languages at Quizilla-The Ultimate Tech-Trivia Challenge! Whether you’re a seasoned Tech enthusiast or just dipping your toes into the digital realm, Quizilla offers an exciting opportunity to test knowledge and compete against fellow tech aficionados.`,
    rules:`
   • Maximum number of participants in a team is 2.
   • 2.Establish the registration process within deadlines for teams to sign up for the competition. 
   • 3.Topics and Format: The Questions will be in MCQs format
   • Round1 – The participants will be given 30 secs per Question
   • Round2 - The participants will be given 15 secs per Question
   • A complete point will be awarded for correct answers.
   • No-negative points and penalty provided.
   • Each round will follow a desired time limit according to the difficulty of the respective questions and round.
   • A fair play should be followed, each team will be monitored.
   • Accessing the external resources during the quiz lead to disqualification.`,
    
   

    coordinates:`Ramasubramanian S - 9789973893
                 Deepa M - 9361769514
                Joel Jacob B - 9841435881
                Sugetha D - 9786458595`,
    form_link: "https://docs.google.com/forms/d/e/1FAIpQLSd0VZM5Z-dq3FdAzyJW71xXDKUa8xvpdv34gA2tTgIKTXjpAg/viewform?usp=sf_link",
    button: true,
  },
  {
    id: 3,
    poster: connection,
    title: "CONNECTIONS",
    description: ` " Connections" is a captivating event where participants decipher a word or phrase through a sequence of images. As each image offers a clue, participants must employ observation, pattern recognition, and creativity to make connections. Join us in this immersive experience where every image holds a key, and participants unravel the puzzle together. Are you ready to connect the dots and reveal the hidden word or phrase?`,
    rules:`•  The maximum number of participants in a team is 2
   •	The event has 2 rounds
   •	Round 1: 20 questions (paper pen mode)
   •	Round 2: 10 questions (Buzzer round).
   •	Be on time and maintain the decorum discipline.
   •	Do not discuss with other teams.
   •	No slide will be displayed again.`,
    coordinates:`1. Dowlathnisa SB - 9962880271
    2. Mathew P - 8428445140`,
    form_link: "https://docs.google.com/forms/d/e/1FAIpQLSd0VZM5Z-dq3FdAzyJW71xXDKUa8xvpdv34gA2tTgIKTXjpAg/viewform?usp=sf_link",
    button: true,
  },
  {
    id: 1,
    poster: shoutkaro,
    title: "🔍 Shout Karo",
    description: `The Ultimate Sound Relay challenges teams of three to communicate through loud music, guessing, and relaying words in a thrilling team competition." In this event people need to guess the right answer when a person imitates through an Lip Sync. The two guessing people will be wearing headphones and a song will be played in their headphones despite which they need to find the right answer.`,
    rules:`• A team should contain 3 members.
    • Category of word to be guessed can be selected by the team members.
    • Time limit is 10 mins per team.
    • Out of 3 members, 1st person will make the other two person guess the word.
    • 1st person will convey the word to intermediate person.
    • Intermediate will guess and convey to the final member.
    • The intermediate and last member will be wearing headphones playing music.
    • Beyond the noise distraction, the team guessing more words and securing high points wins!`,
    coordinates:`1. Vallishree V - 9025840490
    2. Ezhilraj L - 9791017110`,
    form_link: "https://docs.google.com/forms/d/e/1FAIpQLSd0VZM5Z-dq3FdAzyJW71xXDKUa8xvpdv34gA2tTgIKTXjpAg/viewform?usp=sf_link",
    button: true,
  },

];

export default events;
