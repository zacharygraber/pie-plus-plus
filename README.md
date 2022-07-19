# About PIE++
PIE++ (or "p3" for short) is a Chrome extension that adds some much-needed quality of life features to Indiana University's internal tool PIE (Personnel Information Environment) including:
- WIP  

Features to be implemented in the future include:
- Seamlessly download queried historical data to a local file (e.g. CSV or JSON), such as Inventory Reports, Location Evaluations, and Community Notes.
- Set a custom home screen (landing page) for each PIE instance
- Toggle on/off a "return to top" button on articles (they can sometimes get very long)

# Follow this project
You can sign up for automated Github email reports (triggered on things like `push` events) by subscribing to the p3-gh-notifs-l@iu.edu mailing list [here](https://list.iu.edu/sympa/info/p3-gh-notifs-l)!

# Contributing
This project is (and will always be) open-source; any and all are encouraged to contribute.

**Have an idea for a feature, but don't know how to code?** - [Submit a feature request](https://github.com/zacharygraber/pie-plus-plus/issues/new?assignees=&labels=&template=feature_request.md&title=) through Github Issues! 

This guide will assume that you are a total noob to Git/Github.
  
## Prerequisites:
- Google Chrome (obviously) **version 92+**
- [Node.JS version 16](https://nodejs.org/en/)
- [Git](https://git-scm.com/downloads)

## Getting things ready:
1. Run the following command from the terminal of your choice to clone the repository into a new folder in the cwd (download the source code):

   ```
   git clone https://github.com/zacharygraber/pie-plus-plus.git
   ```
2. Enter the new directory with `cd ./pie-plus-plus`
3. Open up the `pie-plus-plus/src` folder in the editor of your choice ([VSCode](https://code.visualstudio.com/download) works well)  
    - Refer to the documentation (***TODO***) for an explanation of each file/folder, as well as tutorials and examples for editing/adding functionality.
4. That's it--You're ready to get to work! PIE++ is designed to be very portable.

## Building the extension:
After ***every change you make*** to `.js` files, including both content scripts and the background service worker, you will need to rebuild the project. This is necessary due to project dependencies, namely the [webextension-polyfill](https://github.com/mozilla/webextension-polyfill) library from Mozilla. 

1. Open a terminal in the root directory of the `pie-plus-plus` folder (you can verify this with `pwd` on linux/bash or `echo %cd%` on Windows).
2. All build settings should already be configured in `webpack.config.js`, so unless you are adding files (or new dependencies) you shouldn't need to do much.
3. Run the following command in your terminal (again, from the project's root directory):  
    ```
    npx webpack build
    ```

## Testing:
PIE++ does not currently have any automated unit/integration tests, although we hope to implement these in the future. Testing out the extension in-browser is easy, though.
1. Open up Google Chrome
2. Navigate to the Extensions page by typing `chrome://extensions` in the navigation bar or via `three dots -> More Tools -> Extensions`  

    <p align="center"><img height="300px" src="https://user-images.githubusercontent.com/60680903/179127236-6c9b559f-e304-4d84-b584-627501baeb28.png" /></p>
    
3. Ensure that *Developer Mode* is toggled on, then click on `Load Unpacked`.  

    <p align="center"><img src="https://user-images.githubusercontent.com/60680903/179127891-f73f9771-d90a-4daf-b321-2377f56b94ec.png" /></p>
    
4. A dialogue box should pop up. Select the `pie-plus-plus/extension` folder, then click `Select Folder`.  
5. You should now see the PIE++ extension in your list.  
***NOTE:*** You will need to reload the extension after **every** change you make with the small refresh icon in the bottom-right corner. If your new changes aren't reflected in the browser, make sure you have also rebuilt the application--[see above](#building-the-extension).  

    <p align="center"><img src="https://user-images.githubusercontent.com/60680903/179128727-e8ec7218-2b1a-4bac-984d-c793c131fc4e.png" /></p>
