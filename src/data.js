const initialData = {
    cisCourses: {
        'cis210': {
            id: 'cis210',
            courseNum: 210, 
            courseTitle: 'Computer Science I',
            status: 1,
            preReq: [],
            termAvailability: ['fall', 'winter']
        },

        'cis211': {
           id: 'cis211',
           courseNum: 211, 
           courseTitle: 'Computer Science II', 
           status: 1,
           preReq: ['cis210'],
           termAvailability: ['winter', 'spring']
       },

       'cis212': {
           id: 'cis212',
           courseNum: 212, 
           courseTitle: 'Computer Science III',
           status: 1,
           preReq: ['cis211'],
           termAvailability: ['winter', 'spring']
       },

       'cis313': {
           id: 'cis313',
           courseNum: 313, 
           courseTitle: 'Intermediate Data Structures', 
           status: 1,
           preReq: ['cis212'],
           termAvailability: ['fall', 'winter']
       },

       'cis314': {
           id: 'cis314',
           courseNum: 314, 
           courseTitle: 'Computer Organization', 
           status: 1,
           preReq: ['cis212'],
           termAvailability: ['fall', 'winter']
       },

       'cis315': {
           id: 'cis315',
           courseNum: 315, 
           courseTitle: 'Intermediate Algorithms', 
           status: 1,
           preReq: ['cis313'],
           termAvailability: ['winter', 'spring']
       },

       'cis322': {
           id: 'cis322',
           courseNum: 322, 
           courseTitle: 'Introduction to Software Engineering', 
           status: 1,
           preReq: ['cis212'],
           termAvailability:['fall', 'spring']
       },

       'cis330': {
           id: 'cis330',
           courseNum: 330, 
           courseTitle:'C/C++ & Unix', 
           status: 1,
           preReq: ['cis314'],
           termAvailability:['winter', 'spring']
       },

       'cis399': {
            id: 'cis399',
            courseNum: 399, 
            courseTitle: 'Data Science', 
            status: 1,
            preReq: ['cis212'],
            termAvailability:['fall','winter', 'spring']
        },

        'cis401': {
            id: 'cis401',
            courseNum: 401, 
            courseTitle: 'CIS research', 
            status: 1,
            preReq: ['cis212'],
            termAvailability:['fall','winter', 'spring']
        },

        'cis403': {
            id: 'cis403',
            courseNum: 403, 
            courseTitle: 'CIS thesis', 
            status: 1,
            preReq: ['cis212'],
            termAvailability:['fall','winter', 'spring']
        },

        'cis404': {
            id: 'cis404',
            courseNum: 404, 
            courseTitle: 'Introduction to Internships', 
            status: 1,
            preReq: ['cis212'],
            termAvailability:['fall','winter', 'spring']
        },

        'cis405': {
            id: 'cis405',
            courseNum: 405, 
            courseTitle: 'CIS reading', 
            status: 1,
            preReq: ['cis212'],
            termAvailability:['fall','winter', 'spring']
        },

        'cis406': {
            id: 'cis406',
            courseNum: 406, 
            courseTitle: 'CIS specific field studies', 
            status: 1,
            preReq: ['cis212'],
            termAvailability:['fall','winter', 'spring']
        },

        'cis407': {
            id: 'cis401',
            courseNum: 401, 
            courseTitle: 'Internship', 
            status: 1,
            preReq: ['cis212'],
            termAvailability:['fall','winter', 'spring']
        },

        'cis408': {
            id: 'cis408',
            courseNum: 408, 
            courseTitle: 'CIS workshop', 
            status: 1,
            preReq: ['cis212'],
            termAvailability:['fall','winter', 'spring']
        },

        'cis409': {
            id: 'cis409',
            courseNum: 409, 
            courseTitle: 'CIS practicum', 
            status: 1,
            preReq: ['cis212'],
            termAvailability:['fall','winter', 'spring']
        },

        'cis410': {
            id: 'cis410',
            courseNum: 410, 
            courseTitle: 'Different Topics', 
            status: 1,
            preReq: ['cis212'],
            termAvailability:['fall','winter', 'spring']
        },

        'cis413': {
            id: 'cis413',
            courseNum: 413, 
            courseTitle: 'Advanced Data Structures', 
            status: 1,
            preReq: ['cis315'],
            termAvailability:['winter']
        },

        'cis415': {
            id: 'cis415',
            courseNum: 415, 
            courseTitle:'Operating Systems', 
            status: 1,
            preReq: ['cis313', 'cis330'],
            termAvailability:['fall', 'spring']
        },

        'cis420': {
            id: 'cis420',
            courseNum: 420, 
            courseTitle: 'Automata Theory', 
            status: 1,
            preReq: ['cis212'],
            termAvailability:['fall','winter', 'spring']
        },

        'cis422': {
            id: 'cis422',
            courseNum: 422, 
            courseTitle:'Software Methodology', 
            status: 1,
            preReq: ['cis313'],
            termAvailability:['fall','winter', 'spring']
        },

        'cis425': {
            id: 'cis425',
            courseNum: 425, 
            courseTitle: 'Principles of Programming Languages', 
            status: 1,
            preReq: ['cis315'],
            termAvailability:['fall', 'spring']
        },

        'cis427': {
            id: 'cis427',
            courseNum: 427, 
            courseTitle: 'Introduction to Logic', 
            status: 1,
            preReq: ['cis315', 'cis425'],
            termAvailability:['spring']
        },

        'cis431': {
            id: 'cis431',
            courseNum: 431, 
            courseTitle: 'Introduction to Parallel Computing', 
            status: 1,
            preReq: ['cis330'],
            termAvailability:['winter']
        },

        'cis432': {
            id: 'cis432',
            courseNum: 432, 
            courseTitle: 'Intro to Computer Networks', 
            status: 1,
            preReq: ['cis415'],
            termAvailability:['fall']
        },
        
    },

       columns: {   
           'cisLower': {
               id: 'cisLower',
               title: 'CIS Lower-Division ',
               taskIds: ['cis210', 'cis211', 'cis212']
           }, 

           'cisUpper': {
                id: 'cisUpper',
                title: 'CIS Upper Division ',
                taskIds: ['cis313', 'cis314', 'cis315', 'cis330']
           },

           'cisElective': {
                id: 'cisElective',
                title: 'CIS Elective',
                taskIds: [ 'cis322', 'cis401']
            },
           'Term1': {
               id: 'Term1',
               title: 'Term1',
               taskIds: []
           },

           'Term2': {
            id: 'Term2',
            title: 'Term2',
            taskIds: []
           },

           'Term3': {
            id: 'Term3',
            title: 'Term3',
            taskIds: []
           },
           
           'columnTaken':{
               id:"columnTaken",
               title: 'taken courses',
               taskIds:[],
           }
       },

       courseStandard: {
           'cisLower': ['cis210', 'cis211', 'cis212', 'math231', 'math232'],
           'cisUpper': ['cis313', 'cis314', 'cis315', 'cis330', 'cis415', 'cis422', 'cis425'],
           "cis_elective":["cis399", "cis401", "cis403", "cis404", "cis405", "cis406", "cis407", "cis408", "cis409", "cis410", "cis423", "cis420", "cis422", "cis427", "cis431", "cis432", "cis433", "cis441", "cis443", "cis445", "cis451", "cis453", "cis461", "cis471", "cis472"],
           'science': ["scienceSequence1", "scienceSequence2", "scienceSequence3"], 
           "math": ["mathGeneral1", "mathGeneral2", "mathSequence1", "mathSequence2", "mathUpper"],
           'writing': ['wr'],
       },

       columnOrder: ['cisLower', 'cisUpper', 'cisElective', 'Term1', 'Term2', 'Term3']
       
    
}

export default initialData;

// cisLowerStandard = {'cis210', 'cis211', 'cis212'} or extra field in each course
// findDict: "str" -> object

// data used for manipulation