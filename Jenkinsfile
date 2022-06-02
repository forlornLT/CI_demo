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
                bat 'd: & cd d:\\weiwork\\todo-list\\todo-list & npm help npm'
            }
        }
        stage('Deploy') {
            steps {
                echo 'This is a deploy.'
            }
        }
    }
}
