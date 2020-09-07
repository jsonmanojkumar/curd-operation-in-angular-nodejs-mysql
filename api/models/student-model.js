var db = require('../Database/db')
var dateFormat = require('dateformat')

let model = {
    getStudents: (cb) => {
        return db.query("SELECT * FROM student", cb)
    },
    getStudent: (id, cb) => {
        return db.query("SELECT * FROM student WHERE id=?", [id], cb)
    },
    addStudent: (input, cb) => {

        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');

        let data = {
            name: input.name,
            age: input.age,
            mobile: input.mobile,
            is_active: input.is_active,
            created_at: currentDate
        }
        return db.query("INSERT INTO student SET ?", [data], cb)
    },
    updateStudent: (input, cb) => {
        let data = {
            name: input.name,
            age: input.age,
            mobile: input.mobile,
            is_active: input.is_active,
        }
        return db.query("UPDATE student SET ? WHERE id=?", [data, input.id], cb)
    },
    deleteStudent: (id, cb) => {
        return db.query("DELETE FROM student WHERE id=?", [id], cb);
    }
}

module.exports = model;
