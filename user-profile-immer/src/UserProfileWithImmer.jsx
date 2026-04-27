import { useImmer } from "use-immer";
import { useState } from "react";

export default function UserProfileWithImmer() {
  const [userProfile, updateUserProfile] = useImmer({
    name: "",
    email: "",
    contactDetails: {
      phone: "",
      address: ""
    },
    preferences: {
      newsletter: false,
      notifications: true
    }
  });

  // Local input state for controlled fields
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [addressInput, setAddressInput] = useState("");

  // Update name directly using Immer
  const updateName = () => {
    updateUserProfile(draft => {
      draft.name = nameInput;
    });
  };

  // Update nested contact details
  const updateContactDetails = () => {
    updateUserProfile(draft => {
      draft.contactDetails.phone = phoneInput;
      draft.contactDetails.address = addressInput;
    });
  };

  // Toggle newsletter subscription
  const toggleNewsletterSubscription = () => {
    updateUserProfile(draft => {
      draft.preferences.newsletter = !draft.preferences.newsletter;
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>User Profile (useImmer)</h2>

      {/* Name Input */}
      <label>
        Name:
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
      </label>
      <button onClick={updateName}>Update Name</button>

      <br /><br />

      {/* Phone Input */}
      <label>
        Phone:
        <input
          type="text"
          value={phoneInput}
          onChange={(e) => setPhoneInput(e.target.value)}
        />
      </label>

      {/* Address Input */}
      <label>
        Address:
        <input
          type="text"
          value={addressInput}
          onChange={(e) => setAddressInput(e.target.value)}
        />
      </label>

      <button onClick={updateContactDetails}>Update Contact Details</button>

      <br /><br />

      {/* Newsletter Toggle */}
      <label>
        Subscribe to Newsletter:
        <input
          type="checkbox"
          checked={userProfile.preferences.newsletter}
          onChange={toggleNewsletterSubscription}
        />
      </label>

      <br /><br />

      {/* Display Current State */}
      <h3>Current Profile State</h3>
      <pre style={{ background: "#f4f4f4", padding: "10px" }}>
        {JSON.stringify(userProfile, null, 2)}
      </pre>
    </div>
  );
}
