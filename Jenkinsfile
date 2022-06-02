pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                echo '11'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'This is a deploy.'
            }
        }
    }
}