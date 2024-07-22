# Welcome to your Expo app 👋

## React Native System Setup

I Recommend Cursor instead of VS-Code which is better since it has Github co-pilot pre-installed.Learn more about cursor in web.

You can follow the method to run emulator on your system which is recommended.Or else just skip to step-2

## STEP-1

## METHOD TO RUN EMULATOR IN YOUR SYSTEM

Then install jdk-17 and paste the bin path in user and system varibales of env<br/>
Then Android studio and install an virtual device, default it will have Pixel_Fold mobile ,but it is recommended to install some other phone devices.<br/>
After You will get SDK path from Android Studio -> SDK Manager, copy it<br/>
Go to ENV Settings and create these envs in system variables<br/>
ANDROID_HOME -->  C:\Users\{your_username}\AppData\Local\Android\Sdk<br/>
Also add the above sdk path in system and user variables<br/>

After the above steps,open cmd and go to C:\Users\{your_username}\AppData\Local\Android\Sdk\emulator<br/>
type : emulator -list-avds<br/>
You will get list of virtual devices installed<br/>
type : emulator.exe -avd "EMULATOR_NAME"<br/>
This will start the emulator,then follow the below steps<br/>

## STEP-2

## METHOD TO RUN IN MOBILE PHONE USING EXPO APP AND METRO

## Get started After cloning,go to project directory

1.npm i

## Run Command

2.npm start<br/>
Choose 'a' -> Run on expo app. Download expo mobile app on playstore and connect desktop with same mobile hostspot or vise versa.<br/>

## Basic Setups

Tailwind configuration (tailwind.config.js)<br/>
Typescript configuration (utils-> type.ts)<br/>
Global State Management : Instead of redux , 'Zustand' is used here. Refer store.ts file & internet.<br/>
Connecting backend : All api calls should be written as separate helper functions inside api.ts in utils and should be exported in tsx files<br/>

## Notes

components -> all design compoents files<br/>
constants -> for usage of mock datas<br/>
hooks -> creating custom hooks<br/>
assets -> for images<br/>


![image](https://github.com/user-attachments/assets/af122f75-c7d5-48fe-90a5-4b4d97d09077)
