# Mini Module - Notification Banner

A simple and reusable React component to display styled notification banners based on the type of message.

##  Objective

Create a **reusable `NotificationBanner` React component** that:

- Displays a message to the user.
- Adapts styling based on notification type (`success`, `error`, `warning`, `info`).
- Uses **PropTypes** for validation.

## 📋 Tasks Completed

###  1. Create Component Structure
- Defined a functional component named `NotificationBanner`.

###  2. Receive Props
- Accepted `type` and `message` as props.
- Used destructuring to extract the values.

###  3. Render UI Based on Type
- Displayed the message inside a banner.
- Applied different background colors based on `type`:
  - ✅ Green for success
  - ❌ Red for error
  - ⚠️ Yellow for warning
  - ℹ️ Blue for info

###  4. Add PropTypes Validation
- `type`: one of `["success", "error", "warning", "info"]` (**required**)
- `message`: string (**required**)

##  Component Usage

```jsx
<NotificationBanner type="success" message="Operation completed successfully!" />
<NotificationBanner type="error" message="Something went wrong!" />
<NotificationBanner type="warning" message="Warning: Please check your input." />
<NotificationBanner type="info" message="For your information only." />
```
## Output
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/684e2792-306c-4a72-8055-fd1fad7fc9c3" />

## Deployment Link
https://harsayazheni.github.io/Notification-Banner/
