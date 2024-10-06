pipeline { 
    agent any

    environment { 

        REGISTRY = "krishanudb/about_me_page" 
        registryCredential = 'da1b9a03-322b-4ae9-916f-8b5174433199' 
        dockerImage = 'about_me_page' 
        EC2_USER = 'ec2-user'
        EC2_HOST = '107.23.235.120'
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

                    dockerImage = docker.build(REGISTRY + ":$BUILD_NUMBER") 

                }

            } 

        }

        stage('Push new image to Registry') { 

            steps { 

                script { 

                    docker.withRegistry( '', registryCredential ) { 

                        dockerImage.push() 

                    }

                } 

            }

        }
        stage ("Pull Image and Start  Container") {
            steps {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'dockerHost', 
                                transfers: [
                                    sshTransfer(
                                        cleanRemote: false, 
                                        excludes: '', 
                                        execCommand: '''
                                        docker pull ''' + REGISTRY + ''':${BUILD_NUMBER}
                                        docker stop about_me_page_container
                                        docker rm about_me_page_container 
                                        docker run -d --name about_me_page_container -p 80:80 ''' + REGISTRY + ''':${BUILD_NUMBER}
                                        ''', 
                                        execTimeout: 120000, 
                                        flatten: false, 
                                        makeEmptyDirs: false, 
                                        noDefaultExcludes: false, 
                                        patternSeparator: '[, ]+', 
                                        remoteDirectory: '', 
                                        remoteDirectorySDF: false, 
                                        removePrefix: '', 
                                        sourceFiles: '')
                                    ], 
                                usePromotionTimestamp: false, 
                                useWorkspaceInPromotion: false, 
                                verbose: true
                            )
                        ]
                    )
                }
            }
        }

        stage('Cleaning up') { 

            steps { 

                sh "docker rmi $registry:$BUILD_NUMBER" 

            }

        } 

    }

}