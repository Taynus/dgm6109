"use strict"

/**
 * Variable principal que contiene todas las observaciones de recolección de datos.
 * Cada objeto representa una comida preparada o consumida.
 */
let mealDataObservations = [
    {   
        dish: "Chicken fajitas",
        durationMinutes: 41, // Time in minutes
        frequency: "Single", // Times that I cooked the same dish
        method: "Timer",
        repetitionCount: 1,
        isNewRecipe: true, // Boolean 
        mastery: "Improvisation",
        location: "In House",
        date: "2026-01-25",
        score: 3.5, // Score from 1 to 5
        outcentive: "Low",
        mood: "Creative to try by myselft"
    },
    {
        dish: "Lima Beans / burger / rice",
        durationMinutes: 90.5,
        frequency: "Single",
        method: "Timer",
        repetitionCount: 1,
        isNewRecipe: true,
        mastery: "Follow recipe",
        location: "In House",
        date: "2026-01-26",
        score: 3,
        outcentive: "Medium",
        mood: "Not too inspired"
    },
    {
        dish: "Lentils / pork / rice",
        durationMinutes: 70.25,
        frequency: "Single",
        method: "Timer",
        repetitionCount: 1,
        isNewRecipe: true,
        mastery: "Follow recipe",
        location: "In House",
        date: "2026-01-27",
        score: 4,
        outcentive: "Low",
        mood: "Inspired to cook some complex dish"
    },
    {
        dish: "Lentils / pork (Leftovers)",
        durationMinutes: 10,
        frequency: "Repeat",
        method: "Timer",
        repetitionCount: 2,
        isNewRecipe: false,
        mastery: "Reheated",
        location: "In House (Reheated)",
        date: "2026-01-28",
        score: 4,
        outcentive: "Very Low",
        mood: "I do a lot the last day and I just reheated"
    },
    {
        dish: "Quinoa and chicken",
        durationMinutes: 34,
        frequency: "Single",
        method: "Timer",
        repetitionCount: 1,
        isNewRecipe: true,
        mastery: "Follow recipe",
        location: "In House",
        date: "2026-01-29",
        score: 5,
        outcentive: "Low",
        mood: "Inspired to cook"
    },
    {
        dish: "Chicken Salad",
        durationMinutes: 23,
        frequency: "Single",
        method: "Timer",
        repetitionCount: 1,
        isNewRecipe: true,
        mastery: "Improvisation",
        location: "In House",
        date: "2026-01-30",
        score: 3,
        outcentive: "Medium",
        mood: "Creative to try by myselft"
    },
    {
        dish: "Spaghetti Bolognese",
        durationMinutes: 20,
        frequency: "Single",
        method: "Timer",
        repetitionCount: 2,
        isNewRecipe: false,
        mastery: "Follow recipe",
        location: "In House",
        date: "2026-01-31",
        score: 5,
        outcentive: "Low",
        mood: "Try to discover new flavors"
    },
    {
        dish: "Soup (Out)",
        durationMinutes: 0, // N/A
        frequency: "Single",
        method: "Checkbox",
        repetitionCount: 1,
        isNewRecipe: null,
        mastery: null,
        location: "Eat Out",
        date: "2026-02-01",
        score: 0,
        outcentive: "High",
        mood: "N/A"
    },
    {
        dish: "Burgers / rice / fries",
        durationMinutes: 25,
        frequency: "Single",
        method: "Timer",
        repetitionCount: 1,
        isNewRecipe: true,
        mastery: "Improvisation",
        location: "In House",
        date: "2026-02-02",
        score: 4,
        outcentive: "Low",
        mood: "Not too inspired"
    },
    {
        dish: "Tuna with rice",
        durationMinutes: 23,
        frequency: "Single",
        method: "Timer",
        repetitionCount: 1,
        isNewRecipe: true,
        mastery: "Improvisation",
        location: "In House",
        date: "2026-02-03",
        score: 3,
        outcentive: "Medium",
        mood: "Not too inspired"
    },
    {
        dish: "Soup (Home)",
        durationMinutes: 38,
        frequency: "Single",
        method: "Timer",
        repetitionCount: 1,
        isNewRecipe: true,
        mastery: "Follow recipe",
        location: "In House",
        date: "2026-02-04",
        score: 3,
        outcentive: "Medium",
        mood: "Try to discover new flavors"
    },
    {
        dish: "McDonalds",
        durationMinutes: 0,
        frequency: "Single",
        method: "Checkbox",
        repetitionCount: 1,
        isNewRecipe: null,
        mastery: null,
        location: "Eat Out",
        date: "2026-02-05",
        score: 0,
        outcentive: "High",
        mood: "N/A"
    },
    {
        dish: "Spaghetti Bolognese",
        durationMinutes: 20,
        frequency: "Repeat",
        method: "Timer",
        repetitionCount: 2,
        isNewRecipe: false,
        mastery: "By memory",
        location: "In House (2nd time)",
        date: "2026-02-06",
        score: 5,
        outcentive: "Low",
        mood: "Creative to try by myselft"
    },
    {
        dish: "Tuna fajitas",
        durationMinutes: 20,
        frequency: "Single",
        method: "Timer",
        repetitionCount: 1,
        isNewRecipe: true,
        mastery: "Improvisation",
        location: "In House",
        date: "2026-02-07",
        score: 5,
        outcentive: "Low",
        mood: "Creative to try by myselft"
    },
    {
        dish: "Tuna salad",
        durationMinutes: 15,
        frequency: "Single",
        method: "Timer",
        repetitionCount: 1,
        isNewRecipe: true,
        mastery: "Improvisation",
        location: "In House",
        date: "2026-02-08",
        score: 5,
        outcentive: "Low",
        mood: "Not too inspired"
    }
]; // End of the list of meal observations


// console.log(JSON.stringify(mealDataObservations));
showData(mealDataObservations);

