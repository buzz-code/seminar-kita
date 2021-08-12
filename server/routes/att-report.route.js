import * as attReportCtrl from '../controllers/att-report.controller';
import genericRoute from '../../common-modules/server/routes/generic.route';

const router = genericRoute(attReportCtrl, router => {
    router.route('/get-edit-data')
        .get((req, res) => {
            attReportCtrl.getEditData(req, res);
        });

    router.route('/getTrainingReport')
        .get((req, res) => {
            attReportCtrl.getTrainingReport(req, res);
        });

    router.route('/getManhaReport')
        .get((req, res) => {
            attReportCtrl.getManhaReport(req, res);
        });

    router.route('/getResponsibleReport')
        .get((req, res) => {
            attReportCtrl.getResponsibleReport(req, res);
        });
});

export default router;