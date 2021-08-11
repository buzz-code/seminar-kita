import DashboardIcon from '@material-ui/icons/Dashboard';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PeopleIcon from '@material-ui/icons/People';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ListIcon from '@material-ui/icons/List';
import GroupIcon from '@material-ui/icons/Group';
import ChatIcon from '@material-ui/icons/Chat';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EventNoteIcon from '@material-ui/icons/EventNote';
import MenuIcon from '@material-ui/icons/Menu';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PrintIcon from '@material-ui/icons/Print';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import StorageIcon from '@material-ui/icons/Storage';

import * as entities from './entity';
import * as titles from './entity-title';

import Dashboard from '../containers/dashboard/DashboardContainer';
import Teachers from '../containers/teachers/TeachersContainer';
import Students from '../containers/students/StudentsContainer';
import AttTypes from '../containers/att-types/AttTypesContainer';
import TeacherTypes from '../containers/teacher-types/TeacherTypesContainer';
import Prices from '../containers/prices/PricesContainer';
import Texts from '../containers/texts/TextsContainer';
import AttReports from '../containers/att-reports/AttReportsContainer';
import ExcelImport from '../containers/excel-import/ExcelImportContainer';

export default [
  [
    {
      path: '/dashboard',
      component: Dashboard,
      icon: DashboardIcon,
      title: titles.DASHBOARD,
      props: { entity: entities.DASHBOARD, title: titles.DASHBOARD },
    },
    {
      path: '/teachers',
      component: Teachers,
      icon: SupervisedUserCircleIcon,
      title: titles.TEACHERS,
      props: { entity: entities.TEACHERS, title: titles.TEACHERS },
    },
    {
      path: '/students',
      component: Students,
      icon: PeopleIcon,
      title: titles.STUDENTS,
      props: { entity: entities.STUDENTS, title: titles.STUDENTS },
    },
    {
      path: '/att-types',
      component: AttTypes,
      icon: MenuIcon,
      title: titles.ATT_TYPES,
      props: { entity: entities.ATT_TYPES, title: titles.ATT_TYPES },
    },
    {
      path: '/teacher-types',
      component: TeacherTypes,
      icon: MenuIcon,
      title: titles.TEACHER_TYPES,
      props: { entity: entities.TEACHER_TYPES, title: titles.TEACHER_TYPES },
    },
    {
      path: '/prices',
      component: Prices,
      icon: MenuIcon,
      title: titles.PRICES,
      props: { entity: entities.PRICES, title: titles.PRICES },
    },
    {
      path: '/texts',
      component: Texts,
      icon: ChatIcon,
      title: titles.TEXTS,
      props: { entity: entities.TEXTS, title: titles.TEXTS },
    },
  ],
  [{ path: '/excel-import', component: ExcelImport, icon: FileCopyIcon, title: 'העלאת קבצים' }],
  [
    {
      path: '/att-reports',
      component: AttReports,
      icon: StorageIcon,
      title: titles.ATT_REPORTS,
      props: { entity: entities.ATT_REPORTS, title: titles.ATT_REPORTS },
    },
  ],
];
