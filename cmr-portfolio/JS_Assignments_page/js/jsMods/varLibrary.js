var produce = [
    ' eggs ',
    ' cheese ',
    ' chocolate ',
    ' ice-cream '
];

var detailedProduceList = [
    {
        produceName: 'eggs',
        type: 'organic',
        shape: 'oval',
        color: 'brown',
        flavor: 'good'
    },
    {
        produceName: 'cheese',
        type: 'organic',
        shape: 'square',
        color: 'yellow',
        flavor: 'smooth'
    },    
    {
        produceName: 'chocolate',
        type: 'organic',
        shape: 'rectangle',
        color: 'dark-brown',
        flavor: 'sweet'
    },    
    {
        produceName: 'ice-cream',
        type: 'organic',
        shape: 'cylinder',
        color: 'white',
        flavor: 'creamy-goodness'
    }
];

const madLib = 'Star Wars is a (adjective) (noun) of (adjective) versus evil in a (noun;_place) far far away. There are (adjective) battles between (adjective) (plural_noun;_vehicle) in (adjective) space and (adjective) duels with (plural_noun) called (adjective) sabers. (Plural_noun) called "droids" are helpers and (plural_noun) to the heros. A (adjective) power called The (noun) (verb)s people to do (adjective) things, like (verb) (plural_noun). The Jedi (plural_noun;_type_of_job) use The Force for the (adjective) side and the Sith (verb) it for the (adjective) side.'


export default {
    madLib: madLib,
    produce: produce,
    detailedProduceList: detailedProduceList
};