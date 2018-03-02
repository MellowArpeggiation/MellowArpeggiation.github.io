# How different sites answer the question:
> How do you check if two numbers are equal in Javascript?

## Stackoverflow
Oh easy, make sure you include jQuery first
```js
var value1 = 1,
    value2 = 1;

if ($(value1).is($(value2))) {
    // W00t?
}
```

## Yahoo answers
```js
value1 =value2
```

Source: my brother who does programming

## Quora
Answered by: Travis Halvorson, PhD in Computer Science

To find out whether or not two numbers are equal we must first determine how these numbers are stored...

I checked SO to see if they had a reasonable answer to this question, and unsurprisingly they didn't have anything good.

I can't stand Stackoverflow. As someone who has a PhD in Software Engineering, I can't tell you the number of times I've banged my head against the wall, and I ask a question from time to time. Like how do I get proper exchange of data from a java server to a c# clients readbytes. It's a harder question than it sounds, but you get some 15 year old kid closing your thread.

To me, most people have problems reading at a college level, so to discourage someone from programming, because the moderator wants to feel superior is deplorable.

Besides, learning is messy business. It looks messy, it feels messy, and it can be painful to look at. SO directly hurts education and severly limits knowledge, due to it's need for drawing within the lines. More laws and rules are not what people need.

You could argue that it's a private site and it has a right to act that way, but when you spam google search results, with clean but mostly unhelpful code it kills efficiency in finding the right answer or direction.

Anyway, here is a working answer

```js
var value1 = Number(1);
var value2 = Number(1);

if (!isNaN(value1) && !isNaN(value2) && value1 === value2) {
    // Did I also mention I have a PhD??
}
```

## Formspring
> Anonymous asked: How do you find if two numbers are equal?

What? Who are you?

## Experts Exchange
### BEST SOLUTION
```
Please sign up to read the actually useful answer, schmuck

               |SELL SOUL|       |NO THANKS|
```

### THE OTHER SOLUTIONS
Oh easy, make sure you include jQuery first... _(gp: I wish I was kidding)_