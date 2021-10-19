import bookshelf from '../../common-modules/server/config/bookshelf';
import { seminarKitaPrices } from './pricesHelper';

const student_columns = [
    'student_1_1_att_type',
    'student_1_2_att_type',
    'student_1_3_att_type',
    'student_1_4_att_type',
    'student_1_5_att_type',
    'student_2_1_att_type',
    'student_2_2_att_type',
    'student_2_3_att_type',
    'student_2_4_att_type',
    'student_2_5_att_type',
    'student_3_1_att_type',
    'student_3_2_att_type',
    'student_3_3_att_type',
    'student_3_4_att_type',
    'student_3_5_att_type',
];

const seminarKitaPriceDict = {
    1: seminarKitaPrices.watch,
    2: seminarKitaPrices.teach,
    3: seminarKitaPrices.discuss,
    4: seminarKitaPrices.absence,
};

function getSeminarKitaSelector(lessonType) {
    return bookshelf.knex.raw('(' +
        student_columns.map(item => 'COALESCE(' + item + ', 0) = ' + lessonType).join(') + (')
        + ')');
}

export function getSeminarKitaLessonCount(lessonCount) {
    const res = {};
    for (var i = 1; i <= lessonCount; i++) {
        res['lesson_' + i] = getSeminarKitaSelector(i);
    }
    return res;
}

export function getSeminarKitaTotalPay(lessonCount) {
    const query = [];
    for (var i = 1; i <= lessonCount; i++) {
        query.push('(SELECT lesson_' + i + ') * ' + seminarKitaPriceDict[i]);
    }

    return bookshelf.knex.raw('(' + query.join(' + ') + ')');
}
