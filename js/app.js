


var flatarray = [
    {
        topic: "front-end",
        course : [
            {
                id: 1,
                title : "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "back-end",
        course : [
            {
                id: 1,
                title : "PHP"
            },
            {
                id: 2,
                title: "SQL"
            }
        ]
    }

];

var newcourse = flatarray.reduce(function (arrayrong, course) {
    return arrayrong.concat(course);
}, []);



console.log(newcourse);


var htmla = newcourse.map(function (course) {
    return `
        <div>
            <h2>  Khóa Học: ${course.topic}  </h2>
            <p> id: ${course.id} </p>
            <p> Name: ${course.title} </p>
        </div>
    `
})



console.log(htmla.join(''));


var inputElement = document.querySelector('#input-search');

inputElement.oninput = function (Event) {
    console.log(Event.target.value);
}


// e.stopPropagation