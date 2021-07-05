pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/Arnav-Bansal/todo'
        sh 'java -version'
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
