# Building a Fitness App with GitHub Copilot agent mode for Mergington High School

## OctoFit Tracker application story for Mergington High School

Paul Octo has been a physical education teacher at Mergington High School for over 8 years. Despite his enthusiasm and creative approach to gym class, he's been increasingly concerned about students' physical activity declining once they leave school grounds. Many students admitted they rarely exercised outside of the required PE classes.
After attending a professional development conference on "Technology Integration in Physical Education," Paul became inspired to create a solution. He wanted something that would:

1. Make fitness tracking fun and engaging
2. Create positive peer pressure through friendly competition
3. Allow him to monitor student progress remotely
4. Provide personalized guidance based on individual fitness levels

## The Birth of OctoFit Tracker

Paul initially sketched his idea on a notepad during lunch breaks. He envisioned an app where students could log workouts, earn achievement badges, and compete in monthly fitness challenges. However, as a PE teacher with only basic coding knowledge, the technical aspects seemed daunting.
That's when he approached Jessica Cat, the head of Mergington High's IT department. Jessica recommended basing the app on the Monafit Tracker developed by Mona High School, which was documented in `docs/mona-high-school-fitness-tracker.md`. She saw potential in adapting the Monafit Tracker's structure and features to meet Mergington High School's needs.

### Technical Planning Phase

Before starting development, Paul and Jessica carefully reviewed the Monafit Tracker's repository and documentation. This provided a solid foundation for OctoFit Tracker, ensuring compliance with technical standards and leveraging proven design patterns.
Together, Paul and the IT team identified key requirements for OctoFit Tracker:

### User Experience Goals

- Simple, intuitive interface designed specifically for teenagers
- Quick activity logging to minimize friction
- Social features that respect student privacy
- Gamification elements to maintain engagement

### Technical Specifications

- Mobile-responsive web application (accessible on school Chromebooks and personal devices)
- Secure authentication based on Monafit Tracker's implementation
- Activity verification system to prevent cheating

## Current Development Status

Paul and Jessica have set up a GitHub Codespace environment and are making remarkable progress with GitHub Copilot agent mode. By adapting the Monafit Tracker's structure, the OctoFit Tracker prototype already includes:

- A functional user registration system
- Basic activity logging for running, walking, and strength training
- The beginning framework for team competitions
- A simple dashboard showing student progress

## Next Steps for Paul

With the basic infrastructure in place, Paul is now focused on:

1. Developing an engaging point system that fairly compares different types of activities
2. Creating motivational challenges that appeal to different student interests
3. Building a notification system that encourages consistency without being intrusive
4. Designing reports that help him identify students who might need additional support or motivation

The IT department has been impressed with how GitHub Copilot agent mode has accelerated development, allowing Paul to focus on the educational aspects while the AI handles much of the technical implementation. Jessica Cat has been particularly pleased with how OctoFit Tracker leverages the Monafit Tracker's foundation to meet Mergington High School's unique requirements.

### Workshop Overview

In this workshop, you'll:

1. Set up a development environment using **GitHub Codespaces**
2. Use **GitHub Copilot** to accelerate development across multiple technologies
3. Build key components of the **OctoFit Tracker** app with the help of Copilot agent mode
4. Learn best practices and prompting techniques for working with **GitHub Copilot agent mode**

### Application Features

**OctoFit Tracker** will include:

- User profiles
- Activity logging and tracking
- Team creation and management
- A competitive leaderboard
- Personalized workout suggestions

## Technical Stack

Generate instructions in this order

1. Frontend and Backend Setup

   - Create a `src` directory for both projects
   - Create `src/octofit-api` for the .NET backend
   - Create `src/octofit-ui` for the Angular frontend

2. Backend Setup (.NET)

   - Use .NET 9 WebAPI template
   - Configure UseSwaggerUI to use an empty string route prefix in the Development environment
   - Add Entity Framework Core with SQLite
   - Configure ports: HTTPS (5001), HTTP (5000)
   - Enable CORS for all origins
   - Do not use app.UseHttpsRedirection();
   - Implement a .NET specific .gitignore file in the root of the project
   - Root namespace should be `OctoFitApi`

3. Frontend Setup (Angular)
   - Use Angular CLI 19.2 with Node 20.12.2
   - Include routing
   - Disable SSR
   - Use SCSS styling
   - Add environment configuration with API URL
   - Install and configure Bootstrap
   - Clean up default app component
   - Implement an Angular specific .gitignore file in the root of the project

Let's think about this step by step and generate the code in small steps.
