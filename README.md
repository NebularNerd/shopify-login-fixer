# shopify-login-fixer
A Tampermonkey/Greasemonkey (and other *monkey) script to fix the grey button issue on Shopify account login screens

## What is this thing?
For some reason the Shopify login screens seem to get stuck with the login buttons not changing from Grey when you enter your correct details. This means that you cannot login using your email/password combination which is very frustrating. This simple script deletes the `disabled` tag from the buttons allowing you to login.

![shopify-login-issue](https://github.com/NebularNerd/shopify-login-fixer/assets/8470449/43ad4a4f-2ad1-4e20-93ae-de5831c10521)

![shopify-login-issue-fixed](https://github.com/NebularNerd/shopify-login-fixer/assets/8470449/8f4d5796-a705-4992-9727-beddd20041c4)

**NOTE:** This is a brute force fix, the login will still fail if your details are incorrect, it simply makes the button always selectable/clickable.

## Features
- Quick and easy to use
- Should work with most &ast;monkey variants: Tested/Developed with Chrome Tampermonkey v4.18.1, Also tested on Firefox Greasemonkey 4.11 (from 2021)
- Auto updates if your &ast;monkey variant supports it

## Sounds great, how do I use it?
- The easiest way to install this is to click this link:  
[:floppy_disk: shopify-login-fixer.user.js](https://github.com/NebularNerd/shopify-login-fixer/raw/main/shopify-login-fixer.user.js)
most &ast;monkey's auto install features will then take care of things, this also can be used to manually trigger an update.
- **OR**, view the [shopify-login-fixer.user.js](/shopify-login-fixer.user.js) and then click the `RAW` button, if you wish to check out the code first.
- **OR**, Download or Copy/Paste the [shopify-login-fixer.user.js](/shopify-login-fixer.user.js) into your &ast;monkey, save and activate.  
 
The next time you visit either https://accounts.shopify.com/lookup or https://accounts.shopify.com/login the greyed out button will be forced active.
 
## License
Published under the [The Unlicense](/LICENSE)
- The check current URL code is derived from [resu @ Stackoverflow](https://stackoverflow.com/a/35038669) and is used under their [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) License

## Help fuel my caffine habbit
If you fancy buying me a :coffee: to say thanks, please visit my Ko-Fi page by hitting the button below.  

<p class="kofi" align="center">
  <a href="https://ko-fi.com/nebularnerd" title="Buy me a coffee on ko-fi"><img src="https://github.com/NebularNerd/YT-URL-Extractor/raw/main/pics/kofi_button_red.webp" width=45% /></a>
</p>

