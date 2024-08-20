let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes=[ 
    {
      quote: `"Above our life we love a steadfast friend."`,
      person: `Christopher Marlowe`
      
    },{
        quote: `"Hope and change? We're not doing that anymore. They're doing attack and blame. And so, I just think people are going to see through this. They want real leadership. They want us to get this country on the right track."`,
        person: `Paul Ryan`
        
      }, {
        quote: `"I, for one, am tired of seeing movies about men damaging each other."`,
        person: "Vera Farmiga"
      },{
        quote:`"In my early professional years I was asking the question: How can I treat, or cure, or change this person? Now I would phrase the question in this way: How can I provide a relationship which this person may use for his own personal growth?"`,
        person: `Carl Rogers`
      }, {
        quote: `"My parents thought it was nice to develop my imagination, but they never seriously thought that anything would ever come of it. They said that I couldn't be an actress because I would be taller than all my leading men, so I thought I would be a writer instead."`,
        person: `Nicole Kidman`
        
      }, {
        quote: `"Every day is a new opportunity. You can build on yesterday's success or put its failures behind and start over again. That's the way life is, with a new game every day, and that's the way baseball is."`,
        person: `Bob Feller`
        
      },  {
        quote: `"From the very start of all of this, my mom has read the scripts first. And if she liked something, she let me read it. She told our agent what kinds of parts that we would want."`,
        person: `Anna Chlumsky`
       
      }, {
        quote: `"Although as a sailor I despised politics - for I loved my sailor's life and still love it today - conditions forced me to take up a definite attitude towards political problems."`,
        person: `Fritz Sauckel`
      
      }, {
        quote: `"True life is lived when tiny changes occur."`,
        person: `Leo Tolstoy`
      }, {
        quote: `"I got into shape because I took kick-boxing lessons every day to prepare for a fight scene with Taylor Lautner. I really wanted to lie down and eat Chinese food, but I kick-boxed every morning and ran. If someone was filming you with your kit off, you'd do the same thing."`,
        person: `Jason Isaacs`
      },
  ];
  btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
  })