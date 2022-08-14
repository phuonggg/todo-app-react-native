# todo-app-react-native

https://user-images.githubusercontent.com/52077647/184537743-bc6e8c19-fb56-49f9-952b-5fa760d91d7e.mov

<!-- ABOUT THE PROJECT -->
## About The Project

Todo App with local authentication and CRUD operations (create, read, update, delete todos).


### Built With

* **React Native:** Mobile app on iOS/Android
* **Expo Local Authentication:** authenticate users Athenticate users (using FaceID and TouchID (iOS) or the Biometric Prompt (Android) if those were already set up, otherwise using device passcode)
* **Redux Toolkit:** state management (maybe overkill for this project but effective when increasing project scope in the future with more complicated state management) 


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Node 14 or newer

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/phuonggg/todo-app-react-native.git
   ```
2. Install dependacies
   ```sh
   yarn
   ```
3. Install pod
   ```js
   cd ios
   pod install
   ```
4. Start server (inside project folder root)
   ```sh
   yarn start
   ```
5. Run app on iOS simulator (Open a new terminal inside project folder root)
   ```sh
   yarn ios
   ```
6. Run app on Android emulator (Open a new terminal inside project folder root)
   ```sh
   yarn android
   ```
