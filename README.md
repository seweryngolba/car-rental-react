# Car Rental Website

This repository contains the code for a car rental website. The website allows users to explore and rent various cars, view customer reviews, learn about the company's services, and get in touch with customer support.

## Live Demo

Check out the live demo of the project: [Demo page](https://seweryngolba.github.io/car-rental-react/)

## Table of Contents

- [Introduction](#introduction)
- [Components](#components)
- [Styling](#styling)
- [Functionality](#functionality)
- [Responsiveness](#responsiveness)
- [External Libraries](#external-libraries)
- [Data](#data)

## Introduction

The car rental website provides a modern and user-friendly interface for users to interact with different sections, including exploring available cars, making reservations, reading customer reviews, and getting information about the company's services.

## Components

The website is composed of several key components:

- `Home`: The main landing page that introduces the website's offerings.
- `Navbar`: A navigation bar for easy access to different sections.
- `Footer`: The footer section with company information and social media links.
- `CompanyPros`: A section showcasing the company's advantages.
- `AboutUs`: Information about the company's mission and services.
- `Hero`: The hero section with a call to action.
- `OurCars`: Display of available cars with details.
- `ReviewSlider`: Slider to display customer reviews.
- `Reviews`: Section to showcase customer reviews.
- `ContactUs`: Contact details and information.
- `FormBox`: Form for users to input their reservation details.
- `Payment`: Form for entering credit card payment information.
- `LastStep`: Confirmation page after completing the reservation process.
- `Reservation`: Page for the complete reservation process.

## Styling

The styling for each component is defined in separate CSS files, providing a consistent and visually appealing design across the website. Media queries ensure responsiveness across different devices.

## Functionality

The website's functionality includes:

- Car selection and details display in the `OurCars` component.
- User information input and cost calculation in the `FormBox` component.
- Payment processing using the `Payment` component.
- Confirmation display in the `LastStep` component.
- Customer reviews showcased through the `ReviewSlider` component.
- Navigation between sections using the `Navbar`.

## Responsiveness

The website is designed to be responsive across various screen sizes. Media queries and layout adjustments ensure optimal display on desktops, tablets, and mobile phones.

## External Libraries

The website utilizes external libraries:

- `react-router-dom` for navigation and routing.
- `react-slick` for the reviews slider.
- `react-credit-cards` for the payment card input.

## Data

Car data, reviews data, and a cost calculation function are stored separately and imported as needed for dynamic content display.
