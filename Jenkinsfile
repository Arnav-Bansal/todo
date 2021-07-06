pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
       
     
    stage('Build') {
      steps {
       bat 'npm clean install'
       bat 'npm run build'
      
      }
    }
  }
}
