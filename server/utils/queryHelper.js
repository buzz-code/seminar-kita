// import Klass from "../models/klass.model";
// import Teacher from "../models/teacher.model";
// import AttType from "../models/att-type.model";
import User from "../models/user.model";
// import StudentKlass from "../models/student-klass.model";
// import Lesson from "../models/lesson.model";
// import Group from "../models/group.model";

export function getUserByPhone(phone_number) {
    return new User().where({ phone_number })
        .fetch()
        .then(res => res.toJSON());
}

// export function getTeacherByUserIdAndPhone(user_id, phone) {
//     return new Teacher().where({ user_id, phone })
//         .fetch({ require: false })
//         .then(res => res ? res.toJSON() : null);
// }

// export function getKlassByUserIdAndKlassId(user_id, key) {
//     return new Klass().where({ user_id, key })
//         .fetch({ require: false })
//         .then(res => res ? res.toJSON() : null);
// }

// export function getLessonByUserIdAndLessonId(user_id, key) {
//     return new Lesson().where({ user_id, key })
//         .fetch({ require: false })
//         .then(res => res ? res.toJSON() : null);
// }

// export function getStudentsByUserIdAndKlassId(user_id, klass_id) {
//     return new StudentKlass().where({ user_id, klass_id })
//         .fetchAll({ withRelated: ['student'] })
//         .then(res => res.toJSON())
//         .then(res => res.map(item => item.student));
// }

// export function getAttTypesByUserId(user_id) {
//     return new AttType().where({ user_id, is_active: true, is_for_teacher: true })
//         .fetchAll()
//         .then(res => res.toJSON());
// }

// export async function getDiaryDataByGroupId(group_id) {
//     const group = await new Group().where({ id: group_id })
//         .fetch({ withRelated: ['klass', 'teacher', 'lesson'] })
//         .then(res => res.toJSON());
//     const students = await getStudentsByUserIdAndKlassId(group.user_id, group.klass_id);

//     return { group, students };
// }
