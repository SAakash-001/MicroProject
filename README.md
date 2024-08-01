# Student Enrollment Form

## Description
This project is a Student Enrollment Form for managing student data using JsonPowerDB. The form allows users to save, update, and reset student records. It ensures data integrity by validating input fields and checks for existing records based on the primary key (Roll No). 

## Benefits of using JsonPowerDB
- **Real-time data**: JsonPowerDB provides real-time data retrieval and storage capabilities.
- **Ease of use**: Simple REST APIs for performing database operations.
- **Schema-less database**: Flexible and dynamic structure, allowing easy modifications without the need for migrations.
- **High performance**: Optimized for performance with low-latency operations.
- **Minimal setup**: Easy to set up and integrate with existing applications.

## Release History
- **v1.0.0**: Initial release with basic functionalities including saving, updating, and resetting student records.

## Table of Contents
- [Description](#description)
- [Benefits of using JsonPowerDB](#benefits-of-using-jsonpowerdb)
- [Release History](#release-history)
- [Illustrations](#illustrations)
- [Scope of functionalities](#scope-of-functionalities)
- [Examples of use](#examples-of-use)
- [Project status](#project-status)
- [Sources](#sources)

## Illustrations
![Form Screenshot](![schoolform](https://github.com/user-attachments/assets/9aca8f3f-e146-4252-8f68-4d513d5b4350)
)

## Scope of functionalities
- **Save student record**: Save new student data to the database.
- **Update student record**: Update existing student data based on the primary key.
- **Reset form**: Reset all form fields to their initial state.
- **Form validation**: Ensure no empty fields before saving or updating data.
- **Primary key check**: Check for existing records based on the primary key and load data if available.

## Examples of use
1. **Saving a new student record**:
   - Enter a unique Roll No.
   - Fill in all other fields (Full Name, Class, Birth Date, Address, Enrollment Date).
   - Click on the "Save" button to store the data in the database.
2. **Updating an existing student record**:
   - Enter an existing Roll No.
   - The form will load the corresponding student data.
   - Modify any field as needed.
   - Click on the "Update" button to update the data in the database.
3. **Resetting the form**:
   - Click on the "Reset" button to clear all fields and disable inputs.

## Project status
- The project is in its initial release stage with basic functionalities implemented.
- Future enhancements may include more robust validation, additional fields, and improved UI.

## Sources
- [JsonPowerDB Official Documentation](http://login2explore.com/jpdb/docs.html)
- [Bootstrap Documentation](https://getbootstrap.com/docs/3.4/getting-started/)
- [jQuery Documentation](https://api.jquery.com/)

## Other information
- This project was developed as a micro project to demonstrate the integration of JsonPowerDB with a simple web form.
- Contributions and suggestions for improvement are welcome.
