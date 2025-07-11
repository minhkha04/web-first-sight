//substring nếu start lớn hơn end thì hàm sẽ tự đảo lại còn slice thì ko.
//nếu nhập vào số âm thì slice sẽ cắt từ cuối lên đầu còn substring thì sẽ chuyển start và end thì 0
let course = [
    {
        id: 1,
        name: "Javascript",
        coin: 0
    },
    {
        id: 2,
        name: "Ruby",
        coin: 200
    },
    {
        id: 3,
        name: "C/C++",
        coin: 50
    },
    {
        id: 4,
        name: "Java",
        coin: 100
    },
    {
        id: 5,
        name: "HTML",
        coin: 0
    },
    {
        id: 6,
        name: "C/C++",
        coin: 50
    },
];

//duyệt qua tất cả phần tử trong mảng
course.forEach(function(course) {
    console.log(course);
})
//kiểm tra tất cả phần tử chỉ cần 1 phần tử sai đều kiện thì return false 
let isFree = course.every(function (course) {
    console.log(course.id);
    return course.coin == 0;
})
console.log(isFree);
//kiểm tra phần tử trong mảng nếu thảo mãng điều kện thì return true
let isFreeV2 = course.some(function (course) {
    console.log(course.id);
    return course.coin == 0;
})
console.log(isFreeV2);
//tìm kiếm phần tử trong mảng nếu có return phần tử đó nếu ko return undefined 
let findCourse = course.find(function (course) {
    return course.name == "Java123";
})
console.log(findCourse);
//như find nhưng mà trả về tất cả các phần tử thỏa điều kiện trong mảng
let findCourses = course.filter(function (course){
    return course.name == "C/C++";
})
console.log(findCourses);
console.log("new");
// tạo ra mảng mới (ứng dụng trong việc hiện ra màn)
let newCourse = course.map(function(course, index) {
    return {
        id: course.id,
        name: "Course: " + course.name,
        coin: course.coin,
        TextCoin: course.coin + "K",
        index: index
    }
});
console.log(newCourse);
let i = 0;


let totalCoin = course.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.coin;
}, 0);
console.log(totalCoin);

//xóa phần tử cuối mảng và trả về phần tử đó
console.log(newCourse.pop());
//thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài của mảng sau khi thêm
newCourse.push();
//xóa phần tử đầu mảng và return phần tử đó
newCourse.shift();
//thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng
newCourse.unshift();
//nối magng 1 với mảng 
console.log(newCourse);

