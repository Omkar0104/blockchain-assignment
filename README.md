
# Algorithms and Calculations Documentation

## Introduction

This document provides detailed documentation for the algorithms and calculations implemented in pheezee report.

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
function getRangeGained(maxAngle, minAngle, bodypart, exercise_name) {
    let maxVal = 0;

    if (bodypart === "Hip") {
        maxVal = maxAngle - minAngle;
    } else if (bodypart === "Shoulder" && exercise_name === "Adduction") {
        // Handle specific case for Shoulder Adduction exercise.
        maxVal = minAngle < 0 ? Math.abs(Math.min(minAngle, 0)) : 0;
        if (minAngle < 0 && maxAngle < 0) {
            maxVal = Math.abs(minAngle) - Math.abs(maxAngle);
        }
    } else if ((bodypart === "Elbow" || bodypart === "Knee") && exercise_name === "Extension") {
        // Handle specific case for Elbow or Knee Extension exercise.
        maxVal = Math.max(minAngle, 0);
    } else {
        // General case handling for other body parts and exercises.
        maxVal = Math.max(maxAngle - Math.max(minAngle, 0), 0);
    }

    return maxVal;
}

        
// ...
