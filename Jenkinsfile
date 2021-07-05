pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        sh 'java -version'
        git 'https://github.com/Arnav-Bansal/todo'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm clean install'
         sh 'npm run build'
      }
    }
  }
}
