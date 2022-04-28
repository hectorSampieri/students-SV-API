/**
 * @api {get} "/v1/students Lista todos los estudiantes con todos sus campos.
 * @apiName GetStudents
 * @apiGroup Student
 * @apiSuccess {Object} students Arreglo de todos los estudiantes.
 */
/**
 * @api {get} "/v1/studentsCertificated Lista los emails de todos los estudiantes que tengan certificación haveCertification
 * @apiName studentsCertificated
 * @apiGroup Student
 * @apiSuccess {Object} studentsCertificated Arreglo con  los emails que cumplen el requisito.
 */
 /** 
 * @api {get} "/v1/studentsWithCredits Lista todos los estudiantes  que tengan credits mayor a 500.
 * @apiName studentsCredits
 * @apiGroup Student
 * @apiSuccess {Object} students Arreglo de los estudiantes que cumplen el requisito.
 */