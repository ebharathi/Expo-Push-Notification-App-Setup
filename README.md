# Welcome to your Expo app 👋

## React Native System Setup

I Recommend Cursor instead of VS-Code which is better since it has Github co-pilot pre-installed.Learn more about cursor in web.

You can follow the method to run emulator on your system which is recommended.Or else just skip to step-2

## STEP-1

## METHOD TO RUN EMULATOR IN YOUR SYSTEM

Then install jdk-17 and paste the bin path in user and system varibales of env
Then Android studio and install an virtual device, default it will have Pixel_Fold mobile ,but it is recommended to install some other phone devices.
After You will get SDK path from Android Studio -> SDK Manager, copy it
Go to ENV Settings and create these envs in system variables
ANDROID_HOME -->  C:\Users\{your_username}\AppData\Local\Android\Sdk
Also add the above sdk path in system and user variables

After the above steps,open cmd and go to C:\Users\{your_username}\AppData\Local\Android\Sdk\emulator
type : emulator -list-avds
You will get list of virtual devices installed
type : emulator.exe -avd "EMULATOR_NAME"
This will start the emulator,then follow the below steps

## STEP-2

## METHOD TO RUN IN MOBILE PHONE USING EXPO APP AND METRO

## Get started After cloning,go to project directory

1.npm i

## Run Command

2.npm start
Choose 'a' -> Run on expo app. Download expo mobile app on playstore and connect desktop with same mobile hostspot or vise versa.

## Basic Setups

Tailwind configuration (tailwind.config.js)
Typescript configuration (utils-> type.ts)
Global State Management : Instead of redux , 'Zustand' is used here. Refer store.ts file & internet.
Connecting backend : All api calls should be written as separate helper functions inside api.ts in utils and should be exported in tsx files

## Notes

components -> all design compoents files
constants -> for usage of mock datas
hooks -> creating custom hooks
assets -> for images
