/**
 * @api {get} "/v1/students Lista todos los estudiantes con todos sus campos.
 * @apiName GetStudents
 * @apiGroup Student
 * @apiSuccess {Object} students Arreglo de todos los estudiantes.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "students":[{"id":"6264d5d89f1df827eb84bb23","name":"Warren","email":"Todd@visualpartnership.xyz","credits":508,"enrollments":["Visual Thinking Intermedio","Visual Thinking Avanzado"],"previousCourses":1,"haveCertification":true},
 *              {"id":"6264d5d85cf81c496446b67f","name":"Lucinda","email":"Sexton@visualpartnership.xyz","credits":677,"enrollments":["Visual Thinking Avanzado"],"previousCourses":6,"haveCertification":true}]
 *     }
 */
/**
 * @api {get} "/v1/studentsCertificated Lista los emails de todos los estudiantes que tengan certificación haveCertification
 * @apiName studentsCertificated
 * @apiGroup Student
 * @apiSuccess {Object} studentsCertificated Arreglo con  los emails que cumplen el requisito.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {"studentsCertificated":["Todd@visualpartnership.xyz","Sexton@visualpartnership.xyz","Sharlene@visualpartnership.xyz","Howell@visualpartnership.xyz",
 *      "Haynes@visualpartnership.xyz","Montoya@visualpartnership.xyz","Benton@visualpartnership.xyz","Dionne@visualpartnership.xyz","Mcpherson@visualpartnership.xyz",
 *      "Gracie@visualpartnership.xyz","Ila@visualpartnership.xyz","Dorthy@visualpartnership.xyz","Mcfarland@visualpartnership.xyz","Maryann@visualpartnership.xyz",
 *      "Alana@visualpartnership.xyz","Rosemary@visualpartnership.xyz","Keith@visualpartnership.xyz","Delaney@visualpartnership.xyz","Ball@visualpartnership.xyz",
 *      "Sally@visualpartnership.xyz","Antoinette@visualpartnership.xyz","Juliette@visualpartnership.xyz","Harding@visualpartnership.xyz","Dixon@visualpartnership.xyz",
 *      "Beulah@visualpartnership.xyz","Moses@visualpartnership.xyz","Shields@visualpartnership.xyz","Jewell@visualpartnership.xyz","Hays@visualpartnership.xyz"]}
 */
 /** 
 * @api {get} "/v1/studentsWithCredits Lista todos los estudiantes  que tengan credits mayor a 500.
 * @apiName studentsCredits
 * @apiGroup Student
 * @apiSuccess {Object} students Arreglo de los estudiantes que cumplen el requisito.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK 
 *      {"students":[{"id":"6264d5d89f1df827eb84bb23","name":"Warren","email":"Todd@visualpartnership.xyz","credits":508,"enrollments":["Visual Thinking Intermedio","Visual Thinking Avanzado"],"previousCourses":1,"haveCertification":true},
 *      {"id":"6264d5d85cf81c496446b67f","name":"Lucinda","email":"Sexton@visualpartnership.xyz","credits":677,"enrollments":["Visual Thinking Avanzado"],"previousCourses":6,"haveCertification":true},
 *      {"id":"6264d5d8dd1a0be4e249c662","name":"Phillips","email":"Camacho@visualpartnership.xyz","credits":973,"enrollments":["Visual Thinking Intermedio"],"previousCourses":8,"haveCertification":false}]
 * }
 */
  