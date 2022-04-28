# Code Challenger LaunchX
Visual Partner-Ship te ha asignado el siguiente proyecto:
Requerimientos:

 - Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
 - Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
 - Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.
  
# Diseño de componentes
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
      Animal <|-- Duck
      Animal <|-- Fish
      Animal <|-- Zebra
      Animal : +int age
      Animal : +String gender
      Animal: +isMammal()
      Animal: +mate()
      class Duck{
          +String beakColor
          +swim()
          +quack()
      }
      class Fish{
          -int sizeInFeet
          -canEat()
      }
      class Zebra{
          +bool is_wild
          +run()
      }

```
# Dependencias
# Funcionamiento del API
