# API - Student WEB Service 

This web service created to provide an API that returned JSON objects of students.  
All the requests should be in GET methods.


***


## Get All Students

in order to obtain all the students:
``` 
GET	http://student-ex1.herokuapp.com/all 
```
the result will be an JSON object containing an "students" key and an array with all the objects.           
#### for Example:

```javascript
{
    "students": [
                {
                  "id": 1,
                  "name": "Avi ",
                  "university": "Ben gurion",
                  "year": "1",
                  "average": 81
                }
		...
        ]
}
```
---

## Get Student By ID

in order to obtain specific student from the lsit:
``` 
GET	http://student-ex1.herokuapp.com/student/:<id number>
```

 **<id number>**: should be number of id of student from the list.
 
#### for Example:
``` 	
http://student-ex1.herokuapp.com/student/2
```
```javascript
    {
      "id": 2,
      "name": "Bono",
      "university": "Ben gurion",
      "year": "2",
      "average": 95
    }
``` 
***
## Get Student From University

in order to obtain specific student from the lsit:
```html
GET	http://student-ex1.herokuapp.com/university/:<university>
```

**<university>**: should be a name of university from the list. 

#### for Example:
``` 	
http://student-ex1.herokuapp.com/university/Shenkar
```
```javascript
 {
	0: {
		id: 3,
		name: "Carin",
		university: "Shenkar",
		year: "3",
		average: 76
	},

	1: {
		id: 4,
		name: "David",
		university: "Shenkar",
		year: "2",
		average: 69
	}
}
``` 




