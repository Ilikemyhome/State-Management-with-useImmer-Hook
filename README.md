# State-Management-with-useImmer-Hook

This project demonstrates how to manage deeply nested React state using the useImmer hook from the use-immer package. Immer allows you to write updates in a mutation‑style syntax while still preserving React’s immutability rules. This makes complex state updates cleaner, easier to read, and far less error‑prone.

The assignment focuses on updating a user profile object that contains nested fields such as contact details and user preferences.

## Objectives
Use the useImmer hook to manage nested state.

Update deeply nested objects without spread operators.

Build a simple UI that updates and displays the user profile in real time.

Maintain clean, readable component logic.


## Test Cases
### Normal Test Cases
    Updating the name should immediately change the name field in the displayed state.

    Entering a phone number should update contactDetails.phone.

    Entering an address should update contactDetails.address.

    Toggling the newsletter checkbox should flip the newsletter boolean.

    Performing multiple updates in a row should correctly update all nested fields without overwriting unrelated data.

### Edge Test Cases
    Entering an empty string for the name should result in an empty name field.

    Entering symbols or non‑numeric characters in the phone field should still update the state (no validation is required).

    Extremely long addresses should still be stored without breaking the UI.

    Rapidly toggling the newsletter checkbox should consistently flip the boolean without stale state issues.

    Updating only one contact detail, phone or address, should leave the other field unchanged.