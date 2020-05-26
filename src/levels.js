const Levels = {
    spriteFilenames: {
        'g':    'Mid', // pointy edges with squiggly
        'l':    'Left', // rounded left side with squiggly
        'r':    'Right', // rounded right side with squiggly
        'c':    'Center_rounded', // rounded with squiggly
        'b':    '', // rounded with squiggly
        'i':    'Center', // pointed edgges no squiggly
        'v':    'CliffLeftAlt', // left inner cliff curve
        'u':    'CliffRightAlt', // right inner cliff curve
        'p':    'CliffLeft', // left outer cliff curve
        't':    'CliffRight', // right outer cliff curve
        // 'd':    ''
        // hazrds below ///////////////
        'a':    '', // pointy lava
        // 't':    'Top_mid'
        // 'b':    'Center_rounded'
    },
    0 : {
        level: [
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
            [ 0 , 0 ,'l','g','g','g','g','r', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            ['b', 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'p','t', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'v','g','u', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'c', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            ['b', 0 , 0 , 0 , 0 , 0 , 0 ,'p','g','g','g','g','t', 0 , 0 , 0 , 0 ,'c', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 ,'p','g','g','t', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 ,'c', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'o'], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','r', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'d'], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','g','g','r', 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'v','g','g'], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','g','g','g','t', 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 ,'c', 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','g','g','r', 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 ,'l','a','a','a','a','a','r', 0 , 0 ,'l','g','g','g','r','k', 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            ['l','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','a','a','a','a','a','a','a','a','a','a'], 
        ],
        startPos: [20 ,600], // actual start pos
        // startPos: [857,143], // testing starting pos
        type: 'sand',
        background: 'assets/Backgrounds/desert.jpg',
        hazardType: 'Lava'
    },
    1: {
        level: [
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'k', 0 , 0 , 0 , 0 ],
            ['l','g','a','a','a','g','g','a','a','a','g','g','g','g','g','g','r', 0 , 0 , 0 , 0 , 0 ,'v','g','u', 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','a','a','a','r', 0 , 0 ,'i', 0 ,'b', 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','g','g','g','r', 0 , 0 ,'i', 0 , 0 , 0 ,'b'], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 ,'b', 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'l','g','r', 0 , 0 , 0 , 0 ], 
            [ 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 ,'p','t', 0 , 0 ,'l','i','i','i','r', 0 , 0 , 0 ], 
            [ 0 ,'l','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','i','i','i', 0 , 0 , 0 , 0 ,'b'], 
            [ 0 ,'p','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','r','i','i', 0 , 0 , 0 ,'b', 0 ], 
            [ 0 , 0 , 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'i','i','r', 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'i','i','i','r', 0 ,'o', 0 ], 
            [ 0 , 0 , 0 ,'b', 0 , 0 , 0 ,'b', 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,'d','b'], 
            ['l','g','g','g','g','g','g','g','a','a','a','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','r'], 
        ],
        // startPos: [ 0 ,0 ],
        startPos: [ 792 ,43 ],
        type: 'grass',
        background: 'assets/Backgrounds/grass.jpg',
        hazardType: 'Water'

    },
    2 : {
        level: [
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            ['l','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g'], 
        ],
        startPos: [20 ,410],
        type: 'stone',
        background: 'assets/Backgrounds/rock.jpg',
    },
    3 : {
        level: [
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ], 
            ['l','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g'], 
        ],
        startPos: [20 ,410],
        type: 'snow',
        background: 'assets/Backgrounds/snow.jpg',
    },
}
// types: grass, snow, sand, dirt, stone

// module.exports = levels;
export default Levels;