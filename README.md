File: algorithms_documentation.md
Author: Your Name
Copyright: © 2023 Your Company Name

# Algorithms and Calculations Documentation

## Introduction

This document provides detailed documentation for the algorithms and calculations implemented in our product for monitoring body movements.

## Table of Contents

1. [Range of Motion Calculation](#range-of-motion-calculation)
2. [Surface EMG Calculation](#surface-emg-calculation)
3. [Color Coding Algorithm](#color-coding-algorithm)

## 1. Range of Motion Calculation

### 1.1. `getRangeGained` Function

The `getRangeGained` function calculates the range of motion gained during a specific exercise.

#### Parameters:

- `maxAngle` (number): The maximum angle reached during the exercise.
- `minAngle` (number): The minimum angle reached during the exercise.
- `bodypart` (string): The body part involved in the exercise (e.g., "Hip", "Shoulder", "Elbow", "Knee").
- `exercise_name` (string): The name of the exercise (e.g., "Adduction", "Extension").

#### Returns:

- `number`: The calculated range of motion gained.

#### Algorithm:

```javascript
// Include the JavaScript code for the getRangeGained function here.
// ...
