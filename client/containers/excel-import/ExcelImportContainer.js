import React from 'react';

import * as entities from '../../constants/entity';
import * as titles from '../../constants/entity-title';
import ExcelImport from '../../../common-modules/client/components/excel-import/ExcelImport';

const title = 'העלאת קובץ';
const supportedEntities = [
  {
    value: entities.TEACHERS,
    title: titles.TEACHERS,
    columns: [
      'tz',
      'name',
      'phone',
      'school',
      'teacher_type_id',
      'price',
      'training_teacher',
      'student_tz_1',
      'student_tz_2',
      'student_tz_3',
    ],
  },
  { value: entities.STUDENTS, title: titles.STUDENTS, columns: ['tz', 'name'] },
  // { value: entities.ATT_TYPES, title: titles.ATT_TYPES, columns: ['key', 'name'] },
  // { value: entities.TEACHER_TYPES, title: titles.TEACHER_TYPES, columns: ['key', 'name'] },
  // { value: entities.PRICES, title: titles.PRICES, columns: ['key', 'name'] },
];

const ExcelImportContainer = () => {
  return <ExcelImport title={title} supportedEntities={supportedEntities} />;
};

export default ExcelImportContainer;
