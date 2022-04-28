# Code Challenger LaunchX
Visual Partner-Ship te ha asignado el siguiente proyecto:
Requerimientos:

 - Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
 - Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
 - Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.
  
# Diseño de componentes
<<<<<<< HEAD
```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
=======
Se ha diseñado un API con 3 endpoints diferentes, para ello se ocupa un divide el flujo donde el componente *Server* es el encargado de recibir las peticiones y direccionarlas al Controlador *StudentController* que a su vez hace uso del Servicio *StudentService* que utiliza un componente *Reader* para leer el archivo con los datos en formato JSON.
```mermaid
flowchart TD
    A[Server] --> B[StudentController]
    B --> C[StudentService]
    C --> D[Reader]
```
Para cumplir los requerimientos se diseñaron 3 clases
```mermaid
 classDiagram
     class StudentController{
          +static getAllStudents()
          +static getMailWithCertification()
          +static getStudentsByCredits(credits)
      }
      class StudentService{
          +static getAllStudents(students)
          +static getMailWithCertification(students)
          +static getStudentsByCredits(students,credits)
      }
      class Reader{
          +static readJsonFile(file)
      }

>>>>>>> 2a1fb9f79e84f69a80782993089b75ed61c03e0a
```
# Dependencias
<ul>
  <li>JEST</li>
  <li>Eslint</li>
  <li>Express</li>
</ul>
# Funcionamiento del API
