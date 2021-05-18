Exam.lowercase_count = function (str) {
    const count = 0;
    var i;
    for (i = 0; i < str.length; i++) {
        if (i === i.toLowerCase()) {
            count = count + 1;
        }
    }
    return count;
};