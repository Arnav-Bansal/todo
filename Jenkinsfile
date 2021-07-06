pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
/*    stage('Git') {
      steps {
        sh 'git@github.com:Arnav-Bansal/todo.git'
      }
    }*/
     
    stage('Build') {
      steps {
       bat 'npm clean install'
       bat 'npm run build'
      
      }
    }
  }
}
