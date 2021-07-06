pipeline {
  agent any
    
  tools {nodejs "nodejs"}
    
  stages {
        
    stage('Git') {
      steps {
        sh 'git@github.com:Arnav-Bansal/todo.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'sudo npm clean install'
         sh 'sudo npm run build'
      }
    }
  }
}
