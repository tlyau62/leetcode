# DevOps
DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to **deliver applications and services at high velocity**: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes. This speed enables organizations to better serve their customers and compete more effectively in the market.

# Continuous Integration (CI)
Continuous integration is a DevOps **software development practice where developers regularly merge their code changes into a central repository, after which automated builds and tests are run**. Continuous integration most often refers to the build or integration stage of the software release process and entails both an automation component (e.g. a CI or build service) and a cultural component (e.g. learning to integrate frequently). The key goals of continuous integration are to find and address bugs quicker, improve software quality, and reduce the time it takes to validate and release new software updates.

## Overview
<img src="devops/what-is-continuous-integration.PNG">

- Shared codebase (source code)
  1. AWS CodeCommit
  2. GitHub
- Automated checks (build & test)
  1. AWS CodeBuild
- Glue (linking up developer, shared codebase, automated checks)
  1. Amazon CloudWatch Events
  2. AWS Lambda

## AWS CodeBuild
<img src="devops/aws-code-build.PNG">

- Project: the source provider, e.g. AWS CodeCommit, GitHub
- Project details/Build specification: tell CodeBuild how to build the project<img src="devops/aws-code-build-spec.PNG">
  - artifacts: tell zip what files and upload to AWS S3
- Build environment: Docker image (including builds tools, testing tools)

## Three techniques
1. Nightly checks
- run a full build and unit tests every night to make sure that application still compiles and that tests still pass

# Continuous Delivery (CD)
- a DevOps software development practice where code changes are automatically built, tested, and prepared for a release to production
- expand upon continuous integration by deploying all code changes to a testing environment and/or a production environment after the build stage
- When continuous delivery is implemented properly, developers will always have a deployment-ready build artifact that has passed through a standardized test process. 
- let developers automate testing beyond just unit tests so they can verify application updates across multiple dimensions before deploying to customers. These tests may include UI testing, load testing, integration testing, API reliability testing, etc. This helps developers more thoroughly validate updates and pre-emptively discover issues. With the cloud, it is easy and cost-effective to automate the creation and replication of multiple environments for testing, which was previously difficult to do on-premises

# Videos Resource
- Continuous Integration Best Practices for Software Development [https://www.youtube.com/watch?v=GEPJ7Lo346A&feature=youtu.be]