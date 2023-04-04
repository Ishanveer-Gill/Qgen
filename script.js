$(document).ready(function(){
  
  function getQuote(){
    
    var quotes = ["Life happens wherever you are whether you make it or not.", "Pride is not the opposite of shame, but its source.", "It’s easy to do nothing, it’s hard to forgive.", "In the darkest of times, hope is something you give yourself.", "The greatest illusion of this world is the illusion of separation. Things you think are separate and different are actually one and the same. We are all one people, but we live as if divided.", "When we hit our lowest point, we are open to the greatest change.","If you don’t share someone’s pain, you can never understand them.", "The longer you live… The more you realize that reality is just made of pain, suffering and emptiness.", "Maybe, just maybe, there is no purpose in life… but if you linger a while longer in this world, you might discover something of value in it.", "Knowledge and awareness are vague, and perhaps better called illusions. Everyone lives within their own subjective interpretation.","In this world, there are very few people who actually trust each other."];
    
    var author = ["-Uncle Iroh", "-Uncle Iroh", "-Avatar Aang", "-Uncle Iroh", "-Guru Pathik", "-Avatar Aang", "-Nagato Uzamaki", "-Madara Uchiha", "-Orichimaru", "-Itachi Uchiha","-Light Yagami"];
    var randomNum = Math.floor((Math.random()*quotes.length));
    var randomQuote = quotes[randomNum];
    var randomAuthor = author[randomNum];
    
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
                     }
  $(".btn").on("click", function(){
    getQuote();
  });
  
});

  
  
    
   
