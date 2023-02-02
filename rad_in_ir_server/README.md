In this directory lies the back-end portion of our application.

We implemented the back-end using Java Spring Boot with Maven to run it.

For more information about this project as a whole, please refer to the provided document titled "Documentation Guide"

For more technical information about this project, please refer to the provided document titled "Developers Manual"

# Initial Setup Instructions

We recommend using Visual Studio Code to run our project.

We have the following extensions installed for Spring Boot in Visual Studio Code. Visual Studio Code can automatically recognize what extensions you need as you go, so we did not have to manually download any of these, it gave us pop-ups telling us to install them. However, if you have issues with running the backend, try going ahead and making sure to install all of these. (d) which contains a Maven plugin is most important, because Maven is what allows our Java Spring Boot app to run.

https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug 
https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-initializr 
https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency 
https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven 
https://marketplace.visualstudio.com/items?itemName=redhat.java 
https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test 
https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack 

To run the application, first navigate to the file GettingRadInIR/rad_in_ir_server/src/main/java/com/osuwmc/rad_in_ir_server/RadInIrServerApplication.java

Right click on the file in the side menu and select “Run Java”. “Run Code” will NOT work. If the “Run Java” option is not displaying make sure you have the right extensions installed for Visual Studio Code
This step will likely have errors until the database is set up, as described in the provided document titled "Developers Manual".

You can see the backend running on http://localhost:8080/ and see if some of the GET requests from our MainController.java are returning data, for example, on http://localhost:8080/server/allvideos 

# Running Instructions

After initial setup, to run in the future, all that is required is to first navigate to the file GettingRadInIR/rad_in_ir_server/src/main/java/com/osuwmc/rad_in_ir_server/RadInIrServerApplication.java, and then right click on the file in the side menu and select “Run Java”. “Run Code” will NOT work.