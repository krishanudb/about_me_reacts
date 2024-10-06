pipeline { 
    agent any

    environment { 

        registry = "krishanudb/about_me_page" 

        registryCredential = 'da1b9a03-322b-4ae9-916f-8b5174433199' 

        dockerImage = 'about_me_page' 

    }

    stages { 

        stage('Cloning our Git') { 

            steps { 

               git branch: 'main', credentialsId: '844d30b0-2978-427f-ab39-3b0d2e14bfd7', url: 'https://github.com/krishanudb/about_me_reacts.git'

            }

        } 

        stage('Building our image') { 

            steps { 

                script { 

                    dockerImage = docker.build(registry + ":$BUILD_NUMBER") 

                }

            } 

        }

        stage('Deploy our image') { 

            steps { 

                script { 

                    docker.withRegistry( '', registryCredential ) { 

                        dockerImage.push() 

                    }

                } 

            }

        }
        stage ("Last Step Done") {
            steps {
                sh 'echo "Last Step Done"'
            }
        }

        stage('Cleaning up') { 

            steps { 

                sh "docker rmi $registry:$BUILD_NUMBER" 

            }

        } 

    }

}